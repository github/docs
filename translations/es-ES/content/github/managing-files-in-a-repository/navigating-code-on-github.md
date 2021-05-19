---
title: Código de navegación en GitHub
intro: 'Puedes comprender las relaciones dentro y a través de los repositorios al navegar directamente por código en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

### Acerca de la navegación de código en {% data variables.product.prodname_dotcom %}

La navegación de código utiliza la biblioteca de código abierto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Los siguientes idiomas son compatibles:
- C#
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

{% note %}

**Nota**: La navegación de código funciona para las ramas activas. Si tienes la función habilitada pero no ves los enlaces a las definiciones de las funciones y los métodos, sube a la rama y trata nuevamente.

{% endnote %}

### Saltar a la definición de una función o método

Puedes saltar a una definición de función o de método dentro del mismo repositorio si das clic en la llamada a dicha función o método dentro de un archivo.

![Pestaña Jump-to-definition](/assets/images/help/repository/jump-to-definition-tab.png)

### Buscar todas las referencias de una función o método

Puedes encontrar todas las referencias para una función o método dentro del mismo repositorio si das clic en el llamado a dicha función o método en un archivo y posteriormente das clic en la pestaña de **Referencias**.

![Pestaña Find all references (Buscar todas las referencias)](/assets/images/help/repository/find-all-references-tab.png)

### Leer más
- "[Buscar código](/github/searching-for-information-on-github/searching-code)"
