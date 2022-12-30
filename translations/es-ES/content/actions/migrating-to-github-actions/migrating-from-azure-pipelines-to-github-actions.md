---
title: Migrar de Azure Pipelines a GitHub Actions
intro: '{% data variables.product.prodname_actions %} y Azure Pipelines comparten varias configuraciones similares, lo cual hace que migrar a {% data variables.product.prodname_actions %} sea relativamente sencillo.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Azure Pipelines
  - Migration
  - CI
  - CD
shortTitle: Migrate from Azure Pipelines
ms.openlocfilehash: 5890afb4c0f0e8eae6b5981a39e68f272bff7440
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121306'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Tanto Azure Pipelines como {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que compilan, prueban, publican, lanzan y despliegan código automáticamente. Azure Pipelines y {% data variables.product.prodname_actions %} comparten algunas similaridades en la configuración del flujo de trabajo:

- Los archivos de configuración de flujo de trabajo están escritas en YAML y se almacenan en el repositorio del código.
- Los flujos de trabajo incluyen uno o más jobs.
- Los jobs incluyen uno o más pasos o comandos individuales.
- Los pasos o tareas pueden reutilizarse y compartirse con la comunidad.

Para más información, vea "[Conceptos básicos de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

## Diferencias clave

Cuando migres desde Azure Pipelines, considera las siguientes diferencias:

- Azure Pipelines admite un _editor clásico_ heredado, que le permite definir la configuración de CI en un editor de GUI en lugar de crear la definición de canalización en un archivo YAML. {% data variables.product.prodname_actions %} utiliza archivos YAML para definir flujos de trabajo y no es compatible con un editor gráfico.
- Azure Pipelines te permite omitir parte de la estructura en las definiciones de jobs. Por ejemplo, si solo tienes un job, no necesitas definirlo y solo necesitas definir sus pasos. {% data variables.product.prodname_actions %} requiere una configuración específica y no se puede omitir la estructura de YAML.
- Azure Pipelines admite _etapas_ definidas en el archivo YAML, que se pueden usar para crear flujos de trabajo de implementación. {% data variables.product.prodname_actions %} necesita que separes las etapas en archivos de flujo de trabajo de YAML diferentes.
- Azure Pipelines instalado localmente compila agentes que pueden seleccionarse con capacidades. Los ejecutores auto-hospedados de {% data variables.product.prodname_actions %} pueden seleccionarse con etiquetas.

## Migrar jobs y pasos

Los jobs y los pasos en Azure Pipelines son muy similares a aquellos en {% data variables.product.prodname_actions %}. En ambos sistemas, los jobs tienen las siguientes características:

* Los jobs contienen una serie de pasos que se ejecutan en secuencia.
* Los jobs se ejecutan en máquinas virtuales separadas o en contenedores separados.
* Los jobs se ejecutan en paralelo predeterminadamente, pero pueden configurarse para ejecutarse en secuencia.

## Migrar los pasos de un script

Puedes ejecutar un script o comando de shell como un paso en un flujo de trabajo. En Azure Pipelines, se pueden especificar pasos de script mediante la clave `script`, o bien con las claves `bash`, `powershell` o `pwsh`. Los scripts también se pueden especificar como entrada para la [tarea de Bash](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) o la [tarea de PowerShell](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops).

En {% data variables.product.prodname_actions %}, todos los scripts se especifican con la clave `run`. Para seleccionar un shell determinado, puede especificar la clave `shell` al proporcionar el script. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: scripts
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in the default shell"
      - bash: echo "This step runs in bash"
      - pwsh: Write-Host "This step runs in PowerShell Core"
      - task: PowerShell@2
        inputs:
          script: Write-Host "This step runs in PowerShell"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  scripts:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in the default shell"
      - run: echo "This step runs in bash"
        shell: bash
      - run: Write-Host "This step runs in PowerShell Core"
        shell: pwsh
      - run: Write-Host "This step runs in PowerShell"
        shell: powershell
