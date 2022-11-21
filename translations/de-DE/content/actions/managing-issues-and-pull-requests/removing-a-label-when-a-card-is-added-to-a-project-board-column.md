---
title: 'Entfernen einer Bezeichnung, wenn eine Karte einer Projektboardspalte hinzugefügt wird'
intro: 'Mithilfe von {% data variables.product.prodname_actions %} kannst du Bezeichnungen automatisch entfernen, wenn ein Issue oder ein Pull Request in einem Projektboard einer bestimmten Spalte hinzugefügt wird.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410107'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird gezeigt, wie du die [`andymckay/labeler`-Aktion](https://github.com/marketplace/actions/simple-issue-labeler) zusammen mit einer Bedingung verwendest, um eine Bezeichnung von Issues und Pull Requests zu entfernen, die einer bestimmten Spalte auf einem Projektboard hinzugefügt werden. Du kannst beispielsweise die Bezeichnung `needs review` entfernen, wenn Projektkarten in die Spalte `Done`verschoben werden.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`andymckay/labeler`-Aktion](https://github.com/marketplace/actions/simple-issue-labeler) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. Wähle ein Projekt aus, das zum Repository gehört. Dieser Workflow kann nicht mit Projekten verwendet werden, die Benutzer*innen oder Organisationen gehören. Du kannst ein vorhandenes Projekt verwenden oder ein neues erstellen. Weitere Informationen zum Erstellen eines Projekts findest du unter [Erstellen eines Projektboards](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Passe die Parameter in deiner Workflowdatei an:
   - Ersetze `12345678` in `github.event.project_card.column_id == '12345678'` durch die ID der Spalte, in der du Bezeichnungen von Issues und Pull Requests entfernen möchtest, die dorthin verschoben werden.

    Navigiere zum Projektboard, um die Spalten-ID zu finden. Klicke neben dem Titel der Spalte auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und danach auf **Spaltenlink kopieren**. Bei der Zahl am Ende des kopierten Links handelt es sich um die Spalten-ID. Beispielsweise ist `24687531` die Spalten-ID für `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Wenn du mehr als eine Spalte bearbeiten möchtest, trenne die Bedingungen durch `||`. Zum Beispiel wird `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` immer ausgeführt, wenn eine Projektkarte zu Spalte `12345678` oder Spalte `87654321` hinzugefügt wird. Die Spalten können sich auf verschiedenen Projektboards befinden.
   - Ändere den Wert für `remove-labels` in die Liste der Bezeichnungen, die du von Issues oder Pull Requests entfernen möchtest, die in die angegebene Spalte oder Spalten verschoben werden. Trenne mehrere Bezeichnungen durch Kommas voneinander ab. Beispiel: `"help wanted, good first issue"`. Weitere Informationen zu Bezeichnungen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
6. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Jedes Mal, wenn eine Projektkarte in einem Projekt in deinem Repository verschoben wird, wird dieser Workflow ausgeführt. Wenn die Karte ein Issue oder ein Pull Request ist und in die von Ihnen angegebene Spalte verschoben wird, werden durch den Workflow die angegebenen Bezeichnungen entfernt. Karten, bei denen es sich um Notizen handelt, sind nicht betroffen.

Teste deinen Workflow, indem du ein Issue in deinem Projekt in die Zielspalte verschiebst.

1. Öffne ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Beschrifte das Issue mit den Bezeichnungen, die vom Workflow entfernt werden sollen. Weitere Informationen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
3. Füge das Issue zu der Projektspalte hinzu, die du in deiner Workflowdatei angegeben hast. Weitere Informationen findest du unter [Hinzufügen von Issues und Pull Requests zu einem Projektboard](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board).
4. Um die Workflowausführung anzuzeigen, die durch das Hinzufügen des Issues zum Projekt ausgelöst wurde, rufe den Verlauf deiner Workflowausführungen auf. Weitere Informationen findest du unter [Aufrufen des Workflow-Ausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
5. Wenn der Workflow abgeschlossen ist, sollten die angegebenen Bezeichnungen von dem Issue, das du der Projektspalte hinzugefügt hast, entfernt worden sein.

## Nächste Schritte

- Weitere Informationen zu zusätzlichen Optionen, die du mit der `andymckay/labeler`-Aktion durchführen kannst, findest du unter [`andymckay/labeler`-Aktionsdokumentation](https://github.com/marketplace/actions/simple-issue-labeler). Dazu gehört z. B. das Hinzufügen von Bezeichnungen oder das Überspringen dieser Aktion, wenn das Issue zugewiesen ist oder eine bestimmte Bezeichnung aufweist.
- [Durchsuche GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
