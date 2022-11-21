---
title: Hinzufügen von Bezeichnungen zu Issues
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
ms.openlocfilehash: 8e80990a1a533ed303f47cbad8dafb95c890893d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884309'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird veranschaulicht, wie du die [`andymckay/labeler`-Aktion](https://github.com/marketplace/actions/simple-issue-labeler) in einem Workflow verwendest, um neue oder erneut geöffnete Issues zu bezeichnen. Beispielsweise kannst du jedes Mal die Bezeichnung `triage` hinzufügen, wenn ein Issue geöffnet oder erneut geöffnet wird. So kannst du alle Issues, die selektiert werden müssen, durch Filtern nach Issues mit der Bezeichnung `triage` anzeigen.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`andymckay/labeler`-Aktion](https://github.com/marketplace/actions/simple-issue-labeler) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

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
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Passe die Parameter in deiner Workflowdatei an:
   - Ändere den Wert für `add-labels` in die Liste der Bezeichnungen, die du dem Issue hinzufügen möchtest. Trenne mehrere Bezeichnungen durch Kommas voneinander ab. Beispiel: `"help wanted, good first issue"`. Weitere Informationen zu Bezeichnungen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
5. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Jedes Mal, wenn ein Issue im Repository geöffnet oder erneut geöffnet wird, fügt dieser Workflow die Bezeichnungen hinzu, die du für das Issue angegeben hast.

Teste deinen Workflow, indem du ein Issue in deinem Repository erstellst.

1. Erstelle ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Um die Workflowausführung anzuzeigen, die durch das Erstellen des Issues ausgelöst wurde, rufe den Verlauf deiner Workflowausführungen auf. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
3. Wenn der Workflow abgeschlossen ist, sollten dem erstellten Issue die angegebenen Bezeichnungen hinzugefügt worden sein.

## Nächste Schritte

- Weitere Informationen zu zusätzlichen Optionen, die du mit der `andymckay/labeler`-Aktion durchführen kannst, findest du in der [`andymckay/labeler`-Aktionsdokumentation](https://github.com/marketplace/actions/simple-issue-labeler). Dazu gehört z. B. das Entfernen von Bezeichnungen oder das Überspringen dieser Aktion, wenn das Issue zugewiesen ist oder eine bestimmte Bezeichnung aufweist.
- Weitere Informationen zu verschiedenen Ereignissen, die deinen Workflow auslösen können, findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#issues). Die `andymckay/labeler`-Aktion funktioniert nur für `issues`-, `pull_request`- oder `project_card`-Ereignisse.
- [Durchsuche GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
