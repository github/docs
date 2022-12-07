---
title: 'Entfernen einer Bezeichnung, wenn eine Karte einer Projektboardspalte hinzugefügt wird'
intro: 'Mithilfe von {% data variables.product.prodname_actions %} kannst du Bezeichnungen automatisch entfernen, wenn ein Issue oder ein Pull Request einer bestimmten Spalte auf einem {% data variables.projects.projects_v1_board %} hinzugefügt wird.'
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
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185629'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird gezeigt, wie du die [`actions/github-script`-Aktion](https://github.com/marketplace/actions/github-script) zusammen mit einer Bedingung verwendest, um eine Bezeichnung von Issues und Pull Requests zu entfernen, die einer bestimmten Spalte auf einem {% data variables.projects.projects_v1_board %} hinzugefügt werden. Du kannst beispielsweise die Bezeichnung `needs review` entfernen, wenn Projektkarten in die Spalte `Done`verschoben werden.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`actions/github-script`-Aktion](https://github.com/marketplace/actions/github-script) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. Wählen ein {% data variables.projects.projects_v1_board %} aus, das zum Repository gehört. Dieser Workflow kann nicht mit Projekten verwendet werden, die Benutzer*innen oder Organisationen gehören. Du kannst ein vorhandenes {% data variables.projects.projects_v1_board %} verwenden oder ein neues {% data variables.projects.projects_v1_board %} erstellen. Weitere Informationen zum Erstellen eines Projekts findest du unter [Erstellen eines {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Passe die Parameter in deiner Workflowdatei an:
   - Ersetze `12345678` in `github.event.project_card.column_id == '12345678'` durch die ID der Spalte, in der du Bezeichnungen von Issues und Pull Requests entfernen möchtest, die dorthin verschoben werden.

     Navigiere zu deinem {% data variables.projects.projects_v1_board %}, um die Spalten-ID zu finden. Klicke neben dem Titel der Spalte auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und danach auf **Spaltenlink kopieren**. Bei der Zahl am Ende des kopierten Links handelt es sich um die Spalten-ID. Beispielsweise ist `24687531` die Spalten-ID für `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Wenn du mehr als eine Spalte bearbeiten möchtest, trenne die Bedingungen durch `||`. Zum Beispiel wird `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` immer ausgeführt, wenn eine Projektkarte zu Spalte `12345678` oder Spalte `87654321` hinzugefügt wird. Die Spalten können sich auf verschiedenen Projektboards befinden.
   - Ändere den Wert für `name` in der Funktion `github.rest.issues.removeLabel()` in den Namen der Bezeichnung, die du aus Issues oder Pull Requests entfernen möchtest, die in die angegebene(n) Spalte(n) verschoben werden. Weitere Informationen zu Bezeichnungen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
6. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Jedes Mal, wenn eine Projektkarte in einem {% data variables.projects.projects_v1_board %} in deinem Repository verschoben wird, wird dieser Workflow ausgeführt. Wenn die Karte ein Issue oder ein Pull Request ist und in die von dir angegebene Spalte verschoben wird, wird durch den Workflow die angegebene Bezeichnung entfernt. Karten, bei denen es sich um Notizen handelt, sind nicht betroffen.

Teste deinen Workflow, indem du ein Issue in deinem {% data variables.projects.projects_v1_board %} in die Zielspalte verschiebst.

1. Öffne ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Beschrifte das Issue mit den Bezeichnungen, die vom Workflow entfernt werden sollen. Weitere Informationen findest du unter [Verwalten von Bezeichnungen](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests).
3. Füge das Issue zu der Spalte des {% data variables.projects.projects_v1_board %} hinzu, die du in deiner Workflowdatei angegeben hast. Weitere Informationen findest du unter [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board).
4. Um die Workflowausführung anzuzeigen, die durch das Hinzufügen des Issues zum Projekt ausgelöst wurde, rufe den Verlauf deiner Workflowausführungen auf. Weitere Informationen findest du unter [Aufrufen des Workflow-Ausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
5. Nachdem der Workflow ausgeführt wurde, sollte die angegebene Bezeichnung aus dem Issue entfernt worden sein, das du der Projektspalte hinzugefügt hast.

## Nächste Schritte

- Informationen zu weiteren Optionen für die Aktion `actions/github-script` findest du in der [Dokumentation zur Aktion `actions/github-script`](https://github.com/marketplace/actions/github-script).
- [Durchsuche GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
