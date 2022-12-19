---
title: Sintaxis del flujo de trabajo para Acciones de GitHub
shortTitle: Workflow syntax
intro: Un flujo de trabajo es un proceso automatizado configurable formado por uno o más trabajos. Debes crear un archivo YAML para definir tu configuración de flujo de trabajo.
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: ca5a79fbaeeafa474283cbabd67108cb22b6f985
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192052'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la sintaxis de YAML para flujos de trabajo

Los archivos de flujo de trabajo usan la sintaxis de YAML y deben tener una extensión de archivo `.yml` o `.yaml`. {% data reusables.actions.learn-more-about-yaml %}

Debe almacenar los archivos de flujo de trabajo en el directorio `.github/workflows` del repositorio.

## `name`

Nombre del flujo de trabajo. {% data variables.product.prodname_dotcom %} muestra los nombres de los flujos de trabajo en la pestaña "Acciones" del repositorio. Si omite `name`, {% data variables.product.prodname_dotcom %} lo establece en la ruta de acceso del archivo de flujo de trabajo relativa a la raíz del repositorio.

{% ifversion actions-run-name %}
## `run-name`

Nombre de las ejecuciones de flujo de trabajo generadas a partir del flujo de trabajo. {% data variables.product.prodname_dotcom %} muestra el nombre de ejecución del flujo de trabajo en la lista de ejecuciones de flujo de trabajo en la pestaña "Acciones" del repositorio. Si `run-name` se omite o si es solo un espacio en blanco, el nombre de la ejecución se establece en la información específica del evento para la ejecución del flujo de trabajo. Por ejemplo, para un flujo de trabajo que desencadena un evento `push` o `pull_request`, se establece como mensaje de confirmación.

