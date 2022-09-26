---
title: Organización de la información con secciones contraídas
intro: 'Para simplificar el Markdown, crea una sección contraída con la etiqueta `<details>`.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273102'
---
## Creación de una sección contraída

Puede ocultar temporalmente las secciones de Markdown mediante la creación de una sección contraída que el lector puede elegir expandir. Por ejemplo, si quiere incluir detalles técnicos en el comentario una incidencia que puede no ser relevante o interesante para todos los lectores, puede colocar esos detalles en una sección contraída.

Cualquier Markdown dentro del bloque `<details>` se contraerá hasta que el lector haga clic en {% octicon "triangle-right" aria-label="The right triange icon" %} para expandir los detalles. Dentro del bloque `<details>`, use la etiqueta `<summary>` para crear una etiqueta a la derecha de {% octicon "triangle-right" aria-label="The right triange icon" %}.

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

El Markdown se contraerá de forma predeterminada.

![Representado contraído](/assets/images/help/writing/collapsed-section-view.png)

Después de que un lector haga clic en {% octicon "triangle-right" aria-label="The right triange icon" %}, los detalles se expanden.

![Representado abierto](/assets/images/help/writing/open-collapsed-section.png)

## Información adicional

- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
