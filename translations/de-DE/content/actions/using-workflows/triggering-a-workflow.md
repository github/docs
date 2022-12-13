---
title: Auslösen eines Workflows
shortTitle: Trigger a workflow
intro: 'Automatisches Auslösen von {% data variables.product.prodname_actions %}-Workflows'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191903'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Workflowtriggern

{% data reusables.actions.about-triggers %}

Workflowtrigger werden mit dem Schlüssel `on` definiert. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on).

Die folgenden Schritte laufen ab, um einen Workflow-Lauf auszulösen:

1. In deinem Repository tritt ein Ereignis auf. Dem Ereignis sind ein Commit-SHA und ein Git-Verweis zugeordnet.
1. {% data variables.product.product_name %} durchsucht das Verzeichnis `.github/workflows` in deinem Repository nach Workflowdateien, die im zugehörigen Commit-SHA oder Git-Verweis des Ereignisses vorhanden sind.
1. Für alle Workflows, die über `on:`-Werte verfügen, die mit dem auslösenden Ereignis übereinstimmen, wird eine Workflowausführung ausgelöst. Bei einigen Ereignissen muss die Workflowdatei außerdem im Standardbranch des Repositorys vorhanden sein, damit eine Ausführung möglich ist.

  Bei jeder Ausführung des Workflows wird die Workflowversion verwendet, die im zugehörigen Commit-SHA oder Git-Verweis des Ereignisses enthalten ist. Wenn ein Workflow ausgeführt wird, legt {% data variables.product.product_name %} die Umgebungsvariablen `GITHUB_SHA` (Commit-SHA) und `GITHUB_REF` (Git-Verweis) in der Runnerumgebung fest. Weitere Informationen findest du unter [Verwenden von Umgebungsvariablen](/actions/automating-your-workflow-with-github-actions/using-environment-variables).

### Auslösen eines Workflows aus einem Workflow

{% data reusables.actions.actions-do-not-trigger-workflows %} Weitere Informationen findest du unter [Authentifizierung mit dem GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token).

