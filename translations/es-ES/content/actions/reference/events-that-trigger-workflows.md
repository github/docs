---
title: Eventos que desencadenan flujos de trabajo
intro: 'Puedes configurar tus flujos de trabajo para que se ejecuten cuando ocurre una actividad específica en {% data variables.product.product_name %}, en un horario programado o cuando se produce un evento fuera de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configurar los eventos del flujo de trabajo

Puedes configurar los flujos de trabajo para que se ejecuten una o más veces utilizando la sintaxis de flujo de trabajo `on`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**Nota:** No puedes activar nuevas ejecuciones de flujo de trabajo usando el `GITHUB_TOKEN`. Para obtener más información, consulta "[Activar nuevos flujos de trabajo mediante un token de acceso personal](#triggering-new-workflows-using-a-personal-access-token)".

{% endnote %}

Los siguientes pasos se producen para activar una ejecución de flujo de trabajo:

1. Se produce un evento en tu repositorio, y el evento resultante tiene una confirmación de SHA y una referencia de Git asociadas.
2. El directorio `.github/workflows` en tu repositorio se busca para los archivos de flujo de trabajo en la confirmación SHA o la referencia de Git asociadas. Los archivos de flujo de trabajo deben estar presentes en la confirmación SHA o la referencia de Git que se debe tener en cuenta.

  Por ejemplo, si el evento se produjo en una rama particular del repositorio, los archivos de flujo de trabajo deben estar presentes en el repositorio en esa rama.
1. Se inspeccionarán los archivos de flujo de trabajo para esa confirmación de SHA y referencia de Git, y se activará una nueva ejecución de flujo de trabajo para cualquier flujo de trabajo que tenga valores `on:` que coincidan con el evento desencadenante.

  El flujo de trabajo se ejecuta en el código de tu repositorio en la misma confirmación SHA y la referencia de Git que desencadenó el evento. Cuando se ejecuta un flujo de trabajo, {% data variables.product.product_name %} establece las variables de entorno `GITHUB_SHA` (confirmar SHA) y `GITHUB_REF` (referencia de Git) en el entorno del ejecutor. Para obtener más información, consulta "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Eventos programados

El evento `schedule` te permite activar un flujo de trabajo en una hora programada.

#### `schedule`

