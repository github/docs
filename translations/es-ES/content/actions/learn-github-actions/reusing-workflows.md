---
title: Reutilizar flujos de trabajo
shortTitle: Reutilizar flujos de trabajo
intro: Aprende cómo evitar la duplicación al crear un flujo de trabajo reusando los flujos existentes.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-4757
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

En vez de copiar y pegar desde un flujo de trabajo hacia otro, puedes hacer flujos de trabajo reutilizables. Tú y cualquiera que tenga acceso a un flujo de trabajo reutilizable pueden entonces llamarlo desde otro flujo.

El reutilizar flujos de trabajo evita la duplicación. Esto hace que los flujos de trabajo se puedan mantener más fácilmente y te permite crear flujos de trabajo nuevos más fácilmente compilando sobre el trabajo de los demás, tal como lo haces con las acciones. La reutilización de flujos de trabajo también promueve las mejores prácticas al ayudarte a utilizar los flujos de trabajo que están bien diseñados, que ya se han probado y cuya efectividad ya se comprobó. Tu organización puede crear una librería de flujos de trabajo reutilizables que puede mantenerse centralmente.

El siguiente diagrama muestra tres jobs de compilación en la parte izquierda del mismo. Después de que cada uno de estos jobs se complete con éxito, se ejecutará un job dependiente llamado "Deploy". Este job crea un flujo de trabajo reutilizable que contiene tres jobs: "Staging", "Review" y "Production". El job de despliegue "Production" solo se ejecuta después de que el job "Staging" se haya completado con éxito. El utilizar un flujo de trabajo reutilizable para ejecutar jobs de despliegue te permite ejecutarlos para cada compilación sin duplicar el código en los flujos de trabajo.

![Diagrama de un flujo de trabajo reutilizable para despliegue](/assets/images/help/images/reusable-workflows-ci-cd.png)

A un flujo de trabajo que utiliza otro flujo de trabajo se le llama flujo de trabajo "llamante". El flujo de trabajo reutilizable es un flujo "llamado". Un flujo de trabajo llamante puede utilizar varios flujos de trabajo llamados. Cada flujo de trabajo llamado se referencia en una línea simple. El resultado es que el archivo de flujo de trabajo llamante podrá contener solo unas cuantas líneas de YAML, pero podría realizar una cantidad grande de tareas cuando se ejecute. Cuando reutilizas un flujo de trabajo, se utiliza todo el flujo de trabajo llamado justo como si fuera parte del flujo de trabajo llamante.

Si utilizas un flujo de trabajo desde un repositorio diferente, cualquier acción en el flujo de trabajo llamado se ejecutará como si fuera parte del llamante. Por ejemplo, si el flujo de trabajo llamado utiliza `actions/checkout`, la acción verifica el contenido del repositorio que hospeda el flujo de trabajo llamante y no el llamado.

Cuando un flujo de trabajo llamante activa uno reutilizable, el contexto `github` siempre se asocia con el flujo llamante. Se otorga acceso automáticamente al flujo de trabajo llamado para `github.token` y `secrets.GITHUB_TOKEN`. Para obtener más información sobre el contexto `github`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

### Reusable workflows and starter workflow

Starter workflow allow everyone in your organization who has permission to create workflows to do so more quickly and easily. When people create a new workflow, they can choose a starter workflow and some or all of the work of writing the workflow will be done for them. Inside starter workflow, you can also reference reusable workflows to make it easy for people to benefit from reusing centrally managed workflow code. If you use a tag or branch name when referencing the reusable workflow then you can ensure that everyone who reuses that workflow will always be using the same YAML code. However, if you reference a reusable workflow by a tag or branch, be sure that you can trust that version of the workflow. Para obtener más información, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)".

For more information, see "[Creating starter workflows for your organization](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)."

## Acceso a los flujos de trabajo reutilizables

