---
title: Reutilización de flujos de trabajo
shortTitle: Reuse workflows
intro: Aprende cómo evitar la duplicación al crear un flujo de trabajo reusando los flujos existentes.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191930'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

En vez de copiar y pegar desde un flujo de trabajo hacia otro, puedes hacer flujos de trabajo reutilizables. Tú y cualquiera que tenga acceso a un flujo de trabajo reutilizable pueden entonces llamarlo desde otro flujo.

El reutilizar flujos de trabajo evita la duplicación. Esto hace que los flujos de trabajo se puedan mantener más fácilmente y te permite crear flujos de trabajo nuevos más fácilmente compilando sobre el trabajo de los demás, tal como lo haces con las acciones. La reutilización de flujos de trabajo también promueve las mejores prácticas al ayudarte a utilizar los flujos de trabajo que están bien diseñados, que ya se han probado y cuya efectividad ya se comprobó. Tu organización puede crear una librería de flujos de trabajo reutilizables que puede mantenerse centralmente.

En el diagrama siguiente se muestra una ejecución de flujo de trabajo en curso que usa un flujo de trabajo reutilizable.

* Una vez que cada uno de los tres trabajos de compilación de la izquierda del diagrama se completa correctamente, se ejecuta un trabajo dependiente denominado "Implementar".
* El trabajo "Implementar" llama a un flujo de trabajo reutilizable que contiene otros tres trabajos: "Almacenamiento provisional", "Revisión" y "Producción".
* El job de despliegue "Production" solo se ejecuta después de que el job "Staging" se haya completado con éxito.
* Cuando un trabajo tiene como destino un entorno, la ejecución del flujo de trabajo muestra una barra de progreso en la que se puede ver el número de etapas del trabajo. En el diagrama siguiente, el trabajo "Producción" contiene ocho pasos, y se puede ver cómo se está procesando el paso 6.
* El utilizar un flujo de trabajo reutilizable para ejecutar jobs de despliegue te permite ejecutarlos para cada compilación sin duplicar el código en los flujos de trabajo.

![Diagrama de un flujo de trabajo reutilizable para despliegue](/assets/images/help/images/reusable-workflows-ci-cd.png)

A un flujo de trabajo que utiliza otro flujo de trabajo se le llama flujo de trabajo "llamante". El flujo de trabajo reutilizable es un flujo "llamado". Un flujo de trabajo llamante puede utilizar varios flujos de trabajo llamados. Cada flujo de trabajo llamado se referencia en una línea simple. El resultado es que el archivo de flujo de trabajo llamante podrá contener solo unas cuantas líneas de YAML, pero podría realizar una cantidad grande de tareas cuando se ejecute. Cuando reutilizas un flujo de trabajo, se utiliza todo el flujo de trabajo llamado justo como si fuera parte del flujo de trabajo llamante.

Si utilizas un flujo de trabajo desde un repositorio diferente, cualquier acción en el flujo de trabajo llamado se ejecutará como si fuera parte del llamante. Por ejemplo, si el flujo de trabajo al que se ha llamado usa `actions/checkout`, la acción comprueba el contenido del repositorio que hospeda el flujo de trabajo que ha iniciado la llamada y no el que la recibe.

Cuando un flujo de trabajo que inicia llamadas activa uno reutilizable, el contexto `github` siempre se asocia con el primer flujo. El flujo de trabajo al que se llama se le concede acceso automáticamente a `github.token` y `secrets.GITHUB_TOKEN`. Para obtener más información sobre el contexto `github`, consulte "[Sintaxis de contexto y expresión para Acciones de GitHub](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Puedes ver los flujos de trabajo reutilizados que se referencian en tus flujos de trabajo de {% data variables.product.prodname_actions %} como dependencias en la gráfica de dependencias del repositorio que los contiene. Para obtener más información, consulte "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Flujos de trabajo reutilizables e iniciales

