{% if currentVersion != "free-pro-team@latest" %}
{% note %}

**Nota:** Cuando una instancia de GitHub Enterprise se encuentra en modo privado, los administradores de sitio y de repositorio pueden habilitar el acceso anónimo de Git para un repositorio público. Esta característica se encuentra disponible actualmente para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/) para encontrar todos los detalles.

Para acceder a la API durante el periodo de vista previa, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.x-ray-preview+json
```

{% endnote %}
{% endif %}
