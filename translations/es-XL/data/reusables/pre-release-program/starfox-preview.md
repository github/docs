{% note %}

**Nota:** Los detalles de la tarjeta de proyectos ahora se meustran en las respuestas de la API de REST para los eventos de informes de problemas y línea de tiempo relacionados con el proyecto. Esta característica está ahora disponible para que los desarrolladores la previsualicen. Para obtener más detalles, consulta la [publicación del blog](https://developer.github.com/changes/2018-09-05-project-card-events).

Para recibir el atributo `project_card`, los tableros de proyecto deben [habilitarse](/articles/disabling-project-boards-in-a-repository) para un repositorio, y debes proprocionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