```
{% endraw %}
</td>
</tr>
</table>

## Diferencias en el manejo de errores de los scripts

En Azure Pipelines, los scripts se pueden configurar para generar un error si la salida se envía a `stderr`. {% data variables.product.prodname_actions %} no es compatible con esta configuración.

{% data variables.product.prodname_actions %} configura shells para que "fallen rápidamente" cuando sea posible, lo cual detiene el script inmediatamente si alguno de los comandos en éste sale con un código de error. En contraste, Azure Pipelines requiere de una configuración explícita para salir inmediatamente en caso de error. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

## Diferencias con el shell predeterminado de Windows

En Azure Pipelines, el shell predeterminado para los scripts en plataformas Windows es el shell de comandos (_cmd.exe_). En {% data variables.product.prodname_actions %}, el shell predeterminado para los scripts en plataformas Windows es PowerShell. PowerShell tiene varias diferencias en comandos integrados, expansión de variables y control de flujo.

Si estás utilizando un comando simple, es posible que puedas ejecutar un script de Símbolo de Sistema en PowerShell sin tener que realizar cambios. Pero en la mayoría de los casos, tendrás que actualizar tu script con la sintaxis de PowerShell o dar la instrucción a {% data variables.product.prodname_actions %} para ejecutar el script con el Símbolo de Sistema en vez de con PowerShell. Puede hacerlo si especifica `shell` como `cmd`.

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_command
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in CMD on Windows by default"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_command:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in PowerShell on Windows by default"
      - run: echo "This step runs in CMD on Windows explicitly"
        shell: cmd
```
{% endraw %}
</td>
</tr>
</table>

Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)".

## Migrar la sintaxis de expresión y los condicionales

Tanto Azure Pipelines como {% data variables.product.prodname_actions %} pueden ejecutar pasos condicionalmente. En Azure Pipelines, las expresiones condicionales se especifican mediante la clave `condition`. En {% data variables.product.prodname_actions %}, las expresiones condicionales se especifican mediante la clave `if`.

Azure Pipelines utiliza funciones dentro de las expresiones para ejecutar los pasos condicionalmente. En contraste, {% data variables.product.prodname_actions %} utiliza una notación infija. Por ejemplo, debe reemplazar la función `eq` en Azure Pipelines por el operador `==` en {% data variables.product.prodname_actions %}.

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: conditional
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This step runs with str equals 'ABC' and num equals 123"
        condition: and(eq(variables.str, 'ABC'), eq(variables.num, 123))
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: ${{ env.str == 'ABC' && env.num == 123 }}
```
{% endraw %}
</td>
</tr>
</table>

Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

## Dependencias entre jobs

Tanto Azure Pipelines como {% data variables.product.prodname_actions %} te permiten configurar dependencias par un job. En ambos sistemas, los jobs se ejecutan en paralelo predeterminadamente, pero las dependencias de estos pueden especificarse explícitamente. En Azure Pipelines, esto se hace con la clave `dependsOn`. En {% data variables.product.prodname_actions %}, esto se hace con la clave `needs`.

A continuación encontrarás un ejemplo de la sintaxis para cada sistema. Los flujos de trabajo inician un primer trabajo denominado `initial` y, cuando se completa, se ejecutarán dos trabajos denominados `fanout1` y `fanout2`. Por último, cuando se completan esos trabajos, se ejecutará el trabajo `fanin`.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: initial
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This job will be run first."
  - job: fanout1
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout2."
  - job: fanout2
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout1."
  - job: fanin:
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: [fanout1, fanout2]
    steps:
      - script: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  initial:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."
  fanout1:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout2."
  fanout2:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout1."
  fanin:
    runs-on: ubuntu-latest
    needs: [fanout1, fanout2]
    steps:
      - run: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
</tr>
</table>

Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

## Migrar las tareas a acciones

Azure Pipelines usa _tareas_, que son componentes de aplicación que se pueden reutilizar en varios flujos de trabajo. {% data variables.product.prodname_actions %} usa _acciones_, que se pueden utilizar para realizar tareas y personalizar el flujo de trabajo. En ambos sistemas, puedes especificar el nombre de la tarea o acción a ejecutar junto con cualquier entrada requerida como pares de clave/valor.

Aquí se muestra un ejemplo de la sintaxis para cada sistema:

<table>
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_python
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.7'
          architecture: 'x64'
      - script: python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

Puede buscar acciones para usarlas en el flujo de trabajo en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), o bien puede crear acciones propias. Para más información, vea "[Creación de acciones](/actions/creating-actions)".
