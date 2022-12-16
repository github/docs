---
title: Verwenden von Codespaces in Visual Studio Code
intro: Du kannst in deinem Codespace direkt in {% data variables.product.prodname_vscode %} entwickeln, indem du die Erweiterung für {% data variables.product.prodname_github_codespaces %} mit deinem Konto auf {% data variables.product.product_name %} verbindest.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
- /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: b49a0504dd939a18c34073176e11359725cac7e9
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148768"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>Informationen zu {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}

Du kannst ihre lokale Installation von {% data variables.product.prodname_vscode %} verwenden, um Codespaces zu erstellen, zu verwalten, für die Arbeit zu verwenden und zu löschen. Damit du {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode_shortname %} verwenden kannst, musst du die {% data variables.product.prodname_github_codespaces %}-Erweiterung installieren. Weitere Informationen zum Einrichten von Codespaces in {% data variables.product.prodname_vscode_shortname %} findest du unter [Voraussetzungen](#prerequisites).

Wenn du einen neuen Codespace in {% data variables.product.prodname_dotcom_the_website %} erstellst, wird dieser standardmäßig im Browser geöffnet. Wenn neue Codespaces automatisch in {% data variables.product.prodname_vscode_shortname %} geöffnet werden sollen, kannst du den Standard-Editor auf {% data variables.product.prodname_vscode_shortname %} festlegen. Weitere Informationen findest du unter [Festlegen des Standard-Editors für {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces).

Wenn du bevorzugt im Browser arbeitest, aber vorhandene {% data variables.product.prodname_vscode_shortname %}-Erweiterungen, -Designs und -Tastenkombinationen weiterhin verwenden möchtest, kannst du die Einstellungssynchronisierung aktivieren. Weitere Informationen findest du unter [Personalisieren von {% data variables.product.prodname_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync).

## <a name="prerequisites"></a>Voraussetzungen

Wenn du direkt in einem Codespace in {% data variables.product.prodname_vscode_shortname %} entwickeln möchtest, musst du die {% data variables.product.prodname_github_codespaces %}-Erweiterung installieren und dich bei dieser mit deinen {% data variables.product.product_name %}-Anmeldeinformationen anmelden. Für die {% data variables.product.prodname_github_codespaces %}-Erweiterung ist {% data variables.product.prodname_vscode_shortname %} (Release 1.51 von Oktober 2020 oder höher) erforderlich.

Über den {% data variables.product.prodname_vscode_marketplace %} lässt sich die [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)-Erweiterung installieren. Weitere Informationen findest du unter [Marketplace für Erweiterungen](https://code.visualstudio.com/docs/editor/extension-gallery) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Klicke auf **Anmelden, um {% data variables.product.prodname_dotcom %} anzuzeigen...**.

   ![Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Um {% data variables.product.prodname_vscode_shortname %} für den Zugriff auf dein {% data variables.product.product_name %}-Konto zu autorisieren, klicke auf **Zulassen**.
3. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Wähle **{% data variables.product.prodname_github_codespaces %}** im Dropdownmenü „REMOTE-EXPLORER“ aus.

   ![Die {% data variables.product.prodname_codespaces %}-Kopfzeile](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Klicke auf **Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen...**.

   ![Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Um {% data variables.product.prodname_vscode_shortname %} für den Zugriff auf dein {% data variables.product.product_name %}-Konto zu autorisieren, klicke auf **Zulassen**.
1. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Erstellen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Öffnen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Klicke unter „Codespaces“ auf den Codespace, in dem du entwickeln möchtest.
1. Klicke auf das Symbol „Connect to Codespace" (Verbinde zu Codespace).

   ![Das Symbol „Mit Codespace verbinden“ in {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>Ändern des Computertyps in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Du kannst den Computertyp deines Codespaces jederzeit ändern.

1. Öffne in {% data variables.product.prodname_vscode_shortname %} die Befehlspalette (`shift command P` / `shift control P`).
1. Suche nach „Computer ändern“, und wähle „Codespaces: Computertyp ändern“ aus.

   ![Suche nach einem Branch zum Erstellen eines neuen {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Klicke auf den Codespace, den du ändern möchtest.

   ![Suche nach einem Branch zum Erstellen eines neuen {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Wähle den gewünschten Computertyp aus. 

   {% note %}

   **Hinweis:** {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Wenn der Codespace derzeit ausgeführt wird, wird eine Meldung angezeigt, ob du den Codespace jetzt neu starten und die Verbindung mit diesem wiederherstellen möchtest.

   Klicke auf **Ja**, wenn du den Computertyp sofort ändern möchtest, der für diesen Codespace verwendet wird.
   
   Wenn du auf **Nein** klickst oder der Codespace derzeit nicht ausgeführt wird, wird die Änderung beim nächsten Neustart des Codespaces wirksam.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Löschen eines Codespaces in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>Wechseln zum Insider-Build von {% data variables.product.prodname_vscode_shortname %}

Du kannst den [Insider-Build von {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) in {% data variables.product.prodname_codespaces %} verwenden.

1. Wähle unten links im {% data variables.product.prodname_codespaces %}-Fenster das Symbol für die **{% octicon "gear" aria-label="The settings icon" %} Einstellungen** aus.
2. Wähle in der Liste „Zur Insiderversion wechseln“ aus.

   ![Klick auf „Insider-Build“ in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Wenn du diese Option ausgewählt hast, wird {% data variables.product.prodname_codespaces %} als Insiderversion geöffnet.
