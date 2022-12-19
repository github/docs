---
title: 'Ausführliche Informationen zu {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Grundlegendes zur Funktionsweise von {% data variables.product.prodname_github_codespaces %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188264'
---
{% data variables.product.prodname_github_codespaces %} ist eine sofort einsetzbare, cloudbasierte Entwicklungsumgebung, die einen Container nutzt, um dir gängige Sprachen, Tools und Dienstprogramme für die Entwicklung zur Verfügung zu stellen. {% data variables.product.prodname_github_codespaces %} ist außerdem konfigurierbar, sodass du eine angepasste Entwicklungsumgebung für dein Projekt erstellen kannst. Durch die Konfiguration einer benutzerdefinierten Entwicklungsumgebung für dein Projekt kannst du über eine wiederholbare Codespacekonfiguration für alle Benutzer deines Projekts verfügen.

## Erstellen des Codespace

Es gibt eine Reihe von Einstiegspunkten zum Erstellen eines Codespace.

- Eine {% data variables.product.company_short %}-Vorlage oder ein beliebiges Vorlagenrepository auf {% data variables.product.prodname_dotcom_the_website %}, um ein neues Projekt zu starten
- Ein Branch in deinem Repository für die Arbeit an neuen Features
- Ein offener Pull Request zum Erkunden laufender Arbeiten
- Ein Commit im Verlauf eines Repositorys, um einen Fehler zu einem bestimmten Zeitpunkt zu untersuchen

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
Dein Codespace kann kurzlebig sein, wenn du etwas testen musst, oder du kannst zum selben Codespace zurückkehren, um an zeitintensiven Featureaufgaben zu arbeiten. 

Weitere Informationen findest du unter [Erstellen eines Codespace für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository), [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) und [Öffnen eines vorhandenen Codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace).

{% note %}

**Hinweis:** Du kannst mehr als einen Codespace pro Repository oder sogar pro Branch erstellen. Es gibt jedoch Grenzwerte für die Anzahl der Codespaces, die du erstellen kannst, sowie für die Anzahl der Codespaces, die du gleichzeitig ausführen kannst. Wenn du die maximale Anzahl von Codespaces erreichst und versuchst, andere zu erstellen, wird eine Meldung angezeigt, dass du einen vorhandenen Codespace entfernen musst, bevor du einen neuen erstellen kannst.

{% endnote %}

### Der Codespace-Erstellungsprozess

Wenn du einen Codespace erstellst, werden verschiedene Schritte im Hintergrund ausgeführt, bevor der Codespace zur Verfügung steht.

### Schritt 1: VM und Speicher werden deinem Codespace zugewiesen

Beim Erstellen eines Codespace wird ein [flacher Klon](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) deines Repositorys erstellt (oder ein flacher Klon des Vorlagenrepositorys, wenn du einen Codespace mithilfe einer Vorlage erstellst). Das Repository wird auf einem virtuellen Linux-Computer geklont, der für dich sowohl dediziert als auch privat ist. Wenn du eine dedizierte VM hast, wird sichergestellt, dass du über die gesamten Ressourcen dieses Computers verfügst, der dir zur Verfügung steht. Bei Bedarf hast du auch vollständigen Root-Zugriff auf deinen Container.

### Schritt 2: Container wird erstellt

