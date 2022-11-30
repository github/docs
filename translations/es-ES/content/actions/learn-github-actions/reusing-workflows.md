---
title: Reutilizar flujos de trabajo
shortTitle: Reutilizar flujos de trabajo
intro: Aprende cómo evitar la duplicación al crear un flujo de trabajo reusando los flujos existentes.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghae: issue-4757
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Nota:** Los flujos de trabajo reutilizables se encuentran actualmente en beta y están sujetos a cambios.

{% endnote %}

## Resumen

En vez de copiar y pegar desde un flujo de trabajo hacia otro, puedes hacer flujos de trabajo reutilizables. Tú y cualquiera que tenga acceso a un flujo de trabajo reutilizable pueden entonces llamarlo desde otro flujo.

El reutilizar flujos de trabajo evita la duplicación. Esto hace que los flujos de trabajo se puedan mantener más fácilmente y te permite crear flujos de trabajo nuevos más fácilmente compilando sobre el trabajo de los demás, tal como lo haces con las acciones. La reutilización de flujos de trabajo también promueve las mejores prácticas al ayudarte a utilizar los flujos de trabajo que están bien diseñados, que ya se han probado y cuya efectividad ya se comprobó. Tu organización puede crear una librería de flujos de trabajo reutilizables que puede mantenerse centralmente.

A un flujo de trabajo que utiliza otro flujo de trabajo se le llama flujo de trabajo "llamante". El flujo de trabajo reutilizable es un flujo "llamado". Un flujo de trabajo llamante puede utilizar varios flujos de trabajo llamados. Cada flujo de trabajo llamado se referencia en una línea simple. El resultado es que el archivo de flujo de trabajo llamante podrá contener solo unas cuantas líneas de YAML, pero podría realizar una cantidad grande de tareas cuando se ejecute. Cuando reutilizas un flujo de trabajo, se utiliza todo el flujo de trabajo llamado justo como si fuera parte del flujo de trabajo llamante.

Si utilizas un flujo de trabajo desde un repositorio diferente, cualquier acción en el flujo de trabajo llamado se ejecutará como si fuera parte del llamante. Por ejemplo, si el flujo de trabajo llamado utiliza `actions/checkout`, la acción verifica el contenido del repositorio que hospeda el flujo de trabajo llamante y no el llamado.

Cuando un flujo de trabajo llamante activa uno reutilizable, el contexto `github` siempre se asocia con el flujo llamante. Para obtener más información sobre el contexto `github`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

## Acceso a los flujos de trabajo reutilizables

Otros flujos de trabajo pueden usar uno reutilizable si cualquiera de los siguientes casos es cierto:

* Ambos flujos de trabajo están en el mismo repositorio.
* El flujo de trabajo llamado se almacena en un repositorio público.
* El flujo de trabajo llamado se almacena en un repositorio interno y los ajustes de dicho repositorio permiten que se acceda a él. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Limitaciones

* Los flujos de trabajo reutilizables no pueden llamar a otros que también sean reutilizables.
* Los flujos de trabajo solo podrán usar a los reutilizables que se encuentren almacenados en un repositorio privado en caso de que estos también se encuentren en el mismo repositorio.
* Ninguna variable de ambiente que se configure en un contexto de `env` que se defina a nivel del flujo de trabajo en aquél llamante se propagará al flujo llamado. Para obtener más información sobre el contexto `env`, consulta la sección "[Sintaxis de contexto y expresión para GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)".

Se eliminarán las siguientes limitaciones cuando la reutilización del flujo de trabajo salga del beta:
* Los flujos de trabajo reutilizables no pueden referenciar a los ejecutores auto-hospedados.
* No puedes configurar la concurrencia de un flujo de trabajo llamado desde el flujo llamante. Para obtener más información sobre `jobs.<job_id>.concurrency`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency)".
* El flujo de trabajo llamante no puede acceder a las salidas que genera un flujo de trabajo llamado.

## Crear un flujo de trabajo reutilizable

Los flujos de trabajo reutilizables son archivos con formato YAML, muy similares a cualquier otro archivo de flujo de trabajo. Tal como con otros flujos de trabajo, puedes ubicar los reutilizables en el directorio `.github/workflows` de un repositorio. Los subdirectorios del directorio `workflows` no son compatibles.

Para que un flujo de trabajo sea reutilizable, los valores de `on` deben incluir `workflow_call`:

```yaml
on: 
  workflow_call:
```

Puedes definir entradas y secretos, las cuales pueden pasarse desde el flujo de trabajo llamante y luego utilizarse dentro del flujo llamado. El siguiente ejemplo, desde un flujo de trabajo reutilizable, define dos entradas (llamadas "ring" y "environment") y un secreto (llamado "token"):

```yaml
on:
  workflow_call:
    inputs:
      ring:
        description: 'Identifier for the target deployment ring'
        default: 'ring-0'
        required: false
        type: string
      environment:
        required: false
        type: string
    secrets:
      token:
        required: false
```

Para encontrar los detalles de la sintaxis para definir entradas y secretos, consulta [on.workflow_call.inputs](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) y [on.workflow_call.secrets](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).

### Flujo de trabajo reutilizable de ejemplo

Este archivo de flujo de trabajo reutilizable llamado `workflow-B.yml` (nos referiremos a él más adelante) toma una secuencia de entrada y un secreto del flujo llamante y lo utiliza en una acción.

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

Utiliza la palabra clave `with` para pasar entradas nombradas al flujo de trabajo llamado. Utiliza la palabra clave `secrets` para pasar los secretos nombrados. Las entradas y secretos que pases deben definirse en el flujo de trabajo llamado. Para las entradas, el tipo de datos del valor de estas debe coincidir con el tipo que se especifica para ellas en el flujo de trabajo llamado (booleano, número o secuencia).

{% raw %}
```yaml
with:
  username: mona
secrets:
  token: ${{ secrets.TOKEN }}
```
{% endraw %}

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

Este archivo de flujo de trabajo llama a otros dos archivos de flujo de trabajo. Al segundo de ellos, `workflow-B.yml` (que se muestra anteriormente), se le pasó una entrada, `username`, y un secreto, `token`.

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

## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Eventos que activan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)".
