---
title: Errores de validación comunes al crear formatos de propuesta
intro: 'Podrías ver alguno de estos errores de validación comunes al crear, guardar o visualizar formatos de propuestas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
---

<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## No se encuentra el `name` de nivel superior

La plantilla no contiene un campo de `name`, lo cual significa que no está claro cómo llamar a tu plantilla de propuesta cuando se le otorga una lista de opciones a los usuarios.

### Ejemplo

```yaml
description: "Thank you for reporting a bug!"
...
```

El error puede corregirse agregando `name` como clave.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## La `key` debe ser una secuencia

Este mensaje de error significa que se proporcionó una clave permitida, pero su valor no se puede analizar, ya que el tipo de datos no es compatible.

### Ejemplo

La `description` siguiente se analizó como un booleano, pero debería ser una secuencia.

```yaml
name: "Bug report"
description: true
...
```

El error puede corregirse si proporcionas una secuencia como el valor. Las secuencias podrían necesitar ponerse entre comillas dobles para que se analicen con éxito. Por ejemplo, las secuencias que contienen `'` deben ponerse entre comillas dobles.

```yaml
name: "Bug report"
description: "true"
...
```

Las secuencias vacías o aquellas que consisten de espacios en blanco únicamente tampoco son permisibles cuando el campo espera una secuencia.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

Este error puede arreglarse corrigiendo el valor para que sea una secuencia no vacía. Si no se requiere el campo, deberías borrar el par de llave-valor.

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input` no es una clave permitida

Se proporcionó una llave inesperada en el nivel superior de la plantilla. Para obtener más información sobre los tipos de claves de nivel superior compatibles, consulta la sección "[Sintaxis para los formatos de propuestas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)".

### Ejemplo

```yaml
name: "Bug report"
hello: world
...
```

Este error puede corregirse si se eliminan las claves inesperadas.

```yaml
name: "Bug report"
...
```

## Claves prohibidas

YAML analiza algunas secuencias como valores `Boolean`. Para evitar esto, prohibimos explícitamente el uso de las siguientes claves:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

Este error puede corregirse si se eliminan las claves prohibidas.

## El cuerpo debe contener por lo menos un campo que no sea de lenguaje de marcado

Los formatos de propuestas deben aceptar las entradas de usuario, lo cual significa que por lo menos uno de sus campos debe contener uno de entrada de usuario. Un elemento de `markdown` es texto estático, así que un arreglo de `body` no puede contener elementos de `markdown`.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

El error puede corregirse si se agregan elementos diferentes a los de lenguaje de marcado, los cuales acepten la entrada del usuario.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## El cuerpo debe tener ID únicas

Si utilizas atributos de `id` para distinguir elementos múltiples, cada uno de estos atributos de `id` debe ser único.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

El error puede corregirse si cambias la `id` por una de estas entradas para que cada campo de `input` tenga una atributo de `id` único.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## El cuerpo debe tener etiquetas únicas

Cuando hay elementos de `body` únicos que acepten la entrada de usuarios, el atributo `label` de cada campo de entrada de usuario debe ser único.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

El error puede corregirse si cambias el atributo `label` por uno de los campos de entrada para asegurarte de que cada `label` es única.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

Los campos de entrada también pueden diferenciarse por su atributo de `id`. Si se requieren atributos de `label` duplicados, puedes suministrar por lo menos una `id` para diferenciar dos elementos con etiquetas idénticas.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

Los atributos de `id` no se pueden ver en el cuerpo de la propuesta. Si quieres distinguir los campos en la propuesta resultante, deberías utilizar atributos distintos de `label`.


## Las etiquetas son muy similares

Se podrían procesar etiquetas similares en referencias idénticas. Si no se proporciona un atributo de `id` para una `input`, el atributo de `label` se utiliza para generar una referencia en el campo `input`. Para hacerlo, procesamos la `label` aprovechando el método de [parametrizar](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) de Rails. En algunos casos, dos etiquetas distintas pueden procesarse en la misma secuencia parametrizada.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

El error puede corregirse agregando por lo menos un carácter alfanumérico diferenciado, `-` o `_` a una de las etiquetas con conflicto.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

El error también puede corregirse si se le otorga una `id` única a una de las etiquetas en conflicto.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## Las casillas de verificación deben tener etiquetas únicas

When a `checkboxes` element is present, each of its nested labels must be unique among its peers, as well as among other input types.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

The error can be fixed by changing the `label` attribute for one of these inputs.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

Alternatively, you can supply an `id` to any clashing top-level elements. Nested checkbox elements do not support the `id` attribute.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Los atributos de `id` no estuvieron visibles en el cuerpo de la propuesta. Si quieres distinguir los campos en la propuesta resultante, deberías utilizar atributos distintos de `label`.

## Body[i]: required key type is missing

Each body block must contain the key `type`.

Los errores con `body` tendràn un prefijo de `body[i]` en donde `i` representa el índice cero del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el error lo ocasionó el primer bloque en la lista `body`.

### Ejemplo

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
```

