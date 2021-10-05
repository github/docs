---
title: Codespaces für Dein Konto personalisieren
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Personalize your account
---


## About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a public `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

Projektbetreuer können auch eine Standardkonfiguration definieren, die für jeden Codespace eines Repositorys gilt, egal wer ihn erstellt. Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Projekt konfigurieren](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

## Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

To enable Settings Sync, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Turn on Settings Sync…**. From the dialog, select which settings you'd like to sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

## Dotfiles

'Dotfiles' sind Dateien und Verzeichnisse auf Unix-ähnlichen Systemen, die mit `.` beginnen und die die Konfiguration von Anwendungen und Shells auf Deinem System kontrollieren. Du kannst Deine 'dotfiles' in einem Repository auf {% data variables.product.prodname_dotcom %} speichern und verwalten. Für Ratschläge und Tutorials dazu, was Du in Deinem `dotfiles`-Repository hinzufügen solltest, siehe [GitHub does dotfiles](https://dotfiles.github.io/) (GitHub benutzt 'dotfiles').

If your user account on {% data variables.product.prodname_dotcom %} owns a public repository named `dotfiles`, {% data variables.product.prodname_dotcom %} can automatically use this repository to personalize your codespace environment, once enabled from your [personal Codespaces settings](https://github.com/settings/codespaces). Private `dotfiles`-Repositorys sind momentan nicht unterstützt.

Dein `dotfiles`-Repository könnte Deine Shell-Aliase und -Voreinstellungen beinhalten, sämtliche Werkzeuge, die Du installieren möchtest, oder jede andere Codespace-Personalisierung, die Du machen willst.

Wenn Du einen neuen Codespace erstellst, klont {% data variables.product.prodname_dotcom %} Dein `dotfiles`-Repository in die Codespace-Umgebung und sucht nach einer der folgenden Dateien, um die Umgebung einzurichten.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Wenn keine dieser Dateien gefunden wird, werden Dateien oder Ordner in `dotfiles`, die mit einem `.` beginnen, symbolisch zum `~`- or `$HOME`-Verzeichnis des Codespace verknüpft.

Änderungen an Deinem `dotfiles`-Repository gelten nur für neue Codespaces und verändern bestehende Codespaces nicht.

{% note %}

**Hinweis:** Derzeit unterstützt {% data variables.product.prodname_codespaces %} kein personalisieren der _Benutzer_ Einstellungen für den {% data variables.product.prodname_vscode %}-Editor mit Deinem `dotfiles`-Repository. Du kannst Standardeinstellungen für den _Arbeitsbereich _ und die _Remote [Codespaces]_ für ein bestimmtes Projekt in einem Projekt-Repository festlegen. Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Projekt konfigurieren](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)."

{% endnote %}

### Enabling your dotfiles repository for {% data variables.product.prodname_codespaces %}

You can use your public `dotfiles` repository to personalize your {% data variables.product.prodname_codespaces %} environment. Once you set up that repository, you can add your scripts, preferences, and configurations to it. You then need to enable your dotfiles from your personal {% data variables.product.prodname_codespaces %} settings page.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Dotfiles", select "Automatically install dotfiles" so that {% data variables.product.prodname_codespaces %} automatically installs your dotfiles into every new codespace you create. ![Installing dotfiles](/assets/images/help/codespaces/install-dotfiles.png)

   {% note %}

   **Note:** This option is only available if you've created a public `dotfiles` repository for your user account.

   {% endnote %}

You can add further script, preferences, configuration files to your dotfiles repository or edit existing files whenever you want. Changes to settings will only be picked up by new codespaces.

## Other available settings

You can also personalize {% data variables.product.prodname_codespaces %} using additional [Codespaces settings](https://github.com/settings/codespaces):

- To set your default region, see "[Setting your default region for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."
- To set your editor, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."
- To add encrypted secrets, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)."
- To enable GPG verification, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
- To allow your codespaces to access other repositories, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

## Weiterführende Informationen

* „[Ein neues Repository erstellen](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