A reusable workflow can be used by another workflow if {% ifversion ghes or ghec or ghae %}any{% else %}either{% endif %} of the following is true:

* Ambos flujos de trabajo están en el mismo repositorio.
* The called workflow is stored in a public repository.{% ifversion ghes or ghec or ghae %}
* El flujo de trabajo llamado se almacena en un repositorio interno y los ajustes de dicho repositorio permiten que se acceda a él. Para obtener más información, consulta la sección "[Administrar los ajustes de las {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".{% endif %}

## Using runners

{% ifversion fpt or ghes or ghec %}

### Utilizar los ejecutores hospedados en GitHub

The assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. Billing for {% data variables.product.prodname_dotcom %}-hosted runners is always associated with the caller. The caller workflow cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository. Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

### Using self-hosted runners

{% endif %}

Called workflows can access self-hosted runners from caller's context. This means that a called workflow can access self-hosted runners that are:
* In the caller repository
* In the caller repository's organization{% ifversion ghes or ghec or ghae %} or enterprise{% endif %}, provided that the runner has been made available to the caller repository

## Limitaciones

* Los flujos de trabajo reutilizables no pueden llamar a otros que también sean reutilizables.
* Los flujos de trabajo solo podrán usar a los reutilizables que se encuentren almacenados en un repositorio privado en caso de que estos también se encuentren en el mismo repositorio.
* Ninguna variable de ambiente que se configure en un contexto de `env` que se defina a nivel del flujo de trabajo en aquél llamante se propagará al flujo llamado. Para obtener más información sobre el contexto `env`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".
* The `strategy` property is not supported in any job that calls a reusable workflow.

## Crear un flujo de trabajo reutilizable

Los flujos de trabajo reutilizables son archivos con formato YAML, muy similares a cualquier otro archivo de flujo de trabajo. Tal como con otros flujos de trabajo, puedes ubicar los reutilizables en el directorio `.github/workflows` de un repositorio. Los subdirectorios del directorio `workflows` no son compatibles.

Para que un flujo de trabajo sea reutilizable, los valores de `on` deben incluir `workflow_call`:

```yaml
on:
  workflow_call:
```

### Using inputs and secrets in a reusable workflow

Puedes definir entradas y secretos, las cuales pueden pasarse desde el flujo de trabajo llamante y luego utilizarse dentro del flujo llamado. There are three stages to using an input or a secret in a reusable workflow.

1. In the reusable workflow, use the `inputs` and `secrets` keywords to define inputs or secrets that will be passed from a caller workflow.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         username:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %}
   Para encontrar los detalles de la sintaxis para definir entradas y secretos, consulta [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) y [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
1. Reference the input or secret in the reusable workflow.

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
         - uses: ./.github/actions/my-action@v1
           with:
             username: ${{ inputs.username }}
             token: ${{ secrets.envPAT }}
   ```
   {% endraw %}
   In the example above, `envPAT` is an environment secret that's been added to the `production` environment. This environment is therefore referenced within the job.

   {% note %}

   **Note**: Environment secrets are encrypted strings that are stored in an environment that you've defined for a repository. Environment secrets are only available to workflow jobs that reference the appropriate environment. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".

   {% endnote %}

1. Pass the input or secret from the caller workflow.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Flujo de trabajo reutilizable de ejemplo

This reusable workflow file named `workflow-B.yml` (we'll refer to this later in the [example caller workflow](#example-caller-workflow)) takes an input string and a secret from the caller workflow and uses them in an action.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      username:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  example_job:
    name: Pass input and secrets to my-action
    runs-on: ubuntu-latest
    steps:
      - uses: ./.github/actions/my-action@v1
        with:
          username: ${{ inputs.username }}
          token: ${{ secrets.token }}
```
{% endraw %}

## Llamar a un flujo de trabajo reutilizable

Se llama a un flujo de trabajo reutilizable utilizando la palabra clave `uses`. A diferencia de cuando utilizas acciones en un flujo de trabajo, los flujos de trabajo reutilizables se llaman directamente desde un job y no dentro de los pasos de un job.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Se referencian los archivos de flujo de trabajo reutilizables utilizando la sintaxis:

`{owner}/{repo}/{path}/{filename}@{ref}`

Puedes llamar a flujos de trabajo múltiples, referenciando cada uno en un job separado.

{% data reusables.actions.uses-keyword-example %}

### Pasar entradas y secretos a un flujo de trabajo reutilizable

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

### Palabras clave compatibles con los jobs que llaman a un flujo de trabajo reutilizable

Cuando llamas a un flujo de trabajo reutilizable, solo puedes utilizar las siguientes palabras clave en el job que contiene la llamada:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)

   {% note %}

   **Nota:**

   * Si no se especifica `jobs.<job_id>.permissions` en el job de llamada, el flujo de trabajo llamado tendrá los permisos predefinidos para el `GITHUB_TOKEN`. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * Los permisos del `GITHUB_TOKEN` que se pasaron del flujo de trabajo llamante solo pueden bajarse de nivel (no elevarse) a través del flujo de trabajo llamado.

   {% endnote %}

