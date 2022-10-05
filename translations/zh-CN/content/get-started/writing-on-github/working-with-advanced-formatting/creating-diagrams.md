---
title: 创建关系图
intro: 创建图表以通过图表和图形传达信息
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529733'
---
## 关于创建关系图

可以使用以下三种不同的语法在 Markdown 中创建关系图：mermaid、geoJSON 和 topoJSON、ASCII STL。 关系图可在以下项中呈现：{% data variables.product.prodname_github_issues %}、{% data variables.product.prodname_discussions %}、拉取请求、Wiki 和 Markdown 文件。

## 创建 Mermaid 关系图

Mermaid 是一款受 Markdown 启发的工具，可将文本呈现为关系图。 例如，Mermaid 可以呈现流程图、序列图、饼图等。 有关详细信息，请参阅 [Mermaid 文档](https://mermaid-js.github.io/mermaid/#/)。

若要创建 Mermaid 关系图，请使用 `mermaid` 语言标识符在围栏代码块中添加 Mermaid 语法。 有关创建代码块的详细信息，请参阅“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

例如，可以创建流程图：

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

![呈现的 Mermaid 流程图](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

注意：如果在 {% data variables.product.company_short %} 上使用 Mermaid 语法时运行第三方 Mermaid 插件，你可能会发现出错。

{% endnote %}

## 创建 GeoJSON 和 TopoJSON 地图

可使用 GeoJSON/TopoJSON 语法创建交互式地图。 若要创建地图，请使用 `geojson` 或 `topojson` 语法标识符在围栏代码块中添加 GeoJSON 或 TopoJSON。 有关详细信息，请参阅“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

### 使用 GeoJSON

例如，可创建一个简单的地图：

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

![呈现的地图](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### 使用 TopoJSON

例如，可创建简单的 TopoJSON 地图：

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

![呈现的 topojson 地图](/assets/images/help/writing/fenced-topojson-rendered-map.png)

有关使用 `.geojson` 和 `.topojson` 文件的详细信息，请参阅“[使用非代码文件](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)”。


## 创建 STL 3D 模型

可以直接在 Markdown 中使用 ASCII STL 语法来创建交互式 3D 模型。 若要显示模型，请使用 `stl` 语法标识符在围栏代码块中添加 ASCII STL 语法。 有关详细信息，请参阅“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

例如，可创建简单的 3D 模型：

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

![呈现的 3D 模型](/assets/images/help/writing/fenced-stl-rendered-object.png)

有关使用 `.stl` 文件的详细信息，请参阅“[使用非代码文件](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)”。

