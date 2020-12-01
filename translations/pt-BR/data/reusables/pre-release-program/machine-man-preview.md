{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Observação:** Para acessar a API com o seu aplicativo GitHub, você deve fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Aceitar` para as suas solicitações.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
