---
title: 'Hinzufügten von Elementen zu deinem {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Erfahre, wie du deinen Projekten Pull Requests, Issues und Issueentwürfe einzeln oder in einem Massenvorgang hinzufügst.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107613'
---
Mit deinem Projekt kannst du Issueentwürfe, Issues und Pull Requests nachverfolgen. 

{% note %}

**Hinweis:** Ein Projekt kann maximal {% data variables.projects.item_limit %} Elemente und {% data variables.projects.archived_item_limit %} archivierte Elemente enthalten. {% ifversion projects-v2-auto-archive %}Weitere Informationen zur automatischen Archivierung von Elementen, die bestimmte Kriterien erfüllen, findest du unter [Automatisches Archivieren von Elementen](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically){% endif %}.

{% endnote %}

### Hinzufügen von Issues und Pull Requests zu einem Projekt

#### Einfügen der URL eines Issues oder Pull Requests

{% data reusables.projects.add-item-via-paste %}

#### Suchen nach einem Issue oder Pull Request

{% data reusables.projects.add-item-bottom-row %}
2. Gib <kbd>#</kbd> ein.
3. Wähle das Repository aus, in dem sich der Pull Request oder das Issue befindet. Du kannst einen Teil des Repositorynamens eingeben, um die Optionen einzugrenzen.
  ![Screenshot des Einfügevorgangs beim Hinzufügen einer Issue-URL zum Projekt](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Wähle das Issue oder den Pull Request aus. Du kannst einen Teil des Titels eingeben, um die Optionen einzugrenzen.
  ![Screenshot des Einfügevorgangs beim Hinzufügen einer Issue-URL zum Projekt](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Massenvorgang zum Hinzufügen von Issues und Pull Requests

1. Klicke in der untersten Zeile des Projekts auf {% octicon "plus" aria-label="plus icon" %}.
  ![Screenshot der Schaltfläche „Hinzufügen“ (+) unten im Projekt](/assets/images/help/projects-v2/omnibar-add.png)
1. Klicke auf **Element aus Repository hinzufügen**.
  ![Screenshot des Menüelements „Element aus Repository hinzufügen“](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### Hinzufügen mehrerer Issues oder Pull Requests aus einem Repository

1. Navigiere auf {% data variables.location.product_location %} zum Repository mit den Issues oder Pull Requests, die du deinem Projekt hinzufügen möchtest.
{% data reusables.repositories.sidebar-issue-pr %}
1. Wähle links neben jedem Issuetitel die Issues aus, die du deinem Projekt hinzufügen möchtest.
  ![Screenshot des Kontrollkästchens zum Auswählen des Issues oder Pull Requests](/assets/images/help/issues/select-issue-checkbox.png)
1. Um alle Issues oder Pull Requests auf der Seite auszuwählen, kannst du auch oben in der Liste der Issues oder Pull Requests „Alle“ auswählen. 
  ![Screenshot des Kontrollkästchens zum Auswählen von „Alle“ auf dem Bildschirm](/assets/images/help/issues/select-all-checkbox.png)
1. Klicke oberhalb der Liste der Issues oder Pull Requests auf **Projekte**. 
  ![Screenshot der Option „Projekte“](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Klicke auf die Projekte, denen du die ausgewählten Issues oder Pull Requests hinzufügen möchtest.
  ![Screenshot des Kontrollkästchens zum Auswählen von „Alle“ auf dem Bildschirm](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Zuweisen eines Projekts in einem Issue oder Pull Request

1. Navigiere zu dem Issue oder Pull Request, das bzw. den du einem Projekt hinzufügen möchtest.
2. Klicke in der Randleiste auf **Projekte**.
  ![Screenshot der Option „Projekte“ in der Randleiste des Issues](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Wähle das Projekt aus, dem du das Issue oder den Pull Request hinzufügen möchtest.
  ![Screenshot der Auswahl eines Projekts über die Issuerandleiste ](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Fülle optional die benutzerdefinierten Felder aus.
  ![Projektrandleiste](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Hinzufügen von Issues oder Pull Requests über die Befehlspalette

1. {% data reusables.projects.open-command-palette %}
1. Beginne mit der Eingabe von „Elemente hinzufügen“, und drücke die <kbd>EINGABETASTE</kbd>.
{% data reusables.projects.bulk-add %}

### Erstellen von Issueentwürfen

Issueentwürfe sind nützlich, um Ideen schnell zu dokumentieren. Im Gegensatz zu Issues und Pull Requests, auf die von deinen Repositorys aus verwiesen wird, sind Issueentwürfe nur in deinem Projekt vorhanden.

{% data reusables.projects.add-draft-issue %}

Issueentwürfe können über einen Titel, einen Textkörper, zugewiesene Benutzer*innen sowie benutzerdefinierte Felder aus deinem Projekt verfügen. Damit bei einem Issueentwurf das Repository, Kennzeichnungen oder Meilensteine eingefügt werden können, musst du den Entwurf erst in ein Issue konvertieren. Weitere Informationen findest du unter [Konvertieren von Issueentwürfen in Issues](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues).

{% note %}

**Hinweis**: Benutzer*innen erhalten keine Benachrichtigungen, wenn sie einem Issueentwurf zugewiesen oder dort erwähnt werden, es sei denn, der Issueentwurf wird in ein Issue konvertiert.

{% endnote %}
