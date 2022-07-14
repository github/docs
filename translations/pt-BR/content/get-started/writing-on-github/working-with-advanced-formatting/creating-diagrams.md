---
title: Criando diagramas
intro: Crie diagramas para transmitir informações sobre gráficos
versions:
  feature: mermaid
shortTitle: Crie diagramas
---

## Sobre a criação de diagramas

Você pode criar diagramas em Markdown usando três sintaxes diferentes: mermaid, geoJSON e topoJSON e ASCII STL.

## Criando diagramas do mermaid

O Mermeid é uma ferramenta inspirada em Markdown que transforma texto em diagramas. Por exemplo, o Mermeid pode interpretar gráficos de fluxo, diagramas de sequência, gráficos de pizza e muito mais. Para obter mais informações, consulte a documentação do [Mermaid](https://mermaid-js.github.io/mermaid/#/).

Para criar um diagrama do Mermaid, adicione a sintaxe do Mermeid dentro de um bloco de código cercado com o identificador da linguagem do `mermaid`. Para obter mais informações sobre a criação de blocos de código, consulte "[Criando e destacando blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

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

**Observação:** Você pode observar erros se você executar um plugin de terceiros do Mermaid ao usar sintaxe do Mermaid em {% data variables.product.company_short %}.

{% endnote %}

## Criando mapas do geoJSON e topoJSON

Você pode usar a sintaxe geo/topoJSON para criar mapas interativos. Para criar um mapa, adicione geoJSON ou topoJSON dentro de um bloco de código cercado com o identificador de sintaxe de `geojson` ou `topojson`. Para obter mais informações, consulte "[Criar e destacar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

### Usando geoJSON

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

### Usando topoJSON

Por exemplo, você pode criar um mapa topoJSON simples:

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

Para obter mais informações sobre como trabalhar com arquivos `.geojson` e `.topojson`, consulte[Trabalhando com arquivos que não são de código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".


## Criando modelos de STL 3D

Você pode usar a sintaxe do ASCII STL diretamente no markdown para criar modelos 3D interativos. Para exibir um modelo, adicione a sintaxe ASCII STL dentro de um bloco de código isolado com o identificador de sintaxe `stl`. Para obter mais informações, consulte "[Criar e destacar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

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

Para mais informações sobre como trabalhar com arquivos `.stl`, consulte[Trabalhando com arquivos que não são de código](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)".

