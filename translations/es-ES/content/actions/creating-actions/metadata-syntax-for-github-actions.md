---
title: Sintaxis de metadatos para Acciones de GitHub
shortTitle: Metadata syntax
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
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107417'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la nueva sintaxis YAML para {% data variables.product.prodname_actions %}

Todas las acciones requieren un archivo de metadatos. El nombre del archivo de metadatos debe ser `action.yml` o `action.yaml`. Los datos en el archivo de metadatos definen las configuraciones de entradas, salidas y ejecuciones de tu acción.

Los archivos de metadatos de acción usan la sintaxis YAML. Si no está familiarizado con YAML, puede leer "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

## `name`

**Obligatorio** Nombre de la acción. {% data variables.product.prodname_dotcom %} muestra `name` en la pestaña **Acciones** para ayudar a identificar visualmente las acciones en cada trabajo.

## `author`

**Opcional** Nombre del creador de la acción.

## `description`

**Obligatorio** Descripción breve de la acción.

## `inputs`

**Opcional** Los parámetros de entrada permiten especificar los datos que la acción espera usar durante el tiempo de ejecución. {% data variables.product.prodname_dotcom %} almacena parámetros de entrada como variables de entorno. Las Id de entrada con letras mayúsculas se convierten a minúsculas durante el tiempo de ejecución. Recomendamos usar Id de entrada en minúsculas.

### Ejemplo: Especificar las entradas

Este ejemplo configura dos entradas: numOctocats y octocatEyeColor. La entrada numOctocats no se requiere y se predeterminará a un valor de '1'. Se requiere la entrada octocatEyeColor y no tiene un valor predeterminado. Los archivos de flujo de trabajo que utilizan esta acción deben usar `with` a fin de establecer un valor de entrada para octocatEyeColor. Para más información sobre la sintaxis `with`, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

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

Al especificar una entrada en un archivo de flujo de trabajo o usar un valor de entrada predeterminado, {% data variables.product.prodname_dotcom %} crea una variable de entorno para la entrada con el nombre `INPUT_<VARIABLE_NAME>`. La variable de entorno creada convierte los nombre de entrada en letras mayúsculas y reemplaza los espacios con caracteres `_`.

Si la acción se escribe mediante una [composición](/actions/creating-actions/creating-a-composite-action), no obtendrá `INPUT_<VARIABLE_NAME>`automáticamente. Si la conversión no ocurre, puedes cambiar estas entradas manualmente.

Para acceder a la variable de entorno en una acción de contenedor de Docker, debe pasar la entrada mediante la palabra clave `args` en el archivo de metadatos de la acción. Para más información sobre el archivo de metadatos de la acción para acciones de contenedor de Docker, vea "[Creación de una acción de contenedor de Docker](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)".

Por ejemplo, si en un flujo de trabajo se han definido las entradas `numOctocats` y `octocatEyeColor`, el código de acción podría leer los valores de las entradas mediante las variables de entorno `INPUT_NUMOCTOCATS` y `INPUT_OCTOCATEYECOLOR`.

### `inputs.<input_id>`

**Obligatorio** Identificador `string` que se va a asociar a la entrada. El valor de `<input_id>` es un mapa de los metadatos de la entrada. `<input_id>` debe ser un identificador único dentro del objeto `inputs`. `<input_id>` debe empezar con una letra o `_`, y solo puede contener caracteres alfanuméricos `-` o `_`.

### `inputs.<input_id>.description`

**Obligatorio** Descripción `string` del parámetro de entrada.

### `inputs.<input_id>.required`

**Opcional** Un valor `boolean` para indicar si la acción necesita el parámetro de entrada. Se establece en `true` cuando el parámetro es obligatorio.

### `inputs.<input_id>.default`

**Opcional** Un valor `string` que representa el valor predeterminado. El valor predeterminado se usa cuando un parámetro de entrada no se especifica en un archivo de flujo de trabajo.

### `inputs.<input_id>.deprecationMessage`

**Opcional** Si se usa el parámetro de entrada, `string` se registra como un mensaje de advertencia. Puedes utilizar esta advertencia para notificar a los usuarios que la entrada es obsoleta y mencionar cualquier alternativa.

## `outputs` para acciones de contenedor de Docker y JavaScript

**Opcional** Los parámetros de salida permiten declarar datos que establece una acción. Las acciones que se ejecutan más tarde en un flujo de trabajo pueden usar el conjunto de datos de salida en acciones de ejecución anterior.  Por ejemplo, si tuviste una acción que realizó la adición de dos entradas (x + y = z), la acción podría dar como resultado la suma (z) para que otras acciones la usen como entrada.

{% data reusables.actions.output-limitations %}

Si no declaras una salida en tu archivo de metadatos de acción, todavía puedes configurar las salidas y utilizarlas en un flujo de trabajo. Para más información sobre el establecimiento de salidas en una acción, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)".

