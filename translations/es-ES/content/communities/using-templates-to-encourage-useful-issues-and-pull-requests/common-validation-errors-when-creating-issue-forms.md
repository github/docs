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

Cuando está presente un elemento de `checkboxes`, cada una de sus etiquetas anidadas debe ser única entre sus pares, así como entre otros tipos de entrada.

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

El error se puede corregir cambiando el atributo `label` para una de estas entradas.

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

Como alternativa, puedes proporcionar una `id` para cualquier elemento en conflicto de nivel superior. Los elementos de casilla de verificación anidada no son compatibles con el atributo `id`.

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

## Body[i]: no se encuentra el tipo de llave requerido

Cada bloque del cuerpo debe contener el `type` de la llave.

Los errores con `body` tendràn un prefijo de `body[i]` en donde `i` representa el índice cero del bloque de cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el error lo ocasionó el primer bloque en la lista `body`.

### Ejemplo

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
```

El error puede corregirse si agregas la clave `type` con un tipo de entrada válido como el valor. Para los tipos de entrada de `body` disponibles y sus sintaxis, consulta la sección "[Sintaxis para el modelo de formato de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)".

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
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
```

El error puede corregirse cambiando `x` a uno de los tipos válidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
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
- type: markdown
```

El error en este ejemplo puede corregirse si se agrega `value` como una clave debajo de `attributes` en el segundo elemento de lista de `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
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

Los atributos de `id` solo pueden contener caracteres alfanuméricos, `-` y `_`. Tu plantilla podría incluir caracteres no permitidos, tales como el espacio en blanco, en una `id`.

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

El error puede corregirse si te aseguras de que se eliminen los espacios en blanco y otros caracteres no permitidos de los valores de la `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]: `x` no es una clave permitida

Se proporcionó una clave inesperada, `x`, en el mismo nivel de sangría que `type` y `attributes`.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
```

El error se puede corregir eliminando las claves adicionales y utilizando únicamente `type`, `attributes` e `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! Si necesitas ayuda en tiempo real, únetenos en Discord."
```

## Body[i]: `label` contiene una palabra prohibida

Para disminuir el riesgo de que la información privada y las credenciales se publiquen para todos en general en las propuestas de GitHub, algunas palabras que los atacantes utilizan habitualmente no se permiten en la `label`de entrada ni en los elementos del área de texto.

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

El error se puede corregir si se eliminan los términos como "contraseña" de cualquier campo de `label`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]: `x` no es un atributo permitido

Se suministró una clave inválida en un bloque de `attributes`.

En los errores con `body` se utilizará el prefijo `body[i]`, en donde `i` representa el índice del bloque del cuerpo que contiene el error. Por ejemplo, `body[0]` nos dice que el primer bloque en la lista `body` ocasionó el error.

### Ejemplo

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

El error puede corregirse si eliminas las claves adicionales y solo utilizas los atributos permitidos.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]: `options` debe ser único

En el caso de los tipos de entrada de casillas de verificación y menús desplegables, las elecciones que se definen en el arreglo `options` deben ser únicas.

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

El error puede corregirse si garantizas que no habrán elecciones duplicadas en el arreglo `options`.

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]: `options` no debe incluir la palabra reservada "none"

"None" es una palabra reservada en un conjunto de `options` ya que se utiliza para indicar que no hay elecciones cuando no se requiere un `dropdown`.

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

El error puede corregirse si se elimina "None" de las opciones. Si quieres que un contribuyente pueda indicar que no le parece ninguno de esos tipos de tarta, puedes eliminar adicionalmente la validación `required`.

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

En este ejemplo, "None" se llenará automáticamente como una opción seleccionable.

## Body[i]: `options` no debe incluir booleanos. Por favor, pon los valores como 'yes' y 'true' entre comillas

Hay varias palabras en inglés que el analizador de YAML procesa como valores Booleanos, a menos de que se pongan entre comillas. Para las `options` de menú desplegable, todos los elementos deben ser secuencias en vez de booleanos.

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

El error puede corregirse si pones cada opción infractora entre comillas, para prevenir que se procesen como valores booleanos.

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
