---
title: Código de búsqueda
intro: 'Puedes buscar código en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de código en cualquier combinación.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160341'
---
{% ifversion github-code-search %} {% note %}

  **Nota:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} Para obtener más información, vea "[Acerca de la búsqueda en GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Únicamente puedes buscar código utilizando estos calificadores de búsqueda de código. Los calificadores de búsqueda especialmente para repositorios, usuarios o confirmaciones de cambios, no funcionarán cuando busques código.

{% data reusables.search.syntax_tips %}

## Consideraciones para la búsqueda de código

Debido a la complejidad de la búsqueda de código, hay algunas restricciones sobre cómo se realizan las búsquedas:

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- El código en las [bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) solo se puede buscar si estas tienen más estrellas que el repositorio primario. Las bifurcaciones con menos estrellas que el repositorio primario **no** se indexan para la búsqueda de código. Para incluir bifurcaciones con más estrellas que sus elementos primarios en los resultados de búsqueda, deberá agregar `fork:true` o `fork:only` a la consulta. Para obtener más información, vea "[Buscar en bifurcaciones](/search-github/searching-on-github/searching-in-forks)".
- Para la búsqueda de código solo se indexa la _rama predeterminada_.{% ifversion fpt or ghec %}
- Solo los archivos menores de 384 KB son indexados.{% else %}* Solo los archivos menores de 5 MB son indexados.
- Solo los primeros 500 KB de cada archivo son indexados.{% endif %}
- Se pueden buscar hasta 4000 repositorios privados{% ifversion ghec or ghes or ghae %} e internos{% endif %}. Estos 4000 repositorios serán los que se han actualizado más recientemente de los primeros 10 000 repositorios privados{% ifversion ghec or ghes or ghae %} e internos{% endif %} a los que tienes acceso.
- Solo se pueden buscar repositorios con menos de 500 000 archivos.{% ifversion fpt or ghec %}
- Solo se pueden hacer búsquedas en los repositorios que han tenido actividad o que se han devuelto en los resultados de búsqueda dentro del último año.{% endif %}
- Con la excepción de las búsquedas de [`filename`](#search-by-filename), siempre debe incluir por lo menos un término de búsqueda cuando busque en el código fuente. Por ejemplo, la búsqueda de [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) no es válida, mientras que la de [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) sí lo es.
- A lo sumo, los resultados de búsqueda pueden mostrar dos fragmentos del mismo archivo, pero puede haber más resultados dentro del archivo.
- No puede utilizar los siguientes caracteres comodines como parte de la consulta de búsqueda: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. La búsqueda simplemente ignorará estos símbolos.

## Buscar según los contenidos del archivo o la ruta de archivo

Con el calificador `in` puede restringir la búsqueda a los contenidos del archivo del código fuente, de la ruta del archivo o de ambos. Cuando omites este calificador, únicamente se busca el contenido del archivo.

| Calificador:  | Ejemplo
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) coincide con el código donde "octocat" aparece en el contenido del archivo.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) coincide con el código donde "octocat" aparece en el contenido de la ruta de acceso.
| | [**octocat in:file, path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) coincide con el código donde "octocat" aparece en el contenido del archivo o de la ruta de acceso del archivo.

## Buscar dentro de los repositorios de un usuario u organización

Para buscar el código en todos los repositorios que son propiedad de una determinada organización o usuario, puede utilizar el calificador `user` o `org`. Para buscar el código en un repositorio específico, puede utilizar el calificador `repo`.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) coincide con el código de @defunkt que termina en <em>.rb</em>.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) coincide con el código de GitHub que termina en <em>.js</em>.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) coincide con el código del proyecto shumway de @mozilla que termina en <em>.as</em>.

## Buscar por ubicación del archivo

Puede utilizar el calificador `path` para buscar el código fuente que aparece en una ubicación específica en un repositorio. Utilice `path:/` para buscar archivos que se encuentren en el nivel raíz de un repositorio. O especifica un nombre de directorio o ruta a un directorio para buscar archivos que estén ubicados dentro de ese directorio o alguno de sus subdirectorios.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) coincide con los archivos _léame_ con la palabra "octocat" que se encuentran en el nivel raíz de un repositorio.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) coincide con los archivos Perl con la palabra "form" en el directorio <em>cgi-bin</em>, o en cualquiera de sus subdirectorios.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) coincide con los archivos de JavaScript con la palabra "console" en el directorio <em>app/public</em>, o en cualquiera de sus subdirectorios (incluso si están en <em>app/public/js/form-validators</em>).

## Buscar por lenguaje

Puedes buscar el código basado en el lenguaje en que está escrito. El calificador `language` puede ser el nombre o alias del lenguaje. Para obtener una lista completa de los lenguajes admitidos con sus nombres y alias, vea el [repositorio github/linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) coincide con el código con la palabra "element" que se marca como XML y tiene exactamente 100 bytes.
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) coincide con el código con la palabra "display", que se marca como SCSS.
| | [**org:mozilla language:Markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) coincide con el código de todos los repositorios de @mozilla marcados como Markdown.

## Buscar por tamaño de archivo

Puede utilizar el calificador `size` para buscar código fuente en base al tamaño del archivo donde existe el código. El calificador `size` usa [calificadores mayor que, menor que y de rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) para filtrar los resultados en función del tamaño en bytes del archivo en el que se encuentra el código.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) coincide con el código con la palabra "function", escrita en Python, en archivos que tienen más de 10 KB.

## Buscar por nombre de archivo

El calificador `filename` coincide con archivos de código con un determinado nombre de archivo. También puedes encontrar un archivo en un repositorio utilizando el buscador de archivo. Para obtener más información, vea "[Buscar archivos en GitHub](/search-github/searching-on-github/finding-files-on-github)".

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) coincide con los archivos denominados "linguist".
| | [**los comandos filename:.vimrc**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) coinciden con los archivos *.vimrc* con la palabra "commands".
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) coincide con los archivos Ruby denominados *test_helper* en el directorio de *prueba*.

## Buscar por extensión de archivo

El calificador `extension` coincide con archivos de código con una determinada extensión de archivo.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) coincide con el código con la palabra "form", en <em>cgi-bin</em>, con la extensión de archivo <em>.pm</em>.
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) coincide con los archivos de más de 200 KB que terminan en .css y tienen la palabra "icon".

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
- "[Buscar bifurcaciones](/search-github/searching-on-github/searching-in-forks)"{% ifversion fpt or ghec %}
- "[Navegar por el código en {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
