---
title: Sobre os arquivos de CITATION
intro: Você pode adicionar um arquivo de CITATION ao seu repositório para ajudar os usuários a citar corretamente o seu software.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: issue-4651
  ghec: '*'
topics:
  - Repositories
---

## Sobre os arquivos de CITATION

Você pode adicionar um arquivo de `CITATION.cff` à raiz de um repositório para que outros saibam como você gostaria que eles citassem seu trabalho. O formato do arquivo de citação é um texto simples com informações de citação legíveis por pessoas e máquinas.

Exemplo de arquivo de `CITATION.cff`:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
```

A instrução da citação no GitHub no seu repositório irá mostrar o exemplo `CITATION.cff` nesses formatos:

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

Observe o exemplo acima produz uma citação de </em>software_(ou seja, o tipo `@software` em BibTeX em vez de `@article`).</p>

Para obter mais informações, consulte o site do [Formato do Arquivo de Citação](https://citation-file-format.github.io/).

Ao adicionar um arquivo `CITATION.cff` ao branch padrão do repositório, ele será automaticamente vinculado a partir da página inicial do repositório. Isso torna fácil para outros usuários citar seu projeto de software, usando as informações que você forneceu.

![Link de citação na página inicial do repositório](/assets/images/help/repository/citation-link.png)

## Citando algo diferente de software

Se você prefere que as informações de citação de {% data variables.product.prodname_dotcom %} vinculem outro recurso, como um artigo de pesquisa, você poderá usar a substituição de `preferred-citation` no CFF pelos seguintes tipos.

| Recurso                           | CFF type                                                                                             | BibTeX type      | APA annotation      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- | ------------------- |
| Journal article/paper             | `artigo`                                                                                             | `@article`       |                     |
| Livro                             | `livro`                                                                                              | `@book`          |                     |
| Booklet (bound but not published) | `pamphlet`                                                                                           | `@booklet`       |                     |
| Conference article/paper          | `conference-paper`                                                                                   | `@inproceedings` | [Conference paper]  |
| Conference proceedings            | `conference`, `proceedings`                                                                          | `@proceedings`   |                     |
| Data set                          | `data`, `database`                                                                                   | `@misc`          | [Data set]          |
| Magazine article                  | `magazine-article`                                                                                   | `@article`       |                     |
| Manual                            | `manual`                                                                                             | `@manual`        |                     |
| Misc/generic/other                | `generic`, any other CFF type                                                                        | `@misc`          |                     |
| Newspaper article                 | `newspaper-article`                                                                                  | `@article`       |                     |
| Software                          | `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software`      | [Computer software] |
| Report/technical report           | `report`                                                                                             | `@techreport`    |                     |
| Unpublished                       | `unpublished`                                                                                        | `@unpublished`   |                     |

Arquivo de CITATION.cff estendido que descreve o software, mas vinculando a um artigo de pesquisa como a citação preferida:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

O exemplo do arquivo `CITATION.cff` acima produzirá as saídas a seguir na instrução da citação no GitHub:

**APA**

```
Lisa, M., & Bot, H. (2021). Meu software de pesquisa incrível. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```
{% endraw %}

## Citando um conjunto de dados

If your repository contains a dataset, you can set `type: dataset` at the top level of your `CITATION.cff` file to produce a data citation string output in the {% data variables.product.prodname_dotcom %} citation prompt.

## Outros arquivos de citação

O recurso de citação no GitHub também detecta um pequeno número de arquivos adicionais que são frequentemente usados pelas comunidades e projetos para descrever como gostariam que seu trabalho fosse citado.

O GitHub irá vincular a esses arquivos na instrução _Citar este repositório_, mas não tentará analisá-los em outros formatos de citação.

```
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## Formatos de citação

Atualmente oferecemos suporte a formatos de arquivo APA e BibTex.

Você está buscando formatos de citação adicionais? O GitHub usa uma biblioteca do Ruby para analisar os arquivos `CITATION.cff`. Você pode solicitar formatos adicionais no repositório [ruby-cff](https://github.com/citation-file-format/ruby-cff) ou você mesmo pode fazer uma contribuição.
