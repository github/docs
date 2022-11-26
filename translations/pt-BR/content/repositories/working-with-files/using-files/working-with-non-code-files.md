---
title: Como trabalhar com arquivos sem código
intro: '{% data variables.product.product_name %} é compatível com a interpretação e diferenciação em uma série de formatos de arquivo que não são de código.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Working with non-code files
ms.openlocfilehash: c770235d94d6191d60505ba60b0f4f81ae49b6bd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107602'
---
## Renderizar e comparar imagens

O {% data variables.product.product_name %} pode exibir diversos formatos comuns de imagem, incluindo PNG, JPG, GIF, PSD e SVG. Além de exibir as imagens, existem diversas formas de comparara as diferenças entre as versões desses formatos de imagem.

{% note %}

**Observação**: 
- O {% data variables.product.prodname_dotcom %} não dá suporte à comparação das diferenças entre arquivos PSD. 
- Caso você esteja usando o navegador Firefox, talvez os SVGs no {% data variables.product.prodname_dotcom %} não sejam renderizados.

{% endnote %}

### Exibir imagens

Você pode procurar e exibir diretamente as imagens do repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}em {% data variables.location.product_location %}{% endif %}:

![imagem inline](/assets/images/help/images/view.png)

No momento, os arquivos SVGs não são compatíveis com animação ou scripts inline.

### Exibir diferenças

