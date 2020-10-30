{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Nota:** La API de Borrador de Solicitud de Extracción actualmente está disponible para que los desarrolladores la previsualicen. Puedes utilizar esta API para crear un borrador de solicitud de extracción o ver si una solicitud de extracción se encuentra en estado de borrador. Consulta la vista previa de la [publicación del blog](https://developer.github.com/changes/2019-02-14-draft-pull-requests) para encontrar más detalles. Para acceder al nuevo parámetro `draft` durante el periodo de previsualización, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:
```
application/vnd.github.shadow-cat-preview+json
```

{% endnote %}
{% endif %}
