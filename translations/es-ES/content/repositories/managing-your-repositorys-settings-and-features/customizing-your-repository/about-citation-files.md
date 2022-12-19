---
title: Acerca de los archivos de CITATION
intro: Puedes agregar un archivo de CITATION a tu repositorio para ayudar a que los usuarios citen tu software correctamente.
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109871'
---
## Acerca de los archivos de CITATION

Puede agregar un archivo `CITATION.cff` a la raíz de un repositorio para que otros usuarios sepan cómo le gustaría que citaran su trabajo. El formato de archivo de cita es texto simple con información de cita legible para humanos y máquinas.

Archivo `CITATION.cff` de ejemplo:

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

El mensaje de cita de GitHub en el repositorio mostrará el contenido de `CITATION.cff` de ejemplo en estos formatos:

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

Tenga en cuenta que en el ejemplo anterior se genera una cita de _software_ (es decir, tipo `@software` en BibTeX en lugar de `@article`).

Para más información, vea el sitio web [Citation File Format](https://citation-file-format.github.io/).

Al agregar un archivo `CITATION.cff` a la rama predeterminada del repositorio, se enlaza automáticamente desde la página de aterrizaje del repositorio. Esto hace fácil que otros usuarios citen tu proyecto de software, utilizando la información que proporcionaste.

![Enlaze de cita en la página de inicio de un repositorio](/assets/images/help/repository/citation-link.png)

## Citar algo que no sea software

Si prefiere que la información de cita de {% data variables.product.prodname_dotcom %} se vincule a otro recurso como un artículo de investigación, puede utilizar la invalidación de `preferred-citation` en CFF con los siguientes tipos.

| Resource | Tipo CFF | Tipo BibTeX | Anotación APA |
|----------|----------|-------------|----------------|
| Artículo de revista | `article` | `@article` | |
| Book | `book` | `@book` | |
| Folleto (lligado pero no publicado) | `pamphlet` | `@booklet` | |
| Arículo de conferencia/revista | `conference-paper` | `@inproceedings` | [Artículo de conferencia] |
| Memorias de una conferencia | `conference`, `proceedings` | `@proceedings` | |
| Conjunto de datos | `data`, `database` | `@misc` | [Conjunto de datos] |
| Artículo de revista | `magazine-article` | `@article` | |
| Manual | `manual` | `@manual` | |
| Misceláneo/genérico/otro | `generic`, cualquier otro tipo de CFF | `@misc` | |
| Artículo de periódico | `newspaper-article` | `@article` | |
| Software |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Software de cómputo] |
| Reporte/reporte técnico | `report` | `@techreport` | |
| Publicación anulada | `unpublished` | `@unpublished` | |

Archivo de CITATION.cff extendido que describe el software, pero vincula a un artículo de investigación como la cita preferida:

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

El archivo `CITATION.cff` anterior generará los resultados siguientes en el mensaje de cita de GitHub:

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

## Citar un conjunto de datos

Si el repositorio contiene un conjunto de datos, puede establecer `type: dataset` en el nivel superior del archivo `CITATION.cff` para generar una salida de cadena de cita de datos en el mensaje de cita de {% data variables.product.prodname_dotcom %}.

## Otros archivos de cita

La característica de cita de GitHub también detectará una cantidad pequeña de archivos adicionales que a menudo se utilizan en las comunidades y proyectos para describir cómo quieren que se cite su trabajo.

GitHub vinculará estos archivos en el mensaje de _Citar este repositorio_, pero no intentará analizarlos en otros formatos de cita.

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

## Formatos de cita

Actualmente tenemos compatibilidad con formatos de archivo en APA y BibTex.

¡Estás buscando formatos de cita adicionales? GitHub usa una biblioteca de Ruby para analizar los archivos `CITATION.cff`. Puede solicitar formatos adicionales en el repositorio [ruby-cff](https://github.com/citation-file-format/ruby-cff) o contribuir personalmente.
