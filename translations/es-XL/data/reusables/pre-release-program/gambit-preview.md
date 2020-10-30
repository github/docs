{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Nota:** El desinstalar las {% data variables.product.prodname_github_app %}s y el revocar el token de instalación de una app se encuentra disponible para que los desarrolladores lo previsualicen. Para acceder a la terminal nueva durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:
```
application/vnd.github.gambit-preview+json
```

{% endnote %}
{% endif %}
