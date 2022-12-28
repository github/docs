---
title: Erstellen von Diagrammen
intro: 'Diagramme erstellen, um Informationen in Form von Diagrammen und Graphen zu vermitteln'
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529735'
---
## Informationen zum Erstellen von Diagrammen

Du kannst Diagramme in Markdown mit drei verschiedenen Syntaxen erstellen: Mermaid, geoJSON und topoJSON sowie ASCII STL. Diagrammrendering ist in {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, Pull Requests, Wikis und Markdowndateien verfügbar.

## Erstellen von Mermaid-Diagrammen

Mermaid ist ein von Markdown inspiriertes Tool, das Text in Diagrammen rendert. Mermaid kann beispielsweise Flussdiagramme, Sequenzdiagramme, Kreisdiagramme und vieles mehr rendern. Weitere Informationen findest du in der [Mermaid-Dokumentation](https://mermaid-js.github.io/mermaid/#/).

Füge zum Erstellen eines Mermaid-Diagramms Mermaid-Syntax innerhalb eines Fenced-Code-Blocks mit dem Sprachbezeichner `mermaid` hinzu. Weitere Informationen zum Erstellen von Codeblöcken findest du unter [Codeblöcke erstellen und markieren](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

Du kannst beispielsweise ein Flussdiagramm erstellen:

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

![Gerendertes Mermaid-Flussdiagramm](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Hinweis:** Möglicherweise treten Fehler auf, wenn du bei Verwendung von Mermaid-Syntax für {% data variables.product.company_short %} ein Mermaid-Plug-In eines Drittanbieters verwendest.

{% endnote %}

## geoJSON- und topoJSON-Karten erstellen

Du kannst GeoJSON/TopoJSON-Syntax verwenden, um interaktive Karten zu erstellen. Füge zum Erstellen einer Karte GeoJSON oder TopoJSON innerhalb eines Fenced-Code-Blocks mit dem Syntaxbezeichner `geojson` oder `topojson` hinzu. Weitere Informationen findest du unter [Codeblöcke erstellen und markieren](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

### GeoJSON verwenden

Du kannst beispielsweise eine einfache Karte erstellen:

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

![Gerenderte Karte](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### TopoJSON verwenden

Du kannst beispielsweise eine einfache TopoJSON-Karte erstellen:

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

![Gerenderte topoJSON-Karte](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Weitere Informationen zum Arbeiten mit Dateien vom Typ `.geojson` und `.topojson` findest du unter [Arbeiten mit anderen Dateien als Codedateien](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github).


## Erstellen von STL-3D-Modellen

Du kannst ASCII STL-Syntax direkt in Markdown verwenden, um interaktive 3D-Modelle zu erstellen. Füge zum Anzeigen eines Modells ASCII STL-Syntax innerhalb eines Fenced-Code-Blocks mit dem Syntaxbezeichner `stl` hinzu. Weitere Informationen findest du unter [Codeblöcke erstellen und markieren](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

Du kannst beispielsweise ein einfaches 3D-Modell erstellen:

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

![Gerendertes 3D-Modell](/assets/images/help/writing/fenced-stl-rendered-object.png)

Weitere Informationen zum Arbeiten mit Dateien vom Typ `.stl` findest du unter [Arbeiten mit anderen Dateien als Codedateien](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer).

