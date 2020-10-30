{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Nota:** La API debates de equipo se encuentra disponible actualmente para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2018-02-07-team-discussions-api) para encontrar todos los detalles. Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.echo-preview+json
```
{% endnote %}
{% endif %}
