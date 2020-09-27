{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

##### Resumen de comentarios de línea múltiple

{% note %}

**Nota:** Los parámetros y campos de respuesta nuevos se encuentran disponibles para que los desarrolladores los previsualicen. Durante el periodo de vista previa, estos campos de respuesta podrían cambiar sin previo aviso. Por favor, consulta la [publicación del blog](https://developer.github.com/changes/2019-10-03-multi-line-comments) para obtener todos los detalles.

{% endnote %}

Utiliza el encabezado de vista previa `comfort-fade` y el parámetro `line` para mostrar los campos compatibles de comentarios de línea múltiple en la respuesta.

Si utilizas el encabezado de vista previa `comfort-fade`, tu respuesta mostrará:
- Para los comentarios de línea múltiple, los valores de `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, y `side`.
- Para los comentarios de línea sencilla, los valores de `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, y `start_side`.

Si no utilizas el encabezado de vista previa `comfort-fade`, los comentarios de línea múltiple y de línea sencilla aparecerán de la misma manera en la respuesta con un solo atributo de `position`. Tu respuesta mostrará:
- Para los comentarios de línea múltiple, la última línea del rango de comentarios para el atributo `position`.
- Para los comentarios de línea sencilla, es la forma posicionada del diff para referenciar los comentarios del atributo `position`. Para obtener más información, consulta `position` en la tabla de [parámetros de entrada](/v3/pulls/comments/#parameters-2).

{% endif %}
