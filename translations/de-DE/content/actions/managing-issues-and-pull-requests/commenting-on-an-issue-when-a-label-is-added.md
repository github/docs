---
title: 'Kommentar zu einem Issue, wenn eine Bezeichnung hinzugefügt wird'
intro: 'Du kannst {% data variables.product.prodname_actions %} verwenden, um Issues automatisch zu kommentieren, wenn eine bestimmte Bezeichnung angewendet wird.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409039'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird gezeigt, wie du die [Aktion `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) verwendest, um ein Issue zu kommentieren, wenn eine bestimmte Bezeichnung angewendet wird. Wenn beispielsweise die Bezeichnung `help-wanted` zu einem Issue hinzugefügt wird, kannst du einen Kommentar hinzufügen, um Mitwirkende zur Arbeit am Issue zu ermutigen.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`peter-evans/create-or-update-comment`-Aktion](https://github.com/marketplace/actions/create-or-update-comment) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. Passe die Parameter in deiner Workflowdatei an:
   - Ersetze `help-wanted` in `if: github.event.label.name == 'help-wanted'` durch die Bezeichnung, auf die du reagieren möchtest. Wenn du auf mehr als eine Bezeichnung reagieren möchtest, trenne die Bedingungen durch `||`. `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` wird beispielsweise immer dann kommentiert, wenn die Bezeichnung `bug` oder `fix me` zu einem Issue hinzugefügt wird.
   - Ändere den Wert für `body` in den Kommentar, den du hinzufügen möchtest. GitHub Flavored Markdown wird unterstützt. Weitere Informationen zu Markdown findest du unter [Grundlegende Schreib- und Formatierungssyntax](/github/writing-on-github/basic-writing-and-formatting-syntax).
5. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Jedes Mal, wenn ein Issue in deinem Repository mit einer Bezeichnung versehen wird, wird dieser Workflow ausgeführt. Wenn es sich bei der hinzugefügten Bezeichnung um eine der Bezeichnungen handelt, die du in deiner Workflowdatei angegeben hast, fügt die Aktion `peter-evans/create-or-update-comment` den von dir angegebenen Kommentar zum Issue hinzu.

Teste deinen Workflow, indem du deine angegebene Bezeichnung auf ein Issue anwendest.

1. Öffne ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Bezeichne das Issue mit der angegebenen Bezeichnung in deiner Workflowdatei. Weitere Informationen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
3. Zeige den Verlauf deiner Workflowausführungen an, um die Workflowausführung zu ermitteln, die durch das Bezeichnen des Issues ausgelöst wurde. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
4. Wenn der Workflow abgeschlossen ist, sollte dem von dir bezeichneten Issue ein Kommentar hinzugefügt worden sein.

## Nächste Schritte

- Weitere Informationen zu weiteren Optionen für die Aktion `peter-evans/create-or-update-comment` (z. B. Hinzufügen von Reaktionen) findest du in der [Dokumentation zur Aktion `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
