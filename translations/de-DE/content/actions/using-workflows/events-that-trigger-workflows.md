---
title: Ereignisse zum Auslösen von Workflows
intro: 'Du kannst deine Workflows so konfigurieren, dass sie ausgeführt werden, wenn eine bestimmte Aktivität auf {% data variables.product.product_name %} stattfindet oder ein Ereignis außerhalb von {% data variables.product.product_name %} eintritt.'
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
ms.openlocfilehash: 74fe579db353607b449106b41e9787cf055fd643
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147645665'
---
## Informationen zu Ereignissen, die Workflows auslösen

Workflowtrigger sind Ereignisse, die dazu führen, dass ein Workflow ausgeführt wird. Weitere Informationen zur Verwendung von Workflowtriggern findest du unter [Auslösen eines Workflows](/actions/using-workflows/triggering-a-workflow).

## Verfügbare Ereignisse

Einige Ereignisse weisen mehrere Aktivitätstypen auf. Für diese Ereignisse kannst du angeben, welche Aktivitätstypen eine Workflowausführung auslösen. Weitere Informationen dazu, was jeder Aktivitätstyp bedeutet, findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhook-events-and-payloads). Beachte, dass nicht alle Webhook-Ereignisse Workflows auslösen.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn Regeln für den Schutz von Branches im Workflow-Repository geändert werden. Weitere Informationen zu Regeln für den Schutz von Branches findest du unter [Informationen zu geschützten Branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches). Informationen zu den APIs für Regeln für den Schutz von Branches findest du unter [BranchProtectionRule](/graphql/reference/objects#branchprotectionrule) in der GraphQL-API-Dokumentation oder [Branches](/rest/reference/branches) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn eine Regel für den Schutz von Branches erstellt (`created`) oder gelöscht (`deleted`) wurde:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn Aktivitäten im Zusammenhang mit einer Überprüfungsausführung auftreten. Eine Überprüfungsausführung ist ein einzelner Test, der Teil einer Überprüfungssammlung ist. Weitere Informationen findest du unter[Erste Schritte mit der Überprüfungs-API](/rest/guides/getting-started-with-the-checks-api). Informationen zu den APIs für die Ausführung von Überprüfungen findest du unter [CheckRun](/graphql/reference/objects#checkrun) in der GraphQL-API-Dokumentation oder [Überprüfungen](/rest/reference/checks#runs) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn eine Überprüfung erneut angefordert (`rerequested`) oder abgeschlossen (`completed`) wurde.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite). Obwohl nur der Aktivitätstyp `started` unterstützt wird, bleibt dein Workflow durch Angabe des Aktivitätstyps spezifisch, wenn zukünftig weitere Aktivitätstypen hinzugefügt werden. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis:** Damit rekursive Workflows verhindert werden, löst dieses Ereignis keine Workflows aus, wenn die Überprüfungssammlung von {% data variables.product.prodname_actions %} erstellt wurde.

{% endnote %}

Führt deinen Workflow aus, wenn eine Überprüfungssammlungsaktivität stattfindet. Eine Überprüfungssammlung ist eine Sammlung von Überprüfungsausführungen, die für einen bestimmten Commit erstellt wurde. Überprüfungssammlungen fassen den Status und das Ergebnis der Überprüfungsausführungen zusammen, die in der Sammlung enthalten sind. Weitere Informationen findest du unter[Erste Schritte mit der Überprüfungs-API](/rest/guides/getting-started-with-the-checks-api). Informationen zu den APIs für Überprüfungssammlungen findest du unter [CheckSuite](/graphql/reference/objects#checksuite) in der GraphQL-API-Dokumentation oder [Überprüfungen](/rest/reference/checks#suites) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn eine Überprüfung abgeschlossen (`completed`) wurde.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | Nicht zutreffend | Letzter Commit im erstellten Branch oder Tag | Erstellter Branch oder Tag |

{% note %}

**Hinweis**: Ein Ereignis wird nicht erstellt, wenn du mehr als drei Tags gleichzeitig erstellst.

{% endnote %}

Führt deinen Workflow aus, wenn ein Git-Verweis (Git-Verzweigung oder -Tag) im Repository des Workflows erstellt wird. Informationen zu den APIs zum Erstellen eines Git-Verweises findest du unter [createRef](/graphql/reference/mutations#createref) in der GraphQL-API-Dokumentation oder [Erstellen eines Verweises](/rest/reference/git#create-a-reference) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `create` eintritt.

```yaml
on:
  create
```

### `delete`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | – | Letzter Commit an Standard-Branch | Standard-Branch |

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis**: Ein Ereignis wird nicht erstellt, wenn du mehr als drei Tags gleichzeitig löschst.

{% endnote %}

Führt deinen Workflow aus, wenn ein Git-Verweis (Git-Verzweigung oder -Tag) im Repository des Workflows gelöscht wird. Informationen zu den APIs zum Löschen eines Git-Verweises findest du unter [deleteRef](/graphql/reference/mutations#deleteref) in der GraphQL-API-Dokumentation oder [Löschen eines Verweises](/rest/reference/git#delete-a-reference) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `delete` eintritt.

```yaml
on:
  delete
```

### `deployment`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | – | Bereitzustellender Commit | Bereitzustellender Branch oder bereitzustellendes Tag (leer, wenn mit einem Commit-SHA erstellt)|

Führt deinen Workflow aus, wenn eine Bereitstellung im Repository des Workflows erstellt wird. Bereitstellungen, die mit einem Commit-SHA erstellt wurden, verfügen möglicherweise nicht über einen Git-Verweis. Informationen zu den APIs zum Erstellen einer Bereitstellung findest du unter [createDeployment](/graphql/reference/mutations#createdeployment) in der GraphQL-API-Dokumentation oder [Bereitstellungen](/rest/reference/repos#deployments) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `deployment` eintritt.

```yaml
on:
  deployment
```

### `deployment_status`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | – | Bereitzustellender Commit | Bereitzustellender Branch oder Tag (leer bei Commit)|

{% note %}

**Hinweis:** Wenn der Zustand eines Bereitstellungsstatus auf `inactive` festgelegt ist, wird keine Workflowausführung ausgelöst.

{% endnote %}

Führt deinen Workflow aus, wenn ein Drittanbieter einen Bereitstellungsstatus bereitstellt. Bereitstellungen, die mit einem Commit-SHA erstellt wurden, verfügen möglicherweise nicht über einen Git-Verweis. Informationen zu den APIs zum Erstellen eines Bereitstellungsstatus findest du unter [createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus) in der GraphQL-API-Dokumentation oder [Erstellen eines Bereitstellungsstatus](/rest/reference/deployments#create-a-deployment-status) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `deployment_status` eintritt.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Führt deinen Workflow aus, wenn eine Diskussion im Repository des Workflows erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit Kommentaren zu einer Diskussion das Ereignis [`discussion_comment`](#discussion_comment). Weitere Informationen zu Diskussionen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions). Informationen zur GraphQL-API findest du unter [Diskussion](/graphql/reference/objects#discussion).

Du kannst beispielsweise einen Workflow ausführen, wenn eine Diskussion erstellt (`created`), bearbeitet (`edited`) oder beantwortet (`answered`) wurde.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Führt deinen Workflow aus, wenn ein Kommentar zu einer Diskussion im Repository des Workflows erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit einer Diskussion im Gegensatz zu Kommentaren zu der Diskussion das Ereignis [`discussion`](#discussion). Weitere Informationen zu Diskussionen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions). Informationen zur GraphQL-API findest du unter [Diskussion](/graphql/reference/objects#discussion).

Du kannst beispielsweise einen Workflow ausführen, wenn ein Kommentar zu einer Diskussion erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | – | Letzter Commit an Standard-Branch |  Standard-Branch |

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn jemand ein Repository forkt. Informationen zur REST-API findest du unter [Erstellen eines Forks](/rest/reference/repos#create-a-fork).

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `fork` eintritt.

```yaml
on:
  fork
```

### `gollum`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | – | Letzter Commit an Standard-Branch |  Standard-Branch |

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn jemand eine Wiki-Seite erstellt oder aktualisiert. Weitere Informationen findest du unter [Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis).

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `gollum` eintritt.

```yaml
on:
  gollum
```

### `issue_comment`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn ein Issue oder ein Pull-Request-Kommentar erstellt, bearbeitet oder gelöscht wird. Informationen zu den Issue-Kommentar-APIs findest du unter [IssueComment](/graphql/reference/objects#issuecomment) in der GraphQL-API-Dokumentation oder [Issue-Kommentare](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn ein Issue oder ein Pull-Request-Kommentar erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` nur bei Issues oder nur bei Pull Requests

Das Ereignis `issue_comment` tritt für Kommentare zu Issues und Pull Requests auf. Du kannst die Eigenschaft `github.event.issue.pull_request` in einer Bedingung verwenden, um je nachdem, ob das auslösende Objekt ein Issue oder ein Pull Request war, unterschiedliche Aktionen auszuführen.

Dieser Workflow führt z. B. den Auftrag `pr_commented` nur aus, wenn das Ereignis `issue_comment` aus einem Pull Request stammt. Der Auftrag `issue_commented` wird nur ausgeführt, wenn das Ereignis `issue_comment` aus einem Issue stammt.

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn ein Issue im Repository des Workflows erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit Issues in einem Problem das Ereignis [`issue_comment`](#issue_comment). Weitere Informationen zu Issues findest du unter [Informationen zu Issues](/issues/tracking-your-work-with-issues/about-issues). Informationen zu den Issue-APIs findest du unter [Issue](/graphql/reference/objects#issue) in der GraphQL-API-Dokumentation oder [Issues](/rest/reference/issues) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn ein Issue geöffnet (`opened`), bearbeitet (`edited`) oder dafür ein Meilenstein erstellt wurde (`milestoned`).

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn eine Bezeichnung im Repository des Workflows erstellt oder geändert wird. Weitere Informationen zu Bezeichnungen findest du unter [Verwalten von Bezeichnungen](/issues/using-labels-and-milestones-to-track-work/managing-labels). Informationen zu den Bezeichnungs-APIs findest du unter [Label](/graphql/reference/objects#label) in der GraphQL-API-Dokumentation oder [Bezeichnungen](/rest/reference/issues#labels) in der REST-API-Dokumentation.

Wenn du deinen Workflow ausführen möchtest, wenn eine Bezeichnung zu einem Issue, einem Pull Request oder einer Diskussion hinzugefügt oder davon entfernt wird, verwende stattdessen den Aktivitätstyp `labeled` oder `unlabeled` für die Ereignisse [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) oder [`discussion`](#discussion).

Du kannst z. B. einen Workflow ausführen, wenn eine Bezeichnung erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | SHA der Mergegruppe | Ref der Mergegruppe |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Obwohl nur der Aktivitätstyp `checks_requested` unterstützt wird, bleibt dein Workflow durch Angabe des Aktivitätstyps spezifisch, wenn zukünftig weitere Aktivitätstypen hinzugefügt werden. Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Führt deinen Workflow aus, wenn einer Mergewarteschlange ein Pull Request hinzugefügt wird, die den Pull Request wiederum einer Mergegruppe hinzufügt. Weitere Informationen findest du unter [Zusammenführen eines Pull Requests mit einer Mergewarteschlange](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue).

Du kannst beispielsweise einen Workflow ausführen, wenn die Aktivität `checks_requested` eingetreten ist.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn ein Meilenstein im Repository des Workflows erstellt oder geändert wird. Weitere Informationen zu Meilensteinen findest du unter [Informationen zu Meilensteinen](/issues/using-labels-and-milestones-to-track-work/about-milestones). Informationen zu den Meilenstein-APIs findest du unter [Milestone](/graphql/reference/objects#milestone) in der GraphQL-API-Dokumentation oder [Meilensteine](/rest/reference/issues#milestones) in der REST-API-Dokumentation.

Wenn du deinen Workflow ausführen möchtest, wenn ein Issue einem Meilenstein hinzugefügt oder von ihm entfernt wird, verwende stattdessen den Aktivitätstyp `milestoned` oder `demilestoned` für das Ereignis [`issues`](#issues).

Du kannst z. B. einen Workflow ausführen, wenn ein Meilenstein geöffnet (`opened`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | – | Letzter Commit an Standard-Branch | – |

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn eine Person an einen Branch pusht, der die Veröffentlichungsquelle für {% data variables.product.prodname_pages %} ist, wenn {% data variables.product.prodname_pages %} für das Repository aktiviert sind. Weitere Informationen zu {% data variables.product.prodname_pages %}-Veröffentlichungsquellen findest du unter [Konfigurieren einer Veröffentlichungsquelle für deine GitHub Pages-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Informationen zur REST-API findest du unter [Seiten](/rest/reference/repos#pages).

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `page_build` eintritt.

```yaml
on:
  page_build
```

### `project`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Der Aktivitätstyp `edited` bezieht sich auf den Zeitpunkt, an dem ein Projektboard, nicht eine Spalte oder Karte im Projektboard, bearbeitet wird. Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis**: Dieses Ereignis tritt nur für Projekte auf, die im Besitz des Repositorys des Workflows sind, nicht für organisationseigene oder benutzereigene Projekte oder für Projekte im Besitz eines anderen Repositorys.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Hinweis**: Dieses Ereignis tritt nur für {% data variables.product.prodname_projects_v1 %} ein.

{% endnote %} {% endif %}

Führt den Workflow aus, wenn ein Projektboard erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit Karten oder Spalten in einem Projektboard stattdessen die Ereignisse [`project_card`](#project_card) oder [`project_column`](#project_column). Weitere Informationen zu Projektboards findest du unter [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Informationen zu den Projektboard-APIs findest du unter [Project](/graphql/reference/objects#project) in der GraphQL-API-Dokumentation oder [Projekte](/rest/reference/projects) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn ein Projekt erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` in ein Issue<br/>- `edited`<br/>- `deleted` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis**: Dieses Ereignis tritt nur für Projekte auf, die im Besitz des Repositorys des Workflows sind, nicht für organisationseigene oder benutzereigene Projekte oder für Projekte im Besitz eines anderen Repositorys.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Hinweis**: Dieses Ereignis tritt nur für {% data variables.product.prodname_projects_v1 %} ein.

{% endnote %} {% endif %}

Führt deinen Workflow aus, wenn eine Karte auf einem Projektboard erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit Projektboards oder Spalten in einem Projektboard stattdessen das Ereignis [`project`](#project) oder [`project_column`](#project_column). Weitere Informationen zu Projektboards findest du unter [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Informationen zu den Projektkarten-APIs findest du unter [ProjectCard](/graphql/reference/objects#projectcard) in der GraphQL-API-Dokumentation oder [Projektkarten](/rest/reference/projects#cards) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn eine Projektkarte erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis**: Dieses Ereignis tritt nur für Projekte auf, die im Besitz des Repositorys des Workflows sind, nicht für organisationseigene oder benutzereigene Projekte oder für Projekte im Besitz eines anderen Repositorys.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Hinweis**: Dieses Ereignis tritt nur für {% data variables.product.prodname_projects_v1 %} ein.

{% endnote %} {% endif %}

Führt deinen Workflow aus, wenn eine Spalte auf einem Projektboard erstellt oder geändert wird. Verwende für Aktivitäten im Zusammenhang mit Projektboards oder Karten in einem Projektboard stattdessen das Ereignis [`project`](#project) oder [`project_card`](#project_card). Weitere Informationen zu Projektboards findest du unter [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards). Informationen zu den Projektspalten-APIs findest du unter [ProjectColumn](/graphql/reference/objects#projectcolumn) in der GraphQL-API-Dokumentation oder [Projektspalten](/rest/reference/projects#columns) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn eine Projektspalte erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | – | Letzter Commit an Standard-Branch |  Standard-Branch |

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn sich das Repository deines Workflows von privat in öffentlich ändert. Informationen zur REST-API findest du unter [Bearbeiten von Repositorys](/rest/reference/repos#edit).

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `public` eintritt.

```yaml
on:
  public
```

### `pull_request`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Mergebranch `refs/pull/:prNumber/merge` |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request). Standardmäßig wird ein Workflow nur ausgeführt, wenn der Aktivitätstyp eines `pull_request`-Ereignisses `opened`, `synchronize` oder `reopened` ist. Verwende das Schlüsselwort `types`, um Workflows durch verschiedene Aktivitätstypen auszulösen. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes).

{% endnote %}

{% note %}

**Hinweis:** Workflows werden nicht für `pull_request`-Aktivitäten ausgeführt, wenn der Pull Request einen Mergekonflikt aufweist. Der Mergekonflikt muss zuerst behoben werden.

Umgekehrt werden Workflows mit dem Ereignis `pull_request_target` ausgeführt, auch wenn der Pull Request einen Mergekonflikt aufweist. Bevor du den Trigger `pull_request_target` verwendest, solltest du dich der Sicherheitsrisiken bewusst sein. Weitere Informationen findest du unter [`pull_request_target`](#pull_request_target).

{% endnote %}

Führt deinen Workflow aus, wenn Aktivitäten für einen Pull Request im Repository des Workflows stattfinden. Wenn beispielsweise keine Aktivitätstypen angegeben werden, wird der Workflow ausgeführt, wenn ein Pull Request geöffnet oder erneut geöffnet wird oder wenn der Headbranch des Pull Requests aktualisiert wird. Verwende für Aktivitäten im Zusammenhang mit Pull-Request-Überprüfungen, Pull-Request-Überprüfungskommentaren oder Pull-Request-Kommentaren stattdessen die Ereignisse [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) oder [`issue_comment`](#issue_comment). Informationen zu den Pull-Request-APIs findest du unter [PullRequest](/graphql/reference/objects#pullrequest) in der GraphQL-API-Dokumentation oder [Pull Requests](/rest/reference/pulls) in der REST-API-Dokumentation.

Beachte, dass `GITHUB_SHA` für dieses Ereignis der letzte Merge-Commit des Pull-Request-Mergebranch ist. Wenn du die Commit-ID für den letzten Commit auf den Headbranch des Pull Requests abrufen möchtest, verwende stattdessen `github.event.pull_request.head.sha`.

Du kannst beispielsweise einen Workflow ausführen, wenn ein Pull Request geöffnet oder erneut geöffnet wurde.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Du kannst den Ereigniskontext verwenden, um die Ausführung von Aufträgen in deinem Workflow weiter zu steuern. Dieser Workflow wird beispielsweise ausgeführt, wenn eine Überprüfung für einen Pull Request angefordert wird, der Auftrag `specific_review_requested` jedoch nur ausgeführt wird, wenn eine Überprüfung von `octo-team` angefordert wird.

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

#### Ausführen des Workflows basierend auf dem Head- oder Basisbranch eines Pull Requests

Du kannst den Workflow mithilfe des Filters `branches` oder `branches-ignore` so konfigurieren, dass er nur für Pull Requests ausgeführt wird, die auf bestimmte Branches abzielen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore).

Dieser Workflow wird beispielsweise ausgeführt, wenn jemand einen Pull Request öffnet, der auf einen Branch abzielt, dessen Name mit `releases/` beginnt:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Pull Request, der eine Änderung einer JavaScript-Datei (`.js`) enthält, für einen Branch geöffnet wird, dessen Name mit `releases/` beginnt:

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

Zur Ausführung eines Auftrags basierend auf dem Headbranchnamen des Pull Requests (im Gegensatz zum Basisbranchnamen des Pull Requests) verwende den `github.head_ref`-Kontext in einer Bedingung. Dieser Workflow wird beispielsweise ausgeführt, wenn ein Pull Request geöffnet wird, aber der Auftrag `run_if` wird nur ausgeführt, wenn der Kopfteil des Pull Requests ein Branch ist, dessen Name mit `releases/` beginnt:

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

#### Ausführen deines Workflows basierend auf Dateien, die in einem Pull Request geändert wurden

Du kannst deinen Workflow auch so konfigurieren, dass er ausgeführt wird, wenn ein Pull Request bestimmte Dateien ändert. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Dieser Workflow wird beispielsweise ausgeführt, wenn ein Pull Request eine Änderung an einer JavaScript-Datei (`.js`) enthält:

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Pull Request, der eine Änderung einer JavaScript-Datei (`.js`) enthält, für einen Branch geöffnet wird, dessen Name mit `releases/` beginnt:

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

#### Ausführen des Workflows beim Zusammenführen eines Pull Requests

Beim Zusammenführen eines Pull Requests wird der Pull Request automatisch geschlossen. Zur Ausführung eines Workflows beim Zusammenführen eines Pull Requests verwendest du den Ereignistyp `pull_request` `closed` zusammen mit einer Bedingung, die den `merged`-Wert des Ereignisses überprüft. Der folgende Workflow wird beispielsweise ausgeführt, wenn ein Pull Request geschlossen wird. Der Auftrag `if_merged` wird nur ausgeführt, wenn der Pull Request auch zusammengeführt wurde.

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

### `pull_request_comment` (`issue_comment` verwenden)

Verwende das Ereignis [`issue_comment`](#issue_comment), um den Workflow auszuführen, wenn ein Kommentar zu einem Pull Request (nicht zu einem Pull-Request-Diff) erstellt, bearbeitet oder gelöscht wird. Verwende für Aktivitäten im Zusammenhang mit Pull-Request-Überprüfungen oder Pull-Request-Überprüfungskommentaren die Ereignisse [`pull_request_review`](#pull_request_review) oder [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Mergebranch `refs/pull/:prNumber/merge` |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Führt deinen Workflow aus, wenn eine Pull-Request-Überprüfung übermittelt, bearbeitet oder geschlossen wird. Eine Pull-Request-Überprüfung ist eine Gruppe von Pull-Request-Überprüfungskommentaren zusätzlich zu einem Textkörperkommentar und einem Zustand. Verwende für Aktivitäten im Zusammenhang mit Pull-Request-Überprüfungskommentaren oder Pull-Request-Kommentaren stattdessen die Ereignisse [`pull_request_review_comment`](#pull_request_review_comment) oder [`issue_comment`](#issue_comment). Informationen zu den Pull-Request-Überprüfungs-APIs findest du unter [PullRequestReview](/graphql/reference/objects#pullrequest) in der GraphQL-API-Dokumentation oder [Pull-Request-Überprüfungen](/rest/reference/pulls#reviews) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn ein Pull Request bearbeitet (`edited`) oder geschlossen (`dismissed`) wurde.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Ausführen eines Workflows, wenn ein Pull Request genehmigt wurde

Für die Ausführung deines Workflows, wenn ein Pull Request genehmigt wurde, kannst du deinen Workflow mit dem Typ `submitted` des Ereignisses `pull_request_review` auslösen und dann den Überprüfungsstatus mit der `github.event.review.state`-Eigenschaft überprüfen. Dieser Workflow wird beispielsweise ausgeführt, wenn eine Pull-Request-Überprüfung übermittelt wird, der `approved`-Auftrag jedoch nur ausgeführt wird, wenn die übermittelte Überprüfung eine Genehmigungsüberprüfung ist:

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Letzter Merge-Commit im Branch `GITHUB_REF` | PR-Mergebranch `refs/pull/:prNumber/merge` |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Führt deinen Workflow aus, wenn ein Pull-Request-Überprüfungskommentar geändert wird. Ein Pull-Request-Überprüfungskommentar ist ein Kommentar zu einem Pull-Request-Diff. Verwende für Aktivitäten im Zusammenhang mit Pull-Request-Überprüfungen oder Pull-Request-Kommentaren stattdessen die Ereignisse [`pull_request_review`](#pull_request_review) oder [`issue_comment`](#issue_comment). Informationen zu den Pull-Request-Überprüfungskommentar-APIs findest du unter [PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment) in der GraphQL-API-Dokumentation oder [Überprüfungskommentare](/rest/reference/pulls#comments) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn ein Pull-Request-Überprüfungskommentar erstellt (`created`) oder gelöscht (`deleted`) wurde.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Letzter Commit für den PR-Basisbranch | PR-Basisbranch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target). Standardmäßig wird ein Workflow nur ausgeführt, wenn der Aktivitätstyp eines `pull_request_target`-Ereignisses `opened`, `synchronize` oder `reopened` ist. Verwende das Schlüsselwort `types`, um Workflows durch verschiedene Aktivitätstypen auszulösen. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes).

{% endnote %}

Führt deinen Workflow aus, wenn Aktivitäten für einen Pull Request im Repository des Workflows stattfinden. Wenn beispielsweise keine Aktivitätstypen angegeben werden, wird der Workflow ausgeführt, wenn ein Pull Request geöffnet oder erneut geöffnet wird oder wenn der Headbranch des Pull Requests aktualisiert wird.

Dieses Ereignis wird im Kontext der Basis des Pull Requests ausgeführt, anstatt im Kontext des Merge-Commits, wie dies beim `pull_request`-Ereignis der Fall ist. Dadurch wird verhindert, dass unsicherer Code vom Kopfteil des Pull Requests ausgeführt wird, der dein Repository ändern oder Geheimnisse stehlen könnte, die du in deinem Workflow verwendest. Dieses Ereignis ermöglicht es deinem Workflow, Aufgaben wie das Kennzeichnen oder Kommentieren von Pull Requests von Forks auszuführen. Vermeide die Verwendung dieses Ereignisses, wenn du Code aus dem Pull Request erstellen oder ausführen musst.

Um die Repositorysicherheit sicherzustellen, lösen Branches mit Namen, die bestimmten Mustern entsprechen (z. B. solche, die SHAs ähneln), möglicherweise keine Workflows mit dem `pull_request_target`-Ereignis aus.

{% warning %}

**Warnung:** Für Workflows, die vom Ereignis `pull_request_target` ausgelöst werden, wird `GITHUB_TOKEN` die Berechtigung zum Lesen/Schreiben des Repositorys gewährt, es sei denn, der Schlüssel `permissions` wird angegeben, und der Workflow kann auf Geheimnisse zugreifen, auch wenn er von einer Kopie ausgelöst wird. Obwohl der Workflow im Kontext der Basis des Pull Requests ausgeführt wird, solltest du sicherstellen, dass du mit diesem Ereignis keinen nicht vertrauenswürdigen Code aus dem Pull Request auscheckst, erstellst oder ausführst. Darüber hinaus teilen alle Caches denselben Bereich wie der Basisbranch. Damit Cachepoisoning verhindert wird, solltest du den Cache nicht speichern, wenn die Möglichkeit besteht, dass der Cacheinhalt geändert wurde. Weitere Informationen findest du unter [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) auf der GitHub Security Lab-Website.

{% endwarning %}

Du kannst beispielsweise einen Workflow ausführen, wenn ein Pull Request zugewiesen (`assigned`), geöffnet (`opened`), synchronisiert (`synchronize`) oder erneut geöffnet (`reopened`) wurde.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Ausführen des Workflows basierend auf dem Head- oder Basisbranch eines Pull Requests

Du kannst den Workflow mithilfe des Filters `branches` oder `branches-ignore` so konfigurieren, dass er nur für Pull Requests ausgeführt wird, die auf bestimmte Branches abzielen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore).

Dieser Workflow wird beispielsweise ausgeführt, wenn jemand einen Pull Request öffnet, der auf einen Branch abzielt, dessen Name mit `releases/` beginnt:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Pull Request, der eine Änderung einer JavaScript-Datei (`.js`) enthält, für einen Branch geöffnet wird, dessen Name mit `releases/` beginnt:

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

Zur Ausführung eines Auftrags basierend auf dem Headbranchnamen des Pull Requests (im Gegensatz zum Basisbranchnamen des Pull Requests) verwende den `github.head_ref`-Kontext in einer Bedingung. Dieser Workflow wird beispielsweise ausgeführt, wenn ein Pull Request geöffnet wird, aber der Auftrag `run_if` wird nur ausgeführt, wenn der Kopfteil des Pull Requests ein Branch ist, dessen Name mit `releases/` beginnt:

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

#### Ausführen deines Workflows basierend auf Dateien, die in einem Pull Request geändert wurden

Du kannst den Filter `paths` oder `paths-ignore` verwenden, um deinen Workflow so zu konfigurieren, dass er ausgeführt wird, wenn ein Pull Request bestimmte Dateien ändert. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Dieser Workflow wird beispielsweise ausgeführt, wenn ein Pull Request eine Änderung an einer JavaScript-Datei (`.js`) enthält:

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Pull Request, der eine Änderung einer JavaScript-Datei (`.js`) enthält, für einen Branch geöffnet wird, dessen Name mit `releases/` beginnt:

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

#### Ausführen des Workflows beim Zusammenführen eines Pull Requests

Beim Zusammenführen eines Pull Requests wird der Pull Request automatisch geschlossen. Zur Ausführung eines Workflows beim Zusammenführen eines Pull Requests verwendest du den Ereignistyp `pull_request_target` `closed` zusammen mit einer Bedingung, die den `merged`-Wert des Ereignisses überprüft. Der folgende Workflow wird beispielsweise ausgeführt, wenn ein Pull Request geschlossen wird. Der Auftrag `if_merged` wird nur ausgeführt, wenn der Pull Request auch zusammengeführt wurde.

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | Nicht zutreffend | Wenn du einen Branch löschst, wird der SHA in der Workflowausführung (einschließlich der zugehörigen Refs) auf den Standardbranch des Repositorys zurückgesetzt. | Aktualisierter Ref |

{% note %}

**Hinweis:** Die für GitHub Actions verfügbare Webhook-Nutzlast umfasst nicht die Attribute `added`, `removed` und `modified` im `commit`-Objekt. Du kannst das vollständige Commitobjekt mithilfe der API abrufen. Informationen findest du unter [Commit](/graphql/reference/objects#commit) in der GraphQL-API-Dokumentation oder [Abrufen eines Commits](/rest/reference/commits#get-a-commit) in der REST-API-Dokumentation.

{% endnote %}

{% note %}

**Hinweis**: Ein Ereignis wird nicht erstellt, wenn du mehr als drei Tags gleichzeitig pushst.

{% endnote %}

Führt deinen Workflow aus, wenn du einen Commit oder Tag pushst.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `push` eintritt.

```yaml
on:
  push
```

{% note %}

**Hinweis**: Wenn ein `push`-Webhookereignis eine Workflowausführung auslöst, zeigt das Feld „Push durch“ der Benutzeroberfläche von GitHub Actions das Konto des Pushers und nicht den Autor oder Committer an. Wenn die Änderungen jedoch mit einer SSH-Authentifizierung mit einem Bereitstellungsschlüssel an ein Repository gepusht werden, entspricht das Feld „Push durch“ dem bzw. der Repositoryadministrator*in, der bzw. die den Bereitstellungsschlüssel überprüft hat, als dieser einem Repository hinzugefügt wurde.

{% endnote %}

#### Ausführen des Workflows nur, wenn ein Push an bestimmte Branches stattfindet

Du kannst den Workflow mithilfe des Filters `branches` oder `branches-ignore` so konfigurieren, dass er nur ausgeführt wird, wenn bestimmte Branches gepusht werden. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore).

Dieser Workflow wird z. B. ausgeführt, wenn ein Push an `main` oder an einen Branch stattfindet, der mit `releases/` beginnt.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Push, der eine Änderung einer JavaScript-Datei (`.js`) enthält, an einen Branch stattfindet, dessen Name mit `releases/` beginnt:

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Ausführen des Workflows nur dann, wenn ein Push von bestimmten Tags stattfindet

Du kannst den Workflow mithilfe des Filters `tags` oder `tags-ignore` so konfigurieren, dass er nur ausgeführt wird, wenn bestimmte Tags gepusht werden. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore).

Dieser Workflow wird z. B. ausgeführt, wenn ein Tag gepusht wird, das mit `v1.` beginnt.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### Ausführen deines Workflows nur dann, wenn ein Push bestimmte Dateien betrifft

Du kannst den Filter `paths` oder `paths-ignore` verwenden, um deinen Workflow so konfigurieren, dass er ausgeführt wird, wenn ein Push an bestimmte Dateien stattfindet. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

Dieser Workflow wird beispielsweise ausgeführt, wenn eine Änderung an eine JavaScript-Datei (`.js`) gepusht wird:

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Hinweis:** {% data reusables.actions.branch-paths-filter %} Der folgende Workflow wird beispielsweise nur ausgeführt, wenn ein Push, der eine Änderung einer JavaScript-Datei (`.js`) enthält, an einen Branch stattfindet, dessen Name mit `releases/` beginnt:

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Commit des veröffentlichten Pakets | Branch oder Tag des veröffentlichten Pakets |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn Aktivitäten im Zusammenhang mit {% data variables.product.prodname_registry %} in deinem Repository stattfinden. Weitere Informationen findest du in der [{% data variables.product.prodname_registry %}-Dokumentation](/packages).

Du kannst z. B. einen Workflow ausführen, wenn eine neue Paketversion veröffentlicht (`published`) wurde.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Letzter Commit in dem bezeichneten Release | Tag-Ref des Release `refs/tags/<tag_name>` |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Hinweis:** Workflows werden für die Aktivitätstypen `created`, `edited` oder `deleted` für Release-Entwürfe nicht ausgelöst. Wenn du dein Release über die {% data variables.product.product_name %}-Browser-UI erstellst, wird es möglicherweise automatisch als Entwurf gespeichert.

{% endnote %}

{% note %}

**Hinweis:** Der Typ `prereleased` löst nicht für Vorab-Releases aus, die aus Release-Entwürfen veröffentlicht wurden, aber der `published`-Typ löst aus. Wenn ein Workflow ausgeführt werden soll, wenn stabile *- und*-Vorab-Releases veröffentlicht werden, abonniere `published` anstelle von `released` und `prereleased`.

{% endnote %}

Führt deinen Workflow aus, wenn die Freigabeaktivität in deinem Repository stattfindet. Informationen zu den Release-APIs findest du unter [Release](/graphql/reference/objects#release) in der GraphQL-API-Dokumentation oder [Releases](/rest/reference/releases) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn ein Release veröffentlicht (`published`) wurde.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Benutzerdefiniert | Letzter Commit an Standard-Branch | Standard-Branch |

{% data reusables.actions.branch-requirement %}

Du kannst die {% data variables.product.product_name %}-API verwenden, um ein Webhook-Ereignis namens [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) auszulösen, wenn du einen Workflow für Aktivitäten auslösen möchtest, die außerhalb von {% data variables.product.product_name %} stattfinden. Weitere Informationen findest du unter [Erstellen eines Repository-Versandereignisses](/rest/reference/repos#create-a-repository-dispatch-event).

Wenn du eine Anforderung zum Erstellen eines `repository_dispatch`-Ereignisses vornimmst, musst du einen `event_type` angeben, um den Aktivitätstyp zu beschreiben. Standardmäßig lösen alle `repository_dispatch`-Aktivitätstypen die Ausführung eines Workflows aus. Du kannst das Schlüsselwort `types` verwenden, damit der Workflow nur ausgeführt wird, wenn ein bestimmter `event_type`-Wert in der Webhook-Nutzlast `repository_dispatch` gesendet wird.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Hinweis:** Der `event_type`-Wert ist auf 100 Zeichen beschränkt.

{% endnote %}

Alle Daten, die du über den Parameter `client_payload` sendest, stehen im `github.event`-Kontext in deinem Workflow zur Verfügung. Wenn du beispielsweise diesen Anforderungstext sendest, wenn du ein Repository-Versandereignis erstellst:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

kannst du auf die Nutzlast in einem Workflow wie folgt zugreifen:

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| – | – | Letzter Commit an Standard-Branch | Standard-Branch | Zeitpunkt, zu dem der geplante Workflow ausgeführt werden soll. Ein geplanter Workflow verwendet [POSIX-Cronsyntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Weitere Informationen findest du unter [Auslösen eines Workflows mit Ereignissen](/articles/configuring-a-workflow/#triggering-a-workflow-with-events). |

{% data reusables.actions.schedule-delay %}

Mit dem `schedule`-Ereignis kannst du einen Workflow zu einem geplanten Zeitpunkt auslösen.

{% data reusables.repositories.actions-scheduled-workflow-example %}

Die Cron-Syntax umfasst fünf durch Leerzeichen getrennte Felder, die jeweils eine Zeiteinheit darstellen.

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

In den fünf Feldern stehen die folgenden Operatoren zur Auswahl:

| Operator | BESCHREIBUNG | Beispiel |
| -------- | ----------- | ------- |
| * | Beliebiger Wert | `15 * * * *` wird jede 15. Minute jeder Stunde jedes Tages ausgeführt. |
| , | Trennzeichen in Werteliste | `2,10 4,5 * * *` wird in der 2. und 10. Minute der 4. und 5. Stunde jedes Tages ausgeführt. |
| - | Wertebereich | `30 4-6 * * *` wird in der 30. Minute der 4., 5. und 6. Stunde ausgeführt. |
| / | Schrittwerte | `20/15 * * * *` wird alle 15 Minuten ab der 20. bis zur 59. Minute ausgeführt (20., 35. und 50. Minute). |

{% note %}

**Hinweis:** {% data variables.product.prodname_actions %} unterstützt nicht die nicht normgerechte Syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` und `@reboot`.

{% endnote %}

Du kannst [Crontab-Guru](https://crontab.guru/) verwenden, um deine Cronsyntax zu generieren und zu bestätigen, zu welcher Zeit sie ausgeführt wird. Als Einstiegshilfe steht eine Liste mit [Crontab-Guru-Beispielen](https://crontab.guru/examples.html) bereit.

Benachrichtigungen für geplante Workflows werden an den Benutzer gesendet, der die Cronsyntax in der Workflowdatei zuletzt geändert hat. Weitere Informationen findest du unter [Benachrichtigungen für Workflowausführungen](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs).

### `status`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | – | Letzter Commit an Standard-Branch | – |

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn sich der Status eines Git-Commits ändert. Beispielsweise können Commits als `error`, `failure`, `pending` oder `success` gekennzeichnet werden. Wenn du weitere Details zur Statusänderung angeben möchtest, solltest du das Ereignis [`check_run`](#check_run) verwenden. Informationen zu den Commitstatus-APIs findest du unter [Status](/graphql/reference/objects#statue) in der GraphQL-API-Dokumentation oder [Status](/rest/reference/commits#commit-statuses) in der REST-API-Dokumentation.

Du kannst beispielsweise einen Workflow ausführen, wenn das Ereignis `status` eintritt.

```yaml
on:
  status
```

Wenn du einen Auftrag in deinem Workflow basierend auf dem neuen Commitstatus ausführen möchtest, kannst du den `github.event.state`-Kontext verwenden. Der folgende Workflow löst z. B. aus, wenn sich ein Commitstatus ändert, aber der Auftrag `if_error_or_failure` wird nur ausgeführt, wenn der neue Commitstatus `error` oder `failure` ist.

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Obwohl nur der Aktivitätstyp `started` unterstützt wird, bleibt dein Workflow durch Angabe des Aktivitätstyps spezifisch, wenn zukünftig weitere Aktivitätstypen hinzugefügt werden. Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Führt deinen Workflow aus, wenn das Repository des Workflows markiert ist. Informationen zu den Pull-Request-APIs findest du unter [addStar](/graphql/reference/mutations#addstar) in der GraphQL-API-Dokumentation oder [Versehen mit einem Stern](/rest/reference/activity#starring) in der REST-API-Dokumentation.

Du kannst z. B. einen Workflow ausführen, wenn ein Repository mit einem Stern markiert wird, wobei es sich um den Aktivitätstyp `started` für ein Überwachungsereignis handelt.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| Identisch mit dem Aufruferworkflow | Nicht zutreffend | Identisch mit dem Aufruferworkflow | Identisch mit dem Aufruferworkflow |

`workflow_call` wird verwendet, um anzugeben, dass ein Workflow von einem anderen Workflow aufgerufen werden kann. Wenn ein Workflow mit dem `workflow_call`-Ereignis ausgelöst wird, ist die Ereignisnutzlast im aufgerufenen Workflow die gleiche Ereignisnutzlast aus dem aufrufenden Workflow. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).

Im folgenden Beispiel wird der Workflow nur ausgeführt, wenn er aus einem anderen Workflow aufgerufen wird:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | – | Letzter Commit für den `GITHUB_REF`-Branch | Branch, der den Dispatch empfangen hat |

Wenn du einen Workflow manuell auslösen möchtest, verwende das Ereignis `workflow_dispatch`. Du kannst die Ausführung eines Workflows manuell mit der {% data variables.product.product_name %}-API, {% data variables.product.prodname_cli %} oder {% data variables.product.product_name %}-Browserschnittstelle auslösen. Weitere Informationen findest du unter [Manuelles Ausführen eines Workflows](/actions/managing-workflow-runs/manually-running-a-workflow).

```yaml
on: workflow_dispatch
```

#### Bereitstellen von Eingaben

Du kannst benutzerdefinierte Eingabeeigenschaften, Standardeingabewerte und erforderliche Eingaben für das Ereignis direkt im Workflow konfigurieren. Wenn du das Ereignis auslöst, kannst du `ref` und alle `inputs` angeben. Wenn der Workflow ausgeführt wird, kannst du auf die Eingabewerte im {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}-Kontext zugreifen. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts).

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %} In diesem Beispiel werden Eingaben namens `logLevel`, `tags` und `environment` definiert. Du übergibst Werte für diese Eingaben an den Workflow, wenn du ihn ausführst. Dieser Workflow druckt die Werte dann mit den Kontexteigenschaften {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags`und `inputs.environment`{% else %}`github.event.inputs.logLevel`,`github.event.inputs.tags` und `github.event.inputs.environment`{% endif %} in das Protokoll.

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

Wenn du diesen Workflow über einen Browser ausführst, musst du Werte für die erforderlichen Eingaben manuell eingeben, bevor der Workflow ausgeführt wird.

![Eingaben für einen Workflow](/assets/images/help/images/workflow-dispatch-inputs.png)

Du kannst auch Eingaben übergeben, wenn du einen Workflow aus einem Skript ausführst oder {% data variables.product.prodname_cli %} verwendest. Beispiel:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

Weitere Informationen findest du in den {% data variables.product.prodname_cli %}-Informationen in [Manuelles Ausführen eines Workflows](/actions/managing-workflow-runs/manually-running-a-workflow).

{% else %} In diesem Beispiel werden die Eingaben `name` und `home` definiert und mit den Kontexten {% ifversion actions-unified-inputs %}`inputs.name` und `inputs.home`{% else %}`github.event.inputs.name` und `github.event.inputs.home`{% endif %} gedruckt. Wenn `home` nicht angegeben ist, wird der Standardwert „The Octoverse“ ausgegeben.

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

| Nutzlast des Webhook-Ereignisses | Aktivitätstypen | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Letzter Commit an Standard-Branch | Standard-Branch |

{% note %}

**Hinweis**: {% data reusables.developer-site.multiple_activity_types %} Der Aktivitätstyp `requested` tritt nicht ein, wenn ein Workflow erneut ausgeführt wird. Informationen zu jedem Aktivitätstyp findest du unter [Webhook-Ereignisse und Nutzlasten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run). {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Hinweis:** Du kannst `workflow_run` nicht verwenden, um eine Kette aus mehr als drei Workflowebenen zu bilden. Wenn du beispielsweise versuchst, fünf Workflows (namens `B` bis `F`) für eine sequenzielle Ausführung auszulösen, nachdem ein erster Workflow `A` ausgeführt wurde (d. h. `A` → `B` → `C` → `D` → `E` → `F`), werden die Workflows `E` und `F` nicht ausgeführt.

{% endnote %}

Dieses Ereignis tritt auf, wenn eine Workflowausführung angefordert oder abgeschlossen wird. Es ermöglicht dir, einen Workflow basierend auf der Ausführung oder Fertigstellung eines anderen Workflows auszuführen. Der vom Ereignis `workflow_run` gestartete Workflow kann auf Geheimnisse und Schreibtoken zugreifen, auch wenn der vorherige Workflow nicht dazu in der Lage war. Dies ist in Fällen nützlich, in denen der vorherige Workflow absichtlich nicht privilegiert ist, du aber eine privilegierte Aktion in einem späteren Workflow ausführen musst.

In diesem Beispiel ist ein Workflow so konfiguriert, dass er ausgeführt wird, nachdem der separate Workflow „Tests ausführen“ abgeschlossen ist.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Wenn du mehrere `workflows` für das `workflow_run`-Ereignis angibst, muss nur einer der Workflows ausgeführt werden. Ein Workflow mit dem folgenden Trigger wird beispielsweise ausgeführt, wenn der Workflow „Staging“ oder der Workflow „Lab“ abgeschlossen ist.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Ausführen eines Workflows basierend auf dem Abschluss eines anderen Workflows

Eine Workflowausführung wird unabhängig vom Abschluss des vorherigen Workflows ausgelöst. Wenn du einen Auftrag oder Schritt basierend auf dem Ergebnis des auslösenden Workflows ausführen möchtest, kannst du eine Bedingung mit der Eigenschaft `github.event.workflow_run.conclusion` verwenden. Dieser Workflow wird beispielsweise ausgeführt, wenn ein Workflow mit dem Namen „Build“ abgeschlossen ist, aber der Auftrag `on-success` wird nur ausgeführt, wenn der Workflow „Build“ erfolgreich war, und der Auftrag `on-failure` wird nur ausgeführt, wenn der Workflow „Build“ fehlgeschlagen ist:

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

#### Einschränken der Ausführung deines Workflows basierend auf Branches

Mit dem Filter `branches` oder `branches-ignore` kannst du angeben, in welchen Branches der auslösende Workflow ausgeführt werden muss, um deinen Workflow auszulösen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore). Beispielsweise wird ein Workflow mit dem folgenden Trigger nur ausgeführt, wenn der Workflow namens `Build` in einem Branch namens `canary` ausgeführt wird.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Verwenden von Daten aus dem auslösenden Workflow

Du kannst auf die [`workflow_run`-Ereignisnutzlast](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) zugreifen, die dem Workflow entspricht, der deinen Workflow ausgelöst hat. Wenn dein auslösender Workflow beispielsweise Artefakte generiert, kann ein mit dem Ereignis `workflow_run` ausgelöster Workflow auf diese Artefakte zugreifen.

Der folgende Workflow lädt Daten als Artefakte hoch. (In diesem vereinfachten Beispiel sind die Daten die Pull-Request-Nummer.)

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

Wenn eine Ausführung des obigen Workflows abgeschlossen ist, löst sie eine Ausführung des folgenden Workflows aus. Der folgende Workflow verwendet den Kontext `github.event.workflow_run` und die {% data variables.product.product_name %}-REST-API, um das Artefakt herunterzuladen, das vom obigen Workflow hochgeladen wurde, entzippt das heruntergeladene Artefakt und kommentiert den Pull Request, dessen Nummer als Artefakt hochgeladen wurde.

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
