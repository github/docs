---
title: Pesquisar códigos
intro: 'Você pode pesquisar códigos no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de código.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159396'
---
{% ifversion github-code-search %} {% note %}

  **Observação:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} Para obter mais informações, confira "[Sobre a pesquisa no GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Você pode pesquisar códigos usando somente estes qualificadores de pesquisa de código. Qualificadores de pesquisa específicos para repositórios, usuários ou commits não funcionarão com a pesquisa de códigos.

{% data reusables.search.syntax_tips %}

## Considerações sobre pesquisa de códigos

Devido à complexidade da pesquisa de códigos, a execução das pesquisas apresenta algumas restrições:

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- O código em [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) só será pesquisável se o fork tiver mais estrelas do que o repositório pai. Os forks com menos estrelas do que o repositório pai **não** são indexados para pesquisa de código. Para incluir forks com mais estrelas do que os respectivos pais nos resultados da pesquisa, adicione `fork:true` ou `fork:only` à consulta. Para obter mais informações, confira "[Pesquisa em forks](/search-github/searching-on-github/searching-in-forks)".
- Somente o _branch padrão_ é indexado para pesquisa de código.{% ifversion fpt or ghec %}
- Somente arquivos com menos de 384 KB são pesquisados.{% else %}* Somente arquivos com menos de 5 MB são pesquisados.
- Somente os primeiros 500 KB de cada arquivo são pesquisados.{% endif %}
- Até 4 mil repositórios privados {% ifversion ghec or ghes or ghae %} e internos{% endif %} são pesquisáveis. Esses 4 mil repositórios serão os mais recentemente atualizados dos primeiros 10 mil repositórios privados {% ifversion ghec or ghes or ghae %} e internos {% endif %} aos quais você tem acesso.
- Somente os repositórios com menos de 500 mil arquivos são pesquisáveis.{% ifversion fpt or ghec %}
- Apenas repositórios que tiveram atividade ou apareceram nos resultados de pesquisa do último ano são pesquisáveis.{% endif %}
- Exceto em pesquisas [`filename`](#search-by-filename), você sempre precisa incluir, pelo menos, um termo de pesquisa ao pesquisar o código-fonte. Por exemplo, a pesquisa de [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) não é válida, ao contrário de [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults).
- Os resultados da pesquisa exibem no máximo dois fragmentos do mesmo arquivo, mas o arquivo pode ter mais resultados.
- Não é possível usar os seguintes caracteres curinga como parte da consulta de pesquisa: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. A pesquisa simplesmente ignora esses símbolos.

## Pesquisar pelo conteúdo ou caminho do arquivo

Com o qualificador `in`, você pode restringir a pesquisa ao conteúdo do arquivo de código-fonte, ao caminho do arquivo ou a ambos. Quando você omite esse qualificador, somente o conteúdo do arquivo é pesquisado.

| Qualificador  | Exemplo
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) corresponde ao código em que "octocat" aparece no conteúdo do arquivo.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) corresponde ao código em que "octocat" aparece no caminho do arquivo.
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) corresponde ao código em que "octocat" aparece no conteúdo ou no caminho do arquivo.

## Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar o código em todos os repositórios pertencentes a uma organização ou a um usuário específico, use o qualificador `user` ou `org`. Para pesquisar o código em um repositório específico, use o qualificador `repo`.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) corresponde ao código de @defunkt que termina com <em>.rb</em>.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) corresponde ao código do GitHub que termina com <em>.js</em>.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) corresponde ao código do projeto shumway de @mozilla que termina com <em>.as</em>.

## Pesquisar por local do arquivo

Use o qualificador `path` para pesquisar o código-fonte que aparece em um local específico em um repositório. Use `path:/` para pesquisar os arquivos localizados no nível raiz de um repositório. Ou especifique o nome ou o caminho do diretório para pesquisar os arquivos presentes nesse diretório e em seus subdiretórios.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) corresponde aos arquivos _leiame_ com a palavra "octocat" localizada no nível raiz de um repositório.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) corresponde aos arquivos Perl com a palavra "form" no diretório <em>cgi-bin</em> ou em um dos subdiretórios.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) corresponde aos arquivos JavaScript com a palavra "console" no diretório <em>app/public</em> ou em um dos subdiretórios (mesmo que eles estejam em <em>app/public/js/form-validators</em>).

## Pesquisar por linguagem

Você pode pesquisar código com base na linguagem na qual ele foi escrito. O qualificador `language` pode ser o nome da linguagem ou o alias. Para ver uma lista completa de linguagens compatíveis com os respectivos nomes e aliases, confira o [repositório github/linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| Qualificador  | Exemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) corresponde ao código com a palavra "element" que está marcado como sendo XML e tem exatamente 100 bytes.
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) corresponde ao código com a palavra "display" que está marcado como SCSS.
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) corresponde ao código de todos os repositórios de @mozilla marcados como Markdown.

## Pesquisar por tamanho do arquivo

Use o qualificador `size` para pesquisar o código-fonte com base no tamanho do arquivo em que o código está. O qualificador `size` usa os [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) para filtrar os resultados com base no tamanho do byte do arquivo no qual o código é encontrado.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) corresponde ao código com a palavra "function", escrito em Python, em arquivos com mais de 10 KB.

## Pesquisar por nome do arquivo

O qualificador `filename` corresponde aos arquivos de código com determinado nome de arquivo. Você também pode localizar um arquivo em um repositório usando o localizador de arquivos. Para obter mais informações, confira "[Como encontrar arquivos no GitHub](/search-github/searching-on-github/finding-files-on-github)".

| Qualificador  | Exemplo
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) corresponde aos arquivos chamados "linguist".
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) corresponde aos arquivos *.vimrc* com a palavra "commands".
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) corresponde aos arquivos Ruby chamados *test_helper* do diretório *test*.

## Pesquisar por extensão do arquivo

O qualificador `extension` corresponde aos arquivos de código com determinada extensão de arquivo.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) corresponde ao código com a palavra "form", em <em>cgi-bin</em>, com a extensão de arquivo <em>.pm</em>.
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) corresponde aos arquivos com mais de 200 KB que terminam com .css e têm a palavra "icon".

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
- "[Como fazer pesquisas em forks](/search-github/searching-on-github/searching-in-forks)"{% ifversion fpt or ghec %}
- "[Como navegar pelo código no {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