| Carga del evento Webhook | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                      | n/a                | Última confirmación en la rama predeterminada | Rama por defecto | Cuando se establece la ejecución del flujo de trabajo programado. Un flujo de trabajo programado usa[sintaxis cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para obtener más información, consulta "[Desencadenar un flujo de trabajo con eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.repositories.actions-scheduled-workflow-example %}

La sintaxis de cron tiene cinco campos separados por un espacio, y cada campo representa una unidad de tiempo.

```
┌───────────── minuto (0 - 59)
│ ┌───────────── hora (0 - 23)
│ │ ┌───────────── día del mes (1 - 31)
│ │ │ ┌───────────── mes (1 - 12 o EN-DIC)
│ │ │ │ ┌───────────── día de la semana (0 - 6 o DOM-SÁB)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Puedes usar estos operadores en cualquiera de los cinco campos:

| Operador | Descripción                      | Ejemplo                                                                                                     |
| -------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| *        | Cualquier valor                  | `* * * * *` se ejecuta todos los días a cada minuto.                                                        |
| ,        | Separador de la lista de valores | `2,10 4,5 * * *` se ejecuta en el minuto 2 y 10 de la cuarta y quinta hora de cada día.                     |
| -        | Rango de valores                 | `0 4-6 * * *` se ejecuta en el minuto 0 de la cuarta, quinta y sexta hora.                                  |
| /        | Valores del paso                 | `20/15 * * * *` se ejecuta cada 15 minutos a partir del minuto 20 hasta el minuto 59 (minutos 20, 35 y 50). |

{% note %}

**Nota:** {% data variables.product.prodname_actions %} no es compatible con la sintaxis que no es estándar `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` y `@reboot`.

{% endnote %}

Puedes usar [contrab guru](https://crontab.guru/) para generar tu sintaxis de cron y confirmar a qué hora se ejecutará. Para que puedas comenzar, hay también una lista de [ejemplos de crontab guru](https://crontab.guru/examples.html).

Las notificaciones para los flujos de trabajo programados se envían al usuario que modificó por última vez la sintaxis de cron en el archivo de flujo de trabajo. Para obtener más información, por favor consulta la sección "[Notificaciones para las ejecuciones de flujo de trabajo](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)".

### Eventos manuales

Puedes activar ejecuciones de flujo de trabajo manualmente. Para activar flujos de trabajo específicos en un repositorio, utiliza el evento `workflow_dispatch`. Para activar más de un flujo de trabajo en un repositorio y crear eventos personalizados y tipos de eventos, utiliza el evento `repository_dispatch`.

#### `workflow_dispatch`

| Carga del evento Webhook                                         | Tipos de actividad | `GITHUB_SHA`                                   | `GITHUB_REF`              |
| ---------------------------------------------------------------- | ------------------ | ---------------------------------------------- | ------------------------- |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a                | Última confirmacion en la rama de `GITHUB_REF` | Rama que recibió el envío |

Puedes configurar propiedades de entrada definidas personalmente, valores de entrada predeterminados y entradas requeridas para el evento directamente en tu flujo de trabajo. Cuando se ejecuta el flujod e trabajo, puedes acceder a los valores de entrada en el contexto de `github.event.inputs`. Para obtener más información, consulta "[Sintaxis de contexto y expresión para las {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

Puedes activar una ejecución de flujo de trabajo manualmente si utilizas la API de {% data variables.product.product_name %} y desde {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Ejecutar un flujo de trabajo manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

 Cuando activas el evento en {% data variables.product.prodname_dotcom %}, puedes proporcionar la `ref` y cualquier `input` directamente en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Utilizar entradas y salidas con una acción](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)".

 Para activar el evento de webhook personalizado de `workflow_dispatch` utilizando la API de REST, debes enviar una solicitud de `POST` a la terminal de la API de {% data variables.product.prodname_dotcom %} y proporcionar la `ref` y cualquier `input` relacionado. Para obtener más información, consulta terminal "[Crear un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)" de la API de REST.

##### Ejemplo

Para utilizar el evento de `workflow_dispatch`, necesitas incluirlo como un activador en tu archivo de flujo de trabajo de GitHub Actions. El siguiente ejemplo ejecuta el flujo de trabajo únicamente cuando se activa manualmente:

```yaml
on: workflow_dispatch
```

##### Ejemplo de configuración de flujo de trabajo

Este ejemplo define las entradas `name` y `home` y las imprime utilizando los contextos `github.event.inputs.name` y `github.event.inputs.home`. Si no se proporciona un `home`, se imprime el valor predeterminado 'The Octoverse'.

{% raw %}
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
        echo "Hello ${{ github.event.inputs.name }}!"
        echo "- in ${{ github.event.inputs.home }}!"
```
{% endraw %}

#### `repository_dispatch`

| Carga del evento Webhook                                             | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a                | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.github-actions.branch-requirement %}

