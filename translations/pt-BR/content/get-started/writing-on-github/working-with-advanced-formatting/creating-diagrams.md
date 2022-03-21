---
title: Criando diagramas
intro: Crie diagramas para transmitir informações sobre gráficos
versions:
  feature: mermaid
shortTitle: Crie diagramas
---

## About creating diagrams

You can create diagrams in Markdown using three different syntaxes: mermaid, geoJSON and topoJSON, and ASCII STL.

## Creating Mermaid diagrams

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

## Creating geoJSON and topoJSON maps

You can use geo/topoJSON syntax to create interactive maps. To create a map, add geoJSON or topoJSON inside a fenced code block with the `geojson` or `topojson` syntax identifier. Para obter mais informações, consulte "[Criar e destacar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

### Using geoJSON

For example, you can create a simple map:

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

![Rendered map](/assets/images/help/writing/fenced-geojson-rendered-map.png)

### Using topoJSON

For example, you can create a simple topoJSON map:

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

![Rendered topojson map](/assets/images/help/writing/fenced-topojson-rendered-map.png)

For more information on working with `.geojson` and `.topojson` files, see "[Working with non-code files](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)."


## Creating STL 3D models

You can use ASCII STL syntax directly in markdown to create interactive 3D models. To display a model, add ASCII STL syntax inside a fenced code block with the `stl` syntax identifier. Para obter mais informações, consulte "[Criar e destacar blocos de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".

For example, you can create a simple 3D model:

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

![Rendered 3D model](/assets/images/help/writing/fenced-stl-rendered-object.png)

For more information on working with `.stl` files, see "[Working with non-code files](/repositories/working-with-files/using-files/working-with-non-code-files#3d-file-viewer)."

