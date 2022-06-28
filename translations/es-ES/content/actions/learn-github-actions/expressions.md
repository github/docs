---
title: Expresiones
shortTitle: Expresiones
intro: Puedes evaluar las expresiones en los flujos de trabajo y acciones.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las expresiones

Puedes utilizar expresiones para configurar variables de ambiente con programación en los archivos de flujo de trabajo y contextos de acceso. Una expresión puede ser cualquier combinación de valores literales, referencias a un contexto o funciones. Puedes combinar valores literales, referencias de contexto y funciones usando operadores. Para obtener más información sobre los contextos, consulta la sección "[Contextos](/actions/learn-github-actions/contexts)".

Las expresiones se utilizan comúnmente con la palabra clave condicional `if` en un archivo de flujo de trabajo para determinar si un paso debe ejecutar. Cuando un condicional `if` es `true`, se ejecutará el paso.

Debes usar una sintaxis específica para decirle a {% data variables.product.prodname_dotcom %} que evalúe una expresión en lugar de tratarla como una cadena.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Para obtener más información acerca de los condicionales `if`, consulta la sección "[sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

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

Como parte de una expresión, puedes usar tipos de datos `boolean`, `null`, `number` o `string`.

| Tipo de datos | Valor literal                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boolean`     | `verdadero` o `falso`                                                                                                                                                                                                                                                                                                                                             |
| `null`        | `null`                                                                                                                                                                                                                                                                                                                                                            |
| `number`      | Cualquier formato de número compatible con JSON.                                                                                                                                                                                                                                                                                                                  |
| `secuencia`   | No necesitas meter secuencias entre `{% raw %}${{{% endraw %}` y `{% raw %}}}{% endraw %}`. Sin embargo, en caso de que lo hagas, debes utilizar comillas simples (`'`) al rededor de la secuencia. ra utilizar una comilla simple literal, escápala utilizando una comilla simple adicional (`''`). Si envuelves las comillas dobles (`"`) se mostrará un error. |

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

| Operador                  | Descripción                |
| ------------------------- | -------------------------- |
| `( )`                     | Agrupación lógica          |
| `[ ]`                     | Índice                     |
| `.`                       | Desreferencia de propiedad |
| `!`                       | No                         |
| `<`                    | Menor que                  |
| `<`                    | Menor o igual              |
| `>`                    | Mayor que                  |
| `>=`                   | Mayor o igual              |
| `==`                      | Igual                      |
| `!=`                      | No es igual                |
| `&&`              | Y                          |
| <code>\|\|</code> | O                          |

{% data variables.product.prodname_dotcom %} realiza comparaciones de igualdad flexible.

* Si los tipos no coinciden, {% data variables.product.prodname_dotcom %} fuerza el tipo a un número. {% data variables.product.prodname_dotcom %} fusiona los tipos de datos con un número usando estas conversiones:

  | Tipo      | Resultado                                                                                                                      |
  | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
  | Nulo      | `0`                                                                                                                            |
  | Booleano  | `verdadero` devuelve `1` <br /> `falso` devuelve `0`                                                                     |
  | Secuencia | Analizado desde cualquier formato de número JSON legal, de lo contrario, `NaN`. <br /> Nota: La cadena vacía arroja `0`. |
  | Arreglo   | `NaN`                                                                                                                          |
  | Objeto    | `NaN`                                                                                                                          |
* Una comparación de un `NaN` con otro `NaN` no genera `true`. Para obtener más información, consulta "[Documentos de Mozilla NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)".
* {% data variables.product.prodname_dotcom %} ignora las mayúsculas y minúsculas al comparar cadenas.
* Los objetos y matrices solo se consideran iguales cuando son la misma instancia.

## Funciones

{% data variables.product.prodname_dotcom %} ofrece un conjunto de funciones integradas que puedes usar en expresiones. Algunas funciones fusionan valores en una cadena para realizar las comparaciones. {% data variables.product.prodname_dotcom %} fusiona los tipos de datos con una cadena usando estas conversiones:

| Tipo     | Resultado                                         |
| -------- | ------------------------------------------------- |
| Nulo     | `''`                                              |
| Booleano | `'verdadero'` o `'falso'`                         |
| Number   | Formato decimal, exponencial para grandes números |
| Arreglo  | Las matrices no se convierten en cadenas          |
| Objeto   | Los objetos no se convierten en cadenas           |

### contains

`contiene (buscar, elemento)`

Arroja `true` si `search` contiene `item`. Si `search` es una matriz, esta función arroja `true` si el `item` es un elemento de la matriz. Si `search` es una cadena, esta función arroja `true` si el `item` es una subcadena de `search`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo usando una matriz

`contains(github.event.issue.labels.*.name, 'bug')` devuelve la información de si la propuesta que está relacionada al evento tiene una etiqueta de "bug" o no.

#### Ejemplo usando una cadena

`contains('Hello world', 'llo')` devuelve `verdadero`.

### startsWith

`startsWith( searchString, searchValue )`

Arroja `true` cuando `searchString` empieza con `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo

`startsWith('Hello world', 'He')` regresa a `verdadero`.

### endsWith

`endsWith( searchString, searchValue )`

Arroja `true` si `searchString` termina con `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

