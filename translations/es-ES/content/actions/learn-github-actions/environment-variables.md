---
title: Variables de entorno
intro: '{% data variables.product.prodname_dotcom %} establece variables de entorno predeterminadas para cada ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}. También puedes establecer variables de entorno personalizadas en tu archivo de flujo de trabajo.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179544'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las variables de entorno

Puedes utilizar variables de ambiente para almacenar información que quieras referenciar en tu flujo de trabajo. Referencias variables de ambiente dentro de un paso de flujo de trabajo o una acción y estas se interpolan en la máquina ejecutora que ejecuta tu flujo de trabajo. Los comandos que se ejecutan en las acciones o flujos de trabajo pueden crear, leer y modificar las variables de ambiente.

Puedes configurar tus propias variables de ambiente personalizadas, puedes utilizar las variables de ambiente predefinidas que configura {% data variables.product.prodname_dotcom %} automáticamente y también utilizar cualquier otra variable de ambiente que se configure en el ambiente de trabajo del ejecutor. Las variables de entorno distinguen mayúsculas de minúsculas. 

Para configurar una variable de ambiente personalizada, debes definirla en el archivo de flujo de trabajo. El alcance de una variable de ambiente personalizada se limita al elemento en el cual se define. Puedes definir las variables de ambiente que tienen alcance para:

* Todo el flujo de trabajo, mediante el uso de [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) en el nivel superior del archivo de flujo de trabajo.
* El contenido de un trabajo dentro de un flujo de trabajo mediante [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* Un paso específico dentro de un trabajo mediante [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

En el ejemplo anterior se muestran tres variables de entorno personalizadas que se usan en un comando `echo`: `$DAY_OF_WEEK`, `$Greeting` y `$First_Name`. A los valores para estas variables de ambiente se les configura y da el alcance en el flujo de trabajo, job y nivel de paso respectivamente. 

Debido a que la interpolación de las variables de ambiente se realiza después de que un job de flujo de trabajo se envía a una máquina ejecutora, debes utilizar la sintaxis adecuada para el shell que se utiliza en el ejecutor. En este ejemplo, el flujo de trabajo especifica `ubuntu-latest`. De manera predeterminada, los ejecutores de Linux utilizan el shell bash, así que debe utilizar la sintaxis `$NAME`. Si el flujo de trabajo especificó un ejecutor Windows, tendrá que usar la sintaxis para PowerShell, `$env:NAME`. Para obtener más información sobre los shells, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)".

{% note %}

**Nota**: Puede enumerar todo el conjunto de variables de entorno que están disponibles para un paso del flujo de trabajo utilizando <span style="white-space: nowrap;">`run: env`</span> en un paso y, a continuación, examinar el resultado del paso.

{% endnote %}

## Utilizar contextos para acceder a los valores de las variables de ambiente

Adicionalmente a las variables de ambiente, {% data variables.product.prodname_actions %} también te permite configurar y leer los valores utilizando contextos. Se pretende utilizar las variables de ambiente y contextos en puntos diferentes del flujo de trabajo.

Las variables de ambiente siempre se interpolan en el ejecutor de la máquina virtual. Sin embargo, las {% data variables.product.prodname_actions %} procesan algunas partes de los flujos de trabajo y no se envían al ejecutor. No puedes utilizar variables de ambiente en estas partes de un archivo de flujo de trabajo. En su lugar, puedes utilizar contextos. Por ejemplo, {% data variables.product.prodname_actions %} siempre procesará un condicional `if`, el cual determina si un trabajo o paso se envía al ejecutor o no. Puedes utilizar un contexto en una declaración condicional `if` para acceder al valor de una variable de entorno.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

En esta modificación del primer ejemplo, hemos introducido un condicional `if`. Ahora, el paso del flujo de trabajo solo se ejecuta si `DAYS_OF_WEEK` está establecido en "Monday". Accedemos a este valor desde la instrucción condicional `if` mediante el [contexto `env`](/actions/learn-github-actions/contexts#env-context).

{% note %}

**Nota**: Normalmente, los contextos se denotan con el signo del dólar y las llaves, como {% raw %}`${{ context.property }}`{% endraw %}. En un condicional `if`, {% raw %}`${{` y `}}`{% endraw %} son opcionales, pero si los usa, deben incluir toda la instrucción de comparación, como se muestra anteriormente. 

{% endnote %}

Habitualmente, utilizará el contexto `env` o `github` para acceder a los valores de variables de entorno en partes del flujo de trabajo que se procesan antes de que los trabajos se envíen a los ejecutores. 


| Context | Caso de uso | Ejemplo |
| --- | --- | --- |
| `env` | Referenciar variables de ambiente personalizadas que se definen en el flujo de trabajo. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Referenciar información sobre la ejecución de flujo de trabajo y el evento que activó dicha ejecución. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
Hay muchos otros contextos que puedes utilizar para propósitos diversos en tus flujos de trabajo. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts)". Para obtener más información sobre dónde puede usar varios contextos dentro de un flujo de trabajo, consulte "[Disponibilidad del contexto](/actions/learn-github-actions/contexts#context-availability)".

### Otros tipos de variables

En la mayoría de las partes de un flujo de trabajo, los únicos tipos de variables que puede usar son variables de entorno, como `$MY_VARIABLE`, o la propiedad de contexto equivalente, como <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Las excepciones son estas:

* Entradas para los eventos `workflow_call` y `workflow_dispatch`, que permiten pasar valores a un flujo de trabajo. Para más información, vea [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) y [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Las salidas de jobs, las cuales te permiten pasar los valores entre los jobs en un flujo de trabajo. Para más información, vea [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* Las variables en una expresión de formato, las cuales te permiten reemplazar partes de una secuencia. Para más información, vea [`format`](/actions/learn-github-actions/expressions#format).

## Convenciones de nomenclatura para las variables de entorno

Cuando configuras una variable de ambiente personalizada, no puedes utilizar ninguno de los nombres de variable de ambiente predeterminados. Para obtener una lista completa, consulte "[Variables de entorno predeterminadas](#default-environment-variables)" a continuación. Si intentas anular el valor de estas variables de ambiente predeterminadas, se ignorará la tarea.

Toda variable de entorno nueva que configure y que apunte a una ubicación en el sistema de archivos debe tener un sufijo `_PATH`. Las variables de entorno predeterminadas `GITHUB_ENV` y `GITHUB_WORKSPACE` son excepciones a esta convención.

## Variables de entorno predeterminadas

Las variables de ambiente predeterminadas que configura {% data variables.product.prodname_dotcom %} están disponibles para cada paso en un flujo de trabajo. 

Te recomendamos encarecidamente que las acciones usen variables de entorno para acceder al sistema de archivos en lugar de usar rutas de archivo codificadas de forma rígida. {% data variables.product.prodname_dotcom %} establece variables de entorno para que las acciones se utilicen en todos los entornos del ejecutador.

| Variable de entorno | Descripción |
| ---------------------|------------ |
| `CI` | Siempre se establece en `true`. |
| `GITHUB_ACTION` | Nombre de la acción actualmente en ejecución, o bien el valor [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) de un paso. Por ejemplo, para una acción, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} quita caracteres especiales y usa el nombre `__run` cuando el paso actual ejecuta un script sin `id`. Si utilizas el mismo script o acción más de una vez en el mismo job, el nombre incluirá un sufijo que consiste del número de secuencia precedido por un guión bajo. Por ejemplo, el primer script que ejecute tendrá el nombre `__run` y el segundo el nombre `__run_2`. Del mismo modo, la segunda invocación de `actions/checkout` será `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | La ruta donde se ubica una acción. Esta propiedad solo es compatible en las acciones compuestas. Puedes utilizar esta ruta para acceder a los archivos que se ubican en el mismo repositorio que la acción. Por ejemplo: `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | En el caso de un paso que ejecuta una acción, este es el propietario y el nombre de repositorio de la acción. Por ejemplo: `actions/checkout`. |
| `GITHUB_ACTIONS` | Defínalo siempre en `true` cuando {% data variables.product.prodname_actions %} esté ejecutando el flujo de trabajo. Puedes usar esta variable para diferenciar cuando las pruebas se ejecutan de forma local o mediante {% data variables.product.prodname_actions %}.
| `GITHUB_ACTOR` | El nombre de la persona o de la aplicación que inició el flujo de trabajo. Por ejemplo: `octocat`. |
| `GITHUB_API_URL` | Devuelve la URL de la API. Por ejemplo: `{% data variables.product.api_url_code %}`.
| `GITHUB_BASE_REF` | El nombre de la ref base o rama destino de la solicitud de cambios en una ejecución de flujo de trabajo. Esto solo se establece cuando el evento que desencadena una ejecución de flujo de trabajo es `pull_request` o `pull_request_target`. Por ejemplo: `main`. |
| `GITHUB_ENV` | La ruta en el ejecutor hacia el archivo que configura las variables de ambiente desde los comandos de flujo de trabajo. Este archivo es único para el paso actual y cambia para cada paso en un job. Por ejemplo: `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)". | 
| `GITHUB_EVENT_NAME` | El nombre del evento que activó el flujo de trabajo. Por ejemplo: `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | La ruta al archivo en el ejecutor que contiene toda la carga útil del webhook del evento. Por ejemplo, `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Devuelve la URL de la API de GraphQL. Por ejemplo: `{% data variables.product.graphql_url_code %}`.
| `GITHUB_HEAD_REF` | El ref de encabezado de la rama origen de la solicitud de cambios en una ejecución de flujo de trabajo. Esta propiedad solo se establece cuando el evento que desencadena una ejecución de flujo de trabajo es `pull_request` o `pull_request_target`. Por ejemplo: `feature-branch-1`. |
| `GITHUB_JOB` | [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) del trabajo actual. Por ejemplo: `greeting_job`. |
| `GITHUB_PATH` | La ruta en el ejecutor del archivo que define las variables `PATH` de entorno desde los comandos del flujo de trabajo. Este archivo es único para el paso actual y cambia para cada paso en un job.  Por ejemplo: `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)". |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | Nombre del propietario y del repositorio. Por ejemplo: `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | Nombre del propietario del repositorio. Por ejemplo: `octocat`. | | `GITHUB_RETENTION_DAYS` | Cantidad de días que se conservan los registros y artefactos de ejecución del flujo de trabajo. Por ejemplo: `90`. | | `GITHUB_RUN_ATTEMPT` | Número único para cada intento de ejecución de un flujo de trabajo particular en un repositorio. Este número comienza en 1 para el primer intento de ejecución del flujo de trabajo e incrementa con cada re-ejecución. Por ejemplo: `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} Por ejemplo, `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} Por ejemplo, `3`. | | `GITHUB_SERVER_URL`| Dirección URL del servidor de {% data variables.product.product_name %}. Por ejemplo: `https://{% data variables.product.product_url %}`.
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | La ruta de acceso del ejecutor al archivo que contiene resúmenes de trabajos de comandos de flujo de trabajo. Este archivo es único para el paso actual y cambia para cada paso en un job. Por ejemplo: `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)". | {%- endif %} | `GITHUB_WORKFLOW` | El nombre del flujo de trabajo. Por ejemplo: `My test workflow`. Si el archivo de flujo de trabajo no especifica ninguna `name`, el valor de esa variable es la ruta completa del archivo del flujo de trabajo en el repositorio. | | `GITHUB_WORKSPACE` | Directorio de trabajo predeterminado en el ejecutor para los pasos y ubicación predeterminada del repositorio al usar la acción [`checkout`](https://github.com/actions/checkout). Por ejemplo: `/home/runner/work/my-repo-name/my-repo-name`. | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} Por ejemplo, `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} Por ejemplo, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} Por ejemplo, `D:\a\_temp` | {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} Por ejemplo, `C:\hostedtoolcache\windows` | {%- endif %}

{% note %}

**Nota:** 

* Si necesita usar la dirección URL de la ejecución de un flujo de trabajo desde un trabajo, puede combinar estas variables de entorno: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* La mayoría de las variables de ambiente predeterminadas tienen una propiedad de contexto correspondiente y con un nombre similar. Por ejemplo, el valor de la variable de entorno `GITHUB_REF` se puede leer durante el procesamiento del flujo de trabajo mediante la propiedad de contexto {% raw %}`${{ github.ref }}`{% endraw %}.

{% endnote %}

## Detectar el sistema operativo

Puede generar un único archivo de flujo de trabajo que se pueda usar para distintos sistemas operativos mediante la variable de entorno predeterminada `RUNNER_OS` y la propiedad de contexto correspondiente <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}.</span> Por ejemplo, el siguiente flujo de trabajo puede ejecutarse correctamente si ha cambiado el sistema operativo de `macos-latest` a `windows-latest` sin tener que alterar la sintaxis de las variables de entorno, lo cual difiere dependiendo del shell que esté utilizando el ejecutor.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

