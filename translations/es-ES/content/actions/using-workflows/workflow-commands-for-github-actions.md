---
title: Comandos de flujo de trabajo para Acciones de GitHub
shortTitle: Workflow commands
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
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160836'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los comandos de flujo

Las acciones pueden comunicarse con la máquina del ejecutor para establecer variables de entorno, valores de salida utilizados por otras acciones, agregar mensajes de depuración a los registros de salida y otras tareas.

La mayoría de los comandos de flujo de trabajo usan el comando `echo` en un formato específico, mientras que otros se pueden invocar escribiendo en un archivo. Para más información, vea "[Archivos de entorno](#environment-files)".

### Ejemplo

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Nota:** Los nombres de parámetros y comandos de flujo de trabajo no distinguen mayúsculas de minúsculas.

{% endnote %}

{% warning %}

**Advertencia:** Si utiliza el símbolo del sistema, omita los caracteres de comillas dobles (`"`) al usar comandos de flujo de trabajo.

{% endwarning %}

## Utilizar comandos de flujo de trabajo para acceder a las funciones de toolkit

En [actions/toolkit](https://github.com/actions/toolkit) se incluye una serie de funciones que se pueden ejecutar como comandos de flujo de trabajo. Use la sintaxis `::` para ejecutar los comandos de flujo de trabajo dentro del archivo YAML; estos comandos se envían al ejecutor por medio de `stdout`.

{%- ifversion actions-save-state-set-output-envs %} Por ejemplo, en lugar de usar código para crear una anotación de error, como aquí:

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Ejemplo: Crear una anotación de un error

Puedes usar el comando `error` en tu flujo de trabajo para crear la misma anotación de error:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} Por ejemplo, en vez de utilizar código para configurar una salida, como se muestra aquí:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Ejemplo: Configurar un valor

Puede usar el comando `set-output` en el flujo de trabajo para establecer el mismo valor:

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

{% endif %}

La siguiente tabla muestra qué funciones del toolkit se encuentran disponibles dentro de un flujo de trabajo:

| Funcion del Toolkit | Comando equivalente del flujo de trabajo |
| ----------------- |  ------------- |
| `core.addPath`    | Accesible mediante el archivo de entorno `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Accesible mediante el archivo de entorno `GITHUB_ENV` |
| `core.getInput`   | Accesible mediante la variable de entorno `INPUT_{NAME}` |
| `core.getState`   | Accesible mediante la variable de entorno `STATE_{NAME}` |
| `core.isDebug`    |  Accesible mediante la variable de entorno `RUNNER_DEBUG` |
{%- ifversion actions-job-summaries %} | `core.summary` | Accesible mediante el archivo de entorno `GITHUB_STEP_SUMMARY` | {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %}Accesible mediante el archivo de entorno `GITHUB_STATE`{% else %}`save-state`{% endif %} | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Se usa como acceso directo de `::error` y `exit 1` | | `core.setOutput`  | {% ifversion actions-save-state-set-output-envs %}Accesible mediante el archivo de entorno `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Configurar un parámetro de salida

Establece un parámetro de salida de la acción.

```{:copy}
::set-output name={name}::{value}
```

Opcionalmente, también puedes declarar parámetros de salida en el archivo de metadatos de una acción. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)".

Para escapar cadenas multilínea para establecer un parámetro de salida, crea una variable de entorno y úsala en un comando de flujo de trabajo. Para obtener más información, consulta "[Configuración de una variable de entorno](#setting-an-environment-variable)".

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

{% endpowershell %} {% endif %}

## Agregar un mensaje de depuración

Imprime un mensaje de depuración en el registro. Debe crear un secreto denominado `ACTIONS_STEP_DEBUG` con el valor `true` para ver los mensajes de depuración establecidos por este comando en el registro. Para más información, vea "[Habilitación del registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging)".

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

