---
title: Codespaces für dein Konto personalisieren
shortTitle: Personalize your codespaces
intro: Du kannst {% data variables.product.prodname_codespaces %} personalisieren, indem du ein `dotfiles`-Repository in {% data variables.product.product_name %} oder die Einstellungssynchronisierung verwendest.
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681349"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>Informationen zur Personalisierung von {% data variables.product.prodname_codespaces %}

Bei Verwendung einer Entwicklungsumgebung ist das Anpassen der Einstellungen und Tools an deine Präferenzen und Workflows ein wichtiger Schritt. {% data variables.product.prodname_codespaces %} ermöglicht zwei Hauptmethoden zur Personalisierung deiner Codespaces.

- [Einstellungssynchronisierung:](#settings-sync) Du kannst {% data variables.product.prodname_vscode %}-Einstellungen zwischen {% data variables.product.prodname_codespaces %} und anderen Instanzen von {% data variables.product.prodname_vscode %} verwenden und freigeben.
- [Dotfiles:](#dotfiles) Du kannst ein `dotfiles`-Repository verwenden, um Skripts, Shelleinstellungen und andere Konfigurationen anzugeben.

Die {% data variables.product.prodname_codespaces %}-Personalisierung gilt für jeden Codespace, den du erstellst.

Projektbetreuer können auch eine Standardkonfiguration definieren, die für jeden Codespace eines Repositorys gilt, egal wer ihn erstellt. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_codespaces %} für dein Projekt](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project).

## <a name="settings-sync"></a>Einstellungssynchronisierung

Die Einstellungssynchronisierung ermöglicht es Ihnen, Konfigurationen wie Einstellungen, Tastenkombinationen, Ausschnitte, Erweiterungen und Benutzeroberflächenzustand auf Computern und in Instanzen von {% data variables.product.prodname_vscode %} freizugeben.

Zum Aktivieren der Einstellungssynchronisierung wähle unteren links in der Aktivitätsleiste {% octicon "gear" aria-label="The gear icon" %} aus, und klicke auf **Turn on Settings Sync…** (Einstellungssynchronisierung aktivieren...). Wähle im Dialogfeld die Einstellungen aus, die du synchronisieren möchtest.

