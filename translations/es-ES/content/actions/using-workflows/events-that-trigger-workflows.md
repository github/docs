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
shortTitle: Events that trigger workflows
ms.openlocfilehash: bef348caaccfdad85782811d4addd78cd7ad7460
ms.sourcegitcommit: 8476dc3d513740e7cb84a91c45768cf44db5df4f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/04/2022
ms.locfileid: '147496568'
---
## <a name="about-events-that-trigger-workflows"></a>Acerca de los eventos que desencadenan flujos de trabajo

Los activadores de los flujos de trabajo son eventos que ocasionan que se ejecute un flujo de trabajo. Para más información sobre cómo usar desencadenadores de flujo de trabajo, vea "[Desencadenamiento de un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)".

## <a name="available-events"></a>Eventos disponibles

Algunos eventos tienen tipos de actividad múltiple. Para ellos, puedes especificar qué tipos de actividad activarán una ejecución de flujo de trabajo. Para más información sobre lo que significa cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)". Nota que no todos los eventos de webhook activan flujos de trabajo.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se cambian las reglas de protección de rama en el repositorio del flujo de trabajo. Para más información sobre las reglas de protección de ramas,vea "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)". Para obtener información sobre las API de regla de protección de rama, vea "[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)" en la documentación de GraphQL API o "[Ramas](/rest/reference/branches)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una regla de protección de rama ha sido `created` o `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando ocurre actividad relacionada con una ejecución de verificación. Una ejecución de verificación es una prueba individual que forma parte de una suite de verificación. Para más información, vea "[Introducción a Checks API](/rest/guides/getting-started-with-the-checks-api)". Para obtener información sobre las API de ejecución de comprobación, vea "[CheckRun](/graphql/reference/objects#checkrun)" en la documentación de GraphQL API o "[Comprobaciones](/rest/reference/checks#runs)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una ejecución de comprobación ha sido `rerequested` o `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)". Aunque solo se admite el tipo de actividad `started`, la especificación del tipo de actividad mantendrá el flujo de trabajo como específico si en el futuro se agregan más tipos de actividad. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota:** Para evitar flujos de trabajo recursivos, este evento no desencadena flujos de trabajo si el conjunto de comprobaciones lo ha creado {% data variables.product.prodname_actions %}.

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre una actividad de suite de verificación. Una suite de verificación es una recolección de ejecuciones de verificación para una confirmación específica. Las suites de verificación resumen el estado y conclusión de las ejecuciones de verificación que están en la suite. Para más información, vea "[Introducción a Checks API](/rest/guides/getting-started-with-the-checks-api)". Para obtener información sobre las API de conjunto de comprobaciones, vea "[CheckSuite](/graphql/reference/objects#checksuite)" en la documentación de GraphQL API o "[Comprobaciones](/rest/reference/checks#suites)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando un conjunto de comprobaciones ha sido `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | N/D | Última confirmación en la rama o etiqueta creada | Rama o etiqueta creada |

{% note %}

**Nota**: No se creará un evento al crear más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando alguien crea una referencia de Git (rama o etiqueta de Git) en el repositorio del flujo de trabajo. Para obtener información sobre las API para crear una referencia de Git, vea "[createRef](/graphql/reference/mutations#createref)" en la documentación de GraphQL API o "[Creación de una referencia](/rest/reference/git#create-a-reference)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `create`.

```yaml
on:
  create
```

### `delete`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | N/D | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: No se creará un evento al eliminar más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando alguien borra una referencia de Git (rama o etiqueta de Git) en el repositorio del flujo de trabajo. Para obtener información sobre las API para eliminar una referencia de Git, vea "[deleteRef](/graphql/reference/mutations#deleteref)" en la documentación de GraphQL API o "[Eliminación de una referencia](/rest/reference/git#delete-a-reference)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `delete`.

```yaml
on:
  delete
```

### `deployment`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | N/D | Confirmación de implementación | Rama o etiqueta que se debe desplegar (en blanco si se crea con el SHA de una confirmación)|

Ejecuta tu flujo de trabajo cuando alguien crea un despliegue en el repositorio del flujo de trabajo. Es posible que las implementaciones creadas con un SHA de confirmación no tengan una referencia de Git. Para obtener información sobre las API para crear una implementación, vea "[createDeployment](/graphql/reference/mutations#createdeployment)" en la documentación de GraphQL API o "[Implementaciones](/rest/reference/repos#deployments)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `deployment`.

```yaml
on:
  deployment
```

### `deployment_status`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | N/D | Confirmación de implementación | Rama o etiqueta que se debe implementar (vacío si está confirmada)|

{% note %}

**Nota:** Cuando el estado de una implementación se establece en `inactive`, no se desencadenará una ejecución de flujo de trabajo.

{% endnote %}

