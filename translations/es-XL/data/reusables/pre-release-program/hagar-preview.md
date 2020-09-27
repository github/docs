{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Nota:** Ahora puedes recuperar la información de la tarjeta de visita virtual de alguien en diferentes contextos utilizando la API de tarjeta de visita virtual. Esta característica se encuentra disponible actualmente para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2018-03-21-hovercard-api-preview) para encontrar todos los detalles. Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:
```
application/vnd.github.hagar-preview+json
```
{% endnote %}
{% endif %}
