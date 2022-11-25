---
title: Personalisieren von GitHub Codespaces für dein Konto
shortTitle: Personalize your codespaces
intro: 'Du kannst {% data variables.product.prodname_github_codespaces %} personalisieren, indem du ein `dotfiles`-Repository in {% data variables.product.product_name %} oder die Einstellungssynchronisierung verwendest.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160257'
---
## Informationen zur Personalisierung von {% data variables.product.prodname_codespaces %}

Bei Verwendung einer Entwicklungsumgebung ist das Anpassen der Einstellungen und Tools an deine Präferenzen und Workflows ein wichtiger Schritt. In {% data variables.product.prodname_github_codespaces %} gibt es zwei mögliche Hauptmethoden zur Personalisierung deiner Codespaces.

- [Einstellungssynchronisierung](#settings-sync): Du kannst deine {% data variables.product.prodname_vscode %}-Einstellungen zwischen der Desktopanwendung und dem {% data variables.product.prodname_vscode_shortname %}-Webclient synchronisieren.
- [Dotfiles:](#dotfiles) Du kannst ein `dotfiles`-Repository verwenden, um Skripts, Shelleinstellungen und andere Konfigurationen anzugeben.

Die Personalisierung von {% data variables.product.prodname_github_codespaces %} gilt für alle Codespaces, die du erstellst.

Projektbetreuer können auch eine Standardkonfiguration definieren, die für jeden Codespace eines Repositorys gilt, egal wer ihn erstellt. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

## Einstellungssynchronisierung

Mit der Einstellungssynchronisierung kannst du Konfigurationen wie Einstellungen, Tastenkombinationen, Codeschnipsel, Erweiterungen und Benutzeroberflächenstatus zwischen verschiedenen Computern und {% data variables.product.prodname_vscode_shortname %}-Instanzen synchronisieren.

Klicke zum Aktivieren der Einstellungssynchronisierung in der linken unteren Ecke der Aktivitätsleiste in {% data variables.product.prodname_vscode %} auf {% octicon "gear" aria-label="The gear icon" %} und anschließend auf **Turn on Settings Sync…** (Einstellungssynchronisierung aktivieren...). Wähle im Dialogfeld die Einstellungen aus, die du synchronisieren möchtest.

![Option der Einstellungssynchronisierung im Menü „Manage“ (Verwalten)](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Weitere Informationen findest du in der [Anleitung für die Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

## Dotfiles

Dotfiles sind Dateien und Ordner auf UNIX-ähnlichen Systemen, die mit `.` beginnen und von denen die Konfiguration von Anwendungen und Shells auf deinem System gesteuert wird. Du kannst deine 'dotfiles' in einem Repository auf {% data variables.product.prodname_dotcom %} speichern und verwalten. Empfehlungen und Tutorials hinsichtlich der Frage, welche Elemente du in dein Dotfiles-Repository aufnehmen solltest, findest du unter [GitHub und Dotfiles](https://dotfiles.github.io/).

Dein Dotfiles-Repository könnte Shell-Aliase und -Voreinstellungen beinhalten, sämtliche Werkzeuge, die du installieren möchtest, oder jede andere Codespace-Personalisierung, die du vornehmen möchtest.

Du kannst {% data variables.product.prodname_github_codespaces %} so konfigurieren, dass Dotfiles aus einem beliebigen Repository verwendet werden, das du besitzt, indem du das betreffende Repository in deinen [persönlichen {% data variables.product.prodname_github_codespaces %}-Einstellungen](https://github.com/settings/codespaces) auswählst.

Wenn du einen neuen Codespace erstellst, wird das ausgewählte Dotfilerepository von {% data variables.product.prodname_dotcom %} in die Codespaceumgebung geklont. Außerdem wird zum Einrichten der Umgebung nach einer der folgenden Dateien gesucht.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Wenn keine dieser Dateien gefunden wird, werden alle Dateien oder Ordner in deinem ausgewählten Dotfiles-Repository, die mit `.` beginnen, per Symlink mit dem Verzeichnis `~` oder `$HOME` des Codespaces verknüpft.

Am ausgewählten Dotfiles-Repository vorgenommene Änderungen gelten nur für neue Codespaces und wirken sich nicht auf bestehende Codespaces aus.

{% note %}

**Hinweis:** Derzeit bietet {% data variables.product.prodname_codespaces %} keine Unterstützung für die Personalisierung der Benutzereinstellungen für {% data variables.product.prodname_vscode_shortname %} über dein `dotfiles`-Repository. Du kannst Standardeinstellungen für Workspace (Arbeitsbereich) und Remote [Codespaces] für ein bestimmtes Projekt im Repository des Projekts festlegen. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration).

{% endnote %}

### Aktivieren des Dotfiles-Repositorys für {% data variables.product.prodname_codespaces %}

Du kannst dein ausgewähltes Dotfilerepository verwenden, um deine {% data variables.product.prodname_github_codespaces %}-Umgebung zu personalisieren. Nachdem du dein Dotfiles-Repository ausgewählt hast, kannst du deine Skripts, Einstellungen und Konfigurationen hinzufügen. Anschließend musst du deine Dotfiles über deine persönliche {% data variables.product.prodname_github_codespaces %}-Einstellungsseite aktivieren.

{% warning %}

**Warnung:** Von Dotfiles können beliebige Skripts ausgeführt werden, die unerwarteten oder böswilligen Code enthalten können. Es wird empfohlen, Skripts vor dem Installieren eines Dotfiles-Repositorys zu überprüfen und so sicherzustellen, dass von den Skripts keine unerwarteten Aktionen ausgeführt werden.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „Dotfiles“ die Option **Dotfiles automatisch installieren** aus, damit {% data variables.product.prodname_github_codespaces %} deine Dotfiles automatisch in jedem neuen Codespace installiert, den du erstellst.
   ![Installieren von Dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Wähle das Repository aus, aus dem du Dotfiles installieren möchtest.
   ![Auswählen eines Dotfiles-Repositorys](/assets/images/help/codespaces/select-dotfiles-repo.png)

Du kannst dem Dotfiles-Repository weitere Skripts, Einstellungen und Konfigurationsdateien hinzufügen oder vorhandene Dateien bearbeiten, wann immer du dies möchtest. An Einstellungen vorgenommene Änderungen werden nur von neuen Codespaces übernommen.

Wenn dein Codespace die Konfigurationseinstellungen aus Dotfiles nicht übernimmt, findest du weiterführende Informationen unter [Behandeln von Problemen mit Dotfiles für {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces).

## Andere verfügbare Einstellungen

Du kannst {% data variables.product.prodname_github_codespaces %} auch mithilfe zusätzlicher Optionen in [deinen persönlichen Einstellungen](https://github.com/settings/codespaces) personalisieren:

- Informationen zum Aktivieren der GPG-Überprüfung findest du unter [Verwalten der GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).
- Informationen zum Festlegen deines Editors findest du unter [Festlegen deines Standard-Editors für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
- Informationen zum Festlegen des Zeitraums, für den ein Codespace ungenutzt bleiben kann, bevor er automatisch beendet wird, findest du unter [Festlegen des Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces).
- Informationen zum Festlegen des Zeitraums, für den deine nicht verwendeten Codespaces beibehalten werden, findest du unter [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).
- Informationen zum Festlegen deiner Standardregion findest du unter [Festlegen deiner Standardregion für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces).

## Weitere Informationsquellen

* [Erstellen eines neuen Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)
* [Ausführliche Informationen zu {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)
