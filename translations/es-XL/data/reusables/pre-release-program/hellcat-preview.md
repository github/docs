{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Nota:** La API de Equipos Anidados actualmente está disponible para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2017-08-30-preview-nested-teams) para encontrar todos los detalles. Para acceder a la API, debes proprocionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:
```
application/vnd.github.hellcat-preview+json
```
{% endnote %}

{% endif %}
