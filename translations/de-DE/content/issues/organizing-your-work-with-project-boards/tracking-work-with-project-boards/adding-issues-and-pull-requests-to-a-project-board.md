---
title: 'Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst einem {% data variables.projects.projects_v1_board %} Issues und Pull Requests in Form von Karten hinzufügen und sie in Spalten einteilen.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109694'
---
{% data reusables.projects.project_boards_old %}

Du kannst deinem {% data variables.projects.projects_v1_board %} Issue- oder Pull Request-Karten hinzufügen, indem du:
- Karten aus dem Abschnitt **Selektierung** auf die Randleiste ziehst.
- Die Issue- oder Pull-Request-URL in ein Ticket eingibst.
- Suchen nach Issues oder Pull Requests in der Suchrandleiste des {% data variables.projects.projects_v1_board %}s.

In jeder Projektspalte können maximal 2.500 Tickets enthalten sein. Wenn die maximale Anzahl von Karten in einer Spalte erreicht ist, kannst du keine Karten mehr in diese Spalte verschieben.

![Mauszeiger verschiebt Issue-Ticket von der Einteilungsseitenleiste zur Projektboardspalte](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Hinweis**: Du kannst deinem Projektboard auch Notizen hinzufügen, die als Erinnerungen an Aufgaben oder Verweise auf Issues und Pull Requests aus einem beliebigen Repository auf {% data variables.product.product_name %} dienen. Zudem kannst du dem {% data variables.projects.projects_v1_board %} über Notizen auch verwandte Informationen hinzufügen. Weitere Informationen findest du unter [Hinzufügen von Notizen zu einem Projektboard](/articles/adding-notes-to-a-project-board).

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Wenn du nach Issues und Pull Requests suchst, die du deinem {% data variables.projects.projects_v1_board %} hinzufügen möchtest, deckt die Suche automatisch die verlinkten Repositorys ab. Du kannst diese Qualifizierer entfernen, um die Suche in allen Repositorys der Organisation auszuführen. Weitere Informationen findest du unter [Verknüpfen eines Repositorys mit einem Projektboard](/articles/linking-a-repository-to-a-project-board).

## Hinzufügen von Issues und Pull Requests zu einem {% data variables.projects.projects_v1_board %}

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, dem Sie Issues und Pull Requests hinzufügen möchten.
2. Klicke in deinem {% data variables.projects.projects_v1_board %} auf {% octicon "plus" aria-label="The plus icon" %} **Karten hinzufügen**.
![Schaltfläche „Karten hinzufügen“](/assets/images/help/projects/add-cards-button.png)
3. Suche mithilfe von Suchqualifizierern nach den Issues und Pull Requests, die du deinem {% data variables.projects.projects_v1_board %} hinzufügen möchtest. Weitere Informationen zu Suchqualifizierern, die du verwenden kannst, findest du unter [Suchen von Issues](/articles/searching-issues).
  ![Suchen von Issues und Pull Requests](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Tipps:**
    - Du kannst auch einen Issue oder Pull Request hinzufügen, indem du die URL in eine Karte eingibst.
    - Wenn du an einer bestimmten Funktion arbeitest, kannst du eine Kennzeichnung auf jeden zu dieser Funktion gehörenden Issue oder Pull Request anwenden. Dann kannst deinem {% data variables.projects.projects_v1_board %} problemlos Karten hinzufügen, indem du nach dem Namen der Bezeichnung suchst. Weitere Informationen findest du unter [Anwenden von Bezeichnungen auf Issues und Pull Requests](/articles/applying-labels-to-issues-and-pull-requests).

  {% endtip %}
4. Ziehe die Karte, die du deinem {% data variables.projects.projects_v1_board %} hinzufügen möchtest, aus der gefilterten Liste der Issues und Pull Requests in die richtige Spalte. Alternativ kannst du Karten auch mithilfe von Tastenkürzeln verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Tipp**: Du kannst Karten per Drag & Drop oder mit Tastenkombinationen neu anordnen und zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Hinzufügen von Issues und Pull Requests zu einem {% data variables.projects.projects_v1_board %} über die Randleiste

1. Klicke rechts neben einem Issue oder Pull Request auf **Projekte {% octicon "gear" aria-label="The Gear icon" %}** .
  ![Projektboard-Schaltfläche auf der Randleiste](/assets/images/help/projects/sidebar-project.png)
2. Klicke auf die Registerkarte **Zuletzt verwendet**, **Repository**, **Benutzer** oder **Organisation** für das {% data variables.projects.projects_v1_board %}, dem du ein Element hinzufügen möchtest.
  ![Registerkarten „Zuletzt verwendet“, „Repository“ und „Organisation“](/assets/images/help/projects/sidebar-project-tabs.png)
3. Gib den Namen des Projekts im Feld **Projekte filtern** ein.
  ![Projektboard-Suchfeld](/assets/images/help/projects/sidebar-search-project.png)
4. Wähle ein oder mehrere {% data variables.projects.projects_v1_boards %} aus, dem du das Issue oder den Pull Request hinzufügen möchten.
  ![Ausgewähltes Projektboard](/assets/images/help/projects/sidebar-select-project.png)
5. Klicke auf {% octicon "triangle-down" aria-label="The down triangle icon" %} und anschließend auf die Spalte, die das Issue oder den Pull Request enthalten soll. Die Karte wird an das Ende der ausgewählten {% data variables.projects.projects_v1_board %}spalte verschoben.
  ![Menü zum Verschieben von Karten in eine Spalte](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [Bearbeiten eines {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)
- [Filtern von Karten für ein {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)
