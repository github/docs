---
title: Buscar código
intro: 'Puedes buscar código en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de código en cualquier combinación.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes buscar código globalmente a lo largo de todos los {% data variables.product.product_name %}, o buscar código dentro de un repositorio u organización particular. Para buscar código a través de todos los repositorios públicos, debes estar registrado en una cuenta {% data variables.product.product_name %}. Para obtener más información, consulta "[Acerca de la búsqueda en GitHub](/articles/about-searching-on-github)".

Únicamente puedes buscar código utilizando estos calificadores de búsqueda de código. Los calificadores de búsqueda especialmente para repositorios, usuarios o confirmaciones de cambios, no funcionarán cuando busques código.

{% data reusables.search.syntax_tips %}

### Consideraciones sobre la búsqueda de código

Debido a la complejidad de la búsqueda de código, hay algunas restricciones sobre cómo se realizan las búsquedas:

- {% data reusables.search.required_login %}
- El código en [bifurcaciones](/articles/about-forks) es únicamente indexado si la bifurcación tiene más estrellas que el repositorio padre. Las bifurcaciones con menos estrellas que el repositorio padre **no** son indexadas para la búsqueda de código. Para incluir bifurcaciones con más estrellas que sus padres en los resultados de las búsquedas, deberás agregar `fork:true` o `fork:only` en tu consulta. Para obtener más información, consulta "[Buscar en bifurcaciones](/articles/searching-in-forks)".
- Solo la _rama predeterminada_ se indiza para la búsqueda de código.{% if currentVersion == "free-pro-team@latest" %}
- Solo los archivos menores de 384 KB son indexados.{% else %}* Solo los archivos menores de 5 MB son indexados.
- Solo los primeros 500 KB de cada archivo son indexados.{% endif %}
- Solo los repositorios con menos de 500.000 archivos son indexados.
- Los usuarios que están registrados pueden buscar en todos los repositorios públicos.
- Excepto con las búsquedas por [`nombre de archivo`](#search-by-filename), siempre debes incluir por lo menos un término de búsqueda cuando buscas el código fuente. Por ejemplo, no es válido buscar por [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults), mientras que sí los es por [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults).
- A lo sumo, los resultados de búsqueda pueden mostrar dos fragmentos del mismo archivo, pero puede haber más resultados dentro del archivo.
- No puedes utilizar los siguientes caracteres comodines como parte de la consulta de búsqueda: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]</code>. La búsqueda simplemente ignorará estos símbolos.

### Buscar según los contenidos del archivo o la ruta de archivo

Con el calificador `in` puedes restringir tu búsqueda a los contenidos del archivo del código fuente, de la ruta del archivo, o de ambos. Cuando omites este calificador, únicamente se busca el contenido del archivo.

| Qualifier | Ejemplo                                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) encuentra el código donde aparece "octocat" en el contenido del archivo.                                   |
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) encuentra el código donde aparece "octocat" en la ruta del archivo.                                        |
|           | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) encuentra el código donde aparece "octocat" en el contenido del archivo o la ruta del archivo. |

### Buscar dentro de los repositorios de un usuario u organización

Para buscar el código en todos los repositorios que son propiedad de una determinada organización o usuario, puedes utilizar el calificador `user` u `org`. Para buscar el código en un repositorio específico, puedes utilizar el calificador `repo`.

| Qualifier                 | Ejemplo                                                                                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) encuentra el código de @defunkt que termina en <em>.rb</em>.                                         |
| <code>org:<em>ORGNAME</em></code> | [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) encuentra el código de GitHub que termina en <em>.js</em>.                               |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) encuentra el código del proyecto shumway de @mozilla que termina en <em>.as</em>. |

### Buscar por ubicación del archivo

Puedes utilizar el calificador `path` (ruta) para buscar el código fuente que aparece en una ubicación específica en un repositorio. Utiliza `path:/` para buscar archivos que estén ubicados a nivel de la raíz de un repositorio. O especifica un nombre de directorio o ruta a un directorio para buscar archivos que estén ubicados dentro de ese directorio o alguno de sus subdirectorios.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>path:/</code>  | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) encuentra los archivos _readme_ con la palabra "octocat" que se encuentran al nivel de raíz de un repositorio.                                                                                                       |
| <code>path:<em>DIRECTORY</em></code>  | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) encuentra los archivos Perl con la palabra "form" en un directorio <em>cgi-bin</em> o en cualquiera de sus subdirectorios.                                                                                                   |
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**console path:app/public language:javascript**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) encuentra los archivos JavaScript con la palabra "console" en un directorio <em>app/public</em> o en cualquiera de sus subdirectorios (incluso si se encuentran en <em>app/public/js/form-validators</em>). |

### Buscar por lenguaje

Puedes buscar el código basado en el lenguaje en que está escrito.

| Qualifier                  | Ejemplo                                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) encuentra código con la palabra "element" que está marcada como XML y tiene exactamente 100 bytes.      |
|                            | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) encuentra código con la palabra "display," que está marcada como SCSS.                                                    |
|                            | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) encuentra código de todos los repositorios de @mozilla que están marcados como Markdown. |

### Buscar por tamaño de archivo

Puedes utilizar el calificador `size` (tamaño) para buscar código fuente en base al tamaño del archivo donde existe el código. El calificador `size` utiliza [calificadores mayor que, menor que y rango](/articles/understanding-the-search-syntax) para filtrar resultados en base al tamaño de bytes del archivo en donde se encuentra el código.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) encuentra código con la palabra "function," escrita en Python, en archivos que son mayores a 10 KB. |

### Buscar por nombre de archivo

El calificador `filename` (nombre de archivo) encuentra archivos de código con un determinado nombre de archivo. También puedes encontrar un archivo en un repositorio utilizando el buscador de archivo. Para obtener más información, consulta "[Encontrar archivos en GitHub](/articles/finding-files-on-github)."

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) encuentra archivos con el nombre de "linguist."                                                                                       |
|                            | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) encuentra los archivos *.vimrc* con la palabra "commands".                                                                             |
|                            | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) encuentra archivos Ruby con el nombre *test_helper* dentro del directorio *test*. |

### Buscar por extensión de archivo

El calificador `extension` (extensión) encuentra archivos de código con una determinada extensión de archivo.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) encuentra el código con la palabra "form", debajo de <em>cgi-bin</em>, con la extensión de archivo <em>.pm</em>. |
|                            | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) busca archivos más grandes de 200 KB que terminan en .css y tienen la palabra "icon".                               |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
- "[Buscar en ramificaciones](/articles/searching-in-forks)"{% if currentVersion == "free-pro-team@latest" %}
- "[Navegar en el código de {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