Los flujos de trabajo iniciales permiten que toda persona en tu organización que tenga permiso para crear flujos de trabajo lo haga de forma más fácil y rápida. Cuando las personas crean un flujo de trabajo nuevo, pueden elegir un flujo de trabajo inicial y parte o todo el trabajo de escribir dicho flujo de trabajo se hará automáticamente. Dentro de un flujo de trabajo inicial, también puedes referenciar los flujos de trabajo reutilizables para hacer más fácil que las personas se beneficien de reutilizar el código de flujo de trabajo que se administra centralmente. Si utilizas un SHA de confirmación cuando referencias el flujo de trabajo reutilizable, puedes garantizar que todo aquél que reutilice ese flujo de trabajo siempre estará utilizando el mismo código de YAML. Sin embargo, si referencias un flujo de trabajo reutilizable mediante una etiqueta o rama, asegúrate de que puedas confiar en esa versión del flujo de trabajo. Para obtener más información, consulte "[Protección de seguridad de {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)".

Para obtener más información, consulte "[Creación de flujos de trabajo de inicio para la organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Acceso a los flujos de trabajo reutilizables

Un flujo de trabajo reutilizable puede utilizar otro de ellos si {% ifversion ghes or ghec or ghae %}alguna{% else %}cualquiera{% endif %} de las siguientes condiciones es verdadera:

* Ambos flujos de trabajo están en el mismo repositorio.
* El flujo de trabajo que recibe la llamada se almacena en un repositorio público{% ifversion actions-workflow-policy %} y su {% ifversion ghec %}empresa{% else %}organización{% endif %} le permite usar flujos de trabajo públicos reutilizables{% endif %}.{% ifversion ghes or ghec or ghae %}
* El flujo de trabajo llamado se almacena en un repositorio interno y los ajustes de dicho repositorio permiten que se acceda a él. Para más información, consulta {% ifversion internal-actions %}"[Compartir acciones y flujos de trabajo con tu empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}"[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}."{% endif %}

## Utilizar ejecutores

{% ifversion fpt or ghes or ghec %}

### Utilizar los ejecutores hospedados en GitHub

La asignación de ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre se evalúa utilizando únicamente el contexto del llamante. La facturación de los ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre se asocia con el llamador. El flujo de trabajo llamante no puede utilizar ejecutores hospedados en {% data variables.product.prodname_dotcom %} desde el repositorio llamado. Para obtener más información, consulte "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

### Utilizar ejecutores auto-hospedados

{% endif %}

Los flujos de trabajo llamados que pertenecen al mismo usuario u organización{% ifversion ghes or ghec or ghae %} o empresa{% endif %} que el flujo de trabajo llamante pueden acceder a los ejecutores auto-hospedados desde el contexto del llamante. Esto significa que el flujo de trabajo llamado puede acceder a los ejecutores auto-hospedados que están:
* En el repositorio del llamador
* En la organización{% ifversion ghes or ghec or ghae %} o empresa{% endif %}, de la organización del repositorio, siempre y cuando se haya hecho disponible al ejecutor para el repositorio llamante

## Limitaciones

{% ifversion nested-reusable-workflow %}
* Puedes conectar hasta cuatro niveles de flujos de trabajo. Para obtener más información, consulta: "[Anidamiento de flujos de trabajo reutilizables](#nesting-reusable-workflows)".
{% else %}
* Los flujos de trabajo reutilizables no pueden llamar a otros que también sean reutilizables.
{% endif %}
* Los flujos de trabajo solo podrán usar a los reutilizables que se encuentren almacenados en un repositorio privado en caso de que estos también se encuentren en el mismo repositorio.
* Las variables de entorno que se configuren en un contexto `env` y que se definan a nivel del flujo de trabajo que inicia la llamada no se propagan al flujo de trabajo que recibe la llamada. Para obtener más información sobre el`env` contexto, consulta "[Sintaxis de contexto y expresión para Acciones de GitHub](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)."{% ifversion actions-reusable-workflow-matrix %}{% else %}
* La propiedad `strategy` no se admite en ningún trabajo que llame a un flujo de trabajo reutilizable.{% endif %}

