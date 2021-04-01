---
title: Sintaxis de contexto y de expresiones para acciones de GitHub
shortTitle: Sintaxis de contexto y de expresiones
intro: Puedes acceder a información de contexto y evaluar expresiones en flujos de trabajo y acciones.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de los contextos y las expresiones

Puedes usar expresiones para establecer variables programáticamente en archivos de flujo de trabajo y contextos de acceso. Una expresión puede ser cualquier combinación de valores literales, referencias a un contexto o funciones. Puedes combinar valores literales, referencias de contexto y funciones usando operadores.

Las expresiones se utilizan comúnmente con la palabra clave condicional `if` en un archivo de flujo de trabajo para determinar si un paso debe ejecutar. Cuando un condicional `if` es `true`, se ejecutará el paso.

Debes usar una sintaxis específica para decirle a {% data variables.product.prodname_dotcom %} que evalúe una expresión en lugar de tratarla como una cadena.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} Para obtener más información acerca de los condicionales `if`, consulta la sección "[sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

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
  my_env_var: ${{ <expression> }}
```
{% endraw %}

### Contextos

Los contextos son una manera de acceder a información acerca de las ejecuciones de flujo de trabajo, los entornos del ejecutor, los trabajos y los pasos. Los contextos usan la sintaxis de expresión.

{% raw %}
`${{ <context> }}`
{% endraw %}

| Nombre del contexto | Tipo     | Descripción                                                                                                                                                                                                                                                        |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `github`            | `objeto` | Información sobre la ejecución del flujo de trabajo. Para obtener más información, consulta [github</code> context](#github-context).                                                                                                                              |
| `env`               | `objeto` | Contiene variables de entorno establecidas en un flujo de trabajo, trabajo o paso. Para obtener más información, consulta contexto de [`env`](#env-context).                                                                                                       |
| `job`               | `objeto` | Información sobre el trabajo actualmente en ejecución. Para obtener más información, consulta contexto de [`job`](#job-context).                                                                                                                                   |
| `pasos`             | `objeto` | Información sobre los pasos que se han ejecutado en este trabajo. Para obtener más información, consulta contexto de [`steps`](#steps-context).                                                                                                                    |
| `runner`            | `objeto` | Incluye información sobre el ejecutor que está realizando el trabajo actual. Para más información, consulta [Contexto del `ejecutador (runner)`](#runner-context).                                                                                                 |
| `secrets`           | `objeto` | Habilita el acceso a los secretos. Para más información sobre secretos, consulta "[Creando y usando secretos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."                                            |
| `strategy`          | `objeto` | Brinda acceso a los parámetros de estrategia configurados y a la información sobre el puesto actual. Los parámetros de estrategia incluyen `fail-fast`, `job-index`, `job-total` y `max-parallel`.                                                                 |
| `matrix`            | `objeto` | Brinda acceso a los parámetros de la matriz que configuraste para el puesto actual. Por ejemplo, si configuraste una matriz de construcción con las versiones `os` y `node`, el objeto de contexto `matrix` incluye las versiones `os` y `node` del puesto actual. |
| `needs`             | `objeto` | Habilita el acceso de las salidas de todos los jobs que se definen como una dependencia para el job actual. Para obtener más información, consulta [`needs` context](#needs-context).                                                                              |

Como parte de una expresión, puedes acceder a la información del contexto usando una de las siguientes dos sintaxis.
- Sintaxis de índice: `github['sha']`
- Sintaxis de desreferencia de propiedad: `github.sha`

Para usar la sintaxis de desreferencia de propiedad, el nombre de la propiedad debe cumplir los siguientes requisitos:
- comenzar con `a-Z` o `_`.
- estar seguida por `a-Z` `0-9` `-` o `_`.

#### Determinar cuándo utilizar contextos

{% data reusables.github-actions.using-context-or-environment-variables %}

#### contexto de `github`

El contexto de `github` contiene información sobre la ejecución del flujo de trabajo y el evento que desencadenó la ejecución. Puedes leer la mayoría de los datos de contexto de `github` en las variables del entorno. Para más información sobre las variables de entorno, consulta "[Utilizando variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

{% data reusables.github-actions.github-context-warning %}

| Nombre de la propiedad    | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `github`                  | `objeto`    | El contexto de nivel superior disponible durante cualquier trabajo o paso en un flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `github.action`           | `secuencia` | El nombre de la acción que se está ejecutando actualmente. {% data variables.product.prodname_dotcom %} elimina caracteres especiales o usa el nombre `run` cuando el paso actual ejecuta un script.  Si usas la misma acción más de una vez en el mismo trabajo, el nombre incluirá un sufijo con el número de secuencia.  Por ejemplo, el primer script que ejecutes tendrá el nombre `run1`, y el segundo script será nombrado `run2`. Del mismo modo, la segunda invocación de `actions/checkout` será `actionscheckout2`. |
| `github.action_path`      | `secuencia` | La ruta en donde se ubica tu acción. Puedes utilizar esta ruta para acceder fácilmente a los archivos ubicados en el mismo repositorio que tu acción. Este atributo solo es compatible con las acciones de los pasos de ejecución compuestos.                                                                                                                                                                                                                                                                                  |
| `github.actor`            | `secuencia` | El inicio de sesión del usuario que inició la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `github.base_ref`         | `secuencia` | La rama `head_ref` o fuente de la solicitud de extracción en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que activa una ejecución de flujo de trabajo es una `pull_request`.                                                                                                                                                                                                                                                                                                       |
| `github.event`            | `objeto`    | La carga de webhook del evento completo. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/articles/events-that-trigger-workflows/)". "Puedes acceder a propiedades individuales del evento que utiliza este contexto.                                                                                                                                                                                                                                                                      |
| `github.event_name`       | `secuencia` | El nombre del evento que activó la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.event_path`       | `secuencia` | La ruta a la carga del webhook del evento completo en el ejecutor.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.head_ref`         | `secuencia` | La rama `head_ref` o fuente de la solicitud de extracción en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que activa una ejecución de flujo de trabajo es una `pull_request`.                                                                                                                                                                                                                                                                                                       |
| `github.job`              | `secuencia` | El [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) del job actual.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.ref`              | `secuencia` | La rama o ref de etiqueta que activó la ejecución del flujo de trabajo. Para las ramas, está en el formato `refs/heads/<branch_name>`, y para las etiquetas está en `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                        |
| `github.repository`       | `secuencia` | El nombre del repositorio y del propietario. Por ejemplo, `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `github.repository_owner` | `secuencia` | El nombre del propietario del repositorio. Por ejemplo, `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `github. run_id`          | `secuencia` | {% data reusables.github-actions.run_id_description %}
| `github. run_number`      | `secuencia` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `secuencia` | El SHA de confirmación que activó la ejecución del flujo de trabajo.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `github.token`            | `secuencia` | Un token para autenticar en nombre de la aplicación de GitHub instalada en tu repositorio. Esto es funcionalmente equivalente al secreto de `GITHUB_TOKEN`. Para más información, consulta "[Autenticando con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."                                                                                                                                                                                                   |
| `github.workflow`         | `secuencia` | El nombre del flujo de trabajo. Si el archivo de flujo de trabajo no especifica un `nombre`, el valor de esta propiedad es la ruta completa del archivo del flujo de trabajo en el repositorio.                                                                                                                                                                                                                                                                                                                                |
| `github.workspace`        | `secuencia` | El directorio de trabajo predeterminado para los pasos y la ubicación predeterminada de tu repositorio cuando usas la acción [`checkout`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                                |

#### contexto de `env`

El contexto de `Env` contiene las variables de entorno que se han establecido en un flujo de trabajo, puesto o paso. Para obtener más información acerca de la configuración de variables de entorno en tu flujo de trabajo, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

La sintaxis de contexto `env` te permite usar el valor de una variable de entorno en tu archivo de flujo de trabajo. Puedes utilizar el contexto `env` en el valor de cualquier clave en un **paso**, con excepción de las claves `id` y `uses`. Para obtener más información sobre la sintaxis del paso, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Si quieres usar el valor de una variable de entorno dentro de un ejecutor, usa el método normal del sistema operativo del ejecutor para leer las variables de entorno.

| Nombre de la propiedad | Tipo        | Descripción                                                                                                           |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `env`                  | `objeto`    | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo. |
| `Env.<env_name>` | `secuencia` | El valor de una variable de entorno específica.                                                                       |

#### contexto de `job`

El contexto `trabajo` contiene información sobre el trabajo de ejecución actual.

| Nombre de la propiedad                    | Tipo        | Descripción                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job`                                     | `objeto`    | Este contexto cambia para cada trabajo de una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo.                                                                                                                                        |
| `job.container`                           | `objeto`    | Información sobre el contenedor del trabajo. Para obtener más información sobre los contenedores, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)".                      |
| `job.container.id`                        | `secuencia` | La Id de la red del contenedor.                                                                                                                                                                                                                                                        |
| `job.container.network`                   | `secuencia` | La Id. de la red del contenedor. El ejecutor crea la red usada por todos los contenedores en un trabajo.                                                                                                                                                                               |
| `job.services`                            | `objeto`    | Los contenedores de servicio creados para un trabajo. Para obtener más información sobre los contenedores de servicios, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service id>.id`      | `secuencia` | La Id del contenedor de servicio.                                                                                                                                                                                                                                                      |
| `job.services.<service id>.network` | `secuencia` | La Id. de la red del contenedor de servicios. El ejecutor crea la red usada por todos los contenedores en un trabajo.                                                                                                                                                                  |
| `job.services.<service id>.ports`   | `objeto`    | Los puertos expuestos del contenedor del servicio.                                                                                                                                                                                                                                     |
| `job.status`                              | `secuencia` | El estado actual del trabajo. Los valores posibles son `success`, `failure` o `cancelled`.                                                                                                                                                                                             |

#### contexto de `steps`

El contexto `steps` contiene información sobre los pasos en el trabajo actual que ya se ha ejecutado.

| Nombre de la propiedad                              | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pasos`                                             | `objeto`    | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso en un trabajo.                                                                                                                                                                                                                                                |
| `steps.<step id>.outputs`                     | `objeto`    | El conjunto de salidas definido para el paso. Para obtener más información, consulta "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".                                                                                                                                             |
| `steps.<step id>.conclusion`                  | `secuencia` | El resultado de un paso completado después de que se aplica [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. Cuando falla un paso de `continue-on-error`, el `outcome` es `failure`, pero la `conclusion` final es `success`. |
| `steps.<step id>.outcome`                     | `secuencia` | El resultado de un paso completado antes de que se aplique [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. Cuando falla un paso de `continue-on-error`, el `outcome` es `failure`, pero la `conclusion` final es `success`.  |
| `steps.<step id>.outputs.<output name>` | `secuencia` | El valor de un resultado específico.                                                                                                                                                                                                                                                                                                                                 |

#### Contexto de `runner`

El contexto de `runner` contiene información sobre el ejecutor que está ejecutando el trabajo actual.

| Nombre de la propiedad | Type        | Descripción                                                                                                                                                                                                                                                                                                |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`            | `secuencia` | El sistema operativo del ejecutor que ejecuta el trabajo. Los valores posibles son `Linux`, `Windows` o `macOS`.                                                                                                                                                                                           |
| `runner.temp`          | `secuencia` | La ruta del directorio temporal para el ejecutor. Se garantiza que este directorio estará vacío al inicio de cada trabajo, incluso en los ejecutores autoalojados.                                                                                                                                         |
| `runner.tool_cache`    | `secuencia` | {% if currentVersion == "github-ae@latest" %}Para obtener instrucciones de cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tiene instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)". |
{% else %}La ruta del directorio que contiene algunas de las herramientas preinstaladas para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)". {% endif %}

#### Contexto `needs`

El contexto `needs` contiene salidas de todos los jobs que se definen como dependencia del job actual. Para obtener más información sobre la definición de dependencias de jobs, consulta la sección "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nombre de la propiedad                             | Tipo        | Descripción                                                                                                                     |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `needs.<job id>`                             | `objeto`    | Un solo job del cual depende el job actual.                                                                                     |
| `needs.<job id>.outputs`                     | `objeto`    | El conjunto de resultados de un job del cual depende el job actual.                                                             |
| `needs.<job id>.outputs.<output name>` | `secuencia` | El valor de un resultado específico para un job del cual depende el job actual.                                                 |
| `needs.<job id>.result`                      | `secuencia` | El resultado de un job del cual depende el job actual. Los valores posibles son `success`, `failure`, `cancelled`, o `skipped`. |

#### Ejemplo de impresión de información de contexto de un archivo de registro

Para inspeccionar la información accesible en cada contexto, puedes utilizar este ejemplo de archivo de flujo de trabajo.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### Literales

Como parte de una expresión, puedes usar tipos de datos `boolean`, `null`, `number` o `string`. Los literales booleanos no reconocen minúsculas de mayúsculas, por lo que puedes usar `verdadero` o `Verdadero`.

| Tipo de datos | Valor literal                                                                           |
| ------------- | --------------------------------------------------------------------------------------- |
| `boolean`     | `true` o `false`                                                                        |
| `null`        | `null`                                                                                  |
| `number`      | Cualquier formato de número compatible con JSON.                                        |
| `secuencia`   | Debes usar comillas simples. Escapar comillas simples literales con una comilla simple. |

#### Ejemplo

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' } }}
```
{% endraw %}

### Operadores

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

  | Type      | Resultado                                                                                                                      |
  | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
  | Nulo      | `0`                                                                                                                            |
  | Booleano  | `true` arroja `1` <br /> `false` arroja `0`                                                                              |
  | Secuencia | Analizado desde cualquier formato de número JSON legal, de lo contrario, `NaN`. <br /> Nota: La cadena vacía arroja `0`. |
  | Arreglo   | `NaN`                                                                                                                          |
  | Objeto    | `NaN`                                                                                                                          |
* Una comparación de un `NaN` con otro `NaN` no genera `true`. Para obtener más información, consulta "[Documentos de Mozilla NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)".
* {% data variables.product.prodname_dotcom %} ignora las mayúsculas y minúsculas al comparar cadenas.
* Los objetos y matrices solo se consideran iguales cuando son la misma instancia.

### Funciones

{% data variables.product.prodname_dotcom %} ofrece un conjunto de funciones integradas que puedes usar en expresiones. Algunas funciones fusionan valores en una cadena para realizar las comparaciones. {% data variables.product.prodname_dotcom %} fusiona tipos de datos con una cadena usando las siguientes conversiones:

| Tipo     | Resultado                                         |
| -------- | ------------------------------------------------- |
| Nulo     | `''`                                              |
| Booleano | `'true'` o `'false'`                              |
| Number   | Formato decimal, exponencial para números grandes |
| Arreglo  | Las matrices no se convierten en cadenas          |
| Objeto   | Los objetos no se convierten en cadenas           |

#### Contiene

`contiene (buscar, elemento)`

Arroja `true` si `search` contiene `item`. Si `search` es una matriz, esta función arroja `true` si el `item` es un elemento de la matriz. Si `search` es una cadena, esta función arroja `true` si el `item` es una subcadena de `search`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

##### Ejemplo usando una matriz

`contains(github.event.issue.labels.*.name, 'bug')`

##### Ejemplo usando una cadena

`contains('Hello world', 'llo')` devuelve `verdadero`

#### startsWith

`startsWith( searchString, searchValue )`

Devuelve `verdadero` cuando `searchString` contiene `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

##### Ejemplo

`startsWith('Hello world', 'He')` regresa a `verdadero`

#### endsWith

`endsWith( searchString, searchValue )`

Devuelve `verdadero` si `searchString` contiene `searchValue`. Esta función no distingue mayúsculas de minúsculas. Fusiona valores en una cadena.

##### Ejemplo

`endsWith('Hello world', 'He')` devuelve `verdadero`

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Reemplaza valores en la `cadena`, con la variable `replaceValueN`. Las variables en la `cadena` se especifican con la sintaxis `{N}`, donde `N` es un entero. Debes especificar al menos un `replaceValue` y una `cadena`. No existe un máximo para el número de variables (`replaceValueN`) que puedes usar. Escapar llaves usando llaves dobles.

##### Ejemplo

Devuelve 'Hello Mona the Octocat'

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### Ejemplo de evasión de llaves

Devuelve '{Hello Mona the Octocat!}'

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

El valor para `array` puede ser una matriz o una cadena. Todos los valores en `array` se concatenan en una cadena. Si proporcionas `optionalSeparator`, se inserta entre los valores concatenados. De lo contrario, se usa el separador predeterminado `,`. Fusiona valores en una cadena.

##### Ejemplo

`join(github.event.issue.labels.*.name, ', ')` puede devolver 'bug, help wanted'

#### toJSON

`toJSON(value)`

Devuelve una representación JSON con formato mejorado de `valor`. Puedes usar esta función para depurar la información suministrada en contextos.

##### Ejemplo

`toJSON(job)` puede devolver `{ "status": "Success" }`

#### fromJSON

`fromJSON(value)`

Devuelve un objeto de JSON o un tipo de datos de JSON para `value`. Puedes utilizar esta función para proporcionar un objeto JSON como una expresión evaluada o para convertir variables de ambiente desde una secuencia.

##### Ejemplo de devolver un objeto JSON

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

##### Ejemplo de devolver un tipo de datos JSON

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

#### hashFiles

`hashFiles(path)`

Arroja un solo hash para el conjunto de archivos que coincide con el patrón de `path`. Puedes proporcionar un patrón de `path` o `path` múltiples se parados por comas. El `path` está relacionado con el directorio `GITHUB_WORKSPACE` y solo puede incluir archivos dentro del directorio `GITHUB_WORKSPACE`. Esta función calcula un hash SHA-256 individual para cada archivo coincidente, y luego usa esos hashes para calcular un hash SHA-256 final para el conjunto de archivos. Para más información sobre SHA-256, consulta "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)".

Puedes usar caracteres de coincidencia de patrones para encontrar nombres de archivos. La coincidencia de patrones no distingue mayúsculas de minúsculas en Windows. Para obtener más información acerca de los caracteres compatibles con los patrones, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)".

##### Ejemplo con un solo patrón

Encuentra cualquier archivo `package-lock.json` en el repositorio.

`hashFiles('**/package-lock.json')`

##### Ejemplo con patrones múltiples

Crea un hash para cualquier archivo de `package-lock.json` y de `Gemfile.lock` en el repositorio.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### Funciones de verificación de estado del trabajo

Puedes usar las siguientes funciones de verificación de estado como expresiones en condicionales `if` (si). Si la expresión `if` no contiene ninguna de las funciones de estado, se obtendrá automáticamente con `success()`. Para obtener información sobre los condicionales `if`, consulta "[Sintaxis de flujo de trabajo para acciones de GitHub](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".

#### success

Arroja `true` cuando no falló ni se canceló ninguno de los pasos anteriores.

##### Ejemplo

```yaml
Pasos:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

#### always

Siempre arroja `true`, incluso cuando se cancela. No se ejecutará un trabajo o paso cuando una falla crítica impida que la tarea se ejecute. Por ejemplo, si fallaron las fuentes.

##### Ejemplo

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

Devuelve `verdadero` si se canceló el flujo de trabajo.

##### Ejemplo

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure

Arroja `true` cuando falla cualquiera de los pasos anteriores de un trabajo.

##### Ejemplo

```yaml
Pasos:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

### Filtros de objetos

Puedes usar la sintaxis `*` para aplicar un filtro y seleccionar los elementos coincidentes en una recopilación.

Por ejemplo, considera una matriz de objetos llamada `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

El filtro `fruits.*.name` devuelve la matriz `[ "apple", "orange", "pear" ]`
