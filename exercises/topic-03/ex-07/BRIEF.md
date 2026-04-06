# Exercise 07 — Hard · CI/CD · Topic 03: App Router file conventions & route segments

## Objective

Add a Continuous Deployment step to the existing GitHub Actions pipeline so that every push to `main` automatically deploys the app to the Hetzner cluster using `helm upgrade --install`. After this exercise, the full CI/CD loop is closed: code push → image build → image push → cluster deploy — all automated.

In Topic 01 ex 07 you built the pipeline that builds and pushes the Docker image.
In Topic 02 ex 07 you added the Helm chart and ran `helm install` manually.
This exercise automates the deploy step.

## Materials

### Current pipeline state

After Topic 01 ex 07, the workflow builds and pushes the image but stops there:

```yaml
# .github/workflows/ci.yml (current state, abbreviated)
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository_owner }}/saas-layouts:${{ github.sha }}
```

### What to add: a deploy job

Add a second job `deploy` that runs after `build` succeeds, only on the `main` branch:

```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  steps:
    - uses: actions/checkout@v4

    - name: Set up kubectl
      uses: azure/setup-kubectl@v3

    - name: Set up Helm
      uses: azure/setup-helm@v3

    - name: Configure kubeconfig
      run: |
        mkdir -p $HOME/.kube
        echo "${{ secrets.KUBECONFIG }}" > $HOME/.kube/config
        chmod 600 $HOME/.kube/config

    - name: Deploy with Helm
      run: |
        helm upgrade --install saas-layouts \
          ./exercises/topic-02/solution/helm/saas-topic-02 \
          --set image.tag=${{ github.sha }} \
          --namespace default \
          --wait \
          --timeout 120s
```

### Required GitHub secret

| Secret name | Content |
|---|---|
| `KUBECONFIG` | The full contents of your `~/.kube/config` pointing to the Hetzner cluster |

Add it in: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

### Verifying the deploy

After the workflow runs, check the cluster:

```bash
kubectl get pods -n default
kubectl get deploy -n default
```

The pod should show `Running` with the new image SHA as the tag.

### helm upgrade --install flags explained

| Flag | Purpose |
|---|---|
| `--install` | Create the release if it does not exist yet |
| `--wait` | Block until all pods are ready (or timeout) |
| `--timeout 120s` | Fail the pipeline if deploy takes too long |
| `--set image.tag=...` | Override the tag with the git SHA from CI |

## Acceptance Criteria

- [ ] The GitHub Actions workflow has a `deploy` job that runs only on `main`, after `build` succeeds
- [ ] The `deploy` job configures `kubectl` and `helm` using the official setup actions
- [ ] Kubeconfig is stored as a GitHub Actions secret named `KUBECONFIG` — never hardcoded
- [ ] `helm upgrade --install` uses `--wait` and `--timeout 120s`
- [ ] The image tag passed to Helm is `${{ github.sha }}` — matching the tag built in the `build` job
- [ ] A push to `main` triggers a full pipeline run that ends with the new pod running on the cluster
- [ ] `kubectl get pods -n default` shows the pod in `Running` state with a recent `AGE` (provide output as proof)

## Constraints

- The `KUBECONFIG` secret must never be echoed or printed in logs — use `> file` redirection, not `echo $SECRET`
- Do not hard-code the cluster endpoint or credentials in the workflow file
- The deploy job must depend on `build` via `needs: build` — never deploy a potentially broken image
- Each exercise keeps its Helm chart inside its own solution folder — the chart path in the `helm upgrade` command must point to `exercises/topic-02/solution/helm/saas-topic-02`

## Suggested resources

- https://helm.sh/docs/helm/helm_upgrade/
- https://github.com/azure/setup-kubectl
- https://github.com/azure/setup-helm
- https://docs.github.com/en/actions/security-guides/encrypted-secrets

## Niveau de rigueur

Le pipeline doit fonctionner de bout en bout.
L'image doit être construite, poussée, et déployée automatiquement sur le cluster.
Les manifests Kubernetes doivent être valides et idiomatiques.
