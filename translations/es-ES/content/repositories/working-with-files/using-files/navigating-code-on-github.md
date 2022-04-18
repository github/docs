---
title: Código de navegación en GitHub
intro: 'Puedes comprender las relaciones dentro y a través de los repositorios al navegar directamente por código en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
---

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## Acerca de la navegación de código en {% data variables.product.prodname_dotcom %}

La navegación de código te ayuda a leer, navegar y entender el código al mostrarte y enlazar las definiciones de una entidad nombrada que corresponda a la referencia de la misma, así como mostrando referencias que corresponden a la definición de dicha entidad.

![Pantalla de navegación de código](/assets/images/help/repository/code-navigation-popover.png)

La navegación de código utiliza la librería de código abierto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Los siguientes lenguajes y estrategias de navegación son compatibles:

|  Lenguaje  | Search-based code navigation | Precise code navigation |
|:----------:|:----------------------------:|:-----------------------:|
|     C#     |              ✅               |                         |
|   CodeQL   |              ✅               |                         |
|   Elixir   |              ✅               |                         |
|     Go     |              ✅               |                         |
|    Java    |              ✅               |                         |
| JavaScript |              ✅               |                         |
|    PHP     |              ✅               |                         |
|   Python   |              ✅               |            ✅            |
|    Ruby    |              ✅               |                         |
| TypeScript |              ✅               |                         |


No necesitas configurar nada en tu repositorio para habilitar la navegación de código. Extraeremos información de navegación de código precisa y basada en búsquedas automáticamente para estos lenguajes compatibles en todos los repositorios y puedes cambiar entre estos dos acercamientos compatibles de navegación de código si tu lenguaje de programación es compatible con ambos.

{% data variables.product.prodname_dotcom %} ha desarrollado dos acercamientos de navegación de código con base en las librerías de código abierto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) y [`stack-graphs`](https://github.com/github/stack-graphs):
 - Search-based - searches all definitions and references across a repository to find entities with a given name
 - Precise - resolves definitions and references based on the set of classes, functions, and imported definitions at a given point in your code

Para aprender más sobre estos acercamientos, consulta la sección "[Navegación precisa y basada en búsquedas](#precise-and-search-based-navigation)".

Los lanzamientos de características agregarán *navegación de código precisa* para más lenguajes, lo cual es un acercamiento de navegación de código que puede otorgar resultados más exactos.

## Saltar a la definición de una función o método

Puedes saltar a una definición de función o de método dentro del mismo repositorio si das clic en la llamada a dicha función o método dentro de un archivo.

![Pestaña Jump-to-definition](/assets/images/help/repository/jump-to-definition-tab.png)

## Buscar todas las referencias de una función o método

Puedes encontrar todas las referencias para una función o método dentro del mismo repositorio si das clic en el llamado a dicha función o método en un archivo y posteriormente das clic en la pestaña de **Referencias**.

![Pestaña Find all references (Buscar todas las referencias)](/assets/images/help/repository/find-all-references-tab.png)

## Navegación precisa y basada en búsqueda

Alugnos lenguajes que son compatibles con {% data variables.product.prodname_dotcom %} tienen acceso a la *navegación de código precisa*, la cual utiliza un algoritmo (basado en la librería de código abierto [`stack-graphs`](https://github.com/github/stack-graphs)) que resuelve las definiciones y referencias con base en el conjunto de clases, funciones y definiciones importadas que son visibles en cualquier punto de tu código. Otros lenguajes utilizan la *navegación de código basada en búsquedas*, la cual busca todas las definiciones y referencias a lo largo de un repositorio para encontrar entidades con un nombre específico. Ambas estrategias son efectivas para encontrar resultados y ambas se aseguran de evitar resultados inadecuados, tales como los comentarios, pero la navegación de código precisa puede arrojar resultados más exactos, especialmente cuando un repositorio contiene métodos múltiples o funciones con el mismo nombre.

Si no ves los resultados que esperas de una consulta de navegación de código precisa, puedes hacer clic en el enlace de "basada en búsqueda" en el mensaje emergente que se muestra para realizar una navegación basada en búsqueda.

![Enlace de navegación de código basada en búsqueda](/assets/images/help/repository/search-based-code-navigation-link.png)

Si tus resultados precisos te parecen inexactos, puedes enviar una solicitud de soporte.

## Solución de problemas en la navegación de código

Si se habilitó la navegación de código pero no ves los enlaces a las definiciones de las funciones y métodos:
- La navegación de código solo funciona para las ramas activas. Sube a la rama e intenta de nuevo.
- La navegación de código funciona únicamente para los repositorios que tienen menos de 100,000 archivos.

## Leer más
- "[Buscar código](/github/searching-for-information-on-github/searching-code)"
