{% note %}

**Nota:** Las características nuevas en la API de despliegues en {% data variables.product.product_name %} se encuentran actualmente disponibles durante el beta público. Por favor, consulta la [publicación del blog](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/) para obtener todos los detalles.

Para acceder al nuevo parámetro de `environment`, los dos valores nuevos para el parámetro `state` (`in_progress` y `queued`), y para utilizar `auto_inactive` en despliegues productivos durante el periodo del beta público, debes proporcionar los siguientes [tipos de medios](/v3/media) personalizados en el encabezado `Accept`:

```
application/vnd.github.flash-preview+json
```

{% endnote %}
