---
title: Pesquisar repositórios
intro: 'Você pode pesquisar repositórios no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores de pesquisa de repositórios.'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode pesquisar repositórios globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização específica. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)".

Para incluir bifurcações nos resultados da pesquisa, você precisará adicionar `fork:true` ou `fork:only` à sua consulta. Para obter mais informações, consulte "[Pesquisar em bifurcações](/articles/searching-in-forks)".

{% data reusables.search.syntax_tips %}

### Pesquisar por nome do repositório, descrição ou conteúdo do arquivo README

Com o qualificador `in`, você pode restringir a pesquisa ao nome do repositório, descrição do repositório, conteúdo do arquivo README ou qualquer combinação desses itens. Quando você omite esse qualificador, somente o nome e a descrição do repositório são pesquisados.

| Qualifier         | Exemplo                                                                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) identifica os repositórios com "jquery" no nome.                                        |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) identifica repositórios com "jquery" no nome ou na descrição. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) identifica os repositórios que mencionam "jquery" no arquivo README.                |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) identifica um nome de repositório específico.                                       |

### Pesquisar com base no conteúdo do repositório

Você pode enconar um repositório pesquisando o conteúdo em seu arquivo README usando o qualificador `in:readme`.

Além de usar o `in:readme`, não é possível encontrar repositórios pesquisando um conteúdo específico no repositório. Para pesquisar um arquivo ou conteúdo específico em um repositório, você pode usar o localizador de arquivos os qualificadores de pesquisa específicos para código. Para obter mais informações, consulte "[Localizar arquivos no {% data variables.product.prodname_dotcom %}](/articles/finding-files-on-github)" e "[Pesquisar códigos](/articles/searching-code)".

| Qualifier   | Exemplo                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) identifica repositórios que mencionam "octocat" no arquivo README. |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar em todos os repositórios de um determinado usuário ou organização, você pode usar os qualificadores `user` ou `org`.

| Qualifier                 | Exemplo                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) identifica os repositórios de @defunkt que têm mais de 100 bifurcações. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) identifica os repositórios do GitHub.                                                              |

### Pesquisar por tamanho do repositório

O qualificador `size` procura repositórios que têm um tamanho específico (em kilobytes) usando os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) identifica os repositórios que têm exatamente 1 MB.                    |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) identifica os repositórios que têm no mínimo 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) identifica os repositórios que têm menos de 50 KB.            |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) identifica os repositórios que têm entre 50 KB e 120 KB.         |

### Pesquisar por número de seguidores

Você pode filtrar repositórios com base no número de seguidores usando o qualificador `followers` com os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>followers:<em>n</em></code> | [**seguidores do nó:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) coincide com repositórios com 10.000 ou mais seguidores e que mencionam a palavra "nó".                                         |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) identifica os repositórios com 1 e 10 seguidores que mencionam a palavra "styleguide linter". |

### Pesquisar por número de bifurcações

O qualificador `forks` especifica o número de bifurcações que um repositório deve ter usando os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) identifica repositórios com apenas cinco bifurcações.                       |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) identifica repositórios com no mínimo 205 bifurcações. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) identifica repositórios com menos de 90 bifurcações.         |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) identifica repositórios com 10 a 20 bifurcações.                  |

### Pesquisar por número de estrelas

Você pode pesquisar repositórios com base no número de [estrelas](/articles/saving-repositories-with-stars) do repositório usando os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) identifica repositórios com exatamente 500 estrelas.                                                                                                                |
|                           | [**stars:10..20**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) identifica repositórios com 10 a 20 estrelas com menos de 1.000 KB.                                                                                           |
|                           | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) identifica os repositórios que tem no mínimo 500 estrelas, incluindo os bifurcados e que foram escritos em PHP. |

### Pesquisar por data da criação ou da última atualização do repositório

Você pode filtrar repositórios com base na data de criação ou da última atualização. Para a criação do repositório, você pode usar o qualificador `created`. Para descobrir quando um repositório foi atualizado pela última vez, você precisará usar o qualificador `pushed`. O qualificador `pushed` retorna uma lista de repositórios, classificados pelo commit mais recente feito em qualquer branch no repositório.

