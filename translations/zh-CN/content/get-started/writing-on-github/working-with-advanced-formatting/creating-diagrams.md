---
title: 创建图表
intro: 创建图表以通过图表和图形传达信息
versions:
  feature: mermaid
shortTitle: 创建图表
---

## 关于创建图表

您可以使用三种不同的语法在 Markdown 中创建图表：geoJSON、topoJSON 和 ASCII STL。

## 创建 Mermaid 图表

Mermaid 是一个受 Markdown 启发的工具，可以将文本渲染成图表。 例如，Mermaid 可以渲染流程图、序列图、饼图等。 更多信息请参阅 [Mermaid 文档](https://mermaid-js.github.io/mermaid/#/)。

要创建 Mermaid 图，请在带有 `Mermaid` 语言标识符的围栏代码块中添加 Mermaid 语法。 有关创建代码块的更多信息，请参阅“[创建和突显代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

例如，您可以创建流程图：

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

![渲染的 Mermaid 流程图](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**注意：** 如果您在 {% data variables.product.company_short %}上使用 Mermaid 语法时运行第三方 Mermaid 插件，可能会发现错误。

{% endnote %}

## 创建 geoJSON 和 topoJSON 地图

您可以使用 geo/topoJSON 语法来创建交互式地图。 要创建地图，请在具有 `geojson` 或 `topojson` 语法标识符的受防护代码块中添加 geoJSON 或 topoJSON。 更多信息请参阅“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

### 使用 geoJSON

例如，您可以创建一个简单的地图：

<pre>
```geojson
{
  "type": "Polygon",
  "coordinates": [
      [
          [-90,30],
          [-90,35],
          [-90,35],
          [-85,35],
          [-85,30]
      ]
  ]
}
```
</pre>

![渲染的地图](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### 使用 topoJSON

例如，您可以创建一个简单的 topoJSON 地图：

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

![渲染的 topojson 地图](/assets/images/help/writing/fenced-topojson-rendered-map.png)

有关使用 `.geojson` 和 `.topojson` 文件的详细信息，请参阅“[使用非代码文件](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)”。


## 创建 STL 3D 模型

您可以直接在 Markdown 中使用 ASCII STL 语法来创建交互式 3D 模型。 要显示模型，请在具有 `stl` 语法标识符的围栏代码块中添加 ASCII STL 语法。 更多信息请参阅“[创建和突出显示代码块](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”。

例如，您可以创建一个简单的 3D 模型：

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

![渲染的 3D 模型](/assets/images/help/writing/fenced-stl-rendered-object.png)

有关使用 `.stl` 文件的详细信息，请参阅“[使用非代码文件](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)”。

