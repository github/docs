---
title: Pesquisar repositórios
intro: 'Você pode pesquisar repositórios no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores de pesquisa de repositórios.'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: 9a464fbb327809b8af970c9a62c3a70d81c2c6b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527931'
---
Pesquise repositórios globalmente em toda a {% data variables.product.product_location %} ou pesquise repositórios em uma organização específica. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Para incluir forks nos resultados da pesquisa, adicione `fork:true` ou `fork:only` à consulta. Para obter mais informações, confira "[Pesquisa em forks](/search-github/searching-on-github/searching-in-forks)".

{% data reusables.search.syntax_tips %}

## Pesquisar por nome do repositório, descrição ou conteúdo do arquivo README

Com o qualificador `in`, você pode restringir a pesquisa ao nome do repositório, à descrição do repositório, ao conteúdo do arquivo README ou a qualquer combinação desses itens. Quando você omite esse qualificador, somente o nome, a descrição e os tópicos do repositório são pesquisados.

| Qualificador  | Exemplo
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) corresponde aos repositórios com "jquery" no nome.
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) corresponde aos repositórios com "jquery" no nome ou na descrição.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) corresponde a repositórios rotulados com "jquery" como um tópico.
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) corresponde aos repositórios que mencionam "jquery" no arquivo README do repositório.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) corresponde a um nome de repositório específico.

## Pesquisar com base no conteúdo do repositório

Encontre um repositório pesquisando o conteúdo no arquivo README do repositório usando o qualificador `in:readme`. Para obter mais informações, confira "[Sobre os arquivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)".

Além de usar o `in:readme`, não é possível encontrar repositórios pesquisando um conteúdo específico no repositório. Para pesquisar um arquivo ou conteúdo específico em um repositório, você pode usar o localizador de arquivos os qualificadores de pesquisa específicos para código. Para obter mais informações, confira "[Como encontrar arquivos no {% data variables.product.prodname_dotcom %}](/search-github/searching-on-github/finding-files-on-github)" e "[Como pesquisar um código](/search-github/searching-on-github/searching-code)".

| Qualificador  | Exemplo
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) corresponde aos repositórios que mencionam "octocat" no arquivo README do repositório.

## Pesquisar nos repositórios de um usuário ou uma organização

Para fazer uma pesquisa em todos os repositórios pertencentes a uma organização ou a um usuário específico, use o qualificador `user` ou `org`.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) corresponde aos repositórios de @defunkt que têm mais de 100 forks.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) corresponde aos repositórios do GitHub.

## Pesquisar por tamanho do repositório

O qualificador `size` encontra os repositórios que correspondem a um tamanho específico (em kilobytes) usando os qualificadores maior que, menor que e intervalo. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) corresponde aos repositórios que têm exatamente 1 MB.
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) corresponde aos repositórios que têm, pelo menos, 30 MB.
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) corresponde aos repositórios menores que 50 KB.
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) corresponde aos repositórios que têm entre 50 KB e 120 KB.

## Pesquisar por número de seguidores

Filtre os repositórios com base no número de usuários que seguem os repositórios usando o qualificador `followers` com os qualificadores maior que, menor que e intervalo. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador        | Exemplo
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) corresponde aos repositórios com dez mil ou mais seguidores que mencionam a palavra "node".
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) corresponde aos repositórios que têm entre um e dez seguidores que mencionam o termo "styleguide linter".

## Pesquisar por número de bifurcações

O qualificador `forks` especifica o número de forks que um repositório deve ter usando os qualificadores maior que, menor que e intervalo. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) corresponde aos repositórios com apenas cinco forks.
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) corresponde aos repositórios com, pelo menos, 205 forks.
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) corresponde aos repositórios com menos de 90 forks.
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) corresponde aos repositórios com 10 a 20 forks.

## Pesquisar por número de estrelas

Você pode pesquisar repositórios com base no número de estrelas que os repositórios têm, usando os qualificadores maior que, menor que e intervalo. Para obter mais informações, confira "[Como salvar repositórios com estrelas](/github/getting-started-with-github/saving-repositories-with-stars)" e "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) corresponde aos repositórios com exatamente 500 estrelas.
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) corresponde aos repositórios com 1000 a 10 estrelas, com menos de 20 KB.
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) corresponde aos repositórios com, pelo menos, 500 estrelas, incluindo aqueles com forks, escritos em PHP.

## Pesquisar por data da criação ou da última atualização do repositório

Você pode filtrar repositórios com base na data de criação ou da última atualização. Para a criação do repositório, você pode usar o qualificador `created`. Para descobrir quando um repositório foi atualizado pela última vez, o ideal é usar o qualificador `pushed`. O qualificador `pushed` retorna uma lista de repositórios, classificados pelo commit mais recente feito em qualquer branch do repositório.

