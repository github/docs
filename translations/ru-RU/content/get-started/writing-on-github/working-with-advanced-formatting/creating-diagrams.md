---
title: Создание схем
intro: Создание схем для передачи информации с помощью диаграмм и графиков
versions:
  feature: mermaid
shortTitle: Create diagrams
ms.openlocfilehash: 0e588fb771bd7992f75e364624576e216cf84000
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529738'
---
## Сведения о создании схем

Схемы можно создавать в Markdown с помощью трех вариантов синтаксиса: mermaid, geoJSON и topoJSON, а также ASCII STL. Отрисовка диаграмм доступна в {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, запросах на вытягивание, вики-страницах и файлах Markdown.

## Создание схем mermaid

Mermaid — это инструмент наподобие Markdown, который преобразует текст в схемы. Например, Mermaid может отображать блок-схемы, схемы последовательностей, круговые диаграммы и др. Дополнительные сведения см. в [документации по Mermaid](https://mermaid-js.github.io/mermaid/#/).

Чтобы создать схему Mermaid, добавьте фрагмент разметки Mermaid в блок кода с ограждением, указав идентификатор языка `mermaid`. Дополнительные сведения о создании блоков кода см. в разделе "[Создание и выделение блоков кода](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

Например, можно создать блок-схему:

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

![Отрисованная блок-схема Mermaid](/assets/images/help/writing/mermaid-flow-chart.png)

{% note %}

**Примечание.** Если вы используете синтаксис Mermaid в {% data variables.product.company_short %}, то при запуске сторонних подключаемых модулей Mermaid могут возникать ошибки.

{% endnote %}

## Создание карт GeoJSON и TopoJSON

Для создания интерактивных карт можно использовать синтаксис GeoJSON/TopoJSON. Чтобы создать карту, добавьте разметку GeoJSON или TopoJSON в блок кода с ограждением, указав идентификатор синтаксиса `geojson` или `topojson`. Дополнительные сведения см. в разделе [Создание и выделение блоков кода](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

### Использование GeoJSON

Например, можно создать простую карту:

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

![Отрисованная карта](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Использование TopoJSON

Например, можно создать простую карту TopoJSON:

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

![Отрисованная карта topoJSON](/assets/images/help/writing/fenced-topojson-rendered-map.png)

Дополнительные сведения о работе с файлами `.geojson` и `.topojson` см. в разделе "[Работа с файлами без кода](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".


## Создание трехмерных моделей STL

Синтаксис ASCII STL можно использовать непосредственно в Markdown для создания интерактивных трехмерных моделей. Чтобы отобразить модель, добавьте разметку ASCII STL в блок кода с ограждением, указав идентификатор синтаксиса `stl`. Дополнительные сведения см. в разделе [Создание и выделение блоков кода](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

Например, можно создать простую трехмерную модель:

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

![Отрисованная трехмерная модель](/assets/images/help/writing/fenced-stl-rendered-object.png)

Дополнительные сведения о работе с файлами `.stl` см. в разделе "[Работа с файлами без кода](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer).

