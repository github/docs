---
title: Sintaxis de metadatos para acciones de GitHub
shortTitle: Sintaxis de metadatos
intro: Puedes crear acciones para realizar tareas en tu repositorio. Las acciones requieren un archivo de metadatos que use la sintaxis YAML.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la nueva sintaxis YAML para {% data variables.product.prodname_actions %}

Todas las acciones requieren un archivo de metadatos. El nombre del archivo de metadatos debe ser `action.yml` o `action.yaml`. Los datos en el archivo de metadatos definen las configuraciones de entradas, salidas y ejecuciones de tu acción.

Los archivos de metadatos de acción usan la sintaxis YAML. Si eres nuevo en YAML, puedes leer "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

## `name (nombre)`

**Requerido** El nombre de tu acción. {% data variables.product.prodname_dotcom %} muestra el `name` (nombre) en la pestaña **Actions** (Acciones) para ayudarte a identificar visualmente las acciones en cada trabajo.

## `autor`

**Opcional** El nombre del autor de las acciones.

## `descripción`

**Requerido** Una descripción breve de la acción.

## `inputs (entrada)`

**Opcional** Los parámetros de entrada te permiten especificar datos que la acción espera para usar durante el tiempo de ejecución. {% data variables.product.prodname_dotcom %} almacena parámetros de entrada como variables de entorno. Las Id de entrada con letras mayúsculas se convierten a minúsculas durante el tiempo de ejecución. Recomendamos usar Id de entrada en minúsculas.

### Ejemplo: Especificar las entradas

Este ejemplo configura dos entradas: numOctocats y octocatEyeColor. La entrada numOctocats no se requiere y se predeterminará a un valor de '1'. Se requiere la entrada octocatEyeColor y no tiene un valor predeterminado. Los archivos de flujo de trabajo que usan esta acción deben usar la palabra clave `with` (con) para establecer un valor de entrada para octocatEyeColor. Para obtener información sobre la sintaxis `with` (con), consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Cuando especificas una entrada en un archivo de flujo de trabajo o usas un valor de entrada predeterminado, {% data variables.product.prodname_dotcom %} crea una variable de entorno para la entrada con el nombre `INPUT_<VARIABLE_NAME>`. La variable de entorno creada convierte los nombre de entrada en letras mayúscula y reemplaza los espacios con los caracteres `_`.

Si la acción se escribió utilizando pasos de ejecución [compuestos](/actions/creating-actions/creating-a-composite-action), entonces no obtendrá automáticamente una `INPUT_<VARIABLE_NAME>`. Si la conversión no ocurre, puedes cambiar estas entradas manualmente.

Para acceder a la variable de ambiente en una acción de contenedor de Docker, debes pasar la entrada utilizando la palabra clave `args` en el archivo de metadatos de la acción. Para obtener más información sobre el archivo de metadatos de la acción para las acciones de contenedor de Docker, consulta la sección "[Crear una acción de contenedor de Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)".

Por ejemplo, si un flujo de trabajo definió las entradas de `numOctocats` y `octocatEyeColor`, el código de acción pudo leer los valores de las entradas utilizando las variables de ambiente `INPUT_NUMOCTOCATS` y `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Requerido** Un identificador `string` (cadena) para asociar con la entrada. El valor de `<input_id>` es un mapa con los metadatos de la entrada. `<input_id>` debe ser un identificador único dentro del objeto `inputs` (entradas). El `<input_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

### `inputs.<input_id>.description`

**Requerido** Una descripción de `string` del parámetro de entrada.

### `inputs.<input_id>.required`

**Requerido** Un `boolean` (booleano) para indicar si la acción requiere el parámetro de entrada. Establecer en `true` cuando se requiera el parámetro.

### `inputs.<input_id>.default`

**Opcional** Una `string` que representa el valor predeterminado. El valor predeterminado se usa cuando un parámetro de entrada no se especifica en un archivo de flujo de trabajo.

