---
title: Verwenden von Github Codespaces in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Du kannst in deinem Codespace direkt in {% data variables.product.prodname_vscode %} entwickeln, indem du die Erweiterung für {% data variables.product.prodname_github_codespaces %} mit deinem Konto auf {% data variables.product.product_name %} verbindest.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159601'
---
## Informationen zu {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}

Du kannst ihre lokale Installation von {% data variables.product.prodname_vscode %} verwenden, um Codespaces zu erstellen, zu verwalten, für die Arbeit zu verwenden und zu löschen. {% data reusables.codespaces.using-codespaces-in-vscode %} Weitere Informationen zur Einrichtung von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} findest du unter [Voraussetzungen](#prerequisites).

Wenn du einen neuen Codespace in {% data variables.product.prodname_dotcom_the_website %} erstellst, wird dieser standardmäßig im Browser geöffnet. Wenn neue Codespaces automatisch in {% data variables.product.prodname_vscode_shortname %} geöffnet werden sollen, kannst du den Standard-Editor auf {% data variables.product.prodname_vscode_shortname %} festlegen. Weitere Informationen findest du unter [Festlegen deines Standard-Editors für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).

Wenn du bevorzugt im Browser arbeitest, aber vorhandene {% data variables.product.prodname_vscode_shortname %}-Erweiterungen, -Designs und -Tastenkombinationen weiterhin verwenden möchtest, kannst du die Einstellungssynchronisierung aktivieren. Weitere Informationen findest du unter [Personalisieren von {% data variables.product.prodname_github_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync).

## Voraussetzungen

Wenn du direkt in einem Codespace in {% data variables.product.prodname_vscode_shortname %} entwickeln möchtest, musst du die {% data variables.product.prodname_github_codespaces %}-Erweiterung installieren und dich bei dieser mit deinen {% data variables.product.product_name %}-Anmeldeinformationen anmelden. Für die {% data variables.product.prodname_github_codespaces %}-Erweiterung ist {% data variables.product.prodname_vscode_shortname %} (Release 1.51 von Oktober 2020 oder höher) erforderlich.

Über den {% data variables.product.prodname_vscode_marketplace %} lässt sich die [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)-Erweiterung installieren. Weitere Informationen findest du unter [Marketplace für Erweiterungen](https://code.visualstudio.com/docs/editor/extension-gallery) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Klicke auf **Anmelden, um {% data variables.product.prodname_dotcom %}...**

   ![Anmelden bei {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Um {% data variables.product.prodname_vscode_shortname %} für den Zugriff auf dein {% data variables.product.product_name %}-Konto zu autorisieren, klicke auf **Zulassen**.
3. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Wähle **{% data variables.product.prodname_github_codespaces %}** im Dropdownmenü „REMOTE-EXPLORER“ aus.

   ![Der {% data variables.product.prodname_github_codespaces %}-Header](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Klicke auf **Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen**.

   ![Anmelden, um {% data variables.product.prodname_github_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Um {% data variables.product.prodname_vscode_shortname %} für den Zugriff auf dein {% data variables.product.product_name %}-Konto zu autorisieren, klicke auf **Zulassen**.
1. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endwindows %}

## Erstellen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Öffnen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Klicke unter „Codespaces“ auf den Codespace, in dem du entwickeln möchtest.
1. Klicke auf das Symbol „Connect to Codespace" (Verbinde zu Codespace).

   ![Das Symbol „Mit Codespace verbinden“ in {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Ändern des Computertyps in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Du kannst den Computertyp deines Codespaces jederzeit ändern.

{% note %}

**Hinweis:** {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Löschen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Wechseln zum Insider-Build von {% data variables.product.prodname_vscode_shortname %}

Du kannst den [Insider-Build von {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) in {% data variables.product.prodname_github_codespaces %} verwenden.

1. Klicke unten links im {% data variables.product.prodname_github_codespaces %}-Fenster auf **{% octicon "gear" aria-label="The settings icon" %} Einstellungen**.
2. Wähle in der Liste „Zur Insiderversion wechseln“ aus.

   ![Klicken auf „Insider-Build“ in {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. Nach dem Auswählen wird {% data variables.product.prodname_github_codespaces %} in der Insider-Version geöffnet.

## Weitere nützliche Informationen

- [Verwenden der {% data variables.product.prodname_vscode_command_palette %} in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)
- [Verwenden von {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)
