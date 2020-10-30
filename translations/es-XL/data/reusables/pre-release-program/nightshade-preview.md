{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Nota:** La [API de Transferencia de Repositorios](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview) está actualmente disponible para que los desarrolladores la pre-vean. Para acceder a la API, debes proprocionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.nightshade-preview+json
```

{% endnote %}
{% endif %}
