---
title: Trabajo con archivos que no son de código
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
shortTitle: Working with non-code files
ms.openlocfilehash: c770235d94d6191d60505ba60b0f4f81ae49b6bd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107609'
---
## Representar y comparar imágenes

{% data variables.product.product_name %} puede mostrar varios formatos de imagen comunes, incluidos PNG, JPG, GIF, PSD y SVG. Asimismo, para simplificar mostrarlas, existen diversas formas de comparar las diferencias entre las versiones de esos formatos de imagen.

{% note %}

**Nota:** 
- {% data variables.product.prodname_dotcom %} no admite la comparación de las diferencias entre archivos PSD. 
- Si usa el explorador Firefox, es posible que los SVG en {% data variables.product.prodname_dotcom %} no se representen.

{% endnote %}

### Visualización de imágenes

Puedes buscar y ver imágenes directamente en tu repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}:

![imagen alineada](/assets/images/help/images/view.png)

Los SVG actualmente no admiten scripting alineado o animación.

### Ver diferencias

Hay tres modos diferentes de comparar visualmente las imágenes: [dual](#2-up), [deslizar rápidamente](#swipe) y [papel cebolla](#onion-skin).

#### 2-up

**Dual** es el modo predeterminado; ofrece una visión rápida de las dos imágenes. Asimismo, si la imagen cambió de tamaño entre las versiones, se muestra el cambio de dimensión real. Esto debería ser muy evidente cuando las cosas cambian de tamaño, como cuando los activos se suben de categoría a resoluciones más altas.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Deslizar rápidamente

**Deslizar rápidamente** le permite ver partes de la imagen en paralelo. ¿No estás seguro de si cambiaron los colores en las diferentes versiones? Arrastra el control deslizante de deslizamiento sobre el área en cuestión y compara los píxeles tú mismo.

![Deslizar rápidamente](/assets/images/help/repository/images-swipe-view.png)

#### Papel cebolla

**Papel cebolla** es muy útil cuando los elementos apenas se desplazan y cuesta percibir el cambio. ¿Un icono se corrió dos píxeles a la izquierda? Arrastra el control deslizante de opacidad hacia atrás un poco y comprueba si las cosas se desplazaron.

![Papel cebolla](/assets/images/help/repository/images-onion-view.gif)

## Visualizador de archivos 3D

{% data variables.product.product_name %} puede hospedar y representar archivos 3D con la extensión *.stl*.

Al buscar directamente en un archivo STL en {% data variables.product.product_name %} puedes:

* Hacer clic y arrastrar para girar el modelo.
* Hacer clic con el botón derecho y arrastrar para traducir la vista.
* Desplazarse para acercar y alejar.
* Hacer clic en los diferentes modos para cambiar la vista.

### Diferencias

Cuando miras una confirmación de cambios o un conjunto de cambios que incluyen un archivo STL, podrás ver una diferencia de antes y después del archivo.

Por defecto, obtendrás una vista donde todo lo que no ha cambiado está en el esquema de página. Las adiciones aparecen en verde y las partes eliminadas aparecen en rojo.

![esquema de página](/assets/images/help/repository/stl_wireframe.png)

También puede seleccionar la opción **Control deslizante de revisión**, que permite usar un control deslizante en la parte superior del archivo para cambiar entre la revisión actual y la anterior.

### Solucionar un rendimiento reducido

Si ves este ícono en la esquina del visualizador, entonces la tecnología WebGL no está disponible en tu navegador:

![error emergente de WebGL](/assets/images/help/repository/render_webgl_error.png)

WebGL es necesario para aprovechar el hardware de tu equipo al máximo. Se recomienda probar exploradores como [Chrome](https://www.google.com/intl/en/chrome/browser/) o [Firefox](https://www.mozilla.org/en-US/firefox/new/), que incluyen WebGL habilitado.

### Error: "No se puede mostrar"

Si tu modelo no es válido, es posible que GitHub no pueda mostrar el archivo. Además, los archivos de más de 10 MB son demasiado grandes para que GitHub los muestre.

### Insertar tu modelo en otro lugar

Para mostrar tu archivo 3D en algún otro lugar de Internet, modifica esta plantilla y colócala en cualquier página HTML que sea compatible con JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por ejemplo, si la dirección URL del modelo es [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), el código de inserción sería el siguiente:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

De manera predeterminada, el representador insertado es de 420 píxeles de ancho por 620 de alto, pero puede personalizar la salida si pasa las variables de altura y ancho como parámetros al final de la URL, como `?height=300&width=500`.

{% tip %}

**Nota**: `ref` puede ser una rama o el hash de una confirmación individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Representar en lenguaje de marcado

Puedes embeber una sintaxis de ASCII STL directamente en el lenguaje de marcado. Para más información, vea "[Creación de diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)".
{% endif %}

## Representar datos CSV y TSV

GitHub admite la representación de datos tabulares en forma de archivos *.csv* (separados por comas) y *.tsv* (separados por tabulaciones).

![Muestra de CSV representado](/assets/images/help/repository/rendered_csv.png)

Cuando se visualiza, cualquier archivo _.csv_ o _.tsv_ confirmado en un repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} se representa automáticamente como una tabla interactiva completa con encabezados y números de fila. Por defecto, siempre asumimos que la primera fila es tu fila de encabezados.

Puedes generar un enlace a una fila particular haciendo clic en el número de fila o seleccionar varias filas manteniendo presionada la tecla shift. Tan solo copia la URL y envíasela a un amigo.

### Búsqueda de datos

Si quieres encontrar un valor determinado en tu conjunto de datos, puedes comenzar escribiendo en la barra de búsqueda directamente arriba del archivo. Las filas se filtrarán automáticamente:

![Buscar valores](/assets/images/help/repository/searching_csvs.gif)

### Control de errores

De manera ocasional, puede que descubras que tu archivo CSV o TSV no se representa. En esas instancias, aparece un cuadro de error al pie del texto original que sugiere cuál puede ser el error.

![Mensaje de error de representación de CSV](/assets/images/help/repository/csv_render_error.png)

Estos son algunos de los errores comunes:

* Conteos de columnas que no coinciden. Debes tener la misma cantidad de separadores en cada fila, incluso si la celda está en blanco
* Superar el tamaño de archivo. Nuestra representación solo funciona para archivos de hasta 512KB. Cualquier cosa más grande hace que el navegador se vuelva más lento.

## Representar documentos PDF

GitHub admite la representación de documentos PDF.

![Documento PDF representado](/assets/images/help/repository/rendered-pdf.png)

Actualmente, se ignoran los enlaces dentro de los PDF.

## Representar diferencias en documentos en prosa

Las confirmaciones y solicitudes de incorporación de cambios que incluyen documentos en prosa tienen la capacidad de representar esos documentos con las vistas *de origen* y *representada*.

En la vista de origen se muestra el texto sin formato que se ha escrito, mientras que en la vista representada se muestra el aspecto que tendrá cuando se represente en {% data variables.product.product_name %}. Por ejemplo, esto podría ser la diferencia entre mostrar `**bold**` en Markdown y **negrita** en la vista representada.

La representación de prosa se admite para documentos representados compatibles con [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Organización
* Creole
* MediaWiki
* Pod

![Icono Paper (Papel) para ver el documento en prosa representado](/assets/images/help/repository/rendered_prose_diff.png)

Puede hacer clic en {% octicon "file" aria-label="The paper icon" %} para ver los cambios realizados en el documento como parte de una confirmación.

![Cambios en prosa representados](/assets/images/help/repository/rendered_prose_changes.png)

### Inhabilitar la representación del lenguaje de marcado

{% data reusables.repositories.disabling-markdown-rendering %}

### Ver los cambios del atributo

Proporcionamos una información sobre herramientas que describe los cambios en los atributos que, a diferencia de las palabras, no serían visibles en el documento representado. Por ejemplo, si la URL de un vínculo cambia de un sitio web a otro, se mostraría una información para herramientas como la siguiente:

![Cambios en atributos de la prosa representados](/assets/images/help/repository/prose_diff_attributes.png)

### Comentar cambios

Los [comentarios de confirmación](/articles/commenting-on-differences-between-files) solo se pueden agregar a los archivos en la vista *de origen*, por cada línea.

### Vincular a encabezados

Como sucede con [otros documentos de prosa representados](/articles/about-readmes), al mantener el puntero sobre un encabezado del documento se crea un icono de vínculo. Puede vincular a los lectores de la diferencia de prosa representada a secciones específicas.

### Ver diferencias complejas

Algunas solicitudes de extracción incluyen una gran cantidad de cambios con documentos grandes y complejos. Cuando los cambios toman demasiado tiempo en su análisis, {% data variables.product.product_name %} no siempre puede producir una vista renderizada de los cambios. Si esto pasa, verás un mensaje de error cuando das clic en el botón renderizado.

![Mensaje cuando la vista no se puede renderizar](/assets/images/help/repository/prose_diff_rendering.png)

Aún puedes utilizar la vista de origen para analizar y comentar cambios.

### Ver elementos HTML

No admitimos directamente vistas representadas de confirmaciones en documentos HTML. Algunos formatos, como Markdown, te permiten insertar HTML arbitrarios en un documento. Cuando estos documentos se muestran en {% data variables.product.product_name %}, algunos de esos HTML insertados pueden aparecer en una vista previa, mientras que con otros no es posible hacerlo (como un video de YouTube insertado).

En general, las vistas representadas de los cambios en un documento que contiene HTML insertados mostrarán los cambios en los elementos que se admiten en la vista del documento de {% data variables.product.product_name %}. Los cambios en los documentos que contienen HTML insertados siempre se deben verificar en las vistas de origen y representada para corroborar que estén todos.

## Mapeo de archivos de GeoJSON o TopoJSON en {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} admite representar archivos de mapa GeoJSON y TopoJSON en repositorios de {% data variables.product.product_name %}. Simplemente confirme el archivo como lo haría normalmente con una extensión `.geojson` o `.topojson`. También se admiten los archivos con una extensión `.json`, pero solo si `type` se establece en `FeatureCollection`, `GeometryCollection` o `topology`. Después, navega hasta la ruta del archivo GeoJSON o TopoJSON en GitHub.com.

Cuando haces clic en el ícono de papel a la derecha, también verás los cambios realizados a ese archivo como parte de una confirmación de cambios.

![Captura de pantalla de conmutación de representación de fuente](/assets/images/help/repository/source-render-toggle-geojson.png)

### Tipos de geometría

Los mapas de {% data variables.product.product_name %} usan [Leaflet.js](http://leafletjs.com) y admiten todos los tipos de geometría descritos en [la especificación geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon y GeometryCollection). Los archivos TopoJSON deben ser de tipo "Topología" y cumplir con la [especificación TopoJSON](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Características de estilo

Puedes personalizar la manera en que se muestran las características, como especificar un color particular o agregar un icono descriptivo, al pasar metadatos adicionales dentro de las propiedades del objeto GeoJSON. Las opciones son:

* `marker-size` - `small`, `medium` o `large`
* `marker-color`: color hexadecimal RGB válido
* `marker-symbol`: identificador de icono del [proyecto Maki](http://mapbox.com/maki/) o un único carácter alfanumérico (a-z o 0-9).
* `stroke`: color de un borde o línea poligonal (RGB)
* `stroke-opacity`: opacidad de un borde o línea de polígono (0,0 - 1,0)
* `stroke-width`: ancho de un borde o línea poligonal
* `fill`: color del interior de un polígono (GRB)
* `fill-opacity`: opacidad del interior de un polígono (0,0-1,0)

Vea la [versión 1.1.0 de la especificación open simplestyle](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) para más información.
{% endif %}

### Incrustrar tu mapa en otro lugar

¿Quieres hacer disponible tu mapa GeoJSON en un lugar distinto a {% data variables.product.product_name %}? Simplemente modifica esta plantilla y colócala en cualquier página HTML que admita JavaScript (por ejemplo, [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por ejemplo, si la dirección URL del mapa es [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), el código para insertar sería el siguiente:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

De manera predeterminada, el mapa insertado tiene 420 x 620 píxeles, pero puede personalizar la salida si pasa variables de alto y ancho como parámetros al final, por ejemplo, `?height=300&width=500`.

{% tip %}

**Nota**: `ref` puede ser una rama o el hash de una confirmación individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Mapear en lenguaje de marcado

Puedes insertar archivos GeoJSON y TopoJSON directamente en Markdown. Para obtener más información, vea "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)".
{% endif %}

### Agrupación en clústeres

Si tu mapa contiende una gran cantidad de marcadores (aproximadamente más de 750), GitHub automáticamente agrupará marcadores cercanos en niveles superiores de zoom. Simplemente haz clic la agrupación o el zoom de acercamiento para ver los marcadores individuales.

### Algo sucede con el mapa subyacente

Los datos de mapa subyacentes (nombres de calle, carreteras, etc.) se basan en [OpenStreetMap](http://www.openstreetmap.org/), un proyecto de colaboración para crear un mapa del mundo editable y gratuito. Si observa que algo no es correcto, al tratarse de código abierto, simplemente [regístrese](https://www.openstreetmap.org/user/new) y envíe una corrección.

### Solución de problemas

Si tienes problemas para representar archivos GeoJSON, asegúrate de que tienes un archivo GeoJSON válido ejecutándolo con un [linter de GeoJSON](http://geojsonlint.com/). Si los puntos no aparecen donde se espera (<em>por ejemplo</em>, en la mitad del océano), es probable que los datos estén en una proyección que actualmente no se admite. Actualmente, {% data variables.product.product_name %} solo admite la proyección `urn:ogc:def:crs:OGC:1.3:CRS84`.

Por otra parte, si el archivo `.geojson` es especialmente grande (más de 10 MB), no es posible representarlo en el explorador. Si ese es el caso, por lo general verás un mensaje similar a este:

![Archivo de gran tamaño](/assets/images/help/repository/view_raw.png)

Todavía puede representar los datos si convierte el archivo `.geojson`a [TopoJSON](https://github.com/mbostock/topojson), un formato de compresión que, en algunos casos, puede reducir el tamaño de los archivos hasta un 80 %. Por supuesto, siempre puedes partir el archivo en fragmentos más pequeños (como por estado o por año), y almacenar los datos como archivos múltiples dentro del repositorio.

### Información adicional

{% ifversion geoJSON-with-MapBox %}
* [Documentación de Leaflet.js](https://leafletjs.com/)
* [Documentación de estilos de marcador de MapBox](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Documentación de Azure Maps](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [Wiki de TopoJSON](https://github.com/mbostock/topojson/wiki)

## Trabajar con arhivos de Jupyter Notebook en {% data variables.product.prodname_dotcom %}

Al agregar archivos de cuaderno de Jupyter Notebook o IPython con una extensión *.ipynb* en {% data variables.location.product_location %}, se representarán como archivos HTML estáticos en el repositorio.

Las funciones interactivas de cuaderno, como los trazados personalizados de JavaScript, no funcionarán en tu repositorio en {% data variables.location.product_location %}. Para obtener un ejemplo, vea [*Vinculación e interacciones.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Para ver el cuaderno de Jupyter Notebook con contenido de JavaScript representado o para compartir los archivos de cuaderno con otros usuarios, puede usar [nbviewer](https://nbviewer.jupyter.org/). Para obtener un ejemplo, vea [*Vinculación e interacciones.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) representados en nbviewer.

Para ver una versión completamente interactiva de tu notebook Jupyter, puedes configurar un servidor notebook de manera local. Para más información, vea la [documentación oficial de Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Solución de problemas

Si tiene problemas para representar archivos de Jupyter Notebook en HTML estático, puede convertir el archivo localmente en la línea de comandos mediante el [comando `nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Información adicional

- [Repositorio de Jupyter Notebook en GitHub](https://github.com/jupyter/jupyter_notebook)
- [Galería de cuadernos de Jupyter Notebook](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Mostrar los archivos de Mermaid en {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} es compatible con el procesamiento de archivos de Mermaid dentro de los repositorios. Confirme el archivo como lo haría normalmente con una extensión `.mermaid` o `.mmd`. Luego, navega a la ruta del archivo Mermaid en {% data variables.product.prodname_dotcom %}.

Por ejemplo, si agrega un archivo `.mmd` con el contenido siguiente al repositorio:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

Cuando ves el archivo en el repositorio, este se procesa como un diagrama de flujo.
![Diagrama de archivo mermaid representado](/assets/images/help/repository/mermaid-file-diagram.png)

### Solución de problemas

Si el gráfico no se representa, compruebe que contiene la sintaxis válida de Markdown Mermaid, para lo que debe comprobar el gráfico con el [editor en directo de Mermaid](https://mermaid.live/edit).

Si el gráfico se muestra, pero no de la forma esperada, puedes crear un [debate de {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general) y agregar la etiqueta `Mermaid`. 

#### Problemas conocidos

* Las gráficas de diagramas secuenciales a menudo se interpretan con espacios adicionales debajo de ellas y se les agrega aún más espacio conforme el tamaño de la gráfica aumenta. Este es un problema conocido de la librería de Mermaid.
* Los nodos actores con menús emergentes no funcionan como se esperaba dentro de las gráficas de diagrama secuencial. Esto es debido a una discrepancia en la forma en la que se agregan los eventos de JavaScript cuando se utiliza la API de la librería de Mermaid para interpretar una gráfica.
* No todas las gráficas cumplen con a11y. Esto podría afectar a los usuarios que dependen en un lector de pantalla.

### Mermaid en el lenguaje de marcado

Puedes embeber una sintaxis de Mermaid directamente en el lenguaje de marcado. Para más información, vea "[Creación de diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)".

### Información adicional

* [Documentación de Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Editor en directo de Mermaid.js](https://mermaid.live/edit) {% endif %}

