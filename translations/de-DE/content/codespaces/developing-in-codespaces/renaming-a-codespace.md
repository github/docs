---
title: Umbenennen eines Codespaces
intro: Du kannst mit {% data variables.product.prodname_cli %} den Codespace-Anzeigenamen nach deinem Wunsch ändern.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 83a5ce0064a8f8deed752eaef0cd49be538ff9be
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682503"
---
## Informationen zum Umbenennen eines Codespaces

Jedem Codespace wird ein automatisch generierter Anzeigenamen zugewiesen. Wenn du über mehrere Codespaces verfügst, hilft dir der Anzeigename, Codespaces zu unterscheiden. Ein Beispiel für die Camel-Case-Schreibweise lautet: `literate space parakeet`. Du kannst den Anzeigenamen für deinen Codespace ändern.

So suchst du nach dem Anzeigenamen eines Codespace:

- Zeige unter {% data variables.product.product_name %} deine Liste der Codespaces unter https://github.com/codespaces an.

  ![Screenshot der Liste der Codespaces in GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- Klicke in der {% data variables.product.prodname_vscode %}-Desktopanwendung oder dem {% data variables.product.prodname_vscode_shortname %}-Webclient auf den Remote-Explorer. Der Anzeigename wird unterhalb des Repositorynamens angezeigt. Beispiel: `symmetrical space telegram` im folgenden Screenshot.

  ![Screenshot des Remote-Explorers in VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Verwende in einem Terminalfenster auf deinem lokalen Computer diesen {% data variables.product.prodname_cli %}-Befehl: `gh codespace list`. 

### Permanente Codespacenamen

Zusätzlich zum Anzeigenamen wird beim Erstellen eines Codespaces dem Codespace auch ein permanenter Name zugewiesen. Der Name ist eine Kombination aus deinem {% data variables.product.company_short %}-Handle, dem Repositorynamen und einigen zufälligen Zeichen. Ein Beispiel für die Camel-Case-Schreibweise lautet: `octocat-myrepo-gmc7`. Diesen Namen kannst du nicht ändern.

So suchst du nach dem permanenten Namen eines Codespace:

* In {% data variables.product.product_name %} wird der permanente Name in einem Popupfenster angezeigt, wenn du auf die Option **In** Browser öffnen https://github.com/codespaces zeigst. 

   ![Screenshot des Codespacenamens, der beim Zeigen angezeigt wird](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* Verwende in einem Codespace diesen Befehl im Terminal: `echo $CODESPACE_NAME`.
* Verwende in einem Terminalfenster auf deinem lokalen Computer diesen {% data variables.product.prodname_cli %}-Befehl: `gh codespace list`.

## Umbenennen eines Codespaces

Das Ändern des Anzeigenamens eines Codespaces kann nützlich sein, wenn du mehrere Codespaces hast, die du für einen längeren Zeitraum verwendest. Ein geeigneter Name hilft dir, einen Codespace zu identifizieren, den du für einen bestimmten Zweck verwendest. Du kannst den Anzeigenamen für deinen Codespace mithilfe der {% data variables.product.prodname_cli %} ändern.

Verwende zum Umbennenen eines Codespaces den Unterbefehl `gh codespace edit`:

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

Ersetze in diesem Beispiel `permanent name of the codespace` durch den permanenten Namen des Codespaces. Ersetze `new display name` durch den gewünschten Anzeigenamen.