---
title: Eventos que desencadenan flujos de trabajo
intro: 'Puedes configurar tus flujos de trabajo para que se ejecuten cuando ocurre una actividad específica en {% data variables.product.product_name %}, en un horario programado o cuando se produce un evento fuera de {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Eventos que desencadenan flujos de trabajo
---

## Acerca de los eventos que activan flujos de trabajo

Los activadores de los flujos de trabajo son eventos que ocasionan que se ejecute un flujo de trabajo. Para obtener más información sobre cómo utilizar activadores de flujo de trabajo, consulta la sección "[Activar un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)".

## Eventos disponibles

Algunos eventos tienen tipos de actividad múltiple. Para ellos, puedes especificar qué tipos de actividad activarán una ejecución de flujo de trabajo. Para obtener más información sobre qué significa cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)". Nota que no todos los eventos de webhook activan flujos de trabajo.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Carga del evento Webhook                                                                                                | Tipos de actividad                                     | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | ------------------- |
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se cambian las reglas de protección de rama en el repositorio del flujo de trabajo. Para obtener más información sobre las reglas de protección de rama, consulta la sección "[Acerca de las ramas protegidasrama protegida](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)". Para obtener más información acerca de las API de regla de protección de rama, consulta la sección "[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)" en la documentación de la API de GraphQL o "[Ramas](/rest/reference/branches)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una regla de protección de rama se muestre como `created` o `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Carga del evento Webhook                                                                       | Tipos de actividad                                                                          | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre cada uno de los tipos de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando ocurre actividad relacionada con una ejecución de verificación. Una ejecución de verificación es una prueba individual que forma parte de una suite de verificación. Para obtener más información, consulta la sección "[Iniciar con la API de verificaciones](/rest/guides/getting-started-with-the-checks-api)". Para obtener más información sobre las API de ejecución de verificación, consulta la sección "[CheckRun](/graphql/reference/objects#checkrun)" en la documentación de la API de GraphQL o "[Checks](/rest/reference/checks#runs)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una ejecución de verificación esté como `rerequested` o `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Carga del evento Webhook                                                                           | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| -------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed`      | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre cada uno de los tipos de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)". Aunque solo el tipo de actividad `started` es compatible, el especificar el tipo de actividad mantendrá a tu flujo de trabajo como específico si se agregan más tipos de actividad en el futuro. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota:** Para evitar flujos de trabajo recurrentes, este evento no activa flujos de trabajo si la comprobación de suite fue creada por {% data variables.product.prodname_actions %}.

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre una actividad de suite de verificación. Una suite de verificación es una recolección de ejecuciones de verificación para una confirmación específica. Las suites de verificación resumen el estado y conclusión de las ejecuciones de verificación que están en la suite. Para obtener más información, consulta la sección "[Iniciar con la API de verificaciones](/rest/guides/getting-started-with-the-checks-api)". Para obtener más información sobre las API de suite de verificación, consulta la sección "[CheckSuite](/graphql/reference/objects#checksuite)" en la documentación de la API de GraphQL o "[Checks](/rest/reference/checks#suites)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una suite de verificación esté como `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create (crear)`

| Carga del evento Webhook                                                                         | Tipos de actividad | `GITHUB_SHA`                                     | `GITHUB_REF`           |
| ------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------ | ---------------------- |
| [`create (crear)`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | n/a                | Última confirmación en la rama o etiqueta creada | Rama o etiqueta creada |

{% note %}

**Nota**: No se creará ningún evento cuando crees más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando alguien crea una referencia de Git (rama o etiqueta de Git) en el repositorio del flujo de trabajo. Para obtener más información sobre las API para crear una referencia de Git, consulta la sección "[createRef](/graphql/reference/mutations#createref)" en la documentación de la API de GraphQL o "[Crear una referencia](/rest/reference/git#create-a-reference)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `crear`.

```yaml
on:
  create
```

### `delete`

| Carga del evento Webhook                                                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | n/a                | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: No se creará ningún evento cuando borres más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando alguien borra una referencia de Git (rama o etiqueta de Git) en el repositorio del flujo de trabajo. Para obtener más información sobre las API para borrar una referencia de Git, consulta la sección "[deleteRef](/graphql/reference/mutations#deleteref)" en la documentación de la API de GraphQL o "[Borrar una referencia](/rest/reference/git#delete-a-reference)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `eliminar`.

```yaml
on:
  delete
```

### `deployment`

| Carga del evento Webhook                                                                         | Tipos de actividad | `GITHUB_SHA`                   | `GITHUB_REF`                                                                                |
| ------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------ | ------------------------------------------------------------------------------------------- |
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | n/a                | Confirmación de implementación | Rama o etiqueta que se debe desplegar (en blanco si se crea con el SHA de una confirmación) |

Ejecuta tu flujo de trabajo cuando alguien crea un despliegue en el repositorio del flujo de trabajo. Las implementaciones creadas con SHA de confirmación pueden no tener una referencia de Git. Para obtener más información sobre las API para crear un despliegue, consulta la sección "[createDeployment](/graphql/reference/mutations#createdeployment)" en la documentación de la API de GraphQL o "[Despliegues](/rest/reference/repos#deployments)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `implementación`.

```yaml
on:
  deployment
```

### `deployment_status`

| Carga del evento Webhook                                                                                       | Tipos de actividad | `GITHUB_SHA`                   | `GITHUB_REF`                                                       |
| -------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------------------------------------------------------------ |
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | n/a                | Confirmación de implementación | Rama o etiqueta que se debe implementar (vacío si está confirmada) |

{% note %}

**Nota:** Cuando un estado de despliegue se ajusta en `inactive`, no se activará ninguna ejecución de flujo de trabajo.

{% endnote %}

Ejecuta tu flujo de trabajo cuando un tercero proporciona un estado de despliegue. Las implementaciones creadas con SHA de confirmación pueden no tener una referencia de Git. Para obtener más información sobre las API para crear un estado de despliegue, consulta la sección "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" en la documentación de la API de GraphQL o "[Crear un estado de despliegue](/rest/reference/deployments#create-a-deployment-status)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `implementación`.

```yaml
on:
  deployment_status
```

{% ifversion fpt or ghec %}
### `debate`

| Carga del evento Webhook                                                                     | Tipos de actividad                                                                                                                                                                                                                                                                                      | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`debate`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un debate ene l repositorio del mismo. Para ver la actividad relacionada con los comentarios en un debate, utiliza el evento [`discussion_comment`](#discussion_comment). Para obtener más información sobre los debates, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obtener más información sobre la API de GraphQL, consulta la sección de "[Debate](/graphql/reference/objects#discussion)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un debate está como `created`, `edited`, o `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Carga del evento Webhook                                                                               | Tipos de actividad                                                | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Ejecuta tu flujo de trabajo cuando un comentario de un debate se crea o modifica en el repositorio del mismo. Para ver la actividad relacionada con un debate en vez de los comentarios del mismo, utiliza el evento [`discussion`](#discussion). Para obtener más información sobre los debates, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obtener más información sobre la API de GraphQL, consulta la sección de "[Debate](/graphql/reference/objects#discussion)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando el comentario de un debate se muestra como `created` o `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `bifurcación`

| Carga del evento Webhook                                                                    | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`bifurcación`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | n/a                | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien bifurca un repositorio. Para obtener más información sobre la API de REST, consulta la sección "[Crear una bifurcación](/rest/reference/repos#create-a-fork)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento de `bifurcación`.

```yaml
on:
  fork
```

### `gollum`

| Carga del evento Webhook                                                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a                | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien crea o actualiza una página de Wiki. Para obtener más información, consulta la sección "[Acerca de los wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `gollum`.

```yaml
on:
  gollum
```

### `comentario_propuesta`

| Carga del evento Webhook                                                                            | Tipos de actividad                                                | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`comentario_propuesta`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea, edita o borra un comentario en una propuesta o solicitud de cambios. Para obtener más información sobre las API de comentarios en propuestas, consulta la sección "[ssueComment](/graphql/reference/objects#issuecomment)" en la documentación de la API de GraphQL o "[comentarios de propuesta](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un comentario en una propuesta o solicitud de cambios se muestre como `created` o `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` solo en propuestas o solicitudes de cambio

El evento `issue_comment` ocurre para los comentarios tanto en propuestas como en solicitudes de cambios. Puedes utilizar la propiedad `github.event.issue.pull_request` en un condicional para tomar una acción diferente dependiendo de si el objeto activador fue una propuesta o una solicitud de cambios.

Por ejemplo, este flujo de trabajo ejecutará el job `pr_commented` únicamente si el evento `issue_comment` se originó de una solicitud de cambios. Este ejecutará el job `issue_commented` únicamente si el evento `issue_comment` se originó desde una propuesta.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `propuestas`

| Carga del evento Webhook                                                                     | Tipos de actividad                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`propuestas`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una propuesta en el repositorio de un flujo de trabajo. Para ver la actividad relacionada con los comentarios de una propuesta, utiliza el evento [`issue_comment`](#issue_comment). Para obtener más información acerca de los informes de problemas, consulta la sección "[Acerca de los informes de problemas](/issues/tracking-your-work-with-issues/about-issues)". Para obtener la información sobre las API de propuestas, consulta la sección "[Propuestas](/graphql/reference/objects#issue)" en la documentación de la API de GraphQL o "[Propuestas](/rest/reference/issues)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una propuesta ha sido `opened` (abierta), `edited` (editada), o `milestoned` (marcada como hito).

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `etiqueta`

| Carga del evento Webhook                                                                  | Tipos de actividad                                                | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`etiqueta`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una etiqueta en el repositorio del mismo. Para obtener más información sobre las etiquetas, consulta la sección "[Administrar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)". Para obtener más información sobre las API de etiquetas, consulta la sección "[Etiqueta](/graphql/reference/objects#label)" en la documentación de la API de GraphQL o "[Etiquetas](/rest/reference/issues#labels)" en la documentación de la API de REST.

Si quieres ejecutar tu flujo de trabajo cuando se agrega o elimina una etiqueta de una propuesta, solicitud de cambios o debate, utiliza los tipos de actividad `labeled` o `unlabeled` para los eventos [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) o [`discussion`](#discussion) en su lugar.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un miembro ha sido `creado` o `eliminado`.

```yaml
on:
  label:
    types: [created, deleted]
```

### `hito`

| Carga del evento Webhook                                                                  | Tipos de actividad                                                                                          | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`hito`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un hito en el repositorio de tu flujo de trabajo. Para obtener más información sobre los hitos, consulta la sección "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)". Para obtener más información sobre las API de hitos, consulta "[Hito](/graphql/reference/objects#milestone)" en la documentación de la API de GraphQL o "[Hitos](/rest/reference/issues#milestones)" en la documentación de la API de REST.

Si quieres ejecutar tu flujo de trabajo cuando se agregue o elimine una propuesta de un hito, utiliza los tipos de actividad `milestoned` o `demilestoned` para el evento [`issues`](#issues) en su lugar.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un hito ha sido `abierto` o `eliminado`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Carga del evento Webhook                                                                         | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------ | ------------------ | --------------------------------------------- | ------------ |
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | n/a                | Última confirmación en la rama predeterminada | n/a          |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien sube información a una rama que sea la fuente de publicación de {% data variables.product.prodname_pages %} si {% data variables.product.prodname_pages %} se encuentra habilitado para el repositorio. Para obtener más información sobre las fuentes de publicación de {% data variables.product.prodname_pages %}, consulta la sección "[Cojnfigurar una fuente de publicación para tu sitio de GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)". Para obtener información acerca de la API de REST, consulta la sección "[Páginas](/rest/reference/repos#pages)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `page_build`.

```yaml
on:
  page_build
```

### `project`

| Carga del evento Webhook                                                                   | Tipos de actividad                                                                                            | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} El tipo de actividad `edited` se refiere a cuando se edita un tablero de proyecto, no así una columna o tarjeta de este. Para obtener más información sobre cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo ocurre para proyectos que le pertenecen al repositorio del flujo de trabajo y no para proyectos que pertenezcan a usuarios u organizaciones ni para aquellos que le pertenezcan a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Nota**: Este evento no ocurre para los proyectos (beta). Para obtener más información, consulta la sección "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un tablero de proyecto. Para encontrar actividad relacionada con tarjetas o columnas en un tablero de proyecto, utiliza los eventos [`project_card`](#project_card) o [`project_column`](#project_column) en su lugar. Para obtener más información acerca de los tableros de proyecto, consulta la sección "[Acerca de los tableros de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener más información sobre las API de tablero de proyecto, consulta la sección de "[Proyecto](/graphql/reference/objects#project)" en la documentación de la API de GraphQL o "[Proyectos](/rest/reference/projects)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un proyecto ha sido `creado` o `eliminado`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Carga del evento Webhook                                                                             | Tipos de actividad                                                                                             | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo ocurre para proyectos que le pertenecen al repositorio del flujo de trabajo y no para proyectos que pertenezcan a usuarios u organizaciones ni para aquellos que le pertenezcan a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Nota**: Este evento no ocurre para los proyectos (beta). Para obtener más información, consulta la sección "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una tarjeta en un tablero de proyecto. Para ver la actividad relacionada con las columnas o tableros de proyecto, utiliza el evento [`project`](#project) o [`project_column`](#project_column) en su lugar. Para obtener más información acerca de los tableros de proyecto, consulta la sección "[Acerca de los tableros de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener más información sobre las API de tarjeta de proyecto, consulta la sección "[ProjectCard](/graphql/reference/objects#projectcard)" en la documentación de la API de GraphQL o "[Tarjetas de proyecto](/rest/reference/projects#cards)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una tarjeta de proyecto se muestre como `created` o `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Carga del evento Webhook                                                                                 | Tipos de actividad                                                          | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------- | ------------------- |
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre cada uno de los tipos de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo ocurre para proyectos que le pertenecen al repositorio del flujo de trabajo y no para proyectos que pertenezcan a usuarios u organizaciones ni para aquellos que le pertenezcan a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Nota**: Este evento no ocurre para los proyectos (beta). Para obtener más información, consulta la sección "[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una columna en un tablero de proyecto. Para ver la actividad relacionada con las tarjetas o tableros de proyecto, utiliza el evento [`project`](#project) o [`project_card`](#project_card) en su lugar. Para obtener más información acerca de los tableros de proyecto, consulta la sección "[Acerca de los tableros de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener más información sobre las API de columna de proyecto, consulta la sección "[ProjectColumn](/graphql/reference/objects#projectcolumn)" en la documentación de la API de GraphQL o "[Columnas de proyecto](/rest/reference/projects#columns)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una columna de proyecto ha sido `created` o `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Carga del evento Webhook                                                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | n/a                | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando el repositorio de tu flujo de trabajo cambia de privado a público. Para obtener más información acerca de la API de REST, consulta la sección "[Editar repositorios](/rest/reference/repos#edit)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `público`.

```yaml
on:
  public
```

### `solicitud_extracción`

| Carga del evento Webhook                                                                                     | Tipos de actividad                                                                                                                                                                                                                                                                                                                                                                                                                                         | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| [`solicitud_extracción`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)". Predeterminadamente, un flujo de trabajo solo se ejecuta cuando el tipo de actividad de en evento de `pull_request` es `opened`, `synchronize`, o `reopened`. Para activar los flujos de trabajo de acuerdo a sus tipos de actividad, utiliza la palabra clave `types`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo no se ejecutarán en la actividad de `pull_request` si la solicitud de cambios tiene un conflicto de fusión. El conflicto de fusión se debe resolver primero.

Por el contrario, los flujos de trabajo con el evento `pull_request_target` se ejecutarán incluso si la solicitud de cambios presenta un conflicto de fusión. Antes de utilizar el activador `pull_request_target`, deberás estar consciente de los riesgos de seguridad. Para obtener más información, consulta la sección [`pull_request_target`](#pull_request_target).

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre alguna actividad en la solicitud de cambios del flujo de trabajo del repositorio. Por ejemplo, si no se especifican tipos de actividad, el flujo de trabajo se ejecutará cuando se abra o vuelva a abrir una solicitud de cambios o cuando se actualice la rama de encabezado de la misma. Para encontrar actividad relacionada con las revisiones, comentarios de revisión o comentarios de las solicitudes de cambios, utiliza los eventos [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) o [`issue_comment`](#issue_comment) en su lugar. Para obtener más información sobre las API de solicitud de cambios, consulta la sección "[PullRequest](/graphql/reference/objects#pullrequest)" en la documentación de la API de GraphQL o "[Solicitudes de cambios](/rest/reference/pulls)" en la documentación de la API de REST.

Nota que el `GITHUB_SHA` para este evento es la última confirmación de fusión de la rama fusionada de la solicitud de cambios. Si quieres obtener la ID de confirmación para la última confirmación de la rama de encabezado de la solicitud de cambios, utiliza `github.event.pull_request.head.sha` en su lugar.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se haya abierto o vuelto a abrir una solicitud de cambios.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Puedes utilizar el contexto del evento para controlar aún más cuándo se ejecutarán los jobs en tu flujo de trabajo. Por ejemplo, este flujo de trabajo se ejecutará cuando se solicite una revisión en una solicitud de cambios, pero el job `specific_review_requested` solo se ejecutará cuando se solicite una revisión de `octo-team`.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### Ejecutar tu flujo de trabajo con base en la rama base o de encabezado de una solicitud de cambios.

Puedes utilizar el filtro `branches` o `branches-ignore` para configurar tu flujo de trabajo para que solo se ejecute en solicitudes de cambio que apunten a ramas específicas. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien vuelva a abrir una solicitud de cambios que apunte a una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajos solo se ejecutará cuando se abra una solicitud de cambios que incluya un cambio en un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Para ejecutar un job con base en el nombre de la rama de encabezado de la solicitud de cambios (contrario al nombre de la rama base de dicha solicitud de cambios), utiliza el contexto `github.head_ref` en un condicional. Por ejemplo, este flujo de trabajo se ejecutará cada que se abra una solicitud de cambios, pero el job `run_if` solo se ejecutará si el encabezado de la solicitud de cambios es una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Ejecutar tu flujo de trabajo con base en los archivos que cambiaron en una solicitud de cambios

También puedes configurar tu flujo de trabajo para que se ejecute cuando una solicitud de cambios cambie archivos específicos. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando una solicitud de cambios incluya un cambio en un archivo de JavaScript (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajos solo se ejecutará cuando se abra una solicitud de cambios que incluya un cambio en un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Ejecutar tu flujo de trabajo cuando se fusiona una solicitud de cambios

Cuando se fusiona una solicitud de cambios, esta se cierra automáticamente. Para ejecutar un flujo de trabajo cuando se fusiona una solicitud de cambios, utiliza el tipo de evento `pull_request` `closed` junto con una condicional que verifique el valor `merged` del mismo. Por ejemplo, el siguiente flujo de trabajo se ejecutará cada que se cierre una solicitud de cambios. El job `if_merged` solo se ejecutará si la solicitud de cambios también se fusionó.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (utiliza `issue_comment`)

Para ejecutar tu flujo de trabajo cuando se crea, edita o borra un comentario en una solicitud de cambios (no así en un diff de esta), utiliza el evento [`issue_comment`](#issue_comment). Para encontrar actividad relacionada con las revisiones de solicitudes de cambios o comentarios de revisión de estas, utiliza los eventos [`pull_request_review`](#pull_request_review) o [`pull_request_review_comment`](#pull_request_review_comment).

### `revisión_solicitud de extracción`

| Carga del evento Webhook                                                                                                        | Tipos de actividad                                         | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| [`revisión_solicitud de extracción`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Ejecuta tu flujo de trabajo cuando se emite, edita o descarta una revisión de una solicitud de cambios. Una revisión de solicitud de cambios es un grupo de comentarios de dicha revisión junto con un comentario del cuerpo y un estado. Para encontrar actividad relacionada con los comentarios de revisión de solicitudes de cambio o comentarios de solicitudes de cambios, utiliza los eventos [`pull_request_review_comment`](#pull_request_review_comment) o [`issue_comment`](#issue_comment) en su lugar. Para obtener más información acerca de las API de revisión de solicitudes de cambio, consulta la sección "[PullRequestReview](/graphql/reference/objects#pullrequest)" en la documentación de la API de GraphQL o "[Revisiones de solicitudes de cambio](/rest/reference/pulls#reviews)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una revisión de solicitud de cambios está como `edited` o `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Ejecutar un flujo de trabajo cuando se aprueba una solicitud de cambios

Para ejecutar tu flujo de trabajo cuando se aprobó una solicitud de cambios, puedes activarlo con el tipo `submitted` del evento `pull_request_review` y luego verificar el estado de revisión con la propiedad `github.event.review.state`. Por ejemplo, este flujo de trabajo se ejecutará cada que se emita una revisión de solicitud de cambios, pero el job `approved` solo se ejecutará si la revisión emitida es una aprobada:

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `comentarios _revisiones_solicitudes de extracción`

| Carga del evento Webhook                                                                                                                                 | Tipos de actividad                                     | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------ |
| [`comentarios _revisiones_solicitudes de extracción`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Ejecuta tu flujo de trabajo cuando se modifica un comentario de una revisión de solicitud de cambios. Un comentario de revisión de una solicitud de cambios es un comentario en el diff de dicha solicitud. Para encontrar actividad relacionada con las revisiones o comentarios de las solicitudes de cambio, utiliza los eventos [`pull_request_review`](#pull_request_review) o [`issue_comment`](#issue_comment) en su lugar. Para obtener más información acerca de las API de comentarios de las revisiones de solicitudes de cambio, consulta la sección "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" en la documentación de la API de GraphQL o "[Comentarios de revisión](/rest/reference/pulls#comments)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un comentario de revisión de solicitud de cambios está como `created` o `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Carga del evento Webhook                                                                                     | Tipos de actividad                                                                                                                                                                                                                                                                                                                                                                                                                                         | `GITHUB_SHA`                                                      | `GITHUB_REF`                            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| [`solicitud_extracción`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Última confirmación en la rama base de la solicitud de extracción | Rama base de la solicitud de extracción |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)". Predeterminadamente, un flujo de trabajo se ejecuta únicamente cuando el tipo de actividad de evento `pull_request_target` se encuentra como `opened`, `synchronize` o `reopened`. Para activar los flujos de trabajo de acuerdo a sus tipos de actividad, utiliza la palabra clave `types`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre alguna actividad en la solicitud de cambios del flujo de trabajo del repositorio. Por ejemplo, si no se especifican tipos de actividad, el flujo de trabajo se ejecutará cuando se abra o vuelva a abrir una solicitud de cambios o cuando se actualice la rama de encabezado de la misma.

Este evento se ejecuta en el contexto de la base de la solicitud de cambios en vez de en aquel de la confirmación de fusión, como lo hace el evento `pull_request`. Esto previene la ejecución del código no seguro desde el encabezado de la solicitud de cambios que pudiera alterar tu repositorio o robar cualquier secreto que utilices en tu flujo de trabajo. Este evento permite que tu flujo de trabajo haga cosas como etiquetar o comentar en las solicitudes de cambios de las bifurcaciones. Evita utilizar este evento si necesitas compilar o ejecutar código desde la solicitud de cambios.

{% warning %}

**Advertencia:** En el caso de los flujos de trabajo que se activan con el evento `pull_request_target`, se otorgarán permisos de lectura/escritura en el repositorio al `GITHUB_TOKEN` a menos de que se especifique la clave `permissions` y que el flujo de trabajo pueda acceder a los secretos, incluso cuando se activa desde una bifurcación. Aunque las ejecuciones de flujo de trabajo se ejecutan en el contexto de la base de la solicitud de cambios, debes asegurarte de que no revisas, compilas o ejecutas código no confiable desde ella con este evento. Adicionalmente, cualquier caché comparte el mismo alcance que la rama base. Para ayudar a prevenir el envenenamiento del caché, no debes guardarlo si existe la posibilidad de que su contenido se haya alterado. Para obtener más información, consulta la sección "[Mantener seguros tus GitHub Actions y flujos de trabajo: Prevenir solicitudes de pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" en el sitio web de GitHub Security Lab.

{% endwarning %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una solicitud de cambios esté como `assigned`, `opened`, `syncronize` o `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Ejecutar tu flujo de trabajo con base en la rama base o de encabezado de una solicitud de cambios.

Puedes utilizar el filtro `branches` o `branches-ignore` para configurar tu flujo de trabajo para que solo se ejecute en solicitudes de cambio que apunten a ramas específicas. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien vuelva a abrir una solicitud de cambios que apunte a una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajos solo se ejecutará cuando se abra una solicitud de cambios que incluya un cambio en un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

Para ejecutar un job con base en el nombre de la rama de encabezado de la solicitud de cambios (contrario al nombre de la rama base de dicha solicitud de cambios), utiliza el contexto `github.head_ref` en un condicional. Por ejemplo, este flujo de trabajo se ejecutará cada que se abra una solicitud de cambios, pero el job `run_if` solo se ejecutará si el encabezado de la solicitud de cambios es una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Ejecutar tu flujo de trabajo con base en los archivos que cambiaron en una solicitud de cambios

Puedes utilizar el filtro `paths` o `paths-ignore` para configurar tu flujo de trabajo para que se ejecute cuando una solicitud de cambios cambie archivos específicos. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando una solicitud de cambios incluya un cambio en un archivo de JavaScript (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajos solo se ejecutará cuando se abra una solicitud de cambios que incluya un cambio en un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Ejecutar tu flujo de trabajo cuando se fusiona una solicitud de cambios

Cuando se fusiona una solicitud de cambios, esta se cierra automáticamente. Para ejecutar un flujo de trabajo cuando se fusiona una solicitud de cambios, utiliza el tipo de evento `pull_request_target` `closed` junto con una condicional que verifique el valor `merged` del mismo. Por ejemplo, el siguiente flujo de trabajo se ejecutará cada que se cierre una solicitud de cambios. El job `if_merged` solo se ejecutará si la solicitud de cambios también se fusionó.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `subir`

| Carga del evento Webhook                                                              | Tipos de actividad | `GITHUB_SHA`                                                                                  | `GITHUB_REF`    |
| ------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------- | --------------- |
| [`subir`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a                | Confirmación subida, a menos que se elimine una rama (cuando se trata de la rama por defecto) | Ref actualizado |

{% note %}

**Nota:** La carga disponible del webhook para las Acciones de GitHub no incluye los atributos `añadidos`, `eliminados`, y `modificados` en el objeto de `confirmación`. Puedes recuperar el objeto de confirmación completo utilizando la API. Para obtener información, consulta la sección "[Confirmación](/graphql/reference/objects#commit)" en la documentación de la API de GraphQL o "[Obtén una confirmación](/rest/reference/commits#get-a-commit)" en la documentación de la API de REST.

{% endnote %}

{% note %}

**Nota**: No se creará ningún evento cuando subas más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando subes una confirmación o etiqueta.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `push`.

```yaml
on:
  push
```

{% note %}

**Nota**: Cuando un evento de webhook de `push` activa una ejecución de flujo de trabajo, el campo "pushed by" de la IU de la acción muestra la cuenta de la persona que sube información y no del autor o confirmante. Sin embargo, si los cambios se suben a un repositorio utilizando autenticación SSH con una llave de despliegue, entonces el campo "subido por" será el adminsitrador del repositorio quien verificó la llave de despliegue cuando s e agregó al repositorio.

{% endnote %}

#### Ejecutar tu flujo de trabajo solo cuando ocurra una subida de información a ramas específicas

Puedes utilizar el filtro `branches` o `branches-ignore` para configurar tu flujo de trabajo para que solo se ejecute cuando se suben ramas específicas. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien suba información a la rama `main` o a alguna que inicie con `releases/`.

```yaml
on:
  push:
    branches:    
      - 'main'
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando se suba información que incluya un cambio a un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Ejecutar tu flujo de trabajo únicamente cuando ocurra una subida de etiquetas específicas

Puedes utilizar el filtro `tags` o `tags-ignore` para configurar tu flujo de trabajo para que solo se ejecute cuando se suban etiquetas específicas. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien suba una etiqueta que inicie con `v1.`.

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### Ejecutar tu flujo de trabajo únicamente cuando una subida de información afecta archivos específicos

Puedes utilizar el filtro `paths` o `paths-ignore` para configurar que tu flujo de trabajo se ejecute cuando ocurra una subida de archivos específicos. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien suba un cambio a un archivo de JavaScript (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando se suba información que incluya un cambio a un archivo de JavaScript (`.js`) en una rama cuyo nombre inicie con `releases/`:

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| Carga del evento Webhook                                                                            | Tipos de actividad                  | `GITHUB_SHA`                       | `GITHUB_REF`                          |
| --------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------- | ------------------------------------- |
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Confirmación del paquete publicado | Rama o etiqueta del paquete publicado |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando ocurre actividad relacionada con el {% data variables.product.prodname_registry %} en tu repositorio. Para obtener más información, consulta la "[Documentación del {% data variables.product.prodname_registry %}](/packages)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una versión de paquete nueva está como `published`.

```yaml
on:
  registry_package:
    types: [published]
```

### `lanzamiento`

| Carga del evento Webhook                                                                       | Tipos de actividad                                                                                                                                              | `GITHUB_SHA`                                     | `GITHUB_REF`                                                |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| [`lanzamiento`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Última confirmación en el lanzamiento etiquetado | Ref de etiqueta de lanzamiento `refs/tags/<tag_name>` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo no se ejecutan para los tipos de actividad `created`, `edited`, o `deleted` en los borradores de lanzamiento. Cuando creas tu lanzamiento mediante el la IU del buscador de {% data variables.product.product_name %}, este podría guardarse automáticamente como borrador.

{% endnote %}

{% note %}

**Nota:** El tipo `prereleased` no se activará para los pre-lanzamientos publicados desde los borradores de lanzamientos, pero el tipo `published` sí lo hará. Si quieres que un flujo de trabajo se ejecute cuando se publiquen los lanzamientos estables *y* los prelanzamientos, suscríbete a `published` en vez de a `released` y `prereleased`.

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre una actividad de lanzamiento en tu repositorio. Para obtener más información sobre las API de lanzamiento, consulta la sección de "[Lanzamiento](/graphql/reference/objects#release)" en la documentación de la API de GraphQL o "[Lanzamientos](/rest/reference/releases)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un lanzamiento ha sido `publish`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Carga del evento Webhook                                                                                         | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Personalizado      | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Puedes utilizar la API de {% data variables.product.product_name %} para activar un evento de webhook llamado [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) cuando quieras activar un flujo de trabajo para una actividad que suceda fuera de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Crear un evento de envío de repositorio](/rest/reference/repos#create-a-repository-dispatch-event)".

Cuando haces una solicitud para crear un evento de `repository_dispatch`, debes especificar un `event_type` para describir el tipo de actividad. Predeterminadamente, todos los tipos de actividad `repository_dispatch` activan un flujo de trabajo para que se ejecute. Puedes utilizar la palabra clave `types` para limitar la ejecución de tu flujo de trabajo cuando se envíe un valor específico de `event_type` en la carga útil de webhook `repository_dispatch`.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Nota:** El valor `event_type` se limita a 100 caracteres.

{% endnote %}

Cualquier dato que envíes a través del parámetro `client_payload` estará disponible en el contexto `github.event` en tu flujo de trabajo. Por ejemplo, si envías este cuerpo de solicitud cuando creas un evento de despacho de repositorio:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

luego, puedes acceder a la carga útil en un flujo de trabajo como este:

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `programación`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                      | n/a                | Última confirmación en la rama predeterminada | Rama por defecto | Cuando se establece la ejecución del flujo de trabajo programado. Un flujo de trabajo programado usa[sintaxis cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para obtener más información, consulta "[Activar un flujo de trabajo con eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.actions.schedule-delay %}

El evento `schedule` te permite activar un flujo de trabajo en una hora programada.

{% data reusables.repositories.actions-scheduled-workflow-example %}

La sintaxis de cron tiene cinco campos separados por un espacio, y cada campo representa una unidad de tiempo.

```
┌───────────── minuto (0 - 59)
│ ┌───────────── hora (0 - 23)
│ │ ┌───────────── día del mes (1 - 31)
│ │ │ ┌───────────── mes (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── día de la semana (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Puedes utilizar estos operadores en cualquiera de los cinco campos:

| Operador | Descripción                      | Ejemplo                                                                                                     |
| -------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| *        | Cualquier valor                  | `15 * * * *` se ejecuta a cada minuto 15 de cada hora de cada día.                                          |
| ,        | Separador de la lista de valores | `2,10 4,5 * * *` se ejecuta en el minuto 2 y 10 de la cuarta y quinta hora de cada día.                     |
| -        | Rango de valores                 | `30 4-6 * * *` se ejecuta en el minuto 30 de la 4ta, 5ta y 6ta hora.                                        |
| /        | Valores del paso                 | `20/15 * * * *` se ejecuta cada 15 minutos a partir del minuto 20 hasta el minuto 59 (minutos 20, 35 y 50). |

{% note %}

**Nota:** {% data variables.product.prodname_actions %} no es compatible con la sintaxis no estándar de `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` y `@reboot`.

{% endnote %}

Puedes usar [contrab guru](https://crontab.guru/) para generar tu sintaxis de cron y confirmar a qué hora se ejecutará. Para que puedas comenzar, hay también una lista de [ejemplos de crontab guru](https://crontab.guru/examples.html).

Las notificaciones para los flujos de trabajo programados se envían al usuario que modificó por última vez la sintaxis de cron en el archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Notificaciones para las ejecuciones de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)".

### `estado`

| Carga del evento Webhook                                                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------ |
| [`estado`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a                | Última confirmación en la rama predeterminada | n/a          |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando cambia el estado de una confirmación de Git. Por ejemplo, las confirmaciones pueden marcarse como `error`, `failure`, `pending` o `success`. Si quieres proporcionar más detalles sobre el cambio de estado, puede que quieras utilizar el evento [`check_run`](#check_run). Para obtener más información sobre las API de estado de confirmación, consulta la sección "[Estado](/graphql/reference/objects#statue)" en la documentación de la API de GraphQL o "[Estados](/rest/reference/commits#commit-statuses)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `status`.

```yaml
on:
  status
```

Si quieres ejecutar un job en tu flujo de trabajo con base en el estado de confirmación nuevo, puedes utilizar el contexto `github.event.state`. Por ejemplo, el siguiente flujo de trabajo se activa cuando cambia un estado de confirmación, pero el job `if_error_or_failure` solo se ejecuta si el estado de confirmación nuevo es `error` o `failure`.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `observar`

| Carga del evento Webhook                                                                  | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ----------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------- |
| [`observar`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started`        | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Aunque solo el tipo de actividad `started` es compatible, el especificar el tipo de actividad mantendrá tu flujo de trabajo específico si se agregan más tipos de actividad en el futuro. Para obtener más información sobre cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando su repositorio se marcó como favorito. Para obtener más información sobre las API de solicitud de cambios, consulta la sección "[addStar](/graphql/reference/mutations#addstar)" en la documentación de la API de GraphQL o "[Marcar como favorito](/rest/reference/activity#starring)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando alguien marca un repositorio como favorito, lo cual es el tipo de actividad `started` para un evento de observación.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Carga del evento Webhook                   | Tipos de actividad | `GITHUB_SHA`                               | `GITHUB_REF`                               |
| ------------------------------------------ | ------------------ | ------------------------------------------ | ------------------------------------------ |
| El mismo que el flujo de trabajo que llama | n/a                | El mismo que el flujo de trabajo que llama | El mismo que el flujo de trabajo que llama |

`workflow_call` se utiliza para indicar que un flujo de trabajo puede llamar a otro. Cuando se activa un flujo de trabajo con el evento `workflow_call`, la carga útil del evento en el flujo de trabajo llamado es la misma del flujo de trabajo llamante. Para obtener más información, consulta la sección "[Reutilizar los flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

El siguiente ejemplo solo ejecuta el flujo de trabajo cuando se le llama desde otro flujo de trabajo:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga del evento Webhook                                                                                     | Tipos de actividad | `GITHUB_SHA`                                   | `GITHUB_REF`              |
| ------------------------------------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------- | ------------------------- |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a                | Última confirmacion en la rama de `GITHUB_REF` | Rama que recibió el envío |

Para activar un flujo de trabajo manualmente, utiliza el evento `workflow_dispatch`. Puedes activar un flujo de trabajo manualmente utilizando la API de {% data variables.product.product_name %}, el {% data variables.product.prodname_cli %} o la interfaz de buscador de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Ejecutar un flujo de trabajo manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

```yaml
on: workflow_dispatch
```

#### Proporcionar entradas

Puedes configurar propiedades de entrada definidas personalmente, valores de entrada predeterminados y entradas requeridas para el evento directamente en tu flujo de trabajo. Cuando activas el evento, puedes proporcionar el `ref` y cualquier `inputs`. Cuando el flujo de trabajo se ejecuta, puedes acceder a los valores de entrada en el contexto {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts)".

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
Este ejemplo define las entradas llamadas `logLevel`, `tags` y `environment`. Pasarás los valores para estas entradas al flujo de trabajo cuando lo ejecutes. Entonces, este flujo de trabajo imprime los valores en la bitácora, utilizando las propiedades de contexto {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags` y `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` y `github.event.inputs.environment`{% endif %}.

```yaml
on: 
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'     
        required: true
        default: 'warning' 
        type: choice
        options:
        - info
        - warning
        - debug 
      tags:
        description: 'Test scenario tags'
        required: false 
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true 

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

Si ejecutas este flujo de trabajo desde un buscador, debes ingresar los valores para las entradas requeridas manualmente antes de que dicho flujo se ejecute.

![Ingresar entradas para un flujo de trabajo](/assets/images/help/images/workflow-dispatch-inputs.png)

También puedes pasar las entradas cuando ejecutas un flujo de trabajo desde un script o utilizando el {% data variables.product.prodname_cli %}. Por ejemplo:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

Para obtener más información, consulta la información del {% data variables.product.prodname_cli %} en la sección "[Ejecutar un flujo de trabajo manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

{% else %}
Este ejemplo define las entradas de `name` y `home` y las imprime utilizando los contextos de {% ifversion actions-unified-inputs %}`inputs.name` y `inputs.home`{% else %}`github.event.inputs.name` y `github.event.inputs.home`{% endif %}. Si no se proporciona un `home`, se imprime el valor predeterminado 'The Octoverse'.

```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| Carga del evento Webhook                                                                             | Tipos de actividad                    | `GITHUB_SHA`                                  | `GITHUB_REF`        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------- | ------------------- |
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} El tipo de actividad `requested` no ocurre cuando se vuelve a ejecutar un flujo de trabajo. Para obtener más información sobre cada tipo de actividad, consulta la sección "[Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota:** No puedes utilizar `workflow_run` para concatenar más de tres niveles de flujos de trabajo. Por ejemplo, si intentas activar cinco flujos de trabajo (denominados de la `B` a la `F`) para que se ejecuten secuencialmente después de que se ejecute el flujo de trabajo inicial `A` (esto quiere decir: `A` → `B` → `C` → `D` → `E` → `F`), los flujos de trabajo `E` y `F` no se ejecutarán.

{% endnote %}

Este evento ocurre cuando se solicita o completa una ejecución de flujo de trabajo. Te permite ejecutar un flujo de trabajo con base en una ejecución o compleción de otro de ellos. El flujo de trabajo que inició el evento `workflow_run` puede acceder a secretos y tokens de escritura, incluso si el flujo de trabajo anterior no podía hacerlo. Esto es útil en los casos en que el flujo de trabajo anterior no tiene privilegios intencionalmente, pero necesitas tomar una acción que requiere de privilegios en un flujo de trabajo subsecuente.

En este ejemplo, se configura un flujo de trabajo para que se ejecute después de que se complete el flujo de trabajo separado de "Run Tests".

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Si especificas `workflows` múltiples para el evento `workflow_run`, solo uno de estos flujos de trabajo necesitará ejecutarse. Por ejemplo, un flujo de trabajo con el siguiente activador se ejecutará cada que se complete el flujo de trabajo "Staging" o "Lab".

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Ejecutar un flujo de trabajo con base en la conclusión de otro flujo de trabjo

Los flujos de trabajo se activan sin importar la conclusión del flujo previo. Si quieres ejecutar un job o paso con base en el resultado del flujo de trabajo desencadenante, puedes utilizar una condicional con la propiedad `github.event.workflow_run.conclusion`. Por ejemplo, esta ejecución de flujo de trabajo se ejecutará cada que otro flujo de nombre "Build" se complete, pero el job `on-success` solo se ejecutará si "Build" se completa con éxito y el job `on-failure` solo se ejecutará si el flujo de trabajo "Build" falla:

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### Ltimitar tu flujo de trabajo para que se ejecute con base a las ramas

Puedes utilizar el filtro `branches` o `branches-ignore` para especificar en qué ramas se debe ejecutar el flujo de trabajo activador para poder activar tu flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)". Por ejemplo, un flujo de trabajo con el siguiente activador solo se ejecutará cuando el flujo de trabajo que se llama `Build` se ejecute en una rama llamada `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Utilizar datos desde el flujo de trabajo llamante

Puedes acceder a la [carga útil del evento `workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) que corresponde al flujo de trabajo que activó el tuyo. Por ejemplo, si tu flujo de trabajo activador genera artefactos, los flujos de trabajo que se activen con el evento `workflow_run` podrán acceder a estos artefactos.

El siguiente flujo de trabajo carga datos como un artefacto. (En este ejemplo simplificado, los datos son el número de la solicitud de cambios).

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:        
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

Cuando se complete una ejecución del flujo de trabajo anterior, este activará una ejecución del siguiente. El siguiente flujo de trabajo utiliza el contexto `github.event.workflow_run` y la API de REST de {% data variables.product.product_name %} para descargar el artefacto que cargó el flujo de trabajo anterior, descomprime el artefacto descargado y comenta en la solicitud de cambios cuyo número se haya subido como un artefacto.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: {% data reusables.actions.action-github-script %}
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