Compare imagens visualmente em três modos diferentes: [2-up](#2-up), [deslizar](#swipe) e [exibição em camadas](#onion-skin).

#### 2-up

O modo **2-up** é o padrão: ele fornece uma visão rápida das duas imagens. Além disso, se a imagem tiver mudado de tamanho entre as versões, a alteração real da dimensão será exibida. Isso facilita identificar quando as imagens foram redimensionadas, como quando ativos são atualizados em resoluções mais altas.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Swipe

O modo **Deslizar** permite ver partes da imagem lado a lado. Não sabe se houve mudança de cor nas versões? Posicione o controle deslizante sobre a área em questão e compare os pixels.

![Swipe](/assets/images/help/repository/images-swipe-view.png)

#### Exibição em camadas

A **exibição em camadas** é muito útil para identificar movimentações sutis dos elementos. Um ícone foi movimentado dois pixels para a esquerda? Arraste o controle deslizante de opacidade um pouco e observe se as coisas se movem.

![Exibição em camadas](/assets/images/help/repository/images-onion-view.gif)

## Visualizador de arquivos 3D

O {% data variables.product.product_name %} pode hospedar e renderizar arquivos 3D com a extensão *.stl*.

Diretamente em um arquivo STL no {% data variables.product.product_name %}, você pode:

* Clicar e arrastar para girar o modelo.
* Clicar com o botão direito do mouse e arrastar para converter a exibição.
* Rolar para ampliar e reduzir.
* Clicar nos diferentes modos de exibição para alterar a exibição.

### Diffs

Em um commit ou conjunto de alterações que inclui um arquivo STL, você poderá ver um diff antes e depois do arquivo.

Por padrão, você obterá uma exibição em que tudo que permanecer inalterado estará em wireframe. As adições recebem a cor verde e as partes removidas ficam em vermelho.

![wireframe](/assets/images/help/repository/stl_wireframe.png)

Selecione também a opção **Controle Deslizante de Revisão**, que permite usar um controle deslizante na parte superior do arquivo para fazer a transição entre as revisões atuais e anteriores.

### Corrigir desempenho lento

Caso você veja este ícone no canto do visualizador, isso significa que a tecnologia WebGL não está disponível no seu navegador:

![Erro exibido para WebGL](/assets/images/help/repository/render_webgl_error.png)

A WebGL é necessária para o aproveitamento completo do hardware do computador. Recomendamos experimentar navegadores como o [Chrome](https://www.google.com/intl/en/chrome/browser/) ou o [Firefox](https://www.mozilla.org/en-US/firefox/new/), que são fornecidos com o WebGL habilitado.

### Erro: "Não é possível exibir"

Se o seu modelo não for válido, o GitHub talvez não consiga exibir o arquivo. Além disso, os arquivos com mais de 10 MB são grandes demais para exibição no GitHub.

### Incorporar o modelo em outro lugar

Para exibir o arquivo 3D em outro lugar na Internet, modifique esse modelo e coloque-o em qualquer página HTML que aceite JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por exemplo, se a URL do modelo for [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), o código de inserção será:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Por padrão, o renderizador incorporado tem 420 pixels de largura por 620 pixels de altura, mas você pode personalizar a saída transmitindo as variáveis de altura e largura como parâmetros no final da URL, como `?height=300&width=500`.

{% tip %}

**Observação**: `ref` pode ser um branch ou um hash para um commit individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Interpretação em Markdown

Você pode incorporar a sintaxe do ASCII STL diretamente ao Markdown. Para obter mais informações, confira "[Como criar diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)".
{% endif %}

## Renderizar dados CSV e TSV

O GitHub dá suporte à renderização de dados de tabela na forma de arquivos *.csv* (separados por vírgula) e *.tsv* (separados por tabulação).

![Arquivo CSV de amostra renderizado](/assets/images/help/repository/rendered_csv.png)

Quando exibido, todos os arquivos _.csv_ ou _.tsv_ com commit em um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}em {% data variables.location.product_location %}{% endif %} é renderizado automaticamente como uma tabela interativa, completa com cabeçalhos e numeração de linha. Por padrão, vamos sempre presumir que a primeira linha é a linha de cabeçalho.

Você pode criar um link para uma linha específica clicando no número da linha ou selecionar várias linhas mantendo a tecla Shift pressionada. Copie e envie a URL para um amigo.

### Pesquisando dados

Para encontrar um valor específico no conjunto de dados, comece a inserir o valor na barra de pesquisa logo acima do arquivo. As linhas serão filtradas automaticamente:

![Pesquisa de valores](/assets/images/help/repository/searching_csvs.gif)

### Tratando erros

Ocasionalmente, você pode identificar que seu arquivo CSV ou TSV não está renderizando. Nesse caso, uma caixa de erro será exibida na parte inferior do texto bruto sugerindo o motivo do erro.

![Mensagem de erro de renderização do arquivo CSV](/assets/images/help/repository/csv_render_error.png)

Os erros comuns incluem:

* Divergência na contagem de colunas. Você deve ter o mesmo número de separadores em cada linha, mesmo nas células em branco
* Exceder o tamanho do arquivo. A renderização funciona apenas para arquivos com até 512 KB. Qualquer arquivo maior que isso deixa o navegador lento.

## Renderizar documentos PDF

O GitHub oferece suporte à renderização de documentos PDF.

![Documento PDF renderizado](/assets/images/help/repository/rendered-pdf.png)

No momento, os links nos PDFs são ignorados.

## Renderizar diferenças em documentos em prosa

Os commits e as solicitações de pull que incluem documentos de prosa podem representar esses documentos com as exibições de *origem* e *renderizada*.

A exibição de origem mostra o texto bruto digitado, enquanto a exibição renderizada mostra como o texto será mostrado após a renderização no {% data variables.product.product_name %}. Por exemplo, essa pode ser a diferença entre a exibição de `**bold**` em Markdown e de **negrito** na exibição renderizada.

Há suporte para a renderização em prosa em documentos renderizados compatíveis com [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Organização
* Creole
* MediaWiki
* Pod

![Ícone de papel para exibir documento em prosa renderizado](/assets/images/help/repository/rendered_prose_diff.png)

Você pode clicar em {% octicon "file" aria-label="The paper icon" %} para ver as alterações feitas no documento como parte de um commit.

![Alterações em prosa renderizada](/assets/images/help/repository/rendered_prose_changes.png)

### Desabilitando a interpretação do Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

### Exibir alterações nos atributos

Fornecemos uma dica de ferramenta que descreve as alterações nos atributos que, ao contrário de palavras, não ficarão visíveis no documento renderizado. Por exemplo, se a URL de um link for alterada de um site para outro, mostraremos uma dica de ferramenta como esta:

![Alterações no atributo de prosa renderizada](/assets/images/help/repository/prose_diff_attributes.png)

### Fazer comentários em alterações

Os [comentários sobre um commit](/articles/commenting-on-differences-between-files) só podem ser adicionados aos arquivos na exibição de *origem*, linha a linha.

### Vincular a cabeçalhos

Assim como acontece com [outros documentos em prosa renderizados](/articles/about-readmes), se você posicionar o cursor sobre um cabeçalho no documento, um ícone de link será criado. Você pode vincular os leitores da comparação da prosa renderizada a seções específicas.

### Exibir diffs complexos

Algumas pull requests envolvem um grande número de alterações e documentos grandes e complexos. Quando as mudanças levam muito tempo para serem analisadas, {% data variables.product.product_name %} não pode produzir uma visão renderizada das alterações. Se isso acontecer, você verá uma mensagem de erro ao clicar no botão renderizado.

![Mensagem quando a visualização não pode ser renderizada](/assets/images/help/repository/prose_diff_rendering.png)

Você ainda pode usar a exibição original para analisar e comentar as alterações.

### Exibir elementos HTML

Não oferecemos suporte direto a exibições renderizadas de commits para documentos HTML. Alguns formatos, como o Markdown, permite a inclusão de HTML arbitrário no documento. Quando esses documentos são mostrados no {% data variables.product.product_name %}, parte do HTML integrado pode ser mostrado em uma pré-visualização, enquanto outra parte (como um vídeo integrado do YouTube) não.

Em geral, as exibições renderizadas de alterações em um documento que contém HTML integrado mostrarão as alterações nos elementos que são compatíveis com a exibição do {% data variables.product.product_name %} do documento. As alterações em documentos que contém HTML integrado devem sempre ser confirmadas nas exibições original e renderizada.

## Mapeamento de arquivos GeoJSON/TopoJSON no {% data variables.product.prodname_dotcom %}

O {% data variables.product.product_name %} dá suporte à renderização de arquivos de mapa GeoJSON e TopoJSON nos repositórios do {% data variables.product.product_name %}. Basta fazer commit do arquivo como você normalmente faria usando uma extensão `.geojson` ou `.topojson`. Também há suporte para arquivos com uma extensão `.json`, mas somente se `type` estiver definido como `FeatureCollection`, `GeometryCollection` ou `topology`. Em seguida, acesse o caminho do arquivo GeoJSON/TopoJSON no GitHub.com.

Quando você clicar no ícone de folha de papel à direita, também verá as alterações feitas naquele arquivo como parte de um commit.

![Captura de tela seletor Source Render (Renderizar fonte)](/assets/images/help/repository/source-render-toggle-geojson.png)

### Tipos de geometria

Os mapas do {% data variables.product.product_name %} usam o [Leaflet.js](http://leafletjs.com) e dão suporte a todos os tipos de geometria descritos na [especificação geoJSON](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon e GeometryCollection). Os arquivos TopoJSON devem ser do tipo "Topology" e aderir à [especificação TopoJSON](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Estilos de elementos gráficos

É possível personalizar a maneira como os recursos são exibidos, como especificar uma cor específica ou adicionar um ícone descritivo, aprovando metadados adicionais nas propriedades do objeto GeoJSON. As opções são:

* `marker-size` - `small`, `medium` ou `large`
* `marker-color` – cor hexa RGB válida
* `marker-symbol` – uma ID de ícone do [projeto Maki](http://mapbox.com/maki/) ou um caractere alfanumérico individual (a-z ou 0-9).
* `stroke` – cor de uma borda ou uma linha do polígono (RGB)
* `stroke-opacity` – opacidade de uma borda ou uma linha do polígono (0,0-1,0)
* `stroke-width` – largura de uma borda ou uma linha do polígono
* `fill` – a cor do interior de um polígono (RGB)
* `fill-opacity` – a opacidade do interior de um polígono (0,0-1,0)

Confira a [versão 1.1.0 da especificação open simplestyle](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) para obter mais informações.
{% endif %}

### Incorporar o mapa em outro lugar

Deseja disponibilizar seu mapa GeoJSON em um lugar diferente do {% data variables.product.product_name %}? Basta modificar o modelo e colocá-lo em qualquer página HTML que suporte JavaScript, por exemplo, [{% data variables.product.prodname_pages %}](http://pages.github.com):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por exemplo, se a URL do mapa for [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), o código de inserção será:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

Por padrão, o mapa inserido tem 420px x 620px, mas é possível personalizar a saída transmitindo as variáveis de altura e largura como parâmetros no final, como `?height=300&width=500`.

{% tip %}

**Observação**: `ref` pode ser um branch ou um hash para um commit individual (como `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Mapeamento em Markdown

É possível incorporar GeoJSON e TopoJSON diretamente no Markdown. Para obter mais informações, confira "[Como criar diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)".
{% endif %}

### Clustering

Se o seu mapa contém um número grande de marcadores (aproximadamente mais de 750), em níveis de zoom maiores, o GitHub automaticamente fará cluster de marcadores próximos. Simplesmente clique em cluster ou aumentar o zoom para ver os marcadores individuais.

### Algo errado no mapa de base

Os dados do mapa subjacentes (nomes de ruas, estradas etc) são determinados pelo [OpenStreetMap](http://www.openstreetmap.org/), um projeto colaborativo para criação de um mapa do mundo gratuito e editável. Se você observar que algo não está certo, como ele é código aberto, basta se [inscrever](https://www.openstreetmap.org/user/new) e enviar uma correção.

### Solução de problemas

Em caso de problemas para renderizar um arquivo GeoJSON, certifique-se de que ele seja válido executando-o por meio de um [linter GeoJSON](http://geojsonlint.com/). Se os pontos não estão aparecendo onde deveriam (<em>por exemplo</em>, no meio do oceano), é provável que os dados estejam em uma projeção que não é compatível atualmente. Atualmente, o {% data variables.product.product_name %} só dá suporte à projeção `urn:ogc:def:crs:OGC:1.3:CRS84`.

Além disso, se o arquivo `.geojson` for particularmente grande (acima de 10 MB), não será possível renderizá-lo no navegador. Se esse for o caso, você normalmente verá uma mensagem parecida com esta:

![Arquivo grande](/assets/images/help/repository/view_raw.png)

Ainda pode ser possível renderizar os dados convertendo o arquivo `.geojson` em [TopoJSON](https://github.com/mbostock/topojson), um formato de compactação que, em alguns casos, pode reduzir o tamanho do arquivo em até 80%. Claro que você sempre pode quebrar os arquivos em pedaços menores (como por estado ou por ano) e armazenar os dados em vários arquivos no repositório.

### Leitura adicional

{% ifversion geoJSON-with-MapBox %}
* [Documentação do Leaflet.js](https://leafletjs.com/)
* [Documentação de estilo de marcador do MapBox](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Documentação do Azure Mapas](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [Wiki do TopoJSON](https://github.com/mbostock/topojson/wiki)

## Trabalhando com arquivos do Jupyter Notebook no {% data variables.product.prodname_dotcom %}

Quando você adiciona arquivos do Jupyter Notebook ou do IPython Notebook com uma extensão *.ipynb* em {% data variables.location.product_location %}, eles são renderizados como arquivos HTML estáticos no repositório.

Os recursos interativos do notebook, como plots JavaScript personalizados, não funcionam no repositório em {% data variables.location.product_location %}. Para ver um exemplo, confira [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Para ver o Jupyter Notebook com o conteúdo JavaScript renderizado ou compartilhar os arquivos do notebook com outras pessoas, use o [nbviewer](https://nbviewer.jupyter.org/). Para ver um exemplo, confira [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) renderizado no nbviewer.

Para exibir uma versão totalmente interativa do Jupyter Notebook, configure um servidor de notebook localmente. Para obter mais informações, confira a [documentação oficial do Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Solução de problemas

Se estiver tendo problemas para renderizar arquivos Jupyter Notebook em HTML estático, converta o arquivo localmente na linha de comando usando o [comando `nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Leitura adicional

- [Repositório do GitHub do Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Galeria de Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Exibindo arquivos do Mermaid em {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} é compatível com os arquivos de interpretação do Mermaid dentro dos repositórios. Faça commit do arquivo como você normalmente faria usando uma extensão `.mermaid` ou `.mmd`. Em seguida, acesse o caminho do arquivo do Mermaid em {% data variables.product.prodname_dotcom %}.

Por exemplo, se você adicionar um arquivo `.mmd` com o seguinte conteúdo ao repositório:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

Ao visualizar o arquivo no repositório, ele é interpretado como um gráfico de fluxo.
![Diagrama de arquivo renderizado do Mermaid](/assets/images/help/repository/mermaid-file-diagram.png)

### Solução de problemas

Se o gráfico não é renderizado, verifique se ele contém uma sintaxe Markdown válida do Mermaid verificando o gráfico com o [editor online do Mermaid](https://mermaid.live/edit).

Se o gráfico for exibido, mas não aparecer como você espera, crie uma [{% data variables.product.prodname_github_community %} discussão de comentários](https://github.com/orgs/community/discussions/categories/general) e adicione a marca `Mermaid`. 

#### Problemas conhecidos

* O gráfico do diagrama de sequência é frequentemente interpretado com preenchimento adicional abaixo do gráfico, com preenchimento adicional acrescentado à medida que o tamanho do gráfico aumenta. Este é um problema conhecido com a biblioteca do Mermaid.
* Os nós do ator com menus popover não funcionam como esperado dentro de gráficos de diagrama de sequência. Isto se deve uma discrepância na forma como eventos do JavaScript são adicionados a um gráfico quando a API da biblioteca do Mermaid é usada para interpretar um gráfico.
* Nem todos os gráficos são conformes com a11y. Isso pode afetar os usuários que dependem de um leitor de tela.

### Mermaid no Markdown

Você pode incorporar a sintaxe do Mermaid diretamente no Markdown. Para obter mais informações, confira "[Como criar diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)".

### Leitura adicional

* [Documentação do Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* [Editor online do Mermaid.js](https://mermaid.live/edit) {% endif %}

