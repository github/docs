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
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164167'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## Acerca de la navegación de código en {% data variables.product.prodname_dotcom %}

La navegación de código te ayuda a leer, navegar y entender el código al mostrarte y enlazar las definiciones de una entidad nombrada que corresponda a la referencia de la misma, así como mostrando referencias que corresponden a la definición de dicha entidad.

![Pantalla de navegación de código](/assets/images/help/repository/code-navigation-popover.png)

La navegación por el código usa la biblioteca de código abierto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Los siguientes lenguajes y estrategias de navegación son compatibles:

| Idioma   | Navegación de código basada en la búsqueda | Navegación de código precisa |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


No necesitas configurar nada en tu repositorio para habilitar la navegación de código. Extraeremos información de navegación de código precisa y basada en búsquedas automáticamente para estos lenguajes compatibles en todos los repositorios y puedes cambiar entre estos dos acercamientos compatibles de navegación de código si tu lenguaje de programación es compatible con ambos.

{% data variables.product.prodname_dotcom %} ha desarrollado dos enfoques de navegación por el código basados en las bibliotecas de código abierto [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) y [`stack-graphs`](https://github.com/github/stack-graphs):
 - Basada en búsquedas: busca todas las definiciones y referencias a lo largo de un repositorio para encontrar las entidades con un nombre específico.
 - Precisa: resuelve las definiciones y referencias con base en el conjunto de clases, funciones y definiciones importadas en algún punto específico de tu código

Para obtener más información sobre estos enfoques, consulta "[Navegación precisa y basada en búsqueda](#precise-and-search-based-navigation)".

Las futuras versiones agregarán la *navegación de código precisa* para más lenguajes, lo cual es un acercamiento de navegación de código que puede otorgar resultados más precisos.

## Saltar a la definición de una función o método

Puedes saltar a una definición de función o de método dentro del mismo repositorio si das clic en la llamada a dicha función o método dentro de un archivo.

![Pestaña Jump-to-definition](/assets/images/help/repository/jump-to-definition-tab.png)

## Buscar todas las referencias de una función o método

Puedes encontrar todas las referencias para una función o método dentro del mismo repositorio si haces clic en la función o la llamada de método de un archivo y posteriormente haces clic en la pestaña **Referencias**.

![Pestaña Find all references (Buscar todas las referencias)](/assets/images/help/repository/find-all-references-tab.png)

## Navegación precisa y basada en búsqueda

Algunos idiomas admitidos por {% data variables.product.prodname_dotcom %} tienen acceso a la *navegación de código precisa*, que usa un algoritmo (basado en la biblioteca código abierto [`stack-graphs`](https://github.com/github/stack-graphs)) que resuelve definiciones y referencias basadas en el conjunto de clases, funciones y definiciones importadas visibles en cualquier punto determinado del código. Otros lenguajes utilizan la *navegación de código basada en búsquedas*, la cual busca todas las definiciones y referencias a lo largo de un repositorio para encontrar entidades con un nombre específico. Ambas estrategias son efectivas para encontrar resultados y ambas se aseguran de evitar resultados inadecuados, tales como los comentarios, pero la navegación de código precisa puede arrojar resultados más exactos, especialmente cuando un repositorio contiene métodos múltiples o funciones con el mismo nombre.

Si no ves los resultados que esperas de una consulta de navegación de código precisa, puedes hacer clic en el enlace de "basada en búsqueda" en el mensaje emergente que se muestra para realizar una navegación basada en búsqueda.

![Enlace de navegación de código basada en búsqueda](/assets/images/help/repository/search-based-code-navigation-link.png)

Si tus resultados precisos te parecen inexactos, puedes enviar una solicitud de soporte.

## Navegación de código precisa entre repositorios

La navegación de código entre repositorios está disponible para los idiomas admitidos por la navegación de código precisa y el gráfico de dependencias. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)". Con la navegación de código entre repositorios, puedes saltar a la definición de funciones o variables definidas en dependencias importadas por el proyecto si esa dependencia es un repositorio hospedado por {% data variables.product.prodname_dotcom %}. La navegación por código entre repositorios no admite solicitudes de búsqueda de todas las referencias en este momento.

![Captura de pantalla de la navegación de código entre repositorios](/assets/images/help/repository/cross-repository-code-navigation.png)

## Solución de problemas en la navegación de código

Si se habilitó la navegación de código pero no ves los enlaces a las definiciones de las funciones y métodos:
- La navegación de código solo funciona para las ramas activas. Sube a la rama e intenta de nuevo.
- La navegación de código funciona únicamente para los repositorios que tienen menos de 100,000 archivos.

## Información adicional
- "[Búsquedas en código](/github/searching-for-information-on-github/searching-code)"
