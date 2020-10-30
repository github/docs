{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% note %}

**Nota:** El uso de la API de {% data variables.product.prodname_component_kit %} se encuentra disponible actualmente para que lo previsualicen los desarrolladores. Para acceder a estas terminales durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.batman-preview+json
```

{% endnote %}
{% endif %}
