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

Você pode pesquisar repositórios globalmente no {% data variables.product.product_location %} ou pesquisar em uma organização específica. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)".

Para incluir bifurcações nos resultados da pesquisa, você precisará adicionar `fork:true` ou `fork:only` à sua consulta. Para obter mais informações, consulte "[Pesquisar em bifurcações](/articles/searching-in-forks)".

{% data reusables.search.syntax_tips %}

### Pesquisar por nome do repositório, descrição ou conteúdo do arquivo README

Com o qualificador `in`, você pode restringir a pesquisa ao nome do repositório, descrição do repositório, conteúdo do arquivo README ou qualquer combinação desses itens. Quando você omite esse qualificador, somente o nome e a descrição do repositório são pesquisados.

| Qualifier         | Exemplo                                                                                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) matches repositories with "jquery" in the repository name.                                          |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) matches repositories with "jquery" in the repository name or description. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) matches repositories mentioning "jquery" in the repository's README file.                       |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) identifica um nome de repositório específico.                                                   |

### Pesquisar com base no conteúdo do repositório

You can find a repository by searching for content in the repository's README file using the `in:readme` qualifier. Para obter mais informações, consulte "[Sobre LEIAME](/github/creating-cloning-and-archiving-repositories/about-readmes)".

Além de usar o `in:readme`, não é possível encontrar repositórios pesquisando um conteúdo específico no repositório. Para pesquisar um arquivo ou conteúdo específico em um repositório, você pode usar o localizador de arquivos os qualificadores de pesquisa específicos para código. Para obter mais informações, consulte "[Localizar arquivos no {% data variables.product.prodname_dotcom %}](/articles/finding-files-on-github)" e "[Pesquisar códigos](/articles/searching-code)".

| Qualifier   | Exemplo                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) matches repositories mentioning "octocat" in the repository's README file. |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar em todos os repositórios de um determinado usuário ou organização, você pode usar os qualificadores `user` ou `org`.

| Qualifier                 | Exemplo                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) identifica os repositórios de @defunkt que têm mais de 100 bifurcações. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) identifica os repositórios do GitHub.                                                              |

### Pesquisar por tamanho do repositório

The `size` qualifier finds repositories that match a certain size (in kilobytes), using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | Exemplo                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) identifica os repositórios que têm exatamente 1 MB.                    |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) identifica os repositórios que têm no mínimo 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) identifica os repositórios que têm menos de 50 KB.            |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) identifica os repositórios que têm entre 50 KB e 120 KB.         |

### Pesquisar por número de seguidores

You can filter repositories based on the number of users who follow the repositories, using the `followers` qualifier with greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | Exemplo                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>followers:<em>n</em></code> | [**seguidores do nó:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) coincide com repositórios com 10.000 ou mais seguidores e que mencionam a palavra "nó".                                         |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) identifica os repositórios com 1 e 10 seguidores que mencionam a palavra "styleguide linter". |

### Pesquisar por número de bifurcações

The `forks` qualifier specifies the number of forks a repository should have, using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | Exemplo                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) identifica repositórios com apenas cinco bifurcações.                       |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) identifica repositórios com no mínimo 205 bifurcações. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) identifica repositórios com menos de 90 bifurcações.         |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) identifica repositórios com 10 a 20 bifurcações.                  |

### Pesquisar por número de estrelas

You can search repositories based on the number of stars the repositories have, using greater than, less than, and range qualifiers. For more information, see "[Saving repositories with stars](/github/getting-started-with-github/saving-repositories-with-stars)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

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

You can search repositories based on the language of the code in the repositories.

| Qualifier                 | Exemplo                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) identificar repositórios com a palavra"rails" e que foram escritos em JavaScript. |

### Pesquisar por tópico

You can find all of the repositories that are classified with a particular topic. Para obter mais informações, consulte "[Classificar seu repositório com tópicos](/github/administering-a-repository/classifying-your-repository-with-topics)".

| Qualifier                 | Exemplo                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) identifica os repositórios que foram classificados com o tópico "jekyll". |

### Pesquisar por número de tópicos

You can search repositories by the number of topics that have been applied to the repositories, using the `topics` qualifier along with greater than, less than, and range qualifiers. For more information, see "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                  | Exemplo                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) identifica os repositórios com cinco tópicos.              |
|                            | [**tópicos:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) correspondem a repositórios com mais de três tópicos. |

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Pesquisar por licença

You can search repositories by the type of license in the repositories. You must use a license keyword to filter repositories by a particular license or license family. Para obter mais informações, consulte "[Licenciar um repositório](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)".

| Qualifier                  | Exemplo                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) identifica os repositórios que são licenciados com a Licença Apache 2.0. |

{% endif %}

### Search by repository visibility

You can filter your search based on the visibility of the repositories. Para obter mais informações, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualifier  | Example | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) matches public repositories owned by {% data variables.product.company_short %}.{% endif %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) matches internal repositories that you can access and contain the word "test". | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) matches private repositories that you can access and contain the word "pages."

{% if currentVersion == "free-pro-team@latest" %}

### Pesquisar com base no fato de o repositório ser um espelho

You can search repositories based on whether the repositories are mirrors and hosted elsewhere. Para obter mais informações, consulte "[Encontrar maneiras de contribuir para o código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifier      | Exemplo                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) identifica os repositórios que são espelhos e contêm a palavra "GNOME".   |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) matches repositories that are not mirrors and contain the word "GNOME." |

{% endif %}

### Pesquisar com base no fato de o repositório estar arquivado

You can search repositories based on whether or not the repositories are archived. For more information, see "[About archiving repositories](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)."

| Qualifier        | Exemplo                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) identifica os repositórios que estão arquivados e contêm a palavra "GNOME". |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) matches repositories that are not archived and contain the word "GNOME."  |

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