Puedes utilizar la API de {% data variables.product.product_name %} para desencadenar un evento de webhook llamado [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) cuando quieras desencadenar un flujo de trabajo para una actividad que sucede fuera de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Crear un evento de envío de repositorio](/rest/reference/repos#create-a-repository-dispatch-event)" en."

Para desencadenar el evento de webhook `repository_dispatch` personalizado, debes enviar una solicitud de `POST` a un punto final de una API de {% data variables.product.product_name %} y dar un nombre de `event_type` para describir el tipo de actividad. Para desencadenar la ejecución de un flujo de trabajo, también debes configurar tu flujo de trabajo para usar el evento `repository_dispatch`.

##### Ejemplo

Predeterminadamente, todos los `event_types` desencadenan la ejecución de un flujo de trabajo. Puedes limitar tu flujo de trabajo para que se ejecute cuando un valor específico de `event_type` se envíe en la carga útil del webhook de `repository_dispatch`. Tú defines los tipos de evento enviados en la carga útil de `repository_dispatch` cuando creas el repositorio.

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

### Eventos de webhook

Puedes configurar tu flujo de trabajo para que se ejecute cuando se crean eventos de webhook en GitHub. Algunos eventos tienen más de un tipo de actividad que activa el evento. Si más de un tipo de actividad activa el evento, puedes especificar qué tipos de actividad activarán el flujo de trabajo para que se ejecute. Para obtener más información, consulta la sección "[webhooks](/webhooks)".

#### `check_run`

Ejecuta tu flujo de trabajo en cualquier momento que se produzca el evento `check_run`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de la API de REST, consulta la sección "[Ejecuciones de verificación](/rest/reference/checks#runs)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                           | Tipos de actividad                                                                           | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una comprobación de ejecución ha sido `resolicitada` o `requested_action`.

```yaml
on:
  check_run:
    types: [rerequested, requested_action]
```

#### `check_suite`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `check_suite`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de la API de REST, consulta la sección de "[conjuntos de verificaciones](/rest/reference/checks#suites)".

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Nota:** Para evitar flujos de trabajo recurrentes, este evento no activa flujos de trabajo si la comprobación de suite fue creada por {% data variables.product.prodname_actions %}.

{% endnote %}

| Carga del evento Webhook                               | Tipos de actividad                                                         | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una comprobación de ejecución ha sido `resolicitada` o `completada`.

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

#### `create (crear)`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien cree una rama o etiqueta, lo que activa el evento `crear`. Para obtener más información sobre la API de REST, consulta la sección "[Crear una referencia](/rest/reference/git#create-a-reference)".

| Carga del evento Webhook                             | Tipos de actividad | `GITHUB_SHA`                                     | `GITHUB_REF`           |
| ---------------------------------------------------- | ------------------ | ------------------------------------------------ | ---------------------- |
| [`create (crear)`](/webhooks/event-payloads/#create) | n/a                | Última confirmación en la rama o etiqueta creada | Rama o etiqueta creada |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `crear`.

```yaml
on:
  create
```

#### `delete`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien cree una rama o etiqueta, lo que activa el evento `delete`. Para obtener más información sobre la API de REST, consulta la sección "[Borrar una referencia](/rest/reference/git#delete-a-reference)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                     | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [`delete`](/webhooks/event-payloads/#delete) | n/a                | Última confirmación en la rama predeterminada | Rama por defecto |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `delete`.

```yaml
on:
  delete
```

#### `deployment`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien cree una implementación, lo que activa el evento `deployment`. Las implementaciones creadas con SHA de confirmación pueden no tener una referencia de Git. Para obtener más información acerca de la API de REST, consulta la sección "[Despliegues](/rest/reference/repos#deployments)".

| Carga del evento Webhook                             | Tipos de actividad | `GITHUB_SHA`                   | `GITHUB_REF`                                                       |
| ---------------------------------------------------- | ------------------ | ------------------------------ | ------------------------------------------------------------------ |
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a                | Confirmación de implementación | Rama o etiqueta que se debe implementar (vacío si está confirmada) |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `deployment`.

```yaml
on:
  deployment
```

#### `deployment_status`

Ejecuta tu flujo de trabajo en cualquier momento en que un tercero proporcione un estado de implementación, lo que activa un evento `deployment_status`. Las implementaciones creadas con SHA de confirmación pueden no tener una referencia de Git. Para obtener más información acerca de la API de REST, consulta la sección "[Crear un estado de despliegue](/rest/reference/repos#create-a-deployment-status)".

| Carga del evento Webhook                                           | Tipos de actividad | `GITHUB_SHA`                   | `GITHUB_REF`                                                       |
| ------------------------------------------------------------------ | ------------------ | ------------------------------ | ------------------------------------------------------------------ |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a                | Confirmación de implementación | Rama o etiqueta que se debe implementar (vacío si está confirmada) |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `deployment`.

```yaml
on:
  deployment_status
```

#### `fork`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien bifurque un repositorio, lo que activa el evento de `fork`. Para obtener más información sobre la API de REST, consulta la sección "[Crear una bifurcación](/rest/reference/repos#create-a-fork)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ---------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [`fork`](/webhooks/event-payloads/#fork) | n/a                | Última confirmación en la rama predeterminada | Rama por defecto |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `fork`.

```yaml
on:
  fork
```

#### `gollum`

Ejecuta tu flujo de trabajo cuando alguien crea o actualiza una página Wiki, lo que activa el evento `gollum`.

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                     | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a                | Última confirmación en la rama predeterminada | Rama por defecto |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `gollum`.

```yaml
on:
  gollum
```

#### `comentario_propuesta`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `issue_comment`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de la API de REST, consulta la sección "[comentarios de un informe de problemas](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                                                                            | Tipos de actividad                                                | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`comentario_propuesta`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una propuesta ha sido `created` (creada) o `deleted` (eliminada).

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

El evento `issue_comment` ocurre para los comentarios tanto en propuestas como en solicitudes de cambios. Para determinar si el evento `issue_comment` se activó desde una propuesta o solicitud de cambios, puedes verificar la carga útil del evento para la propiedad `issue.pull_request` y utilizarla como condición para saltarse un job.

Por ejemplo, puedes elegir ejecutar el job `pr_commented` cuando ocurren los comentarios de evento en una solicitud de cambios, y el job `issue_commented` cuando ocurran eventos de comentarios en una propuesta.

{% raw %}
```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on PR #${{ github.event.issue.number }}"

  issue-commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
```
{% endraw %}

#### `propuestas`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `issues`. {% data reusables.developer-site.multiple_activity_types %} Para obtener información acerca de la API de REST, consulta la sección "[informes de problemas](/rest/reference/issues)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                         | Tipos de actividad                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`propuestas`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una propuesta ha sido `opened` (abierta), `edited` (editada), o `milestoned` (marcada como hito).

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `label`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `label`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta  la sección "[Etiquetas](/rest/reference/issues#labels)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                   | Tipos de actividad                                                | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ------------------------------------------ | ----------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`label`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una etiqueta ha sido `created` (creada) o `deleted` (eliminada).

```yaml
on:
  label:
    types: [created, deleted]
```

#### `milestone`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `milestone`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Hitos](/rest/reference/issues#milestones)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                           | Tipos de actividad                                                                                          | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`milestone`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un hito ha sido `opened` o `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

#### `page_build`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien suba a una rama habilitada para páginas {% data variables.product.product_name %}, lo que activa el evento `page_build`. Para obtener información acerca de la API de REST, consulta la sección "[Páginas](/rest/reference/repos#pages)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                             | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF` |
| ---------------------------------------------------- | ------------------ | --------------------------------------------- | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a                | Última confirmación en la rama predeterminada | n/a          |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `page_build`.

```yaml
on:
  page_build
```

#### `project`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `project`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Proyectos](/rest/reference/projects)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                       | Tipos de actividad                                                                                                                  | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`project`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un proyecto ha sido `created` o `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

#### `project_card`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `project_card`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Tarjetas de proyecto](/rest/reference/projects#cards)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                                 | Tipos de actividad                                                                                             | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una tarjeta de proyecto ha sido `opened` o `deleted`.

```yaml
on:
  project_card:
    types: [opened, deleted]
```

#### `project_column`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `project_column`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Columnas de proyecto](/rest/reference/projects#columns)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                                     | Tipos de actividad                                                          | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una columna de proyecto ha sido `created` o `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

#### `public`

Ejecuta tu flujo de trabajo en cualquier momento en que alguien haga público un repositorio privado, lo que activa el evento `public`. Para obtener más información acerca de la API de REST, consulta la sección "[Editar repositorios](/rest/reference/repos#edit)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                     | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [`public`](/webhooks/event-payloads/#public) | n/a                | Última confirmación en la rama predeterminada | Rama por defecto |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `public`.

```yaml
on:
  public
```

#### `solicitud_extracción`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento de `pull_request`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Solicitudes de extraccións](/rest/reference/pulls)".

{% note %}

**Nota:** Por defecto, un flujo de trabajo solo se ejecuta cuando un tipo de actividad de `pull_request` es `opened` (abierta), `synchronize` (sincronizada) o `reopened` (reabierta). Para activar los flujos de trabajo para más tipos de actividad, usa la palabra clave `types`.

{% endnote %}

| Carga del evento Webhook                                         | Tipos de actividad                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| [`solicitud_extracción`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

Puedes extender o limitar los tipos de actividad predeterminados usando la palabra clave `types`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una solicitud de extracción ha sido `assigned` (asignada), `opened`, `syncronize` o `reopened`.

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `revisión_solicitud de extracción`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `pull_request_review`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Revisiones de solicitudes de extracción](/rest/reference/pulls#reviews)".

| Carga del evento Webhook                                                            | Tipos de actividad                                         | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| [`revisión_solicitud de extracción`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una revisión de solicitud de extracción ha sido `edited` (editada) o `dismissed` (descartada).

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `comentarios _revisiones_solicitudes de extracción`

Ejecuta tu flujo de trabajo en cualquier momento en que se modifique una diferencia unificada de solicitud de extracción, que activa el evento `pull_request_review_comment`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección [Revisar comentarios](/rest/reference/pulls#comments).

| Carga del evento Webhook                                                                                     | Tipos de actividad                                     | `GITHUB_SHA`                                          | `GITHUB_REF`                                     |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------ |
| [`comentarios _revisiones_solicitudes de extracción`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Última confirmación de fusión en la rama `GITHUB_REF` | Rama de fusión de PR `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un comentario de revisión de solicitud de extracción ha sido `created` o `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

#### `pull_request_target`

Este evento se ejecuta en el contexto de la base de la solicitud de cambios en vez de en la confirmación fusionada como lo hace el evento `pull_request`.  Esto previene que se ejecute el código inseguro del flujo de trabajo desde el encabezado de la solicitud de cambios, el cual pudiera alterar a tu repositorio, o borrar cualquier secreto que utilices en tu flujo de trabajo. Este evento te permite hacer cosas como crear flujos de trabajo que etiquetan y comentan las solicitudes de cambios, con base en el contenido de la carga útil del evento.

{% warning %}

**Advertencia:** Se otorga un token de repositorio con permisos de lectura/escritura al evento `pull_request_target` y éste puede acceder a los secretos, aún cuando se activa desde una bifurcación. Aunque las ejecuciones de flujo de trabajo se ejecutan en el contexto de la base de la solicitud de cambios, debes asegurarte de que no revisas, compilas o ejecutas código no confiable desde ella con este evento. Adicionalmente, cualquier caché comparte el mismo alcance que la rama base y, para ayudar a prevenir que se vicie el caché, no deberías guardarlo si existe una posibilidad de que su contenido se haya alterado.

{% endwarning %}

| Carga del evento Webhook                                         | Tipos de actividad                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA`                                                      | `GITHUB_REF`                            |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| [`solicitud_extracción`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Última confirmación en la rama base de la solicitud de extracción | Rama base de la solicitud de extracción |

Predeterminadamente, un flujo de trabajo se ejecuta únicamente cuando el tipo de actividad de un `pull_request_target` se encuentra como `opened`, `synchronize`, o `reopened`. Para activar los flujos de trabajo para más tipos de actividad, usa la palabra clave `types`. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

Por ejemplo, puedes ejecutar un flujo de trabajo cuando una solicitud de extracción ha sido `assigned` (asignada), `opened`, `syncronize` o `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

{% endif %}

#### `push`

{% note %}

**Nota:** La carga disponible del webhook para las acciones de GitHub no incluye los atributos `added`, `removed` y `modified` en el objeto `commit`. Puedes recuperar el objeto de confirmación completo usando la API REST. Para obtener más información, consulta la sección "[Obtener una sola confirmación](/rest/reference/repos#get-a-single-commit)".

{% endnote %}

Ejecuta tu flujo de trabajo cuando alguien sube a una rama de repositorio, lo que activa el evento `push`.

| Carga del evento Webhook                 | Tipos de actividad | `GITHUB_SHA`                                                                                  | `GITHUB_REF`    |
| ---------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------- | --------------- |
| [`push`](/webhooks/event-payloads/#push) | n/a                | Confirmación subida, a menos que se elimine una rama (cuando se trata de la rama por defecto) | Ref actualizado |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `push`.

```yaml
on:
  push
```

#### `registry_package`

Ejecuta tu flujo de trabajo en cualquier momento en que un paquete es `publish` (publicado) o `updated` (actualizado). Para obtener más información, consulta "[Administrar paquetes con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)."

| Carga del evento Webhook                                | Tipos de actividad                  | `GITHUB_SHA`                       | `GITHUB_REF`                          |
| ------------------------------------------------------- | ----------------------------------- | ---------------------------------- | ------------------------------------- |
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | Confirmación del paquete publicado | Rama o etiqueta del paquete publicado |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un paquete ha sido `publicado`.

```yaml
on:
  registry_package:
    types: [published]
```

#### `release`

{% note %}

**Nota:** El evento `release` no se activará para los lanzamientos en borrador.

{% endnote %}

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `release`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información sobre la API de REST, consulta la sección "[Lanzamientos](/rest/reference/repos#releases)".

| Carga del evento Webhook                       | Tipos de actividad                                                                                                                                              | `GITHUB_SHA`                                     | `GITHUB_REF`            |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------- |
| [`release`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Última confirmación en el lanzamiento etiquetado | Etiqueta de lanzamiento |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando un lanzamiento ha sido `publish`.

```yaml
on:
  release:
    types: [published]
```

#### `status`

Ejecuta tu flujo de trabajo en cualquier momento en que cambia el estado de una confirmación de Git, lo que activa el evento `status`. Para obtener más información acerca de la API de REST, consulta la sección "[Estados](/rest/reference/repos#statuses)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                     | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF` |
| -------------------------------------------- | ------------------ | --------------------------------------------- | ------------ |
| [`status`](/webhooks/event-payloads/#status) | n/a                | Última confirmación en la rama predeterminada | n/a          |

Por ejemplo, puedes ejecutar un flujo de trabajo cuando se produzca el evento `status`.

```yaml
on:
  status
```

#### `watch`

Ejecuta tu flujo de trabajo en cualquier momento en que se produzca el evento `watch`. {% data reusables.developer-site.multiple_activity_types %} Para obtener más información acerca de la API de REST, consulta la sección "[Marcar con una estrella](/rest/reference/activity#starring)".

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                   | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| ------------------------------------------ | ------------------ | --------------------------------------------- | ---------------- |
| [`watch`](/webhooks/event-payloads/#watch) | - `started`        | Última confirmación en la rama predeterminada | Rama por defecto |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por ejemplo, puedes ejecutar un flujo de trabajo cuando alguien coloca una estrella en un repositorio, que es el tipo de actividad `started` que activa el evento Ver.

```yaml
on:
  watch:
    types: [started]
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

{% data reusables.github-actions.branch-requirement %}

| Carga del evento Webhook                                 | Tipos de actividad | `GITHUB_SHA`                                  | `GITHUB_REF`     |
| -------------------------------------------------------- | ------------------ | --------------------------------------------- | ---------------- |
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - n/a              | Última confirmación en la rama predeterminada | Rama por defecto |

Si necesitas filtrar las ramas de este evento, puedes utilizar `branches` o `branches-ignore`.

En este ejemplo, se configuró la ejecución de un flujo de trabajo después de que se completen las "Pruebas de ejecución" por separado para el mismo.

```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```

{% endif %}

### Activar nuevos flujos de trabajo mediante un token de acceso personal

{% data reusables.github-actions.actions-do-not-trigger-workflows %} Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Si deseas activar un flujo de trabajo desde una ejecución de flujo de trabajo, puedes desencadenar el evento mediante un token de acceso personal. Necesitaras crear un token de acceso personal y almacenarlo como un secreto. Para minimizar tus costos de uso de {% data variables.product.prodname_actions %}, asegúrate de no crear ejecuciones de flujo de trabajo recurrentes o involuntarias. Para obtener más información sobre almacenr un token de acceso personal como secreto, consulta la sección "[Crear y almacenar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".