### Flujo de trabajo llamante de ejemplo

Este archivo de flujo de trabajo llama a otros dos archivos de flujo de trabajo. The second of these, `workflow-B.yml` (shown in the [example reusable workflow](#example-reusable-workflow)), is passed an input (`username`) and a secret (`token`).

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      username: mona
    secrets:
      token: ${{ secrets.TOKEN }}
```
{% endraw %}

## Using outputs from a reusable workflow

A reusable workflow may generate data that you want to use in the caller workflow. To use these outputs, you must specify them as the outputs of the reusable workflow.

The following reusable workflow has a single job containing two steps. In each of these steps we set a single word as the output: "hello" and "world." In the `outputs` section of the job, we map these step outputs to job outputs called: `output1` and `output2`. In the `on.workflow_call.outputs` section we then define two outputs for the workflow itself, one called `firstword` which we map to `output1`, and one called `secondword` which we map to `output2`.

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
      - id: step1
        run: echo "::set-output name=firstword::hello"
      - id: step2
        run: echo "::set-output name=secondword::world"
```
{% endraw %}

We can now use the outputs in the caller workflow, in the same way you would use the outputs from a job within the same workflow. We reference the outputs using the names defined at the workflow level in the reusable workflow: `firstword` and `secondword`. In this workflow, `job1` calls the reusable workflow and `job2` prints the outputs from the reusable workflow ("hello world") to standard output in the workflow log.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

For more information on using job outputs, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)."

## Monitoring which workflows are being used

Puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %} para monitorear cómo se utilizan los flujos de trabajo reutilizables. La acción de bitácora de auditoría `prepared_workflow_job` se activa cuando se inicia un job de flujo de trabajo. Entre los datos registrados se incluyen:
* `repo` - la organización/repositorio en donde se ubica el job de flujo de trabajo. Para un job que llama a otro flujo de trabajo, esta es la organización/repositorio del flujo llamador.
* `@timestamp` - la fecha y hora en las que se inició el job, en formato epoch de Unix.
* `job_name` - el nombre del job que se ejecutó.
* `job_workflow_ref` - el flujo de trabajo que se utilizó, en formato `{owner}/{repo}/{path}/{filename}@{ref}`. Para un job que llama a otro flujo de trabajo, esto identifica al flujo llamado.

Para obtener más información sobre cómo utilizar la API de REST para consultar la bitácora de auditoría de una organización, consulta la sección "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% note %}

**Nota**: Los datos de auditoría de `prepared_workflow_job` solo pueden verse utilizando la API de REST. No se puede ver en la interfaz web de {% data variables.product.prodname_dotcom %} ni se incluye en los datos de auditoría exportados en JSON/CSV.

{% endnote %}

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Eventos que activan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)".
