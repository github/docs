{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.13" %}
{% note %}

**Nota:** Las solicitudes de revisión basadas en equipos dentro de la API de Solicitudes de Revisión en {% data variables.product.product_name %} se encuentran actualmente disponibles para que los desarrolladores las previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2017-07-26-team-review-request-thor-preview) para encontrar todos los detalles.

Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.thor-preview+json
```

{% endnote %}
{% endif %}
