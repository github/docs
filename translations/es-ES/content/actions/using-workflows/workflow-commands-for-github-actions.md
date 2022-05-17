---
title: Comandos de flujo de trabajo para Acciones de GitHub
shortTitle: Comandos de flujo de trabajo
intro: Puedes usar comandos de flujo de trabajo cuando ejecutas comandos de Shell en un flujo de trabajo o en el código de una acción.
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los comandos de flujo

Las acciones pueden comunicarse con la máquina del ejecutor para establecer variables de entorno, valores de salida utilizados por otras acciones, agregar mensajes de depuración a los registros de salida y otras tareas.

La mayoría de los comandos de los flujos de trabajo utilizan el comando `echo` en un formato específico, mientras que otras se invocan si escribes a un archivo. Para obtener más información, consulta la sección ["Archivos de ambiente".](#environment-files)

### Ejemplo

{% bash %}

```bash{:copy}
echo ":: Workflow-Command Parameter1 ={data}, parameter2 ={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Nota:** los nombres de comandos y parámetros de flujo de trabajo no distinguen mayúsculas de minúsculas.

{% endnote %}

{% warning %}

**Advertencia:** si estás usando el símbolo del sistema, omite los caracteres de comillas dobles (`"`) cuando uses comandos de flujo de trabajo.

{% endwarning %}

## Utilizar comandos de flujo de trabajo para acceder a las funciones de toolkit

El [actions/toolkit](https://github.com/actions/toolkit) incluye varias funciones que se pueden ejecutar como comandos de flujo de trabajo. Utiliza la sintaxis `::` para ejecutar los comandos de flujo de trabajo dentro de tu archivo YAML; estos comandos se envían entonces a través de `stdout`. Por ejemplo, en vez de utilizar código para configurar una salida, como se muestra aquí:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Ejemplo: Configurar un valor

Puedes utilizar el comando `set-output` en tu flujo de trabajo para configurar el mismo valor:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

La siguiente tabla muestra qué funciones del toolkit se encuentran disponibles dentro de un flujo de trabajo:

| Funcion del Toolkit   | Comando equivalente del flujo de trabajo                    |
| --------------------- | ----------------------------------------------------------- |
| `core.addPath`        | Accesible utilizando el archivo de ambiente `GITHUB_PATH`   |
| `core.debug`          | `debug` |{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
| `core.notice`         | `notice` 
{% endif %}
| `core.error`          | `error`                                                     |
| `core.endGroup`       | `endgroup`                                                  |
| `core.exportVariable` | Accesible utilizando el archivo de ambiente `GITHUB_ENV`    |
| `core.getInput`       | Accesible utilizando la variable de ambiente `INPUT_{NAME}` |
| `core.getState`       | Accesible utilizando la variable de ambiente`STATE_{NAME}`  |
| `core.isDebug`        | Accesible utilizando la variable de ambiente `RUNNER_DEBUG` |
{%- if actions-job-summaries %}
| `core.summary` | Accessible using environment variable `GITHUB_STEP_SUMMARY` |
{%- endif %}
| `core.saveState`  | `save-state` | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Used as a shortcut for `::error` and `exit 1` | | `core.setOutput`  | `set-output` | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

## Configurar un parámetro de salida

Establece un parámetro de salida de la acción.

```{:copy}
::set-output name={name}::{value}
```

Opcionalmente, también puedes declarar parámetros de salida en el archivo de metadatos de una acción. Para obtener más información, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)".

### Ejemplo;: Configurar un parámetro de salida

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %}

## Agregar un mensaje de depuración

Imprime un mensaje de depuración para el registro. Debes crear un archivo `ACTIONS_STEP_DEBUG` designado secretamente con el valor `true` para ver los mensajes de depuración establecidos por este comando en el registro. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging)."

```{:copy}
::debug::{message}
```

### Ejemplo: Configurar un mensaje de depuración

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

## Configurar un mensaje de aviso

Crea un mensaje de aviso e imprime el mensaje en la bitácora. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Ejemplo: configurar un mensaje de notificación

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}
{% endif %}

## Configurar un mensaje de advertencia

Crea un mensaje de advertencia e imprime el mensaje en el registro. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Ejemplo: Configurar un mensaje de advertencia

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Configurar un mensaje de error

Crea un mensaje de error e imprime el mensaje en el registro. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Ejemplo: Configurar un mensaje de error

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Agrupar líneas de las bitácoras

Crea un grupo expansible en la bitácora. Para crear un grupo, utiliza el comando `group` y especifica un `title`. Todo lo que imprimas en la bitácora entre los comandos `group` y `endgroup` se anidará dentro de una entrada expansible en la misma.

```{:copy}
::group::{title}
::endgroup::
```