### `inputs.<input_id>.deprecationMessage`

**Opcional** Si se utiliza el parámetro de entrada, esta `string` se registrará como un mensaje de advertencia. Puedes utilizar esta advertencia para notificar a los usuarios que la entrada es obsoleta y mencionar cualquier alternativa.

## `outputs` para las acciones de contenedores de Docker y JavaScript

**Opcional** Los parámetros de salida te permiten declarar datos que una acción establece. Las acciones que se ejecutan más tarde en un flujo de trabajo pueden usar el conjunto de datos de salida en acciones de ejecución anterior.  Por ejemplo, si tuviste una acción que realizó la adición de dos entradas (x + y = z), la acción podría dar como resultado la suma (z) para que otras acciones la usen como entrada.

{% data reusables.actions.output-limitations %}

Si no declaras una salida en tu archivo de metadatos de acción, todavía puedes configurar las salidas y utilizarlas en un flujo de trabajo. Para obtener más información acerca de la configuración de salidas en una acción, consulta "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)".

### Ejemplo: Declarar las salidas para las acciones de contenedores de Docker y JavaScript

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Requerido** Un identificador `string` para asociar con la salida. El valor de `<output_id>` es un mapa con los metadatos de la salida. `<output_id>` debe ser un identificador único dentro del objeto `outputs` (salidas). El `<output_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

### `outputs.<output_id>.description`

**Requerido** Una descripción de `string` del parámetro de salida.

## `outputs` para las acciones compuestas

Las `outputs` **opcionales** utilizan los mismos parámetros que `outputs.<output_id>` y `outputs.<output_id>.description` (consulta la sección de "[`outputs` para acciones de contenedores de Docker y JavaScript](#outputs-for-docker-container-and-javascript-actions)"), pero también incluye el token `value`.

{% data reusables.actions.output-limitations %}

### Ejemplo: Declarar las salidas para las acciones compuestas

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Requerido** El valor al cual se mapeará el parámetro de salida. Puedes configurarlo a una `string` o a una expresión con contexto. Por ejemplo, puedes utilizar el contexto `steps` para configurar el `value` de una salida al valor de salida de un paso.

Para obtener más información sobre cómo utilizar la sintaxis de contexto, consulta la sección de "[Contextos](/actions/learn-github-actions/contexts)"

## `runs`

**Requerido** Especifica si es una acción de JavaScript, una acción compuesta o una acción de contenedor de Docker y cómo se ejecuta esta.

## `runs` para acciones de JavaScript

**Requerido** Configura la ruta al código de la acción y el tiempo de ejecución que se utiliza para ejecutarlo.

### Ejemplo: Utilizar Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Requerido** El tiempo de ejecución para ejecutar el código especificado en [`main`](#runsmain).

- Utiliza `node12` para Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
- Utiliza `node16` para Node.js v16.{% endif %}

### `runs.main`

**Requerido** El archivo que contiene tu código de acción. El tiempo de ejecución que se especifica en [`using`](#runsusing) ejecuta este archivo.

### `runs.pre`

**Opcional** Te permite ejecutar un script al inicio de un job, antes de que la acción `main:` comience. Por ejemplo, puedes utilizar `pre:` para ejecutar un script de configuración de pre-requisitos. El tiempo de ejecución que ese especifica con la sintaxis de [`using`](#runsusing) ejecutará este archivo. La acción `pre` siempre se ejecuta predeterminadamente, pero puedes invalidar esto utilizando [`runs.pre-if`](#runspre-if).

En este ejemplo, la acción `pre:` ejecuta un script llamado `setup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Opcional** Te permite definir las condiciones para la ejecución de la acción `pre:`. La acción `pre:` únicamente se ejecutará si se cumplen las condiciones en `pre-if`. Si no se configura, `pre-if` se configurará predefinidamente como `always()`. En `pre-if`, las funciones de verificación de estado evalúan contra el estado del job y no contra el estado de la propia acción.