Este valor puede incluir expresiones y puede hacer referencia a los contextos [`github`](/actions/learn-github-actions/contexts#github-context) y [`inputs`](/actions/learn-github-actions/contexts#inputs-context).

### Ejemplo

{% raw %}
```yaml
run-name: Deploy to ${{ inputs.deploy_target }} by @${{ github.actor }}
```
{% endraw %} {% endif %}

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Use `on.workflow_call` para definir las entradas y salidas de un flujo de trabajo reutilizable. También puedes mapear los secretos que están disponibles para el flujo de trabajo llamado. Para más información sobre los flujos de trabajo reutilizables, vea "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows)".

### `on.workflow_call.inputs`

Al usar la palabra clave `workflow_call`, puede especificar opcionalmente las entradas que se pasan al flujo de trabajo llamado desde el flujo de trabajo que realiza la llamada. Para más información sobre la palabra clave `workflow_call`, vea "[Eventos que desencadenan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)".

Además de los parámetros de entrada estándar que están disponibles, `on.workflow_call.inputs` necesita un parámetro `type`. Para más información, vea [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

Si no se establece un parámetro `default`, el valor predeterminado de la entrada es `false` para un valor booleano, `0` para un número y `""` para una cadena.

Dentro del flujo de trabajo llamado, puede usar el contexto `inputs` para hacer referencia a una entrada.

Si un flujo de trabajo llamante pasa una entrada que no se especifica en el flujo llamado, dará un error como resultado.

#### Ejemplo

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

Para más información, vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

#### `on.workflow_call.inputs.<input_id>.type`

Obligatorio si se define la entrada para la palabra clave `on.workflow_call`. El valor de este parámetro es una secuencia que especifica el tipo de datos de la entrada. Debe ser uno de los siguientes: `boolean`, `number` o `string`.

### `on.workflow_call.outputs`

Un mapa de salidas para un flujo de trabajo llamado. Las salidas de flujo de trabajo llamadas se encuentran disponibles en todos los jobs en línea descendente en el flujo de trabajo llamante. Cada salida tiene un identificador, un valor `description,` opcional y un valor `value.`. `value` se debe establecer en el valor de una salida de un trabajo dentro del flujo de trabajo llamado.

En el ejemplo siguiente, se definen dos salidas para este flujo de trabajo reutilizable: `workflow_output1` y `workflow_output2`. Se asignan a las salidas `job_output1` y `job_output2`, las dos de un trabajo denominado `my_job`.

#### Ejemplo

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

Para obtener información sobre cómo hacer referencia a una salida de trabajo, vea [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). Para más información, vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

### `on.workflow_call.secrets`

Un mapa de los secretos que pueden utilizarse en el flujo de trabajo llamado.

Dentro del flujo de trabajo llamado, puede usar el contexto `secrets` para hacer referencia a un secreto.

Si un flujo de trabajo llamante pasa un secreto que no se especifica en el flujo de trabajo llamado, esto da un error como resultado.

#### Ejemplo

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

Un identificador de secuencia para asociar con el secreto.

#### `on.workflow_call.secrets.<secret_id>.required`

Un booleano que especifica si el secreto debe suministrarse.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

Objeto `map` de variables de entorno disponibles para los pasos de todos los trabajos del flujo de trabajo. También puedes configurar variables de ambiente que solo estén disponibles para los pasos en un solo job o en un solo paso. Para más información, vea [`jobs.<job_id>.env`](#jobsjob_idenv) y [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

Las variables del mapa `env` no se pueden definir en relación a otras variables del mapa.

{% data reusables.repositories.actions-env-var-note %}

### Ejemplo

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

Objeto `map` de las variables de entorno disponibles para todos los pasos del trabajo. También puedes establecer las variables de ambiente para todo el flujo de trabajo o para un paso en particular. Para más información, vea [`env`](#env) y [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Ejemplo

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

Un trabajo contiene una secuencia de tareas denominada `steps`. Los pasos pueden ejecutar comandos, tareas de configuración o una acción en tu repositorio, un repositorio público o una acción publicada en un registro de Docker. No todos los pasos ejecutan acciones, pero todas las acciones se ejecutan como un paso. Cada paso se ejecuta en su propio proceso en el ambiente ejecutor y tiene acceso al espacio de trabajo y al sistema de archivos. Ya que los pasos se ejecutan en su propio proceso, los cambios a las variables de ambiente no se preservan entre pasos. {% data variables.product.prodname_dotcom %} proporciona pasos integrados para configurar y completar un job.

Puedes ejecutar un número de pasos ilimitado siempre que estés dentro de los límites de uso del flujo de trabajo. Para más información, vea {% ifversion fpt or ghec or ghes %}"[Límites de uso y facturación](/actions/reference/usage-limits-billing-and-administration)" para ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% endif %}"[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para los límites de uso del ejecutor autohospedado.{% elsif ghae %}".{% endif %}

### Ejemplo

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

Un identificador único para el paso. Puede usar `id` para hacer referencia al paso en los contextos. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts)".

### `jobs.<job_id>.steps[*].if`

Puede usar el condicional `if` para impedir que se ejecute un paso si no se cumple una condición. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

#### Ejemplo: Utilizando contextos

 Este paso solo se ejecuta cuando el tipo de evento es `pull_request` y la acción del evento es `unassigned`.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Ejemplo: Utilizando funciones de verificación de estado

El objeto `my backup step` solo se ejecuta cuando se produce un error en el paso anterior de un trabajo. Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions#status-check-functions)".

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Ejemplo: Utilizar secretos

No se puede hacer referencia a los secretos directamente en las condicionales `if:`. En vez de esto, considera configurar secretos como variables de ambiente a nivel de jobs y luego referencia dichas variables para ejecutar pasos de forma condicional en el job.

Si no se ha establecido un secreto, el valor devuelto de una expresión que hace referencia al secreto (como {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} en el ejemplo) será una cadena vacía.

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

Para más información, vea "[Disponibilidad de contextos](/actions/learn-github-actions/contexts#context-availability)" y "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

### `jobs.<job_id>.steps[*].name`

Un nombre para que tu paso se muestre en {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Selecciona una acción a ejecutar como parte de un paso en tu trabajo. Una acción es una unidad de código reutilizable. Puede usar una acción definida en el mismo repositorio que el flujo de trabajo, un repositorio público o en una [imagen de contenedor de Docker publicada](https://hub.docker.com/).

Te recomendamos encarecidamente que incluyas la versión de la acción que estás utilizando. Para ello, especifica una referencia de Git, SHA o una etiqueta de Docker. Si no especificas una versión, podrías interrumpir tus flujos de trabajo o provocar un comportamiento inesperado cuando el propietario de la acción publique una actualización.
- El uso del SHA de confirmación de una versión de acción lanzada es lo más seguro para la estabilidad y la seguridad.
- Si la acción publica etiquetas de versiones principales, debes esperar recibir correcciones críticas y parches de seguridad a la vez que se conserva la compatibilidad. Ten en cuenta que este comportamiento queda a discreción del autor de la acción.
- Puede ser conveniente utilizar la rama predeterminada de una acciòn, pero si alguien lanza una versiòn principal nueva con un cambio importante, tu flujo de trabajo podrìa fallar.

Algunas acciones necesitan entradas que debe establecer mediante la palabra clave [`with`](#jobsjob_idstepswith). Revisa el archivo README de la acción para determinar las entradas requeridas.

Las acciones son archivos de JavaScript o contenedores de Docker. Si la acción que estás usando es un contenedor de Docker, debes ejecutar el job en un ambiente Linux. Para obtener información, vea [`runs-on`](#jobsjob_idruns-on).

#### Ejemplo: Utilizando acciones versionadas

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### Ejemplo: Utilizando una acción pública

`{owner}/{repo}@{ref}`

Puedes especificar una rama, ref, o SHA en un repositorio público de {% data variables.product.prodname_dotcom %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### Ejemplo: Utilizando una acción pública en un subdirectorio

`{owner}/{repo}/{path}@{ref}`

Un subdirectorio en un repositorio público de {% data variables.product.prodname_dotcom %} en una rama, ref o SHA específicos.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Ejemplo: Utilizando una acción en el mismo repositorio que el flujo de trabajo

`./path/to/dir`

La ruta al directorio que contiene la acción en el repositorio de tu flujo de trabajo. Debes revisar tu repositorio antes de usar la acción.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Ejemplo: Utilizando una acción de Docker Hub

`docker://{image}:{tag}`

Una imagen de Docker publicada en [Docker Hub](https://hub.docker.com/).

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Ejemplo: Utilizando el {% data variables.product.prodname_container_registry %} del {% data variables.product.prodname_registry %}

`docker://{host}/{image}:{tag}`

Una imagen de Docker en el {% data variables.product.prodname_container_registry %} del {% data variables.product.prodname_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Ejemplo: Utilizando una acción del registro público de Docker

`docker://{host}/{image}:{tag}`

Una imagen de Docker en un registro público. En este ejemplo se usa Google Container Registry en `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Ejemplo: Utilizando una acción dentro de un repositorio privado diferente al del flujo de trabajo

Tu flujo de trabajo debe registrar el repositorio privado y referenciar la acción de forma local. Genera un {% data variables.product.pat_generic %} y agrega el token como un secreto cifrado. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)."

Reemplace `PERSONAL_ACCESS_TOKEN` en el ejemplo por el nombre del secreto.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

Ejecuta programas de la línea de comandos usando el shell del sistema operativo. Si no proporciona un valor `name`, el nombre del paso tendrá como valor predeterminado el texto especificado en el comando `run`.

Predeterminadamente, los comandos se ejecutan utilizando shells diferentes a los de ingreso. Puedes elegir un shell diferente y personalizar el que utilizaste para ejecutar los comandos. Para más información, vea [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Cada palabra clave `run` representa un nuevo proceso y shell en el entorno del ejecutor. Cuando proporcionas comandos de varias líneas, cada línea se ejecuta en el mismo shell. Por ejemplo:

* Comando de una sola línea:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Comando de varias líneas:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

Con la palabra clave `working-directory`, puede especificar el directorio de trabajo desde el que ejecutar el comando.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

Puede invalidar los valores del shell predeterminado en el sistema operativo del ejecutor mediante la palabra clave `shell`. Puede usar palabras clave `shell` integradas, o bien puede definir un conjunto personalizado de opciones de shell. El comando de shell que se ejecuta internamente ejecuta un archivo temporal que contiene los comandos especificados en la palabra clave `run`.

| Plataforma compatible | Parámetro `shell` | Descripción | Comando ejecutado interamente |
|--------------------|-------------------|-------------|------------------------|
| Linux/macOS | unspecified | El shell predeterminado en plataformas que no son de Windows. Ten en cuenta que esto ejecuta un comando diferente a cuando `bash` se especifica explícitamente. Si `bash` no se encuentra en la ruta de acceso, se trata como `sh`. | `bash -e {0}` |
| Todo | `bash` | El shell predeterminado en plataformas que no son de Windows con una reserva en `sh`. Al especificar un bash shell en Windows, se usa el bash shell incluido con Git para Windows. | `bash --noprofile --norc -eo pipefail {0}` |
| Todo | `pwsh` | Powershell Core. {% data variables.product.prodname_dotcom %} agrega la extensión `.ps1` al nombre del script. | `pwsh -command ". '{0}'"` |
| Todo | `python` | Ejecuta el comando python. | `python {0}` |
| Linux/macOS | `sh` | El comportamiento de reserva para plataformas que no son Windows si no se proporciona un shell y `bash` no se encuentra en la ruta. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} agrega la extensión `.cmd` al nombre del script y lo sustituye por `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | Este es el shell predeterminado que se usa en Windows. Powershell Core. {% data variables.product.prodname_dotcom %} agrega la extensión `.ps1` al nombre del script. Si el ejecutor autohospedado de Windows no tiene _PowerShell Core_ instalado, en su lugar se usa _PowerShell Desktop_.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | El PowerShell Desktop. {% data variables.product.prodname_dotcom %} agrega la extensión `.ps1` al nombre del script. | `powershell -command ". '{0}'"`. |

#### Ejemplo: Ejecutando un script utilizando bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Ejemplo: Ejecución de un script con Windows `cmd`

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Ejemplo: Ejecutando un script utilizando PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Ejemplo: Utilizar PowerShell Desktop para ejecutar un script

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Ejemplo: Ejecutando un script de python

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Shell personalizado

Puede establecer el valor `shell` en una cadena de plantilla mediante `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interpreta la primera palabra delimitada por espacios en blanco de la cadena como el comando e inserta el nombre del archivo para el script temporal en `{0}`.

Por ejemplo:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

El comando que se usa, `perl` en este ejemplo, debe estar instalado en el ejecutor.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} Para obtener información sobre el software incluido en los ejecutores hospedados en GitHub, vea "[Especificaciones para ejecutores hospedados en GitHub](/actions/reference/specifications-for-github-hosted-runners#supported-software)".
{% endif %}

#### Códigos de salida y preferencia de acción de error

Para palabras clave shell incorporadas, brindamos los siguientes valores predeterminados accionados por los ejecutadores alojados por {% data variables.product.prodname_dotcom %}. Deberías usar estos lineamientos al ejecutar scripts de shell.

- `bash`/`sh`:
  - Comportamiento con respuesta rápida a errores mediante `set -eo pipefail`: esta opción se establece cuando `shell: bash` se especifica de manera explícita. No se aplica de manera predeterminada.
  - Puedes controlar completamente los parámetros del shell al proporcionar una cadena de plantilla a las opciones del shell. Por ejemplo, `bash {0}`.
  - Los shells tipo sh salen con el código de salida del último comando ejecutado en un script, que también es el comportamiento predeterminado para las acciones. El ejecutor informará el estado del paso como fallido o exitoso según este código de salida.

- `powershell`/`pwsh`
  - Comportamiento de falla rápida cuando sea posible. Para el shell integrado de `pwsh` y `powershell`, se antepondrá `$ErrorActionPreference = 'stop'` al contenido del script.
  - Se anexa `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` a los scripts de PowerShell para que los estados de acción reflejen el último código de salida del script.
  - Los usuarios siempre pueden optar por no usar el shell integrado y proporcionar una opción de shell personalizada como `pwsh -File {0}` o `powershell -Command "& '{0}'"`, según sea necesario.

- `cmd`
  - No parece haber una manera de optar por completo por un comportamiento de falla rápida que no sea escribir tu script para verificar cada código de error y responder en consecuencia. Debido a que en realidad no podemos proporcionar ese comportamiento por defecto, debes escribir este comportamiento en tu script.
  - `cmd.exe` saldrá con el nivel de error del último programa que ha ejecutado y devolverá el código de error al ejecutor. Este comportamiento es internamente coherente con el comportamiento predeterminado de `sh` y `pwsh` anterior, y es el `cmd.exe` predeterminado, por lo que este comportamiento permanece intacto.

### `jobs.<job_id>.steps[*].with`

Objeto `map` de los parámetros de entrada definidos por la acción. Cada parámetro de entrada es un par clave/valor. Los parámetros de entrada se establecen como variables de entorno. La variable utiliza el prefijo `INPUT_` se convierte en mayúsculas.

#### Ejemplo

Define los tres parámetros de entrada (`first_name`, `middle_name` y `last_name`) definidos por la acción `hello_world`. Estas variables de entrada serán accesibles para la acción `hello-world` como las variables de entorno `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` y `INPUT_LAST_NAME`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

### `jobs.<job_id>.steps[*].with.args`

Objeto `string` que define las entradas de un contenedor de Docker. {% data variables.product.prodname_dotcom %} pasa `args` al valor `ENTRYPOINT` del contenedor cuando se inicia. Este parámetro no admite un objeto `array of strings`.

#### Ejemplo

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args` se usan en lugar de la instrucción `CMD` en `Dockerfile`. Si usa `CMD` en `Dockerfile`, utilice las instrucciones ordenadas por preferencia:

1. En el documento se necesitaban argumentos en el archivo Léame de la acción y omitirlos de la instrucción `CMD`.
1. Use los valores predeterminados que permiten usar la acción sin especificar `args`.
1. Si la acción expone una marca `--help`, o algo similar, úsela como valor predeterminado para que la acción se documente de forma automática.

### `jobs.<job_id>.steps[*].with.entrypoint`

Invalida `ENTRYPOINT` de Docker en `Dockerfile`, o bien lo establece si todavía no se ha especificado uno. A diferencia de la instrucción `ENTRYPOINT` de Docker que tiene un formato de shell y archivo ejecutable, la palabra clave `entrypoint` solo acepta una cadena que define el archivo ejecutable que se va a ejecutar.

#### Ejemplo

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

La palabra clave `entrypoint` se debe usar con acciones de contenedor de Docker, pero también se puede utilizar con acciones de JavaScript que no definan ninguna entrada.

### `jobs.<job_id>.steps[*].env`

Establece variables de entorno para los pasos a utilizar en el entorno del ejecutor. También puedes establecer las variables de entorno para todo el flujo de trabajo o para una tarea. Para más información, vea [`env`](#env) y [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Es posible que las acciones públicas especifiquen las variables de entorno esperadas en el archivo README. Si va a establecer un secreto en una variable de entorno, debe hacerlo con el contexto `secrets`. Para más información, vea "[Uso de variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" y "[Contextos](/actions/learn-github-actions/contexts)".

#### Ejemplo

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

Impide que un trabajo falle cuando falla un paso. Establézcalo en `true` para permitir que un trabajo se supere cuando se produzca un error en este paso.

### `jobs.<job_id>.steps[*].timeout-minutes`

El número máximo de minutos para ejecutar el paso antes de terminar el proceso.

## `jobs.<job_id>.timeout-minutes`

La cantidad máxima de minutos para permitir que un trabajo se ejecute antes que {% data variables.product.prodname_dotcom %} lo cancele automáticamente. Predeterminado: 360

Si el tiempo de espera excede el límite de tiempo de ejecución del job para el ejecutor, dicho job se cancelará cuando se llegue al límite de tiempo de ejecución. Para más información sobre los límites de tiempo de ejecución de trabajos, vea {% ifversion fpt or ghec or ghes %}"[Límites de uso y facturación](/actions/reference/usage-limits-billing-and-administration#usage-limits)" para ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% endif %}"[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para los límites de uso del ejecutor autohospedado.{% elsif ghae %}".{% endif %}

{% note %}

**Nota:** {% data reusables.actions.github-token-expiration %} Para los ejecutores autohospedados, el token podría ser el factor de limitación si el tiempo de inactividad del trabajo es superior a 24 horas. Para más información sobre `GITHUB_TOKEN`, vea "[Acerca del secreto `GITHUB_TOKEN`](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)".

{% endnote %}

## `jobs.<job_id>.strategy`

Usa `jobs.<job_id>.strategy` para emplear una estrategia de matriz en los trabajos. {% data reusables.actions.jobs.about-matrix-strategy %} Para obtener más información, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Ejemplo: Uso de una matriz de una sola dimensión

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Ejemplo: Uso de una matriz de varias dimensiones

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Ejemplo: Uso de contextos para crear matrices

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Ejemplo: Expansión de configuraciones

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Ejemplo: Incorporación de configuraciones

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Previene que una ejecución de flujo de trabajo falle cuando un job falle. Establézcalo en `true` para permitir que se supere una ejecución de flujo de trabajo cuando se produce un error en este trabajo.

### Ejemplo: Previniendo un job de matriz específico que falle desde una ejecución de flujo de trabajo que también falle

Puedes permitir que ciertos jobs en una matriz de jobs fallen sin que la ejecución de flujo de trabajo falle. Por ejemplo, si solo quiere permitir que se produzca un error en un trabajo experimental con `node` establecido en `15` sin que se ejecute el flujo de trabajo.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-latest]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-latest
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

Se usa para hospedar contenedores de servicio para un trabajo en un flujo de trabajo. Los contenedores de servicio son útiles para crear bases de datos o servicios de caché como Redis. El ejecutor crea automáticamente una red Docker y administra el ciclo de vida de los contenedores de servicio.

Si configuras tu trabajo para que se ejecute en un contenedor, o si tu paso usa acciones del contenedor, no necesitas asignar puertos para acceder al servicio o a la acción. Docker expone automáticamente todos los puertos entre contenedores en la misma red de puente definida por el usuario de Docker. Puedes hacer referencia directamente al contenedor de servicio por su nombre de host. El nombre del host se correlaciona automáticamente con el nombre de la etiqueta que configuraste para el servicio en el flujo de trabajo.

Si configuras el trabajo para que se ejecute directamente en la máquina del ejecutor y tu paso no usa una acción de contenedor, debes asignar cualquier puerto del contenedor de servicio Docker que sea necesario para el host Docker (la máquina del ejecutor). Puedes acceder al contenedor de servicio utilizando host local y el puerto asignado.

Para más información sobre las diferencias entre los contenedores de servicios de red, vea "[Acerca de los contenedores de servicios](/actions/automating-your-workflow-with-github-actions/about-service-containers)".

### Ejemplo: Utilizando al host local

Este ejemplo crea dos servicios: nginx y Redis. Cuando especificas el puerto del host de Docker pero no el puerto del contenedor, el puerto del contenedor se asigna aleatoriamente a un puerto gratuito. {% data variables.product.prodname_dotcom %} establece el puerto de contenedor asignado en el contexto {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}. En este ejemplo, puede acceder a los puertos del contenedor de servicios mediante los contextos {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} y {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %}.

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

La imagen Docker para usar como el contenedor de servicio para ejecutar la acción. El valor puede ser el nombre de la imagen de Docker Hub o un nombre de registro.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### Ejemplo

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

Establece un valor `map` de variables de entorno en el contenedor de servicios.

### `jobs.<job_id>.services.<service_id>.ports`

Establece un valor `array` de puertos que se van a exponer en el contenedor de servicios.

### `jobs.<job_id>.services.<service_id>.volumes`

Establece un valor `array` de volúmenes para el contenedor de servicios. Puedes usar volúmenes para compartir datos entre servicios u otros pasos en un trabajo. Puedes especificar volúmenes Docker con nombre, volúmenes Docker anónimos o montajes de enlace en el host.

Para especificar un volumen, especifica la ruta de origen y destino:

`<source>:<destinationPath>`.

`<source>` es un nombre de volumen o una ruta absoluta en el equipo host y `<destinationPath>` es una ruta absoluta en el contenedor.

#### Ejemplo

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Opciones adicionales de recursos del contenedor Docker. Para obtener una lista de opciones, vea "[Opciones de `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)".

{% warning %}

**Advertencia:** No se admite la opción `--network`.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

La ubicación y versión de un archivo de flujo de trabajo reutilizable a ejecutar como un job. {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}Usa una de las siguientes sintaxis:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Ejemplo

{% data reusables.actions.uses-keyword-example %}

Para más información, vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

### `jobs.<job_id>.with`

Cuando se utiliza un trabajo para llamar a un flujo de trabajo reutilizable, puede usar `with` para proporcionar un mapa de entradas que se pasen al flujo de trabajo llamado.

Cualquier entrada que pases debe coincidir con las especificaciones de la entrada que se define en el flujo de trabajo llamado.

A diferencia de [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), las entradas que se pasan con `jobs.<job_id>.with` no están disponibles como variables de entorno en el flujo de trabajo llamado. En su lugar, puede hacer referencia a las entradas mediante el contexto `inputs`.

#### Ejemplo

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

Un par que consiste de un identificador de secuencias para la entrada y del valor de entrada. El identificador debe coincidir con el nombre de una entrada definida por [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) en el flujo de trabajo llamado. El tipo de datos del valor debe coincidir con el tipo definido por [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) en el flujo de trabajo llamado.

Contextos de expresión permitidos: `github` y `needs`.

### `jobs.<job_id>.secrets`

Cuando se utiliza un trabajo para llamar a un flujo de trabajo reutilizable, puede usar `secrets` para proporcionar un mapa de secretos que se pasen al flujo de trabajo llamado.

Cualquier secreto que pases debe coincidir con los nombres que se definen en el flujo de trabajo llamado.

#### Ejemplo

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}

### `jobs.<job_id>.secrets.inherit`

Usa la palabra clave `inherit` para pasar todos los secretos del flujo de trabajo que realiza la llamada al flujo de trabajo llamado. Esto incluye todos los secretos a los que tiene acceso el flujo de trabajo que realiza la llamada, es decir, los secretos de la organización, al repositorio y el entorno. La palabra clave `inherit` se puede usar para pasar secretos entre repositorios de la misma organización o entre organizaciones de la misma empresa.

#### Ejemplo

{% raw %}

```yaml
on:
  workflow_dispatch:

jobs:
  pass-secrets-to-workflow:
    uses: ./.github/workflows/called-workflow.yml
    secrets: inherit
```

```yaml
on:
  workflow_call:

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use a repo or org secret from the calling workflow.
        run: echo ${{ secrets.CALLING_WORKFLOW_SECRET }}
```

{% endraw %}

{%endif%}

### `jobs.<job_id>.secrets.<secret_id>`

Un par que consiste de un identificador de secuencias para el secreto y el valor de dicho secreto. El identificador debe coincidir con el nombre de un secreto definido por [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) en el flujo de trabajo llamado.

Contextos de expresión permitidos: `github`, `needs` y `secrets`.
{% endif %}

## Hoja de datos de patrones de filtro

Puedes usar caracteres especiales en los filtros de ruta, de rama y de etiqueta.

- `*`: coincide con cero o más caracteres, pero no coincide con el carácter `/`. Por ejemplo, `Octo*` coincide con `Octocat`.
- `**`: coincide con cero o más repeticiones de cualquier carácter.
- `?`: Coincide con cero o una repetición del carácter anterior.
- `+`: coincide con cero o más repeticiones del carácter anterior.
- `[]` coincide con un carácter que aparece en los corchetes o que se incluye en los rangos. Los rangos solo pueden incluir `a-z`, `A-Z`y `0-9`. Por ejemplo, el rango `[0-9a-z]` coincide con cualquier dígito o letra minúscula. Por ejemplo, `[CB]at` coincide con `Cat` o `Bat`, y `[1-2]00` coincide con `100` y `200`.
- `!`: al comienzo de un patrón hace que se nieguen los patrones positivos anteriores. No tiene ningún significado especial si no es el primer caracter.

Los caracteres `*`, `[` y `!` son caracteres especiales en YAML. Si inicia un patrón con `*`, `[` o `!`, debe incluirlo entre comillas. Además, si usas una [secuencia de flujo](https://yaml.org/spec/1.2.2/#flow-sequences) con un patrón que contiene `[` o `]`, este patrón debe incluirse entre comillas.

```yaml
# Valid
branches:
  - '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
branches:
  - **/README.md

# Valid
branches: [ main, 'release/v[0-9].[0-9]' ]

# Invalid - creates a parse error
branches: [ main, release/v[0-9].[0-9] ]
```

Para más información sobre la sintaxis de filtro de rama, etiqueta y ruta, vea "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)" y "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)".

### Patrones para encontrar ramas y etiquetas

| Patrón | Descripción | Coincidencias de ejemplo |
|---------|------------------------|---------|
| `feature/*` | El carácter comodín `*` coincide con cualquier carácter, pero no con la barra diagonal (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | El carácter comodín `**` coincide con cualquier carácter, incluida la barra diagonal (`/`) en los nombres de rama y etiqueta. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Encuentra el nombre exacto de una rama o el nombre de etiqueta. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Coincide con todos los nombres de rama o de etiqueta que no contienen una barra diagonal (`/`). El carácter `*` es un carácter especial en YAML. Al iniciar un patrón con `*`, debe usar comillas. | `main`<br/><br/>`releases` |
| `'**'` | Encuentra todos los nombres de rama y de etiqueta. Este es el comportamiento predeterminado cuando no se usa un filtro `branches` o `tags`. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | El carácter `*` es un carácter especial en YAML. Al iniciar un patrón con `*`, debe usar comillas. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Coincide con los nombres de rama y etiqueta que comienzan por `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Coincide con todas las etiquetas y ramas de versionamiento semántico con la versión principal 1 o 2. | `v1.10.1`<br/><br/>`v2.0.0` |

### Patrones para encontrar rutas de archivos

Los patrones de ruta deben coincidir con toda la ruta y comenzar desde la raíz del repositorio.

| Patrón | Descripción de coincidencias | Coincidencias de ejemplo |
|---------|------------------------|-----------------|
| `'*'` | El carácter comodín `*` coincide con cualquier carácter, pero no con la barra diagonal (`/`). El carácter `*` es un carácter especial en YAML. Al iniciar un patrón con `*`, debe usar comillas. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | El carácter `?` coincide con cero o una repetición del carácter anterior. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | El carácter comodín `**` coincide con cualquier carácter, incluida la barra diagonal (`/`). Este es el comportamiento predeterminado cuando no se usa un filtro `path`. | `all/the/files.md` |
| `'*.js'` | El carácter comodín `*` coincide con cualquier carácter, pero no con la barra diagonal (`/`). Coincide con todos los archivos `.js` en la raíz del repositorio. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Coincide con todos los archivos `.js` en el repositorio. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | Todos los archivos dentro de la raíz del directorio `docs`, en la raíz del repositorio. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Todos los archivos del directorio `/docs` en la raíz del repositorio. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | Un archivo con un sufijo `.md` en cualquier parte del directorio `docs`. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Todos los archivos de un directorio `docs` en cualquier parte del repositorio. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | Un archivo README.md en cualquier parte del repositorio. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Cualquier archivo de una carpeta con un sufijo `src` en cualquier parte del repositorio. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | Un archivo con el sufijo `-post.md` en cualquier parte del repositorio. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | Un archivo con el prefijo `migrate-` y el sufijo `.sql` en cualquier parte del repositorio. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | El uso de una signo de exclamación (`!`) delante de un patrón lo niega. Cuando un archivo coincida con un patrón y también coincida con un patrón negativo definido más adelante en el archivo, no se incluirá el archivo. | `hello.md`<br/><br/>_No coincide_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Los patrones se marcan de forma secuencial. Un patrón que niega un patrón previo volverá a incluir las rutas del archivo. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
