{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Observação:** Para acessar a API com o seu aplicativo GitHub, você deve fornecer um [tipo de mídia](/v3/media) personalizado no cabeçalho `Aceitar` para as suas solicitações.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
