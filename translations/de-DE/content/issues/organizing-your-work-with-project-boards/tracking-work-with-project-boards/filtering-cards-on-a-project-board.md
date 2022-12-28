---
title: 'Filtern von Karten in einem {% data variables.product.prodname_project_v1 %}'
intro: 'Du kannst die Karten in einem {% data variables.projects.projects_v1_board %} filtern, um bestimmte Karten zu suchen oder eine Teilmenge der Karten anzuzeigen.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109558'
---
{% data reusables.projects.project_boards_old %}

Auf einer Karte kannst du auf eine beliebige zugewiesene Person, einen Meilenstein oder eine Bezeichnung klicken, um das {% data variables.projects.projects_v1_board %} nach dem betreffenden Qualifizierer zu filtern. Um die Suche zu löschen, kannst du erneut auf dieselbe zugewiesene Person, denselben Meilenstein oder dieselbe Bezeichnung klicken.

Du kannst Karten auch über die Suchleiste „Filter cards“ (Karten filtern) im oberen Bereich des betreffenden {% data variables.projects.projects_v1_board %}s suchen. Zum Filtern von Karten kannst du die folgenden Qualifizierer in beliebiger Kombination verwenden oder einfach den Text eingeben, nach dem du suchst.

- Filtern von Karten nach Autor mithilfe von `author:USERNAME`
- Filtern von Karten nach zugewiesener Person mithilfe von `assignee:USERNAME` oder `no:assignee`
- Filtern von Karten nach Bezeichnung mithilfe von `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` oder `no:label`
- Filtern nach Meilenstein mithilfe von `milestone:MY-MILESTONE`
- Filtern von Karten nach Zustand mithilfe von `state:open`, `state:closed` oder `state:merged`
- Filtern nach Reviewstatus mithilfe von `review:none`, `review:required`, `review:approved` oder `review:changes_requested`
- Filtern nach Überprüfungsstatus mithilfe von `status:pending`, `status:success` oder `status:failure`
- Filtern von Karten nach Typ mithilfe von `type:issue`, `type:pr` oder `type:note`
- Filtern von Karten nach Zustand und Typ mithilfe von `is:open`, `is:closed`oder `is:merged` und `is:issue`, `is:pr` oder `is:note`
- Filtern von Karten nach Issues, die über eine schließende Referenz mit einem Pull Request verknüpft sind, mithilfe von `linked:pr`
- Filtern von Karten nach Repository in einem organisationsweiten {% data variables.projects.projects_v1_board %} mit `repo:ORGANIZATION/REPOSITORY`

1. Navigiere zu dem {% data variables.projects.projects_v1_board %}, das die zu filternden Karten enthält.
2. Klicke über den Spalten der Projekttickets in die Suchleiste „Filter cards“ (Tickets filtern), und gib eine Suchabfrage ein, um die Tickets zu filtern.
![Suchleiste zum Filtern von Karten](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Tipp**: Du kannst gefilterte Karten per Drag & Drop oder mithilfe von Tastenkombinationen zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [Hinzufügen von Hinweisen zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)
