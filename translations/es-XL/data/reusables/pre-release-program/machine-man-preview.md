{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Nota:** Para acceder a la API con tu GitHub App, debes proporcionar un [tipo de medios personalizado](/v3/media) en el encabezado de `Accept` para tus solicitudes.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}