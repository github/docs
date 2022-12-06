---
title: Criando diagramas
intro: Crie diagramas para transmitir informações sobre gráficos
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529732'
---
## Sobre a criação de diagramas

Você pode criar diagramas em Markdown usando três sintaxes diferentes: mermaid, geoJSON e topoJSON e ASCII STL. A renderização do diagrama está disponível em {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, solicitações de pull, wikis e arquivos markdown.

## Criando diagramas do mermaid

O Mermeid é uma ferramenta inspirada em Markdown que transforma texto em diagramas. Por exemplo, o Mermeid pode interpretar gráficos de fluxo, diagramas de sequência, gráficos de pizza e muito mais. Para obter mais informações, confira a [documentação do Mermaid](https://mermaid-js.github.io/mermaid/#/).

Para criar um diagrama do Mermaid, adicione a sintaxe do Mermaid dentro de um bloco de código isolado com o identificador de linguagem `mermaid`. Para obter mais informações sobre como criar blocos de código, confira "[Como criar e realçar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por exemplo, você pode criar um fluxograma:

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

![Fluxograma interpretado do Mermeid](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Observação:** talvez você observe erros se executar um plug-in do Mermaid de terceiros ao usar a sintaxe Mermaid no {% data variables.product.company_short %}.

{% endnote %}

## Criar mapas GeoJSON e TopoJSON

É possível usar a sintaxe GeoJSON/TopoJSON para criar mapas interativos. Para criar um mapa, adicione GeoJSON ou TopoJSON em um bloco de código protegido com o identificador de sintaxe `geojson` ou `topojson`. Para obter mais informações, confira "[Como criar e realçar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

### Uso do GeoJSON

Por exemplo, você pode criar um mapa simples:

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

![Mapa interpretado](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Uso do TopoJSON

Por exemplo, é possível criar um mapa TopoJSON simples:

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

![Mapa do topojson interpretado](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Para obter mais informações sobre como trabalhar com arquivos `.geojson` e `.topojson`, confira "[Como trabalhar com arquivos sem código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".


## Criando modelos de STL 3D

Você pode usar a sintaxe do ASCII STL diretamente no markdown para criar modelos 3D interativos. Para ver um modelo, adicione a sintaxe STL ASCII dentro de um bloco de código isolado com o identificador de sintaxe `stl`. Para obter mais informações, confira "[Como criar e realçar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Por exemplo, você pode criar um modelo 3D simples:

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

![Modelo 3D interpretado](/assets/images/help/writing/fenced-stl-rendered-object.png)

Para obter mais informações sobre como trabalhar com arquivos `.stl`, confira "[Como trabalhar com arquivos sem código](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)".