Crea un grupo expansible en la bitácora. Para crear un grupo, use el comando `group` y especifique `title`. Todo lo que imprima en el registro entre los comandos `group` y `endgroup` se anida dentro de una entrada expandible en el registro.

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

El enmascaramiento de un valor impide que una cadena o variable se imprima en el registro. Cada palabra enmascarada separada por un espacio en blanco se reemplaza con el carácter `*`. Puede usar una variable de entorno o una cadena para el valor `value` de la máscara. Al enmascarar un valor, se trata como un secreto y se oculta en el ejecutor. Por ejemplo, después de enmascarar un valor, no podrá establecerlo como salida.

### Ejemplo: Enmascarar una secuencia

Al imprimir `"Mona The Octocat"` en el registro, verá `"***"`.

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

{% warning %}

**Advertencia:** asegúrate de registrar el secreto con "add-mask" antes de generarlo en los registros de compilación o usarlo en cualquier otro comando de flujo de trabajo.

{% endwarning %}

### Ejemplo: Enmascarar una variable de ambiente

Al imprimir la variable `MY_NAME` o el valor `"Mona The Octocat"` en el registro, verá `"***"` en lugar de `"Mona The Octocat"`.

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

Deja de procesar cualquier comando de flujo de trabajo. Este comando especial te permite registrar lo que sea sin ejecutar accidentalmente un comando de flujo de trabajo. Por ejemplo, podrías dejar de registrar para producir un script completo que tenga comentarios.

```{:copy}
::stop-commands::{endtoken}
```

Para detener el procesamiento de los comandos de flujo de trabajo, pase un token único a `stop-commands`. Para resumir los comandos de flujo de trabajo de procesamiento, pasa el mismo token que utilizaste para detener los comandos de flujo de trabajo.

{% warning %}

**Advertencia:** Asegúrese de que el token que usa se genera aleatoriamente y es único para cada ejecución.

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

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Hacer eco en las salidas de comando

Habilita o inhabilita el hacer eco en los comandos de los flujos de trabajo. Por ejemplo, si usa el comando `set-output` en un flujo de trabajo, establece un parámetro de salida pero el registro de la ejecución de flujo de trabajo no muestra el propio comando. Si habilita el eco de comandos, el registro muestra el comando, como `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

El eco de comando se encuentra inhabilitado predeterminadamente. Sin embargo, los comandos de flujo de trabajo hacen eco si existen errores para procesarlos.

Los comandos `add-mask`, `debug`, `warning` y `error` no admiten el eco, porque sus salidas ya se han reproducido en el registro.

También puede habilitar el eco de comandos globalmente si activa el registro de depuración de pasos mediante el secreto `ACTIONS_STEP_DEBUG`. Para más información, vea "[Habilitación del registro de depuración](/actions/managing-workflow-runs/enabling-debug-logging)". Por el contrario, el comando de flujo de trabajo `echo` permite habilitar el eco de comandos en un nivel más granular, en vez de habilitarlo para cada flujo de trabajo en un repositorio.

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

Solo los segundos comandos de flujo de trabajo `set-output` y `echo` se incluyen en el registro, porque el eco de comandos solo se ha habilitado al ejecutarlos. Aunque no siempre hace eco, el parámetro de salida se configura en todos los casos.
 
{% endif %}

## Enviar valores a las acciones pre y post

{% ifversion actions-save-state-set-output-envs %} Puedes crear variables de entorno para compartirlas con las acciones `pre:` o `post:` del flujo de trabajo, escribiendo para ello en el archivo ubicado en `GITHUB_STATE`.{% else %}Puedes usar el comando `save-state` para crear variables de entorno para compartirlas con las acciones `pre:` o `post:` del flujo de trabajo{% endif %}. Por ejemplo, puede crear un archivo con la acción `pre:`, pasar la ubicación del archivo a la acción `main:` y, después, usar la acción `post:` para eliminar el archivo. Como alternativa, podría crear un archivo con la acción `main:`, pasar la ubicación del archivo a la acción `post:` y también usar la acción `post:` para eliminar el archivo.

Si tienes varias acciones `pre:` o `post:`, solo podrás acceder al valor guardado en la acción donde {% ifversion actions-save-state-set-output-envs %}se escribió en `GITHUB_STATE`{% else %}se usó `save-state`{% endif %}. Para más información sobre la acción `post:`, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)".

{% ifversion actions-save-state-set-output-envs %}El archivo `GITHUB_STATE` solo está disponible dentro de una acción{% else %}El comando `save-state` solo se puede ejecutar dentro de una acción y no está disponible para los archivos YAML{% endif %}. El valor guardado se almacena como un valor de entorno con el prefijo `STATE_`.

{% ifversion actions-save-state-set-output-envs %} En este ejemplo se usa JavaScript para escribir en el archivo `GITHUB_STATE`. La variable de entorno resultante se denomina `STATE_processID` con el valor de `12345`:

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} En este ejemplo se usa JavaScript para ejecutar el comando `save-state`. La variable de entorno resultante se denomina `STATE_processID` con el valor de `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

