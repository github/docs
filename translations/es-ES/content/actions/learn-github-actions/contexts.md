---
title: Contextos
shortTitle: Contexts
intro: Puedes acceder a información de contexto en los flujos de trabajo y acciones.
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191938'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los contextos

Los contextos son una manera de acceder a información acerca de las ejecuciones de flujo de trabajo, los entornos del ejecutor, los trabajos y los pasos. Cada contexto es un objeto que contiene propiedades, las cuales pueden ser secuencias u otros objetos.

{% data reusables.actions.context-contents %} Por ejemplo, el contexto `matrix` solo se rellena para los trabajos de una [matriz](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

Puedes acceder a los contextos utilizando la sintaxis de expresión. Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Nombre del contexto | Tipo | Descripción |
|---------------|------|-------------|
| `github` | `object` | Información sobre la ejecución del flujo de trabajo. Para más información, vea [el contexto `github`](#github-context). |
| `env` | `object` | Contiene variables de entorno establecidas en un flujo de trabajo, trabajo o paso. Para más información, vea [el contexto `env`](#env-context). |
| `job` | `object` | Información acerca del job que se está ejecutando actualmente. Para más información, vea [el contexto `job`](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | Solo para flujos de trabajo reutilizables, contiene salidas de trabajos del flujo de trabajo reutilizable. Para más información, vea [el contexto `jobs`](#jobs-context). |{% endif %} | `steps` | `object` | Información sobre los pasos que se han ejecutado en el trabajo actual. Para más información, vea [el contexto `steps`](#steps-context). | | `runner` | `object` | Información sobre el ejecutor que está realizando el trabajo actual. Para más información, vea [el contexto `runner`](#runner-context). | | `secrets` | `object` | Contiene los nombres y valores de los secretos que se encuentran disponibles para una ejecución de flujo de trabajo. Para más información, vea [el contexto `secrets`](#secrets-context). | | `strategy` | `object` | Información sobre la estrategia de ejecución de la matriz para el trabajo actual. Para más información, vea [el contexto `strategy`](#strategy-context). | | `matrix` | `object` | Contiene las propiedades de la matriz que se definen en el flujo de trabajo que aplica al trabajo actual. Para más información, vea [el contexto `matrix`](#matrix-context). | | `needs` | `object` | Contiene las salidas de todos los trabajos que se definen como una dependencia del trabajo actual. Para más información, vea [el contexto `needs`](#needs-context). | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | Contiene las entradas de un flujo de trabajo reutilizable {% ifversion actions-unified-inputs %} o manualmente desencadenado {% endif %}. Para más información, vea [el contexto `inputs`](#inputs-context). |{% endif %}

Como parte de una expresión, puedes acceder a la información de contexto utilizando una de dos sintaxis.

- Sintaxis de índice: `github['sha']`
- Sintaxis de desreferenciación de propiedades: `github.sha`

Para usar la sintaxis de desreferencia de propiedades, el nombre de la propiedad debe comenzar con una letra o `_` y solo puede incluir caracteres alfanuméricos, `-` o `_`.

Si intentas desreferenciar una propiedad inexistente, se evaluará como cadena vacía.

### Determinar cuándo utilizar contextos

{% data reusables.actions.using-context-or-environment-variables %}

### Disponibilidad de contexto

Hay diferentes contextos disponibles a lo largo de un ejecutor de flujo de trabajo. Por ejemplo, el contexto `secrets` solo se puede usar en determinados puntos de un trabajo.

Adicionalmente, algunas funcionalidades solo pueden utilizarse en algunos lugares. Por ejemplo, la función `hashFiles` no está disponible en todas partes.

La siguiente tabla indica si cada contexto y fución especial puede utilizarse dentro de un flujo de trabajo. A menos de que se liste a continuación, las funciones se pueden utilizar donde sea.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Clave de flujo de trabajo | Context | Funciones especiales |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| Ruta de acceso | Context | Funciones especiales |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Ejemplo: imprimir información de contexto a la bitácora

Puedes imprimir el contenido de los contextos a la bitácora para la depuración. La [función `toJSON`](/actions/learn-github-actions/expressions#tojson) es necesaria para imprimir objetos JSON en el registro.

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## Contexto `github`

El contexto `github` contiene información sobre la ejecución del flujo de trabajo y el evento que ha desencadenado la ejecución. También puede leer la mayoría de los datos del contexto `github` en variables de entorno. Para más información sobre las variables de entorno, vea "[Uso de variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `github` | `object` | El contexto de nivel superior disponible durante cualquier trabajo o paso en un flujo de trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `github.action` | `string` | Nombre de la acción actualmente en ejecución de flujo, o bien el valor [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) de un paso. {% data variables.product.prodname_dotcom %} quita caracteres especiales y usa el nombre `__run` cuando el paso actual ejecuta un script sin `id`. Si utilizas la misma acción más de una vez en el mismo job, el nombre incluirá un sufijo con el número de secuencia con un guion bajo antes de este. Por ejemplo, el primer script que ejecute tendrá el nombre `__run` y el segundo el nombre `__run_2`. Del mismo modo, la segunda invocación de `actions/checkout` será `actionscheckout2`. |
| `github.action_path` | `string` | La ruta donde se ubica una acción. Esta propiedad solo es compatible en las acciones compuestas. Puedes utilizar esta ruta para acceder a los archivos que se ubican en el mismo repositorio que la acción. |
| `github.action_ref` | `string` | En el caso de un paso que ejecuta una acción, esta es la ref de la acción que se está ejecutando. Por ejemplo: `v2`. |
| `github.action_repository` | `string` | En el caso de un paso que ejecuta una acción, este es el propietario y el nombre de repositorio de la acción. Por ejemplo: `actions/checkout`. |
| `github.action_status` | `string` | Para una acción compuesta, el resultado actual de la acción compuesta. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}Nombre del usuario que ha desencadenado la ejecución inicial del flujo de trabajo. Si la ejecución del flujo de trabajo es una repetición, este valor puede ser distinto de `github.triggering_actor`. Cualquier repetición de la ejecución de flujo de trabajo usará los privilegios de `github.actor`, incluso si el actor que inicia la repetición (`github.triggering_actor`) tiene otros privilegios.{% else %}Nombre del usuario que ha iniciado la ejecución del flujo de trabajo.{% endif %} |
| `github.api_url` | `string` | La URL de la API de REST de {% data variables.product.prodname_dotcom %}. |
| `github.base_ref` | `string` | `base_ref` o rama destino de la solicitud de incorporación de cambios en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que desencadena una ejecución de flujo de trabajo es `pull_request` o `pull_request_target`. |
| `github.env` | `string` | La ruta en el ejecutor del archivo que configura las variables de ambiente desde los comandos del flujo de trabajo. Este archivo es único para el paso actual y es un archivo diferente para cada paso en un job. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)". |
| `github.event` | `object` | La carga de webhook del evento completo. "Puedes acceder a propiedades individuales del evento que utiliza este contexto. El objeto es idéntico a la carga útil de webhook del evento que activó la ejecución de flujo de trabajo y es diferente para cada evento. Los webhooks de cada evento {% data variables.product.prodname_actions %} están vinculados en "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows/)". Por ejemplo, para una ejecución de flujo de trabajo desencadenada por el [evento `push`](/actions/using-workflows/events-that-trigger-workflows#push), este objeto contiene el contenido de la [carga del webhook de inserción](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | El nombre del evento que activó la ejecución del flujo de trabajo. |
| `github.event_path` | `string` | La ruta al archivo en el ejecutor que contiene toda la carga útil del webhook del evento. |
| `github.graphql_url` | `string` | La URL de la API de GraphQL de {% data variables.product.prodname_dotcom %}. |
| `github.head_ref` | `string` | `head_ref` o rama de origen de la solicitud de incorporación de cambios en una ejecución de flujo de trabajo. Esta propiedad solo está disponible cuando el evento que desencadena una ejecución de flujo de trabajo es `pull_request` o `pull_request_target`. |
| `github.job` | `string` | El valor [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) del trabajo actual. <br /> Nota: El ejecutor de acciones establece esta propiedad del contexto, la que solo está disponible dentro de los `steps` de ejecución de un trabajo. De lo contrario, el valor de esta propiedad será `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | Ruta en el ejecutor al archivo que establece las variables del sistema `PATH` a partir de comandos de flujo de trabajo. Este archivo es único para el paso actual y es un archivo diferente para cada paso en un job. Para más información, vea "[Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)". | | `github.repository` | `string` | Propietario y nombre del repositorio. Por ejemplo: `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | Nombre del propietario del repositorio. Por ejemplo: `Codertocat`. | | `github.repositoryUrl` | `string` | URL de Git al repositorio. Por ejemplo: `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | Número de días que se conservan los registros y artefactos de ejecución del flujo de trabajo. | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | Número único para cada intento de una ejecución de flujo de trabajo concreta en un repositorio. Este número comienza en 1 para el primer intento de ejecución del flujo de trabajo e incrementa con cada re-ejecución. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | Origen de un secreto usado en un flujo de trabajo. Los valores posibles son `None`, `Actions`, `Dependabot` o `Codespaces`. | {%- endif %} | `github.server_url` | `string` | URL del servidor de GitHub. Por ejemplo: `https://github.com`. | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | Un token para autenticarse en nombre de la aplicación de GitHub instalada en el repositorio. Esto es funcionalmente equivalente al secreto `GITHUB_TOKEN`. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)".  <br /> Nota: El ejecutor de acciones establece esta propiedad del contexto, la que solo está disponible dentro de los `steps` de ejecución de un trabajo. De lo contrario, el valor de esta propiedad será `null`. |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | Nombre del usuario que ha iniciado la ejecución del flujo de trabajo. Si la ejecución del flujo de trabajo es una repetición, este valor puede ser distinto de `github.actor`. Todas las repeticiones de ejecución de flujo de trabajo usarán los privilegios de `github.actor`, incluso si el actor que inicia la repetición de la ejecución (`github.triggering_actor`) tiene otros privilegios. |{% endif %} | `github.workflow` | `string` | Nombre del flujo de trabajo. Si el archivo de flujo de trabajo no especifica `name`, el valor de esta propiedad es la ruta completa del archivo del flujo de trabajo en el repositorio. | | `github.workspace` | `string` | Directorio de trabajo predeterminado en el ejecutor para los pasos y la ubicación predeterminada del repositorio al usar la acción [`checkout`](https://github.com/actions/checkout). |

### Contenido de ejemplo del contexto `github`

El siguiente contexto de ejemplo procede de una ejecución de flujo de trabajo desencadenada por el evento `push`. El objeto `event` de este ejemplo se ha truncado porque es idéntico al contenido de la [carga del webhook `push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Ejemplo de uso del contexto `github`

En este flujo de trabajo de ejemplo se usa el contexto `github.event_name` para ejecutar un trabajo solo si el evento `pull_request` ha desencadenado la ejecución del flujo de trabajo.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## Contexto `env`

El contexto `env` contiene las variables de entorno que se han establecido en un flujo de trabajo, trabajo o paso. Para más información sobre cómo establecer variables de entorno en el flujo de trabajo, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

La sintaxis del contexto `env` permite usar el valor de una variable de entorno en el archivo de flujo de trabajo. Puede usar el contexto `env` en el valor de cualquier clave de un paso, excepto para las claves `id` y `uses`. Para más información sobre la sintaxis de pasos, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Si quieres usar el valor de una variable de entorno dentro de un ejecutor, usa el método normal del sistema operativo del ejecutor para leer las variables de entorno.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `env` | `object` | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso de un trabajo. Este objeto contiene las propiedades que se listan a continuación. |
| `env.<env_name>` | `string` | El valor de una variable de entorno específica. |

### Contenido de ejemplo del contexto `env`

El contenido del contexto `env` es una asignación de nombres de variable de entorno a sus valores. El contenido del contexto puede cambiar dependiendo de dónde se utiliza en la ejecución de flujo de trabajo.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Ejemplo de uso del contexto `env`

En este flujo de trabajo de ejemplo se muestra cómo se puede configurar el contexto `env` en los niveles de flujo de trabajo, trabajo y pasos, así como el uso del contexto en los pasos.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## Contexto `job`

El contexto `job` contiene información sobre el trabajo actual en ejecución.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `job` | `object` | Este contexto cambia para cada trabajo de una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier paso de un trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `job.container` | `object` | Información sobre el contenedor del trabajo. Para más información sobre los contenedores, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)". |
| `job.container.id` | `string` | La ID del contenedor. |
| `job.container.network` | `string` | La ID de la red del contenedor. El ejecutor crea la red usada por todos los contenedores en un trabajo. |
| `job.services` | `object` | Los contenedores de servicios creados para un trabajo. Para más información sobre los contenedores de servicio, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service_id>.id` | `string` | La ID del contenedor de servicio. |
| `job.services.<service_id>.network` | `string` | La ID de la red de contenedor de servicio. El ejecutor crea la red usada por todos los contenedores en un trabajo. |
| `job.services.<service_id>.ports` | `object` | Los puertos expuestos del contenedor del servicio. |
| `job.status` | `string` | Estado actual del trabajo. Los valores posibles son `success`, `failure` o `cancelled`. |

### Contenido de ejemplo del contexto `job`

En este contexto `job` de ejemplo se usa un contenedor de servicio de PostgreSQL con puertos asignados. Si en un trabajo no se usan contenedores ni contenedores de servicio, el contexto `job` solo contiene la propiedad `status`.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Ejemplo de uso del contexto `job`

Este flujo de trabajo de ejemplo configura un contenedor de servicio de PostgreSQL y, automáticamente, mapea el puerto 5432 en el contenedor de servicio a un puerto disponible elegido aleatoriamente en el host. El contexto `job` se usa para acceder al número del puerto que se ha asignado en el host.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## Contexto `jobs`

El `jobs` contexto solo está disponible en flujos de trabajo reutilizables y solo se puede usar para establecer salidas para un flujo de trabajo reutilizable. Para más información, vea "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)".

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `jobs` | `object` | Esto solo está disponible en flujos de trabajo reutilizables y solo se puede usar para establecer salidas para un flujo de trabajo reutilizable. Este objeto contiene todas las propiedades que se listan debajo.
| `jobs.<job_id>.result` | `string` | El resultado de un trabajo en el flujo de trabajo reutilizable. Los valores posibles son `success`, `failure`, `cancelled` o `skipped`. |
| `jobs.<job_id>.outputs` | `object` | Conjunto de salidas de un trabajo en un flujo de trabajo reutilizable. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | El valor de una salida específica para un trabajo en un flujo de trabajo reutilizable. |

### Contenido de ejemplo del contexto `jobs`

Este contexto `jobs` de ejemplo contiene el resultado y las salidas de un trabajo a partir de una ejecución de flujo de trabajo reutilizable.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Ejemplo de uso del contexto `jobs`

Este flujo de trabajo reutilizable de ejemplo usa el contexto `jobs` para establecer salidas para el flujo de trabajo reutilizable. Observa cómo las salidas fluyen desde los pasos hasta el trabajo y, a continuación, al desencadenador `workflow_call`. Para más información, vea "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)".

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

{% endif %}

## Contexto `steps`

El contexto `steps` contiene información sobre los pasos del trabajo actual en los que se ha especificado [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) y ya se han ejecutado.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `steps` | `object` | Este contexto cambia para cada paso de un trabajo. Puedes acceder a este contexto desde cualquier paso de un trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `steps.<step_id>.outputs` | `object` | El conjunto de salidas definido para el paso. Para más información, vea "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)". |
| `steps.<step_id>.conclusion` | `string` | El resultado de un paso completado después de aplicar [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled` o `skipped`. Cuando se produce un error en un paso `continue-on-error`, `outcome` es `failure`, pero el valor `conclusion` final es `success`. |
| `steps.<step_id>.outcome` | `string` | El resultado de un paso completado antes de aplicar [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Los valores posibles son `success`, `failure`, `cancelled` o `skipped`. Cuando se produce un error en un paso `continue-on-error`, `outcome` es `failure`, pero el valor `conclusion` final es `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | El valor de un resultado específico. |

### Contenido de ejemplo del contexto `steps`

En este contexto `steps` de ejemplo se muestran dos pasos anteriores en los que se ha especificado [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid). El primer paso tenía el `id` denominado `checkout`, el segundo `generate_number`. El paso `generate_number` tenía una salida denominada `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Ejemplo de uso del contexto `steps`

En este flujo de trabajo de ejemplo se genera un número aleatorio como salida en un paso y, en un paso posterior se usa el contexto `steps` para leer el valor de esa salida.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## Contexto `runner`

El contexto `runner` contiene información sobre el ejecutor que ejecuta el trabajo actual.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `runner` | `object` | Este contexto cambia para cada trabajo de una ejecución de flujo de trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} La propiedad La `runner.workspace` propiedad no está documentada correctamente no está documentada correctamente. Es una propiedad anterior de Acciones que ahora no es pertinente para los usuarios, en comparación con `github.workspace`. Esta se mantiene por compatibilidad.
| `runner.workspace` | `string` | | {%- endcomment %}

### Contenido de ejemplo del contexto `runner`

El siguiente contexto de ejemplo es de un ejecutor Linux hospedado en {% data variables.product.prodname_dotcom %}.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Ejemplo de uso del contexto `runner`

En este flujo de trabajo de ejemplo se usa el contexto `runner` a fin de configurar la ruta al directorio temporal para escribir registros y, si se produce un error en el flujo de trabajo, los carga como artefacto.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## Contexto `secrets`

El contexto `secrets` contiene los nombres y valores de los secretos disponibles para una ejecución de flujo de trabajo. El contexto `secrets` no está disponible para acciones compuestas debido a motivos de seguridad. Si deseas pasar un secreto a una acción compuesta, debes hacerlo explícitamente como entrada. Para más información sobre los secretos, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

`GITHUB_TOKEN` es un secreto que se crea automáticamente para cada ejecución de flujo de trabajo y siempre se incluye en el contexto `secrets`. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)".

{% data reusables.actions.secrets-redaction-warning %}

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `secrets` | `object` | Este contexto es el mismo para cada job en una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier paso de un trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `secrets.GITHUB_TOKEN` | `string` | Token creado automáticamente para cada ejecución de flujo de trabajo. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)". |
| `secrets.<secret_name>` | `string` | El valor de un secreto específico. |

### Contenido de ejemplo del contexto `secrets`

En el contenido de ejemplo siguiente del contexto `secrets` se muestra el valor `GITHUB_TOKEN` automático, así como otros dos secretos disponibles para la ejecución del flujo de trabajo.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Ejemplo de uso del contexto `secrets`

{% data reusables.actions.github_token-input-example %}

## Contexto `strategy`

Para los flujos de trabajo con una matriz, el contexto `strategy` contiene información sobre la estrategia de ejecución de matrices para el trabajo actual.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `strategy` | `object` | Este contexto cambia para cada trabajo de una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier job o paso en un flujo de trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `strategy.fail-fast` | `boolean` | Cuando es `true`, todos los trabajos en curso se cancelan si se produce un error en algún trabajo de una matriz. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)". |
| `strategy.job-index` | `number` | El índice del trabajo actual en la matriz. **Nota:** Este número es un número de base cero. El índice del primer trabajo en la matriz es `0`. |
| `strategy.job-total` | `number` | El número total de trabajos en la matriz. **Nota:** Este número **no es** un número de base cero. Por ejemplo, para una matriz con cuatro trabajos, el valor de `job-total` es `4`. |
| `strategy.max-parallel` | `number` | El número máximo de trabajos que se pueden ejecutar simultáneamente al usar una estrategia de trabajo `matrix`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)". |

### Contenido de ejemplo del contexto `strategy`

El contenido de ejemplo siguiente del contexto `strategy` procede de una matriz con cuatro trabajos y se toma del trabajo final. Observe la diferencia entre el número `job-index` de base cero y `job-total`, que no es de base cero.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Ejemplo de uso del contexto `strategy`

En este flujo de trabajo de ejemplo se usa la propiedad `strategy.job-index` a fin de establecer un nombre único para un archivo de registro para cada trabajo de una matriz.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## Contexto `matrix`

Para los flujos de trabajo con una matriz, el contexto `matrix` contiene las propiedades de matriz definidas en el archivo de flujo de trabajo que se aplican al trabajo actual. Por ejemplo, si configuras una matriz con las claves `os` y `node`, el objeto de contexto `matrix` incluye las propiedades `os` y `node` con los valores que se usan para el trabajo actual.

No hay propiedades estándar en el contexto `matrix`, solo las definidas en el archivo de flujo de trabajo.

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `matrix` | `object` | Este contexto solo está disponible para los trabajos de una matriz y cambia para cada trabajo en una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier job o paso en un flujo de trabajo. Este objeto contiene las propiedades que se listan a continuación. |
| `matrix.<property_name>` | `string` | El valor de una propiedad de matriz. |

### Contenido de ejemplo del contexto `matrix`

El contenido de ejemplo siguiente del contexto `matrix` procede de un trabajo de una matriz que tiene las propiedades de matriz `os` y `node` definidas en el flujo de trabajo. El trabajo ejecuta la combinación de matriz de un sistema operativo `ubuntu-latest` y la versión `16` de Node.js.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Ejemplo de uso del contexto `matrix`

Este flujo de trabajo de ejemplo crea una matriz con las claves `os` y `node`. Usa la propiedad `matrix.os` para establecer el tipo de ejecutor para cada trabajo y la propiedad `matrix.node` a fin de establecer la versión de Node.js para cada trabajo.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## Contexto `needs`

El contexto `needs` contiene salidas de todos los trabajos que se definen como una dependencia directa del trabajo actual. Ten en cuenta que esto no incluye trabajos dependientes implícitamente (por ejemplo, trabajos dependientes de un trabajo dependiente). Para más información sobre la definición de dependencias de trabajos, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `needs` | `object` | Este contexto solo se llena con ejecuciones de flujo de trabajo que tienen jobs dependientes y cambios para cada job en una ejecución de flujo de trabajo. Puedes acceder a este contexto desde cualquier job o paso en un flujo de trabajo. Este objeto contiene todas las propiedades que se listan debajo. |
| `needs.<job_id>` | `object` | Un solo job del cual depende el job actual. |
| `needs.<job_id>.outputs` | `object` | El conjunto de resultados de un job del cual depende el job actual. |
| `needs.<job_id>.outputs.<output name>` | `string` | El valor de un resultado específico para un job del cual depende el job actual. |
| `needs.<job_id>.result` | `string` | El resultado de un job del cual depende el job actual. Los valores posibles son `success`, `failure`, `cancelled` o `skipped`. |

### Contenido de ejemplo del contexto `needs`

En el contenido de ejemplo siguiente del contexto `needs` se muestra información para dos trabajos de los que depende el trabajo actual.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Ejemplo de uso del contexto `needs`

Este flujo de trabajo de ejemplo tiene tres trabajos: un trabajo `build` que realiza una compilación, un trabajo `deploy` que necesita el trabajo `build` y un trabajo `debug` que necesita los trabajos `build` y `deploy`, y que solo se ejecuta si se produce un error en el flujo de trabajo. El trabajo `deploy` también usa el contexto `needs` para acceder a una salida del trabajo `build`.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Contexto `inputs`

El contexto `inputs` contiene propiedades de entrada pasadas a una acción{% ifversion actions-unified-inputs %},{% else %} o{% endif %}, a un flujo de trabajo reutilizable {% ifversion actions-unified-inputs %} o a un flujo de trabajo manualmente desencadenado{% endif %}. {% ifversion actions-unified-inputs %}En el caso de los flujos de trabajo reutilizables, los{% else %}Los{% endif %} tipos y nombres de entrada están definidos en la [`workflow_call`configuración del evento](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)  de un flujo de trabajo reutilizable y los valores de entrada se pasan desde [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) en un flujo de trabajo externo que llama al flujo de trabajo reutilizable. {% ifversion actions-unified-inputs %}En el caso de los flujos de trabajo manualmente desencadenados, las entradas se define en la [`workflow_dispatch`configuración del evento](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) de un flujo de trabajo.{% endif %}

No hay propiedades estándar en el contexto `inputs`, solo las definidas en el archivo de flujo de trabajo.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| Nombre de propiedad | Tipo | Descripción |
|---------------|------|-------------|
| `inputs` | `object` | Este contexto solo está disponible en un [flujo de trabajo reutilizable](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} o en un flujo de trabajo desencadenado por el [`workflow_dispatch`evento](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) {% endif %}. Puedes acceder a este contexto desde cualquier job o paso en un flujo de trabajo. Este objeto contiene las propiedades que se listan a continuación. |
| `inputs.<name>` | `string`, `number` o `boolean` | Cada valor de entrada que pasa desde un flujo de trabajo externo. |

### Contenido de ejemplo del contexto `inputs`

El contenido de ejemplo siguiente del contexto `inputs` proviene de un flujo de trabajo que tiene definidas las entradas `build_id`, `deploy_target` y `perform_deploy`.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Ejemplo de uso del contexto `inputs` en un flujo de trabajo reutilizable

En este flujo de trabajo reutilizable de ejemplo, se usa el contexto `inputs` para obtener los valores de las entradas `build_id`, `deploy_target` y `perform_deploy` que se pasaron al flujo de trabajo reutilizable desde el flujo de trabajo del autor de la llamada.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Ejemplo del uso del contexto `inputs` en un flujo de trabajo manualmente desencadenado

En este flujo de trabajo de ejemplo desencadenado por un evento`workflow_dispatch`, se usa el contexto `inputs` para obtener los valores de las entradas `build_id`, `deploy_target` y `perform_deploy` que se pasaron al flujo de trabajo.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}
