---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159722"
---
Wenn du in einem Codespace arbeitest, kannst du ihn über den {% data variables.product.prodname_vscode_shortname %}-Webclient oder die Desktopanwendung veröffentlichen.

{% data reusables.codespaces.source-control-display-dark %}
1. Klicke zum Stagen deiner Änderungen auf **+** neben der Datei, die du hinzugefügt oder geändert hast, oder neben **Änderungen**, wenn du mehrere Dateien geändert hast und diese alle stagen möchtest.

   ![Randleiste der Quellcodeverwaltung mit hervorgehobener Stagingschaltfläche](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Hinweis:** Wenn du mit der leeren Vorlage von {% data variables.product.company_short %} beginnst, wird keine Liste der Änderungen angezeigt, es sei denn, du hast dein Verzeichnis bereits als Git-Repository initialisiert. Um Codespaces zu veröffentlichen, die aus der leeren Vorlage erstellt wurden, klickst du in der Ansicht „Quellcodeverwaltung“ auf **In {% data variables.product.company_short %} veröffentlichen**, und fährst dann mit Schritt 5 fort.

   {% endnote %}
2. Gib eine Commitnachricht ein, die die von dir vorgenommene Änderung beschreibt, und klicke dann auf **Commit**, um deine gestageten Änderungen zu committen.

   ![Seitenleiste der Quellcodeverwaltung mit einer Commitnachricht](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Klicke auf **Branch veröffentlichen**.
   
   ![Screenshot: Schaltfläche „Branch veröffentlichen“ in VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. Gib in der Dropdownliste „Repositoryname“ einen Namen für dein neues Repository ein, und wähle dann **Im privaten Repository {% data variables.product.company_short %} veröffentlichen** oder **Im öffentlichen Repository {% data variables.product.company_short %} veröffentlichen** aus.
   
   ![Screenshot: Dropdownliste „Repositoryname“ in VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Der Besitzer des neuen Repositorys ist das {% data variables.product.prodname_dotcom %}-Konto, mit dem du den Codespace erstellt hast.
5. Optional klickst du im Popupfenster, das in der unteren rechten Ecke des Editors angezeigt wird, auf **In {% data variables.product.company_short %} öffnen**, um das neue Repository für {% data variables.product.prodname_dotcom_the_website %} anzuzeigen.
   
   ![Screenshot: Popupfenster „In GitHub öffnen“ in VS Code](/assets/images/help/codespaces/open-on-github.png)