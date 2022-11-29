---
title: Informationen zu Aufgabenlisten
intro: Mithilfe von Aufgabenlisten kannst du deine Issues in kleinere Unteraufgaben unterteilen.
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180785'
---
{% data reusables.projects.tasklists-release-stage %}

## Informationen zu Aufgabenlisten

Aufgabenlisten ermöglichen die Unterstützung von Hierarchien für Issues auf {% data variables.product.product_name %}, damit du den Überblick über deine Issues behalten, deine Issues in kleinere Unteraufgaben unterteilen und neue Beziehungen zwischen deinen Issues erstellen kannst.

Aufgabenlisten bauen auf der vorherigen Iteration von [Betaaufgabenlisten](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) auf und bieten weiterhin die Möglichkeit, Elemente in Issues zu konvertieren, den Status einer Aufgabenliste anzuzeigen und eine Nachverfolgungsbeziehung zwischen Issues zu erstellen.

Die Issues, die du deinen Aufgabenlisten hinzufügst, werden automatisch mit den zugewiesenen Personen und allen ggf. angewendeten Bezeichnungen aufgefüllt.

![Abbildung: Aufgabenlisten in Aktion](/assets/images/help/issues/tasklist-hero.png)

### Informationen zur Integration in {% data variables.projects.projects_v2 %}

 Im Seitenbereich deines Projekts wird die Position eines Issues in der Hierarchie innerhalb eines Breadcrumb-Menüs angezeigt, sodass du durch die Issues in deinen Aufgabenlisten navigieren kannst. Du kannst auch die Felder „Nachverfolgungen“ und „Nachverfolgt von“ zu deinen Projektansichten hinzufügen, um die Beziehungen zwischen deinen Issues schnell zu erkennen. Weitere Informationen findest du unter [Informationen zu den Feldern „Nachverfolgungen“ und „Nachverfolgt von“](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields).

## Erstellen von Aufgabenlisten

Du kannst eine Aufgabenliste mithilfe von Markdown in einer Issuebeschreibung verwenden. Erstelle einen Fenced-Code-Block, und schließe `[tasklist]` neben den öffnenden Graviszeichen ein. Anschließend kannst du jedem Element `- [ ]` voranstellen und Links zu anderen Issues oder Text einfügen. Am Anfang deiner Liste kannst du optional einen Titel als Markdownheader einfügen. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
Dein Markdown-Code wird von {% data variables.product.product_name %} als Aufgabenliste gerendert. Anschließend kannst du über die Benutzeroberfläche Änderungen vornehmen sowie Issues hinzufügen und entwerfen. Wenn du die Issuebeschreibung bearbeitest, kannst du den Markdown-Code direkt ändern oder ihn kopieren, um die Aufgabenliste in anderen Issues zu duplizieren.

Du kannst auch auf der Formatierungssymbolleiste auf {% octicon "checklist" aria-label="The checklist icon" %} klicken, um beim Erstellen eines neuen Issues oder beim Bearbeiten einer Issuebeschreibung eine Aufgabenliste einzufügen.

