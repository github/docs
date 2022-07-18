---
title: Trabajar con archivos sin código
intro: '{% data variables.product.product_name %} es compatible con interpretar y diferenciar varios formatos de archivo que no son de código.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Trabajar con archivos sin código
---

## Representar y comparar imágenes

{% data variables.product.product_name %} puede mostrar varios formatos de imagen comunes, incluidos PNG, JPG, GIF, PSD y SVG. Asimismo, para simplificar mostrarlas, existen diversas formas de comparar las diferencias entre las versiones de esos formatos de imagen.

{% note %}

**Nota:**
- {% data variables.product.prodname_dotcom %} no es compatible con comparar las diferencias entre archivos PSD.
- Si estás utilizando el buscador Firefox, podrían no interpretarse los SVG en {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Ver imágenes

Puedes buscar y ver imágenes directamente en tu repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}:

![imagen alineada](/assets/images/help/images/view.png)

Los SVG actualmente no admiten scripting alineado o animación.

### Ver diferencias

Puedes comparar visualmente las imágenes de tres modos diferentes: [2-up](#2-up), [deslizar](#swipe) y [papel cebolla](#onion-skin).

#### 2-up

**2-up** es el modo predeterminado; te muestra una descripción rápida de ambas imágenes. Asimismo, si la imagen cambió de tamaño entre las versiones, se muestra el cambio de dimensión real. Esto debería ser muy evidente cuando las cosas cambian de tamaño, como cuando los activos se suben de categoría a resoluciones más altas.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Deslizar

**Deslizar**te deja ver partes de tus imágenes. ¿No estás seguro de si cambiaron los colores en las diferentes versiones? Arrastra el control deslizante de deslizamiento sobre el área en cuestión y compara los píxeles tú mismo.

![Deslizar](/assets/images/help/repository/images-swipe-view.png)

#### Papel cebolla

**Papel cebolla** realmente ayuda cuando los elementos apenas se desplazan y cuesta percibir el cambio. ¿Un icono se corrió dos píxeles a la izquierda? Arrastra el control deslizante de opacidad hacia atrás un poco y comprueba si las cosas se desplazaron.

![Papel cebolla](/assets/images/help/repository/images-onion-view.gif)

## Visualizador de archivos 3D

{% data variables.product.product_name %} puede alojar y representar archivos 3D con la extensión *.stl*.

Al buscar directamente en un archivo STL en {% data variables.product.product_name %} puedes:

* Hacer clic y arrastrar para girar el modelo.
* Hacer clic con el botón derecho y arrastrar para traducir la vista.
* Desplazarse para acercar y alejar.
* Hacer clic en los diferentes modos para cambiar la vista.

### Diferencias

Cuando miras una confirmación de cambios o un conjunto de cambios que incluyen un archivo STL, podrás ver una diferencia de antes y después del archivo.

Por defecto, obtendrás una vista donde todo lo que no ha cambiado está en el esquema de página. Las adiciones aparecen en verde y las partes eliminadas aparecen en rojo.

![esquema de página](/assets/images/help/repository/stl_wireframe.png)

También puedes seleccionar la opción **Control deslizante de la revisión**, que te permite usar un control deslizante en la parte superior del archivo para cambiar entre las revisiones actuales y las anteriores.

### Solucionar un rendimiento reducido

Si ves este ícono en la esquina del visualizador, entonces la tecnología WebGL no está disponible en tu navegador:

![error emergente de WebGL](/assets/images/help/repository/render_webgl_error.png)

WebGL es necesario para aprovechar el hardware de tu equipo al máximo. Te recomendamos que intentes con navegadores como [Chrome](https://www.google.com/intl/en/chrome/browser/) o [Firefox](https://www.mozilla.org/en-US/firefox/new/), que vienen con WebGL activado.

### Error: "No se puede mostrar"

Si tu modelo no es válido, es posible que GitHub no pueda mostrar el archivo. Además, los archivos de más de 10 MB son demasiado grandes para que GitHub los muestre.

### Insertar tu modelo en otro lugar

Para mostrar tu archivo 3D en algún otro lugar de Internet, modifica esta plantilla y colócala en cualquier página HTML que sea compatible con JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por ejemplo, si la URL de tu modelo es [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), tu código de inserción sería:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Por defecto, la representación insertada es de 420 píxeles de ancho por 620 de alto, pero puedes personalizar la salida, pasando las variables de altura y ancho como parámetros al final de la URL, como `?height=300&width=500`.

{% tip %}

**Nota**: `ref` puede ser una rama del hash para una confirmación individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Representar en lenguaje de marcado

Puedes embeber una sintaxis de ASCII STL directamente en el lenguaje de marcado. Para obtener más información, consulta la sección "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)".
{% endif %}

## Representar datos CSV y TSV

GitHub admite la representación de datos tabulares en la forma de archivos *.csv* (separados por coma) y .*tsv* (separados por pestaña).

![Muestra de CSV representado](/assets/images/help/repository/rendered_csv.png)

Cuando se visualiza, cualquier archivo _.csv_ o _.tsv_ que se haya confirmado en un repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} se interpretará automáticamente como una tabla interactiva completa con encabezados y números de fila. Por defecto, siempre asumimos que la primera fila es tu fila de encabezados.

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

## Representar documentos PDF

GitHub admite la representación de documentos PDF.

![Documento PDF representado](/assets/images/help/repository/rendered-pdf.png)

Actualmente, se ignoran los enlaces dentro de los PDF.

## Representar diferencias en documentos en prosa

Las confirmaciones y solicitudes de extracción que incluyen documentos en prosa tienen la capacidad de representar esos documentos con vistas *de origen* y *representadas*.

La vista de origen muestra el texto en bruto que se escribió, mientras que la vista representada muestra la manera en que ese texto se vería una vez que se represente en {% data variables.product.product_name %}. Por ejemplo, esto puede ser la diferencia entre mostrar `**negrita**` en Markdown y **negrita** en la vista representada.

Se admite la representación en prosa para documentos representados compatibles con [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Icono Paper (Papel) para ver el documento en prosa representado](/assets/images/help/repository/rendered_prose_diff.png)

Puedes hacer clic en {% octicon "file" aria-label="The paper icon" %} para ver los cambios hechos al documento como parte de una confirmación.

![Cambios en prosa representados](/assets/images/help/repository/rendered_prose_changes.png)

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

### Inhabilitar la representación del lenguaje de marcado

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

### Ver los cambios del atributo

Proporcionamos una información de herramienta que describe los cambios en los atributos que, a diferencia de las palabras, no serían visibles en el documento representado. Por ejemplo, si la URL de un enlace cambia de un sitio web a otro, mostraríamos una información de herramienta como la siguiente:

![Cambios en atributos de la prosa representados](/assets/images/help/repository/previous-run-attempts.png)

### Comentar cambios

Solo se pueden agregar [comentarios de la confirmación](/articles/commenting-on-differences-between-files) en los archivos dentro de la vista *de origen*, línea por línea.

### Vincular a encabezados

Como con [otros documentos en prosa representados](/articles/about-readmes), deslizarse sobre un encabezado de tu documento crea un icono de enlace. Puedes vincular a los lectores de tu diferencia de prosa representada a secciones específicas.

### Ver diferencias complejas

Algunas solicitudes de extracción incluyen una gran cantidad de cambios con documentos grandes y complejos. Cuando los cambios toman demasiado tiempo en su análisis, {% data variables.product.product_name %} no siempre puede producir una vista renderizada de los cambios. Si esto pasa, verás un mensaje de error cuando das clic en el botón renderizado.

![Mensaje cuando la vista no se puede renderizar](/assets/images/help/repository/prose_diff_rendering.png)

Aún puedes utilizar la vista de origen para analizar y comentar cambios.

### Ver elementos HTML

No admitimos directamente vistas representadas de confirmaciones en documentos HTML. Algunos formatos, como Markdown, te permiten insertar HTML arbitrarios en un documento. Cuando estos documentos se muestran en {% data variables.product.product_name %}, algunos de esos HTML insertados pueden aparecer en una vista previa, mientras que con otros no es posible hacerlo (como un video de YouTube insertado).

En general, las vistas representadas de los cambios en un documento que contiene HTML insertados mostrarán los cambios en los elementos que se admiten en la vista del documento de {% data variables.product.product_name %}. Los cambios en los documentos que contienen HTML insertados siempre se deben verificar en las vistas de origen y representada para corroborar que estén todos.

## Mapear archivos de geoJSON en {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} admite representar archivos de mapa geoJSON y topoJSON dentro de repositorios {% data variables.product.product_name %}. Simplemente confirma el archivo como lo harías normalmente utilizando una extensión `.geojson` o `.topojson`. También se admiten archivos con una extensión `.json`, pero únicamente si `type` están configurados para `FeatureCollection`, `GeometryCollection`, o `topology`. Después, navega hasta la ruta del archivo geoJSON en GitHub.com.

Cuando haces clic en el ícono de papel a la derecha, también verás los cambios realizados a ese archivo como parte de una confirmación de cambios.

![Captura de pantalla de conmutación de representación de fuente](/assets/images/help/repository/source-render-toggle-geojson.png)

### Tipos de geometría

Los mapas en {% data variables.product.product_name %} utilizan [Leaflet.js](http://leafletjs.com) y admiten todos los tipos de Geometry indicados en [las especificaciones de geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon y GeometryCollection). Los archivos TopoJSON deberían ser del tipo "Topology" y adherir a las especificaciones [topoJSON](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Características de estilo

Puedes personalizar la manera en que se muestran las características, como especificar un color particular o agregar un ícono descriptivo, al pasar metadatos adicionales dentro de las propiedades del objeto geoJSON. Las opciones son:

* `marker-size` - `small`, `medium`, o `large`
* `marker-color` - color RGB hex válido
* `marker-symbol` - un ID del ícono del [proyecto Maki ](http://mapbox.com/maki/) o un carácter único alfanumérico (a-z o 0-9).
* `stroke` - color de una línea o borde de un polígono (RGB)
* `stroke-opacity` - opacidad de una línea o borde de un polígono (0.0 - 1.0)
* `stroke-width` - ancho de una línea o borde de un polígono
* `fill` - el color del interior de un polígono (GRB)
* `fill-opacity` - la opacidad del interior de un polígono (0.0-1.0)

Consulta la versión [1.1.0 de las especificaciones de estilo simple abierto](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) para obtener más información.
{% endif %}

### Incrustrar tu mapa en otro lugar

Deseas hacer disponible tu mapa geoJSON en un lugar distinto a {% data variables.product.product_name %}? Simplemente modifica esta plantilla, y colócala en alguna página HTML que admita javascript (p. ej., [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por ejemplo, si la URL de tu mapa es [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), tu código de incrustación sería:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Por defecto, el mapa incrustado es 420px x 620px, pero puedes personalizar el resultado al pasar variables de alto y ancho como parámetros al final, como `?height=300&width=500`.

{% tip %}

**Nota**: `ref` puede ser una rama del hash para una confirmación individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Mapear en lenguaje de marcado

Puedes embeber geoJSON y topoJSON directamente en el lenguaje de marcado. Para obtener más información, consulta la sección "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)".
{% endif %}

### Agrupación

Si tu mapa contiende una gran cantidad de marcadores (aproximadamente más de 750), GitHub automáticamente agrupará marcadores cercanos en niveles superiores de zoom. Simplemente haz clic la agrupación o el zoom de acercamiento para ver los marcadores individuales.

### Algo sucede con el mapa subyacente

Los datos del mapa subyacente (nombres de calles, caminos, etc.) están controlados por [OpenStreetMap](http://www.openstreetmap.org/), un proyecto colaborativo para crear un mapa editable gratuito del mundo. Si notas que algo no está del todo bien, ya que es código abierto, simplemente [sign up](https://www.openstreetmap.org/user/new) y envía un arreglo.

### Solución de problemas

Si estás teniendo problemas al representar archivos geoJSON, asegúrate que tienes un archivo geoJSON válido al ejecutarlo en un [limpiador de geoJSON](http://geojsonlint.com/). Si tus puntos no aparecen donde lo esperas (<em>p. ej.</em>, aparecen en la mitad del océano), es probable que los datos estén en una proyección que actualmente no se admite. Actualmente, {% data variables.product.product_name %} admite únicamente la proyección `urn:ogc:def:crs:OGC:1.3:CRS84`.

Por otra parte, si tu archivo `.geojson` es particularmente grande (superior a 10 MB), no es posible representarlo dentro del navegador. Si ese es el caso, por lo general verás un mensaje similar a este:

![Archivo de gran tamaño](/assets/images/help/repository/view_raw.png)

Todavía se podrían representar los datos al convertir el archivo `.geojson` a [TopoJSON](https://github.com/mbostock/topojson), un formato de compresión que, en algunos casos, puede reducir el tamaño del archivo hasta un 80 %. Por supuesto, siempre puedes partir el archivo en fragmentos más pequeños (como por estado o por año), y almacenar los datos como archivos múltiples dentro del repositorio.

### Leer más

{% ifversion geoJSON-with-MapBox %}
* [Documentación de Leaflet.js](https://leafletjs.com/)
* [Documentación de estilización de marcador MapBox](http://www.mapbox.com/developers/simplestyle/)
{%- else %}
* [Documentación de Azure Maps](https://docs.microsoft.com/en-us/azure/azure-maps/)
{%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## Trabajar con arhivos de Jupyter Notebook en {% data variables.product.prodname_dotcom %}

Cuando agregas archivos de Jupyter Notebook o IPython Notebook con una extensión *.ipynb* en {% data variables.product.product_location %}, estas se interpretarán como archivos HTML estáticos en tu repositorio.

Las funciones interactivas de notebook, como los gráficos JavaScript personalizados, no funcionarán en tu repositorio en {% data variables.product.product_location %}. Para obtener un ejemplo, consulta [*Enlaces e interacciones.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Para ver tu notebook Jupyter con el contenido representado de JavaScript o para compartir tus archivos notebook con otros, puedes usar [nbviewer](https://nbviewer.jupyter.org/). Para obtener un ejemplo, consulta [*Enlaces e interacciones.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) representados en nbviewer.

Para ver una versión completamente interactiva de tu notebook Jupyter, puedes configurar un servidor notebook de manera local. Para obtener más información, consulta [Documentación oficial de Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Solución de problemas

Si tienes problemas para representar los archivos notebook Jupyter en HTML estático, puedes convertir el archivo de forma local en la línea de comando usando el comando [`nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Leer más

- [Repositorio GitHub de notebook Jupyter](https://github.com/jupyter/jupyter_notebook)
- [Galería de notebooks Jupyter](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Mostrar los archivos de Mermaid en {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} es compatible con el procesamiento de archivos de Mermaid dentro de los repositorios. Confirma el archivo como lo harías habitualmente utilizando una extensión `.mermaid` o `.mmd`. Luego, navega a la ruta del archivo Mermaid en {% data variables.product.prodname_dotcom %}.

Por ejemplo, si agregas un archivo `.mmd` con el siguiente contenido a tu repositorio:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

Cuando ves el archivo en el repositorio, este se procesa como un diagrama de flujo. ![Diagrama de archivo mermaid procesado](/assets/images/help/repository/mermaid-file-diagram.png)

### Solución de problemas

Si tu gráfica no se procesa, verifica que contenga una sintaxis de lenguaje de marcado de Mermaid verificándola con el [Editor de Mermaid](https://mermaid.live/edit).

Si se muestra la gráfica, pero esta no se ve como lo esperabas, puedes crear un [debate de retroalimentación](https://github.com/github/feedback/discussions/categories/general-feedback) nuevo y agregar la etiqueta `mermaid`.

#### Problemas conocidos

* Las gráficas de diagramas secuenciales a menudo se interpretan con espacios adicionales debajo de ellas y se les agrega aún más espacio conforme el tamaño de la gráfica aumenta. Este es un problema conocido de la librería de Mermaid.
* Los nodos actores con menús emergentes no funcionan como se esperaba dentro de las gráficas de diagrama secuencial. Esto es debido a una discrepancia en la forma en la que se agregan los eventos de JavaScript cuando se utiliza la API de la librería de Mermaid para interpretar una gráfica.
* No todas las gráficas cumplen con a11y. Esto podría afectar a los usuarios que dependen en un lector de pantalla.

### Mermaid en el lenguaje de marcado

Puedes embeber una sintaxis de Mermaid directamente en el lenguaje de marcado. Para obtener más información, consulta la sección "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)".

### Leer más

* [Documentación de Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Editor de Mermaid.js](https://mermaid.live/edit)
{% endif %}

