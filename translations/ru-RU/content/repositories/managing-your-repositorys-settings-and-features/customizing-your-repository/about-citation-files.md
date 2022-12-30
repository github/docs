---
title: Сведения о файлах CITATION
intro: 'Можно добавить в репозиторий файл CITATION, чтобы помочь пользователям правильно цитировать программное обеспечение.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108973'
---
## Сведения о файлах CITATION

Вы можете добавить файл `CITATION.cff` в корень репозитория, чтобы сообщить другим пользователям, как им следует ссылаться на вашу работу. Файл ссылки содержит обычный текст с данными ссылки, доступные для чтения человеком и компьютером.

Пример файла `CITATION.cff`:

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

Запрос на ссылку GitHub в репозитории будет отображать пример содержимого `CITATION.cff` в следующих форматах:

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

В приведенном выше примере создается ссылка на _программное обеспечение_ (т. е. тип `@software` в BibTeX, а не `@article`).

Дополнительные сведения см. на веб-сайте [Формат файла ссылки](https://citation-file-format.github.io/).

При добавлении файла `CITATION.cff` в ветвь репозитория по умолчанию она автоматически связывается с целевой страницей репозитория. Это позволяет другим пользователям легко ссылаться на проект программного обеспечения, используя предоставленные сведения.

![Гиперссылка на ссылку на целевой странице репозитория](/assets/images/help/repository/citation-link.png)

## Ссылка на что-то, кроме программного обеспечения

Если вы предпочитаете ссылку на {% data variables.product.prodname_dotcom %}, чтобы указать на другой ресурс, например научную статью, можно использовать переопределение `preferred-citation` в CFF со следующими типами.

| Ресурс | Тип CFF | Тип BibTeX | Аннотация APA |
|----------|----------|-------------|----------------|
| Статья/доклад в научном журнале | `article` | `@article` | |
| Book | `book` | `@book` | |
| Брошюра (в переплете, но не опубликованная) | `pamphlet` | `@booklet` | |
| Статья/доклад на конференции | `conference-paper` | `@inproceedings` | [Доклад на конференция] |
| Сборник докладов на конференции | `conference`, `proceedings` | `@proceedings` | |
| Набор данных | `data`, `database` | `@misc` | [Набор данных] |
| Статья в журнале | `magazine-article` | `@article` | |
| Вручную | `manual` | `@manual` | |
| Разное/другое | `generic`, любой другой тип CFF | `@misc` | |
| Статья в газете | `newspaper-article` | `@article` | |
| Программное обеспечение |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Компьютерное программное обеспечение] |
| Отчет или технический отчет | `report` | `@techreport` | |
| не опубликована | `unpublished` | `@unpublished` | |

Расширенный файл CITATION.cff, описывающий программное обеспечение, но ссылающийся на научную статью в качестве источника:

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

Приведенный выше пример файла `CITATION.cff` создаст следующие выходные данные в запросе ссылки GitHub:

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

## Ссылка на набор данных

Если репозиторий содержит набор данных, можно задать `type: dataset` на верхнем уровне файла `CITATION.cff`, чтобы создать выходные данные строки ссылки на данные в запросе ссылки {% data variables.product.prodname_dotcom %}.

## Другие файлы ссылки

Функция ссылок на GitHub также обнаружит небольшое количество дополнительных файлов, которые часто используются сообществами и проектами для описания того, как следует ссылаться на их работу.

GitHub будет ссылаться на эти файлы в запросе _Сослаться на этот репозиторий_, но не будет пытаться проанализировать их в других форматах ссылок.

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

## Форматы ссылок

В настоящее время поддерживаются форматы файлов APA и BibTex.

Ищете дополнительные форматы ссылок? GitHub использует библиотеку Ruby для анализа файлов `CITATION.cff`. Вы можете запросить дополнительные форматы в репозитории [ruby-cff](https://github.com/citation-file-format/ruby-cff) или внести свой вклад.
