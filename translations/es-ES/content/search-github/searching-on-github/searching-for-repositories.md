---
title: Buscar repositorios
intro: 'Puedes buscar repositorios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de repositorio en cualquier combinación.'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: 9a464fbb327809b8af970c9a62c3a70d81c2c6b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527938'
---
Puede buscar repositorios a nivel global en todo {% data variables.product.product_location %} o buscar repositorios dentro de una organización en particular. Para más información, vea "[Acerca de la investigación en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Para incluir bifurcaciones en los resultados de búsqueda, deberá agregar `fork:true` o `fork:only` a la consulta. Para obtener más información, consulte "[Buscar en bifurcaciones](/search-github/searching-on-github/searching-in-forks)".

{% data reusables.search.syntax_tips %}

## Buscar por nombre de repositorio, descripción o contenidos del archivo README

Con el calificador `in` puedes restringir la búsqueda al nombre del repositorio, su descripción, los temas del archivo README o cualquier combinación de estos. Cuando omites este calificador, únicamente se buscan el nombre del repositorio, la descripción y los temas.

| Calificador:  | Ejemplo
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) coincide con los repositorios con "jquery" en el nombre del repositorio.
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) coincide con los repositorios con "jquery" en el nombre o la descripción del repositorio.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) coincide con repositorios etiquetados con "jquery" como tema.
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) coincide con los repositorios que mencionan "jquery" en el archivo README del repositorio.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) coincide con un nombre de repositorio específico.

## Buscar en base a los contenidos de un repositorio

Para encontrar un repositorio, busque el contenido de su archivo README utilizando el calificador `in:readme`. Para más información, vea "[Acerca de los archivos Léame](/github/creating-cloning-and-archiving-repositories/about-readmes)".

Además de utilizar `in:readme`, no es posible encontrar repositorios al buscar por el contenido específico dentro del repositorio. Para buscar un archivo o contenido específico dentro de un repositorio, puedes utilizar el buscador de archivo o los calificadores de búsqueda específica. Para obtener más información, consulte "[Buscar archivos en {% data variables.product.prodname_dotcom %}](/search-github/searching-on-github/finding-files-on-github)" y "[Buscar código](/search-github/searching-on-github/searching-code)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) coincide con los repositorios que mencionan "octocat" en el archivo README del repositorio.

## Buscar dentro de los repositorios de un usuario u organización

Para buscar en todos los repositorios que son propiedad de una determinada organización o usuario, puede utilizar el calificador `user` o `org`.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) coincide con repositorios de @defunkt que tienen más de 100 bifurcaciones.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) coincide con repositorios de GitHub.

## Buscar por tamaño del repositorio

El calificador `size` encuentra repositorios que coinciden con un tamaño determinado (en kilobytes), utilizando los calificadores de mayor que, menor que y rango. Para más información, vea "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) coincide con los repositorios de exactamente 1 MB.
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) coincide con los repositorios de exactamente 30 MB.
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) coincide con repositorios menores de 50 KB.
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) coincide con repositorios que están entre 50 KB y 120 KB.

## Buscar por cantidad de seguidores

Puede filtrar los repositorios en función de la cantidad de usuarios que los siguen, utilizando el calificador `followers` con aquellos de mayor que, menor que y rango. Para más información, vea "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) coincide con repositorios con 10 000 o más seguidores que mencionan la palabra "node".
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) coincide con repositorios con entre 1 y 10 seguidores que mencionan la palabra "styleguide linter".

## Buscar por cantidad de bifurcaciones

El calificador `forks` especifica la cantidad de bifurcaciones que un repositorio debería tener, utilizando los calificadores de mayor que, menor que y rango. Para más información, vea "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) coincide con repositorios con solo cinco bifurcaciones.
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) coincide con repositorios con al menos 205 bifurcaciones.
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) coincide con repositorios con al menos 90 bifurcaciones.
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) coincide con repositorios con entre 10 y 20 bifurcaciones.

## Buscar por cantidad de estrellas

Puedes buscar repositorios con base en la cantidad de estrellas que tienen, utilizando los calificadores de mayor qué, menor qué y rango. Para obtener más información, consulte "[Guardar repositorios con estrellas](/github/getting-started-with-github/saving-repositories-with-stars)" y "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) coincide con repositorios con exactamente 500 estrellas.
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) coincide con repositorios de 10 a 20 estrellas, que tienen menos de 1000 KB.
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) coincide con repositorios con al menos 500 estrellas, incluidas las que tienen bifurcaciones y están escritos en PHP.