Después, la variable `STATE_processID` está disponible exclusivamente para el script de limpieza que se ejecuta en la acción `main`. Este ejemplo se ejecuta en `main` y usa JavaScript para mostrar el valor asignado a la variable de entorno `STATE_processID`:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Archivos de ambiente

Durante la ejecución de un flujo de trabajo, el ejecutor genera archivos temporales que pueden utilizarse para llevar a cabo ciertas acciones. La ruta a estos archivos se expone a través de variables de ambiente. Necesitarás utilizar codificación UTF-8 cuando escribas en estos archivos para garantizar el procesamiento adecuado de los comandos. Se pueden escribir varios comandos en el mismo archivo, separados por líneas nuevas.

La mayoría de los comandos de los ejemplos siguientes usan comillas dobles para las cadenas de eco, que intentarán interpolar caracteres como `$` para nombres de variables de shell. Para usar siempre valores literales en cadenas entre comillas, puedes usar comillas simples en su lugar.

{% powershell %}

{% note %}

**Nota:** En las versiones 5.1 y posteriores de PowerShell (`shell: powershell`) no se usa UTF-8 de forma predeterminada, por lo que debe especificar la codificación UTF-8. Por ejemplo:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

En las versiones 6 y superiores de PowerShell Core (`shell: pwsh`) se usa UTF-8 de forma predeterminada. Por ejemplo:

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

## Configuración de una variable de entorno

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

Puede hacer que una variable de entorno esté disponible en cualquier paso posterior de un trabajo de un flujo de trabajo si define o actualiza la variable de entorno, y lo escribe en el archivo de entorno `GITHUB_ENV`. El paso que crea o actualiza la variable de ambiente no tiene acceso al valor nuevo, pero todos los pasos subsecuentes en un job tendrán acceso. Los nombres de las variables de ambiente distinguen entre mayúsculas y minúsculas y puedes incluir signos de puntuación. Para más información, vea "[Variables de entorno](/actions/learn-github-actions/environment-variables)".

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

{% warning %}

**Advertencia:** Asegúrate de que el delimitador que usas se genera aleatoriamente y es único para cada ejecución. Para más información, consulta "[Descripción del riesgo de las inyecciones de scripts](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)".

{% endwarning %}

#### Ejemplo

En este ejemplo se usa `EOF` como delimitador y se establece la variable de entorno `JSON_RESPONSE` en el valor de la respuesta `curl`.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.com >> $GITHUB_ENV
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
      (Invoke-WebRequest -Uri "https://example.com").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## Configurar un parámetro de salida

Establece el parámetro de salida de un paso. Ten en cuenta en el paso hay que definir un `id` para recuperar el valor de salida posteriormente.

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### Ejemplo

{% bash %}

