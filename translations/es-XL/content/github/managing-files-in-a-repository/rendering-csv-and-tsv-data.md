---
title: Representar datos CSV y TSV
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub admite la representación de datos tabulares en la forma de archivos *.csv* (separados por coma) y .*tsv* (separados por pestaña).

![Muestra de CSV representado](/assets/images/help/repository/rendered_csv.png)

Cuando se visualiza, cualquier archivo _.csv_ o _.tsv_ confirmado en un repositorio de {% data variables.product.product_name %} se representa automáticamente como una tabla interactiva, completa con encabezados y numeración de filas. Por defecto, siempre asumimos que la primera fila es tu fila de encabezados.

Puedes generar un enlace a una fila particular haciendo clic en el número de fila o seleccionar varias filas manteniendo presionada la tecla shift. Tan solo copia la URL y envíasela a un amigo.

### Buscar datos

Si quieres encontrar un valor determinado en tu conjunto de datos, puedes comenzar escribiendo en la barra de búsqueda directamente arriba del archivo. Las filas se filtrarán automáticamente:

![Buscar valores](/assets/images/help/repository/searching_csvs.gif)

### Manejar errores

De manera ocasional, puede que descubras que tu archivo CSV o TSV no se representa. En esas instancias, aparece un cuadro de error al pie del texto original que sugiere cuál puede ser el error.

![Mensaje de error de representación de CSV](/assets/images/help/repository/csv_render_error.png)

Los errores comunes incluyen los siguientes:

* Conteos de columnas que no coinciden. Debes tener la misma cantidad de separadores en cada fila, incluso si la celda está en blanco
* Superar el tamaño de archivo. Nuestra representación solo funciona para archivos de hasta 512KB. Cualquier cosa más grande hace que el navegador se vuelva más lento.
