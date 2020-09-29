{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.8" %}
{% note %}

**Nota:** {% data variables.giant-sentry-fist.product_name_long %} en {% data variables.product.product_name %} se encuentra actualmente disponible para que los desarrolladores lo previsualicen. Para acceder a la API, debes proprocionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.giant-sentry-fist-preview+json
```

{% endnote %}
{% endif %}
