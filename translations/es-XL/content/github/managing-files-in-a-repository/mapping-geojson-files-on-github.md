---
title: Mapear archivos geoJSON en GitHub
redirect_from:
  - /articles/mapping-geojson-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} admite representar archivos de mapa geoJSON y topoJSON dentro de repositorios {% data variables.product.product_name %}. Simplemente confirma el archivo como lo harías normalmente utilizando una extensión `.geojson` o `.topojson`. También se admiten archivos con una extensión `.json`, pero únicamente si `type` están configurados para `FeatureCollection`, `GeometryCollection`, o `topology`. Después, navega hasta la ruta del archivo geoJSON en GitHub.com.

Cuando haces clic en el ícono de papel a la derecha, también verás los cambios realizados a ese archivo como parte de una confirmación de cambios.

![Captura de pantalla de conmutación de representación de fuente](/assets/images/help/repository/source-render-toggle-geojson.png)

### Tipos de Geometry

Los mapas en {% data variables.product.product_name %} utilizan [Leaflet.js](http://leafletjs.com) y admiten todos los tipos de Geometry indicados en [las especificaciones de geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon y GeometryCollection). Los archivos TopoJSON deberían ser del tipo "Topology" y adherir a las especificaciones [topoJSON](https://github.com/mbostock/topojson/wiki/Specification).

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

### Agrupación

Si tu mapa contiende una gran cantidad de marcadores (aproximadamente más de 750), GitHub automáticamente agrupará marcadores cercanos en niveles superiores de zoom. Simplemente haz clic la agrupación o el zoom de acercamiento para ver los marcadores individuales.

### Algo sucede con el mapa subyacente

Los datos del mapa subyacente (nombres de calles, caminos, etc.) están controlados por [OpenStreetMap](http://www.openstreetmap.org/), un proyecto colaborativo para crear un mapa editable gratuito del mundo. Si notas que algo no está del todo bien, ya que es código abierto, simplemente [sign up](https://www.openstreetmap.org/user/new) y envía un arreglo.

### Solución de problemas

Si estás teniendo problemas al representar archivos geoJSON, asegúrate que tienes un archivo geoJSON válido al ejecutarlo en un [limpiador de geoJSON](http://geojsonlint.com/). Si tus puntos no aparecen donde lo esperas (<em>p. ej.</em>, aparecen en la mitad del océano), es probable que los datos estén en una proyección que actualmente no se admite. Actualmente, {% data variables.product.product_name %} admite únicamente la proyección `urn:ogc:def:crs:OGC:1.3:CRS84`.

Por otra parte, si tu archivo `.geojson` es particularmente grande (superior a 10 MB), no es posible representarlo dentro del navegador. Si ese es el caso, por lo general verás un mensaje similar a este:

![Archivo de gran tamaño](/assets/images/help/repository/view_raw.png)

Todavía se podrían representar los datos al convertir el archivo `.geojson` a [TopoJSON](https://github.com/mbostock/topojson), un formato de compresión que, en algunos casos, puede reducir el tamaño del archivo hasta un 80 %. Por supuesto, siempre puedes partir el archivo en fragmentos más pequeños (como por estado o por año), y almacenar los datos como archivos múltiples dentro del repositorio.

### Recursos adicionales

* [Documentación Leaflet.js geojson](http://leafletjs.com/examples/geojson.html)
* [Documentación de estilización de marcador MapBox](http://www.mapbox.com/developers/simplestyle/)
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)
