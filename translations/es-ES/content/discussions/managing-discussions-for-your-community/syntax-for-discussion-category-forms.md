---
title: Sintaxis de los formularios de categoría de discusión
shortTitle: Syntax for discussion category forms
intro: Puedes usar la sintaxis de YAML para definir los campos de tus formularios de categoría de discusión.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193562'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Acerca de la sintaxis de YALM de los formularios de categoría de discusión

Para crear formularios de categoría de discusión personalizados, puedes agregar un archivo de definición de formulario de YAML a la carpeta `/.github/DISCUSSION_TEMPLATE/` del repositorio. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

En cada campo, puedes definir el tipo de entrada, la validación y una etiqueta predeterminada.

Cuando un miembro de la comunidad rellena un formulario de discusión, sus respuestas en cada entrada se convierten en lenguaje de marcado y se agregan al cuerpo de una discusión. Los miembros de la comunidad pueden editar las discusiones que se han creado con un formulario de discusión, y otras personas pueden interactuar con la discusión como si fuera una discusión creada a través de otros métodos.

En este archivo de configuración YAML de ejemplo se define un formulario de categoría de discusión general.

{% data reusables.discussions.discussion-category-forms-sample %}

## Sintaxis de nivel superior

El archivo de configuración de un formulario de categoría de discusión debe contener una clave `body` y `body` debe contener al menos un campo que no sea de marcado.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

Puedes configurar las siguientes llaves de nivel superior para cada formato de propuesta.

| Clave | Descripción | Obligatorio | Tipo |
| :-- | :-- | :-- | :-- | :-- |
| `body` | Definición de los tipos de entrada del formulario de discusión | Obligatorio | Array |
| `labels` | Etiquetas que se agregarán automáticamente a las discusiones creadas con esta plantilla | Opcionales | Arreglo o secuencia delimitada por comas |
| `title` | Título predeterminado que aparecerá rellenado previamente en el formulario de envío de discusión | Opcionales | String |

Para agregar campos al formulario, incluye una matriz de elementos de formulario en la clave `body`. Para obtener una lista de los elementos disponibles y sus sintaxis, consulta [Sintaxis del esquema de formulario de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).
