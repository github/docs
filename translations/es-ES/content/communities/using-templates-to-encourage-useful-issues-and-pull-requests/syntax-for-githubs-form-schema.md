---
title: Sintaxis para el modelado de formato de GitHub
intro: 'Puedes utilizar el modelado de formato de {% data variables.product.company_short %} para configurar los formatos para las características compatibles.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
---

{% note %}

**Nota:** El modelado de formatos de {% data variables.product.company_short %} se encuentra actualmente en beta y está sujeto a cambios.

{% endnote %}

## Acerca del modelado de formatos de {% data variables.product.company_short %}

Puedes utilizar el modelado de formato de {% data variables.product.company_short %} para configurar los formatos para las características compatibles. Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)".

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

## Claves

Para cada elemento de formato, puedes configurar las siguientes claves.

| Clave         | Descripción                                                                                                                                                                                                                                                            | Requerido | Tipo      | Predeterminado                                  | Valores válidos                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------- | ----------------------------------------------- |
| `type`        | El tipo de elemento que quieres definir.                                                                                                                                                                                                                               | Requerido | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul>                       |
| `id`          | El identificador del elemento, excepto cuando el `type` se configura como `markdown`. {% data reusables.form-schema.id-must-be-unique %} Si se proporcionó, la `id` es el identificador canónico para el campo en los pre-llenados de parámetro de la consulta de URL. | Opcional  | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `attributes`  | Un conjunto de pares clave-valor que definen las propiedades del elemento.                                                                                                                                                                                             | Requerido | Hash      | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `validations` | Un conjunto de pares de clave-valor que configuran las restricciones en el elemento.                                                                                                                                                                                   | Opcional  | Hash      | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

Puedes elegir desde los siguientes tipos de elementos de formato. Cada tipo tiene atributos y validaciones únicos.

| Tipo                        | Descripción                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`markdown`](#markdown)     | El texto de lenguaje de marcado se muestra en el formato para proporcionar contexto adicional al usuario, pero **no se ha enviado**. |
| [`textarea`](#textarea)     | Un campo de texto de línea múltiple.                                                                                                 |
| [`input`](#input)           | Un campo de texto de línea sencilla.                                                                                                 |
| [`desplegable`](#dropdown)  | Un menú desplegable.                                                                                                                 |
| [`checkboxes`](#checkboxes) | Un conjunto de casillas de verificación.                                                                                             |

### `markdown`

Puedes utilizar un elemento de `markdown` para mostrar el lenguaje de marcado en tu formato que proporcione contexto adicional al usuario, pero que no se haya emitido.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave   | Descripción                                                               | Requerido | Tipo      | Predeterminado                                  | Valores válidos                                 |
| ------- | ------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------- | ----------------------------------------------- |
| `value` | El texto se interpreta. El formateo en lenguaje de marcado es compatible. | Requerido | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% tip %}

**Tips:** El procesamiento de YAML tratará el símbolo de hash como un comentario. Para insertar encabezados con lenguaje de marcado, pon tu texto entre comillas.

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

Puedes utilizar un elemento de `textarea` para agregar un texto de línea múltiple a tu formato. Los contribuyentes también pueden adjuntar archivos en los campos de `textarea`.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave         | Descripción                                                                                                                                                                                                           | Requerido | Tipo      | Predeterminado                                  | Valores válidos                                                                                                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `etiqueta`    | Una descripción breve de la entrada que se espera del usuario, lo cual también se muestra en el formato.                                                                                                              | Requerido | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descripción` | Una descripción del área de texto para proporcionar contexto u orientación, la cual se muestra en el formato.                                                                                                         | Opcional  | Secuencia | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | Un marcador de posición que interpreta en el área de texto cuando está vacía.                                                                                                                                         | Opcional  | Secuencia | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | El texto se pre-llena en el área de texto.                                                                                                                                                                            | Opcional  | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `render`      | Si se proporciona un valor, el texto emitido se formatea en un bloque de código. Cuando se proporciona esta llave, el áera de texto no se expandirá para los adjuntos de archivo o la edición de lenguaje de marcado. | Opcional  | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | Los lenguajes que conoce {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta [el archivo YAML de lenguajes](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Requerido | Tipo | Predeterminado | Valores válidos |
| ----- | ----------- | --------- | ---- | -------------- | --------------- |
|       |             |           |      |                |                 |
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

Puedes utilizar un elemento de `input` para agregar un campo de texto de línea sencilla a tu formato.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave         | Descripción                                                                                              | Requerido | Tipo      | Predeterminado                                  | Valores válidos                                 |
| ------------- | -------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`    | Una descripción breve de la entrada que se espera del usuario, lo cual también se muestra en el formato. | Requerido | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descripción` | Una descripción del campo para proporcionar contexto u orientación, la cual se muestra en el formato.    | Opcional  | Secuencia | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | Un marcador de posición semi-transparente que interpreta en el campo cuando está vacío.                  | Opcional  | Secuencia | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | El texto se pre-llenó en el campo.                                                                       | Opcional  | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Requerido | Tipo | Predeterminado | Valores válidos |
| ----- | ----------- | --------- | ---- | -------------- | --------------- |
|       |             |           |      |                |                 |
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

### `desplegable`

Puedes utilizar un elemento de `dropdown` para agregar un menú desplegable en tu formato.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave         | Descripción                                                                                                                | Requerido | Tipo                  | Predeterminado                                  | Valores válidos                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`    | Una descripción de la entrada que se espera del usuario, lo cual también se muestra en el formato.                         | Requerido | Secuencia             | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descripción` | Una descripción del menú desplegable para proporcionar contexto adicional u orientación, la cual se muestra en el formato. | Opcional  | Secuencia             | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `multiple`    | Determina si el usuario puede seleccionar más de una opción.                                                               | Opcional  | Booleano              | false                                           | {% octicon "dash" aria-label="The dash icon" %}
| `options`     | Un arreglo de opciones que puede elegir el usuario. No puede estar vacío y todas las elecciones deben ser distintas.       | Requerido | Arreglo de secuencias | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### Validaciones

{% data reusables.form-schema.validations-intro %}

| Clave | Descripción | Requerido | Tipo | Predeterminado | Valores válidos |
| ----- | ----------- | --------- | ---- | -------------- | --------------- |
|       |             |           |      |                |                 |
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

Puedes utilizar el elemento de `checkboxes` para agregar un conjunto de casillas de verificación a tu formato.

#### Atributos

{% data reusables.form-schema.attributes-intro %}

| Clave         | Descripción                                                                                                                                       | Requerido | Tipo      | Predeterminado                                  | Valores válidos                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------- | ----------------------------------------------- |
| `etiqueta`    | Una descripción de la entrada que se espera del usuario, lo cual también se muestra en el formato.                                                | Requerido | Secuencia | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `descripción` | Una descripción del conjunto de casillas de verificación, la cual se muestra en el formato. Es compatible con el formateo de lenguaje de marcado. | Opcional  | Secuencia | Secuencia vacía                                 | {% octicon "dash" aria-label="The dash icon" %}
| `options`     | Un arreglo de casillas de verificación que puede seleccionar el usuario. Para conocer la sintaxis, consulta a continuación.                       | Requerido | Arreglo   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% data reusables.form-schema.options-syntax %}
{% data reusables.form-schema.required-key %}

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

## Leer más

- [YAML](https://yaml.org)
