# Exercise 07 — Hard · CI/CD · Topic 02: Utility fundamentals for SaaS UI

## Objective

Add a Helm chart skeleton to the project and perform a first manual deployment to the Hetzner cluster using `helm install`. In Topic 01, you built the Docker image and pushed it to the GitHub Container Registry (ghcr.io). This exercise adds the Kubernetes packaging layer: a Helm chart that describes how to run the image as a Deployment and Service on the cluster.

The CI/CD pipeline is not yet automated in this exercise — that comes in Topic 03. Here, you focus on understanding the Helm chart structure and executing a successful manual install.

## Materials

### Helm chart structure

Each exercise keeps its Helm chart inside its own solution folder. For this exercise:

```
exercises/topic-02/solution/helm/
└── saas-topic-02/
    ├── Chart.yaml
    ├── values.yaml
    └── templates/
        ├── deployment.yaml
        ├── service.yaml
        └── _helpers.tpl
```

### Chart.yaml

```yaml
apiVersion: v2
name: saas-layouts
description: Next.js SaaS layouts app
type: application
version: 0.1.0
appVersion: "latest"
```

### values.yaml skeleton

```yaml
replicaCount: 1

image:
  repository: ghcr.io/<your-github-username>/saas-layouts
  pullPolicy: Always
  tag: ""  # overridden at deploy time with the git SHA

service:
  type: ClusterIP
  port: 3000

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 256Mi
```

### templates/deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "saas-layouts.fullname" . }}
  labels:
    {{- include "saas-layouts.labels" . | nindent 4 }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      {{- include "saas-layouts.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "saas-layouts.selectorLabels" . | nindent 8 }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - containerPort: 3000
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
```

### templates/service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ include "saas-layouts.fullname" . }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: 3000
  selector:
    {{- include "saas-layouts.selectorLabels" . | nindent 4 }}
```

### Manual install command

```bash
helm install saas-layouts ./exercises/topic-02/solution/helm/saas-topic-02 \
  --set image.tag=<git-sha-of-your-latest-image> \
  --namespace default
```

### Verify the deployment

```bash
kubectl get pods -n default
kubectl get svc -n default
```

### Accessing the app (port-forward)

Since there is no ingress yet (that's Topic 06), use port-forward to verify the app responds:

```bash
kubectl port-forward svc/saas-layouts 3000:3000
# Then open http://localhost:3000
```

## Acceptance Criteria

- [ ] A Helm chart exists at `exercises/topic-02/solution/helm/saas-topic-02/` with `Chart.yaml`, `values.yaml`, and at least `deployment.yaml` and `service.yaml` in `templates/`
- [ ] `values.yaml` defines `image.repository`, `image.tag`, `replicaCount`, `service.port`, and `resources` (requests and limits)
- [ ] The Deployment template uses `{{ .Values.image.repository }}` and `{{ .Values.image.tag }}` — no hardcoded image references
- [ ] The Service targets port 3000 and uses `ClusterIP` type
- [ ] `helm lint ./exercises/topic-02/solution/helm/saas-topic-02` passes with no errors
- [ ] `helm install` completes successfully on the Hetzner cluster (provide screenshot or `kubectl get pods` output showing `Running` state)
- [ ] The app responds correctly via `kubectl port-forward`

## Constraints

- No hardcoded image tags in templates — always use `{{ .Values.image.tag }}`
- No `hostPort` or `NodePort` — use `ClusterIP` for now (ingress comes in Topic 06)
- The Helm chart must live inside the exercise solution folder: `exercises/topic-02/solution/helm/saas-topic-02/` — each exercise keeps its own chart co-located with its solution
- Do not modify the existing Dockerfile or GitHub Actions workflow (CI/CD automation comes in Topic 03)

## Suggested resources

- https://helm.sh/docs/chart_template_guide/getting_started/
- https://helm.sh/docs/topics/charts/
- https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

## Niveau de rigueur

Le pipeline doit fonctionner de bout en bout.
L'image doit être construite, poussée, et déployée automatiquement sur le cluster.
Les manifests Kubernetes doivent être valides et idiomatiques.
