---
title: Buscar repositorios
intro: 'Puedes buscar repositorios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de repositorio en cualquier combinación.'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

Puedes buscar repositorios globalmente a través de todos los {% data variables.product.product_location %}, o buscar repositorios dentro de una organización particular. Para obtener más información, consulta [Acerca de buscar en {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)".

Para incluir bifurcaciones en los resultados de las búsquedas, deberás agregar `fork:true` o `fork:only` en tu consulta. Para obtener más información, consulta "[Buscar en bifurcaciones](/articles/searching-in-forks)".

{% data reusables.search.syntax_tips %}

### Buscar por nombre de repositorio, descripción o contenidos del archivo README

Con el calificador `in` puedes restringir tu búsqueda al nombre del repositorio, su descripción, los contenidos del archivo README, o cualquier combinación de estos. Cuando omites este calificador, únicamente se buscan el nombre del repositorio y la descripción.

| Qualifier         | Ejemplo                                                                                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) coincide con repositorios que tengan "jquery" en su nombre.                                         |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) coincide con repositorios que tengan "jquary" en su nombre o descripción. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) coincide con repositorios que mencionen "jquery" en su archivo README.                          |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) encuentra un nombre de repositorio específico.                                                  |

### Buscar en base a los contenidos de un repositorio

Puedes encontrar un repositorio si buscas el contenido de su archivo README utilizando el calificador `in:readme`. Para obtener más información, consulta "[Acerca de los README](/github/creating-cloning-and-archiving-repositories/about-readmes)".

Además de utilizar `in:readme`, no es posible encontrar repositorios al buscar por el contenido específico dentro del repositorio. Para buscar un archivo o contenido específico dentro de un repositorio, puedes utilizar el buscador de archivo o los calificadores de búsqueda específica. Para obtener más información, consulta "[Encontrar archivos en {% data variables.product.prodname_dotcom %}](/articles/finding-files-on-github)" y "[Buscar código](/articles/searching-code)."

| Qualifier   | Ejemplo                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) coincide con repositorios que mencionen "octocat" en su archivo README. |

### Buscar dentro de los repositorios de un usuario u organización

Para buscar en todos los repositorios que son propiedad de una determinada organización o usuario, puedes utilizar el calificador `user` u `org`.

| Qualifier                 | Ejemplo                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) encuentra repositorios de @defunkt que tienen más de 100 bifurcaciones. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) encuentra repositorios de GitHub.                                                                  |

### Buscar por tamaño del repositorio

El calificador `size` encuentra repositorios que coinciden con un tamaño determinado (en kilobytes), utilizando los calificadores de mayor que, menor que y rango. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) encuentra repositorios que tienen más de 1 MB con exactitud.             |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) encuentra repositorios que tienen por lo menos 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) encuentra repositorios que son menores de 50 KB.                |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) encuentra repositorios que están entre 50 KB y 120 KB.             |

### Buscar por cantidad de seguidores

Puedes filtrar los repositorios con base en la cantidad de usuarios que los siguen, utilizando el calificador `followers` con aquellos de mayor qué, menor qué y rango. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) coincidirá con repositorios que tengan 10,000 o más seguidores y en donde se mencione la palabra "node".                        |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) encuentra repositorios con 1 a 10 seguidores, que mencionan la palabra "styleguide linter." |

### Buscar por cantidad de bifurcaciones

El calificador `forks` especifica la cantidad de bifurcaciones que un repositorio debería tener, utilizando los calificadores de mayor qué, menor qué y rango. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) encuentra repositorios con solo cinco bifurcaciones.                            |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) encuentra repositorios con por lo menos 205 bifurcaciones. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) encuentra repositorios con menos de 90 bifurcaciones.            |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) encuentra repositorios con 10 a 20 bifurcaciones.                     |

### Buscar por cantidad de estrellas

Puedes buscar repositorios con base en la cantidad de estrellas que tienen, utilizando los calificadores de mayor qué, menor qué y rango. Para obtener más información, consulta las secciones "[Guardar los repositorios con estrellas](/github/getting-started-with-github/saving-repositories-with-stars)" y "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) encuentra repositorios con exactamente 500 estrellas.                                                                                                       |
|                           | [**stars:10..20**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) encuentra repositorios con 10 a 20 estrellas, que son menores que 1000 KB.                                                                            |
|                           | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) encuentra repositorios con al menos 500 estrellas, incluidas los bifurcados, que están escritos en PHP. |