### Ejemplo: Agrupar líneas de bitácoras

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![Grupo plegable en la bitácora de una ejecución de flujo de trabajo](/assets/images/actions-log-group.png)

## Enmascarar un valor en el registro

```{:copy}
::add-mask::{value}
```

El enmascaramiento de un valor impide que una cadena o variable se imprima en el registro. Cada palabra enmascarada separada por un espacio en blanco se reemplaza con el carácter `*`. Puedes usar una variable de entorno o cadena para el `valor` de la máscara. When you mask a value, it is treated as a secret and will be redacted on the runner. For example, after you mask a value, you won't be able to set that value as an output.

### Ejemplo: Enmascarar una secuencia

Cuando imprimas `"Mona The Octocat"` en el registro, verás `"***"`.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

### Ejemplo: Enmascarar una variable de ambiente

Cuando imprimes la variable `MY_NAME` o el valor `"Mona The Octocat"` en el registro, verás `"***"` en lugar de `"Mona The Octocat"`.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## Detener e iniciar comandos de flujo de trabajo

Detiene el procesamiento de cualquier comando de flujo de trabajo. Este comando especial te permite registrar cualquier cosa sin ejecutar accidentalmente un comando de flujo de trabajo. Por ejemplo, podrías dejar de registrar para producir un script completo que tenga comentarios.

```{:copy}
::stop-commands::{endtoken}
```

Para parar el procesamiento de los comandos de flujo de trabajo, pasa un token único a `stop-commands`. Para resumir los comandos de flujo de trabajo de procesamiento, pasa el mismo token que utilizaste para detener los comandos de flujo de trabajo.

{% warning %}

**Advertencia:** Asegúrate de que el token que estás utilizando se genere aleatoriamente y sea único para cada ejecución.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Ejemplo: Parar e iniciar comandos de flujos de trabajo

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

## Hacer eco en las salidas de comando

Habilita o inhabilita el hacer eco en los comandos de los flujos de trabajo. Por ejemplo, si utilizas el comando `set-output` en un flujo de trabajo, este configura un parámetro de salida pero la bitácora de la ejecución del flujo de trabajo no muestra al comando mismo. Si habilitas el eco del comando, entonces la bitácora lo mostrará, tal como en `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

El eco de comando se encuentra inhabilitado predeterminadamente. Sin embargo, los comandos de flujo de trabajo hacen eco si existen errores para procesarlos.

Los comandos `add-mask`, `debug`, `warning` y `error` no son compatibles con el eco porque sus salidas ya hicieron eco en la bitácora.

También puedes habilitar el eco de comandos globalmente si activas la generación de bitácoras de depuración de pasos utilizando el secreto `ACTIONS_STEP_DEBUG`. Para obtener más información, consulta la sección "[Habilitar el registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging)". Como contraste, el comando de flujo de trabajo `echo` te permite habilitar el eco de comandos en un nivel más granular en vez de habilitarlo para cada flujo de trabajo en un repositorio.

### Ejemplo: Alternar el eco de comandos

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

El ejemplo anterior imprime las siguientes líneas en la bitácora:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Únicamente el segundo comando `set-output` y el de `echo` se incluyen en la bitácora, ya que el eco de comandos solo se habilitó cuando se ejecutaron. Aunque no siempre hace eco, el parámetro de salida se configura en todos los casos.

## Enviar valores a las acciones pre y post

Puedes utilizar el comando `save-state` para crear variables de ambiente para compartir con tus acciones `pre:` o `post:` de flujo de trabajo. Por ejemplo, puedes crear un archivo con la acción `pre:`, pasar la ubicación del archivo a la acción `main:`, y después, utilizar la acción `post:` para borrar el archivo. Como alternativa, puedes crear un archivo con la acción `main:`, pasar la ubicación del archivo a la acción `post:`, y también utilizar la acción `post:` para borrar el archivo.

Si tienes varias acciones `pre:` o `post:`, solo podrás acceder al valor que se guardó en la acción donde se utilizó `save-state`. Para obtener más información sobre la acción `post:`, consulta la sección "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)".

El comando `save-state` solo puede ejecutarse dentro de una acción y no está disponible para archivos YAML. El valor guardado se almacena en un valor de ambiente con el prefijo `STATE_`.

Este ejemplo utiliza JavaScript para ejecutar el comando `save-state`. La variable de ambiente resultante se nombra `STATE_processID` con el valor de `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```

La variable `STATE_processID` se encontrará entonces exclusivamente disponible para el script de limpieza que se ejecuta bajo la acción `main`. Este ejemplo se ejecuta en `main` y utiliza JavaScript para mostrar el valor asignado a la variable de ambiente `STATE_processID`:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Archivos de ambiente

Durante la ejecución de un flujo de trabajo, el ejecutor genera archivos temporales que pueden utilizarse para llevar a cabo ciertas acciones. La ruta a estos archivos se expone a través de variables de ambiente. Necesitarás utilizar codificación UTF-8 cuando escribas en estos archivos para garantizar el procesamiento adecuado de los comandos. Se pueden escribir varios comandos en el mismo archivo, separados por líneas nuevas.

{% powershell %}

{% note %}

**Nota:** PowerShell versión 5.1 e inferiores (`shell: powershell`) no utiliza UTF-8 predeterminadamente, así que debes especificar el cifrado UTF-8. Por ejemplo:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

Las versiones 6 y superior de PowerShell Core (`shell: pwsh`) utilizan UTF-8 predeterminadamente. Por ejemplo:

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## Configurar una variable de ambiente

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Utilizar PowerShell versión 6 y superior:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Utilizar PowerShell versión 5.1 e inferior:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Puedes hacer que una variable de ambiente esté disponible en cualquier paso subsecuente de un job de un flujo de trabajo si defines o actualizas la variable de ambiente y escribes esto en el archivo de ambiente `GITHUB_ENV`. El paso que crea o actualiza la variable de ambiente no tiene acceso al valor nuevo, pero todos los pasos subsecuentes en un job tendrán acceso. Los nombres de las variables de ambiente distinguen entre mayúsculas y minúsculas y puedes incluir signos de puntuación. Para obtener más información, consulta "[Variables del entorno](/actions/learn-github-actions/environment-variables)".

### Ejemplo

{% bash %}

{% raw %}
```yaml{:copy}
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

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### Secuencias de línea múltiple

