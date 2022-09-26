---
title: ダイアグラムの作成
intro: 図を作成して、チャートとグラフを使って情報を伝えます
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529736'
---
## ダイアグラムの作成について

Markdown では、Mermaid、geoJSON と topoJSON、ASCII STL の 3 つの異なる構文を使用してダイアグラムを作成できます。 ダイアグラムのレンダリングは、{% data variables.product.prodname_github_issues %}、{% data variables.product.prodname_discussions %}、pull request、Wiki、Markdown ファイルで利用できます。

## Mermaid ダイアグラムの作成

Mermaid は、テキストをダイアグラムにレンダリングする、マークダウンから着想を得たツールです。 たとえば、Mermaid ではフローチャート、シーケンス図、円グラフなどをレンダリングできます。 詳細については、[Mermaid のドキュメント](https://mermaid-js.github.io/mermaid/#/)を参照してください。

Mermaid ダイアグラムを作成するには、`mermaid` 言語識別子をもつコード ブロック内に Mermaid 構文を追加します。 コード ブロックの作成の詳細については、「[コード ブロックの作成と強調表示](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)」を参照してください。

たとえば、フロー チャートを作成できます。

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

![レンダリングされた Mermaid フロー チャート](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**注**: {% data variables.product.company_short %} で Mermaid 構文を使用しているときに、サードパーティの Mermaid プラグインを実行すると、エラーが発生する可能性があります。

{% endnote %}

## GeoJSON マップと TopoJSON マップの作成

GeoJSON または TopoJSON 構文を使うと、対話型マップを作成できます。 マップを作成するには、フェンス コード ブロック内に GeoJSON または TopoJSON を、`geojson` または `topojson` 構文識別子と共に追加します。 詳細については、「[コード ブロックの作成と強調表示](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)」を参照してください。

### GeoJSON の使用

たとえば、シンプルなマップを作成できます。

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

![レンダリングされたマップ](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### TopoJSON の使用

たとえば、シンプルな TopoJSON マップを作成できます。

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

![レンダリングされた topojson マップ](/assets/images/help/writing/fenced-topojson-rendered-map.png)

`.geojson` ファイルと `.topojson` ファイルでの作業の詳細については、「[非コードファイルでの作業](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)」を参照してください。


## STL 3D モデルの作成

マークダウンで ASCII STL 構文を直接使用して、対話型の 3D モデルを作成できます。 モデルを表示するには、コード ブロック内に ASCII STL 構文を、`stl` 構文識別子と共に追加します。 詳細については、「[コード ブロックの作成と強調表示](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)」を参照してください。

たとえば、シンプルな 3D モデルを作成できます。

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

![レンダリングされた 3D モデル](/assets/images/help/writing/fenced-stl-rendered-object.png)

`.stl` ファイルでの作業の詳細については、「[非コードファイルでの作業](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)」を参照してください。