### Buscar por cuándo fue creado o actualizado por última vez un repositorio

Puedes filtrar repositorios en base al momento de creación o al momento de la última actualización. Para la creación de un repositorio, puedes usar el calificador `created` (creado); para encontrar cuándo se actualizó por última vez un repositorio, querrás utilizar el calificador `pushed` (subido). El calificador `pushed` devolverá una lista de repositorios, clasificados por la confirmación más reciente realizada en alguna rama en el repositorio.

Ambos toman una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) encuentra repositorios con la palabra "webos" que fueron creados antes del 2011.                                                                |
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) encuentra repositorios con la palabra "css" que fueron subidos después de enero de 2013.                                               |
|                           | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) encuentra repositorios con la palabra "case" que fueron subidos el 6 de marzo de 2013 o después, y que son bifurcaciones. |

### Buscar por lenguaje

Puedes buscar repositorios con base en el lenguaje de programación del código que contienen.

| Qualifier                 | Ejemplo                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) encuentra repositorios con la palabra "rails" que están escritos en JavaScript. |

### Buscar por tema

Puedes encontrar todos los repositorios que se clasifiquen con un tema particular. Para obtener más información, consulta "[Clasificar tu repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)".

| Qualifier                 | Ejemplo                                                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) encuentra repositorios que se han clasificado con el tema "jekyll." |

### Buscar por cantidad de temas

Puedes buscar repositorios por la cantidad de temas que se les hayan aplicado utilizando el calificador `topics` en conjunto con aquellos de mayor qué, menor qué y rango. Para obtener más información, consulta las secciones "[Clasificar tu repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)" y "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                  | Ejemplo                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) encuentra repositorios que tienen cinco temas.                |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) coincidirá con repositorios que tengan más de tres temas. |

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Buscar por licencia

Puedes buscar repositorios con por su tipo de licencia. Debes utilizar una palabra clave de licencia para filtrar los repositorios por algún tipo particular o familia de licencias. Para obtener más información, consulta "[Licenciar un repositorio](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)".

| Qualifier                  | Ejemplo                                                                                                                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) encuentra repositorios que tienen licencia de Apache License 2.0. |

{% endif %}

### Buscar por visibilidad del repositorio

Puedes filtrar tu búsqueda con base en la visibilidad de los repositorios. Para obtener más información, consulta la sección "[Acerca de la visibilidad de un repositorio](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

| Calificador| Ejemplo | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) coincide con los repositorios públicos que pertenezcan a {% data variables.product.company_short %}.{% endif %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) coincide con los repositorios internos a los que puedas acceder y que contengan la palabra "test". | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) coincide con los repositorios privados a los cuales puedes acceder y que contengan la palabra "pages".

{% if currentVersion == "free-pro-team@latest" %}

### Buscar en base a si un repositorio es un espejo

Puedes buscar repositorios con base en si éstos son espejos y se hospedan en otro lugar. Para obtener más información, consulta "[Encontrar formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifier      | Ejemplo                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) coincide con los repositorios que son espejos y que contienen la palabra "GNOME".      |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) coincide con los repositorios que no son espejos y que contienen la palabra "GNOME". |

{% endif %}

### Buscar en base a si un repositorio está archivado

Puedes buscar los repositorios con base en si se archivaron o no. Para obtener más información, consulta la sección "[Acerca de archivar los repositorios](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)".

| Qualifier        | Ejemplo                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) coincide con los repositorios que se archivan y que contienen la palabra "GNOME".           |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) coincide con los repositorios que no están archivados y que contienen la palabra "GNOME". |

{% if currentVersion == "free-pro-team@latest" %}

### Buscar en base a la cantidad de propuestas con las etiquetas `good first issue` o `help wanted`

Puedes buscar repositorios que tienen una cantidad mínima de propuestas etiquetadas como `help-wanted` (se necesita ayuda) o `good-first-issue` (buena propuesta inicial) con los calificadores `help-wanted-issues:>n` y `good-first-issues:>n`. Para encontrar más información, consulta "[Fomentar las contribuciones útiles a tu proyecto con etiquetas](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)."

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) encuentra repositorios con más de dos propuestas etiquetadas como `good-first-issue` y que contienen la palabra "javascript." |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) encuentra repositorios con más de cuatro propuestas etiquetadas como `help-wanted` y que contienen la palabra "React."                |

{% endif %}

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
- "[Búsqueda en bifurcaciones](/articles/searching-in-forks)"