### Ejemplo: Declarar las salidas para las acciones de contenedores de Docker y JavaScript

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Obligatorio** Identificador `string` que se va a asociar a la salida. El valor de `<output_id>` es un mapa de los metadatos de la salida. `<output_id>` debe ser un identificador único dentro del objeto `outputs`. `<output_id>` debe empezar con una letra o `_`, y solo puede contener caracteres alfanuméricos `-` o `_`.

### `outputs.<output_id>.description`

**Obligatorio** Descripción `string` del parámetro de salida.

## `outputs` para acciones compuestas

**Opcional** `outputs` usa los mismos parámetros que `outputs.<output_id>` y `outputs.<output_id>.description` (vea"[`outputs` para acciones de contenedor de Docker y JavaScript](#outputs-for-docker-container-and-javascript-actions)"), pero también incluye el token `value`.

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
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Obligatorio** Valor al que se asignará el parámetro de salida. Puede establecerlo en `string` o en una expresión o con contexto. Por ejemplo, puede usar el contexto `steps` para establecer el valor `value` de una salida en el valor de salida de un paso.

Para más información sobre cómo usar la sintaxis de contexto, vea "[Contextos](/actions/learn-github-actions/contexts)".

## `runs`

**Obligatorio** Especifica si es una acción de JavaScript, una acción compuesta o una acción de contenedor de Docker y cómo se ejecut.

## `runs` para acciones de JavaScript

**Obligatorio** Configura la ruta al código de la acción y el tiempo de ejecución que se usa para ejecutar el código.

### Ejemplo: Uso de Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Obligatorio** Tiempo de ejecución utilizado para ejecutar el código especificado en [`main`](#runsmain).

- Usa `node12` para Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Use `node16` para Node.js v16.{% endif %}

### `runs.main`

