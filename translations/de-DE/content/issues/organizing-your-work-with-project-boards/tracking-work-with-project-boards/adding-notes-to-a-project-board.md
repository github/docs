---
title: 'Hinzufügen von Hinweisen zu einem {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst einem {% data variables.projects.projects_v1_board %} Hinweise hinzufügen, um an Aufgaben zu erinnern oder Informationen zum {% data variables.projects.projects_v1_board %} bereitzustellen.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109790'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Tipps:**
- Du kannst den Hinweis mit der Markdown-Syntax formatieren. Du kannst beispielsweise Überschriften, Links, Aufgabenlisten oder Emojis verwenden. Weitere Informationen findest du unter [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax).
- Du kannst Hinweise per Drag-and-Drop oder mit Tastenkürzeln neu anordnen und zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Dein {% data variables.projects.projects_v1_board %} muss mindestens eine Spalte enthalten, damit du Hinweise hinzufügen kannst. Weitere Informationen findest du unter [Erstellen eines Projektboards](/articles/creating-a-project-board).

{% endtip %}

Wenn du einem Hinweis eine URL für einen Issue, einen Pull Request oder ein anderes {% data variables.projects.projects_v1_board %} hinzufügst, wird in der Zusammenfassungskarte unter deinem Text eine Vorschau angezeigt.

![Projektboard-Tickets mit der Vorschau eines Issues und ein weiteres Projektboard](/assets/images/help/projects/note-with-summary-card.png)

## Hinzufügen von Hinweisen zu einem {% data variables.projects.projects_v1_board %}

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, dem du Hinweise hinzufügen möchtest.
2. Klicke in der Spalte, der du einen Hinweis hinzufügen möchtest, auf {% octicon "plus" aria-label="The plus icon" %}.
![Pluszeichen-Symbol im Spalten-Header](/assets/images/help/projects/add-note-button.png)
3. Gebe die Notiz ein, und klicke dann auf **Add** (Hinzufügen).
![Feld zum Eingeben eines Hinweises und Schaltfläche zum Hinzufügen eines Tickets](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Tipp:** Du kannst im Hinweis auf einen Issue oder Pull Request verweisen, indem du die entsprechende URL im Ticket eingibst.

  {% endtip %}

## Einen Hinweis in einen Issue umwandeln

Wenn du einen Hinweis erstellt hast und feststellst, dass er für deine Anforderungen nicht ausreicht, kannst du den Hinweis in ein Issue umwandeln.

Wenn du einen Hinweis in ein Issue umwandelst, wird der Inhalt des Hinweises automatisch für das Issue übernommen. Die erste Zeile des Hinweises wird der Issue-Titel; der weitere Inhalt des Hinweises wird zur Issue-Beschreibung hinzugefügt.

{% tip %}

**Tipp:** Du kannst in den Text des Hinweises Inhalte einfügen, um jemanden zu erwähnen (@mention), einen anderen Issue oder Pull Request zu verlinken und Emojis hinzuzufügen. Diese {% data variables.product.prodname_dotcom %}-Markdownfeatures werden in {% data variables.projects.projects_v1_board %}hinweisen nicht unterstützt. Nach Umwandlung des Hinweises in einen Issue werden die Inhalte jedoch korrekt angezeigt. Weitere Informationen zur Verwendung dieser Features findest du unter [Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).

{% endtip %}

1. Navigiere zu dem Hinweis, den du in ein Issue umwandeln möchtest.
{% data reusables.project-management.project-note-more-options %}
3. Klicke auf **Convert to issue** (In Issue umwandeln).
  ![Schaltfläche „Convert to issue“ (In Issue umwandeln)](/assets/images/help/projects/convert-to-issue.png)
4. Wenn sich die Karte auf einem organisationsweiten {% data variables.projects.projects_v1_board %} befindet, wähle im Dropdownmenü das Repository aus, dem du das Issue hinzufügen möchtest.
  ![Dropdownmenü mit Repositorys, in denen ein Issue erstellt werden kann](/assets/images/help/projects/convert-note-choose-repository.png)
5. Wahlweise kannst du den vorab ausgefüllten Issuetitel bearbeiten und den Issuetext eingeben.
  ![Felder für den Issue-Titel und -Text](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Klicke auf **Convert to issue** (In Issue umwandeln).
7. Der Hinweis wird automatisch in einen Issue umgewandelt. Im {% data variables.projects.projects_v1_board %} wird die neue Issuekarte an derselben Stelle angezeigt wie zuvor der Hinweis.

## Einen Hinweis bearbeiten und entfernen

1. Navigiere zu dem Hinweis, den du bearbeiten oder entfernen möchtest.
{% data reusables.project-management.project-note-more-options %}
3. Klicke auf **Edit note** (Hinweis bearbeiten), um den Inhalt des Hinweises zu bearbeiten.
  ![Schaltfläche „Edit note“ (Hinweis bearbeiten)](/assets/images/help/projects/edit-note.png)
4. Klicke auf **Delete note** (Hinweis löschen), um den Inhalt des Hinweises zu löschen.
  ![Schaltfläche „Delete note“ (Hinweis löschen)](/assets/images/help/projects/delete-note.png)

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [Erstellen eines {% data variables.product.prodname_project_v1 %}s](/articles/creating-a-project-board)
- [Bearbeiten eines {% data variables.product.prodname_project_v1 %}s](/articles/editing-a-project-board)
- [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)
