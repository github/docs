---
title: Sintaxis de metadatos para acciones de GitHub
shortTitle: Sintaxis de metadatos
intro: Puedes crear acciones para realizar tareas en tu repositorio. Las acciones requieren un archivo de metadatos que use la sintaxis YAML.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'reference'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de la nueva sintaxis YAML para {% data variables.product.prodname_actions %}

Las acciones Docker y JavaScript requieren un archivo de metadatos. El nombre del archivo de metadatos debe ser `action.yml` o `action.yaml`. Los datos del archivo de metadatos definen las entradas, las salidas y el punto de entrada principal para tu acción.

Los archivos de metadatos de acción usan la sintaxis YAML. Si eres nuevo en YAML, puedes leer "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

### `name`

**Requerido** El nombre de tu acción. {% data variables.product.prodname_dotcom %} muestra el `name` (nombre) en la pestaña **Actions** (Acciones) para ayudarte a identificar visualmente las acciones en cada trabajo.

### `author`

**Opcional** El nombre del autor de las acciones.

### `description`

**Requerido** Una descripción breve de la acción.

### `inputs`

**Opcional** Los parámetros de entrada te permiten especificar datos que la acción espera para usar durante el tiempo de ejecución. {% data variables.product.prodname_dotcom %} almacena parámetros de entrada como variables de entorno. Las Id de entrada con letras mayúsculas se convierten a minúsculas durante el tiempo de ejecución. Recomendamos usar Id de entrada en minúsculas.

#### Ejemplo

Este ejemplo configura dos entradas: numOctocats y octocatEyeColor. La entrada numOctocats no se requiere y se predeterminará a un valor de '1'. Se requiere la entrada octocatEyeColor y no tiene un valor predeterminado. Los archivos de flujo de trabajo que usan esta acción deben usar la palabra clave `with` (con) para establecer un valor de entrada para octocatEyeColor. Para obtener información sobre la sintaxis `with`, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)".

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

Cuando especificas una entrada para una acción en un archivo de flujo de trabajo o usas un valor de entrada predeterminado, {% data variables.product.prodname_dotcom %} crea una variable de entorno para la entrada con el nombre `INPUT_<VARIABLE_NAME>`. La variable de entorno creada convierte los nombre de entrada en letras mayúscula y reemplaza los espacios con los caracteres `_`.

Por ejemplo, si un flujo de trabajo definió las entradas numOctocats y octocatEyeColor, el código de acción podría leer los valores de las entradas usando las variables de entorno `INPUT_NUMOCTOCATS` y `INPUT_OCTOCATEYECOLOR`.

#### `inputs.<input_id>`

**Requerido** Un identificador `string` (cadena) para asociar con la entrada. El valor de `<input_id>` es un mapa con los metadatos de la entrada. `<input_id>` debe ser un identificador único dentro del objeto `inputs` (entradas). El `<input_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### `inputs.<input_id>.description`

**Requerido** Una descripción de `string` del parámetro de entrada.

#### `inputs.<input_id>.required`

**Requerido** Un `boolean` (booleano) para indicar si la acción requiere el parámetro de entrada. Establecer en `true` cuando se requiera el parámetro.

#### `inputs.<input_id>.default`

**Opcional** Una `string` que representa el valor predeterminado. El valor predeterminado se usa cuando un parámetro de entrada no se especifica en un archivo de flujo de trabajo.

### `outputs (salidas)`

**Opcional** Los parámetros de salida te permiten declarar datos que una acción establece. Las acciones que se ejecutan más tarde en un flujo de trabajo pueden usar el conjunto de datos de salida en acciones de ejecución anterior.  Por ejemplo, si se realizó una acción además de las dos entradas (x + y = z), la acción podría dar como resultado la suma (z) para que otras acciones la usen como entrada.

Si no declaras una salida en tu archivo de metadatos de acción, todavía puedes configurar las salidas y utilizarlas en un flujo de trabajo. Para obtener más información acerca de la configuración de salidas en una acción, consulta "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)".

#### Ejemplo

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

#### `outputs.<output_id>`

**Requerido** Un identificador `string` para asociar con la salida. El valor de `<output_id>` es un mapa con los metadatos de la salida. `<output_id>` debe ser un identificador único dentro del objeto `outputs` (salidas). El `<output_id>`> debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### `outputs.<output_id>.description`

**Requerido** Una descripción de `string` del parámetro de salida.

### `outputs` para con de pasos de ejecución compuestos

Los `outputs` **Opcionales** utilizan los mismos parámetros que los `outputs.<output_id>` and los `outputs.<output_id>.description` (consulta la sección "[`outputs` para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)"), pero también incluyen el token de `value`.

#### Ejemplo

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

#### `outputs.<output_id>.value`

**Requerido** El valor al cual se mapeará el parámetro de salida. Puedes configurarlo a una `string` o a una expresión con contexto. Por ejemplo, puedes utilizar el contexto `steps` para configurar el `value` de una salida al valor de salida de un paso.

Para obtener más información sobre cómo utilizar la sintaxis de contexto y de expresión, consulta la sección "[Sintaxis de contexto y de expresión para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### `runs` para acciones de JavaScript

**Requerido** Configura la ruta al código de la acción y a la aplicación que se utiliza para ejecutar dicho código.

#### Ejemplo usando Node.js

```yaml
runs:
  using: 'node12'
  main: 'main.js'
