---
title: 다이어그램 만들기
intro: 차트 및 그래프를 통해 정보를 전달하는 다이어그램 만들기
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529737'
---
## 다이어그램 만들기 정보

Mermaid, geoJSON과 topoJSON, ASCII STL의 세 가지 구문을 사용하여 Markdown으로 다이어그램을 만들 수 있습니다. 다이어그램 렌더링은 {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, 끌어오기 요청, wiki 및 Markdown 파일에서 사용할 수 있습니다.

## Mermaid 다이어그램 만들기

Mermaid는 Markdown에서 영감을 받은 도구로, 텍스트를 다이어그램으로 렌더링합니다. 예를 들어 Mermaid는 순서도, 시퀀스 다이어그램, 원형 차트 등을 렌더링할 수 있습니다. 자세한 내용은 [Mermaid 설명서](https://mermaid-js.github.io/mermaid/#/)를 참조하세요.

Mermaid 다이어그램을 만들려면 `mermaid` 언어 식별자를 사용하여 펜싱된 코드 블록 내에 Mermaid 구문을 추가합니다. 코드 블록을 만드는 방법에 대한 자세한 내용은 “[코드 블록 만들기 및 강조 표시](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”를 참조하세요.

예를 들어 순서도를 만들 수 있습니다.

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

![렌더링된 Mermaid 순서도](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**참고:** {% data variables.product.company_short %}에서 Mermaid 구문을 사용할 때 타사 Mermaid 플러그 인을 실행하면 오류가 발생할 수 있습니다.

{% endnote %}

## GeoJSON 및 TopoJSON 맵 만들기

GeoJSON/TopoJSON 구문을 사용하여 대화형 맵을 만들 수 있습니다. 맵을 만들려면 `geojson` 또는 `topojson` 구문 식별자를 사용하여 펜싱된 코드 블록 내에 GeoJSON 또는 TopoJSON을 추가합니다. 자세한 내용은 “[코드 블록 만들기 및 강조 표시](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”를 참조하세요.

### GeoJSON 사용

예를 들어 간단한 맵을 만들 수 있습니다.

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

![렌더링된 맵](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### TopoJSON 사용

예를 들어 간단한 TopoJSON 맵을 만들 수 있습니다.

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

![렌더링된 topojson 맵](/assets/images/help/writing/fenced-topojson-rendered-map.png)

`.geojson` 및 `.topojson` 파일 작업에 대한 자세한 내용은 “[비 코드 파일 작업](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)”을 참조하세요.


## STL 3D 모델 만들기

Markdown에서 직접 ASCII STL 구문을 사용하여 대화형 3D 모델을 만들 수 있습니다. 모델을 표시하려면 `stl` 구문 식별자를 사용하여 펜싱된 코드 블록 내에 ASCII STL 구문을 추가합니다. 자세한 내용은 “[코드 블록 만들기 및 강조 표시](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)”를 참조하세요.

예를 들어 간단한 3D 모델을 만들 수 있습니다.

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

![렌더링된 3D 모델](/assets/images/help/writing/fenced-stl-rendered-object.png)

`.stl` 파일 작업에 대한 자세한 내용은 “[비 코드 파일 작업](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)”을 참조하세요.