El error puede corregirse si agregas la clave `type` con un tipo de entrada válido como el valor. Para los tipos de entrada de `body` disponibles y sus sintaxis, consulta la sección "[Sintaxis para el modelo de formato de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)".

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
```

## Body[i]: `x` no es un tipo de entrada válido

Uno de los bloques de cuerpo contiene un valor de tipo que no es uno de los [permitidos](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
```

El error puede corregirse cambiando `x` a uno de los tipos válidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
```

## Body[i]: falta la clave de atributo requerida `value`

No se proporcionó uno de los atributos `value` requeridos. El error ocurre cuando un bloque no tiene una clave de `attributes` o una de `value` debajo de la de `attributes`.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
- type: markdown
```

El error en este ejemplo puede corregirse si se agrega `value` como una clave debajo de `attributes` en el segundo elemento de lista de `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
    preview_only: false
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i]: la etiqueta debe ser una secuencia

Dentro de su bloque de `attributes`, un valor tiene el tipo de datos incorrecto.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

La `label` debajo se está analizando como un booleano, pero debería ser una secuencia.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

El error puede corregirse suministrando un valor de secuencia para `label`. Si quieres utilizar un valor de `label` que pueda analizarse como un booleano, número entero o decimal, deberías poner este valor entre comillas. Por ejemplo, `"true"` o `"1.3"` en vez de `true` o `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

No se permiten las secuencias vacías o aquellas que consisten exclusivamente de espacios en blanco cuando un atributo espera una secuencia. Por ejemplo, no se permite `""` o `"     "`.

Si se requiere el atributo, el valor debe ser una secuencia que no esté vacía. Si el campo no es requerido, deberías borrar el par de valor-llave.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i]: La `id` solo puede contener números, letras, -, o _

`id` attributes can only contain alphanumeric characters, `-`, and `_`. Your template may include non-permitted characters, such as whitespace, in an `id`.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

The error can be fixed by ensuring that whitespaces and other non-permitted characters are removed from `id` values.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]: `x` is not a permitted key

An unexpected key, `x`, was provided at the same indentation level as `type` and `attributes`.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
```

The error can be fixed by removing extra keys and only using `type`, `attributes`, and `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
```

## Body[i]: `label` contains forbidden word

To minimize the risk of private information and credentials being posted publicly in GitHub Issues, some words commonly used by attackers are not permitted in the `label` of input or textarea elements.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

The error can be fixed by removing terms like "password" from any `label` fields.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]: `x` is not a permitted attribute

An invalid key has been supplied in an `attributes` block.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

The error can be fixed by removing extra keys and only using permitted attributes.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]: `options` must be unique

For checkboxes and dropdown input types, the choices defined in the `options` array must be unique.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

The error can be fixed by ensuring that no duplicate choices exist in the `options` array.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]: `options` must not include the reserved word, none

"None" is a reserved word in an `options` set because it is used to indicate non-choice when a `dropdown` is not required.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

The error can be fixed by removing "None" as an option. If you want a contributor to be able to indicate that they like none of those types of pies, you can additionally remove the `required` validation.

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

In this example, "None" will be auto-populated as a selectable option.

## Body[i]: `options` must not include booleans. Please wrap values such as 'yes', and 'true' in quotes

There are a number of English words that become processed into Boolean values by the YAML parser unless they are wrapped in quotes. For dropdown `options`, all items must be strings rather than Booleans.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

The error can be fixed by wrapping each offending option in quotes, to prevent them from being processed as Boolean values.

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## Leer más

- [YAML](https://yaml.org/)
- [Sintaxis para formatos de propuesta](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
