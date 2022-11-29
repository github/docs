---
title: Errores de validación comunes al crear formatos de propuesta
intro: 'Podrías ver alguno de estos errores de validación comunes al crear, guardar o visualizar formatos de propuestas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 54451186fe7fcbc40945dc6a0b2ee2d757924c1b
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '145861073'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## <a name="required-top-level-key-name-is-missing"></a>Falta la clave `name` de nivel superior necesaria

La plantilla no contiene un campo `name`, lo que significa que no está claro cómo llamar a la plantilla de incidencia cuando se le proporcione una lista de opciones a los usuarios.

### <a name="example"></a>Ejemplo

```yaml
description: "Thank you for reporting a bug!"
...
```

El error se puede corregir si se agrega `name` como una clave.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## <a name="key-must-be-a-string"></a>`key` debe ser una cadena

Este mensaje de error significa que se proporcionó una clave permitida, pero su valor no se puede analizar, ya que el tipo de datos no es compatible.

### <a name="example"></a>Ejemplo

El objeto `description` siguiente se analiza como un valor booleano, pero debería ser una cadena.

```yaml
name: "Bug report"
description: true
...
```

El error puede corregirse si proporcionas una secuencia como el valor. Las secuencias podrían necesitar ponerse entre comillas dobles para que se analicen con éxito. Por ejemplo, las cadenas que contienen `'` se deben encapsular entre comillas dobles.

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

## <a name="input-is-not-a-permitted-key"></a>`input` no es una clave permitida

Se proporcionó una llave inesperada en el nivel superior de la plantilla. Para más información sobre qué claves de nivel superior se admiten, vea "[Sintaxis para formularios de incidencias](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)".

### <a name="example"></a>Ejemplo

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

## <a name="forbidden-keys"></a>Claves prohibidas

YAML analiza determinadas cadenas como valores `Boolean`. Para evitar esto, prohibimos explícitamente el uso de las siguientes claves:

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

Este error puede corregirse si se eliminan las claves prohibidas.

## <a name="body-must-contain-at-least-one-non-markdown-field"></a>El cuerpo debe contener por lo menos un campo que no sea de lenguaje de marcado

Los formatos de propuestas deben aceptar las entradas de usuario, lo cual significa que por lo menos uno de sus campos debe contener uno de entrada de usuario. Un elemento `markdown` es texto estático, por lo que una matriz `body` no puede contener solo elementos `markdown`.

### <a name="example"></a>Ejemplo

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

## <a name="body-must-have-unique-ids"></a>El cuerpo debe tener ID únicas

Si usa atributos `id` para distinguir varios elementos, cada atributo `id` debe ser único.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se cambia `id` para una de estas entradas, de modo que cada campo `input` tenga un atributo `id` único.

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

## <a name="body-must-have-unique-labels"></a>El cuerpo debe tener etiquetas únicas

Cuando hay varios elementos `body` que aceptan la entrada de usuario, el atributo `label` de cada campo de entrada de usuario debe ser único.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se cambia el atributo `label` por uno de los campos de entrada para asegurarse de que cada valor `label` sea único.

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

Los campos de entrada también se pueden diferenciar por su atributo `id`. Si se necesitan atributos `label` duplicados, puede suministrar al menos un valor `id` para diferenciar dos elementos con etiquetas idénticas.

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

Los atributos `id` no son visibles en el cuerpo de la incidencia. Si quiere distinguir los campos en la incidencia resultante, debe usar atributos `label` distintos.


## <a name="labels-are-too-similar"></a>Las etiquetas son muy similares

Se podrían procesar etiquetas similares en referencias idénticas. Si no se proporciona un atributo `id` para `input`, se usa el atributo `label` para generar una referencia al campo `input`. Para ello, se procesa `label` mediante el método [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) de Rails. En algunos casos, dos etiquetas distintas pueden procesarse en la misma secuencia parametrizada.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se agrega al menos un carácter alfanumérico de diferenciación, `-`, o bien `_` a una de las etiquetas en conflicto.

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

El error también se puede corregir si se le otorga un valor `id` único a una de las etiquetas en conflicto.

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

## <a name="checkboxes-must-have-unique-labels"></a>Las casillas de verificación deben tener etiquetas únicas

Cuando hay un elemento `checkboxes`, cada una de sus etiquetas anidadas debe ser única entre sus elementos del mismo nivel, así como entre otros tipos de entrada.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se cambia el atributo `label` por una de estas entradas.

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

Como alternativa, puede proporcionar un elemento `id` a cualquier elemento de nivel superior en conflicto. Los elementos de casilla anidados no admiten el atributo `id`.

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

Los atributos `id` no son visibles en el cuerpo de la incidencia. Si quiere distinguir los campos en la incidencia resultante, debe usar atributos `label` distintos.

## <a name="bodyi-required-key-type-is-missing"></a>Body[i]: falta el tipo de clave necesario

Cada bloque de cuerpo debe contener la clave `type`.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice cero del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

