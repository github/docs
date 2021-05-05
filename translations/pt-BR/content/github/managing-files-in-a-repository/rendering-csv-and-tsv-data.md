---
title: Renderizar dados CSV e TSV
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

O GitHub oferece suporte à renderização de dados tabulares na forma de arquivos *.csv* (separados por vírgula) e .*tsv* (separados por tubulação).

![Arquivo CSV de amostra renderizado](/assets/images/help/repository/rendered_csv.png)

Quando visualizados, os arquivos _.csv_ ou _.tsv_ presentes em um commit para um repositório do {% data variables.product.product_name %} são renderizados como uma tabela interativa completa, com cabeçalhos e numeração da linha. Por padrão, vamos sempre presumir que a primeira linha é a linha de cabeçalho.

Você pode criar um link para uma linha específica clicando no número da linha ou selecionar várias linhas mantendo a tecla Shift pressionada. Copie e envie a URL para um amigo.

### Pesquisar dados

Para encontrar um valor específico no conjunto de dados, comece a inserir o valor na barra de pesquisa logo acima do arquivo. As linhas serão filtradas automaticamente:

![Pesquisa de valores](/assets/images/help/repository/searching_csvs.gif)

### Como lidar com erros

Ocasionalmente, você pode identificar que seu arquivo CSV ou TSV não está renderizando. Nesse caso, uma caixa de erro será exibida na parte inferior do texto bruto sugerindo o motivo do erro.

![Mensagem de erro de renderização do arquivo CSV](/assets/images/help/repository/csv_render_error.png)

Os erros comuns incluem:

* Divergência na contagem de colunas. Você deve ter o mesmo número de separadores em cada linha, mesmo nas células em branco
* Exceder o tamanho do arquivo. A renderização funciona apenas para arquivos com até 512 KB. Qualquer arquivo maior que isso deixa o navegador lento.