## Crear un flujo de trabajo reutilizable

Los flujos de trabajo reutilizables son archivos con formato YAML, muy similares a cualquier otro archivo de flujo de trabajo. Al igual que con otros archivos de flujo de trabajo, puede buscar flujos de trabajo reutilizables en el directorio `.github/workflows` de un repositorio. No se admiten subdirectorios del directorio `workflows`.

Para que un flujo de trabajo sea reutilizable, los valores de `on` deben incluir `workflow_call`:

```yaml
on:
  workflow_call:
```

### Utilizar entradas y secretos en un flujo de trabajo reutilizable

Puedes definir entradas y secretos, las cuales pueden pasarse desde el flujo de trabajo llamante y luego utilizarse dentro del flujo llamado. Existen tres etapas para utilizar una entrada o un secreto en un flujo de trabajo reutilizable.

1. En el flujo de trabajo reutilizable, use las palabras clave `inputs` y `secrets` para definir entradas o secretos que se enviarán desde un flujo de trabajo que inicia una llamada.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} Para obtener más información sobre la sintaxis para definir entradas y secretos, consulte [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) y [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. En el flujo de trabajo reutilizable, haz referencia a la entrada o el secreto que definiste en la clave `on` del paso anterior.

   {% note %}

   **Nota**: Si los secretos se heredan mediante `secrets: inherit` flujos de trabajo de llamada, puedes hacer referencia a ellos incluso si no están definidos en la `on` clave. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)".

   {% endnote %} {%- else %}
1. En el flujo de trabajo reutilizable, haz referencia a la entrada o el secreto que definiste en la clave `on` del paso anterior.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} En el ejemplo anterior, `envPAT` es un secreto de entorno que se ha agregado al entorno `production`. Por lo tanto, este ambiente se referencia dentro del job.

   {% note %}

   **Nota**: Los secretos de entorno son cadenas cifradas que se almacenan en un entorno definido para un repositorio. Los secretos de ambiente solo se encuentran disponibles para los jobs de flujo de trabajo que referencian al ambiente adecuado. Para más información, vea "[Uso de entornos para la implementación](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".

   {% endnote %}

1. Pasa la entrada o secreto desde el flujo de trabajo llamante.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Flujo de trabajo reutilizable de ejemplo