{% data variables.product.prodname_github_codespaces %} verwendet einen Container als Entwicklungsumgebung. Dieser Container wird basierend auf Konfigurationen erstellt, die du in einer Datei vom Typ `devcontainer.json` und optional in einem Dockerfile definieren kannst. Wenn du einen Codespace mithilfe der leeren Vorlage von {% data variables.product.company_short %} oder auf der Grundlage eines Repositorys ohne Datei vom Typ `devcontainer.json` erstellst, verwendet {% data variables.product.prodname_github_codespaces %} ein Standardimage, das über zahlreiche Sprachen und Runtimes verfügt. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers). Ausführliche Informationen zum Inhalt des Standardimage findest du im Repository [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Hinweis:** Wenn du Git-Hooks in deinem Codespace verwenden und alles im [Git-Vorlagenverzeichnis](https://git-scm.com/docs/git-init#_template_directory) auf deinen Codespace anwenden möchtest, musst du im Schritt 4 nach der Erstellung des Containers Hooks einrichten.

Da dein Repository vor der Erstellung des Containers auf der Host-VM geklont wird, gelten alle Elemente im [Git-Vorlagenverzeichnis](https://git-scm.com/docs/git-init#_template_directory) nicht in deinem Codespace, es sei denn, du richtest die `devcontainer.json`-Konfigurationsdatei mit dem `postCreateCommand` in Schritt 4 ein. Weitere Informationen findest du unter [Schritt 4: Einrichtung nach der Erstellung](#step-4-post-creation-setup).

{% endnote %}

### Schritt 3: Herstellen einer Verbindung mit dem Codespace

Wenn dein Container erstellt wurde und alle anderen Initialisierungen ausgeführt wurden, wirst du mit deinem Codespace verbunden. Für die Verbindungsherstellung kann Folgendes verwendet werden:

* Webbrowser
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### Schritt 4: Einrichtung nach der Erstellung

Sobald du mit deinem Codespace verbunden bist, setzt das automatisierte Setup möglicherweise die Erstellung basierend auf der Konfiguration fort, die in der Datei `devcontainer.json` angegeben ist. Möglicherweise wird die Ausführung von `postCreateCommand` und `postAttachCommand` angezeigt.

Wenn du Git-Hooks in deinem Codespace verwenden möchtest, richte Hooks mithilfe der [`devcontainer.json`-Lebenszyklusskripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) ein (z. B. `postCreateCommand`). Weitere Informationen zur Verwendung findest du in der [`devcontainer.json`-Referenz](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

Wenn du über ein öffentliches Dotfiles-Repository für {% data variables.product.prodname_github_codespaces %} verfügst, kannst du es für die Verwendung mit neuen Codespaces aktivieren. Wenn es aktiviert ist, werden deine Dotfiles in den Container geklont, und das Installationsskript wird aufgerufen. Weitere Informationen findest du unter [Personalisieren von {% data variables.product.prodname_github_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles). 

Wenn du den Codespace auf der Grundlage eines Repositorys erstellt hast, wird letztlich der gesamte Verlauf des Repositorys mit einem vollständigen Klon kopiert. Wenn du den Codespace mithilfe einer Vorlage erstellt hast, bleibt nicht der gesamte Verlauf des Vorlagenrepositorys erhalten. Stattdessen beginnst du mit einem anfänglichen Commit für die Inhalte des Vorlagenrepositorys (es sei denn, du verwendest die leere Vorlage).

Während der Einrichtung nach der Erstellung kannst du weiterhin das integrierte Terminal verwenden und deine Dateien bearbeiten, aber achte darauf, Racebedingungen zwischen deiner Arbeit und den ausgeführten Befehlen zu vermeiden.
## {% data variables.product.prodname_codespaces %}-Lebenszyklus

### Speichern von Dateien im Codespace

Speichere Änderungen an Dateien auf normale Weise – je nachdem, welchen Editor du verwendest.

Wenn du an Codespaces in {% data variables.product.prodname_vscode %} arbeitest, kannst du [automatisches Speichern](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) aktivieren, um sicherzustellen, dass deine Änderungen immer gespeichert werden. 

### Schließen oder Beenden des Codespace

Dein Codespace wird weiter ausgeführt, während du ihn verwendest. Nach einem gewissen Inaktivitätszeitraum tritt jedoch ein Timeout auf. Dateiänderungen über den Editor und Terminalausgaben zählen als Aktivität, sodass für den Codespace kein Timeout auftritt, wenn die Terminalausgabe fortgesetzt wird. Der Timeoutzeitraum bei Inaktivität beträgt standardmäßig 30 Minuten. Du kannst deine eigene Timeouteinstellung für von dir erstellte Codespaces definieren. Diese kann jedoch durch eine Timeoutrichtlinie der Organisation außer Kraft gesetzt werden. Weitere Informationen findest du unter [Festlegen eines Timeoutzeitraums für Codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces). 

Wenn für einen Codespace ein Timeout auftritt, wird er beendet. Du kannst ihn allerdings über den Browsertab (bei Verwendung des Codespace im Browser), innerhalb von {% data variables.product.prodname_vscode_shortname %} oder über die Liste der Codespaces unter [https://github.com/codespaces](https://github.com/codespaces) neu starten.

Zum Beenden deines Codespace stehen folgende Möglichkeiten zur Verfügung:

* Im Browser: Klicke unter [https://github.com/codespaces](https://github.com/codespaces) in der Liste mit den Codespaces rechts neben dem Codespace, den du beenden möchtest, auf die Auslassungspunkte ( **...** ), und klicke anschließend auf **Codespace beenden**.
* In {% data variables.product.prodname_vscode_shortname %}: Öffne die [{% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) – beispielsweise durch Drücken von <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>EINGABETASTE</kbd> (Windows/Linux) oder <kbd>UMSCHALT</kbd>+<kbd>BEFEHL</kbd>+<kbd>P</kbd> (Mac) –, gib `Codespaces: stop` ein, und drücke anschließend die <kbd>EINGABETASTE</kbd>.
* Im JetBrains-Client: Klicke im oberen Bereich des {% data variables.product.prodname_github_codespaces %}-Toolfensters auf die Schaltfläche zum Beenden. Weitere Informationen findest du unter [Beenden und Starten eines Codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace) auf der Registerkarte „JetBrains-IDEs“.
* In einem Terminalfenster: Verwende den {% data variables.product.prodname_cli %}-Befehl `gh codespace stop`. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} mit der {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces).

Wenn du den Codespace schließt, ohne den Beendigungsbefehl auszuführen (beispielsweise durch Schließen des Browsertabs), oder den Codespace ohne Interaktion verlässt, werden der Codespace und seine laufenden Prozesse für die Dauer des Timeoutzeitraums bei Inaktivität fortgesetzt. 

Wenn du den Codespace schließt oder beendest, werden alle ausgecheckten Änderungen beibehalten, bis du noch mal eine Verbindung mit dem Codespace herstellst.

## Ausführen deiner Anwendung

Portweiterleitung bietet Zugriff auf TCP-Ports, die innerhalb deines Codespace ausgeführt werden. Wenn du beispielsweise eine Webanwendung auf Port 4000 in deinem Codespace ausführst, kannst du diesen Port automatisch weiterleiten, um die Anwendung über deinen Browser zugänglich zu machen.

Die Portweiterleitung bestimmt, auf welche Ports du über den Remotecomputer zugreifen kannst. Auch wenn du keinen Port weiterleitest, ist dieser Port weiterhin für andere Prozesse zugänglich, die innerhalb des Codespace selbst ausgeführt werden.

![Diagramm mit der Funktionsweise der Portweiterleitung in einem Codespace](/assets/images/help/codespaces/port-forwarding.png)

Wenn eine Anwendung, die innerhalb von {% data variables.product.prodname_github_codespaces %} ausgeführt wird, einen Port an die Konsole ausgibt, erkennt {% data variables.product.prodname_github_codespaces %} das Localhost-URL-Muster und leitet den Port automatisch weiter. Du kannst auf die URL im Terminal oder auf den Link in der Popupbenachrichtigung klicken, die rechts unten in {% data variables.product.prodname_vscode_shortname %} eingeblendet wird, um den Port in einem Browser zu öffnen. Standardmäßig leitet {% data variables.product.prodname_github_codespaces %} den Port mit HTTP weiter. Weitere Informationen zur Portweiterleitung findest du unter [Weiterleiten von Ports in deinem Codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Während Ports automatisch weitergeleitet werden können, sind sie für das Internet nicht öffentlich zugänglich. Standardmäßig sind alle Ports privat, aber du kannst einen Port manuell für deine Organisation oder die Öffentlichkeit verfügbar machen und dann den Zugriff über eine URL freigeben. Weitere Informationen findest du unter [Freigeben eines Ports](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port).

Die Ausführung deiner Anwendung, wenn du zum ersten Mal in deinen Codespace gelangst, kann zu einer schnellen inneren Entwicklungsschleife führen. Während der Bearbeitung werden deine Änderungen automatisch gespeichert und sind auf deinem weitergeleiteten Port verfügbar. Zum Anzeigen von Änderungen wechselst du zurück zur ausgeführten Anwendungsregisterkarte in deinem Browser und aktualisierst sie.

## Commit und Push deiner Änderungen

Git ist standardmäßig in deinem Codespace installiert, sodass du dich auf deinen vorhandenen Git-Workflow verlassen kannst. Du kannst mit Git in deinem Codespace entweder über das Terminal oder über die Quellcodeverwaltungsfeatures von {% data variables.product.prodname_vscode_shortname %} oder JetBrains arbeiten.

Bei Verwendung eines bereits vorhandenen Repositorys kannst du einen Codespace auf der Grundlage eines beliebigen Branchs, Commits oder Pull Requests in dem Repository erstellen. Alternativ kannst du innerhalb deines aktiven Codespace zu einem neuen oder bereits vorhandenen Branch wechseln. Da {% data variables.product.prodname_github_codespaces %} als kurzlebig konzipiert ist, kannst du es als isolierte Umgebung verwenden, um zu experimentieren, die Pull Requests von Teamkolleg*innen zu überprüfen oder Mergekonflikte zu beheben.

Wenn du in einem Codespace arbeitest, der mithilfe einer Vorlage erstellt wurde, ist Git standardmäßig installiert. Du musst deinen Codespace jedoch in einem Remoterepository veröffentlichen, um deine Arbeit zu speichern und mit anderen teilen zu können. Wenn du die leere Vorlage von {% data variables.product.company_short %} als Ausgangspunkt verwendest, musst du zunächst deinen Arbeitsbereich als Git-Repository initialisieren (beispielsweise durch Eingeben von `git init`), um die Quellcodeverwaltung innerhalb des Codespace verwenden zu können.

Weitere Informationen findest du unter [Verwenden der Quellcodeverwaltung in deinem Codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace).

{% note %}

**Hinweis:** Commits aus deinem Codespace werden dem Namen und der öffentlichen E-Mail zugewiesen, die unter https://github.com/settings/profile konfiguriert sind. Ein Token für das Repository, das in der Umgebung als `GITHUB_TOKEN` enthalten ist, und deine GitHub-Anmeldeinformationen werden zur Authentifizierung verwendet.

{% endnote %}

## Personalisieren deines Codespace mit Erweiterungen oder Plug-Ins

Du kannst Plug-Ins und Erweiterungen innerhalb eines Codespace hinzufügen, um die Verwendung von JetBrains bzw. {% data variables.product.prodname_vscode_shortname %} zu personalisieren.

### {% data variables.product.prodname_vscode_shortname %}-Erweiterungen

Wenn du deine Codespaces in der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung oder im Webclient bearbeitest, kannst du jede benötigte Erweiterung aus dem {% data variables.product.prodname_vscode_marketplace %} hinzufügen. Informationen zur Ausführung von Erweiterungen in {% data variables.product.prodname_github_codespaces %}, findest du in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %} unter [Unterstützen von Remoteentwicklung und {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions). 

Wenn du bereits {% data variables.product.prodname_vscode_shortname %} nutzt, kannst du die [Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) verwenden, um Erweiterungen, Einstellungen, Designs und Tastenkombinationen zwischen deiner lokalen Instanz und von dir erstellten Codespaces automatisch zu synchronisieren.

### JetBrains-Plug-Ins

Wenn du deine Codespaces in einer JetBrains-IDE bearbeitest, kannst du Plug-Ins aus dem JetBrains Marketplace hinzufügen.

1. Klicke auf **JetBrains-Client** und anschließend auf **Einstellungen**.
1. Klicke im Dialogfeld „Einstellungen“ entweder auf **Plug-Ins auf dem Host**, um ein Plug-In in der vollwertigen, remote ausgeführten JetBrains-IDE zu installieren, oder auf **Plug-Ins**, um ein Plug-In auf dem lokalen Client zu installieren (beispielsweise, um das Design der Benutzeroberfläche zu ändern). 
1. Klicke auf die Registerkarte **Marketplace**.

   ![Screenshot: Registerkarte „Marketplace“ für „Plug-Ins auf dem Host“](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Klicke neben dem benötigten Plug-In auf **Installieren**.

## Weitere nützliche Informationen

- [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)
- [Verwalten der Kosten von {% data variables.product.prodname_github_codespaces %} in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
- [Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)
- [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle)
