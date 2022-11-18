---
title: Création de diagrammes
intro: Créer des diagrammes pour transmettre des informations par le biais de diagrammes et de graphiques
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529734'
---
## À propos de la création de diagrammes

Vous pouvez créer des diagrammes en Markdown en utilisant trois syntaxes différentes : Mermaid, geoJSON et topoJSON, et ASCII STL. Le rendu de diagramme est disponible dans {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, les demandes de tirage, les wikis et les fichiers Markdown.

## Création de diagrammes Mermaid

Mermaid est un outil inspiré de Markdown qui transforme le texte en diagrammes. Par exemple, Mermaid peut permettre de créer des diagrammes de flux, des diagrammes de séquence, des graphiques en secteurs, etc. Pour plus d’informations, consultez la [documentation Mermaid](https://mermaid-js.github.io/mermaid/#/).

Pour créer un diagramme Mermaid, ajoutez la syntaxe Mermaid à l’intérieur d’un bloc de code délimité avec l’identificateur de langage `mermaid`. Pour plus d’informations sur la création de blocs de code, consultez « [Création et mise en évidence de blocs de code](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) ».

Par exemple, vous pouvez créer un diagramme de flux :

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

![Diagramme de flux Mermaid obtenu](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Remarque :** vous pouvez rencontrer des erreurs si vous exécutez un plug-in Mermaid tiers alors que vous utilisez la syntaxe Mermaid sur {% data variables.product.company_short %}.

{% endnote %}

## Création de cartes GeoJSON et TopoJSON

Vous pouvez utiliser la syntaxe GeoJSON/TopoJSON pour créer des cartes interactives. Pour créer une carte, ajoutez GeoJSON ou TopoJSON à l’intérieur d’un bloc de code délimité avec l’identificateur de syntaxe `geojson` ou `topojson`. Pour plus d’informations, consultez « [Création et mise en surbrillance de blocs de code](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) ».

### Utilisation de GeoJSON

Par exemple, vous pouvez créer une carte simple :

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

![Carte obtenue](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Utilisation de TopoJSON

Par exemple, vous pouvez créer une carte TopoJSON simple :

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

![Carte topoJSON obtenue](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Pour plus d’informations sur l’utilisation de fichiers `.geojson` et `.topojson`, consultez « [Utilisation de fichiers non basés sur du code](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github) ».


## Création de modèles 3D STL

Vous pouvez utiliser la syntaxe ASCII STL directement en Markdown pour créer des modèles 3D interactifs. Pour afficher un modèle, ajoutez la syntaxe ASCII STL à l’intérieur d’un bloc de code délimité avec l’identificateur de syntaxe `stl`. Pour plus d’informations, consultez « [Création et mise en surbrillance de blocs de code](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) ».

Par exemple, vous pouvez créer un modèle 3D simple :

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

![Modèle 3D obtenu](/assets/images/help/writing/fenced-stl-rendered-object.png)

Pour plus d’informations sur l’utilisation de fichiers `.stl`, consultez « [Utilisation de fichiers non basés sur du code](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer) ».

