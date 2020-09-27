{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.13" %}
{% note %}

**Nota:** La [API de Licencias](https://developer.github.com/changes/2015-03-09-licenses-api/) está actualmente disponible para que los desarrolladores la previsualicen. Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.drax-preview+json
```

{% endnote %}
{% endif %}
