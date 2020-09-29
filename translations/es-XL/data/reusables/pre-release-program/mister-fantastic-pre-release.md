{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Nota:** {% data variables.mister-fantastic.product_name_long %} contiene dos campos adicionales en las respuestas, los cuales pueden previsualizar los desarrolladores: `html_url` y `source`. Para ver estos dos campos nuevos, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:

```
application/vnd.github.mister-fantastic-preview+json
```

{% endnote %}
{% endif %}
