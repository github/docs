{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.12" %}
{% note %}

**Nota:** La API de Ramas Protegidas ahora puede administrar una configuración para requerir las confirmaciones firmadas. Esta característica se encuentra disponible actualmente para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures) para encontrar todos los detalles. Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.zzzax-preview+json
```

{% endnote %}
{% endif %}
