{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Nota:** Para acceder a la API con tu GitHub App, debes proporcionar un [tipo de medios personalizado](/rest/overview/media-types) en el encabezado de `Accept` para tus solicitudes.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