```

#### `runs.using`

**Requerido** La aplicación utilizada para el código especificado en [`main`](#runsmain).

#### `runs.main`

**Requerido** El archivo que contiene tu código de acción. La aplicación especificada en [`using`](#runsusing) ejecuta este archivo.

#### `pre`

**Opcional** Te permite ejecutar un script al inicio de un job, antes de que la acción `main:` comience. Por ejemplo, puedes utilizar `pre:` para ejecutar un script de configuración de pre-requisitos. La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo. La acción `pre:` siempre se ejecuta predeterminadamente pero puedes invalidarla utilizando [`pre-if`](#pre-if).

En este ejemplo, la acción `pre:` ejecuta un script llamado `setup.js`:

```yaml
runs:
  using: 'node12'
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

#### `pre-if`

**Opcional** Te permite definir las condiciones para la ejecución de la acción `pre:`. La acción `pre:` únicamente se ejecutará si se cumplen las condiciones en `pre-if`. Si no se configura, `pre-if` se configurará predefinidamente como `always()`. Nota que el contexto `step` no está disponible, ya que no se ha ejecutado ningún paso todavía.

En este ejemplo, `cleanup.js` se ejecuta únicamente en los ejecutores basados en linux:

```yaml
  pre: 'cleanup.js'
  pre-if: 'runner.os == linux'
```

#### `post`

**Opcional** Te permite ejecutar un script al final de un job, una vez que se haya completado la acción `main:`. Por ejemplo, puedes utilizar `post:` para finalizar algunos procesos o eliminar los archivos innecesarios. La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo.

En este ejemplo, la acción `post:` ejecuta un script llamado `cleanup.js`:

```yaml
runs:
  using: 'node12'
  main: 'index.js'
  post: 'cleanup.js'
```

La acción `post:` siempre se ejecuta predeterminadamente, pero la puedes invalidar utilizando `post-if`.

#### `post-if`

**Opcional** Te permite definir condiciones para la ejecución de la acción `post:`. La acción `post` únicamente se ejecutará si se cumplen las condiciones en `post-if`. Si no se configura, `pre-if` se configurará predeterminadamente como `always()`.

Por ejemplo, este `cleanup.js` únicamente se ejecutará en ejecutores basados en Linux:

```yaml
  post: 'cleanup.js'
  post-if: 'runner.os == linux'
```

### `runs` para acciones con pasos de ejecución compuestos

**Requerido** Configura la ruta a la acción compuesta, y la aplicación que se utiliza para ejecutar el código.

#### `runs.using`

**Requerido** Para utilizar una acción de pasos de ejecución compuestos, configúrala como `"composite"`.

#### `runs.steps`

**Requerido** Los pasos de ejecución que planeas ejecutar en esta acción.

##### `runs.steps[*].run`

**Requerido** El comando que quieres ejecutar. Este puede estar dentro de la línea o ser un script en tu repositorio de la acción:

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

##### `runs.steps[*].shell`

