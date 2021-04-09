---
title: Ereignisse, die Workflows auslösen
intro: 'Sie können konfigurieren, dass Ihre Workflows zu einem geplanten Zeitpunkt ausgeführt werden oder dann, wenn eine bestimmte Aktivität auf {% data variables.product.product_name %} stattfindet oder ein Ereignis außerhalb von {% data variables.product.product_name %} auftritt.'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configuring workflow events

You can configure workflows to run for one or more events using the `on` workflow syntax. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)."

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**Hinweis:** Du kannst einen neuen Workflow-Lauf nicht mithilfe des `GITHUB_TOKEN` anstoßen. Weitere Informationen findest Du unter „[Neue Workflows mit einem persönlichen Zugriffstoken anstoßen](#triggering-new-workflows-using-a-personal-access-token)“.

{% endnote %}

Die folgenden Schritte laufen ab, um einen Workflow-Lauf auszulösen:

1. An event occurs on your repository, and the resulting event has an associated commit SHA and Git ref.
2. Das Verzeichnis `.github/workflows` in Deinem Repository wird nach Workflow-Dateien des zugehörigen Commit-SHA oder der zugehörigen Git Ref durchsucht. Die Workflow-Dateien müssen in diesem Commit-SHA oder dieser Git Ref vorhanden sein, um berücksichtigt zu werden.

  Wenn zum Beispiel das Ereignis in einem bestimmten Repository-Zweig aufgetreten ist, müssen die Workflow-Dateien im Repository dieses Zweiges vorhanden sein.
1. Die Workflow-Dateien für diesen Commit-SHA und diese Git Ref werden überprüft und für alle Workflows, deren `on:`-Werte zu dem auslösenden Ereignis passen, wird ein neuer Workflow-Lauf angestoßen.

  Der Workflow läuft auf dem Code Deines Repositorys mit dem selben Commit-SHA und derselben Git Ref wie das auslösende Ereignis. Wenn ein Workflow läuft, setzt {% data variables.product.product_name %} die Umgebungsvariablen `GITHUB_SHA` (Commit-SHA) und `GITHUB_REF` (Git Ref) in der Umgebung auf dem Runner. Weitere Informationen findest Du unter „[Umgebungsvariablen verwenden](/actions/automating-your-workflow-with-github-actions/using-environment-variables)“.

### Geplante Ereignisse

The `schedule` event allows you to trigger a workflow at a scheduled time.

{% data reusables.actions.schedule-delay %}

#### `Zeitplan`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| –                                | –               | Letzter Commit im Standard-Branch | Standardbranch | Zeitpunkt, zu dem der geplante Workflow ausgeführt werden soll. Für einen geplanten Workflow gilt die [POSIX-Cron-Syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Weitere Informationen finden Sie unter „[Einen Workflow mit Ereignissen auslösen](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)“. |

{% data reusables.repositories.actions-scheduled-workflow-example %}

Die Cron-Syntax umfasst fünf durch Leerzeichen getrennte Felder, die jeweils eine Zeiteinheit darstellen.

```
┌───────────── Minute (0–59)
│ ┌───────────── Stunde (0–23)
│ │ ┌───────────── Tag (1–31)
│ │ │ ┌───────────── Monat (1–12 oder JAN–DEZ)
│ │ │ │ ┌───────────── Wochentag (0–6 oder SON–SAM)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```

In den fünf Feldern stehen die folgenden Operatoren zur Auswahl:

| Operator | Beschreibung               | Beispiel                                                                                                      |
| -------- | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| *        | Beliebiger Wert            | `* * * * *` wird jeden Tag jede Minute ausgeführt.                                                            |
| ,        | Trennzeichen in Werteliste | `2,10 4,5 * * *` wird jeden Tag bei Minute 2 und 10 der 4. und 5. Stunde ausgeführt.                          |
| -        | Wertebereich               | `0 4-6 * * *` wird bei Minute 0 der 4., 5. und 6. Stunde ausgeführt.                                          |
| /        | Schrittwerte               | `20/15 * * * *` wird alle 15 Minuten ausgeführt, von Minute 20 bis Minute 59 (also bei Minute 20, 35 und 50). |

{% note %}

**Hinweis:** {% data variables.product.prodname_actions %} bietet keine Unterstützung für die nicht standardmäßige Syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` und `@reboot`.

{% endnote %}

Mit [crontab guru](https://crontab.guru/) können Sie die Cron-Syntax erzeugen und den Ausführungszeitpunkt bestätigen. Als Einstiegshilfe steht eine Liste mit [crontab-guru-Beispielen](https://crontab.guru/examples.html) bereit.

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. For more information, please see "[Notifications for workflow runs](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)."

### Manual events

You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event. To trigger more than one workflow in a repository and create custom events and event types, use the `repository_dispatch` event.

#### `workflow_dispatch`

| Nutzlast des Webhook-Ereignisses                                 | Aktivitätstypen | `GITHUB_SHA`                          | `GITHUB_REF`                           |
| ---------------------------------------------------------------- | --------------- | ------------------------------------- | -------------------------------------- |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | –               | Letzter Commit im Branch `GITHUB_REF` | Branch, der den Dispatch empfangen hat |

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. Wenn der Workflow ausgeführt wird, können Sie auf die Eingabewerte im `github.event.inputs` Kontextzugreifen. Weitere Informationen findest Du unter "[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

You can manually trigger a workflow run using the {% data variables.product.prodname_dotcom %} API and from {% data variables.product.prodname_dotcom %}. For more information, see "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

 When you trigger the event on {% data variables.product.prodname_dotcom %}, you can provide the `ref` and any `inputs` directly on {% data variables.product.prodname_dotcom %}. For more information, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

 To trigger the custom `workflow_dispatch` webhook event using the REST API, you must send a `POST` request to a {% data variables.product.prodname_dotcom %} API endpoint and provide the `ref` and any required `inputs`. For more information, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)" REST API endpoint.

##### Beispiel

To use the `workflow_dispatch` event, you need to include it as a trigger in your GitHub Actions workflow file. The example below only runs the workflow when it's manually triggered:

```yaml
on: workflow_dispatch
```

##### Example workflow configuration

In diesem Beispiel wird der `Name` definiert und</code> ein- und `zu Hause verwendet, und sie werden mit den Kontexten <code>github.event.inputs.name` und `github.event.inputs.home` gedruckt. If a `home` isn't provided, the default value 'The Octoverse' is printed.

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
        echo "- in{{ github.event.inputs.home }}!"
```
{% endraw %}

#### `repository_dispatch`

| Nutzlast des Webhook-Ereignisses                                     | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------------------------- | --------------- | --------------------------------- | --------------- |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | –               | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.github-actions.branch-requirement %}

