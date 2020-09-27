{% note %}

**Nota:** Para comentar en una línea específica de un archivo, necesitas determinar primero la _posición_ de dicha línea en el diff. La API de REST de GitHub ofrece el [tipo de medios](/v3/media/#commits-commit-comparison-and-pull-requests) `application/vnd.github.v3.diff`. Para ver el diff de una solicitud de extracción, agrega este tipo de medios al encabezado `Accept` de una llamada a la terminal [solicitud de extracción sencilla](/v3/pulls/#get-a-pull-request).

El valor `position` será la cantidad de líneas hacia abajo desde el primer pedazo de "@@" en el encabezado dentro del archivo al que quieras agregar un comentario. La línea que está justo debajo de aquella con "@@" es la posición 1, la siguiente es la posición 2, y así subsecuentemente. La posición en el diff sigue incrementando a través de las líneas de espacios en blanco y de trozos adicionales hasta que comience un archivo nuevo.

{% endnote %}