Nota que el contexto `step` no está disponible, ya que no se ha ejecutado ningún paso todavía.

En este ejemplo, `cleanup.js` se ejecuta únicamente en los ejecutores basados en linux:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Opcional** Te permite ejecutar un script al final de un job, una vez que se haya completado la acción `main:`. Por ejemplo, puedes utilizar `post:` para finalizar algunos procesos o eliminar los archivos innecesarios. El tiempo de ejecución que ese especifica con la sintaxis de [`using`](#runsusing) ejecutará este archivo.

En este ejemplo, la acción `post:` ejecuta un script llamado `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

La acción `post:` siempre se ejecuta predeterminadamente, pero la puedes invalidar utilizando `post-if`.

### `runs.post-if`

**Opcional** Te permite definir condiciones para la ejecución de la acción `post:`. La acción `post` únicamente se ejecutará si se cumplen las condiciones en `post-if`. Si no se configura, `pre-if` se configurará predeterminadamente como `always()`. En `post-if`, las funciones de verificación de estado evalúan contra el estado del job y no contra el estado de la propia acción.

Por ejemplo, este `cleanup.js` únicamente se ejecutará en ejecutores basados en Linux:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` para las acciones compuestas

**Requerido** Configura la ruta a la acción compuesta.

### `runs.using`

**Requerido** Debes configurar este valor en `'composite'`.

### `runs.steps`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Requerido** Los pasos que planeas ejecutar en esta acción. Estos pueden ser ya sea pasos de `run` o de `uses`.
{% else %}
**Requerido** Los pasos que planeas ejecutar en esta acción.
{% endif %}

#### `runs.steps[*].run`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Opcional** El comando que quieres ejecutar. Este puede estar dentro de la línea o ser un script en tu repositorio de la acción:
{% else %}
**Requerido** El comando que quieres ejecutar. Este puede estar dentro de la línea o ser un script en tu repositorio de la acción:
{% endif %}

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Como alternativa, puedes utilizar `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Para obtener más información, consulta la sección "[``](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

#### `runs.steps[*].shell`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**Opcional** El shell en donde quieres ejecutar el comando. Puedes utilizar cualquiera de los shells listados [aquí](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Requerido si se configuró `run`.
{% else %}
**Requerido** El shell en donde quieres ejecutar el comando. Puedes utilizar cualquiera de los shells listados [aquí](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Requerido si se configuró `run`.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
#### `runs.steps[*].if`

**Opcional** Puedes utilizar el condicional `if` para prevenir que un paso se ejecute a menos de que se cumpla con una condición. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

{% data reusables.actions.expression-syntax-if %} Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

**Ejemplo: Utilizando contextos**

 Este paso solo se ejecuta cuando el tipo de evento es una `pull_request` y la acción del evento está `unassigned` (sin asignar).

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Ejemplo: Utilizando funciones de verificación de estado**

`my backup step` solo se ejecutará cuando falle el paso previo de una acción compuesta. Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions#status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Opcional** El nombre del paso compuesto.

#### `runs.steps[*].id`

**Opcional** Un identificador único para el paso. Puede usar el `id` para hacer referencia al paso en contextos. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts)".

#### `runs.steps[*].env`

**Opcional**  Configura un `map` de variables de ambiente únicamente para este paso. Si quieres modificar la variable de ambiente almacenada en el flujo de trabajo, utiliza `echo "{name}={value}" >> $GITHUB_ENV` en un paso compuesto.

#### `runs.steps[*].working-directory`

**Opcional**  Especifica el directorio de trabajo en donde se ejecuta un comando.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
#### `runs.steps[*].uses`

**Opcional**  Selecciona una acción a ejecutar como parte de un paso en tu job. Una acción es una unidad de código reutilizable. Puedes usar una acción definida en el mismo repositorio que el flujo de trabajo, un repositorio público o en una [imagen del contenedor Docker publicada](https://hub.docker.com/).

Te recomendamos encarecidamente que incluyas la versión de la acción que estás utilizando y especifiques un número de etiqueta de Git ref, SHA o Docker. Si no especificas una versión, podrías interrumpir tus flujos de trabajo o provocar un comportamiento inesperado cuando el propietario de la acción publique una actualización.
- El uso del SHA de confirmación de una versión de acción lanzada es lo más seguro para la estabilidad y la seguridad.
- Usar la versión de acción principal específica te permite recibir correcciones críticas y parches de seguridad y al mismo tiempo mantener la compatibilidad. También asegura que tu flujo de trabajo aún debería funcionar.
- Puede ser conveniente utilizar la rama predeterminada de una acciòn, pero si alguien lanza una versiòn principal nueva con un cambio importante, tu flujo de trabajo podrìa fallar.

Algunas acciones requieren entradas que se deben establecer usando la palabra clave [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Revisa el archivo README de la acción para determinar las entradas requeridas.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Opcional**  un `map` de los parámetros de entrada que define la acción. Cada parámetro de entrada es un par clave/valor.  Los parámetros de entrada se establecen como variables del entorno. La variable utiliza el prefijo INPUT_ y se convierte en mayúsculas.

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat  
```
{% endif %}

#### `runs.steps[*].continue-on-error`

**Opcional** Impide que la acción falle cuando falla un paso. Se configura en `true` para permitir que la acción pase cuando falla este paso.

## `runs` para las acciones de contenedores de Docker

**Requerido** Configura la imagen que se utiliza para la acción de contenedores de Docker.

### Ejemplo: Utilizar un Dockerfile en tu repositorio

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Ejemplo: Utilizar un contenedor de registro público de Docker

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Requerido** Debes configurar este valor como `'docker'`.

### `runs.pre-entrypoint`

**Opcional** Te permite ejecutar un script antes de que comience la acción `entrypoint`. Por ejemplo, puedes utilizar `pre-entrypoint` para ejecutar un script de configuración de pre-requisitos. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción, y ejecuta el script dentro de un contenedor nuevo que utiliza la misma imagen base. Esto significa que el estado del tiempo de ejecución difiere de el contenedor principal `entrypoint`, y se deberá acceder a cualquier estado que requieras ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `pre-entrypoint:` siempre se ejecuta predeterminadamente, pero puedes anular esto utilizando [`runs.pre-if`](#runspre-if).

El tiempo de ejecución que ese especifica con la sintaxis de [`using`](#runsusing) ejecutará este archivo.

En este ejemplo, la acción `pre.entrypoint:` ejecuta un script llamado `setup.sh`:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Requerido** La imagen de Docker a utilizar como el contenedor para ejecutar la acción. El valor puede ser el nombre de la imagen base de Docker, un `Dockerfile` local en tu repositorio, o una imagen pública en Docker Hub u otro registro. Para referenciar un `Dockerfile` local de tu repositorio, el archivo debe nombrarse como `Dockerfile` y debes utilizar una ruta relativa a tu archivo de metadatos de acción. La aplicación `docker` ejecutará este archivo.

### `runs.env`

**Opcional** Especifica mapa clave/de valores de las variables del ambiente para configurar en el ambiente del contenedor.

### `runs.entrypoint`

**Opcional** Invalida el `ENTRYPOINT` de Docker en el `Dockerfile`, o lo configura si no se había especificado anteriormente. Utiliza `entrypoint` cuando el `Dockerfile` no especifique un `ENTRYPOINT` o cuando quieras invalidar la instrucción de `ENTRYPOINT`. Si omites el `entrypoint`, se ejecutarán los comandos que especifiques en la instrucción `ENTRYPOINT` de Docker. La instrucción `ENTRYPOINT` de Docker tiene una forma de _shell_ y una de _exec_. La documentación de `ENTRYPOINT` de Docker recomienda utilizar la forma de _exec_ de la instrucción `ENTRYPOINT`.

Para obtener más información acerca de cómo se ejecuta el `entrypoint`, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

### `post-entrypoint`

**Opcional** Te permite ejecutar un script de limpieza una vez que se haya completado la acción de `runs.entrypoint`. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción. Ya que {% data variables.product.prodname_actions %} ejecuta el script dentro de un contenedor nuevo utilizando la misma imagen base, el estado de tiempo de ejecución es diferente del contenedor principal de `entrypoint`. Puedes acceder a cualquier estado que necesites, ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `post-entrypoint:` siempre se ejecuta predeterminadamente, pero puedes anular esto utilizando [`runs.post-if`](#runspost-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Opcional** Una matriz de secuencias que defina las entradas para un contenedor de Docker. Las entradas pueden incluir cadenas codificadas de forma rígida. {% data variables.product.prodname_dotcom %} comunica los `args` en el `ENTRYPOINT` del contenedor cuando se inicia el contenedor.

Los `args` se usan en el lugar de la instrucción `CMD` en un `Dockerfile`. Si usas `CMD` en tu `Dockerfile`, usa los lineamientos ordenados por preferencia:

{% data reusables.actions.dockerfile-guidelines %}

Si necesitas pasar variables de ambiente a una acción, asegúrate que ésta ejecute un shell de comandos para realizar la sustitución de variables. Por ejemplo, si se configura tu atributo `entrypoint` como `"sh -c"`, entonces `args` se ejecutará en un shell de comandos. Como alternativa, si tu `Dockerfile` utiliza un `ENTRYPOINT` para ejecutar el mismo comando (`"sh -c"`), entonces `args` se ejecutará en un shell de comandos.

Para obtener más información sobre el uso de la instrucción `CMD` con {% data variables.product.prodname_actions %}, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

#### Ejemplo: Definir argumentos para el contenedor de Docker

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

Puedes usar un color y un icono de [Feather](https://feathericons.com/) para crear una insignia que personalice y diferencie tu acción. Los distintivos se muestran junto al nombre de tu acción en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Ejemplo: Configurar la personalización de una acción

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

### `branding.color`

El color de fondo del distintivo. Puede ser: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple`, o `gray-dark`.

### `branding.icon`

El nombre de del icono de [Pluma](https://feathericons.com/) de la v.4.28.0 a utilizar. Los iconos de marca se omiten, así como lo siguiente:

<table>
<tr>
<td>coffee</td>
<td>columns</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>tool</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Aquí mostramos una lista exhaustiva de todos los iconos compatibles actualmente:


<!-- 
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo. 
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>anchor</td>
<td>aperture</td>
<td>archive</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-down</td>
<td>arrow-left</td>
<td>arrow-left</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>bell</td>
</tr>
<tr>
<td>bluetooth</td>
<td>bold</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>bookmark</td>
<td>box</td>
<td>briefcase</td>
<td>calendar</td>
</tr>
<tr>
<td>camera-off</td>
<td>camera</td>
<td>cast</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>check</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>clipboard</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>command</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>download</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edit</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>avance rápido</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>archivo</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>marcador</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>italic</td>
<td>layers</td>
<td>layout</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
<td>paquete</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>percent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>retroceder</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>save</td>
<td>scissors</td>
<td>search</td>
<td>send</td>
</tr>
<tr>
<td>server</td>
<td>settings</td>
<td>share-2</td>
<td>share</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>shuffle</td>
<td>barra lateral</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
<td>speaker</td>
</tr>
<tr>
<td>square</td>
<td>estrella</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
<td>etiqueta</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>triangle</td>
</tr>
<tr>
<td>truck</td>
<td>tv</td>
<td>type</td>
<td>umbrella</td>
</tr>
<tr>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
<td>cargar</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>usuario</td>
<td>users</td>
<td>video-off</td>
<td>video</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>volume</td>
<td>observar</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
