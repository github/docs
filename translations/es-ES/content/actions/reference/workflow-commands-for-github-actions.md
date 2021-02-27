---
title: Comandos de flujo de trabajo para Acciones de GitHub
shortTitle: Comandos de flujo de trabajo
intro: Puedes usar comandos de flujo de trabajo cuando ejecutas comandos de Shell en un flujo de trabajo o en el código de una acción.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los comandos de flujo

Las acciones pueden comunicarse con la máquina del ejecutor para establecer variables de entorno, valores de salida utilizados por otras acciones, agregar mensajes de depuración a los registros de salida y otras tareas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
La mayoría de los comandos de los flujos de trabajo utilizan el comando `echo` en un formato específico, mientras que otras se invocan si escribes a un archivo. Para obtener más información, consulta la sección ["Archivos de ambiente".](#environment-files)
{% else %}
Los comandos de flujo de trabajo usan el comando `echo` en un formato específico.
{% endif %}

``` bash
echo ":: Workflow-Command Parameter1 ={data}, parameter2 ={data}::{command value}"
```

{% note %}

**Nota:** los nombres de comandos y parámetros de flujo de trabajo no distinguen mayúsculas de minúsculas.

{% endnote %}

{% warning %}

**Advertencia:** si estás usando el símbolo del sistema, omite los caracteres de comillas dobles (`"`) cuando uses comandos de flujo de trabajo.

{% endwarning %}

### Utilizar comandos de flujo de trabajo para acceder a las funciones de toolkit

El [actions/toolkit](https://github.com/actions/toolkit) incluye varias funciones que se pueden ejecutar como comandos de flujo de trabajo. Utiliza la sintaxis `::` para ejecutar los comandos de flujo de trabajo dentro de tu archivo YAML; estos comandos se envían entonces a través de `stdout`. Por ejemplo, en vez de utilizar código para configurar una salida, como se muestra aquí:

```javascript
core.setOutput('SELECTED_COLOR', 'green');
```

Puedes utilizar el comando `set-output` en tu flujo de trabajo para configurar el mismo valor:

{% raw %}
``` yaml
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

La siguiente tabla muestra qué funciones del toolkit se encuentran disponibles dentro de un flujo de trabajo:

| Funcion del Toolkit                                                                                                                                                                           | Comando equivalente del flujo de trabajo                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `core.addPath`                                                                                                                                                                                |                                                             |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accesible utilizando el archivo de ambiente `GITHUB_PATH`{% else %} `add-path` {% endif %} |                                                             |
|                                                                                                                                                                                               |                                                             |
| `core.debug`                                                                                                                                                                                  | `debug`                                                     |
| `core.error`                                                                                                                                                                                  | `error`                                                     |
| `core.endGroup`                                                                                                                                                                               | `endgroup`                                                  |
| `core.exportVariable`                                                                                                                                                                         |                                                             |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accesible utilizando el archivo de ambiente`GITHUB_ENV`{% else %} `set-env` {% endif %}    |                                                             |
|                                                                                                                                                                                               |                                                             |
| `core.getInput`                                                                                                                                                                               | Accesible utilizando la variable de ambiente `INPUT_{NAME}` |
| `core.getState`                                                                                                                                                                               | Accesible utilizando la variable de ambiente`STATE_{NAME}`  |
| `core.isDebug`                                                                                                                                                                                | Accesible utilizando la variable de ambiente `RUNNER_DEBUG` |
| `core.saveState`                                                                                                                                                                              | `save-state`                                                |
| `core.setFailed`                                                                                                                                                                              | Utilizada como un atajo para `::error` y `exit 1`           |
| `core.setOutput`                                                                                                                                                                              | `set-output`                                                |
| `core.setSecret`                                                                                                                                                                              | `add-mask`                                                  |
| `core.startGroup`                                                                                                                                                                             | `grupo`                                                     |
| `core.warning`                                                                                                                                                                                | `warning file`                                              |

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Configurar una variable de ambiente

`::set-env name={name}::{value}`

Crea o actualiza una variable de entorno para todas las acciones que se ejecutan a continuación en un puesto. La acción que crea o actualiza la variable de entorno no tiene acceso al nuevo valor, pero todas las acciones subsiguientes en un puesto tendrán acceso. Las variables de entorno distinguen mayúsculas de minúsculas y puedes incluir puntuación.

#### Ejemplo

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

### Configurar un parámetro de salida

`::set-output name={name}::{value}`

Establece un parámetro de salida de la acción.

Opcionalmente, también puedes declarar parámetros de salida en el archivo de metadatos de una acción. Para obtener más información, consulta "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".

#### Ejemplo

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Agregar una ruta de sistema

`::add-path::{path}`

Anexa un directorio a la variable de `RUTA` del sistema para todas las acciones subsiguientes en el puesto actual. La acción que se ejecuta actualmente no puede acceder a la nueva variable de ruta.

#### Ejemplo

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

### Agregar un mensaje de depuración

`::debug::{message}`

Imprime un mensaje de depuración para el registro. Debes crear un archivo `ACTIONS_STEP_DEBUG` designado secretamente con el valor `true` para ver los mensajes de depuración establecidos por este comando en el registro. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging)."

#### Ejemplo

``` bash
echo "::debug::Set the Octocat variable"
```

### Configurar un mensaje de advertencia

`::warning file={name},line={line},col={col}::{message}`

Crea un mensaje de advertencia e imprime el mensaje en el registro. Opcionalmente, puedes brindar un nombre de archivo (`file`), número de línea (`line`), y columna (`col`) donde se produjo la advertencia.

#### Ejemplo

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### Configurar un mensaje de error

`::error file={name},line={line},col={col}::{message}`

Crea un mensaje de error e imprime el mensaje en el registro. Opcionalmente, puedes proporcionar un nombre de archivo (`file`), nùmero de lìnea (`line`), y nùmero de columna (`col`) de donde se suscitò el error.

#### Ejemplo

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### Agrupar líneas de las bitácoras

```
::group::{title}
::endgroup::
```

Crea un grupo expansible en la bitácora. Para crear un grupo, utiliza el comando `group` y especifica un `title`. Todo lo que imprimas en la bitácora entre los comandos `group` y `endgroup` se anidará dentro de una entrada expansible en la misma.

#### Ejemplo

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Grupo plegable en la bitácora de una ejecución de flujo de trabajo](/assets/images/actions-log-group.png)

### Enmascarar un valor en el registro

`::add-mask::{value}`

El enmascaramiento de un valor impide que una cadena o variable se imprima en el registro. Cada palabra enmascarada separada por un espacio en blanco se reemplaza con el carácter `*`. Puedes usar una variable de entorno o cadena para el `valor` de la máscara.

#### Ejemplo de enmascaramiento de una cadena

Cuando imprimas `"Mona The Octocat"` en el registro, verás `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

#### Ejemplo de enmascaramiento de una variable de entorno

Cuando imprimes la variable `MY_NAME` o el valor `"Mona The Octocat"` en el registro, verás `"***"` en lugar de `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### Detener e iniciar comandos de flujo de trabajo

`::stop-commands::{endtoken}`

Deja de procesar cualquier comando de flujo de trabajo. Este comando especial te permite registrar lo que sea sin ejecutar accidentalmente un comando de flujo de trabajo. Por ejemplo, podrías dejar de registrar para producir un script completo que tenga comentarios.

#### Ejemplo deteniendo comandos de flujo de trabajo

``` bash
echo "::stop-commands::pause-logging"
```

Para iniciar los comandos de flujo de trabajo, pasa el token que usaste para detenerlos.

`::{endtoken}::`

#### Ejemplo de inicio de comandos de flujo

``` bash
echo "::pause-logging::"
```

### Enviar valores a las acciones pre y post

Puedes utilizar el comando `save-state` para crear variables de ambiente para compartir con tus acciones `pre:` o `post:` de flujo de trabajo. Por ejemplo, puedes crear un archivo con la acción `pre:`, pasar la ubicación del archivo a la acción `main:`, y después, utilizar la acción `post:` para borrar el archivo. Como alternativa, puedes crear un archivo con la acción `main:`, pasar la ubicación del archivo a la acción `post:`, y también utilizar la acción `post:` para borrar el archivo.

Si tienes varias acciones `pre:` o `post:`, solo podrás acceder al valor que se guardó en la acción donde se utilizó `save-state`. Para obtener más información sobre la acción `post:`, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#post)".

El comando `save-state` solo puede ejecutarse dentro de una acción y no está disponible para archivos YAML. El valor guardado se almacena en un valor de ambiente con el prefijo `STATE_`.

Este ejemplo utiliza JavaScript para ejecutar el comando `save-state`. La variable de ambiente resultante se nombra `STATE_processID` con el valor de `12345`:

``` javascript
console.log('::save-state name=processID::12345')
```

La variable `STATE_processID` se encontrará entonces exclusivamente disponible para el script de limpieza que se ejecuta bajo la acción `main`. Este ejemplo se ejecuta en `main` y utiliza JavaScript para mostrar el valor asignado a la variable de ambiente `STATE_processID`:

``` javascript
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
## Archivos de ambiente

Durante la ejecución de un flujo de trabajo, el ejecutor genera archivos temporales que pueden utilizarse para llevar a cabo ciertas acciones. La ruta a estos archivos se expone a través de variables de ambiente. Necesitarás utilizar codificación UTF-8 cuando escribas en estos archivos para garantizar el procesamiento adecuado de los comandos. Se pueden escribir varios comandos en el mismo archivo, separados por líneas nuevas.

{% warning %}

**Advertencia:** Powershell no utiliza UTF-8 predeterminadamente. Asegúrate que escribes los archivos utilizando la codificación correcta. Por ejemplo, necesitas configurar la codificación UTF-8 cuando configuras la ruta:

```yaml
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

### Configurar una variable de ambiente

`echo "{name}={value}" >> $GITHUB_ENV`

Crea o actualiza una variable de entorno para todas las acciones que se ejecutan a continuación en un puesto. La acción que crea o actualiza la variable de entorno no tiene acceso al nuevo valor, pero todas las acciones subsiguientes en un puesto tendrán acceso. Las variables de entorno distinguen mayúsculas de minúsculas y puedes incluir puntuación.

#### Ejemplo

{% raw %}
```
steps:
  - name: Set the value
    id: step_one
    run: |
        echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
        echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

#### Secuencias de línea múltiple

Para las secuencias de lìnea mùltiple, puedes utilizar un delimitador con la siguiente sintaxis.

```
{name}<<{delimiter}
{value}
{delimiter}
```

##### Ejemplo

En este ejemplo, utilizamos `EOF` como delimitador y configuramos la variable de ambiente `JSON_RESPONSE` para el valor de la respuesta de curl.
```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
        echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
        curl https://httpbin.org/json >> $GITHUB_ENV
        echo 'EOF' >> $GITHUB_ENV
```

### Agregar una ruta de sistema

`echo "{path}" >> $GITHUB_PATH`

Antepone un directorio a la variable `PATH` del sistema y la hace disponible para todas las acciones subsecuentes en el job actual; la acción que se está ejecutando actualmente no puede acceder a la variable de ruta actualizada. Para ver las rutas definidas actualmente para tu job, puedes utilizar `echo "$PATH"` en un paso o en una acción.

#### Ejemplo

Este ejemplo demuestra cómo agregar el directorio `$HOME/.local/bin` del usuario al `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
{% endif %}
