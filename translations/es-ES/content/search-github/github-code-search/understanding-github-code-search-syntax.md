---
title: Descripción de la sintaxis de GitHub Code Search (beta)
intro: 'Puedes crear consultas de búsqueda para los resultados que quieras con calificadores de código especializados, expresiones regulares y operaciones booleanas.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160067'
---
{% note %}

**Nota:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Acerca de la nueva estructura de consultas de búsqueda de código (beta)

La sintaxis de búsqueda de este artículo solo se aplica a la búsqueda de código con la nueva búsqueda de código (beta) habilitada. {% data reusables.search.non-code-search-explanation %}

Las consultas de búsqueda constan de términos de búsqueda, que incluyen el texto que quieres buscar y calificadores, que limitan la búsqueda. 

Un término sin calificadores coincidirá con el contenido de un archivo o la ruta de acceso del archivo. 

Por ejemplo, la consulta siguiente:

```
http-push
```

La consulta anterior coincidirá con el archivo `docs/http-push.txt`, incluso si no contiene el término `http-push`. También coincidirá con un archivo llamado `example.txt` si contiene el término `http-push`. 

Puedes introducir varios términos separados por espacios en blanco para buscar documentos que cumplan ambos términos. 

Por ejemplo, la consulta siguiente:

```
sparse index
```

Los resultados de la búsqueda incluirían todos los documentos que contienen los términos `sparse` y `index`, en cualquier orden. Como ejemplos, coincidiría con un archivo que contenga `SparseIndexVector`, un archivo con la frase `index for sparse trees` e incluso un archivo denominado `index.txt` que contenga el término `sparse`.  

La búsqueda de varios términos separados por espacios en blanco es equivalente a la búsqueda `hello AND world`. Otras operaciones booleanas, como `hello OR world`, también se admiten en la nueva búsqueda de código (beta). Para obtener más información sobre las operaciones booleanas, consulta "[Uso de operaciones booleanas](#using-boolean-operations)".

La nueva búsqueda de código (beta) también admite la búsqueda de una cadena exacta, incluido el espacio en blanco. Para obtener más información, consulta "[Consulta de una coincidencia exacta](#query-for-an-exact-match)".

Puedes restringir la búsqueda de código con calificadores especializados, como `repo:`, `language:` y `path:`. Para obtener más información sobre los calificadores que puede usar en la nueva búsqueda de código (beta), consulta "[Uso de calificadores](#using-qualifiers)".

También puedes usar expresiones regulares en las búsquedas rodeando la expresión con barras diagonales inversas. Para obtener más información sobre el uso de expresiones regulares, consulta "[Uso de expresiones regulares](#using-regular-expressions)".

## Consulta de una coincidencia exacta

Para buscar una cadena exacta, incluido el espacio en blanco, puedes rodear la cadena con comillas. Por ejemplo:

```
"sparse index"
```

Para buscar una frase que contenga comillas, puedes establecer la comilla mediante una barra diagonal inversa. Por ejemplo, para buscar la cadena exacta `name = "tensorflow"`, puedes buscar:

```
"name = \"tensorflow\""
```

También puedes usar cadenas entre comillas en calificadores, por ejemplo:

```
path: git language: "protocol buffers"
```

## Uso de operaciones booleanas

La nueva búsqueda de código (beta) admite expresiones booleanas. Puedes usar los operadores `AND`, `OR` y `NOT` para combinar términos de búsqueda.

De forma predeterminada, los términos adyacentes separados por espacios en blanco son equivalentes al uso del operador `AND`. Por ejemplo, la consulta de búsqueda `sparse index` es la misma que `sparse AND index`, lo que significa que los resultados de la búsqueda incluirán todos los documentos que contengan los términos `sparse` y `index`, en cualquier orden.

Para buscar documentos que contengan un término u otro, puedes usar el operador `OR`. Por ejemplo, la consulta siguiente coincidirá con los documentos que contengan `sparse` o `index`:

```
sparse OR index
```