![Option der Einstellungssynchronisierung im Menü „Manage“ (Verwalten)](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Weitere Informationen findest du in der [Anleitung für die Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) in der Dokumentation zu {% data variables.product.prodname_vscode %}.

## <a name="dotfiles"></a>Dotfiles

Dotfiles sind Dateien und Ordner auf UNIX-ähnlichen Systemen, die mit `.` beginnen und von denen die Konfiguration von Anwendungen und Shells auf deinem System gesteuert wird. Du kannst deine 'dotfiles' in einem Repository auf {% data variables.product.prodname_dotcom %} speichern und verwalten. Empfehlungen und Tutorials hinsichtlich der Frage, welche Elemente du in dein Dotfiles-Repository aufnehmen solltest, findest du unter [GitHub und Dotfiles](https://dotfiles.github.io/).

Dein Dotfiles-Repository könnte Shell-Aliase und -Voreinstellungen beinhalten, sämtliche Werkzeuge, die du installieren möchtest, oder jede andere Codespace-Personalisierung, die du vornehmen möchtest.

Du kannst {% data variables.product.prodname_codespaces %} so konfigurieren, dass Dotfiles aus einem beliebigen Repository verwendet werden, das du besitzt, indem du das betreffende Repository in deinen [persönlichen {% data variables.product.prodname_codespaces %}-Einstellungen](https://github.com/settings/codespaces) auswählst.

Wenn du einen neuen Codespace erstellst, wird das ausgewählte Repository von {% data variables.product.prodname_dotcom %} in die Codespace-Umgebung geklont. Außerdem wird zum Einrichten der Umgebung nach einer der folgenden Dateien gesucht.

* _install.sh_
* _Installieren_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Wenn keine dieser Dateien gefunden wird, werden alle Dateien oder Ordner in deinem ausgewählten Dotfiles-Repository, die mit `.` beginnen, per Symlink mit dem Verzeichnis `~` oder `$HOME` des Codespaces verknüpft.

Am ausgewählten Dotfiles-Repository vorgenommene Änderungen gelten nur für neue Codespaces und wirken sich nicht auf bestehende Codespaces aus.

{% note %}

**Hinweis:** Derzeit bietet {% data variables.product.prodname_codespaces %} keine Unterstützung für die Personalisierung der _Benutzereinstellungen_ für den {% data variables.product.prodname_vscode %}-Editor mit deinem `dotfiles`-Repository. Du kannst Standardeinstellungen für _Workspace_ (Arbeitsbereich) und _Remote [Codespaces]_ für ein bestimmtes Projekt im Repository des Projekts festlegen. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration).

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>Aktivieren des Dotfiles-Repositorys für {% data variables.product.prodname_codespaces %}

Du kannst dein ausgewähltes Dotfiles-Repository verwenden, um deine {% data variables.product.prodname_codespaces %}-Umgebung zu personalisieren. Nachdem du dein Dotfiles-Repository ausgewählt hast, kannst du deine Skripts, Einstellungen und Konfigurationen hinzufügen. Anschließend musst du deine Dotfiles über deine persönliche {% data variables.product.prodname_codespaces %}-Einstellungsseite aktivieren.

{% warning %}

**Warnung:** Von Dotfiles können beliebige Skripts ausgeführt werden, die unerwarteten oder böswilligen Code enthalten können. Es wird empfohlen, Skripts vor dem Installieren eines Dotfiles-Repositorys zu überprüfen und so sicherzustellen, dass von den Skripts keine unerwarteten Aktionen ausgeführt werden.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „Dotfiles“ die Option **Automatically install dotfiles** (Dotfiles automatisch installieren) aus, sodass Dotfiles von {% data variables.product.prodname_codespaces %} automatisch in jedem neuen Codespace installiert werden, den du erstellst.
   ![Installieren von Dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Wähle das Repository aus, aus dem du Dotfiles installieren möchtest.
   ![Auswählen eines Dotfiles-Repositorys](/assets/images/help/codespaces/select-dotfiles-repo.png)

Du kannst dem Dotfiles-Repository weitere Skripts, Einstellungen und Konfigurationsdateien hinzufügen oder vorhandene Dateien bearbeiten, wann immer du dies möchtest. An Einstellungen vorgenommene Änderungen werden nur von neuen Codespaces übernommen.

Für den Fall, dass von dem betreffenden Codespace die Konfigurationseinstellungen aus Dotfiles nicht übernommen werden, findest du weiterführende Informationen unter [Problembehandlung bei Dotfiles für {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces).

## <a name="other-available-settings"></a>Andere verfügbare Einstellungen

Du kannst {% data variables.product.prodname_codespaces %} auch mit zusätzlichen [{% data variables.product.prodname_codespaces %}-Einstellungen](https://github.com/settings/codespaces) personalisieren:

- Weitere Informationen zum Festlegen deiner Standardregion findest du unter [Festlegen der Standardregion für {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
- Weitere Informationen zum Festlegen deiner Standardregion findest du unter [Festlegen der Standardregion für {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces).
- Weitere Informationen zum Hinzufügen verschlüsselter Geheimnisse findest du unter [Verwalten verschlüsselter Geheimnisse für {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces).
- Weitere Informationen zum Aktivieren der GPG-Überprüfung findest du unter [Verwalten der GPG-Überprüfung für {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces).
- Weitere Informationen dazu, wie du zulässt, dass von Codespaces auf andere Repositorys zugegriffen werden kann, findest du unter [Verwalten von Zugriff und Sicherheit für {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

## <a name="further-reading"></a>Weitere Informationsquellen

* [Erstellen eines neuen Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)
