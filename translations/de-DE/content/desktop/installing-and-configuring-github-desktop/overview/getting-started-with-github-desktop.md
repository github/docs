---
title: Erste Schritte mit GitHub Desktop
intro: 'Hier erfährst du, wie du {% data variables.product.prodname_desktop %} einrichtest, authentifizierst und konfigurierst, um direkt von deinem Computer zu Projekten beitragen zu können.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105255'
---
## Einführung
{% data variables.product.prodname_desktop %} ist eine Anwendung, mit der du mit {% data variables.product.prodname_dotcom %} über eine GUI anstelle der Befehlszeile oder eines Webbrowsers interagieren kannst. {% data variables.product.prodname_desktop %} ermutigt Dich und dein Team, unter Verwendung von Best Practices mit Git und {% data variables.product.prodname_dotcom %} zusammenzuarbeiten. Mit {% data variables.product.prodname_desktop %} kannst du die meisten Git-Befehle mit visueller Bestätigung der Änderungen über deinen Desktop durchführen. {% data variables.product.prodname_desktop %} ermöglicht das Übertragen von Daten per Push oder Pull in oder aus Remoterepositorys sowie das Klonen von Remoterepositorys und die Verwendung von Tools für die Zusammenarbeit, wie das Attribuieren von Commits und das Erstellen von Pull Requests.

Dieser Leitfaden hilft dir bei den ersten Schritten mit {% data variables.product.prodname_desktop %} durch Einrichten der Anwendung, Authentifizieren deines Kontos, Konfigurieren grundlegender Einstellungen und Erläutern der Grundlagen der Projektverwaltung mit {% data variables.product.prodname_desktop %}. Nachdem du diesen Leitfaden durchgearbeitet hast, kannst du mithilfe von {% data variables.product.prodname_desktop %} zusammen mit anderen Personen an Projekten arbeiten und eine Verbindung mit Remoterepositorys herstellen.

Ein grundlegendes Verständnis von Git und {% data variables.product.prodname_dotcom %} kann hilfreich sein, um die ersten Schritte mit {% data variables.product.prodname_desktop %} durchzuführen. Weitere Informationen findest du in den folgenden Artikeln.