Os dois usam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador  | Exemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) corresponde aos repositórios com a palavra "webos" que foram criados antes de 2011.
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) corresponde aos repositórios com a palavra "css" que foram enviados por push após janeiro de 2013.
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) corresponde aos repositórios com a palavra "case" que foram enviados por push em 6 de março de 2013 ou após essa data e que são forks.

## Pesquisar por linguagem

Você pode pesquisar repositórios com base na linguagem do código nos repositórios.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) corresponde aos repositórios com a palavra "rails" que foram escritos em JavaScript.

## Pesquisar por tópico

Você pode encontrar todos os repositórios classificados com um determinado tópico. Para obter mais informações, confira "[Como classificar seu repositório com tópicos](/github/administering-a-repository/classifying-your-repository-with-topics)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) corresponde aos repositórios que foram classificados com o tópico "Jekyll".

## Pesquisar por número de tópicos

Você pode pesquisar repositórios pelo número de tópicos que foram aplicados a eles usando o qualificador `topics` com os qualificadores maior que, menor que e intervalo. Para obter mais informações, confira "[Como classificar seu repositório com tópicos](/github/administering-a-repository/classifying-your-repository-with-topics)" e "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) corresponde aos repositórios que têm cinco tópicos.
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) corresponde aos repositórios que têm mais de três tópicos.

{% ifversion fpt or ghes or ghec %}

## Pesquisar por licença

Você pode pesquisar repositórios pelo tipo de licença nos repositórios. É preciso usar uma palavra-chave de licença para filtrar repositórios por uma determinada licença ou família de licenças. Para obter mais informações, confira "[Como licenciar um repositório](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) corresponde aos repositórios licenciados sob a Licença Apache 2.0.

{% endif %}

## Pesquisar por visibilidade do repositório

Você pode filtrar sua pesquisa com base na visibilidade dos repositórios. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Qualificador | Exemplo | ------------- | ------------- | {% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) corresponde aos repositórios públicos pertencentes ao {% data variables.product.company_short %}.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) corresponde aos repositórios internos que você pode acessar e contém a palavra "test".{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) corresponde aos repositórios privados que você pode acessar e contém a palavra "pages".

{% ifversion fpt or ghec %}

## Pesquisar com base no fato de o repositório ser um espelho

Você pode pesquisar repositórios com base no fato de os repositórios serem espelhos e hospedados em outro lugar. Para obter mais informações, confira "[Como encontrar maneiras de contribuir com o código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".

| Qualificador  | Exemplo
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) corresponde aos repositórios que são espelhos e que contêm a palavra "GNOME".
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) corresponde aos repositórios que não são espelhos e que contêm a palavra "GNOME".

{% endif %}

## Pesquisar com base no fato de o repositório estar arquivado

Você pode pesquisar repositórios com base no fato de os repositórios estarem ou não arquivados. Para obter mais informações, confira "[Como arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)".

| Qualificador  | Exemplo
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) corresponde aos repositórios arquivados e que contêm a palavra "GNOME".
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) corresponde aos repositórios que não foram arquivados e que contêm a palavra "GNOME".

{% ifversion fpt or ghec %}

## Pesquisa com base no número de problemas com os rótulos `good first issue` ou `help wanted`

Você pode pesquisar repositórios que tenham um número mínimo de problemas rotulados `help-wanted` ou `good-first-issue` com os qualificadores `help-wanted-issues:>n` e `good-first-issues:>n`. Para obter mais informações, confira "[Como incentivar contribuições úteis para seu projeto com rótulos](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)".

| Qualificador  | Exemplo
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) corresponde aos repositórios com mais de dois problemas rotulados `good-first-issue` e que contêm a palavra "javascript".
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) corresponde aos repositórios com mais de quatro problemas rotulados `help-wanted` e que contêm a palavra "React".

## Pesquisar com base na capacidade de patrocinador

Você pode pesquisar repositórios cujos proprietários podem ser patrocinados no {% data variables.product.prodname_sponsors %} com o qualificador `is:sponsorable`. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

Você pode pesquisar repositórios que têm um arquivo de financiamento usando o qualificador `has:funding-file`. Para obter mais informações, confira "[Sobre os arquivos FUNDING](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files)".

| Qualificador  | Exemplo
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) corresponde aos repositórios cujos proprietários têm um perfil do {% data variables.product.prodname_sponsors %}.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) corresponde aos repositórios que têm um arquivo FUNDING.yml.

{% endif %}

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
- "[Como fazer pesquisas em forks](/search-github/searching-on-github/searching-in-forks)"
