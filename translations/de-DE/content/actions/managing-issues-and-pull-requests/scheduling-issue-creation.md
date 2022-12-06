---
title: Planen der Erstellung von Issues
intro: 'Du kannst {% data variables.product.prodname_actions %} verwenden, um regelmäßig ein Issue zu erstellen, z. B. für tägliche Besprechungen oder vierteljährliche Überprüfungen.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410060'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Dieses Tutorial veranschaulicht, wie du die [`imjohnbo/issue-bot`-Aktion](https://github.com/marketplace/actions/issue-bot-action) verwendest, um Issues für regelmäßige Aufgaben zu erstellen. Du kannst beispielsweise für jede Woche ein Issue erstellen, das als Tagesordnung für eine Teambesprechung verwendet werden soll.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`imjohnbo/issue-bot`-Aktion](https://github.com/marketplace/actions/issue-bot-action) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Passe die Parameter in deiner Workflowdatei an:
   - Ändere den Wert für `on.schedule`, um festzulegen, wann dieser Workflow ausgeführt werden soll. Im obigen Beispiel wird der Workflow jeden Montag um 7:20 Uhr UTC ausgeführt. Weitere Informationen zu geplanten Workflows findest du unter [Geplante Ereignisse](/actions/reference/events-that-trigger-workflows#scheduled-events).
   - Ändere den Wert für `assignees` in die Liste der {% data variables.product.prodname_dotcom %}-Benutzernamen, die du dem Issue zuweisen möchtest.
   - Ändere den Wert für `labels` in die Liste der Bezeichnungen, die du auf das Issue anwenden möchtest.
   - Ändere den Wert für `title` in den Titel, den das Issue haben soll.
   - Ändere den Wert für `body` in den Text, der im Issuetext angezeigt werden soll. Mit dem Zeichen `|` kannst du einen mehrzeiligen Wert für diesen Parameter verwenden.
   - Wenn du dieses Issue in deinem Repository anheften möchtest, lege `pinned` auf `true` fest. Weitere Informationen zu angehefteten Issues findest du unter [Anheften eines Issues an dein Repository](/articles/pinning-an-issue-to-your-repository).
   - Wenn das von diesem Workflow generierte vorherige Issue immer geschlossen werden soll, wenn ein neues Issue erstellt wird, lege `close-previous` auf `true` fest. Der Workflow schließt das jüngste Issue, das die im Feld `labels` definierten Bezeichnungen enthält. Um zu vermeiden, dass das falsche Issue geschlossen wird, verwende eine eindeutige Bezeichnung oder eine eindeutige Kombination aus Bezeichnungen.
5. {% data reusables.actions.commit-workflow %}

## Erwartete Ergebnisse

Basierend auf dem Parameter `schedule` (z. B. jeden Montag um 7:20 Uhr UTC) erstellt dein Workflow ein neues Issue mit den zugewiesenen Personen, Bezeichnungen, dem Titel und dem Textkörper, die bzw. den du angegeben hast. Wenn du `pinned` auf `true` festgelegt hast, heftet der Workflow das Issue an dein Repository an. Wenn du `close-previous` auf TRUE festgelegt hast, schließt der Workflow das jüngste Issue mit den entsprechenden Bezeichnungen.

{% data reusables.actions.schedule-delay %}

Du kannst den Verlauf der Workflowausführungen anzeigen, um zu ermitteln, ob dieser Workflow regelmäßig ausgeführt wird. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).

## Nächste Schritte

- Weitere Informationen zu weiteren Aufgaben, die du mit der `imjohnbo/issue-bot`-Aktion erledigen kannst, z. B. zum Rotieren von zugewiesenen Personen oder zum Verwenden einer Issuevorlage, findest du in der [Dokumentation zu `imjohnbo/issue-bot`-Aktionen](https://github.com/marketplace/actions/issue-bot-action).
- [Durchsuche GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