**Obligatorio** El archivo que contiene el código de la acción. El tiempo de ejecución especificado en [`using`](#runsusing) ejecuta este archivo.

### `runs.pre`

**Opcional** Permite ejecutar un script al principio de un trabajo, antes de que comience la acción `main:`. Por ejemplo, puede usar `pre:` para ejecutar un script de configuración de requisitos previos. El tiempo de ejecución especificado con la sintaxis [`using`](#runsusing) ejecutará este archivo. La acción `pre:` siempre se ejecuta de forma predeterminada, pero puede invalidarla mediante [`runs.pre-if`](#runspre-if).

En este ejemplo, la acción `pre:` ejecuta un script denominado `setup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Opcional** Permite definir condiciones para la ejecución de la acción `pre:`. La acción `pre:` solo se ejecutará si se cumplen las condiciones de `pre-if`. Si no se establece, el valor predeterminado de `pre-if` es `always()`. En `pre-if`, las funciones de comprobación de estado se evalúan con el estado del trabajo, no con el de la propia acción.

Tenga en cuenta que el contexto `step` no está disponible, ya que todavía no se ha ejecutado ningún paso.

En este ejemplo, `cleanup.js` solo se ejecuta en ejecutores basados en Linux:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Opcional** Permite ejecutar un script al final de un trabajo una vez que se complete la acción `main:`. Por ejemplo, puede usar `post:` para finalizar algunos procesos o eliminar archivos innecesarios. El tiempo de ejecución especificado con la sintaxis [`using`](#runsusing) ejecutará este archivo.

En este ejemplo, la acción `post:` ejecuta un script denominado `cleanup.js`:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

La acción `post:` siempre se ejecuta de forma predeterminada, pero puede invalidarla mediante `post-if`.

### `runs.post-if`

**Opcional** Permite definir condiciones para la ejecución de la acción `post:`. La acción `post:` solo se ejecutará si se cumplen las condiciones de `post-if`. Si no se establece, el valor predeterminado de `post-if` es `always()`. En `post-if`, las funciones de comprobación de estado se evalúan con el estado del trabajo, no con el de la propia acción.

Por ejemplo, `cleanup.js` solo se ejecutará en ejecutores basados en Linux:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` para acciones compuestas

**Obligatorio** Configura la ruta a la acción compuesta.

### `runs.using`

**Obligatorio** Debe establecer este valor en `'composite'`.

### `runs.steps`

**Obligatorio** Pasos que tienes previsto ejecutar en esta acción. Pueden ser pasos `run` o `uses`.

#### `runs.steps[*].run`

**Opcional** Comando que quieres ejecutar. Puede estar insertado o ser un script en el repositorio de la acción:

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Como alternativa, puede usar `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Para más información, vea "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

#### `runs.steps[*].shell`

**Opcional** Shell donde quieres ejecutar el comando. Puede usar cualquiera de los shells que se enumeran [aquí](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell). Es obligatorio si se establece `run`.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Opcional** Puede usar la condicional `if` para impedir que se ejecute un paso si no se cumple una condición. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

{% data reusables.actions.expression-syntax-if %} Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

**Ejemplo: Uso de contextos**

 Este paso solo se ejecuta cuando el tipo de evento es `pull_request` y la acción del evento es `unassigned`.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Ejemplo: Uso de funciones de comprobación de estado**

`my backup step` solo se ejecuta cuando se produce un error en el paso anterior de una acción compuesta. Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions#status-check-functions)".

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

**Opcional** Nombre del paso compuesto.

#### `runs.steps[*].id`

**Opcional** Identificador único para el paso. Puede usar `id` para hacer referencia al paso en los contextos. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts)".

#### `runs.steps[*].env`

**Opcional** Establece una `map` de variables de entorno solo para ese paso. Si quiere modificar la variable de entorno almacenada en el flujo de trabajo, use `echo "{name}={value}" >> $GITHUB_ENV` en un paso compuesto.

#### `runs.steps[*].working-directory`

**Opcional** Especifica el directorio de trabajo donde se ejecuta el comando.

#### `runs.steps[*].uses`

**Opcional** Selecciona una acción que se ejecutará como parte de un paso en el trabajo. Una acción es una unidad de código reutilizable. Puede usar una acción definida en el mismo repositorio que el flujo de trabajo, un repositorio público o en una [imagen de contenedor de Docker publicada](https://hub.docker.com/).

Te recomendamos firmemente que incluyas la versión de la acción que estás utilizando y especifiques un número de etiqueta de la ref de Git, SHA o Docker. Si no especificas una versión, podrías interrumpir tus flujos de trabajo o provocar un comportamiento inesperado cuando el propietario de la acción publique una actualización.
- El uso del SHA de confirmación de una versión de acción lanzada es lo más seguro para la estabilidad y la seguridad.
- Usar la versión de acción principal específica te permite recibir correcciones críticas y parches de seguridad y al mismo tiempo mantener la compatibilidad. También asegura que tu flujo de trabajo aún debería funcionar.
- Puede ser conveniente utilizar la rama predeterminada de una acciòn, pero si alguien lanza una versiòn principal nueva con un cambio importante, tu flujo de trabajo podrìa fallar.

Algunas acciones necesitan entradas que debe establecer mediante la palabra clave [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith). Revisa el archivo README de la acción para determinar las entradas requeridas.

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

**Opcional** Objeto `map` de los parámetros de entrada definidos por la acción. Cada parámetro de entrada es un par clave/valor. Para obtener más información, consulta [Ejemplo: Especificación de entradas](#example-specifying-inputs).

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

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**Opcional** Impide que se produzca un error en la acción cuando se produce un error en un paso. Establézcalo en `true` para permitir que la acción se supere cuando se produzca un error en este paso.

{% endif %}

## `runs` para acciones de contenedor de Docker

**Obligatorio** Configura la imagen usada para la acción de contenedor de Docker.

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

**Obligatorio** Debe establecer este valor en `'docker'`.

### `runs.pre-entrypoint`

**Opcional** Permite ejecutar un script antes de que comience la acción `entrypoint`. Por ejemplo, puede usar `pre-entrypoint:` para ejecutar un script de configuración de requisitos previos. {% data variables.product.prodname_actions %} usa `docker run` para iniciar esta acción, y ejecuta el script dentro de un contenedor nuevo que usa la misma imagen base. Esto significa que el estado en tiempo de ejecución es diferente del contenedor `entrypoint` principal y que a los estados que necesita se debe acceder desde el área de trabajo, `HOME`o como una variable `STATE_`. La acción `pre-entrypoint:` siempre se ejecuta de forma predeterminada, pero puede invalidarla mediante [`runs.pre-if`](#runspre-if).

El tiempo de ejecución especificado con la sintaxis [`using`](#runsusing) ejecutará este archivo.

En este ejemplo, la acción `pre-entrypoint:` ejecuta un script denominado `setup.sh`:

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

**Obligatorio** Imagen de Docker que se usará como contenedor para ejecutar la acción. El valor puede ser el nombre de la imagen base de Docker, un `Dockerfile` local en el repositorio o una imagen pública en Docker Hub u otro registro. Para hacer referencia a un `Dockerfile`local al repositorio, el archivo debe tener el nombre `Dockerfile` y debe usar una ruta relativa al archivo de metadatos de la acción. La aplicación `docker` ejecutará este archivo.

### `runs.env`

**Opcional** Especifica una asignación de clave-valor de las variables de entorno que se van a establecer en el entorno de contenedor.

### `runs.entrypoint`

**Opcional** Invalida `ENTRYPOINT` de Docker en `Dockerfile`, o bien lo establece si todavía no se ha especificado uno. Use `entrypoint` cuando `Dockerfile` no especifique `ENTRYPOINT` o si quiere invalidar la instrucción `ENTRYPOINT`. Si omite `entrypoint`, se ejecutarán los comandos que especifique en la instrucción `ENTRYPOINT` de Docker. La instrucción `ENTRYPOINT` de Docker tiene un formato _shell_ y otro _exec_. En la documentación de `ENTRYPOINT` de Docker se recomienda usar el formato _exec_ de la instrucción `ENTRYPOINT`.

Para más información sobre cómo se ejecuta `entrypoint`, vea "[Compatibilidad de Dockerfile con {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

### `runs.post-entrypoint`

**Opcional** Permite ejecutar un script de limpieza una vez que se complete la acción `runs.entrypoint`. {% data variables.product.prodname_actions %} usa `docker run` para iniciar esta acción. Como {% data variables.product.prodname_actions %} ejecuta el script dentro de un contenedor nuevo con la misma imagen base, el estado de tiempo de ejecución es diferente del contenedor `entrypoint` principal. Puede acceder a cualquier estado que necesite en el área de trabajo, `HOME` o como una variable `STATE_`. La acción `post-entrypoint:` siempre se ejecuta de forma predeterminada, pero puede invalidarla mediante [`runs.post-if`](#runspost-if).

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

**Opcional** Matriz de cadenas que definen las entradas de un contenedor de Docker. Las entradas pueden incluir cadenas codificadas de forma rígida. {% data variables.product.prodname_dotcom %} pasa `args` al valor `ENTRYPOINT` del contenedor cuando se inicia.

`args` se usan en lugar de la instrucción `CMD` en `Dockerfile`. Si usa `CMD` en `Dockerfile`, utilice las instrucciones ordenadas por preferencia:

{% data reusables.actions.dockerfile-guidelines %}

Si necesitas pasar variables de ambiente a una acción, asegúrate que ésta ejecute un shell de comandos para realizar la sustitución de variables. Por ejemplo, si el atributo `entrypoint` está establecido en `"sh -c"`, `args` se ejecutará en un shell de comandos. Como alternativa, si en `Dockerfile` se usa `ENTRYPOINT` para ejecutar el mismo comando (`"sh -c"`), `args` se ejecutará en un shell de comandos.

Para más información sobre el uso de la instrucción `CMD` con {% data variables.product.prodname_actions %}, vea "[Compatibilidad de Dockerfile con {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

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

**Opcional** Puedes usar un color y un icono de [pluma](https://feathericons.com/) con el fin de crear una notificación para personalizar y distinguir la acción. Los distintivos se muestran junto al nombre de la acción en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

### Ejemplo: Configurar la personalización de una acción

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

El color de fondo del distintivo. Puede ser: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` o `gray-dark`.

### `branding.icon`

Nombre del icono de [pluma](https://feathericons.com/) v4.28.0 que se va a usar. Los iconos de marca se omiten, así como lo siguiente:

<table>
<tr>
<td>café</td>
<td>columnas</td>
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
<td>herramienta</td>
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
<td>delimitador</td>
<td>aperture</td>
<td>archivar</td>
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
<td>campana</td>
</tr>
<tr>
<td>Bluetooth</td>
<td>negrita</td>
<td>book-open</td>
<td>libro</td>
</tr>
<tr>
<td>marcador</td>
<td>Box</td>
<td>briefcase</td>
<td>calendario</td>
</tr>
<tr>
<td>camera-off</td>
<td>cámara</td>
<td>Conversión</td>
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
<td>Portapapeles</td>
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
<td>código</td>
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
<td>descarga</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edición</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
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
<td>Marca</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
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
<td>imagen</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>cursiva</td>
<td>Capas</td>
<td>diseño</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>Cargador</td>
</tr>
<tr>
<td>bloquear</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>mapa</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>menú</td>
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
<td>mover</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>navegación</td>
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
<td>potencia</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>Guardar</td>
<td>scissors</td>
<td>paquetes Bower</td>
<td>Enviar</td>
</tr>
<tr>
<td>server</td>
<td>configuración</td>
<td>share-2</td>
<td>Compartir</td>
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
<td>controles deslizantes</td>
<td>smartphone</td>
<td>speaker (altavoz)</td>
</tr>
<tr>
<td>square</td>
<td>star (asterisco)</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>puesta de sol</td>
<td>tableta</td>
<td>etiqueta</td>
</tr>
<tr>
<td>Destino</td>
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
<td>camión</td>
<td>tv</td>
<td>type</td>
<td>umbrella (paraguas)</td>
</tr>
<tr>
<td>subrayado</td>
<td>desbloquear</td>
<td>upload-cloud</td>
<td>upload</td>
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
<td>volumen</td>
<td>watch</td>
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
