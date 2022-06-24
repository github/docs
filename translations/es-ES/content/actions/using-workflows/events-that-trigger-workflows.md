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

**Nota:** Los flujos de trabajo no se ejecutarán en la actividad de `pull_request` si la solicitud de cambios tiene un conflicto de fusión. The merge conflict must be resolved first.

Conversely, workflows with the `pull_request_target` event will run even if the pull request has a merge conflict. Before using the `pull_request_target` trigger, you should be aware of the security risks. For more information, see [`pull_request_target`](#pull_request_target).

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated. For activity related to pull request reviews, pull request review comments, or pull request comments, use the [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment), or [`issue_comment`](#issue_comment) events instead. For information about the pull request APIs, see "[PullRequest](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull requests](/rest/reference/pulls)" in the REST API documentation.

Note that `GITHUB_SHA` for this event is the last merge commit of the pull request merge branch. If you want to get the commit ID for the last commit to the head branch of the pull request, use `github.event.pull_request.head.sha` instead.

For example, you can run a workflow when a pull request has been opened or reopened.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

You can use the event context to further control when jobs in your workflow will run. For example, this workflow will run when a review is requested on a pull request, but the `specific_review_requested` job will only run when a review by `octo-team` is requested.

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

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

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

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

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

You can also configure your workflow to run when a pull request changes specific files. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

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

When a pull request merges, the pull request is automatically closed. To run a workflow when a pull request merges, use the `pull_request` `closed` event type along with a conditional that checks the `merged` value of the event. For example, the following workflow will run whenever a pull request closes. The `if_merged` job will only run if the pull request was also merged.

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

To run your workflow when a comment on a pull request (not on a pull request's diff) is created, edited, or deleted, use the [`issue_comment`](#issue_comment) event. For activity related to pull request reviews or pull request review comments, use the [`pull_request_review`](#pull_request_review) or [`pull_request_review_comment`](#pull_request_review_comment) events.

### `revisión_solicitud de extracción`

| Carga del evento Webhook                                                                                                        | Tipos de actividad                                         | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| [`revisión_solicitud de extracción`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review is submitted, edited, or dismissed. A pull request review is a group of pull request review comments in addition to a body comment and a state. For activity related to pull request review comments or pull request comments, use the [`pull_request_review_comment`](#pull_request_review_comment) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review APIs, see "[PullRequestReview](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull request reviews](/rest/reference/pulls#reviews)" in the REST API documentation.

For example, you can run a workflow when a pull request review has been `edited` or `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Ejecutar un flujo de trabajo cuando se aprueba una solicitud de cambios

To run your workflow when a pull request has been approved, you can trigger your workflow with the `submitted` type of `pull_request_review` event, then check the review state with the `github.event.review.state` property. For example, this workflow will run whenever a pull request review is submitted, but the `approved` job will only run if the submitted review is an approving review:

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

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review comment is modified. A pull request review comment is a comment on a pull request's diff. For activity related to pull request reviews or pull request comments, use the [`pull_request_review`](#pull_request_review) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review comment APIs, see "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" in the GraphQL API documentation or "[Review comments](/rest/reference/pulls#comments)" in the REST API documentation.

For example, you can run a workflow when a pull request review comment has been `created` or `deleted`.

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

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)." By default, a workflow only runs when a `pull_request_target` event's activity type is `opened`, `synchronize`, or `reopened`. Para activar los flujos de trabajo de acuerdo a sus tipos de actividad, utiliza la palabra clave `types`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.

This event runs in the context of the base of the pull request, rather than in the context of the merge commit, as the `pull_request` event does. This prevents execution of unsafe code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows your workflow to do things like label or comment on pull requests from forks. Avoid using this event if you need to build or run code from the pull request.

{% warning %}

**Warning:** For workflows that are triggered by the `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write repository permission unless the `permissions` key is specified and the workflow can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Adicionalmente, cualquier caché comparte el mismo alcance que la rama base. Para ayudar a prevenir el envenenamiento del caché, no debes guardarlo si existe la posibilidad de que su contenido se haya alterado. Para obtener más información, consulta la sección "[Mantener seguros tus GitHub Actions y flujos de trabajo: Prevenir solicitudes de pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" en el sitio web de GitHub Security Lab.

{% endwarning %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una solicitud de cambios esté como `assigned`, `opened`, `syncronize` o `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Ejecutar tu flujo de trabajo con base en la rama base o de encabezado de una solicitud de cambios.

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

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

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

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

Puedes utilizar el filtro `paths` o `paths-ignore` para configurar tu flujo de trabajo para que se ejecute cuando una solicitud de cambios cambie archivos específicos. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

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

When a pull request merges, the pull request is automatically closed. Para ejecutar un flujo de trabajo cuando se fusiona una solicitud de cambios, utiliza el tipo de evento `pull_request_target` `closed` junto con una condicional que verifique el valor `merged` del mismo. For example, the following workflow will run whenever a pull request closes. The `if_merged` job will only run if the pull request was also merged.

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

#### Ejecutar tu flujo de trabajo solo cuando ocurra una subida de información a ramas específicas

Puedes utilizar el filtro `branches` o `branches-ignore` para configurar tu flujo de trabajo para que solo se ejecute cuando se suben ramas específicas. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

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

Puedes utilizar el filtro `tags` o `tags-ignore` para configurar que tu flujo de trabajo solo se ejecute cuando se suban etiquetas específicas. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien suba una etiqueta que inicie con `v1.`.

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### Ejecutar tu flujo de trabajo únicamente cuando una subida de información afecta archivos específicos

Puedes utilizar el filtro `paths` o `paths-ignore` para configurar que tu flujo de trabajo se ejecute cuando ocurra una subida de archivos específicos. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un paquete ha sido `publicado`.

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

**Nota:** Los flujos de trabajo no se ejecutan para los tipos de actividad `created`, `edited` o `deleted` en los borradores de lanzamiento. Cuando creas tu lanzamiento mediante el la IU del buscador de {% data variables.product.product_name %}, este podría guardarse automáticamente como borrador.

{% endnote %}

{% note %}

**Nota:** El tipo `prereleased` no se activará para los pre-lanzamientos publicados desde los borradores de lanzamientos, pero el tipo `published` sí lo hará. Si quieres que un flujo de trabajo se ejecute cuando se publiquen los lanzamientos estables *y* los prelanzamientos, suscríbete a `published` en vez de a `released` y `prereleased`.

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre una actividad de lanzamiento en tu repositorio. Para obtener más información sobre las API de lanzamiento, consulta la sección de "[Lanzamiento](/graphql/reference/objects#release)" en la documentación de la API de GraphQL o "[Lanzamientos](/rest/reference/releases)" en la documentación de la API de REST.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un lanzamiento está como `published`.

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

La sintaxis de cron tiene cinco campos separados por un espacio y cada campo representa una unidad de tiempo.

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

Puedes utilizar [contrab guru](https://crontab.guru/) para generar tu sintaxis de cron y confirmar a qué hora se ejecutará. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. For more information, see "[Notifications for workflow runs](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)."

### `estado`

| Carga del evento Webhook                                                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------ |
| [`estado`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a                | Última confirmación en la rama predeterminada | n/a          |

{% data reusables.actions.branch-requirement %}

Runs your workflow when the status of a Git commit changes. For example, commits can be marked as `error`, `failure`, `pending`, or `success`. If you want to provide more details about the status change, you may want to use the [`check_run`](#check_run) event. For information about the commit status APIs, see "[Status](/graphql/reference/objects#statue)" in the GraphQL API documentation or "[Statuses](/rest/reference/commits#commit-statuses)" in the REST API documentation.

For example, you can run a workflow when the `status` event occurs.

```yaml
on:
  status
```

If you want to run a job in your workflow based on the new commit state, you can use the `github.event.state` context. For example, the following workflow triggers when a commit status changes, but the `if_error_or_failure` job only runs if the new commit state is `error` or `failure`.

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

**Note**: {% data reusables.developer-site.multiple_activity_types %} Although only the `started` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when the workflow's repository is starred. For information about the pull request APIs, see "[addStar](/graphql/reference/mutations#addstar)" in the GraphQL API documentation or "[Starring](/rest/reference/activity#starring)" in the REST API documentation.

For example, you can run a workflow when someone stars a repository, which is the `started` activity type for a watch event.

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

`workflow_call` is used to indicate that a workflow can be called by another workflow. When a workflow is triggered with the `workflow_call` event, the event payload in the called workflow is the same event payload from the calling workflow. Para obtener más información, consulta la sección "[Reutilizar los flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

The example below only runs the workflow when it's called from another workflow:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga del evento Webhook                                                                                     | Tipos de actividad | `GITHUB_SHA`                                   | `GITHUB_REF`              |
| ------------------------------------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------- | ------------------------- |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a                | Última confirmacion en la rama de `GITHUB_REF` | Rama que recibió el envío |

To manually trigger a workflow, use the `workflow_dispatch` event. You can manually trigger a workflow run using the {% data variables.product.product_name %} API, {% data variables.product.prodname_cli %}, or {% data variables.product.product_name %} browser interface. For more information, see "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

```yaml
on: workflow_dispatch
```

#### Proporcionar entradas

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. When you trigger the event, you can provide the `ref` and any `inputs`. When the workflow runs, you can access the input values in the {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} context. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts)".

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
This example defines inputs called `logLevel`, `tags`, and `environment`. You pass values for these inputs to the workflow when you run it. This workflow then prints the values to the log, using the {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags`, and  `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags`, and  `github.event.inputs.environment`{% endif %} context properties.

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

If you run this workflow from a browser you must enter values for the required inputs manually before the workflow will run.

![Entering inputs for a workflow](/assets/images/help/images/workflow-dispatch-inputs.png)

You can also pass inputs when you run a workflow from a script, or by using {% data variables.product.prodname_cli %}. Por ejemplo:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

For more information, see the {% data variables.product.prodname_cli %} information in "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

{% else %}
This example defines the `name` and `home` inputs and prints them using the {% ifversion actions-unified-inputs %}`inputs.name` and `inputs.home`{% else %}`github.event.inputs.name` and `github.event.inputs.home`{% endif %} contexts. If a `home` isn't provided, the default value 'The Octoverse' is printed.

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

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `requested` activity type does not occur when a workflow is re-run. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note:** You can't use `workflow_run` to chain together more than three levels of workflows. For example, if you attempt to trigger five workflows (named `B` to `F`) to run sequentially after an initial workflow `A` has run (that is: `A` → `B` → `C` → `D` → `E` → `F`), workflows `E` and `F` will not be run.

{% endnote %}

This event occurs when a workflow run is requested or completed. It allows you to execute a workflow based on execution or completion of another workflow. The workflow started by the `workflow_run` event is able to access secrets and write tokens, even if the previous workflow was not. This is useful in cases where the previous workflow is intentionally not privileged, but you need to take a privileged action in a later workflow.

In this example, a workflow is configured to run after the separate "Run Tests" workflow completes.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

If you specify multiple `workflows` for the `workflow_run` event, only one of the workflows needs to run. For example, a workflow with the following trigger will run whenever the "Staging" workflow or the "Lab" workflow completes.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Ejecutar un flujo de trabajo con base en la conclusión de otro flujo de trabjo

A workflow run is triggered regardless of the conclusion of the previous workflow. If you want to run a job or step based on the result of the triggering workflow, you can use a conditional with the `github.event.workflow_run.conclusion` property. For example, this workflow will run whenever a workflow named "Build" completes, but the `on-success` job will only run if the "Build" workflow succeeded, and the `on-failure` job will only run if the "Build" workflow failed:

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

You can use the `branches` or `branches-ignore` filter to specify what branches the triggering workflow must run on in order to trigger your workflow. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)." For example, a workflow with the following trigger will only run when the workflow named `Build` runs on a branch named `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Utilizar datos desde el flujo de trabajo llamante

You can access the [`workflow_run` event payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) that corresponds to the workflow that triggered your workflow. For example, if your triggering workflow generates artifacts, a workflow triggered with the `workflow_run` event can access these artifacts.

The following workflow uploads data as an artifact. (In this simplified example, the data is the pull request number.)

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

When a run of the above workflow completes, it triggers a run of the following workflow. The following workflow uses the `github.event.workflow_run` context and the {% data variables.product.product_name %} REST API to download the artifact that was uploaded by the above workflow, unzips the downloaded artifact, and comments on the pull request whose number was uploaded as an artifact.

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