En este ejemplo, las dos instrucciones `if` comprueban la propiedad `os` del contexto `runner` para determinar el sistema operativo del ejecutor. {% data variables.product.prodname_actions %} procesa los condicionales `if` y solo los pasos en donde la comprobación se resuelve de manera que se envían los `true` al ejecutor. Una de las comprobaciones siempre será `true` y la otra `false`, por lo que solo se envía uno de estos pasos al ejecutor. Una vez enviado el trabajo al ejecutor, el paso se ejecuta y la variable de entorno del comando `echo` se interpola mediante la sintaxis adecuada (`$env:NAME` para PowerShell en Windows y `$NAME` para bash y sh en Linux y MacOS). En este ejemplo, la instrucción `runs-on: macos-latest` significa que se ejecutará el segundo paso.

## Pasar valores entre pasos y jobs en un flujo de trabajo

 Si genera un valor en un paso de un trabajo, puede utilizar dicho valor en los pasos siguientes del mismo trabajo. Para ello, asigne el valor a una variable de entorno nueva o existente y escriba lo siguiente en el archivo de entorno `GITHUB_ENV`. Una acción puede utilizar directamente el archivo de entorno, o puede utilizarse desde un comando de shell en el archivo de flujo de trabajo con la palabra clave `run`. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)". 
 
 Si quieres pasar un valor desde un paso en un job que está en un flujo de trabajo a un paso en otro job del mismo flujo de trabajo, puedes definir el valor como una salida de job. Puedes entonces referenciar esta salida de job desde un paso en otro job. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)". 
 
