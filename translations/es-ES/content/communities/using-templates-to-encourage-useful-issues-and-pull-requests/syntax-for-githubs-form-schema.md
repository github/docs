---
title: Sintaxis para el modelado de formato de GitHub
intro: 'Puedes utilizar el modelado de formato de {% data variables.product.company_short %} para configurar los formatos para las características compatibles.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: 2a329c7c0a7f1943f7515059c3f376fa36ea29b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117577'
---
{% note %}

**Nota:** El esquema de formato de {% data variables.product.company_short %} se encuentra actualmente en versión beta y está sujeto a cambios.

{% endnote %}

## Acerca del modelado de formatos de {% data variables.product.company_short %}

Puedes utilizar el modelado de formato de {% data variables.product.company_short %} para configurar los formatos para las características compatibles. Para más información, vea "[Configuración de plantillas de incidencia para el repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)".

Un formato es un conjunto de elemotos para solicitar la aportación de un usuario. Puedes configurar un formato si creas una definición de formato YAML, la cual es un arreglo de elementos de formato. Cada elemento de formato es un conjunto de pares de valor-llave que determinan el tipo y las propiedades del elemento y las restricciones que quieres aplicarle. Para algunas claves, el valor es otro conjunto de pares de clave-valor.

Por ejemplo, la siguente definición de formato incluye cuatro elementos de formato: un área de texto para proporcionar el sistema operativo del usuario, un menú desplegable para elegir la versión de software que está ejecutando el usuario, una casilla de verificación para reconocer que se leyó y aceptó el código de conducta y el lenguaje de marcado que agradece al usuario por haber completado el formato.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Teclas

Para cada elemento de formato, puedes configurar las siguientes claves.

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | El tipo de elemento que quieres definir. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | Identificador del elemento, excepto cuando `type` se establece en `markdown`. {% data reusables.form-schema.id-must-be-unique %} Si se proporciona, `id` es el identificador canónico para el campo en los valores previamente rellenados de parámetro de la consulta de URL. | Opcionales | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | Un conjunto de pares clave-valor que definen las propiedades del elemento.  | Obligatorio | Hash | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | Un conjunto de pares de clave-valor que configuran las restricciones en el elemento. | Opcionales | Hash | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

Puedes elegir desde los siguientes tipos de elementos de formato. Cada tipo tiene atributos y validaciones únicos.

| Tipo | Descripción |
| ---- | ----------- |
| [`markdown`](#markdown) | El texto de Markdown que se muestra en el formulario para proporcionar contexto adicional al usuario, pero que **no se envía**. |
| [`textarea`](#textarea) | Un campo de texto de línea múltiple. |
| [`input`](#input) | Un campo de texto de línea sencilla. |
| [`dropdown`](#dropdown) | Un menú desplegable. |
| [`checkboxes`](#checkboxes) | Un conjunto de casillas de verificación. |

### `markdown`

Puede usar un elemento `markdown` para mostrar Markdown en el formulario que proporcione contexto adicional al usuario, pero que no se envíe.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | El texto se interpreta. El formateo en lenguaje de marcado es compatible. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Sugerencias:** el procesamiento de YAML tratará el símbolo hash como un comentario. Para insertar encabezados con lenguaje de marcado, pon tu texto entre comillas.

Para el texto de línea múltiple, puedes utilizar el operador de pipa.

{% endtip %}

#### Ejemplo

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Puede usar un elemento `textarea` para agregar un campo de texto de varias líneas al formulario. Los colaboradores también pueden adjuntar archivos en campos `textarea`.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Una descripción breve de la entrada que se espera del usuario, lo cual también se muestra en el formato. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Una descripción del área de texto para proporcionar contexto u orientación, la cual se muestra en el formato. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Un marcador de posición que interpreta en el área de texto cuando está vacía. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | El texto se pre-llena en el área de texto. | Opcionales | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | Si se proporciona un valor, el texto emitido se formatea en un bloque de código. Cuando se proporciona esta llave, el áera de texto no se expandirá para los adjuntos de archivo o la edición de lenguaje de marcado. | Opcionales | String | {% octicon "dash" aria-label="The dash icon" %} | Los lenguajes que conoce {% data variables.product.prodname_dotcom %}. Para más información, vea [el archivo YAML de lenguajes](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Ejemplo

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

Puede usar un elemento `input` para agregar un campo de texto de una sola línea al formulario.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Una descripción breve de la entrada que se espera del usuario, lo cual también se muestra en el formato. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Una descripción del campo para proporcionar contexto u orientación, la cual se muestra en el formato. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Un marcador de posición semi-transparente que interpreta en el campo cuando está vacío. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | El texto se pre-llenó en el campo. | Opcionales | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Ejemplo

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

Puede usar un elemento `dropdown` para agregar un menú desplegable en el formulario.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Una descripción de la entrada que se espera del usuario, lo cual también se muestra en el formato. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Una descripción del menú desplegable para proporcionar contexto adicional u orientación, la cual se muestra en el formato. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Determina si el usuario puede seleccionar más de una opción. | Opcionales | Boolean | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Un arreglo de opciones que puede elegir el usuario. No puede estar vacío y todas las elecciones deben ser distintas. | Obligatorio | Matriz de cadena | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Ejemplo

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

Puede usar el elemento `checkboxes` para agregar un conjunto de casillas al formulario.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave | Descripción | Obligatorio | Tipo | Valor predeterminado | Valores válidos |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Una descripción de la entrada que se espera del usuario, lo cual también se muestra en el formato. | Obligatorio | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Una descripción del conjunto de casillas de verificación, la cual se muestra en el formato. Es compatible con el formateo de lenguaje de marcado. | Opcionales | String | Cadena vacía | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Un arreglo de casillas de verificación que puede seleccionar el usuario. Para conocer la sintaxis, consulta a continuación. | Obligatorio | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %} {% data reusables.form-schema.required-key %}

#### Ejemplo

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Información adicional

- [YAML](https://yaml.org)
