---
title: Hinzufügen von Bezeichnungen zu Issues
shortTitle: Add labels to issues
intro: 'Du kannst {% data variables.product.prodname_actions %} verwenden, um Issues automatisch zu bezeichnen.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185561'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird veranschaulicht, wie du die [`actions/github-script`-Aktion](https://github.com/marketplace/actions/github-script) in einem Workflow verwendest, um neue oder erneut geöffnete Issues zu bezeichnen. Beispielsweise kannst du jedes Mal die Bezeichnung `triage` hinzufügen, wenn ein Issue geöffnet oder erneut geöffnet wird. So kannst du alle Issues, die selektiert werden müssen, durch Filtern nach Issues mit der Bezeichnung `triage` anzeigen.

Mit der Aktion `actions/github-script` kannst du die {% data variables.product.prodname_dotcom %}-API problemlos in einem Workflow verwenden.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`actions/github-script`-Aktion](https://github.com/marketplace/actions/github-script) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.
  
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. Passe den `script`-Parameter in deiner Workflowdatei an:
   - Die Werte von `issue_number`, `owner`, und `repo` werden automatisch mithilfe des `context`-Objekts festgelegt. Du musst sie nicht ändern.
   - Ändere den Wert für `labels` in die Liste der Bezeichnungen, die du dem Issue hinzufügen möchtest. Trenne mehrere Bezeichnungen durch Kommas voneinander ab. Beispiel: `["help wanted", "good first issue"]`. Weitere Informationen zu Bezeichnungen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
5. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Jedes Mal, wenn ein Issue im Repository geöffnet oder erneut geöffnet wird, fügt dieser Workflow die Bezeichnungen hinzu, die du für das Issue angegeben hast.

Teste deinen Workflow, indem du ein Issue in deinem Repository erstellst.

1. Erstelle ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Um die Workflowausführung anzuzeigen, die durch das Erstellen des Issues ausgelöst wurde, rufe den Verlauf deiner Workflowausführungen auf. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
3. Wenn der Workflow abgeschlossen ist, sollten dem erstellten Issue die angegebenen Bezeichnungen hinzugefügt worden sein.

## Nächste Schritte

- Weitere Informationen zu weiteren Optionen für die Aktion `actions/github-script` findest du in der [Dokumentation zur Aktion `actions/github-script`](https://github.com/marketplace/actions/github-script).
- Weitere Informationen zu verschiedenen Ereignissen, die deinen Workflow auslösen können, findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#issues).
- [Durchsuche GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
