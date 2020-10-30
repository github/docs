---
title: Código de búsqueda y navegación
intro: 'El código de búsqueda y navegación es una parte crítica del flujo de trabajo de desarrollo, y GitHub está mejorando estas áreas. Si eres partes de una organización que optó por el Código privado beta de búsqueda y navegación, tendrás acceso a nuevas herramientas de búsqueda y navegación. Para preguntas adicionales acerca de esta Beta privada, envía un correo electrónico a search-beta@github.com.'
hidden: true
redirect_from:
  - /articles/searching-and-navigating-code
versions:
  free-pro-team: '*'
---


### En esta guía

- [Búsqueda de código literal](#literal-code-search)
- [Relevancia](#relevancy)
- [Saltar a navegación](#jump-to-navigation)

### Búsqueda de código literal

Antes de esta Beta privada, muchos símbolos fueron desprovistos de índices de búsqueda, lo que significa que las expresiones idiomáticas comunes como `>>` no eran indexadas. Por ejemplo, cuando se busca `>>` en un repositorio, se muestran 0 resultados. Con la Beta privada, puedes encerrar el símbolo entre comillas dobles y ver los resultados correctos. Esta capacidad se extiende más allá de los símbolos y te permite buscar frases entrecomilladas enteras como `"return [] unless"`. Esta función se aplica a la búsqueda de código para todos los lenguajes.

### Relevancia

Para un subgrupo de lenguajes (Go, JavaScript, Python, Ruby, y TypeScript), la búsqueda de código ajusta la relevancia de las declaraciones. Se mostrará como resultado una declaración de un método, una función, una clase, u otra entidad antes de las solicitudes o los comentarios que incluyen el mismo término.

### Saltar a navegación

Para un subgrupo de lenguajes (Go, JavaScript, Python, Ruby, and TypeScript), GitHub ahora admite navegación e información adicional cuando haces clic sobre un símbolo. Esta navegación incluye saltar a la navegación de definición para los recursos dentro de un repositorio, lo que permite una navegación más rápida y una información aumentada.

### Comentarios

Todos los usuarios que actualmente optaron por el Código beta privado de búsqueda y navegación pueden aportar comentarios al hacer [esta encuesta](https://www.research.net/r/CodeSearch-Navigation). Para realizar comentarios y preguntas adicionales, envía un correo electrónico a search-beta@github.com.

### Leer más
- [Acerca de la búsqueda en GitHub](/articles/about-searching-on-github/)
- [Encontrar funciones y métodos cambiados en una solicitud de extracción](/articles/finding-changed-methods-and-functions-in-a-pull-request/)