Os dois usam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) identifica repositórios com a palavra "webos" que foram criados antes de 2011.                                                                           |
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) identifica repositórios com a palavra "css" cujo push ocorreu antes de janeiro de 2013.                                                         |
|                           | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) identifica repositórios com a palavra "case" cujo push foi feito em 6 de março de 2013 ou depois dessa data e que são bifurcações. |

### Pesquisar por linguagem

Você pode pesquisar repositórios com base na linguagem em que eles foram escritos.

| Qualifier                 | Exemplo                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) identificar repositórios com a palavra"rails" e que foram escritos em JavaScript. |

### Pesquisar por tópico

Você pode encontrar todos os repositórios que estão classificados com um determinado [tópico](/articles/classifying-your-repository-with-topics).

| Qualifier                 | Exemplo                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) identifica os repositórios que foram classificados com o tópico "jekyll". |

### Pesquisar por número de tópicos

Você pode pesquisar repositórios pelo número de [tópicos](/articles/classifying-your-repository-with-topics) que foram aplicados usando o qualificador `topics` e os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                  | Exemplo                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) identifica os repositórios com cinco tópicos.              |
|                            | [**tópicos:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) correspondem a repositórios com mais de três tópicos. |

### Pesquisar por licença

Você pode pesquisar repositórios pela [licença](/articles/licensing-a-repository). Você deve usar uma [palavra-chave de licença](/articles/licensing-a-repository/#searching-github-by-license-type) para filtrar repositórios por uma licença específica ou por uma família de licenças.

| Qualifier                  | Exemplo                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) identifica os repositórios que são licenciados com a Licença Apache 2.0. |

### Pesquisar por repositório público ou privado

Você pode filtrar a pesquisa para identificar somente repositórios públicos ou privados.

| Qualifier    | Exemplo                                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:public`  | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories&utf8=%E2%9C%93) identifica os repositórios do GitHub que são públicos.                          |
| `is:private` | [**is:private pages**](https://github.com/search?utf8=%E2%9C%93&q=pages+is%3Aprivate&type=Repositories) identifica os repositórios privados aos quais você tem acesso e contêm a palavra "pages". |

{% if currentVersion == "free-pro-team@latest" %}

### Pesquisar com base no fato de o repositório ser um espelho

Você pode pesquisar os repositórios com base no critério de que são um espelho ou não e se estão hospedados em outro lugar. Para obter mais informações, consulte "[Encontrar maneiras de contribuir para o código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifier      | Exemplo                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) identifica os repositórios que são espelhos e contêm a palavra "GNOME".       |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) identifica os repositórios que não são espelhos e contêm a palavra "GNOME". |

{% endif %}

### Pesquisar com base no fato de o repositório estar arquivado

Você pode pesquisar repositórios com base no fato dele estar ou não [arquivado](/articles/about-archiving-repositories).

| Qualifier        | Exemplo                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) identifica os repositórios que estão arquivados e contêm a palavra "GNOME".       |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) identifica os repositórios que não estão arquivados e contêm a palavra "GNOME". |

{% if currentVersion == "free-pro-team@latest" %}
### Pesquisar com base no número de problemas com as etiquetas `good first issue` (um bom primeiro problema) ou `help wanted` (procura-se ajuda)

Você pode pesquisar repositórios que têm um número mínimo de problemas com as etiquetas `help-wanted` (procura-se ajuda) ou `good-first-issue` (um bom primeiro problema) com os qualificadores `help-wanted-issues:>n` e `good-first-issues:>n`. Para obter mais informações, consulte "[Incentivar contribuições úteis para o seu projeto com etiquetas](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)".

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) identifica os repositórios com mais de dois problemas com a etiqueta `good-first-issue` e que contêm a palavra "javascript". |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) identifica os repositórios com mais de quatro problemas com a etiqueta `help-wanted` e que contêm a palavra "React".                 |
{% endif %}

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
- "[Pesquisar em bifurcações](/articles/searching-in-forks)"