**Requerido** El shell en donde quieres ejecutar el comando. Puedes utilizar cualquiera de los shells listados [aquí](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

##### `runs.steps[*].name`

**Opcional** El nombre del paso de ejecución compuesto.

##### `runs.steps[*].id`

**Opcional** Un identificador único para el paso. Puede usar el `id` para hacer referencia al paso en contextos. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### `runs.steps[*].env`

**Opcional**  Configura un `map` de variables de ambiente únicamente para este paso. Si quieres modificar las variables de ambiente que se almacenan en el flujo de trabajo, utiliza {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}`echo "{name}={value}" >> $GITHUB_ENV`{% else %}`echo "::set-env name={name}::{value}"`{% endif %} en un paso de ejecución compuesto.

##### `runs.steps[*].working-directory`

**Opcional**  Especifica el directorio de trabajo en donde se ejecuta un comando.

### `runs` para acciones de Docker

**Requerido** Configura la imagen utilizada para la acción de Docker.

#### Ejemplo utilizando un Dockerfile en tu repositorio

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

#### Ejemplo usando un contenedor de registro Docker público

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

#### `runs.using`

**Requerido** Debes configurar este valor como `'docker'`.

#### `pre-entrypoint`

**Opcional** Te permite ejecutar un script antes de que comience la acción `entrypoint`. Por ejemplo, puedes utilizar `pre-entrypoint` para ejecutar un script de configuración de pre-requisitos. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción, y ejecuta el script dentro de un contenedor nuevo que utiliza la misma imagen base. Esto significa que el estado del tiempo de ejecución difiere de el contenedor principal `entrypoint`, y se deberá acceder a cualquier estado que requieras ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `pre-entrypoint:` siempre se ejecuta predeterminadamente pero la puedes invalidar utilizando [`pre-if`](#pre-if).

La aplicación especificada con la sintaxis [using</code>](#runsusing) (mediante) ejecutará este archivo.

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

#### `runs.image`

**Requerido** La imagen de Docker a utilizar como el contenedor para ejecutar la acción. El valor puede ser el nombre de la imagen base de Docker, un `Dockerfile` local en tu repositorio, o una imagen pública en Docker Hub u otro registro. Para referenciar un `Dockerfile` local a tu repositorio, utiliza una ruta relativa a tu archivo de metadatos de la acción. La aplicación `docker` ejecutará este archivo.

#### `runs.env`

**Opcional** Especifica mapa clave/de valores de las variables del ambiente para configurar en el ambiente del contenedor.

#### `runs.entrypoint`

**Opcional** Invalida el `ENTRYPOINT` de Docker en el `Dockerfile`, o lo configura si no se había especificado anteriormente. Utiliza `entrypoint` cuando el `Dockerfile` no especifique un `ENTRYPOINT` o cuando quieras invalidar la instrucción de `ENTRYPOINT`. Si omites el `entrypoint`, se ejecutarán los comandos que especifiques en la instrucción `ENTRYPOINT` de Docker. La instrucción `ENTRYPOINT` de Docker tiene una forma de _shell_ y una de _exec_. La documentación de `ENTRYPOINT` de Docker recomienda utilizar la forma de _exec_ de la instrucción `ENTRYPOINT`.

Para obtener más información acerca de cómo se ejecuta el `entrypoint`, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)".

#### `post-entrypoint`

**Opcional** Te permite ejecutar un script de limpieza una vez que se haya completado la acción de `runs.entrypoint`. {% data variables.product.prodname_actions %} utiliza `docker run` para lanzar esta acción. Ya que {% data variables.product.prodname_actions %} ejecuta el script dentro de un contenedor nuevo utilizando la misma imagen base, el estado de tiempo de ejecución es diferente del contenedor principal de `entrypoint`. Puedes acceder a cualquier estado que necesites, ya sea en el espacio de trabajo, `HOME`, o como una variable `STATE_`. La acción `post-entrypoint:` siempre se ejecuta predeterminadamente, pero puedes invalidarla utilizando [`post-if`](#post-if).

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
  - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

#### `runs.args`

**Opcional** Una matriz de secuencias que defina las entradas para un contenedor de Docker. Las entradas pueden incluir cadenas codificadas de forma rígida. {% data variables.product.prodname_dotcom %} comunica los `args` en el `ENTRYPOINT` del contenedor cuando se inicia el contenedor.

Los `args` se usan en el lugar de la instrucción `CMD` en un `Dockerfile`. Si usas `CMD` en tu `Dockerfile`, usa los lineamientos ordenados por preferencia:

{% data reusables.github-actions.dockerfile-guidelines %}

Si necesitas pasar variables de ambiente a una acción, asegúrate que ésta ejecute un shell de comandos para realizar la sustitución de variables. Por ejemplo, si se configura tu atributo `entrypoint` como `"sh -c"`, entonces `args` se ejecutará en un shell de comandos. Como alternativa, si tu `Dockerfile` utiliza un `ENTRYPOINT` para ejecutar el mismo comando (`"sh -c"`), entonces `args` se ejecutará en un shell de comandos.

Para obtener más información sobre el uso de la instrucción `CMD` con {% data variables.product.prodname_actions %}, consulta la sección "[Soporte de Dockerfile para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)".

##### Ejemplo

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

### `branding (marca)`

Puedes usar un color y un icono de [Feather](https://feathericons.com/) para crear una insignia que personalice y diferencie tu acción. Las insignias se muestran junto al nombre de tu acción en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

#### Ejemplo

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

#### `branding.color`

El color de fondo de la insignia. Puede ser: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple`, o `gray-dark`.

#### `branding.icon`

El nombre del icono de [Feather](https://feathericons.com/) que se debe usar.

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
<td>facebook</td>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
</tr>
<tr>
<td>file-plus</td>
<td>file-text</td>
<td>file</td>
<td>film</td>
</tr>
<tr>
<td>filter</td>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
</tr>
<tr>
<td>folder</td>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
</tr>
<tr>
<td>git-merge</td>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
</tr>
<tr>
<td>hard-drive</td>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
</tr>
<tr>
<td>help-circle</td>
<td>home</td>
<td>image</td>
<td>inbox</td>
</tr>
<tr>
<td>info</td>
<td>italic</td>
<td>layers</td>
<td>layout</td>
</tr>
<tr>
<td>life-buoy</td>
<td>link-2</td>
<td>link</td>
<td>list</td>
</tr>
<tr>
<td>loader</td>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
</tr>
<tr>
<td>mail</td>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
</tr>
<tr>
<td>maximize</td>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
</tr>
<tr>
<td>mic-off</td>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
</tr>
<tr>
<td>minus-circle</td>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
</tr>
<tr>
<td>moon</td>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
</tr>
<tr>
<td>music</td>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
</tr>
<tr>
<td>package</td>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
</tr>
<tr>
<td>percent</td>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
</tr>
<tr>
<td>phone-missed</td>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
</tr>
<tr>
<td>pie-chart</td>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
</tr>
<tr>
<td>plus-square</td>
<td>plus</td>
<td>pocket</td>
<td>power</td>
</tr>
<tr>
<td>printer</td>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
</tr>
<tr>
<td>repeat</td>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
</tr>
<tr>
<td>rss</td>
<td>save</td>
<td>scissors</td>
<td>search</td>
</tr>
<tr>
<td>send</td>
<td>server</td>
<td>settings</td>
<td>share-2</td>
</tr>
<tr>
<td>share</td>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
</tr>
<tr>
<td>shopping-cart</td>
<td>shuffle</td>
<td>sidebar</td>
<td>skip-back</td>
</tr>
<tr>
<td>skip-forward</td>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
</tr>
<tr>
<td>speaker</td>
<td>square</td>
<td>star</td>
<td>stop-circle</td>
</tr>
<tr>
<td>sun</td>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
</tr>
<tr>
<td>tag</td>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
</tr>
<tr>
<td>thumbs-down</td>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
</tr>
<tr>
<td>trash-2</td>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
</tr>
<tr>
<td>triangle</td>
<td>truck</td>
<td>tv</td>
<td>type</td>
</tr>
<tr>
<td>umbrella</td>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
</tr>
<tr>
<td>upload</td>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
</tr>
<tr>
<td>user-x</td>
<td>user</td>
<td>users</td>
<td>video-off</td>
</tr>
<tr>
<td>video</td>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
</tr>
<tr>
<td>volume-x</td>
<td>volume</td>
<td>watch</td>
<td>wifi-off</td>
</tr>
<tr>
<td>wifi</td>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
</tr>
<tr>
<td>x</td>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
</tr>
<tr>
<td>zoom-out</td>
<td></td>
<td></td>
<td></td>
</table>