Este archivo de flujo de trabajo reutilizable llamado `workflow-B.yml` (nos referiremos a él más adelante en el [flujo de trabajo llamante de ejemplo](#example-caller-workflow)) toma una cadena de entrada y un secreto del flujo que inicia la llamada y lo utiliza en una acción.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## Llamar a un flujo de trabajo reutilizable

Para llamar a un flujo de trabajo reutilizable, use la palabra clave `uses`. A diferencia de cuando utilizas acciones en un flujo de trabajo, los flujos de trabajo reutilizables se llaman directamente desde un job y no dentro de los pasos de un job.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Para hacer referencia a archivos de flujos de trabajo reutilizables, usa {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} una de las siguientes sintaxis:{% else %}la sintaxis:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Puedes llamar a flujos de trabajo múltiples, referenciando cada uno en un job separado.

{% data reusables.actions.uses-keyword-example %}

### Pasar entradas y secretos a un flujo de trabajo reutilizable

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### Uso de una estrategia de matriz con un flujo de trabajo reutilizable

Los trabajos que usan la estrategia de matriz pueden llamar a un flujo de trabajo reutilizable.

Una estrategia de matriz permite usar variables en una definición de trabajo para crear automáticamente varias ejecuciones de trabajos basadas en las combinaciones de las variables. Por ejemplo, puedes usar una estrategia de matriz para pasar diferentes entradas a un flujo de trabajo reutilizable. Para obtener más información sobre las matrices, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

El siguiente trabajo de ejemplo llama a un flujo de trabajo reutilizable y hace referencia al contexto de la matriz mediante la definición de la variable `target` con los valores `[dev, stage, prod]`. Ejecutará tres trabajos, uno para cada valor de la variable.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### Palabras clave compatibles con los jobs que llaman a un flujo de trabajo reutilizable

Cuando llamas a un flujo de trabajo reutilizable, solo puedes utilizar las siguientes palabras clave en el job que contiene la llamada:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Nota:**

   * Si no se especifica `jobs.<job_id>.permissions` en el trabajo que inicia la llamada, el flujo de trabajo que la recibe tendrá los permisos predeterminados de `GITHUB_TOKEN`. Para obtener más información, consulte "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * Los permisos de `GITHUB_TOKEN` que se trasladaron desde el flujo de trabajo que inició la llamada solo pueden reducirse (no aumentarse) a través del flujo de trabajo que recibió la llamada.

   {% endnote %}

### Flujo de trabajo llamante de ejemplo

Este archivo de flujo de trabajo llama a otros dos archivos de flujo de trabajo. El segundo, `workflow-B.yml` (que se muestra en el [flujo de trabajo reutilizable de ejemplo](#example-reusable-workflow)), recibe una entrada (`config-path`) y un secreto (`token`).

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
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## Anidación de flujos de trabajo reutilizables

Puedes conectar un máximo de cuatro niveles de flujos de trabajo, es decir, el flujo de trabajo del autor de la llamada de nivel superior y hasta tres niveles de flujos de trabajo reutilizables. Por ejemplo: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. No se permiten bucles en el árbol de flujo de trabajo.

Desde dentro de un flujo de trabajo reutilizable, puedes llamar a otro flujo de trabajo reutilizable.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### Pasar secretos a flujos de trabajo anidados

Puedes usar `jobs.<job_id>.secrets` en un flujo de trabajo de llamada para pasar secretos con nombre a un flujo de trabajo llamado directamente. Como alternativa, puedes usar `jobs.<job_id>.secrets.inherit` para pasar todos los secretos del flujo de trabajo de llamada a un flujo de trabajo llamado directamente. Para obtener más información, consulta la sección "[Pasar entradas y secretos a un flujo de trabajo reutilizable](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)" anterior y el artículo de referencia "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)". Los secretos solo se pasan al flujo de trabajo llamado directamente, por lo que en la cadena de flujo de trabajo A > B > C, el flujo de trabajo C solo recibirá secretos de A si se han pasado de A a B y, a continuación, de B a C.

En el ejemplo siguiente, el flujo de trabajo A pasa todos sus secretos al flujo de trabajo B, mediante la palabra clave `inherit`, pero el flujo de trabajo B solo pasa un secreto al flujo de trabajo C. Ninguno de los demás secretos pasados al flujo de trabajo B no está disponible para el flujo de trabajo C.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### Acceso y permisos

Se producirá un error en un flujo de trabajo que contenga flujos de trabajo reutilizables anidados si alguno de los flujos de trabajo anidados no es accesible para el flujo de trabajo inicial del autor de la llamada. Para obtener más información, consulta "[Acceso a flujos de trabajo reutilizables](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows)".

Los permisos `GITHUB_TOKEN` solo pueden ser los mismos o más restrictivos en los flujos de trabajo anidados. Por ejemplo, en la cadena de flujo de trabajo A > B > C, si el flujo de trabajo A tiene permiso de token `package: read`, por lo que B y C no pueden tener permiso `package: write`. Para más información, vea "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)".

Para obtener información sobre cómo usar la API para determinar qué archivos de flujo de trabajo participaron en una ejecución de flujo de trabajo determinada, consulta: "[Supervisión de qué flujos de trabajo se están usando](#monitoring-which-workflows-are-being-used)".
{% endif %}

## Utilizar salidas desde un flujo de trabajo reutilizable

Un flujo de trabajo reutilizable podría generar datos que quieras utilizar en el flujo de trabajo llamante. Para utilizar estas salidas, debes especificarlas como las salidas del flujo de trabajo reutilizable {% ifversion actions-reusable-workflow-matrix %}.

Si un flujo de trabajo reutilizable que establece una salida se ejecuta con una estrategia de matriz, la salida será la salida establecida por el último flujo de trabajo reutilizable completado correctamente de la matriz que realmente establece un valor.
Esto significa que si el último flujo de trabajo reutilizable completado correctamente establece una cadena vacía para su salida y el segundo último flujo de trabajo reutilizable completado correctamente establece un valor real para su salida, la salida contendrá el valor del segundo último flujo de trabajo reutilizable completado. {% endif %}

Los siguientes flujos de trabajo reutilizables tienen un solo job que contiene dos pasos. En cada uno de estos pasos, configuramos una sola palabra como la salida: "hello" y "world". En la sección `outputs` del trabajo, asignamos estas salidas de paso a las salidas de trabajo llamadas: `output1` y `output2`. En la sección `on.workflow_call.outputs`, definimos dos salidas para el propio flujo de trabajo: una denominada `firstword` que se asigna a `output1` y otra denominada `secondword` que se asigna a `output2`.

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

Ahora podemos utilizar las salidas en el flujo de trabajo llamante, de la misma forma en la que utilizarías las salidas de un job dentro del mismo flujo de trabajo. Hacemos referencia a las salidas mediante los nombres definidos a nivel de flujo de trabajo en el flujo de trabajo reutilizable: `firstword` y `secondword`. En este flujo de trabajo, `job1` llama al flujo de trabajo reutilizable y `job2` imprime las salidas del flujo de trabajo reutilizable ("hola mundo") a la salida estándar del registro de flujo de trabajo.

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

Para obtener más información sobre el uso de salidas de trabajo, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)".

## Monitorear qué flujos de trabajo se están utilizando

Puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %} para monitorear cómo se utilizan los flujos de trabajo reutilizables. La acción de registro de auditoría `prepared_workflow_job` se desencadena cuando se inicia un trabajo de flujo de trabajo. Entre los datos registrados se incluyen:
* `repo`: la organización o el repositorio donde se ubica el trabajo de flujo de trabajo. Para un job que llama a otro flujo de trabajo, esta es la organización/repositorio del flujo llamador.
* `@timestamp`: la fecha y hora en que se inició el trabajo, en formato de tiempo de Unix.
* `job_name`: el nombre del trabajo que se ejecutó.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` : una matriz de rutas de acceso de archivo para todos los flujos de trabajo del autor de la llamada implicados en este trabajo del flujo de trabajo. Los elementos de la matriz están en el orden inverso con el que se llamaron. Por ejemplo, en una cadena de flujos de trabajo A > B > C, al ver los registros de un trabajo en el flujo de trabajo C, la matriz será `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` : una matriz de varios SHA para todos los flujos de trabajo del autor de la llamada implicados en este trabajo del flujo de trabajo. La matriz contiene el mismo número de elementos, y en el mismo orden, que la matriz `calling_workflow_refs`. {% endif %}
* `job_workflow_ref`: el archivo de flujo de trabajo que se usó, con el formato `{owner}/{repo}/{path}/{filename}@{ref}`. Para un job que llama a otro flujo de trabajo, esto identifica al flujo llamado.

Para obtener información sobre el uso de la API de REST para consultar el registro de auditoría de una organización, consulte "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% note %}

**Nota**: Los datos de auditoría de `prepared_workflow_job` solo se pueden ver mediante la API de REST. No se puede ver en la interfaz web de {% data variables.product.prodname_dotcom %} ni se incluye en los datos de auditoría exportados en JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Volver a ejecutar flujos de trabajo y trabajos con flujos de trabajo reutilizables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Pasos siguientes

Para continuar el aprendizaje sobre {% data variables.product.prodname_actions %}, consulte "[Eventos que desencadenan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)".

{% ifversion restrict-groups-to-workflows %}Puedes estandarizar las implementaciones creando un grupo de ejecutores autohospedado que solo ejecute un flujo de trabajo reutilizable. Para obtener más información, consulte "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".{% endif %}
