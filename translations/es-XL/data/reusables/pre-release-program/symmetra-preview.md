{% if currentVersion != ‘dotcom’ and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Nota:** Puedes agregar o editar las descripciones en las etiquetas. Consulta la [publicación del blog](https://developer.github.com/changes/2018-02-22-label-description-search-preview) para encontrar todos los detalles. Para acceder a esta característica durante el periodo de previsualización, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:
```
application/vnd.github.symmetra-preview+json
```
{% endnote %}
{% endif %}
