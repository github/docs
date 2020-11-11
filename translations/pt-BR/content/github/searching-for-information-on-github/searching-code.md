---
title: Pesquisar códigos
intro: 'Você pode pesquisar códigos no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de código.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode pesquisar códigos globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização ou um repositório específico. Para pesquisar códigos em todos os repositórios públicos, é necessário ter iniciado a sessão em uma conta do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre a pesquisa no GitHub](/articles/about-searching-on-github)".

Você pode pesquisar códigos usando somente estes qualificadores de pesquisa de código. Qualificadores de pesquisa específicos para repositórios, usuários ou commits não funcionarão com a pesquisa de códigos.

{% data reusables.search.syntax_tips %}

### Considerações sobre pesquisa de códigos

Devido à complexidade da pesquisa de códigos, a execução das pesquisas apresenta algumas restrições:

- {% data reusables.search.required_login %}
- O código em [bifurcações](/articles/about-forks) só poderá ser pesquisado se a bifurcação tiver mais estrelas do que o repositório principal. Bifurcações com menos estrelas do que o repositório principal **não** são indexadas para pesquisa de códigos. Para incluir bifurcações com mais estrelas que o repositório principal delas nos resultados da pesquisa, você precisará adicionar `fork:true` ou `fork:only` à sua consulta. Para obter mais informações, consulte "[Pesquisar em bifurcações](/articles/searching-in-forks)".
- Apenas o _branch-padrão_ é indexado para pesquisa de código.{% if currentVersion == "free-pro-team@latest" %}
- Somente arquivos com menos de 384 KB são pesquisados.{% else %}* Somente arquivos com menos de 5 MB são pesquisados.
- Somente os primeiros 500 KB de cada arquivo são pesquisados.{% endif %}
- Somente repositórios com menos de 500.000 arquivos são pesquisados.
- Os usuários que fizeram login podem pesquisar em todos os repositórios públicos.
- Com exceção das pesquisas por [`filename`](#search-by-filename), é necessário incluir pelo menos um termo da pesquisa ao pesquisar o código-fonte. Por exemplo, pesquisar [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) não é válido, enquanto pesquisar [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) é.
- Os resultados da pesquisa exibem no máximo dois fragmentos do mesmo arquivo, mas o arquivo pode ter mais resultados.
- Não é possível usar os seguintes caracteres-curinga na consulta de pesquisa: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]</code>. A pesquisa simplesmente ignora esses símbolos.

### Pesquisar pelo conteúdo ou caminho do arquivo

Com o qualificador `in`, você pode restringir a pesquisa ao conteúdo do arquivo de código-fonte e/ou ao caminho do arquivo. Quando você omite esse qualificador, somente o conteúdo do arquivo é pesquisado.

| Qualifier | Exemplo                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) identifica o código quando"octocat" aparece no conteúdo do arquivo.                           |
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) identifica o código quando"octocat" aparece no caminho do arquivo.                            |
|           | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) identifica o código quando"octocat" aparece no conteúdo ou no caminho do arquivo. |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar códigos em todos os repositórios de um determinado usuário ou organização, você pode usar os qualificadores `user` ou `org`. Para pesquisar códigos em um repositório específico, você pode usar o qualificador `repo`.

| Qualifier                 | Exemplo                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) identifica o código de @defunkt que termina em <em>.rb</em>.                                       |
| <code>org:<em>ORGNAME</em></code> | [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) identifica o código do GitHub que termina em <em>.js</em>.                             |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) identifica o código do projeto shumway de @mozilla que termina em <em>.as</em>. |

### Pesquisar por local do arquivo

Você pode usar o qualificador `path` para pesquisar o código-fonte que aparece em um local específico de um repositório. Use o `path:/` para pesquisar os arquivos que estão no diretório raiz de um repositório. Ou especifique o nome ou o caminho do diretório para pesquisar os arquivos presentes nesse diretório e em seus subdiretórios.

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>path:/</code>  | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) identifica os arquivos _readme_ com a palavra "octocat" localizados no diretório raiz de um repositório.                                                                                            |
| <code>path:<em>DIRECTORY</em></code>  | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) identifica os arquivo Perl com a palavra "form" em um diretório <em>cgi-bin</em> ou em seus subdiretórios.                                                                                                  |
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**console path:app/public language:javascript**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) identifica os arquivos JavaScript com a palavra "console" em um diretório <em>app/public</em> ou em seus subdiretórios (mesmo que eles residam em <em>app/public/js/form-validators</em>). |

### Pesquisar por linguagem

Você pode pesquisar código com base na linguagem na qual ele foi escrito.

| Qualifier                  | Exemplo                                                                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) identifica o código com a palavra "element", marcado como XML e que tem exatamente 100 bytes.  |
|                            | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) identifica o código com a palavra "display" marcado como SCSS.                                                   |
|                            | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) identifica o código marcado como Markdown de todos os repositórios de @mozilla. |

### Pesquisar por tamanho do arquivo

Você pode usar o qualificador `size` para pesquisar o código-fonte com base no tamanho do arquivo do código. O qualificador `size` usa os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax) para filtrar os resultados com base no tamanho em bytes do arquivo do código.

| Qualifier                  | Exemplo                                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) identifica o código com a palavra "function," escrito em Python, presente em arquivos com mais de 10 KB. |

### Pesquisar por nome do arquivo

O qualificador `filename` identifica os arquivos de código com um determinado nome de arquivo. Você também pode localizar um arquivo em um repositório usando o localizador de arquivos. Para obter mais informações, consulte "[Localizar arquivos no GitHub](/articles/finding-files-on-github)".

| Qualifier                  | Exemplo                                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) identifica os arquivos com o nome "linguist".                                                                                  |
|                            | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) identifica os arquivos *.vimrc* com a palavra "commands".                                                                       |
|                            | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) identifica os arquivos de Ruby com nome *test_helper* no diretório *test*. |

### Pesquisar por extensão do arquivo

O qualificador `extension` identifica os arquivos de código com uma determinada extensão do arquivo.

| Qualifier                  | Exemplo                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) identifica o código com a palavra "form" em <em>cgi-bin</em>, com a extensão de arquivo <em>.pm</em>. |
|                            | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) corresponde a arquivos com um tamanho superior a 200 KB terminam em .css e têm a palavra "icon".         |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
- "[Pesquisar e, bifurcações](/articles/searching-in-forks)"{% if currentVersion == "free-pro-team@latest" %}
- "[Navegar pelo código em {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
