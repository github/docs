{% if currentVersion == "enterprise-server@2.20" %}
{% note %}

**Nota:** Las terminales nuevas que utilicen tokens de OAuth como parámetros de entrada en vez de como parámetros de ruta se encuentran disponibles para que los desarrolladores las previsualicen en la [API de Aplicaciones de OAuth](/v3/apps/oauth_applications/). Para acceder a estas terminales durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.doctor-strange-preview+json
```

{% endnote %}
{% endif %}