En este ejemplo se muestra cómo establecer el parámetro de salida `SELECTED_COLOR` y recuperarlo posteriormente:

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} En este ejemplo se muestra cómo establecer el parámetro de salida `SELECTED_COLOR` y recuperarlo posteriormente:

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## Adición de un resumen de trabajos

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

Puedes establecer Markdown personalizado para cada trabajo de modo que se muestre en la página de resumen de una ejecución de flujo de trabajo. Puedes usar resúmenes de trabajos para mostrar y agrupar contenido único, como resúmenes de resultados de pruebas, de modo que alguien que vea el resultado de una ejecución de flujo de trabajo no necesite ir a los registros para ver información importante relacionada con la ejecución, como errores.

Los resúmenes de trabajos admiten [Markdown de tipo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/) y puedes agregar el contenido de Markdown para un paso al archivo de entorno `GITHUB_STEP_SUMMARY`. `GITHUB_STEP_SUMMARY` es único para cada paso de un trabajo. Para obtener más información sobre el archivo por paso al que hace referencia `GITHUB_STEP_SUMMARY`, consulta "[Archivos de entorno](#environment-files)".

Cuando un trabajo finaliza, los resúmenes de todos los pasos de un trabajo se agrupan en un único resumen de trabajo y se muestran en la página resumen de ejecución del flujo de trabajo. Si varios trabajos generan resúmenes, estos se ordenan según la hora de finalización del trabajo.

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

![Ejemplo de resumen de Markdown](/assets/images/actions-job-summary-simple-example.png)

### Contenido de Markdown multilínea

En el caso de contenido de Markdown multilínea, puedes usar `>>` para anexar continuamente contenido al paso actual. Con cada operación de anexión, se agrega automáticamente un carácter de nueva línea.

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

### Sobrescritura de resúmenes de trabajos

Para borrar todo el contenido del paso actual, puedes usar `>` para sobrescribir cualquier contenido agregado anteriormente.

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

### Eliminación de resúmenes de trabajos

Para quitar completamente un resumen del paso actual, se puede eliminar el archivo al que hace referencia `GITHUB_STEP_SUMMARY`.

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

Una vez que se ha completado un paso, se cargan los resúmenes de trabajo y los pasos posteriores no pueden modificar el contenido de Markdown cargado anteriormente. Los resúmenes enmascaran automáticamente los secretos que podrían haberse agregado de forma accidental. Si un resumen de trabajo contiene información confidencial que se debe eliminar, puedes eliminar toda la ejecución del flujo de trabajo para quitar todos sus resúmenes de trabajo. Para obtener más información, consulta "[Eliminación de una ejecución de flujo de trabajo](/actions/managing-workflow-runs/deleting-a-workflow-run)".

### Aislamiento y límites de pasos

Los resúmenes de trabajo están aislados entre los pasos y cada paso está restringido a un tamaño máximo de 1 MiB. Se aplica aislamiento entre los pasos para que el Markdown que podría tener un formato incorrecto en un paso no pueda interrumpir la representación de Markdown para los pasos posteriores. Si se agrega más de 1 MiB de contenido a un paso, se producirá un error en la carga del paso y se creará una anotación de error. Los errores de carga de resúmenes de trabajos no afectan al estado general de un paso o un trabajo. Se muestra un máximo de 20 resúmenes de trabajos de los pasos por trabajo.

{% endif %}

## Agregar una ruta de sistema

Antepone un directorio a la variable del sistema `PATH` y hace que esté disponible automáticamente para todas las acciones posteriores en el trabajo actual; la acción que está actualmente en ejecución no puede acceder a la variable de ruta actualizada. A fin de ver las rutas definidas actualmente para el trabajo, puede usar `echo "$PATH"` en un paso o una acción.

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

En este ejemplo se muestra cómo agregar el directorio de usuario `$HOME/.local/bin` a `PATH`:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

En este ejemplo se muestra cómo agregar el directorio de usuario `$env:HOMEPATH/.local/bin` a `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
