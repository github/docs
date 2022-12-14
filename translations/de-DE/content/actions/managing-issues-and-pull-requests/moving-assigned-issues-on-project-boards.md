---
title: Verschieben zugewiesener Issues in Projektboards
intro: 'Du kannst {% data variables.product.prodname_actions %} verwenden, um ein Issue automatisch in eine bestimmte Spalte in einem Projektboard zu verschieben, wenn das Issue zugewiesen wird.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 88cec7ca6f2e7774fb29407b0b3ee14dc7041067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410459'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial wird veranschaulicht, wie du die [`alex-page/github-project-automation-plus`-Aktion](https://github.com/marketplace/actions/github-project-automation) verwendest, um ein Issue automatisch in eine bestimmte Spalte in einem Projektboard zu verschieben, wenn das Issue zugewiesen wird. Wenn beispielsweise ein Issue zugewiesen wird, kannst du es in die Spalte `In Progress` des Projektboards verschieben.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`alex-page/github-project-automation-plus`-Aktion](https://github.com/marketplace/actions/github-project-automation) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. Wähle in deinem Repository ein Projektboard aus. Du kannst ein vorhandenes Projekt verwenden oder ein neues erstellen. Weitere Informationen zum Erstellen eines Projekts findest du unter [Erstellen eines Projektboards](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. Passe die Parameter in deiner Workflowdatei an:
   - Ändere den Wert für `project` in den Namen des Projektboards. Wenn du über mehrere Projektboards mit demselben Namen verfügst, wird die `alex-page/github-project-automation-plus`-Aktion für alle Projekte mit dem angegebenen Namen ausgeführt.
   - Ändere den Wert für `column` in den Namen der Spalte, in die Issues verschoben werden sollen, wenn sie zugewiesen werden.
   - Ändere den Wert für `repo-token`:
     1. Erstelle ein persönliches Zugriffstoken mit dem `repo`-Geltungsbereich. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).
     1. Speichere dieses persönliche Zugriffstoken als Geheimnis in deinem Repository. Weitere Informationen zum Speichern von Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).
     1. Ersetze in deiner Workflowdatei `PERSONAL_ACCESS_TOKEN` durch den Namen deines Geheimnisses.
6. {% data reusables.actions.commit-workflow %}

## Testen des Workflows

Wenn ein Issue in deinem Repository zugewiesen wird, wird es in die angegebene Projektboardspalte verschoben. Wenn das Issue nicht bereits im Projektboard vorhanden ist, wird es dem Projektboard hinzugefügt.

Wenn sich dein Repository im Besitz von Benutzern befindet, wird die `alex-page/github-project-automation-plus`-Aktion für alle Projekte in deinem Repository oder persönlichen Konto ausgeführt, die den angegebenen Projektnamen und die Spalte aufweisen. Wenn es sich um ein Repository im Besitz der Organisation handelt, wirkt sich die Aktion ebenso auf alle Projekte in deinem Repository oder in deiner Organisation aus, die den angegebenen Projektnamen und die Spalte aufweisen.

Teste deinen Workflow, indem du ein Issue in deinem Repository zuweist.

1. Öffne ein Issue in deinem Repository. Weitere Informationen findest du unter [Erstellen eines Issues](/github/managing-your-work-on-github/creating-an-issue).
2. Weise das Issue zu. Weitere Informationen findest du unter [Zuweisen von Issues und Pull Requests zu anderen GitHub-Benutzer*innen](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users).
3. Zeige den Verlauf deiner Workflowausführungen an, um die Workflowausführung zu ermitteln, die durch das Zuweisen des Issues ausgelöst wurde. Weitere Informationen findest du unter [Anzeigen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
4. Wenn der Workflow abgeschlossen ist, sollte das zugewiesene Issue der angegebenen Projektboardspalte hinzugefügt werden.

## Nächste Schritte

- Weitere Informationen zu weiteren Optionen für die `alex-page/github-project-automation-plus`-Aktion (z. B. Löschen oder Archivieren von Projektkarten) findest du in der [Dokumentation zur `alex-page/github-project-automation-plus`-Aktion](https://github.com/marketplace/actions/github-project-automation).