Mit der {% data variables.product.product_name %}-API können Sie das Webhook-Ereignis [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) auslösen, wenn ein Workflow für eine Aktivität ausgelöst werden soll, die außerhalb von {% data variables.product.prodname_dotcom %} abläuft. For more information, see "[Create a repository dispatch event](/rest/reference/repos#create-a-repository-dispatch-event)."

Soll das benutzerdefinierte Webhook-Ereignis `repository_dispatch` ausgelöst werden, senden Sie eine `POST`-Anfrage an einen {% data variables.product.product_name %}-API-Endpunkt, und geben Sie den Namen für einen `event_type` als Beschreibung für den Aktivitätstyp an. Soll ein Workflow-Lauf ausgelöst werden, konfigurieren Sie außerdem den Workflow für die Verwendung des Ereignisses `repository_dispatch`.

##### Beispiel

Standardmäßig lösen alle `event_types` einen Workflow aus. Du kannst Deinen Workflow darauf beschränken, zu laufen, wenn ein bestimmter Wert als `event_type` in der Webhoo-Nutzlast des `repository_dispatch` gesendet wird. Du definierst die Ereignistypen, die in der Nutzlast des `repository_dispatch` gesendet werden, wenn Du das Repositorydispatch-Ereignis erstellst.

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

### Webhook-Ereignisse

You can configure your workflow to run when webhook events are generated on {% data variables.product.product_name %}. Einige Ereignisse werden von mehreren Aktivitätstypen ausgelöst. Wird ein Ereignis von mehreren Aktivitätstypen ausgelöst, können Sie die Aktivitätstypen angeben, die die Ausführung des Workflows auslösen sollen. For more information, see "[Webhooks](/webhooks)."

Not all webhook events trigger workflows. For the complete list of available webhook events and their payloads, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

#### `check_run`

