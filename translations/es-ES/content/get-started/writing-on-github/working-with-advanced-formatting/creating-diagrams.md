---
title: Crear diagramas
intro: Creación de diagramas para transmitir información mediante tablas y gráficos
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529739'
---
## Acerca de crear diagramas

Puede crear diagramas en Markdown con tres sintaxis diferentes: Mermaid, geoJSON y topoJSON, y STL ASCII. La representación de diagramas está disponible en los archivos {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, solicitudes de incorporación de cambios, wikis y Markdown.

## Crear diagramas de Mermaid

Mermaid es una herramienta inspirada en Markdown que representa texto en diagramas. Por ejemplo, Mermaid puede representar gráficos de flujo, diagramas de secuencia, gráficos circulares y mucho más. Para obtener más información, vea la [documentación de Mermaid](https://mermaid-js.github.io/mermaid/#/).

Para crear un diagrama de Mermaid, agregue la sintaxis de Mermaid dentro de un bloque de código delimitado con el identificador de idioma `mermaid`. Para obtener más información sobre cómo crear bloques de código, vea "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por ejemplo, puede crear un gráfico de flujo:

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

![Gráfico de flujo de Mermaid representado](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Nota:** Es posible que observe errores si ejecuta un complemento de Mermaid de terceros al usar la sintaxis de Mermaid en {% data variables.product.company_short %}.

{% endnote %}

## Creación de mapas GeoJSON y TopoJSON

Puedes usar la sintaxis GeoJSON o TopoJSON para crear mapas interactivos. Para crear un mapa, agrega GeoJSON o TopoJSON dentro de un bloque de código delimitado con el identificador de sintaxis `geojson` o `topojson`. Para obtener más información, vea "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

### Uso de GeoJSON

Por ejemplo, puede crear un mapa sencillo:

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

![Mapa representado](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Uso de TopoJSON

Por ejemplo, puedes crear un mapa de TopoJSON sencillo:

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

![Mapa de topoJSON representado](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Para obtener más información sobre cómo trabajar con archivos `.geojson` y `.topojson`, vea "[Trabajar con archivos que no son de código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".


## Crear modelos STL 3D

Puede usar la sintaxis STL ASCII directamente en Markdown para crear modelos 3D interactivos. Para mostrar un modelo, agregue la sintaxis STL ASCII dentro de un bloque de código cercado con el identificador de sintaxis `stl`. Para obtener más información, vea "[Crear y resaltar bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por ejemplo, puede crear un modelo 3D sencillo:

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

![Modelo 3D representado](/assets/images/help/writing/fenced-stl-rendered-object.png)

Para obtener más información sobre cómo trabajar con archivos `.stl`, vea "[Trabajar con archivos que no son de código](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)".

