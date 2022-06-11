---
title: Crear diagramas
intro: Crear diagramas para transmitir información mediante tablas y gráficas
versions:
  feature: mermaid
shortTitle: Crear diagramas
---

## Acerca de crear diagramas

Puedes crear diagramas en lenguaje de marcado utilizando tres tipos de sintaxis diferentes: mermaid, geoJSON y topoJSON y ASCII STL.

## Crear diagramas de Mermaid

Mermaid es una herramienta inspirada en el lenguaje de marcado que convierte el texto en diagramas. Por ejemplo, Mermaid puede representar diagramas de flujo, diagramas de secuencia, gráficas de pay y más. Para obtener más información, consulta la [documentación de Mermaid](https://mermaid-js.github.io/mermaid/#/).

Para crear un diagrama de Mermaid, agrega la sintaxis de Mermaid dentro de un bloque de código cercado con el identificador de lenguaje `mermaid`. Para obtener más información sobre cómo crear bloques de código, consulta la sección "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por ejemplo, puedes crear un diagrama de flujo:

<pre>
Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
</pre>

![Diagrama de flujo generado con Mermaid](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Nota:** Puedes observar los errores si ejecutas un complemento de Mermaid de terceros cuando utilizas la sintaxis de Mermaid en {% data variables.product.company_short %}.

{% endnote %}

## Crear mapas de geoJSON y topoJSON

Puedes utilizar la sintaxis de geo/topoJSON para crear mapas interactivos. Para crear un mapa, agrega geoJSON o topoJSON dentro de un bloque de código cercado con el identificador de sintaxis de `geojson` o de `topojson`. Para obtener más información, consulta "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

### Utilizando geoJSON

Por ejemplo, puedes crear un mapa simple:

<pre>
```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
              [-90,35],
              [-90,30],
              [-85,30],
              [-85,35],
              [-90,35]
          ]
        ]
      }
    }
  ]
}
```
</pre>

![Mapa generado](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Utilizando topoJSON

Por ejemplo, puedes crear un mapa simple de topoJSON:

<pre>
```topojson
{
  "type": "Topology",
  "transform": {
    "scale": [0.0005000500050005, 0.00010001000100010001],
    "translate": [100, 0]
  },
  "objects": {
    "example": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {"prop0": "value0"},
          "coordinates": [4000, 5000]
        },
        {
          "type": "LineString",
          "properties": {"prop0": "value0", "prop1": 0},
          "arcs": [0]
        },
        {
          "type": "Polygon",
          "properties": {"prop0": "value0",
            "prop1": {"this": "that"}
          },
          "arcs": [[1]]
        }
      ]
    }
  },
  "arcs": [[[4000, 0], [1999, 9999], [2000, -9999], [2000, 9999]],[[0, 0], [0, 9999], [2000, 0], [0, -9999], [-2000, 0]]]
}
```
</pre>

![Mapa generado con topoJSON](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Para obtener más información sobre cómo trabajar con los archivos de `.geojson` y `.topojson`, consulta la sección "[Trabajar con archivos sin código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".


## Crear modelos 3D de STL

Puedes utilizar la sintaxis de ASCII STL directamente en el lenguaje de marcado para crear modelos 3D interactivos. Para mostrar un modelo, agrega la sintaxis ASCII STL dentro de un bloque de código cercado con el identificador de sintaxis `stl`. Para obtener más información, consulta "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por ejemplo, puedes crear un modelo 3D simple:

<pre>
```stl
solid cube_corner
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 1.0 0.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 1.0 0.0 0.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 1.0
      vertex 0.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.577 0.577 0.577
    outer loop
      vertex 1.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
endsolid
```
</pre>

![Modelo 3D generado](/assets/images/help/writing/fenced-stl-rendered-object.png)

Para obtener más información sobre cómo trabajar con los archivos `.stl`, consulta la sección "[Trabajar con archivos sin código](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)".

