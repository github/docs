---
title: Arquivos de mapa geoJSON no GitHub
redirect_from:
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

O {% data variables.product.product_name %} é compatível com a renderização de arquivos de mapas geoJSON e topoJSON nos repositórios do {% data variables.product.product_name %}. Simplesmente faça o commit do arquivo como você faria normalmente usando uma extensão `.geojson` ou `.topojson`. Arquivos com a extensão `.json` também são compatíveis, mas somente se o `type` (tipo) for configurado para `FeatureCollection` (Coleção de elementos gráficos), `GeometryCollection` (Coleções geométricas) ou `topology` (topologia). Depois, navegue para o caminho do arquivo geoJSON em GitHub.com.

Quando você clicar no ícone de folha de papel à direita, também verá as alterações feitas naquele arquivo como parte de um commit.

![Captura de tela seletor Source Render (Renderizar fonte)](/assets/images/help/repository/source-render-toggle-geojson.png)

### Tipos geométricos

Os mapas no {% data variables.product.product_name %} usam [Leaflet.js](http://leafletjs.com) e são compatíveis com todos os tipos geométricos descritos nas [especificações geoJSON](http://www.geojson.org/geojson-spec.html) (Ponto, LineString, Polígono, Múltiplos Pontos, MultiLineString, MultiPolygon e GeometryCollection). Os arquivos TopoJSON devem ser do tipo "Topology" (Topologia) e estar de acordo com as [especificações topoJSON](https://github.com/mbostock/topojson/wiki/Specification).

### Estilos de elementos gráficos

Você pode personalizar a maneira como os elementos gráficos são exibidos, como especificar uma cor ou adicionar um ícone descritivo, transmitindo metadados adicionais nas propriedades do objeto geoJSON. As opções são:

* `marker-size` (marcador de tamanho) - `small` (pequeno), `medium` (médio) ou `large` (grande)
* `marker-color` (marcador de cores) Válido para cores RGB e hexadecimal
* `marker-symbol` (marcador de símbolos) - um ícone ID do [projeto Maki](http://mapbox.com/maki/) ou um caractere alfanumérico único (a-z ou 0-9).
* `stroke` (traço) - cor da borda ou linha de um polígono (RGB)
* `stroke-opacity` (opacidade do traço) - opacidade de uma borda ou linha de um polígono (0,0 - 1,0)
* `stroke-width` (largura do traço) - largura da linha ou borda de um polígono
* `fill` (preenchimento) - a cor do interior de um polígono (RGB)
* `fill-opacity` (opacidade do preenchimento) - opacidade do interior de um polígono (0,0 - 1,0)

Consulte a [ versão 1.1.0 do simplestyle especificações de código aberto](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) para obter mais informações.

### Incorporar o mapa em outro lugar

Você quer deixar o seu mapa geoJSON disponível em outro lugar além do {% data variables.product.product_name %}? Simplesmente modifique este modelo e coloque-o em qualquer página HTML compatível com javascript (por exemplo, [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por exemplo, se a URL de seu mapa é [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), o código de incorporação será:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Por padrão, o mapa incorporado tem 420px x 620px, mas é possível personalizar a saída passando as variáveis de altura e largura como parâmetros no final, como `?height=300&width=500`.

{% tip %}

**Observação**: `ref` pode ser um branch ou o hash para um commit individual (como `2391ae`).

{% endtip %}

### Clustering

Se o seu mapa contém um número grande de marcadores (aproximadamente mais de 750), em níveis de zoom maiores, o GitHub automaticamente fará cluster de marcadores próximos. Simplesmente clique em cluster ou aumentar o zoom para ver os marcadores individuais.

### Algo errado no mapa de base

Os dados do mapa de base (nomes de ruas, estradas etc) são determinados pelo [OpenStreetMap](http://www.openstreetmap.org/), um projeto colaborativo para criação de um mapa do mundo grátis e editável. Por ser de código aberto, se você observar que alguma coisa não está certa, simplesmente [inscreva-se](https://www.openstreetmap.org/user/new) e envie uma correção.

### Solução de Problemas

Se você está com problemas para renderizar arquivos geoJSON, certifique-se de que tem um arquivo geoJSON válido, executando-o por meio de um [linter geoJSON](http://geojsonlint.com/). Se os pontos não estão aparecendo onde deveriam (<em>por exemplo</em>, no meio do oceano), é provável que os dados estejam em uma projeção que não é compatível atualmente. No momento, o {% data variables.product.product_name %} somente é compatível com a projeção `urn:ogc:def:crs:OGC:1.3:CRS84`.

Além disso, se o seu arquivo `.geojson` for particularmente grande (acima de 10 MB), não é possível renderizar no navegador. Se esse for o caso, você normalmente verá uma mensagem parecida com esta:

![Arquivo grande](/assets/images/help/repository/view_raw.png)

Ainda pode ser possível renderizar os dados convertendo o arquivo `.geojson` em [TopoJSON](https://github.com/mbostock/topojson), um formato compactado que pode reduzir o tamanho dos arquivos em até 80%, em alguns casos. Claro que você sempre pode quebrar os arquivos em pedaços menores (como por estado ou por ano) e armazenar os dados em vários arquivos no repositório.

### Recursos adicionais

* [Documentação geojson Leaflet.js](http://leafletjs.com/examples/geojson.html)
* [Documentação MapBox marcadores de estilo](http://www.mapbox.com/developers/simplestyle/)
* [Wiki TopoJSON](https://github.com/mbostock/topojson/wiki)
