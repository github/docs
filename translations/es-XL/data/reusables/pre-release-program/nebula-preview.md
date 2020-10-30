{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

{% note %}

**Nota:**  Puedes configurar la visibilidad de un repositorio utilizando el parámetro nuevo de `visibility` en la [API de Repositorios](/v3/repos/), y obtener así la visibilidad de un repositorio con una llave de respuesta nueva. Para obtener más información, consulta la [publicación del blog](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/).

Para acceder a la visibilidad del repositorio durante el periodo de previsualización, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.nebula-preview+json
```

{% endnote %}
{% endif %}
