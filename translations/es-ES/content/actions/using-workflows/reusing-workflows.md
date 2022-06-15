---
title: Reutilizar flujos de trabajo
shortTitle: Reutilizar flujos de trabajo
intro: Aprende cómo evitar la duplicación al crear un flujo de trabajo reusando los flujos existentes.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
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
{% data reusables.actions.reusable-workflows-ghes-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

En vez de copiar y pegar desde un flujo de trabajo hacia otro, puedes hacer flujos de trabajo reutilizables. Tú y cualquiera que tenga acceso a un flujo de trabajo reutilizable pueden entonces llamarlo desde otro flujo.

El reutilizar flujos de trabajo evita la duplicación. Esto hace que los flujos de trabajo se puedan mantener más fácilmente y te permite crear flujos de trabajo nuevos más fácilmente compilando sobre el trabajo de los demás, tal como lo haces con las acciones. La reutilización de flujos de trabajo también promueve las mejores prácticas al ayudarte a utilizar los flujos de trabajo que están bien diseñados, que ya se han probado y cuya efectividad ya se comprobó. Tu organización puede crear una librería de flujos de trabajo reutilizables que puede mantenerse centralmente.

El siguiente diagrama muestra tres jobs de compilación en la parte izquierda del mismo. Después de que cada uno de estos jobs se complete con éxito, se ejecutará un job dependiente llamado "Deploy". Este job crea un flujo de trabajo reutilizable que contiene tres jobs: "Staging", "Review" y "Production". El job de despliegue "Production" solo se ejecuta después de que el job "Staging" se haya completado con éxito. El utilizar un flujo de trabajo reutilizable para ejecutar jobs de despliegue te permite ejecutarlos para cada compilación sin duplicar el código en los flujos de trabajo.

![Diagrama de un flujo de trabajo reutilizable para despliegue](/assets/images/help/images/reusable-workflows-ci-cd.png)

A un flujo de trabajo que utiliza otro flujo de trabajo se le llama flujo de trabajo "llamante". El flujo de trabajo reutilizable es un flujo "llamado". Un flujo de trabajo llamante puede utilizar varios flujos de trabajo llamados. Cada flujo de trabajo llamado se referencia en una línea simple. El resultado es que el archivo de flujo de trabajo llamante podrá contener solo unas cuantas líneas de YAML, pero podría realizar una cantidad grande de tareas cuando se ejecute. Cuando reutilizas un flujo de trabajo, se utiliza todo el flujo de trabajo llamado justo como si fuera parte del flujo de trabajo llamante.

Si utilizas un flujo de trabajo desde un repositorio diferente, cualquier acción en el flujo de trabajo llamado se ejecutará como si fuera parte del llamante. Por ejemplo, si el flujo de trabajo llamado utiliza `actions/checkout`, la acción verifica el contenido del repositorio que hospeda el flujo de trabajo llamante y no el llamado.

Cuando un flujo de trabajo llamante activa uno reutilizable, el contexto `github` siempre se asocia con el flujo llamante. Se otorga acceso automáticamente al flujo de trabajo llamado para `github.token` y `secrets.GITHUB_TOKEN`. Para obtener más información sobre el contexto `github`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Puedes ver los flujos de trabajo reutilizados que se referencian en tus flujos de trabajo de {% data variables.product.prodname_actions %} como dependencias en la gráfica de dependencias del repositorio que los contiene. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Flujos de trabajo reutilizables e iniciales

Los flujos de trabajo iniciales permiten que toda persona en tu organización que tenga permiso para crear flujos de trabajo lo haga de forma más fácil y rápida. Cuando las personas crean un flujo de trabajo nuevo, pueden elegir un flujo de trabajo inicial y parte o todo el trabajo de escribir dicho flujo de trabajo se hará automáticamente. Dentro de un flujo de trabajo inicial, también puedes referenciar los flujos de trabajo reutilizables para hacer más fácil que las personas se beneficien de reutilizar el código de flujo de trabajo que se administra centralmente. Si utilizas un nombre de rama o etiqueta cuando referencias el flujo de trabajo reutilizable, puedes garantizar que todo aquél que reutilice ese flujo de trabajo siempre estará utilizando el mismo código de YAML. Sin embargo, si referencias un flujo de trabajo reutilizable mediante una etiqueta o rama, asegúrate de que puedas confiar en esa versión del flujo de trabajo. Para obtener más información, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)".

Para obtener más información, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Acceso a los flujos de trabajo reutilizables

Un flujo de trabajo reutilizable puede utilizar otro de ellos si {% ifversion ghes or ghec or ghae %}alguna{% else %}cualquiera{% endif %} de las siguientes condiciones es verdadera:

* Ambos flujos de trabajo están en el mismo repositorio.
* El flujo de trabajo llamado se almacena en un repositorio público{% ifversion actions-workflow-policy %} y tu {% ifversion ghec %}empresa{% else %}organización{% endif %} te permite utilizar flujos de trabajo reutilizables y públicos{% endif %}.{% ifversion ghes or ghec or ghae %}
* El flujo de trabajo llamado se almacena en un repositorio interno y los ajustes de dicho repositorio permiten que se acceda a él. Para obtener más información, consulta la sección {% ifversion internal-actions %}"[Compartir acciones y flujos de trabajo con tu empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}"[Administrar los ajustes de las {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}".{% endif %}

## Utilizar ejecutores

{% ifversion fpt or ghes or ghec %}

### Utilizar los ejecutores hospedados en GitHub

La asignación de ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre se evalúa utilizando únicamente el contexto del llamante. La facturación de los ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre se asocia con el llamador. El flujo de trabajo llamante no puede utilizar ejecutores hospedados en {% data variables.product.prodname_dotcom %} desde el repositorio llamado. Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

### Utilizar ejecutores auto-hospedados

{% endif %}

Los flujos de trabajo llamados que pertenecen al mismo usuario u organización{% ifversion ghes or ghec or ghae %} o empresa{% endif %} que el flujo de trabajo llamante pueden acceder a los ejecutores auto-hospedados desde el contexto del llamante. Esto significa que el flujo de trabajo llamado puede acceder a los ejecutores auto-hospedados que están:
* En el repositorio del llamador
* En la organización{% ifversion ghes or ghec or ghae %} o empresa{% endif %}, de la organización del repositorio, siempre y cuando se haya hecho disponible al ejecutor para el repositorio llamante

## Limitaciones

* Los flujos de trabajo reutilizables no pueden llamar a otros que también sean reutilizables.
* Los flujos de trabajo solo podrán usar a los reutilizables que se encuentren almacenados en un repositorio privado en caso de que estos también se encuentren en el mismo repositorio.
* Ninguna variable de ambiente que se configure en un contexto de `env` que se defina a nivel del flujo de trabajo en aquél llamante se propagará al flujo llamado. Para obtener más información sobre el contexto `env`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".
* La propiedad `strategy` no es compatible en ningún job que llame a un flujo de trabajo reutilizable.

## Crear un flujo de trabajo reutilizable

Los flujos de trabajo reutilizables son archivos con formato YAML, muy similares a cualquier otro archivo de flujo de trabajo. Tal como con otros flujos de trabajo, puedes ubicar los reutilizables en el directorio `.github/workflows` de un repositorio. Los subdirectorios del directorio `workflows` no son compatibles.

Para que un flujo de trabajo sea reutilizable, los valores de `on` deben incluir `workflow_call`:

```yaml
on:
  workflow_call:
```

### Utilizar entradas y secretos en un flujo de trabajo reutilizable

Puedes definir entradas y secretos, las cuales pueden pasarse desde el flujo de trabajo llamante y luego utilizarse dentro del flujo llamado. Existen tres etapas para utilizar una entrada o un secreto en un flujo de trabajo reutilizable.

1. En el flujo de trabajo reutilizable, utiliza las palabras clave `inputs` y `secrets` para definir entradas o secretos que se pasarán desde un flujo de trabajo llamante.
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
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. En el flujo de trabajo reutilizable, referencia la entrada o secreto que definiste en la clave `on` en el paso anterior. Si los secretos se heredan utilizando `secrets: inherit`, puedes referenciarlos incluso si no se definen en la clave `on`.
   {%- else %}
1. En el flujo de trabajo reutilizable, referencia la entrada o secreto que definiste en la clave `on` en el paso anterior.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
         - uses: ./.github/workflows/my-action
           with:
             username: ${{ inputs.username }}
             token: ${{ secrets.envPAT }}
   ```
   {% endraw %}
   En el ejemplo anterior, `envPAT` es un secreto de ambiente que se ha agregado al ambiente de `production`. Por lo tanto, este ambiente se referencia dentro del job.

   {% note %}

   **Note**: Los secretos de ambiente son secuencias cifradas que se almacenan en un ambiente que hayas definido para un repositorio. Los secretos de ambiente solo se encuentran disponibles para los jobs de flujo de trabajo que referencian al ambiente adecuado. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".

   {% endnote %}

1. Pasa la entrada o secreto desde el flujo de trabajo llamante.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Flujo de trabajo reutilizable de ejemplo

Este flujo de trabajo reutilizable llamado `workflow-B.yml` (al cual nos referiremos más adelante en el [flujo de trabajo llamante de ejemplo](#example-caller-workflow)) toma un secreto y secuencia de entrada desde el flujo de trabajo llamante y los utiliza en una acción.

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
      - uses: ./.github/workflows/my-action
        with:
          username: ${{ inputs.username }}
          token: ${{ secrets.token }}
```
{% endraw %}

## Llamar a un flujo de trabajo reutilizable

Se llama a un flujo de trabajo reutilizable utilizando la palabra clave `uses`. A diferencia de cuando utilizas acciones en un flujo de trabajo, los flujos de trabajo reutilizables se llaman directamente desde un job y no dentro de los pasos de un job.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Referenciaras los archivos de flujo de trabajo reutilizables utilizando {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}una de las siguientes sintaxis:{% else %}la sintaxis:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

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
 {% ifversion actions-inherit-secrets-reusable-workflows %}* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit){% endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Nota:**

   * Si no se especifica `jobs.<job_id>.permissions` en el job de llamada, el flujo de trabajo llamado tendrá los permisos predefinidos para el `GITHUB_TOKEN`. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * Los permisos del `GITHUB_TOKEN` que se pasaron del flujo de trabajo llamante solo pueden bajarse de nivel (no elevarse) a través del flujo de trabajo llamado.

   {% endnote %}

### Flujo de trabajo llamante de ejemplo

Este archivo de flujo de trabajo llama a otros dos archivos de flujo de trabajo. Al segundo de estos, `workflow-B.yml` (el cual se muestra en el [flujo de trabajo reutilizable de ejemplo](#example-reusable-workflow)), se le pasa una entrada (`username`) y un secreto (`token`).

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

## Utilizar salidas desde un flujo de trabajo reutilizable

Un flujo de trabajo reutilizable podría generar datos que quieras utilizar en el flujo de trabajo llamante. Para utilizar estas salidas, debes especificarlas como las salidas del flujo de trabajo reutilizable.

Los siguientes flujos de trabajo reutilizables tienen un solo job que contiene dos pasos. En cada uno de estos pasos, configuramos una sola palabra como la salida: "hello" y "world". En la sección de `outputs` del job, mapeamos estas salidas de paso a las salidas de jobs llamadas: `output1` y `output2`. En la sección de `on.workflow_call.outputs`, definimos entonces a las dos salidas del mismo flujo de trabajo, una llamada `firstword`, la cual mapeamos a `output1`, y otra llamada `secondword`, la cual mapeamos a `output2`.

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

Ahora podemos utilizar las salidas en el flujo de trabajo llamante, de la misma forma en la que utilizarías las salidas de un job dentro del mismo flujo de trabajo. Referenciamos las salidas utilizando los nombres que se definen a nivel del flujo de trabajo en el reutilizable: `firstword` y `secondword`. En este flujo de trabajo, `job1` llama al flujo de trabajo reutilizable y `job2` imprime las salidas desde el flujo de trabajo reutilizable ("hello world") en una salida estándar en la bitácora del mismo.

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

Para obtener más información sobre cómo utilizar las salidas de los jobs, consulta la sección "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)".

## Monitorear qué flujos de trabajo se están utilizando

Puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %} para monitorear cómo se utilizan los flujos de trabajo reutilizables. La acción de bitácora de auditoría `prepared_workflow_job` se activa cuando se inicia un job de flujo de trabajo. Entre los datos registrados se incluyen:
* `repo` - la organización/repositorio en donde se ubica el job de flujo de trabajo. Para un job que llama a otro flujo de trabajo, esta es la organización/repositorio del flujo llamador.
* `@timestamp` - la fecha y hora en las que se inició el job, en formato epoch de Unix.
* `job_name` - el nombre del job que se ejecutó.
* `job_workflow_ref` - el flujo de trabajo que se utilizó, en formato `{owner}/{repo}/{path}/{filename}@{ref}`. Para un job que llama a otro flujo de trabajo, esto identifica al flujo llamado.

Para obtener más información sobre cómo utilizar la API de REST para consultar la bitácora de auditoría de una organización, consulta la sección "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% note %}

**Nota**: Los datos de auditoría de `prepared_workflow_job` solo pueden verse utilizando la API de REST. No se puede ver en la interfaz web de {% data variables.product.prodname_dotcom %} ni se incluye en los datos de auditoría exportados en JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Volver a ejecutar los flujos de trabajo y los jobs con flujos de trabajo reutilizables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Eventos que activan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)".

{% ifversion restrict-groups-to-workflows %}Puedes estandarizar los despliegues creando un grupo de ejecutores auto-hospedados que solo ejecute un flujo de trabajo reutilizable. Para obtener más información, consulta la sección "[Administrar acceso a los ejecutores auto-hospedados utilizando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".{% endif %}