Para excluir archivos de los resultados de búsqueda, puedes usar el operador `NOT`. Por ejemplo, para excluir el archivo en el directorio `__testing__`, puedes buscar:

```
"fatal error" NOT path:__testing__
```

Puedes usar paréntesis para expresar expresiones booleanas más complicadas. Por ejemplo:

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## Uso de calificadores

Puedes usar palabras clave especializadas para calificar la búsqueda.
- [Calificador de repositorio](#repository-qualifier)
- [Calificadores de organización y usuario](#organization-and-user-qualifiers)
- [Calificador de lenguaje](#language-qualifier)
- [Calificador de ruta de acceso](#path-qualifier)
- [Calificador de símbolos](#symbol-qualifier)
- [Calificador de contenido](#content-qualifier)
- [Calificador IS](#is-qualifier)

### Calificador de repositorio

Para buscar dentro de un repositorio, usa el calificador `repo:`. Debes proporcionar el nombre completo del repositorio, incluido el propietario. Por ejemplo:

```
repo:github/linguist
```

Para buscar en un conjunto de repositorios, puedes combinar varios calificadores `repo:` con el operador booleano `OR`. Por ejemplo:

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**Nota:** La nueva versión beta de búsqueda de código no admite actualmente expresiones regulares o coincidencias parciales para los nombres de repositorio, por lo que tendrás que escribir todo el nombre del repositorio (incluido el prefijo de usuario) para que el calificador `repo:` funcione.

{% endnote %}

### Calificadores de organización y usuario

Para buscar archivos dentro de una organización, usa el calificador `org:`. Por ejemplo:

```
org:github
```

Para buscar archivos dentro de una cuenta personal, usa el calificador `user:`. Por ejemplo:

```
user:octocat
```

{% note %}

**Nota:** La nueva versión beta de búsqueda de código no admite actualmente expresiones regulares o coincidencias parciales para los nombres de la organización o usuario, por lo que tendrás que escribir todo el nombre de la organización o nombre de usuario para que el calificador funcione.

{% endnote %}


### Calificador de lenguaje

Para reducir a un lenguaje específico, usa el calificador `language:`. Por ejemplo: 

```
language: ruby OR language:cpp OR language:csharp
```

Para obtener una lista completa de los nombres de lenguajes admitidos, consulta [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) en [github/linguist](https://github.com/github/linguist). Si su lenguaje preferido no está en la lista, puedes abrir una solicitud de incorporación de cambios para agregarlo.

### Calificador de ruta de acceso

Para buscar en rutas de acceso de archivo, usa el calificador `path:`. Esto coincidirá con los archivos que contienen el término en cualquier lugar de la ruta de acceso del archivo. Por ejemplo, para buscar archivos que contengan el término `unit_tests` en su ruta de acceso, usa:

```
path:unit_tests
```
 La consulta anterior coincidirá con `src/unit_tests/my_test.py` y `src/docs/unit_tests.md`, ya que ambas contienen `unit_test` en algún lugar de su ruta de acceso. 

 Para que solo coincida con un nombre de archivo específico (y no parte de la ruta de acceso), puedes usar una expresión regular:

 ```
 path:/(^|\/)README\.md$/
 ```
Ten en cuenta que `.` en el nombre de archivo tiene escape, ya que `.` tiene un significado especial para las expresiones regulares. Para obtener más información sobre el uso de expresiones regulares, consulta "[Uso de expresiones regulares](#using-regular-expressions)".

<br>

También puedes usar algunas expresiones globales limitadas en el calificador `path:`.

Por ejemplo, para buscar archivos con la extensión `txt`, puedes usar:

```
path:*.txt
```
<br>
Para buscar archivos de JavaScript en un directorio `src`, puedes usar:

```
path:src/*.js
```

- De forma predeterminada, las expresiones globales no están ancladas al inicio de la ruta de acceso, por lo que la expresión anterior seguiría coincidiendo con una ruta de acceso como `app/src/main.js`. Pero si prefijas la expresión con `/`, se delimitará al inicio. Por ejemplo:

    ```
    path:/src/*.js
    ```
- Ten en cuenta que `*` no coincide con el carácter `/`, por lo que, para el ejemplo anterior, todos los resultados serán descendientes directos del directorio `src`. Para buscar coincidencias en subdirectorios, de modo que los resultados incluyan archivos profundamente anidados como `/src/app/testing/utils/example.js`, puedes usar `**`. Por ejemplo:

    ```
    path:/src/**/*.js
    ```
<br>

También puedes usar el carácter global `?`. Por ejemplo, para que coincida con la ruta de acceso `file.aac` o `file.abc`, puedes usar:

```
path:*.a?c
```
<br>
Para buscar un nombre de archivo que contenga un carácter especial como `*` o `?`, simplemente usa una cadena entre comillas:

```
path:"file?"
```

Como las expresiones globales están deshabilitadas para las cadenas entre comillas, la consulta anterior solo coincidirá con las rutas de acceso que contienen la cadena literal `file?`. 

### Calificador de símbolos

Puedes buscar definiciones de símbolos en el código, como definiciones de función o de clase, mediante el calificador `symbol:`. La búsqueda de símbolos se basa en el análisis del código mediante el ecosistema del analizador de [árboles](https://github.com/tree-sitter) de código abierto, por lo que no se requiere ninguna configuración adicional ni integración de la herramienta de compilación.

Por ejemplo, para buscar un símbolo denominado `WithContext`:

```
language:go symbol:WithContext
```

En algunos lenguajes, puedes buscar símbolos mediante un prefijo (por ejemplo, un prefijo de su nombre de clase). Por ejemplo, para un método `deleteRows` en una estructura `Maint`, podrías buscar `symbol:Maint.deleteRows` si usas Go o `symbol:Maint::deleteRows` en Rust.

También puedes usar expresiones regulares con el calificador de símbolo. Por ejemplo, la consulta siguiente encontraría conversiones que las personas han implementado en Rust para el tipo `String`:

```
language:rust symbol:/^String::to_.*/
```

Ten en cuenta que este calificador solo busca definiciones y no referencias, y no todos los tipos de símbolos o lenguajes son totalmente compatibles todavía. La extracción de símbolos es compatible con los siguientes lenguajes. 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- Búferes de protocolo
- Ruby
- Rust

Estamos trabajando en agregar compatibilidad con más lenguajes. Si quieres ayudar a contribuir a este esfuerzo, puedes agregar compatibilidad con su lenguaje en el ecosistema de [analizadores de árboles](https://github.com/tree-sitter) de código abierto, en el que se basa la búsqueda de símbolos.

### Calificador de contenido

De forma predeterminada, los términos sin sistema buscan en las rutas de acceso y el contenido del archivo. Para restringir una búsqueda para que coincida estrictamente con el contenido de un archivo y no las rutas de acceso de archivo, usa el calificador `content:`. Por ejemplo:

```
content:README.md
```

Esta consulta solo coincidiría con los archivos que contienen el término `README.md`, en lugar de los archivos coincidentes denominados `README.md`. 

### Calificador IS

Para filtrar en función de las propiedades del documento, puede usar el calificador `is:`. En este momento, el único valor admitido en este calificador es `archived`, que restringe la búsqueda a repositorios archivados. Por ejemplo:

```
path:/MIT.txt is:archived
```

Ten en cuenta que el calificador `is:` se puede invertir con el operador `NOT`. Para buscar repositorios no archivados, puedes buscar:

```
log4j NOT is:archived
```

## Uso de expresiones regulares

La nueva búsqueda de código (beta) admite expresiones regulares para buscar patrones en el código. Puedes usar expresiones regulares en términos de búsqueda sin sistema operativo, así como en muchos calificadores, rodeando la expresión regular en barras diagonales inversas. 

Por ejemplo, para buscar la expresión regular `sparse.*index`, usarías:

```
/sparse.*index/
```

Ten en cuenta que tendrá que escapar las barras diagonales dentro de la expresión regular. Por ejemplo, para buscar archivos dentro del directorio `App/src`, usarías:

```
/^App\/src\//
```