- [Verwenden von Git](/github/getting-started-with-github/using-git)
- [Informationen zu {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)
- [Erste Schritte mit {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)

{% data variables.product.prodname_desktop %} ist ein Open-Source-Projekt. Du kannst die Roadmap anzeigen, zum Projekt beitragen oder ein Issue öffnen, um Feedback anzugeben oder Featureanfragen zu stellen. Weitere Informationen findest du im [`desktop/desktop`](https://github.com/desktop/desktop)-Repository.

## Teil 1: Installieren und Authentifizieren
Du kannst {% data variables.product.prodname_desktop %} unter jedem unterstützten Betriebssystem installieren. Weitere Informationen findest du unter [Unterstützte Betriebssysteme](/desktop/getting-started-with-github-desktop/supported-operating-systems).

Um {% data variables.product.prodname_desktop %} zu installieren, besuche die Downloadseite für [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Weitere Informationen findest du unter [Installieren von {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop).

Nachdem du {% data variables.product.prodname_desktop %} installiert hast, kannst du die Anwendung mit deinem Konto bei {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} authentifizieren. Durch die Authentifizierung kannst du eine Verbindung mit Remoterepositorys auf {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} herstellen.

{% mac %}

1. Bevor du dich bei {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} authentifizieren kannst, benötigst du ein Konto. Weitere Informationen zum Erstellen eines Kontos findest du unter [Registrieren für ein neues {% data variables.product.prodname_dotcom %}-Konto](/github/getting-started-with-github/signing-up-for-a-new-github-account), oder wende dich an den {% data variables.product.prodname_enterprise %}-Websiteadministrator.

2. Klicke im Dropdownmenü von {% data variables.product.prodname_desktop %} auf **Einstellungen**. Klicke im Fenster „Einstellungen“ auf **Konten**, und führe die Schritte für die Anmeldung aus. Weitere Informationen zur Authentifizierung findest du unter [Authentifizieren bei {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).
  ![Die Schaltfläche „Sign in“ (Anmelden) für GitHub](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Bevor du dich bei {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} authentifizieren kannst, benötigst du ein Konto. Weitere Informationen zum Erstellen eines Kontos findest du unter [Registrieren für ein neues {% data variables.product.prodname_dotcom %}-Konto](/github/getting-started-with-github/signing-up-for-a-new-github-account), oder wende dich an den {% data variables.product.prodname_enterprise %}-Websiteadministrator.

2. Klicke im Menü „Datei“ auf **Optionen**. Klicke im Fenster „Optionen“ auf **Konten**, und führe die Schritte für die Anmeldung aus. Weitere Informationen zur Authentifizierung findest du unter [Authentifizieren bei {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).
  ![Die Schaltfläche „Sign in“ (Anmelden) für GitHub](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Teil 2: Konfigurieren und Anpassen von {% data variables.product.prodname_desktop %}
Nach der Installation von {% data variables.product.prodname_desktop %} kannst du die App so konfigurieren und anpassen, dass sie deinen Anforderungen optimal entspricht.

{% mac %}

Im Fenster mit den {% data variables.product.prodname_desktop %}-Einstellungen kannst du Konten auf {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} verbinden oder entfernen, einen Standard-Text-Editor oder eine Standardshell auswählen, deine Git-Konfiguration bearbeiten, das Aussehen von {% data variables.product.prodname_desktop %} ändern, Systemdialogfelder anpassen und Datenschutzeinstellungen festlegen. Weitere Informationen findest du unter [Konfigurieren von Grundeinstellungen](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

  ![Die grundlegenden Einstellungen im Einstellungsfenster](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Im Fenster mit den {% data variables.product.prodname_desktop %}-Optionen kannst du Konten auf {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} verbinden oder entfernen, einen Standard-Text-Editor oder eine Standardshell auswählen, deine Git-Konfiguration bearbeiten, das Aussehen von {% data variables.product.prodname_desktop %} ändern, Systemdialogfelder anpassen und Datenschutzeinstellungen festlegen. Weitere Informationen findest du unter [Konfigurieren von Grundeinstellungen](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

  ![Die grundlegenden Einstellungen im Fenster „Optionen“](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## Teil 3: Beitragen zu Projekten mit {% data variables.product.prodname_desktop %}
Nach der Installation, Authentifizierung und Konfiguration der App kannst du mit der Verwendung von {% data variables.product.prodname_desktop %} beginnen. Du kannst Repositorys erstellen, hinzufügen oder klonen und {% data variables.product.prodname_desktop %} verwenden, um Beiträge zu deinen Repositorys zu verwalten.

### Erstellen, Hinzufügen und Klonen von Repositorys
Du kannst ein neues Repository erstellen, indem du das Menü „Datei“ auswählst und auf **Neues Repository** klickst. Weitere Informationen findest du unter [Erstellen deines ersten Repositorys mit {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop).

Du kannst ein Repository von deinem lokalen Computer hinzufügen, indem du das Menü „Datei“ auswählst und auf **Lokales Repository hinzufügen** klickst. Weitere Informationen findest du unter [Hinzufügen eines Repositorys von deinem lokalen Computer zu {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop).

Du kannst ein Repository aus {% data variables.product.prodname_dotcom %} klonen, indem du das Menü „Datei“ auswählst und auf **Repository klonen** klickst. Weitere Informationen findest du unter [Klonen und Forken von Repositorys über {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop).

{% mac %}

  ![Die Optionen des Menüs „Datei“ zum Erstellen, Hinzufügen und Klonen von Repositorys](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Die Optionen des Menüs „Datei“ zum Erstellen, Hinzufügen und Klonen von Repositorys](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Änderungen an einem Branch vornehmen
Du kannst {% data variables.product.prodname_desktop %} zur Erstellung eines Projektbranchs verwenden. Durch Branches wird deine Entwicklungsarbeit von anderen Branches im Repository isoliert, sodass du sicher mit Änderungen experimentieren kannst. Weitere Informationen findest du unter [Verwalten von Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches).

  ![Schaltfläche „Neuer Branch“](/assets/images/help/desktop/new-branch-button-mac.png)

Nachdem du Änderungen an einem Branch vorgenommen hast, kannst du sie in {% data variables.product.prodname_desktop %} überprüfen und einen Commit vornehmen, um deine Änderungen nachzuverfolgen. Weitere Informationen findest du unter [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project).

  ![Anzeigen und Durchführen von Commits](/assets/images/help/desktop/commit-button.png)

Wenn du remote auf deine Änderungen zugreifen oder sie für andere Personen freigeben möchtest, kannst du deine Commits an {% data variables.product.prodname_dotcom %} pushen. Weitere Informationen findest du unter [Pushen von Änderungen auf {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github).

### Zusammenarbeiten mit {% data variables.product.prodname_desktop %}
Mithilfe von {% data variables.product.prodname_desktop %} kannst du Issues oder Pull Requests erstellen, um mit anderen Personen an Projekten zusammenzuarbeiten. Issues helfen dir dabei, Ideen nachzuverfolgen und mögliche Änderungen an Projekten zu besprechen. Anhand von Pull Requests kannst du deine vorgeschlagenen Änderungen mit anderen Personen teilen, Feedback erhalten und Änderungen in einem Projekt zusammenführen. Weitere Informationen findest du unter [Erstellen eines Issues oder Pull Requests](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request).

Du kannst deine eigenen oder die Pull Requests von Mitarbeitern in {% data variables.product.prodname_desktop %} anzeigen. Wenn du einen Pull Request in {% data variables.product.prodname_desktop %} anzeigst, siehst du alle vorgeschlagenen Änderungen und kannst zusätzliche Änderungen vornehmen, indem du die Dateien und Repositorys des Projekts in deinem Standard-Text-Editor öffnest. Weitere Informationen findest du unter [Anzeigen eines Pull Requests in {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop).

### Synchronisieren deines lokalen Repositorys
Wenn du Änderungen an deinen lokalen Repositorys vornimmst oder andere Personen Änderungen an den Remoterepositorys vornehmen, musst du deine lokale Kopie des Projekts mit dem Remoterepository synchronisieren. {% data variables.product.prodname_desktop %} kann deine lokale Kopie eines Projekts durch Pushen und Pullen von Commits mit der Remoteversion synchronisieren. Weitere Informationen findest du unter [Synchronisieren deines Branchs](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch).

## Weitere Informationsquellen
- [Installieren und Authentifizieren von {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)
- [Beitragen und Zusammenarbeiten mithilfe von {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)
