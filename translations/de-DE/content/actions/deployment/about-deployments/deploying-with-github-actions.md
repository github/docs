---
title: Bereitstellen mit GitHub Actions
intro: 'Hier erfährst du, wie du Bereitstellungen mit Features wie Umgebungen und Parallelität steuerst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 533d85d83bea53d34af3d8b9a47d0d4426ea4bc6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179184'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

{% data variables.product.prodname_actions %} bietet Features, mit denen du Bereitstellungen steuern kannst. Sie haben folgende Möglichkeiten:

- Auslösen von Workflows mit einer Vielzahl von Ereignissen.
- Konfigurieren von Umgebungen, um Regeln festzulegen, bevor ein Auftrag fortgesetzt werden kann, und um den Zugriff auf Geheimnisse einzuschränken.
- Verwenden von Parallelität, um die Anzahl der Bereitstellungen zu steuern, die gleichzeitig ausgeführt werden.

Weitere Informationen zu Continuous Deployment findest du unter [Informationen zu Continuous Deployment](/actions/deployment/about-continuous-deployment).

## Voraussetzungen

Du solltest mit der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

## Auslösen deiner Bereitstellung

Du kannst deinen Bereitstellungsworkflow mit einer Vielzahl von Ereignissen auslösen. Einige der gängigsten Optionen sind `pull_request`, `push` und `workflow_dispatch`.

Beispielsweise löst ein Workflow unter folgenden Bedingungen Ausführungen aus:

- Es gibt einen Push in den `main`-Branch.
- Ein Pull Request, der auf den `main`-Branch ausgerichtet ist, wird geöffnet, synchronisiert oder erneut geöffnet.
- Jemand löst ihn manuell aus.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

## Verwenden von Umgebungen

{% data reusables.actions.about-environments %}

## Verwenden von Parallelität

Parallelität stellt sicher, dass jeweils nur ein einziger Auftrag oder Workflow mit derselben Parallelitätsgruppe ausgeführt wird. Du kannst Parallelität verwenden, sodass in einer Umgebung maximal eine Bereitstellung ausgeführt wird und eine Bereitstellung aussteht.

{% note %}

**Hinweis**: `concurrency` und `environment` sind nicht verbunden. Der Parallelitätswert kann eine beliebige Zeichenfolge sein.Er muss kein Umgebungsname sein. Wenn ein anderer Workflow die gleiche Umgebung verwendet, aber keine Parallelität angibt, unterliegt dieser Workflow keinen Parallelitätsregeln.

{% endnote %}

Wenn beispielsweise der folgende Workflow ausgeführt wird, wird er mit dem Status `pending` angehalten, wenn ein Auftrag oder Workflow, der die Parallelitätsgruppe `production` verwendet, aktiv ist. Außerdem werden alle Aufträge oder Workflows abgebrochen, die die Parallelitätsgruppe `production` verwenden und den Status `pending` haben. Das bedeutet, dass es maximal einen aktiven und einen ausstehenden Auftrag oder Workflow gibt, der die Parallelitätsgruppe `production` verwendet.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Du kannst Parallelität auch auf Auftragsebene angeben. Dadurch können andere Aufträge im Workflow fortgesetzt werden, auch wenn der parallele Auftrag `pending` ist.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Du kannst auch mit `cancel-in-progress` alle derzeit ausgeführten Aufträge oder Workflows in derselben Parallelitätsgruppe abbrechen.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Anleitungen zum Schreiben von bereitstellungsspezifischen Schritten findest du unter [Suchen nach Bereitstellungsbeispielen](#finding-deployment-examples).

## Anzeigen des Bereitstellungsverlaufs

Wenn ein {% data variables.product.prodname_actions %}-Workflow in einer Umgebung bereitgestellt wird, wird die Umgebung auf der Hauptseite des Repositorys angezeigt. Weitere Informationen zum Anzeigen von Bereitstellungen für Umgebungen findest du unter [Anzeigen des Bereitstellungsverlaufs](/developers/overview/viewing-deployment-history).

## Überwachen von Workflowausführungen

Jede Workflowausführung generiert ein Echtzeitdiagramm, das den Ausführungsfortschritt veranschaulicht. Du kannst dieses Diagramm verwenden, um Bereitstellungen zu überwachen und zu debuggen. Weitere Informationen findest du unter [Verwenden des Visualisierungsdiagramms](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph).

Du kannst auch die Protokolle jeder Workflowausführung und den Verlauf von Workflowausführungen anzeigen. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).

## Nachverfolgen von Bereitstellungen über Apps

{% ifversion fpt or ghec %} Wenn dein persönliches Konto oder deine Organisation auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} mit Microsoft Teams oder Slack integriert ist, kannst du Bereitstellungen, die Umgebungen verwenden, über Microsoft Teams oder Slack nachverfolgen. Du kannst beispielsweise Benachrichtigungen über die App erhalten, wenn für eine Bereitstellung eine Genehmigung aussteht, wenn eine Bereitstellung genehmigt wird oder wenn sich der Bereitstellungsstatus ändert. Weitere Informationen zum Integrieren von Microsoft Teams oder Slack findest du unter [GitHub-Erweiterungen und -Integrationen](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools).
{% endif %}

Du kannst auch eine App erstellen, die Bereitstellungs- und Bereitstellungsstatuswebhooks verwendet, um Bereitstellungen nachzuverfolgen. {% data reusables.actions.environment-deployment-event %} Weitere Informationen findest du unter [Apps](/developers/apps) und [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment).

{% ifversion fpt or ghes or ghec %}

## Die Auswahl eines Runners

Du kannst deinen Bereitstellungsworkflow auf von {% data variables.product.company_short %} gehosteten Runnern oder selbstgehosteten Runnern ausführen. Der Datenverkehr von {% data variables.product.company_short %}-gehosteten Runnern kann von einer [ breiten Palette von Netzwerkadressen](/rest/reference/meta#get-github-meta-information) stammen. Wenn du die Bereitstellung in einer internen Umgebung vornimmst und dein Unternehmen den externen Datenverkehr in private Netzwerke einschränkt, können {% data variables.product.prodname_actions %}-Workflows, die auf von {% data variables.product.company_short %} gehosteten Runnern ausgeführt werden, möglicherweise nicht mit deinen internen Diensten oder Ressourcen kommunizieren. Um dies zu vermeiden, kannst du deine eigenen Runner hosten. Weitere Informationen findest du unter [Informationen über selbstgehostete Runner](/actions/using-github-hosted-runners/about-github-hosted-runners) und [Informationen über von GitHub gehostete Runner](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% endif %}

## Anzeigen eines Statusbadges

Du kannst ein Statusbadge verwenden, um den Status deines Bereitstellungsworkflows anzuzeigen. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Weitere Informationen findest du unter [Hinzufügen eines Workflowstatusbadges](/actions/managing-workflow-runs/adding-a-workflow-status-badge).

## Suchen nach Bereitstellungsbeispielen

In diesem Artikel wurden Features von {% data variables.product.prodname_actions %} beschrieben, die du deinen Bereitstellungsworkflows hinzufügen kannst.

{% data reusables.actions.cd-templates-actions %}
