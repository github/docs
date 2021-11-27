---
title: Acerca de los archivos de CITATION
intro: Puedes agregar un archivo de CITATION a tu repositorio para ayudar a que los usuarios citen tu software correctamente.
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

## Acerca de los archivos de CITATION

Puedes agregar un archivo de `CITATION.cff` a la raíz de un repositorio para que otros sepan cómo te gustaría que citaran tu trabajo. El formato de archivo de cita es texto simple con información de cita legible para humanos y máquinas.

Ejemplo de archivo de `CITATION.cff`:

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

El mensaje de cita de GitHub en tu repositorio te mostrará el contenido de ejemplo de un `CITATION.cff` en estos formatos:

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

Toma en cuenta que el ejemplo anterior producirá una cita de _software_ (es decir, un tipo de `@software` en BibTeX en vez de un `@article`).

Para obtener más información, consulta el sitio web de [Formatos de Archivos de Citas](https://citation-file-format.github.io/).

Cuando agregas un archivo de `CITATION.cff` a la rama predeterminada de tu repositorio, este se enlaza automáticamente desde la página de llegada del repositorio. Esto hace fácil que otros usuarios citen tu proyecto de software, utilizando la información que proporcionaste.

![Enlaze de cita en la página de inicio de un repositorio](/assets/images/help/repository/citation-link.png)

## Citar algo que no sea software

Si prefieres que la información de cita de {% data variables.product.prodname_dotcom %} enlace a otro recurso tal como un artículo de investigación, entonces puedes utilizar la anulación de `preferred-citation` en CFF con los siguientes tipos.

| Recurso                   | Type               |
| ------------------------- | ------------------ |
| Artículo de investigación | `article`          |
| Escrito de conferencia    | `conference-paper` |
| Libro                     | `book`             |

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

El archivo `CITATION.cff` anterior producirá los siguientes resultados en el mensaje de cita de GitHub:

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

Si tu repositorio contiene un conjunto de datos, puedes configurar `type: dataset` en tu archivo `CITATION.cff` para producir una salida de secuencia de cita de datos en el mensaje de cita de {% data variables.product.prodname_dotcom %}.

## Otros archivos de cita

La característica de cita de GitHub también detectará una cantidad pequeña de archivos adicionales que a menudo se utilizan en las comunidades y proyectos para describir cómo quieren que se cite su trabajo.

GitHub enlazará estos archivos en el mensaje de _Citar este repositorio_, pero no intentará analizarlos en otros formatos de cita.

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

¡Estás buscando formatos de cita adicionales? GitHub utiliza una librería de Ruby para analizar los archivos de `CITATION.cff`. Puedes solicitar formatos adicionales en el repositorio [ruby-cff](https://github.com/citation-file-format/ruby-cff) o proporcionarlos tú mismo como contribución.