Wenn du einen Workflow aus einer Workflowausführung heraus auslösen möchtest, kannst du anstelle von `GITHUB_TOKEN` ein {% data variables.product.pat_generic %} verwenden, um Ereignisse auszulösen, die ein Token erfordern. Du musst ein {% data variables.product.pat_generic %} erstellen und dieses als Geheimnis speichern. Um dein Nutzungskosten für {% data variables.product.prodname_actions %} zu minimieren, pass auf, dass du keine rekursiven oder unbeabsichtigten Workflow-Läufe erzeugst. Weitere Informationen zum Erstellen eines {% data variables.product.pat_generic %} findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Weitere Informationen dazu, wie du ein {% data variables.product.pat_generic %} als Geheimnis speicherst, findest du unter [Erstellen und Speichern verschlüsselter Geheimnisse](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

Der folgende Workflow verwendet beispielsweise ein {% data variables.product.pat_generic %} (das als Geheimnis mit dem Namen `MY_TOKEN` gespeichert ist), um einem Issue über die {% data variables.product.prodname_cli %} eine Bezeichnung hinzuzufügen. Alle beim Hinzufügen einer Bezeichnung ausgeführten Workflows werden nach diesem Schritt ausgeführt.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

Umgekehrt verwendet der folgende Workflow `GITHUB_TOKEN`, um einem Issue eine Bezeichnung hinzuzufügen. Es werden keine Workflows ausgelöst, die beim Hinzufügen einer Bezeichnung ausgeführt werden.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Verwenden von Ereignissen zum Auslösen von Workflows

Verwende die den `on`-Schlüssel, um festzulegen, welche Ereignisse deinen Workflow auslösen. Weitere Informationen über Ereignisse, die du verwenden kannst, findest du unter [Ereignisse, die Workflows auslösen](/actions/using-workflows/events-that-trigger-workflows).

### Verwenden eines einzelnen Ereignisses

{% data reusables.actions.on-single-example %}

### Verwenden mehrerer Ereignisse

{% data reusables.actions.on-multiple-example %}

### Verwenden von Aktivitätstypen und Filtern mit mehreren Ereignissen

Du kannst mithilfe von Aktivitätstypen und Filtern steuern, wann dein Workflow ausgeführt wird. Weitere Informationen findest du unter [Verwenden von Ereignisaktivitätstypen](#using-event-activity-types) und [Verwenden von Filtern](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Verwenden von Ereignisaktivitätstypen

{% data reusables.actions.actions-activity-types %}

## Verwenden von Filtern

{% data reusables.actions.actions-filters %}

### Verwenden von Filtern, um spezifische Branches als Ziel für Pull Request-Ereignisse festzulegen

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### Verwenden von Filtern, um spezifische Branches als Ziel oder Tags für Pushereignisse festzulegen

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### Verwenden von Filtern, um spezifische Pfade als Ziel für Pull Request- oder Pushereignisse festzulegen

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### Verwenden von Filtern, um spezifische Branches als Ziel für Workflowausführungsereignisse festzulegen

{% data reusables.actions.workflows.section-specifying-branches %}

## Definieren von Eingaben für manuell ausgelöste Workflows

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Definieren von Eingaben, Ausgaben und Geheimnissen für wiederverwendbare Workflows

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Du kannst Eingaben und Geheimnisse definieren, die ein wiederverwendbarer Workflow von einem aufrufenden Workflow empfangen soll. Du kannst außerdem Ausgaben festlegen, die ein wiederverwendbarer Workflow einem aufrufenden Workflow zur Verfügung stellen soll. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows).

{% endif %}

## Verwenden von Ereignisinformationen

Im `github.event`-Kontext stehen Informationen über das Ereignis zur Verfügung, das eine Workflowausführung ausgelöst hat. Die Eigenschaften im `github.event`-Kontext hängen vom Typ des Ereignisses ab, das den Workflow ausgelöst hat. Zum Beispiel würde ein Workflow, der durch die Bezeichnung eines Issues ausgelöst wird, Informationen über das Issue und die Bezeichnung enthalten.

### Anzeigen aller Eigenschaften eines Ereignisses

In der Dokumentation zum Webhookereignis findest du allgemeine Eigenschaften und Beispielnutzdaten. Weitere Informationen findest du unter [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads).

Du kannst auch den gesamten `github.event`-Kontext ausgeben, um zu ermitteln, welche Eigenschaften für das Ereignis verfügbar sind, das deinen Workflow ausgelöst hat:

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Zugreifen auf und Verwenden von Ereigniseigenschaften

Du kannst den `github.event`-Kontext in deinem Workflow verwenden. Der folgende Workflow wird zum Beispiel ausgeführt, wenn ein Pull Request geöffnet wird, der `package*.json`, `.github/CODEOWNERS` oder `.github/workflows/**` ändert. Wenn der Autor des Pull Requests (`github.event.pull_request.user.login`) nicht `octobot` oder `dependabot[bot]` ist, verwendet der Workflow die {% data variables.product.prodname_cli %}, um den Pull Request zu kennzeichnen und zu kommentieren (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

Weitere Informationen zu Kontexten findest du unter [Kontexte](/actions/learn-github-actions/contexts). Weitere Informationen über Ereignisnutzdaten findest du unter [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads).

## Weiterführende Steuerung der Workflowausführung

Wenn du eine präzisere Kontrolle benötigst, als Ereignisse, Ereignisaktivitätstypen oder Ereignisfilter sie bieten, kannst du Bedingungen und Umgebungen verwenden, um zu steuern, ob einzelne Aufträge oder Schritte in deinem Workflow ausgeführt werden.

### Verwenden von Bedingungen

Du kannst Bedingungen verwenden, um genauer zu steuern, ob Aufträge oder Schritte in deinem Workflow ausgeführt werden sollen.

#### Beispiel für die Verwendung eines Werts in der Ereignisnutzlast

Wenn du zum Beispiel möchtest, dass der Workflow ausgeführt wird, wenn einem Issue eine bestimmte Bezeichnung hinzugefügt wird, kannst du die Ereignisaktivität `issues labeled` auslösen und anhand einer Bedingung prüfen, welche Bezeichnung den Workflow ausgelöst hat. Der folgende Workflow wird ausgeführt, wenn einem Issue im Repository des Workflows eine beliebige Bezeichnung hinzugefügt wird, aber der Auftrag `run_if_label_matches` wird nur ausgeführt, wenn die Bezeichnung `bug` lautet.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### Beispiel für die Verwendung eines Ereignistyps

Wenn du zum Beispiel abhängig davon, welches Ereignis den Workflow ausgelöst hat, verschiedene Aufträge oder Schritte ausführen möchtest, kannst du anhand einer Bedingung prüfen, ob ein bestimmter Ereignistyp im Ereigniskontext vorhanden ist. Der folgende Workflow wird immer dann ausgeführt, wenn ein Issue oder Pull Request geschlossen wird. Wenn der Workflow ausgeführt wurde, weil ein Issue geschlossen wurde, enthält der Kontext `github.event` einen Wert für `issue`, aber nicht für `pull_request`. Deshalb wird der Schritt `if_issue` ausgeführt, aber der Schritt `if_pr` nicht. Wenn der Workflow hingegen ausgeführt wurde, weil ein Pull Request geschlossen wurde, wird der Schritt `if_pr` ausgeführt, aber nicht der Schritt `if_issue`.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

Weitere Informationen darüber, welche Informationen im Ereigniskontext verfügbar sind, findest du unter [Verwenden von Ereignisinformationen](#using-event-information). Weitere Informationen zur Verwendung von Bedingungen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

### Verwenden von Umgebungen zum manuellen Auslösen von Workflowaufträgen

Wenn du einen bestimmten Auftrag in einem Workflow manuell auslösen möchtest, kannst du eine Umgebung verwenden, die die Genehmigung eines bestimmten Teams oder Benutzers erfordert. Konfiguriere zunächst eine Umgebung mit den erforderlichen Prüfern. Weitere Informationen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/targeting-different-environments/using-environments-for-deployment). Dann verweist du in einem Auftrag deines Workflows mit dem Schlüssel `environment:` auf den Umgebungsnamen. Jeder Auftrag mit Verweis auf die Umgebung wird erst ausgeführt, wenn mindestens ein Prüfer den Auftrag genehmigt.

Der folgende Workflow wird beispielsweise bei jedem Push an den Mainbranch ausgeführt. Der Auftrag `build` wird immer ausgeführt. Der Auftrag `publish` wird erst ausgeführt, nachdem der Auftrag `build` erfolgreich abgeschlossen wurde (aufgrund von `needs: [build]`) und nachdem alle Regeln (einschließlich der erforderlichen Prüfer) für die Umgebung namens `production` erfüllt wurden (aufgrund von `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## Verfügbare Ereignisse

Eine vollständige Liste der verfügbaren Ereignisse findest du unter [Ereignisse zum Auslösen von Workflows](/actions/using-workflows/events-that-trigger-workflows).