Ejecuta tu flujo de trabajo cuando un tercero proporciona un estado de despliegue. Es posible que las implementaciones creadas con un SHA de confirmación no tengan una referencia de Git. Para obtener información sobre las API para crear un estado de implementación, vea "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" en la documentación de GraphQL API o "[Creación de un estado de implementación](/rest/reference/deployments#create-a-deployment-status)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `deployment_status`.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un debate ene l repositorio del mismo. Para la actividad relacionada con los comentarios sobre un debate, use el evento [`discussion_comment`](#discussion_comment). Para más información sobre los debates, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obtener información sobre GraphQL API, vea "[Debate](/graphql/reference/objects#discussion)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando un debate ha sido `created`, `edited` o `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Ejecuta tu flujo de trabajo cuando un comentario de un debate se crea o modifica en el repositorio del mismo. Para la actividad relacionada con un debate en lugar de los comentarios sobre el debate, use el evento [`discussion`](#discussion). Para más información sobre los debates, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obtener información sobre GraphQL API, vea "[Debate](/graphql/reference/objects#discussion)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando el comentario de un debate haya sido `created` o `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | N/D | Última confirmación en la rama predeterminada |  Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien bifurca un repositorio. Para obtener información sobre la API REST, vea "[Creación de una bifurcación](/rest/reference/repos#create-a-fork)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `fork`.

```yaml
on:
  fork
```

### `gollum`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | N/D | Última confirmación en la rama predeterminada |  Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien crea o actualiza una página de Wiki. Para más información, vea "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `gollum`.

```yaml
on:
  gollum
```

### `issue_comment`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea, edita o borra un comentario en una propuesta o solicitud de cambios. Para obtener información sobre las API de comentarios de incidencias, vea "[IssueComment](/graphql/reference/objects#issuecomment)" en la documentación de GraphQL API o "[Comentarios de incidencias](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando un comentario de una incidencia o solicitud de incorporación de cambios haya sido `created` o `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### <a name="issue_comment-on-issues-only-or-pull-requests-only"></a>`issue_comment` solo en incidencias o solo en solicitudes de incorporación de cambios

El evento `issue_comment` se produce para comentarios sobre incidencias y solicitudes de incorporación de cambios. Puede usar la propiedad `github.event.issue.pull_request` en un condicional para realizar diferentes acciones en función de si el objeto desencadenador ha sido una incidencia o una solicitud de incorporación de cambios.

Por ejemplo, este flujo de trabajo ejecutará el trabajo `pr_commented` solo si el evento `issue_comment` se ha originado en una solicitud de incorporación de cambios. Ejecutará el trabajo `issue_commented` solo si el evento `issue_comment` se ha originado en una incidencia.

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

### `issues`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una propuesta en el repositorio de un flujo de trabajo. Para la actividad relacionada con los comentarios de una incidencia, use el evento [`issue_comment`](#issue_comment). Para más información sobre las incidencias, vea "[Acerca de las incidencias](/issues/tracking-your-work-with-issues/about-issues)". Para obtener información sobre las API de incidencias, vea "[Issue](/graphql/reference/objects#issue)" en la documentación de GraphQL API o "[Incidencias](/rest/reference/issues)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una incidencia ha sido `opened`, `edited` o `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una etiqueta en el repositorio del mismo. Para más información sobre las etiquetas, vea "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)". Para obtener información sobre las API de etiqueta, vea "[Label](/graphql/reference/objects#label)" en la documentación de GraphQL API o "[Etiquetas](/rest/reference/issues#labels)" en la documentación de la API REST.

Si quiere ejecutar el flujo de trabajo cuando se agrega o se quita una etiqueta de una incidencia, una solicitud de incorporación de cambios o un debate, use los tipos de actividad `labeled` o `unlabeled` para los eventos [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) o [`discussion`](#discussion) en su lugar.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una etiqueta ha sido `created` o `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | SHA del grupo de fusión mediante combinación | Referencia del grupo de fusión mediante combinación |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Aunque solo se admite el tipo de actividad `checks_requested`, la especificación del tipo de actividad mantendrá el flujo de trabajo como específico si en el futuro se agregan más tipos de actividad. Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Ejecuta el flujo de trabajo cuando se agrega una solicitud de incorporación de cambios a una cola de fusión mediante combinación, que agrega la solicitud de incorporación de cambios a un grupo de fusión mediante combinación. Para más información, consulta "[Fusionar una solicitud de cambios con una cola de fusión](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se haya producido la actividad `checks_requested`.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un hito en el repositorio de tu flujo de trabajo. Para más información sobre los hitos, vea "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)". Para obtener información sobre las API de hito, vea "[Milestone](/graphql/reference/objects#milestone)" en la documentación de GraphQL API o "[Hitos](/rest/reference/issues#milestones)" en la documentación de la API REST.

Si quiere ejecutar el flujo de trabajo cuando se agrega o se quita una incidencia de un hito, use los tipos de actividad `milestoned` o `demilestoned` para el evento [`issues`](#issues) en su lugar.

Por ejemplo, puede ejecutar un flujo de trabajo cuando un hito ha sido `opened` o `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | N/D | Última confirmación en la rama predeterminada | N/D |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando alguien sube información a una rama que sea la fuente de publicación de {% data variables.product.prodname_pages %} si {% data variables.product.prodname_pages %} se encuentra habilitado para el repositorio. Para más información sobre los orígenes de publicación de {% data variables.product.prodname_pages %}, vea "[Configuración de un origen de publicación para el sitio de GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)". Para obtener información sobre la API REST, vea "[Pages](/rest/reference/repos#pages)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `page_build`.

```yaml
on:
  page_build
```

### `project`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} El tipo de actividad `edited` hace referencia a cuando se edita un panel de proyecto, no una columna o tarjeta en el panel del proyecto. Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo se produce para proyectos propiedad del repositorio del flujo de trabajo y no para los que pertenecen a organizaciones o usuarios, ni para los que pertenecen a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica un tablero de proyecto. Para la actividad relacionada con tarjetas o columnas de un panel de proyecto, use los eventos [`project_card`](#project_card) o [`project_column`](#project_column) en su lugar. Para más información sobre los paneles de proyecto, vea "[Acerca de los paneles de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener información sobre las API de panel de proyecto, vea "[Project](/graphql/reference/objects#project)" en la documentación de GraphQL API o "[Proyectos](/rest/reference/projects)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando un proyecto ha sido `created` o `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` para una incidencia<br/>- `edited`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo se produce para proyectos propiedad del repositorio del flujo de trabajo y no para los que pertenecen a organizaciones o usuarios, ni para los que pertenecen a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una tarjeta en un tablero de proyecto. Para la actividad relacionada con paneles de proyecto o columnas de un panel de proyecto, use el evento [`project`](#project) o [`project_column`](#project_column) en su lugar. Para más información sobre los paneles de proyecto, vea "[Acerca de los paneles de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener información sobre las API de tarjeta de proyecto, vea "[ProjectCard](/graphql/reference/objects#projectcard)" en la documentación de GraphQL API o "[Tarjetas de proyecto](/rest/reference/projects#cards)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una tarjeta de proyecto ha sido `created` o `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota**: Este evento solo se produce para proyectos propiedad del repositorio del flujo de trabajo y no para los que pertenecen a organizaciones o usuarios, ni para los que pertenecen a otro repositorio.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Ejecuta tu flujo de trabajo cuando se crea o modifica una columna en un tablero de proyecto. Para la actividad relacionada con paneles de proyecto o tarjetas de un panel de proyecto, use el evento [`project`](#project) o [`project_card`](#project_card) en su lugar. Para más información sobre los paneles de proyecto, vea "[Acerca de los paneles de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obtener información sobre las API de columna de proyecto, vea "[ProjectColumn](/graphql/reference/objects#projectcolumn)" en la documentación de GraphQL API o "[Columnas de proyecto](/rest/reference/projects#columns)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una columna de proyecto ha sido `created` o `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | N/D | Última confirmación en la rama predeterminada |  Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando el repositorio de tu flujo de trabajo cambia de privado a público. Para obtener información sobre la API REST, vea "[Edición de repositorios](/rest/reference/repos#edit)".

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `public`.

```yaml
on:
  public
```

### `pull_request`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Última confirmación de combinación en la rama `GITHUB_REF` | Rama de combinación de solicitud de incorporación de cambios `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)". De forma predeterminada, un flujo de trabajo solo se ejecuta cuando el tipo de actividad de un evento `pull_request` es `opened`, `synchronize`o `reopened`. Para desencadenar flujos de trabajo mediante otros tipos de actividad, use la palabra clave `types`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo no se ejecutarán en la actividad `pull_request` si la solicitud de incorporación de cambios tiene un conflicto de combinación. El conflicto de fusión se debe resolver primero.

Por el contrario, los flujos de trabajo con el evento `pull_request_target` se ejecutarán incluso si la solicitud de incorporación de cambios tiene un conflicto de combinación. Antes de usar el desencadenador `pull_request_target`, debe tener en cuenta los riesgos de seguridad. Para más información, vea [`pull_request_target`](#pull_request_target).

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre alguna actividad en la solicitud de trabajo del repositorio del flujo de trabajo. Por ejemplo, si no se especifican tipos de actividad, el flujo de trabajo se ejecutará cuando se abra o vuelva a abrir una solicitud de cambios o cuando se actualice la rama de encabezado de la misma. Para la actividad relacionada con las revisiones de solicitudes de incorporación de cambios, comentarios de revisión de solicitudes de incorporación de cambios o comentarios de solicitud de incorporación de cambios, use en su lugar los eventos [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) o [`issue_comment`](#issue_comment). Para obtener información sobre las API de solicitud de incorporación de cambios, vea "[PullRequest](/graphql/reference/objects#pullrequest)" en la documentación de GraphQL API o "[Solicitudes de incorporación de cambios](/rest/reference/pulls)" en la documentación de la API REST.

Tenga en cuenta que `GITHUB_SHA` para este evento es la última confirmación de combinación de la rama de combinación de solicitudes de incorporación de cambios. Si quiere obtener el identificador de la última confirmación en la rama principal de la solicitud de incorporación de cambios, use `github.event.pull_request.head.sha` en su lugar.

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se haya abierto o vuelto a abrir una solicitud de cambios.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Puedes utilizar el contexto del evento para controlar aún más cuándo se ejecutarán los jobs en tu flujo de trabajo. Por ejemplo, este flujo de trabajo se ejecutará cuando se solicite una revisión en una solicitud de incorporación de cambios, pero el trabajo `specific_review_requested` solo se ejecutará cuando se solicite una revisión de `octo-team`.

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

#### <a name="running-your-workflow-based-on-the-head-or-base-branch-of-a-pull-request"></a>Ejecutar tu flujo de trabajo con base en la rama base o de encabezado de una solicitud de cambios.

Puede usar el filtro `branches` o `branches-ignore` a fin de configurar el flujo de trabajo para que solo se ejecute en solicitudes de incorporación de cambios destinadas a ramas específicas. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien abra una solicitud de incorporación de cambios destinada a una rama cuyo nombre empiece por `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una solicitud de incorporación de cambios que incluya un cambio en un archivo JavaScript (`.js`) se abra en una rama cuyo nombre comience por `releases/`:

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

Para ejecutar un trabajo en función del nombre de la rama principal de la solicitud de incorporación de cambios (no el nombre de la rama base de la solicitud de incorporación de cambios), use el contexto `github.head_ref` en una condicional. Por ejemplo, este flujo de trabajo se ejecutará cada vez que se abra una solicitud de incorporación de cambios, pero el trabajo `run_if` solo se ejecutará si el inicio de la solicitud de incorporación de cambios es una rama cuyo nombre empieza por `releases/`:

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

#### <a name="running-your-workflow-based-on-files-changed-in-a-pull-request"></a>Ejecutar tu flujo de trabajo con base en los archivos que cambiaron en una solicitud de cambios

También puedes configurar tu flujo de trabajo para que se ejecute cuando una solicitud de cambios cambie archivos específicos. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando una solicitud de incorporación de cambios incluya un cambio en un archivo JavaScript (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una solicitud de incorporación de cambios que incluya un cambio en un archivo JavaScript (`.js`) se abra en una rama cuyo nombre comience por `releases/`:

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

#### <a name="running-your-workflow-when-a-pull-request-merges"></a>Ejecutar tu flujo de trabajo cuando se fusiona una solicitud de cambios

Cuando se fusiona una solicitud de cambios, esta se cierra automáticamente. Para ejecutar un flujo de trabajo cuando se combina una solicitud de incorporación de cambios, use el tipo de evento `pull_request` `closed` junto con una condicional que compruebe el valor `merged` del evento. Por ejemplo, el siguiente flujo de trabajo se ejecutará cada que se cierre una solicitud de cambios. El trabajo `if_merged` solo se ejecutará si la solicitud de incorporación de cambios también se ha combinado.

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

### <a name="pull_request_comment-use-issue_comment"></a>`pull_request_comment` (use `issue_comment`)

Para ejecutar el flujo de trabajo cuando se crea, edita o elimina un comentario en una solicitud de incorporación de cambios (no en la diferencia de una solicitud de incorporación de cambios), use el evento [`issue_comment`](#issue_comment). Para la actividad relacionada con revisiones de solicitudes de incorporación de cambios o comentarios de revisión de solicitudes de incorporación de cambios, use los eventos [`pull_request_review`](#pull_request_review) o [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Última confirmación de combinación en la rama `GITHUB_REF` | Rama de combinación de solicitud de incorporación de cambios `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Ejecuta tu flujo de trabajo cuando se emite, edita o descarta una revisión de una solicitud de cambios. Una revisión de solicitud de cambios es un grupo de comentarios de dicha revisión junto con un comentario del cuerpo y un estado. Para la actividad relacionada con comentarios de revisión de solicitudes de incorporación de cambios o comentarios de solicitud de incorporación de cambios, use en su lugar los eventos [`pull_request_review_comment`](#pull_request_review_comment) o [`issue_comment`](#issue_comment). Para obtener información sobre las API de revisión de solicitudes de incorporación de cambios, vea "[PullRequestReview](/graphql/reference/objects#pullrequest)" en la documentación de GraphQL API o "[Revisiones de solicitudes de incorporación de cambios](/rest/reference/pulls#reviews)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una revisión de solicitud de incorporación de cambios ha sido `edited` o `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### <a name="running-a-workflow-when-a-pull-request-is-approved"></a>Ejecutar un flujo de trabajo cuando se aprueba una solicitud de cambios

Para ejecutar el flujo de trabajo cuando se ha aprobado una solicitud de incorporación de cambios, puede desencadenar el flujo de trabajo con el tipo `submitted` del evento `pull_request_review` y, después, comprobar el estado de revisión con la propiedad `github.event.review.state`. Por ejemplo, este flujo de trabajo se ejecutará siempre que se envíe una revisión de solicitud de incorporación de cambios, pero el trabajo `approved` solo se ejecutará si la revisión enviada es de aprobación:

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

### `pull_request_review_comment`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Última confirmación de combinación en la rama `GITHUB_REF` | Rama de combinación de solicitud de incorporación de cambios `refs/pull/:prNumber/merge` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Ejecuta tu flujo de trabajo cuando se modifica un comentario de una revisión de solicitud de cambios. Un comentario de revisión de una solicitud de cambios es un comentario en el diff de dicha solicitud. Para la actividad relacionada con revisiones de solicitudes de incorporación de cambios o comentarios de solicitudes de incorporación de cambios, use los eventos [`pull_request_review`](#pull_request_review) o [`issue_comment`](#issue_comment) en su lugar. Para obtener información sobre las API de comentarios de revisión de solicitudes de incorporación de cambios, vea "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" en la documentación de GraphQL API o "[Comentarios de revisión](/rest/reference/pulls#comments)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando un comentario de una revisión de solicitud de incorporación de cambios ha sido `created` o `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Última confirmación en la rama base de la solicitud de extracción | Rama base de la solicitud de extracción |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)". De forma predeterminada, un flujo de trabajo solo se ejecuta cuando el tipo de actividad de un evento `pull_request_target` es `opened`, `synchronize`o `reopened`. Para desencadenar flujos de trabajo mediante otros tipos de actividad, use la palabra clave `types`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre alguna actividad en la solicitud de trabajo del repositorio del flujo de trabajo. Por ejemplo, si no se especifican tipos de actividad, el flujo de trabajo se ejecutará cuando se abra o vuelva a abrir una solicitud de cambios o cuando se actualice la rama de encabezado de la misma.

Este evento se ejecuta en el contexto de la base de la solicitud de incorporación de cambios, en lugar de en el contexto de la confirmación de combinación, como lo hace el evento `pull_request`. Esto previene la ejecución del código no seguro desde el encabezado de la solicitud de cambios que pudiera alterar tu repositorio o robar cualquier secreto que utilices en tu flujo de trabajo. Este evento permite que tu flujo de trabajo haga cosas como etiquetar o comentar en las solicitudes de cambios de las bifurcaciones. Evita utilizar este evento si necesitas compilar o ejecutar código desde la solicitud de cambios.

{% warning %}

**Advertencia:** En el caso de los flujos de trabajo desencadenados por el evento `pull_request_target`, se concede a `GITHUB_TOKEN` el permiso de repositorio de lectura y escritura, a menos que se especifique la clave `permissions` y el flujo de trabajo pueda acceder a secretos, incluso cuando se desencadene desde una bifurcación. Aunque las ejecuciones de flujo de trabajo se ejecutan en el contexto de la base de la solicitud de cambios, debes asegurarte de que no revisas, compilas o ejecutas código no confiable desde ella con este evento. Adicionalmente, cualquier caché comparte el mismo alcance que la rama base. Para ayudar a prevenir el envenenamiento del caché, no debes guardar el caché si existe la posibilidad de que su contenido se haya alterado. Para más información, vea "[Mantenimiento de la seguridad de flujos de trabajo y Acciones de GitHub: prevención de solicitudes pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" en el sitio web de GitHub Security Lab.

{% endwarning %}

Por ejemplo, puede ejecutar un flujo de trabajo cuando una solicitud de incorporación de cambios ha sido `assigned`, `opened`, `synchronize` o `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### <a name="running-your-workflow-based-on-the-head-or-base-branch-of-a-pull-request"></a>Ejecutar tu flujo de trabajo con base en la rama base o de encabezado de una solicitud de cambios.

Puede usar el filtro `branches` o `branches-ignore` a fin de configurar el flujo de trabajo para que solo se ejecute en solicitudes de incorporación de cambios destinadas a ramas específicas. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien abra una solicitud de incorporación de cambios destinada a una rama cuyo nombre empiece por `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una solicitud de incorporación de cambios que incluya un cambio en un archivo JavaScript (`.js`) se abra en una rama cuyo nombre comience por `releases/`:

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

Para ejecutar un trabajo en función del nombre de la rama principal de la solicitud de incorporación de cambios (no el nombre de la rama base de la solicitud de incorporación de cambios), use el contexto `github.head_ref` en una condicional. Por ejemplo, este flujo de trabajo se ejecutará cada vez que se abra una solicitud de incorporación de cambios, pero el trabajo `run_if` solo se ejecutará si el inicio de la solicitud de incorporación de cambios es una rama cuyo nombre empieza por `releases/`:

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

#### <a name="running-your-workflow-based-on-files-changed-in-a-pull-request"></a>Ejecutar tu flujo de trabajo con base en los archivos que cambiaron en una solicitud de cambios

Puede usar el filtro `paths` o `paths-ignore` a fin de configurar el flujo de trabajo para que se ejecute cuando una solicitud de incorporación de cambios modifique archivos específicos. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando una solicitud de incorporación de cambios incluya un cambio en un archivo JavaScript (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una solicitud de incorporación de cambios que incluya un cambio en un archivo JavaScript (`.js`) se abra en una rama cuyo nombre comience por `releases/`:

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

#### <a name="running-your-workflow-when-a-pull-request-merges"></a>Ejecutar tu flujo de trabajo cuando se fusiona una solicitud de cambios

Cuando se fusiona una solicitud de cambios, esta se cierra automáticamente. Para ejecutar un flujo de trabajo cuando se combina una solicitud de incorporación de cambios, use el tipo de evento `pull_request_target` `closed` junto con una condicional que compruebe el valor `merged` del evento. Por ejemplo, el siguiente flujo de trabajo se ejecutará cada que se cierre una solicitud de cambios. El trabajo `if_merged` solo se ejecutará si la solicitud de incorporación de cambios también se ha combinado.

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

### `push`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | N/D | Al eliminar una rama, el SHA de la ejecución del flujo de trabajo (y sus referencias asociadas) se revierte a la rama predeterminada del repositorio. | Referencia actualizada |

{% note %}

**Nota:** La carga de webhook disponible para Acciones de GitHub no incluye los atributos `added`, `removed` y `modified` en el objeto `commit`. Puedes recuperar el objeto de confirmación completo utilizando la API. Para obtener información, vea "[Commit](/graphql/reference/objects#commit)" en la documentación de GraphQL API u "[Obtención de una confirmación](/rest/reference/commits#get-a-commit)" en la documentación de la API REST.

{% endnote %}

{% note %}

**Nota**: No se creará un evento al insertar más de tres etiquetas a la vez.

{% endnote %}

Ejecuta tu flujo de trabajo cuando subes una confirmación o etiqueta.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `push`.

```yaml
on:
  push
```

{% note %}

**Nota**: Cuando un evento de webhook `push` desencadena una ejecución de flujo de trabajo, el campo "insertado por" de la interfaz de usuario de Acciones muestra el insertador y no el autor o el confirmador. Sin embargo, si los cambios se insertan en un repositorio mediante la autenticación SSH con una clave de implementación, el campo "insertado por" será el administrador del repositorio que comprobó la clave de implementación cuando se agregó a un repositorio.

{% endnote %}

#### <a name="running-your-workflow-only-when-a-push-to-specific-branches-occurs"></a>Ejecutar tu flujo de trabajo solo cuando ocurra una subida de información a ramas específicas

Puede usar el filtro `branches` o `branches-ignore` a fin de configurar el flujo de trabajo para que solo se ejecute cuando se inserten ramas específicas. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien realice inserciones en `main` o en una rama que comience por `releases/`.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una inserción que incluya un cambio en un archivo JavaScript (`.js`) se realice en una rama cuyo nombre comience por `releases/`:

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### <a name="running-your-workflow-only-when-a-push-of-specific-tags-occurs"></a>Ejecutar tu flujo de trabajo únicamente cuando ocurra una subida de etiquetas específicas

Puedes usar el filtro `tags` o `tags-ignore` para configurar el flujo de trabajo para que solo se ejecute cuando se inserten etiquetas específicas. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien inserte una etiqueta que comience con `v1.`.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### <a name="running-your-workflow-only-when-a-push-affects-specific-files"></a>Ejecutar tu flujo de trabajo únicamente cuando una subida de información afecta archivos específicos

Puede usar el filtro `paths` o `paths-ignore` a fin de configurar el flujo de trabajo para que se ejecute cuando se produzca una inserción en archivos específicos. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por ejemplo, este flujo de trabajo se ejecutará cuando alguien inserte un cambio en un archivo de JavaScript (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Nota:** {% data reusables.actions.branch-paths-filter %} Por ejemplo, el siguiente flujo de trabajo solo se ejecutará cuando una inserción que incluya un cambio en un archivo JavaScript (`.js`) se realice en una rama cuyo nombre comience por `releases/`:

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

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Confirmación del paquete publicado | Rama o etiqueta del paquete publicado |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando ocurre actividad relacionada con el {% data variables.product.prodname_registry %} en tu repositorio. Para más información, vea "[Documentación de {% data variables.product.prodname_registry %}](/packages)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se haya realizado la acción `published` sobre un nuevo paquete.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Última confirmación en el lanzamiento etiquetado | Referencia de etiqueta de versión `refs/tags/<tag_name>` |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo no se desencadenan para los tipos de actividad `created`, `edited` o `deleted` para versiones de borrador. Cuando creas tu lanzamiento mediante el la IU del buscador de {% data variables.product.product_name %}, este podría guardarse automáticamente como borrador.

{% endnote %}

{% note %}

**Nota:** El tipo `prereleased` no se desencadenará para las versiones preliminares publicadas a partir de versiones de borrador, pero el tipo `published` sí. Si quiere que un flujo de trabajo se ejecute cuando se publiquen versiones estables *y* preliminares, debe suscribirse a `published` en lugar de `released` y `prereleased`.

{% endnote %}

Ejecuta tu flujo de trabajo cuando ocurre una actividad de lanzamiento en tu repositorio. Para obtener información sobre las API de versión, vea "[Release](/graphql/reference/objects#release)" en la documentación de GraphQL API o "[Versiones](/rest/reference/releases)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando una versión ha sido `published`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Personalizado | Última confirmación en la rama predeterminada | Rama predeterminada |

{% data reusables.actions.branch-requirement %}

Puede usar la API de {% data variables.product.product_name %} para desencadenar un evento de webhook denominado [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) cuando quiera desencadenar un flujo de trabajo para la actividad que se produce fuera de {% data variables.product.product_name %}. Para más información, vea "[Creación de un evento de envío de repositorios](/rest/reference/repos#create-a-repository-dispatch-event)".

Al realizar una solicitud para crear un evento `repository_dispatch`, debe especificar `event_type` para describir el tipo de actividad. De manera predeterminada, todos los tipos de actividad `repository_dispatch` desencadenan un flujo de trabajo para ejecutarse. Puede usar la palabra clave `types` para limitar la ejecución del flujo de trabajo cuando se envía un valor `event_type` específico en la carga del webhook `repository_dispatch`.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Nota:** El valor `event_type` está limitado a 100 caracteres.

{% endnote %}

Los datos que envíe mediante el parámetro `client_payload` estarán disponibles en el contexto `github.event` del flujo de trabajo. Por ejemplo, si envías este cuerpo de solicitud cuando creas un evento de despacho de repositorio:

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

### `schedule`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| N/D | N/D | Última confirmación en la rama predeterminada | Rama predeterminada | Cuando se establece la ejecución del flujo de trabajo programado. Un flujo de trabajo programado usa la [sintaxis cron de POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para más información, vea "[Desencadenamiento de un flujo de trabajo con eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.actions.schedule-delay %}

El evento `schedule` permite desencadenar un flujo de trabajo a una hora programada.

{% data reusables.repositories.actions-scheduled-workflow-example %}

La sintaxis de cron tiene cinco campos separados por un espacio, y cada campo representa una unidad de tiempo.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Puedes usar estos operadores en cualquiera de los cinco campos:

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| * | Cualquier valor | `15 * * * *` se ejecuta a cada minuto 15 de cada hora de cada día. |
| , | Separador de la lista de valores | `2,10 4,5 * * *` se ejecuta en el minuto 2 y 10 de la 4ª y 5ª hora de cada día. |
| - | Rango de valores | `30 4-6 * * *` se ejecuta en el minuto 30 de la 4ª, 5ª y 6ª hora. |
| / | Valores del paso | `20/15 * * * *` se ejecuta cada 15 minutos a partir del minuto 20 hasta el 59 (los minutos 20, 35 y 50). |

{% note %}

**Nota:** {% data variables.product.prodname_actions %} no admite la sintaxis `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` y `@reboot` no estándar.

{% endnote %}

Puede usar [crontab guru](https://crontab.guru/) para ayudar a generar la sintaxis cron y confirmar la hora en que se ejecutará. Para ayudarle a empezar, también hay una lista de [ejemplos de crontab guru](https://crontab.guru/examples.html).

Las notificaciones para los flujos de trabajo programados se envían al usuario que modificó por última vez la sintaxis de cron en el archivo de flujo de trabajo. Para más información, vea "[Notificaciones para ejecuciones de flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)".

### `status`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | N/D | Última confirmación en la rama predeterminada | N/D |

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando cambia el estado de una confirmación de Git. Por ejemplo, las confirmaciones se pueden marcar como `error`, `failure`, `pending` o `success`. Si quiere proporcionar más detalles sobre el cambio de estado, es posible que le interese usar el evento [`check_run`](#check_run). Para obtener información sobre las API de estado de confirmación, vea "[Status](/graphql/reference/objects#statue)" en la documentación de GraphQL API o "[Estados](/rest/reference/commits#commit-statuses)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando se produzca el evento `status`.

```yaml
on:
  status
```

Si quiere ejecutar un trabajo en el flujo de trabajo en función del nuevo estado de confirmación, puede usar el contexto `github.event.state`. Por ejemplo, el siguiente flujo de trabajo se desencadena cuando cambia un estado de confirmación, pero el trabajo `if_error_or_failure` solo se ejecuta si el nuevo estado de confirmación es `error` o `failure`.

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

### `watch`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Aunque solo se admite el tipo de actividad `started`, la especificación del tipo de actividad mantendrá el flujo de trabajo como específico si en el futuro se agregan más tipos de actividad. Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Ejecuta tu flujo de trabajo cuando su repositorio se marcó como favorito. Para obtener información sobre las API de solicitud de incorporación de cambios, vea "[addStar](/graphql/reference/mutations#addstar)" en la documentación de GraphQL API o "[Marcar con una estrella](/rest/reference/activity#starring)" en la documentación de la API REST.

Por ejemplo, puede ejecutar un flujo de trabajo cuando alguien marca un repositorio con una estrella, que es el tipo de actividad `started` para un evento de observación.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| El mismo que el flujo de trabajo que llama | N/D | El mismo que el flujo de trabajo que llama | El mismo que el flujo de trabajo que llama |

`workflow_call` se usa para indicar que otro flujo de trabajo puede llamar a un flujo de trabajo. Cuando un flujo de trabajo se desencadena con el `workflow_call`, la carga del evento en el flujo de trabajo al que se llama es la misma que la del flujo de trabajo que realiza la llamada. Para más información, vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

El siguiente ejemplo solo ejecuta el flujo de trabajo cuando se le llama desde otro flujo de trabajo:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | N/D | Última confirmación en la rama `GITHUB_REF` | Rama que recibió el envío |

Para desencadenar manualmente un flujo de trabajo, use el evento `workflow_dispatch`. Puedes activar un flujo de trabajo manualmente utilizando la API de {% data variables.product.product_name %}, el {% data variables.product.prodname_cli %} o la interfaz de buscador de {% data variables.product.product_name %}. Para más información, vea "[Ejecución manual de un flujo de trabajo](/actions/managing-workflow-runs/manually-running-a-workflow)".

```yaml
on: workflow_dispatch
```

#### <a name="providing-inputs"></a>Proporcionar entradas

Puedes configurar propiedades de entrada definidas personalmente, valores de entrada predeterminados y entradas requeridas para el evento directamente en tu flujo de trabajo. Al desencadenar el evento, puede proporcionar `ref` y cualquier elemento `inputs`. Cuando se ejecuta el flujo de trabajo, puede acceder a los valores de entrada en el contexto de {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts)".

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %} En este ejemplo se definen las entradas denominadas `logLevel`, `tags` y `environment`. Pasarás los valores para estas entradas al flujo de trabajo cuando lo ejecutes. A continuación, este flujo de trabajo imprime los valores en el registro mediante las propiedades de contexto {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags` y  `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` y `github.event.inputs.environment`{% endif %}.

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

Para más información, vea la información de {% data variables.product.prodname_cli %} en "[Ejecución manual de un flujo de trabajo](/actions/managing-workflow-runs/manually-running-a-workflow)".

{% else %} En este ejemplo se definen las entradas `name` y `home` y se imprimen con los contextos {% ifversion actions-unified-inputs %}`inputs.name` y `inputs.home`{% else %}`github.event.inputs.name` y `github.event.inputs.home`{% endif %}. Si no se proporciona `home`, se imprime el valor predeterminado "The Octoverse".

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

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Última confirmación en la rama predeterminada | Rama predeterminada |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} El tipo de actividad `requested` no se produce cuando se vuelve a ejecutar un flujo de trabajo. Para obtener información sobre cada tipo de actividad, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Nota:** No se puede usar `workflow_run` para encadenar más de tres niveles de flujos de trabajo. Por ejemplo, si intenta desencadenar cinco flujos de trabajo (denominados `B` a `F`) para que se ejecuten secuencialmente después de que se haya ejecutado un flujo de trabajo `A` inicial (es decir, `A` → `B` → `C` → `D` → `E` → `F`), los flujos de trabajo `E` y `F` no se ejecutarán.

{% endnote %}

Este evento ocurre cuando se solicita o completa una ejecución de flujo de trabajo. Te permite ejecutar un flujo de trabajo con base en una ejecución o compleción de otro de ellos. El flujo de trabajo iniciado por el evento `workflow_run` puede acceder a secretos y tokens de escritura, incluso si el flujo de trabajo anterior no podía hacerlo. Esto es útil en los casos en que el flujo de trabajo anterior no tiene privilegios intencionalmente, pero necesitas tomar una acción que requiere de privilegios en un flujo de trabajo subsecuente.

En este ejemplo, se configura un flujo de trabajo para que se ejecute después de que se complete el flujo de trabajo separado de "Run Tests".

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Si especifica varios `workflows` para el evento `workflow_run`, solo se debe ejecutar uno de los flujos de trabajo. Por ejemplo, un flujo de trabajo con el siguiente activador se ejecutará cada que se complete el flujo de trabajo "Staging" o "Lab".

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### <a name="running-a-workflow-based-on-the-conclusion-of-another-workflow"></a>Ejecutar un flujo de trabajo con base en la conclusión de otro flujo de trabjo

Los flujos de trabajo se activan sin importar la conclusión del flujo previo. Si quiere ejecutar un trabajo o un paso en función del resultado del flujo de trabajo desencadenador, puede usar una condicional con la propiedad `github.event.workflow_run.conclusion`. Por ejemplo, este flujo de trabajo se ejecutará cada vez que se complete un flujo de trabajo denominado "Build", pero el trabajo `on-success` solo se ejecutará si el flujo de trabajo "Build" se ha realizado correctamente y el trabajo `on-failure` solo se ejecutará si se ha producido un error en el flujo de trabajo "Build":

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

#### <a name="limiting-your-workflow-to-run-based-on-branches"></a>Ltimitar tu flujo de trabajo para que se ejecute con base a las ramas

Puede usar el filtro `branches` o `branches-ignore` para especificar qué ramas debe ejecutar el flujo de trabajo desencadenador para que se desencadene el flujo de trabajo. Para más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)". Por ejemplo, un flujo de trabajo con el desencadenador siguiente solo se ejecutará cuando el flujo de trabajo `Build` se ejecute en una rama cuyo nombre empiece por `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### <a name="using-data-from-the-triggering-workflow"></a>Utilizar datos desde el flujo de trabajo llamante

Puede acceder a la [carga del evento `workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) correspondiente al flujo de trabajo que ha desencadenado el flujo de trabajo. Por ejemplo, si el flujo de trabajo desencadenador genera artefactos, un flujo de trabajo desencadenado con el evento `workflow_run` puede acceder a estos artefactos.

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

Cuando se complete una ejecución del flujo de trabajo anterior, este activará una ejecución del siguiente. El flujo de trabajo siguiente utiliza el contexto `github.event.workflow_run` y la API REST de {% data variables.product.product_name %} para descargar el artefacto cargado por el flujo de trabajo anterior, descomprime el artefacto descargado y realiza comentarios en la solicitud de incorporación de cambios cuyo número se haya cargado como un artefacto.

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