## Buscar por cuándo fue creado o actualizado por última vez un repositorio

Puedes filtrar repositorios en base al momento de creación o al momento de la última actualización. Para la creación del repositorio, puede usar el calificador `created`; para averiguar cuándo se actualizó por última vez un repositorio, le recomendamos usar el calificador `pushed`. El calificador `pushed` devolverá una lista de repositorios ordenados según la confirmación más reciente realizada en alguna rama del repositorio.

Ambos toman una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) coincide con los repositorios con la palabra "webos" que se crearon antes de 2011.
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) coincide con los repositorios con la palabra "css" que se insertaron después de enero de 2013.
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) coincide con los repositorios con la palabra "case" que se insertaron a partir del 6 de marzo de 2013 y que son bifurcaciones.

## Buscar por lenguaje

Puedes buscar repositorios con base en el lenguaje de programación del código que contienen.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) coincide con los repositorios con la palabra "rails" escrita en JavaScript.

## Buscar por tema

Puedes encontrar todos los repositorios que se clasifiquen con un tema particular. Para obtener más información, consulte "[Clasificación del repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) coincide con los repositorios que se han clasificado con el tema "Jekyll".

## Buscar por cantidad de temas

Puede buscar repositorios por la cantidad de temas que se les hayan aplicado utilizando el calificador `topics` en conjunto con aquellos de mayor que, menor que y rango. Para obtener más información, consulte "[Clasificación del repositorio con temas](/github/administering-a-repository/classifying-your-repository-with-topics)" y "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) coincide con repositorios que tienen cinco temas.
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) coincide con repositorios que tienen más de tres temas.

{% ifversion fpt or ghes or ghec %}

## Buscar por licencia

Puedes buscar repositorios con por su tipo de licencia. Debes utilizar una palabra clave de licencia para filtrar los repositorios por algún tipo particular o familia de licencias. Para obtener más información, consulte "[Generar licencia para un repositorio](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) coincide con los repositorios con licencia de Apache License 2.0.

{% endif %}

## Buscar por visibilidad del repositorio

Puedes filtrar tu búsqueda con base en la visibilidad de los repositorios. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Calificador | Ejemplo | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) coincide con repositorios públicos propiedad de {% data variables.product.company_short %}.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) coincide con repositorios internos a los que puede acceder y contienen la palabra "test".{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) coincide con repositorios privados a los que puede acceder y contienen la palabra "pages".

{% ifversion fpt or ghec %}

## Buscar en base a si un repositorio es un espejo

Puedes buscar repositorios con base en si éstos son espejos y se hospedan en otro lugar. Para obtener más información, consulte "[Encontrar maneras para colaborar con el código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) coincide con repositorios que son reflejos y contienen la palabra "GNOME".
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) coincide con repositorios que no son reflejos y contienen la palabra "GNOME".

{% endif %}

## Buscar en base a si un repositorio está archivado

Puedes buscar los repositorios con base en si se archivaron o no. Para obtener más información, Consulte "[Archivado de repositorios](/repositories/archiving-a-github-repository/archiving-repositories)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) coincide con repositorios que están archivados y contienen la palabra "GNOME".
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) coincide con repositorios que no están archivados y contienen la palabra "GNOME".

{% ifversion fpt or ghec %}

## Búsqueda basada en el número de incidencias con etiquetas `good first issue` o `help wanted`

Puede buscar repositorios que tengan un número mínimo de incidencias con la etiqueta `help-wanted` o `good-first-issue` y los calificadores `help-wanted-issues:>n` y `good-first-issues:>n`. Para obtener más información, consulte "[Fomentar colaboraciones útiles para el proyecto con etiquetas](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) coincide con repositorios con más de dos incidencias con la etiqueta `good-first-issue` y que contienen la palabra "javascript".
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) coincide con repositorios con más de cuatro incidencias con la etiqueta `help-wanted` y que contienen la palabra "React".

## Búsqueda basada en la capacidad de patrocinar

Puede buscar repositorios cuyos propietarios puedan patrocinarse en {% data variables.product.prodname_sponsors %} con el calificador `is:sponsorable`. Para más información, vea "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

Puede buscar repositorios que tengan un archivo de financiación con el calificador `has:funding-file`. Para obtener más información, vea "[Acerca de los archivos FUNDING](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) coincide con repositorios cuyos propietarios tienen un perfil de {% data variables.product.prodname_sponsors %}.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) coincide con repositorios que tienen un archivo FUNDING.yml.

{% endif %}

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
- "[Buscar en bifurcaciones](/search-github/searching-on-github/searching-in-forks)"