El error se puede corregir si se agrega la clave `type` con un tipo de entrada válido como valor. Para obtener los tipos de entrada de `body` disponibles y sus sintaxis, vea "[Sintaxis para el esquema de formulario de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)".

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-x-is-not-a-valid-input-type"></a>Body[i]: `x` no es un tipo de entrada válido

Uno de los bloques de cuerpo contiene un valor de tipo que no es uno de los [tipos permitidos](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

El error se puede corregir si se cambia `x` por uno de los tipos válidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-required-attribute-key-value-is-missing"></a>Body[i]: falta la clave de atributo `value` necesaria

No se ha proporcionado uno de los atributos `value` necesarios. El error se produce cuando un bloque no tiene una clave `attributes`, o bien no tiene una clave `value` bajo la clave `attributes`.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

El error de este ejemplo se puede corregir si se agrega `value` como una clave en `attributes` en el segundo elemento de lista de `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## <a name="bodyi-label-must-be-a-string"></a>Body[i]: la etiqueta debe ser una secuencia

Dentro de su bloque `attributes`, un valor tiene el tipo de datos incorrecto.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

El objeto `label` siguiente se analiza como un valor booleano, pero debería ser una cadena.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

El error se puede corregir si se proporciona un valor de cadena para `label`. Si quiere usar un valor `label` que se pueda analizar como booleano, número entero o decimal, debe encapsular el valor entre comillas. Por ejemplo, `"true"` o `"1.3"` en lugar de `true` o `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

No se permiten las secuencias vacías o aquellas que consisten exclusivamente de espacios en blanco cuando un atributo espera una secuencia. Por ejemplo, no se permiten `""` ni `"     "`.

Si se requiere el atributo, el valor debe ser una secuencia que no esté vacía. Si no se requiere el campo, deberías borrar el par de llave-valor.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## <a name="bodyi-id-can-only-contain-numbers-letters---_"></a>Body[i]: `id` solo puede contener números, letras, -, _

Los atributos `id` solo puede contener caracteres alfanuméricos, `-` y `_`. La plantilla puede incluir caracteres no permitidos, como espacios en blanco, en un elemento `id`.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

El error se puede corregir si se asegura de que los espacios en blanco y otros caracteres no permitidos se quitan de los valores `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## <a name="bodyi-x-is-not-a-permitted-key"></a>Body[i]: `x` no es una clave permitida

Se ha proporcionado una clave inesperada, `x`, en el mismo nivel de sangría que `type` y `attributes`.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

El error se puede corregir si se quitan las claves adicionales y solo se usan `type`, `attributes` y `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-label-contains-forbidden-word"></a>Body[i]: `label` contiene palabras prohibidas

Para minimizar el riesgo de que la información privada y las credenciales se publiquen de forma pública en Incidencias de GitHub, no se permiten algunas palabras usadas por los atacantes en los elementos `label` de entrada o área de texto.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

El error se puede corregir si se quitan términos como "contraseña" de los campos `label`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## <a name="bodyi-x-is-not-a-permitted-attribute"></a>Body[i]: `x` no es un atributo permitido

Se ha proporcionado una clave no válida en un bloque `attributes`.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

El error se puede corregir si se quitan las claves adicionales y solo se usan atributos permitidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## <a name="bodyi-options-must-be-unique"></a>Body[i]: `options` debe ser único

Para los casillas y los tipos de entrada desplegables, las opciones definidas en la matriz `options` deben ser únicas.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se asegura de que no existen opciones duplicadas en la matriz `options`.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## <a name="bodyi-options-must-not-include-the-reserved-word-none&quot;></a>Body[i]: `options` no debe incluir la palabra reservada &quot;none"

"None" es una palabra reservada de un conjunto de `options`, porque se usa para indicar que no hay opciones disponibles cuando `dropdown` no es obligatorio.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si se quita "None" (Ninguno) como opción. Si quiere que un colaborador pueda indicar que no le gustan ninguno de esos tipos de gráficos, también puede quitar la validación de `required`.

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

En este ejemplo, "None" (Ninguno) se rellenará de forma automática como una opción que se pueda seleccionar.

## <a name="bodyi-options-must-not-include-booleans-please-wrap-values-such-as-yes-and-true-in-quotes"></a>Body[i]: `options` no debe incluir valores booleanos. Encapsule entre comillas los valores como "sí" y "true".

Hay varias palabras en inglés que se procesan en valores booleanos mediante el analizador de YAML a menos que se encapsulan entre comillas. Para la lista desplegable `options`, todos los elementos deben ser cadenas en lugar de valores booleanos.

A los errores con `body` se les asignará el prefijo `body[i]`, donde `i` representa el índice del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` indica que el error ha sido causado por el primer bloque de la lista `body`.

### <a name="example"></a>Ejemplo

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

El error se puede corregir si cada opción incorrecta se encapsula entre comillas, para evitar que se procesen como valores booleanos.

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

## <a name="further-reading"></a>Información adicional

- [YAML](https://yaml.org/)
- [Sintaxis para formularios de incidencias](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