![Screenshot: Schaltfläche zum Hinzufügen einer Aufgabenliste](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## Hinzufügen von Issues zu einer Aufgabenliste

1. Klicke unten in der Aufgabenliste auf **Element zu Aufgaben hinzufügen**.
   
   ![Screenshot: Schaltfläche „Element zu Aufgaben hinzufügen“](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Wähle das Issue aus, das du deiner Aufgabenliste hinzufügen möchtest.
   
   * Wenn du ein kürzlich aktualisiertes Issue aus dem Repository hinzufügen möchtest, kannst du in der Dropdownliste auf das Issue klicken oder es mithilfe der Pfeiltasten auswählen und anschließend die <kbd>EINGABETASTE</kbd> drücken. 
     
     ![Screenshot: Aktuelle Issues](/assets/images/help/issues/select-recent-issue.png)
     
   * Um nach einem Issue im Repository zu suchen, beginne mit der Eingabe des Titels oder der Nummer des Issues, und klicke auf das Ergebnis, oder wähle es mithilfe der Pfeiltasten aus, und drücke anschließend die <kbd>EINGABETASTE</kbd>.
     
     ![Screenshot: Suchen nach einem Issue](/assets/images/help/issues/search-for-issue.png)
     
   * Wenn du ein Issue direkt unter Verwendung seiner URL hinzufügen möchtest, füge die URL eines Issues ein, und drücke anschließend die <kbd>EINGABETASTE</kbd>.
        
     ![Screenshot: Eingefügte Issue-URL](/assets/images/help/issues/paste-issue-url.png)
     

## Erstellen von Issueentwürfen in einer Aufgabenliste

Mit Issueentwürfen kannst du schnell Ideen erfassen und sie später in Issues konvertieren. Im Gegensatz zu Issues und Pull Requests, auf die von deinen Repositorys aus verwiesen wird, sind Issueentwürfe nur in deiner Aufgabenliste vorhanden.

1. Klicke unten in der Aufgabenliste auf **Element zu Aufgaben hinzufügen**.
   
   ![Screenshot: Schaltfläche „Element zu Aufgaben hinzufügen“](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Gibt den Titel deines Issueentwurfs ein, und drücke die <kbd>EINGABETASTE</kbd>.
   
   ![Screenshot: Titel eines Issueentwurfs](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## Konvertieren von Issueentwürfen in Issues in einer Aufgabenliste

Du kannst Issueentwürfe in Issues konvertieren. Issues werden im gleichen Repository erstellt wie das übergeordnete Issue der Aufgabenliste.

1. Klicke neben dem Issueentwurf, den du konvertieren möchtest, auf {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot des Menüsymbols](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. Klicke auf **In Issue konvertieren**.
   
   ![Screenshot: Option „In Issue konvertieren“](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## Entfernen eines Issues oder Issueentwurfs aus einer Aufgabenliste

Du kannst Issues und Issueentwürfe aus deiner Aufgabenliste entfernen. Issues, die aus einer Aufgabenliste entfernt werden, werden nicht aus dem Repository entfernt.

1. Klicke neben dem Issueentwurf, den du entfernen möchtest, auf {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot des Menüsymbols](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. Klicke im Menü auf **Entfernen**.
   
   ![Screenshot: Option „Entfernen“](/assets/images/help/issues/tasklist-remove.png)
   
## Ändern des Titels einer Aufgabenliste

Wenn du eine neue Aufgabenliste erstellst, lautet der Titel standardmäßig „Aufgaben“. Du kannst den Titel ändern, indem du den Markdown-Code des Issues bearbeitest.

1. Klicke rechts oben im Issuetext auf {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot: Position des Menüsymbols](/assets/images/help/issues/comment-menu.png)
   
1. Klicke im Menü auf **Bearbeiten**.
   
   ![Screenshot: Bearbeitungsoption](/assets/images/help/issues/comment-menu-edit.png)
   
1. Ändere den Header im Fenced-Code-Block in deinen neuen Titel. Ändere beispielsweise `### Tasks` in `### My new title`. 
   
   ![Screenshot: Bearbeitungsoption](/assets/images/help/issues/edit-tasklist-title.png)
   
1. Klicke auf **Kommentar aktualisieren**.

## Kopieren einer Aufgabenliste

Wenn du deine Aufgabenliste mithilfe der Option „Markdown kopieren“ kopierst, kopiert {% data variables.product.product_name %} Markdown in die Zwischenablage und schließt den Namen des Issues ein, sodass du die Aufgabenliste außerhalb von GitHub ohne Kontextverlust einfügen kannst. 

1. Klicke rechts oben in deiner Aufgabenliste auf {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot des Menüsymbols](/assets/images/help/issues/tasklist-kebab.png)
   
1. Klicke im Menü auf **Markdown kopieren**.
   
   ![Screenshot: Option „Markdown kopieren“](/assets/images/help/issues/tasklist-copy-markdown.png)
   