Führt den Workflow aus, wenn das Ereignis `check_run` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check runs](/rest/reference/checks#runs)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                   | Aktivitätstypen                                                                              | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Prüflauf erneut angefordert wurde (`rerequested`) oder eine Aktion angefordert hat (`requested_action`).

```yaml
on:
  check_run:
    types: [rerequested, requested_action]
```

#### `check_suite`

Führt den Workflow aus, wenn das Ereignis `check_suite` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check suites](/rest/reference/checks#suites)."

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Hinweis:** Um rekursive Workflows zu verhindern, löst dieses Ereignis keine Workflows aus, wenn die Prüfsuite von {% data variables.product.prodname_actions %} erstellt wurde.

{% endnote %}

| Nutzlast des Webhook-Ereignisses                       | Aktivitätstypen                                                            | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn eine Prüfsuite erneut angefordert (`rerequested`) oder abgeschlossen (`completed`) wurde.

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

#### `create`

Führt den Workflow aus, wenn ein Benutzer einen Branch oder ein Tag erstellt, wodurch das Ereignis `create` ausgelöst wird. For information about the REST API, see "[Create a reference](/rest/reference/git#create-a-reference)."

| Nutzlast des Webhook-Ereignisses             | Aktivitätstypen | `GITHUB_SHA`                                 | `GITHUB_REF`               |
| -------------------------------------------- | --------------- | -------------------------------------------- | -------------------------- |
| [`create`](/webhooks/event-payloads/#create) | –               | Letzter Commit im erstellten Branch oder Tag | Erstellter Branch oder Tag |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `create` eintritt.

```yaml
on:
  create
```

#### `delete`

Führt den Workflow aus, wenn ein Benutzer einen Branch oder ein Tag löscht, wodurch das Ereignis `delete` ausgelöst wird. For information about the REST API, see "[Delete a reference](/rest/reference/git#delete-a-reference)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses             | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------- | --------------- | --------------------------------- | --------------- |
| [`delete`](/webhooks/event-payloads/#delete) | –               | Letzter Commit im Standard-Branch | Standard-Branch |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `delete` eintritt.

```yaml
on:
  delete
```

#### `deployment`

Führt den Workflow aus, wenn ein Benutzer eine Bereitstellung erstellt, wodurch das Ereignis `deployment` ausgelöst wird. Bereitstellungen, die mit einer Commit-SHA erstellt wurden, umfassen ggf. keinen Git-Ref. For information about the REST API, see "[Deployments](/rest/reference/repos#deployments)."

| Nutzlast des Webhook-Ereignisses                     | Aktivitätstypen | `GITHUB_SHA`              | `GITHUB_REF`                                         |
| ---------------------------------------------------- | --------------- | ------------------------- | ---------------------------------------------------- |
| [`deployment`](/webhooks/event-payloads/#deployment) | –               | Bereitzustellender Commit | Bereitzustellender Branch oder Tag (leer bei Commit) |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `deployment` eintritt.

```yaml
on:
  deployment
```

#### `deployment_status`

Führt den Workflow aus, wenn ein Dritter einen Bereitstellungsstatus angibt, wodurch das Ereignis `deployment_status` ausgelöst wird. Bereitstellungen, die mit einer Commit-SHA erstellt wurden, umfassen ggf. keinen Git-Ref. For information about the REST API, see "[Create a deployment status](/rest/reference/repos#create-a-deployment-status)."

| Nutzlast des Webhook-Ereignisses                                   | Aktivitätstypen | `GITHUB_SHA`              | `GITHUB_REF`                                         |
| ------------------------------------------------------------------ | --------------- | ------------------------- | ---------------------------------------------------- |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | –               | Bereitzustellender Commit | Bereitzustellender Branch oder Tag (leer bei Commit) |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `deployment_status` eintritt.

```yaml
on:
  deployment_status
```

{% note %}

**Note:** When a deployment status's state is set to `inactive`, a webhook event will not be created.

{% endnote %}

#### `Fork`

Führt den Workflow aus, wenn ein Benutzer ein Repository forkt, wodurch das Ereignis `fork` ausgelöst wird. For information about the REST API, see "[Create a fork](/rest/reference/repos#create-a-fork)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses         | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ---------------------------------------- | --------------- | --------------------------------- | --------------- |
| [`Fork`](/webhooks/event-payloads/#fork) | –               | Letzter Commit im Standard-Branch | Standard-Branch |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `fork` eintritt.

```yaml
on:
  fork
```

#### `gollum`

Führt den Workflow aus, wenn ein Benutzer eine Wiki-Seite erstellt oder aktualisiert, wodurch das Ereignis `gollum` ausgelöst wird.

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses             | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------- | --------------- | --------------------------------- | --------------- |
| [`gollum`](/webhooks/event-payloads/#gollum) | –               | Letzter Commit im Standard-Branch | Standard-Branch |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `gollum` eintritt.

```yaml
on:
  gollum
```

#### `issue_comment`

Führt Deinen Workflow jedes Mal aus, wenn das Ereignis `issue_comment` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issue comments](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                                                             | Aktivitätstypen                                                   | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------- | --------------- |
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Du kannst einen Workflow beispielsweise ausführen, wenn ein Problemkommentar erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

The `issue_comment` event occurs for comments on both issues and pull requests. To determine whether the `issue_comment` event was triggered from an issue or pull request, you can check the event payload for the `issue.pull_request` property and use it as a condition to skip a job.

For example, you can choose to run the `pr_commented` job when comment events occur in a pull request, and the `issue_commented` job when comment events occur in an issue.

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

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
```
{% endraw %}

#### `Issues (Lieferungen)`

Führt den Workflow aus, wenn das Ereignis `issues` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issues](/rest/reference/issues)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                           | Aktivitätstypen                                                                                                                                                                                                                                                                                                                                                        | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`Issues (Lieferungen)`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Du kannst einen Workflow beispielsweise ausführen, wenn ein Problem geöffnet (`opened`) oder bearbeitet (`edited`) wurde oder wenn dafür ein Meilenstein gesetzt wurde (`milestoned`).

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `Kennzeichnung`

Führt den Workflow aus, wenn das Ereignis `label` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see  "[Labels](/rest/reference/issues#labels)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                   | Aktivitätstypen                                                   | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------- | --------------- |
| [`Kennzeichnung`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn eine Kennzeichnung erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  label:
    types: [created, deleted]
```

#### `Meilensteine`

Führt Deinen Workflow aus, wenn das Ereignis `milestone` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Milestones](/rest/reference/issues#milestones)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                      | Aktivitätstypen                                                                                             | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`Meilensteine`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Du kannst einen Workflow beispielsweise ausführen, wenn eine Meilenstein geöffnet (`opened`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

#### `page_build`

Führt den Workflow aus, wenn ein Benutzer einen Push an einen {% data variables.product.product_name %}-Pages-fähigen Branch vornimmt, wodurch das Ereignis `page_build` ausgelöst wird. For information about the REST API, see "[Pages](/rest/reference/repos#pages)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                     | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF` |
| ---------------------------------------------------- | --------------- | --------------------------------- | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | –               | Letzter Commit im Standard-Branch | –            |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `page_build` eintritt.

```yaml
on:
  page_build
```

#### `project (Projekt)`

Führt den Workflow aus, wenn das Ereignis `project` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Projects](/rest/reference/projects)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                         | Aktivitätstypen                                                                                                                     | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`project (Projekt)`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Projekt erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project:
    types: [created, deleted]
```

#### `project_card`

Führt den Workflow aus, wenn das Ereignis `project_card` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project cards](/rest/reference/projects#cards)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                         | Aktivitätstypen                                                                                                | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Projektticket geöffnet (`opened`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project_card:
    types: [opened, deleted]
```

#### `project_column`

Führt Deinen Workflow aus, wenn das Ereignis `project_column` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project columns](/rest/reference/projects#columns)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                             | Aktivitätstypen                                                             | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Du kannst einen Workflow beispielsweise ausführen, wenn eine Projektspalte erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project_column:
    types: [created, deleted]
```

#### `public`

Führt Deinen Workflow aus, wenn ein Benutzer ein privates Repository öffentlich macht, wodurch das Ereignis `public` ausgelöst wird. For information about the REST API, see "[Edit repositories](/rest/reference/repos#edit)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses             | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------- | --------------- | --------------------------------- | --------------- |
| [`public`](/webhooks/event-payloads/#public) | –               | Letzter Commit im Standard-Branch | Standard-Branch |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `public` eintritt.

```yaml
on:
  public
```

#### `pull_request`

Führt den Workflow aus, wenn das Ereignis `pull_request` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull requests](/rest/reference/pulls)."

{% note %}

**Hinweis:** Standardmäßig wird ein Workflow nur dann ausgeführt, wenn der `pull_request` den Aktivitätstyp `opened`, `synchronize` oder `reopened` aufweist. Sollen Workflows für weitere Aktivitätstypen ausgelöst werden, geben Sie das Stichwort `types` an.

{% endnote %}

| Nutzlast des Webhook-Ereignisses                         | Aktivitätstypen                                                                                                                                                                                                                                                                                                                                      | `GITHUB_SHA`                                | `GITHUB_REF`                                |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Merge-Branch `refs/pull/:prNumber/merge` |

Mit dem Stichwort `types` erweitern oder begrenzen Sie die Standard-Aktivitätstypen. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)“.

Du kannst einen Workflow beispielsweise dann ausführen, wenn ein Pull Request zugewiesen (`assigned`), geöffnet (`opened`), synchronisiert (`synchronize`) oder erneut geöffnet (`reopened`) wurde.

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review`

Führt den Workflow aus, wenn das Ereignis `pull_request_review` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull request reviews](/rest/reference/pulls#reviews)."

| Nutzlast des Webhook-Ereignisses                                       | Aktivitätstypen                                            | `GITHUB_SHA`                                | `GITHUB_REF`                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Merge-Branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Pull-Request-Review bearbeitet (`edited`) oder verworfen (`dismissed`) wurde.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review_comment`

Führt den Workflow aus, wenn ein Kommentar zum vereinheitlichten Diff für einen Pull Request geändert wird, wodurch das Ereignis `pull_request_review_comment` ausgelöst wird. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see [Review comments](/rest/reference/pulls#comments).

| Nutzlast des Webhook-Ereignisses                                                       | Aktivitätstypen                                        | `GITHUB_SHA`                                | `GITHUB_REF`                                |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- | ------------------------------------------- |
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Merge-Branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Pull-Request-Review-Kommentar erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `pull_request_target`

This event runs in the context of the base of the pull request, rather than in the merge commit as the `pull_request` event does.  This prevents executing unsafe workflow code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows you to do things like create workflows that label and comment on pull requests based on the contents of the event payload.

{% warning %}

**Warning:** The `pull_request_target` event is granted a read/write repository token and can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Additionally, any caches share the same scope as the base branch, and to help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. For more information, see "[Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" on the GitHub Security Lab website.

{% endwarning %}

| Nutzlast des Webhook-Ereignisses                                | Aktivitätstypen                                                                                                                                                                                                                                                                                                                                      | `GITHUB_SHA`                      | `GITHUB_REF`   |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| [`pull_request_target`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Last commit on the PR base branch | PR base branch |

By default, a workflow only runs when a `pull_request_target`'s activity type is `opened`, `synchronize`, or `reopened`. Sollen Workflows für weitere Aktivitätstypen ausgelöst werden, geben Sie das Stichwort `types` an. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)“.

Du kannst einen Workflow beispielsweise dann ausführen, wenn ein Pull Request zugewiesen (`assigned`), geöffnet (`opened`), synchronisiert (`synchronize`) oder erneut geöffnet (`reopened`) wurde.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

{% endif %}

#### `Push`

{% note %}

**Hinweis:** Die Webhook-Nutzlast, die Für GitHub-Aktionen verfügbar ist, enthält im Objekt `commit` nicht die Attribute `added`, `removed` und `modified`. Du kannst das vollständige Commit-Objekt mit der REST-API abrufen. For more information, see "[Get a commit](/rest/reference/repos#get-a-commit)".

{% endnote %}

Führt den Workflow aus, wenn ein Benutzer einen Push an einen Repository-Branch durchführt, wodurch das Ereignis `push` ausgelöst wird.

| Nutzlast des Webhook-Ereignisses         | Aktivitätstypen | `GITHUB_SHA`                                                                   | `GITHUB_REF`       |
| ---------------------------------------- | --------------- | ------------------------------------------------------------------------------ | ------------------ |
| [`Push`](/webhooks/event-payloads/#push) | –               | Gepushter Commit, außer beim Löschen eines Branches (nur beim Standard-Branch) | Aktualisierter Ref |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `push` eintritt.

```yaml
on:
  push
```

#### `registry_package`

Führt Deinen Workflow aus, wenn ein Paket `veröffentlicht` oder `aktualisiert` wird. Weitere Informationen findest Du unter „[Pakete mit {% data variables.product.prodname_registry %} verwalten](/github/managing-packages-with-github-packages)".

| Nutzlast des Webhook-Ereignisses                        | Aktivitätstypen                     | `GITHUB_SHA`                       | `GITHUB_REF`                                |
| ------------------------------------------------------- | ----------------------------------- | ---------------------------------- | ------------------------------------------- |
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | Commit des veröffentlichten Pakets | Branch oder Tag des veröffentlichten Pakets |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Du kannst einen Workflow beispielsweise ausführen, wenn ein Paket veröffentlicht (`published`) wurde.

```yaml
on:
  registry_package:
    types: [published]
```

#### `Release`

{% note %}

**Hinweis:** Das Ereignis `release` wird für Entwurfsversionen nicht ausgelöst.

{% endnote %}

Führt den Workflow aus, wenn das Ereignis `release` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Releases](/rest/reference/repos#releases)."

| Nutzlast des Webhook-Ereignisses               | Aktivitätstypen                                                                                                                                                 | `GITHUB_SHA`                               | `GITHUB_REF`          |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| [`Release`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Letzter Commit in der Tag-Veröffentlichung | Veröffentlichungs-Tag |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Führen Sie einen Workflow beispielsweise aus, wenn eine Veröffentlichung veröffentlicht (`published`) wurde.

```yaml
on:
  release:
    types: [published]
```

#### `Status`

Führt den Workflow aus, wenn sich der Status eines Git-Commit ändert, wodurch das Ereignis `status` ausgelöst wird. For information about the REST API, see [Statuses](/rest/reference/repos#statuses).

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses             | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF` |
| -------------------------------------------- | --------------- | --------------------------------- | ------------ |
| [`Status`](/webhooks/event-payloads/#status) | –               | Letzter Commit im Standard-Branch | –            |

Sie können einen Workflow beispielsweise ausführen, wenn das Ereignis `status` eintritt.

```yaml
on:
  status
```

#### `beobachten`

Führt den Workflow aus, wenn das Ereignis `watch` eintritt. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Starring](/rest/reference/activity#starring)."

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                | Aktivitätstypen | `GITHUB_SHA`                      | `GITHUB_REF`    |
| ----------------------------------------------- | --------------- | --------------------------------- | --------------- |
| [`beobachten`](/webhooks/event-payloads/#watch) | - `started`     | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Sie können einen Workflow beispielsweise ausführen, wenn ein Benutzer ein Repository mit Sternen bewertet, also den Aktivitätstyp `started` ausführt, mit dem das Beobachtungsereignis ausgelöst wird.

```yaml
on:
  watch:
    types: [started]
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

{% data reusables.github-actions.branch-requirement %}

| Nutzlast des Webhook-Ereignisses                         | Aktivitätstypen                       | `GITHUB_SHA`                      | `GITHUB_REF`    |
| -------------------------------------------------------- | ------------------------------------- | --------------------------------- | --------------- |
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - `completed`<br/>- `requested` | Letzter Commit im Standard-Branch | Standard-Branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

If you need to filter branches from this event, you can use `branches` or `branches-ignore`.

In this example, a workflow is configured to run after the separate "Run Tests" workflow completes.

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

To run a workflow job conditionally based on the result of the previous workflow run, you can use the [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) or [`jobs.<job_id>.steps[*].if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) conditional combined with the `conclusion` of the previous run. Ein Beispiel:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      ...
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      ...
```

### Neue Workflows mit einem persönlichen Zugangs-Token auslösen

{% data reusables.github-actions.actions-do-not-trigger-workflows %} weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)“.

Wenn Du einen Workflow aus einem Workflow-Lauf auslösen möchtest, kannst Du das Ereignis mithilfe eines persönlichen Zugangs-Tokens auslösen. Du musst einen persönlichen Zugangs-Token erstellen und ihn als Geheimnis speichern. Um Dein Nutzungskosten für {% data variables.product.prodname_actions %} zu minimieren, pass auf, dass Du keine rekursiven oder unbeabsichtigten Workflow-Läufe erzeugst. For more information on storing a personal access token as a secret, see "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."
