{{- define "saas-layouts-topic-02.fullname" -}}
saas-layouts-topic-02
{{- end }}

{{- define "saas-layouts-topic-02.deploymentname" -}}
{{ include "saas-layouts-topic-02.fullname" . }}-deploy
{{- end }}

{{- define "saas-layouts-topic-02.servicename" -}}
{{ include "saas-layouts-topic-02.fullname" . }}-service
{{- end }}

{{- define "saas-layouts-topic-02.selectorlabels" -}}
front: {{ include "saas-layouts-topic-02.fullname" . }}
{{- end }}