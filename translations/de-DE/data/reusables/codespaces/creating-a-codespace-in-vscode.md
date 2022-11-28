---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158581"
---
Nachdem du dein Konto auf {% data variables.product.prodname_dotcom_the_website %} mit der Erweiterung {% data variables.product.prodname_github_codespaces %} verbunden hast, kannst du einen neuen Codespace erstellen. Weitere Informationen über die {% data variables.product.prodname_github_codespaces %}-Erweiterung findest im [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Klicke auf das Symbol „Hinzufügen“: {% octicon "plus" aria-label="The plus icon" %}.

   ![Die Option „Neuen Codespace erstellen“ in {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Gib den Namen des Repositorys ein, in dem du entwickeln möchtest, und wähle es aus.

   ![Suchen nach einem Repository zum Erstellen eines neuen Codespace](/assets/images/help/codespaces/choose-repository-vscode.png)

   Wenn sich das ausgewählte Repository im Besitz einer Organisation befindet und die Organisation Codespaces für dieses Repository so konfiguriert hat, dass sie für die Organisation oder das übergeordnete Unternehmen in Rechnung gestellt werden, wird in den nachfolgenden Eingabeaufforderungen eine Meldung angezeigt, die dich darüber informiert, wer für den Codespace bezahlt.

4. Klicke auf den Branch, in dem du entwickeln möchtest.

   ![Suchen nach einem Branch zum Erstellen eines neuen Codespace](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Wenn du zur Auswahl einer Dev-Containerkonfigurationsdatei aufgefordert wirst, wähle eine Datei in der Liste aus.

   ![Auswählen einer Konfigurationsdatei für Entwicklungscontainer für {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Klicke auf den gewünschten Computertyp.

   ![Instanztypen für einen neuen Codespace](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Hinweis:** {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
