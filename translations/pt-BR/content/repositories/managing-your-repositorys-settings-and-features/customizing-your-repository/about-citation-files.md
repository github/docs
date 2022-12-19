---
title: Sobre os arquivos de CITATION
intro: Você pode adicionar um arquivo de CITATION ao seu repositório para ajudar os usuários a citar corretamente o seu software.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 96e5e7308ba5d1877f231dcb454d7b797a63f221
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107825'
---
## Sobre os arquivos de CITATION

Você pode adicionar um arquivo `CITATION.cff` à raiz de um repositório para que outras pessoas saibam como você deseja que elas citem seu trabalho. O formato do arquivo de citação é um texto simples com informações de citação legíveis por pessoas e máquinas.

Exemplo de arquivo `CITATION.cff`:

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

O prompt de citação do GitHub no seu repositório mostrará o conteúdo de exemplo de `CITATION.cff` nestes formatos:

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

Observe que o exemplo acima produz uma citação de _software_ (ou seja, tipo `@software` no BibTeX em vez de `@article`).

Para obter mais informações, confira o site [Citation File Format](https://citation-file-format.github.io/).

Quando você adiciona um arquivo `CITATION.cff` ao branch padrão do repositório, ele é vinculado automaticamente da página de aterrissagem do repositório. Isso torna fácil para outros usuários citar seu projeto de software, usando as informações que você forneceu.

![Link de citação na página inicial do repositório](/assets/images/help/repository/citation-link.png)

## Citando algo diferente de software

Se preferir que as informações de citação do {% data variables.product.prodname_dotcom %} sejam vinculadas a outro recurso, como um artigo de pesquisa, use a substituição `preferred-citation` no CFF com os tipos a seguir.

| Recurso | Tipo CFF | Tipo BibTeX | Anotações da APA |
|----------|----------|-------------|----------------|
| Artigo de jornal/documento | `article` | `@article` | |
| Livro | `book` | `@book` | |
| Folheto (vinculado mas não publicado) | `pamphlet` | `@booklet` | |
| Artigo de conferência/documento | `conference-paper` | `@inproceedings` | [Documento de conferência] |
| Atas de conferência | `conference`, `proceedings` | `@proceedings` | |
| Conjunto de dados | `data`, `database` | `@misc` | [Conjunto de dados] |
| Artigo de revista | `magazine-article` | `@article` | |
| Manual | `manual` | `@manual` | |
| Outros | `generic`, qualquer outro tipo CFF | `@misc` | |
| Artigo de jornal | `newspaper-article` | `@article` | |
| Software |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Software de computador] |
| Relatório/relatório técnico | `report` | `@techreport` | |
| Não publicado | `unpublished` | `@unpublished` | |

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

O exemplo de arquivo `CITATION.cff` acima produzirá as seguintes saídas no prompt de citação do GitHub:

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
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

Se o repositório contiver um conjunto de dados, você poderá definir `type: dataset` no nível superior do arquivo `CITATION.cff` para produzir uma saída de cadeia de caracteres de citação de dados no prompt de citação do {% data variables.product.prodname_dotcom %}.

## Outros arquivos de citação

O recurso de citação no GitHub também detecta um pequeno número de arquivos adicionais que são frequentemente usados pelas comunidades e projetos para descrever como gostariam que seu trabalho fosse citado.

O GitHub criará um link para esses arquivos no prompt _Citar este repositório_, mas não tentará analisá-los em outros formatos de citação.

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

Você está buscando formatos de citação adicionais? O GitHub usa uma biblioteca do Ruby para analisar os arquivos `CITATION.cff`. Você pode solicitar formatos adicionais no repositório [ruby-cff](https://github.com/citation-file-format/ruby-cff) ou contribuir com eles por conta própria.