#### Ejemplo

`endsWith('Hello world', 'He')` devuelve `verdadero`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Reemplaza valores en la `string`, con la variable `replaceValueN`. Las variables en la `string` se especifican con la sintaxis `{N}`, donde `N` es un entero. Debes especificar al menos un `replaceValue` y una `string`. No existe un máximo para el número de variables (`replaceValueN`) que puedes usar. Escapar las llaves utilizando llaves dobles.

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

El valor para `array` puede ser una matriz o una cadena. Todos los valores en `array` se concatenan en una cadena. Si proporcionas `optionalSeparator`, se inserta entre los valores concatenados. De lo contrario, se usa el separador predeterminado `,`. Fusiona valores en una cadena.

#### Ejemplo

`join(github.event.issue.labels.*.name, ', ')` puede devolver 'bug, help wanted'

### toJSON

`toJSON(value)`

Arroja una representación JSON con formato mejorado de `value`. Puedes usar esta función para depurar la información suministrada en contextos.

#### Ejemplo

`toJSON(job)` puede devolver `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Devuelve un objeto de JSON o un tipo de datos de JSON para `value`. Puedes utilizar esta función para proporcionar un objeto JSON como una expresión evaluada o para convertir variables de ambiente desde una secuencia.

#### Ejemplo de devolver un objeto JSON

Este flujo de trabajo configura una matriz de JSON en un job, y lo pasa al siguiente job utilizando un resultado y `fromJSON`.

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
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
      - run: build
```
{% endraw %}

#### Ejemplo de devolver un tipo de datos JSON

Este flujo de trabajo utiliza `fromJSON` para convertir las variables de ambiente de una secuencia a un número entero o Booleano.

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

Arroja un solo hash para el conjunto de archivos que coincide con el patrón de `path`. Puedes proporcionar un patrón de `path` o `path` múltiples se parados por comas. El `path` está relacionado con el directorio `GITHUB_WORKSPACE` y solo puede incluir archivos dentro del directorio `GITHUB_WORKSPACE`. Esta función calcula un hash SHA-256 individual para cada archivo coincidente, y luego usa esos hashes para calcular un hash SHA-256 final para el conjunto de archivos. Si el patrón `path` no empata con ningún archivo, esto devolverá una secuencia vacía. Para más información sobre SHA-256, consulta "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Puedes usar caracteres de coincidencia de patrones para encontrar nombres de archivos. La coincidencia de patrones no distingue mayúsculas de minúsculas en Windows. Para obtener más información acerca de los caracteres compatibles con los patrones, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

#### Ejemplo con un solo patrón

Encuentra cualquier archivo `package-lock.json` en el repositorio.

`hashFiles('**/package-lock.json')`

#### Ejemplo con patrones múltiples

Crea un hash para cualquier archivo de `package-lock.json` y de `Gemfile.lock` en el repositorio.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Funciones de verificación del estado

Puedes usar las siguientes funciones de verificación de estado como expresiones en condicionales `if` (si). Se aplicará una verificación de estado predeterminado de `success()` a menos de que incluyas una de estas funciones. Para obtener más información sobre los condicionales `if`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)" y "[Sintaxis de metadatos para las Acciones Compuestas de GitHub](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)".
{% else %}
## Funciones de verificación
Puedes usar las siguientes funciones de verificación de estado como expresiones en condicionales `if` (si). Se aplicará una verificación de estado predeterminado de `success()` a menos de que incluyas una de estas funciones. Para obtener más información sobre los condicionales `if`, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".
{% endif %}

### success

Arroja `true` cuando no falló ni se canceló ninguno de los pasos anteriores.

#### Ejemplo

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Ocasiona que el paso siempre se ejecute y devuelve `true`, aún cuando se cancela. No se ejecutará un trabajo o paso cuando una falla crítica impida que la tarea se ejecute. Por ejemplo, si fallaron las fuentes.

#### Ejemplo

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Devuelve `verdadero` si se canceló el flujo de trabajo.

#### Ejemplo

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

Arroja `true` cuando falla cualquiera de los pasos anteriores de un trabajo. Si tienes una cadena de jobs dependientes, `failure()` devolverá el valor `true` en caso de que cualquier job ascendiente falle.

#### Ejemplo

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### falla con las condiciones

Puedes incluir condiciones adicionales para que un paso se ejecute después de una falla, pero aún debes incluir `failure()` para omitir la verificación de estado predeterminada de `success()` que se aplica automáticamente a las condiciones `if` que no contienen una función de verificación de estado.

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

Puedes usar la sintaxis `*` para aplicar un filtro y seleccionar los elementos coincidentes en una recopilación.

Por ejemplo, considera una matriz de objetos llamada `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

El filtro `fruits.*.name` devuelve la matriz `[ "apple", "orange", "pear" ]`.

También puedes utilizar la sintaxis `*` en un objeto. Por ejemplo, supón que tienes un objeto que se llama `vegetables`.

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

El filtro `vegetables.*.ediblePortions` puede evaluarse como:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Ya que los objetos no preservan el orden, el orden de salida no se puede garantizar.