Para las secuencias de lìnea mùltiple, puedes utilizar un delimitador con la siguiente sintaxis.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

#### Ejemplo

This example uses `EOF` as a delimiter, and sets the `JSON_RESPONSE` environment variable to the value of the `curl` response.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.lab >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.lab").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% if actions-job-summaries %}

## Adding a job summary

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

You can set some custom Markdown for each job so that it will be displayed on the summary page of a workflow run. You can use job summaries to display and group unique content, such as test result summaries, so that someone viewing the result of a workflow run doesn't need to go into the logs to see important information related to the run, such as failures.

Job summaries support [{% data variables.product.prodname_dotcom %} flavored Markdown](https://github.github.com/gfm/), and you can add your Markdown content for a step to the `GITHUB_STEP_SUMMARY` environment file. `GITHUB_STEP_SUMMARY` is unique for each step in a job. For more information about the per-step file that `GITHUB_STEP_SUMMARY` references, see "[Environment files](#environment-files)."

When a job finishes, the summaries for all steps in a job are grouped together into a single job summary and are shown on the workflow run summary page. If multiple jobs generate summaries, the job summaries are ordered by job completion time.

### Ejemplo

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Markdown summary example](/assets/images/actions-job-summary-simple-example.png)

### Multiline Markdown content

For multiline Markdown content, you can use `>>` to continuously append content for the current step. With every append operation, a newline character is automatically added.

#### Ejemplo

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Overwriting job summaries

To clear all content for the current step, you can use `>` to overwrite any previously added content.

#### Ejemplo

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Removing job summaries

To completely remove a summary for the current step, the file that `GITHUB_STEP_SUMMARY` references can be deleted.

#### Ejemplo

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

After a step has completed, job summaries are uploaded and subsequent steps cannot modify previously uploaded Markdown content. Summaries automatically mask any secrets that might have been added accidentally. If a job summary contains sensitive information that must be deleted, you can delete the entire workflow run to remove all its job summaries. For more information see "[Deleting a workflow run](/actions/managing-workflow-runs/deleting-a-workflow-run)."

### Step isolation and limits

Job summaries are isolated between steps and each step is restricted to a maximum size of 1MiB. Isolation is enforced between steps so that potentially malformed Markdown from a single step cannot break Markdown rendering for subsequent steps. If more than 1MiB of content is added for a step, then the upload for the step will fail and an error annotation will be created. Upload failures for job summaries do not affect the overall status of a step or a job. A maximum of 20 job summaries from steps are displayed per job.

{% endif %}

## Agregar una ruta de sistema

Antepone un directorio a la variable de sistema `PATH` y la hace disponible automáticamente para todas las acciones subsecuentes en el job actual; la acción que se está ejecutando actualmente no puede acceder a la variable de ruta actualizada. Para ver las rutas definidas actualmente para tu job, puedes utilizar `echo "$PATH"` en un paso o en una acción.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### Ejemplo

{% bash %}

Este ejemplo demuestra cómo agregar el directorio `$HOME/.local/bin` del usuario al `PATH`:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

This example demonstrates how to add the user `$env:HOMEPATH/.local/bin` directory to `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
