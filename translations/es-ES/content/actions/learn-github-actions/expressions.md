---
title: Expresiones
shortTitle: Expressions
intro: Puedes evaluar las expresiones en los flujos de trabajo y acciones.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614227'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las expresiones

Puedes utilizar expresiones para configurar variables de ambiente con programación en los archivos de flujo de trabajo y contextos de acceso. Una expresión puede ser cualquier combinación de valores literales, referencias a un contexto o funciones. Puedes combinar valores literales, referencias de contexto y funciones usando operadores. Para obtener más información sobre los contextos, consulta "[Contextos](/actions/learn-github-actions/contexts)".

Las expresiones se utilizan comúnmente con la palabra clave condicional `if` en un archivo de flujo de trabajo para determinar si un paso debe ejecutarse. Cuando un condicional `if` es `true`, el paso se ejecutará.

Debes usar una sintaxis específica para decirle a {% data variables.product.prodname_dotcom %} que evalúe una expresión en lugar de tratarla como una cadena.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Para obtener más información sobre los condicionales `if`, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

{% data reusables.actions.context-injection-warning %}

#### Expresión de ejemplo en un condicional `if`

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Ejemplo de parámetros en una variable de entorno

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Literales

Como parte de una expresión, puedes usar los tipos de datos `boolean`, `null`, `number` o `string`.

| Tipo de datos | Valor literal |
|-----------|---------------|
| `boolean` | `true` o `false` |
| `null`    | `null` |
| `number`  | Cualquier formato de número compatible con JSON. |
| `string`  | No es necesario incluir las cadenas en `{% raw %}${{{% endraw %}` y `{% raw %}}}{% endraw %}`. Sin embargo, en caso de que lo hagas, debes utilizar comillas simples (`'`) alrededor de la cadena. Para utilizar una comilla simple literal, escápala utilizando una comilla simple adicional (`''`). El ajuste con comillas dobles (`"`) producirá un error. |

#### Ejemplo

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Operadores

| Operador    | Descripción |
| ---         | ---         |
| `( )`       | Agrupación lógica |
| `[ ]`       | Índice
| `.`         | Desreferencia de propiedad |
| `!`         | Not |
| `<`         | Menor que |
| `<=`        | Menor o igual que |
| `>`         | Mayor que |
| `>=`        | Mayor o igual que |
| `==`        | Igual |
| `!=`        | No igual a |
| `&&`        | Y |
|  <code>\|\|</code> | Or |

{% data variables.product.prodname_dotcom %} realiza comparaciones de igualdad flexible.

* Si los tipos no coinciden, {% data variables.product.prodname_dotcom %} fuerza el tipo a un número. {% data variables.product.prodname_dotcom %} fusiona los tipos de datos con un número usando estas conversiones:

  | Tipo    | Resultado |
  | ---     | ---    |
  | Null    | `0` |
  | Boolean | `true` devuelve `1`. <br /> `false` devuelve `0`. |
  | String  | Se analiza desde cualquier formato de número JSON legal; de lo contrario, `NaN`. <br /> Nota: La cadena vacía devuelve `0`. |
  | Array   | `NaN` |
  | Object  | `NaN` |
* Una comparación de un elemento `NaN` con otro elemento `NaN` no da como resultado `true`. Para obtener más información, consulta la "[documentación de NaN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)".
* {% data variables.product.prodname_dotcom %} ignora las mayúsculas y minúsculas al comparar cadenas.
* Los objetos y matrices solo se consideran iguales cuando son la misma instancia.

## Functions

{% data variables.product.prodname_dotcom %} ofrece un conjunto de funciones integradas que puedes usar en expresiones. Algunas funciones fusionan valores en una cadena para realizar las comparaciones. {% data variables.product.prodname_dotcom %} fusiona los tipos de datos con una cadena usando estas conversiones:

| Tipo    | Resultado |
| ---     | ---    |
| Null    | `''` |
| Boolean | `'true'` o `'false'` |
| Number  | Formato decimal, exponencial para números grandes |
| Array   | Las matrices no se convierten en cadenas |
| Object  | Los objetos no se convierten en cadenas |

### contains

`contains( search, item )`

Devuelve `true` si `search` contiene `item`. Si `search` es una matriz, esta función devuelve `true` si `item` es un elemento de la matriz. Si `search` es una cadena, esta función devuelve `true` si `item` es una subcadena de `search`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo usando una cadena

`contains('Hello world', 'llo')` devuelve `true`.

#### Ejemplo de uso de un filtro de objetos

`contains(github.event.issue.labels.*.name, 'bug')` devuelve `true` si el problema relacionado con el evento tiene una etiqueta "bug".

Para más información, consulta "[Filtros de objetos](#object-filters)".

#### Ejemplo que coincide con una matriz de cadenas

En lugar de escribir `github.event_name == "push" || github.event_name == "pull_request"`, puedes usar `contains()` con `fromJson()` para comprobar si una matriz de cadenas contiene un `item`.

Por ejemplo, `contains(fromJson('["push", "pull_request"]'), github.event_name)` devuelve `true` si `github.event_name` es "push" o "pull_request".

### startsWith

`startsWith( searchString, searchValue )`

Devuelve `true` cuando `searchString` empieza por `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo

`startsWith('Hello world', 'He')` devuelve `true`.

### endsWith

`endsWith( searchString, searchValue )`

Devuelve `true` si la cadena `searchString` está situada al final de la cadena `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo

`endsWith('Hello world', 'ld')` devuelve `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Reemplaza los valores de `string`, con la variable `replaceValueN`. Las variables de `string` se especifican mediante la sintaxis `{N}`, donde `N` es un entero. Debes especificar al menos un `replaceValue` y `string`. No hay un máximo para el número de variables (`replaceValueN`) que puedes usar. Escapar las llaves utilizando llaves dobles.

#### Ejemplo

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Devuelve 'Hello Mona the Octocat'.

#### Ejemplo de evasión de llaves

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Devuelve '{Hello Mona the Octocat!}'.

### join

`join( array, optionalSeparator )`

El valor de `array` puede ser una matriz o una cadena. Todos los valores de `array` se concatenan en una cadena. Si proporcionas `optionalSeparator`, se inserta entre los valores concatenados. De lo contrario, se usa el separador predeterminado `,`. Fusiona valores en una cadena.

#### Ejemplo

`join(github.event.issue.labels.*.name, ', ')` puede devolver "bug, help wanted"

### toJSON

`toJSON(value)`

Devuelve una representación JSON con formato mejorado de `value`. Puedes usar esta función para depurar la información suministrada en contextos.

#### Ejemplo

`toJSON(job)` puede devolver `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Devuelve un objeto JSON o un tipo de datos JSON para `value`. Puedes utilizar esta función para proporcionar un objeto JSON como una expresión evaluada o para convertir variables de ambiente desde una secuencia.

#### Ejemplo de devolver un objeto JSON

Este flujo de trabajo configura una matriz de JSON en un trabajo, y lo pasa al siguiente trabajo utilizando una salida y `fromJSON`.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Ejemplo de devolver un tipo de datos JSON

Este flujo de trabajo usa `fromJSON` para convertir variables de entorno de una cadena a un valor booleano o entero.

{% raw %}
```yaml
name: print
on: push
env:
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

### hashFiles

`hashFiles(path)`

Devuelve un hash único para el conjunto de archivos que coincide con el patrón `path`. Puede proporcionar un único patrón `path` o varios patrones `path` separados por comas. `path` es relativo al directorio `GITHUB_WORKSPACE` y solo puede incluir archivos dentro de `GITHUB_WORKSPACE`. Esta función calcula un hash SHA-256 individual para cada archivo coincidente, y luego usa esos hashes para calcular un hash SHA-256 final para el conjunto de archivos. Si el patrón `path` no coincide con ningún archivo, devuelve una cadena vacía. Para obtener más información sobre SHA-256, consulta "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Puedes usar caracteres de coincidencia de patrones para encontrar nombres de archivos. La coincidencia de patrones no distingue mayúsculas de minúsculas en Windows. Para obtener más información sobre los caracteres de coincidencia de patrones admitidos, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

#### Ejemplo con un solo patrón

Coincide con cualquier archivo `package-lock.json` del repositorio.

`hashFiles('**/package-lock.json')`

#### Ejemplo con patrones múltiples

Crea un hash para todos los archivos `package-lock.json` y `Gemfile.lock` del repositorio.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Funciones de verificación del estado

Puedes usar las siguientes funciones de comprobación de estado como expresiones en condicionales `if`. Se aplica una comprobación de estado predeterminada de `success()` a menos que incluyas una de estas funciones. Para obtener más información sobre los condicionales `if`, consulta "[Sintaxis de flujo de trabajo para Acciones de GitHub](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)" y "[Sintaxis de metadatos para Acciones compuestas de GitHub](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)".
{% else %}
## Funciones de verificación
Puedes usar las siguientes funciones de comprobación de estado como expresiones en condicionales `if`. Se aplica una comprobación de estado predeterminada de `success()` a menos que incluyas una de estas funciones. Para obtener más información sobre los condicionales `if`, consulta "[Sintaxis de flujo de trabajo para Acciones de GitHub](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".
{% endif %}

### success

Devuelve `true` cuando ninguno de los pasos anteriores ha producido un error o se ha cancelado.

#### Ejemplo

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### Siempre

Hace que el paso siempre se ejecute y devuelve `true`, incluso cuando se cancela. No se ejecutará un trabajo o paso cuando una falla crítica impida que la tarea se ejecute. Por ejemplo, si fallaron las fuentes.

#### Ejemplo

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Devuelve `true` si el flujo de trabajo se ha cancelado.

#### Ejemplo

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

Devuelve `true` cuando se produce un error en cualquier paso anterior de un trabajo. Si tienes una cadena de trabajos dependientes, `failure()` devuelve `true` si se produce un error en algún trabajo antecesor.

#### Ejemplo

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### error con condiciones

Puedes incluir condiciones adicionales para que un paso se ejecute después de un error, pero todavía debes incluir `failure()` para invalidar la comprobación de estado predeterminada de `success()` que se aplica automáticamente a las condiciones `if` que no contienen una función de comprobación de estado.

##### Ejemplo

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Filtros de objetos

Puedes usar la sintaxis `*` para aplicar un filtro y seleccionar los elementos coincidentes en una colección.

Por ejemplo, considera una matriz de objetos denominada `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

El filtro `fruits.*.name` devuelve la matriz `[ "apple", "orange", "pear" ]`.

También puedes usar la sintaxis `*` en un objeto. Por ejemplo, supongamos que tienes un objeto denominado `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

El filtro `vegetables.*.ediblePortions` podría evaluarse como:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Dado que los objetos no conservan el orden, no se puede garantizar el orden de la salida.
