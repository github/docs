---
title: Verwalten von Prebuilds
shortTitle: Manage prebuilds
intro: 'Du kannst die Prebuildkonfigurationen für dein Repository überprüfen, ändern und löschen.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160190'
---
## Überprüfen, Ändern und Löschen von Prebuildkonfigurationen

Die von dir konfigurierten Prebuilds für ein Repository werden mit einem {% data variables.product.prodname_actions %}-Workflow erstellt und aktualisiert, der vom {% data variables.product.prodname_github_codespaces %}-Dienst verwaltet wird. 

Je nach den Einstellungen in einer Prebuildkonfiguration kann der Workflow zur Aktualisierung des Prebuilds durch diese Ereignisse ausgelöst werden:

* Erstellen oder Aktualisieren der Prebuildkonfiguration
* Pushen eines Commits oder Pull Requests an einen Branch, der für Prebuilds konfiguriert ist
* Ändern einer der Konfigurationsdateien für den Entwicklercontainer
* Ein Zeitplan, den du in der Prebuildkonfiguration festgelegt hast
* Manuelles Auslösen des Workflows

Die Einstellungen in der Prebuildkonfiguration bestimmen, welche Ereignisse automatisch eine Aktualisierung des Prebuilds auslösen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds). 

Personen mit Administratorzugriff auf das Repository können den Fortschritt von Prebuilds überprüfen und Prebuildkonfigurationen bearbeiten und löschen. 

### Anzeigen des Fortschritts von Prebuilds
Du kannst den aktuellen Status der letzten Workflowausführung für jede von dir eingerichtete Prebuildkonfiguration auf der {% data variables.product.prodname_github_codespaces %}-Seite in deinen Repositoryeinstellungen anzeigen. Diese Status lauten beispielsweise „Wird derzeit ausgeführt“ oder „Zuletzt vor einer Stunde ausgeführt“.

Klicke auf **Ausgabe anzeigen**, um die Protokollausgabe für die letzte Ausführung des Prebuildworkflows anzuzeigen.

![Die Schaltfläche „Ausgabe anzeigen“](/assets/images/help/codespaces/prebuilds-see-output.png) 

Hier wird die Ausgabe der letzten Workflowausführung auf der Registerkarte **Aktionen** angezeigt.

![Die Ausgabe des Prebuildworkflows](/assets/images/help/codespaces/prebuilds-log-output.png) 

Alternativ kannst du auf die Schaltfläche mit Auslassungspunkten klicken und dann im Dropdownmenü **Ausführungen anzeigen** auswählen, um alle Ausführungen des Prebuildworkflows anzuzeigen, der einem bestimmten Branch zugeordnet ist.

![Die Option „Ausführungen anzeigen“ im Dropdownmenü](/assets/images/help/codespaces/prebuilds-view-runs.png) 

Hier wird der Ausführungsverlauf der Prebuildworkflows aus dem zugeordneten Branch angezeigt.

![Der Ausführungsverlauf der Workflows](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### Bearbeiten einer Prebuildkonfiguration

1. Klicke auf der {% data variables.product.prodname_codespaces %}-Seite deiner Repositoryeinstellungen auf die Auslassungspunkte rechts neben der Prebuildkonfiguration, die du bearbeiten möchtest.
1. Klicke im Dropdownmenü auf **Bearbeiten**.
 
   ![Die Option „Bearbeiten“ im Dropdownmenü](/assets/images/help/codespaces/prebuilds-edit.png) 

1. Nimm die erforderlichen Änderungen an der Prebuildkonfiguration vor, und klicke dann auf **Aktualisieren**. 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Deaktivieren einer Prebuildkonfiguration

Um die Aktualisierung von Prebuilds für eine Konfiguration anzuhalten, kannst du Workflowausführungen für die Konfiguration deaktivieren. Wenn du die Workflowausführungen für eine Prebuildkonfiguration deaktivierst, werden die zuvor erstellten Prebuilds für diese Konfiguration nicht gelöscht. Folglich werden die Codespaces weiterhin anhand eines vorhandenen Prebuilds generiert.

Das Deaktivieren der Workflowausführungen für eine Prebuildkonfiguration ist nützlich, wenn du Fehler bei der Prebuilderstellung untersuchen musst.

1. Klicke auf der {% data variables.product.prodname_codespaces %}-Seite der Repositoryeinstellungen auf die Auslassungspunkte rechts neben der Prebuildkonfiguration, die du deaktivieren möchtest.
1. Klicke im Dropdownmenü auf **Ausführungen deaktivieren**.

   ![Die Option „Ausführungen deaktivieren“ im Dropdownmenü](/assets/images/help/codespaces/prebuilds-disable.png)

1. Um zu bestätigen, dass du diese Konfiguration deaktivieren möchtest, klicke auf **OK**.

### Löschen einer Prebuildkonfiguration

Durch das Löschen einer Prebuildkonfiguration werden auch alle zuvor erstellten Prebuilds für diese Konfiguration gelöscht. Dadurch stehen die von dieser Konfiguration erstellten Prebuilds kurz nach dem Löschen der Konfiguration nicht mehr zur Verfügung, wenn du einen neuen Codespace erstellst.

Nach dem Löschen einer Prebuildkonfigurationen werden Workflowausführungen für diese Konfiguration, die in der Warteschlange eingereiht waren oder bereits gestartet wurden, weiterhin ausgeführt. Sie werden im Ausführungsverlauf der Workflows zusammen mit zuvor abgeschlossen Workflowausführungen aufgeführt.

1. Klicke auf der {% data variables.product.prodname_codespaces %}-Seite deiner Repositoryeinstellungen auf die Auslassungspunkte rechts neben der Prebuildkonfiguration, die du löschen möchtest.
1. Klicke im Dropdownmenü auf **Löschen**.

   ![Die Option „Löschen“ im Dropdownmenü](/assets/images/help/codespaces/prebuilds-delete.png)

1. Klicke auf **OK**, um das Löschen zu bestätigen.

### Manuelles Auslösen von Prebuilds

Es kann nützlich sein, eine Workflowausführung für eine Prebuildkonfiguration manuell auszulösen. Im Allgemeinen ist dies nur notwendig, wenn du ein Problem mit dem Workflow für eine Prebuildkonfiguration debuggst.

1. Klicke auf der {% data variables.product.prodname_codespaces %}-Seite deiner Repositoryeinstellungen auf die Auslassungspunkte rechts neben der Prebuildkonfiguration, deren Workflows du auslösen möchtest.
1. Klicke im Dropdownmenü auf **Manuell auslösen**.

   ![Die Option „Manuell auslösen“ im Dropdownmenü](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## Weiterführende Themen

- [Problembehandlung bei Prebuilds](/codespaces/troubleshooting/troubleshooting-prebuilds)
