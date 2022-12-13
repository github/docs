---
title: Umbenennen eines Codespaces
intro: 'Du kannst mit {% data variables.product.prodname_cli %} den Codespace-Anzeigenamen nach deinem Wunsch ändern.'
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
ms.openlocfilehash: 58e5e9584df07e8e6abba3f1cfac5d0b3234c01a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107085'
---
## Informationen zum Umbenennen eines Codespaces

Jedem Codespace wird ein automatisch generierter Anzeigenamen zugewiesen. Wenn du über mehrere Codespaces verfügst, hilft dir der Anzeigename, Codespaces zu unterscheiden. Beispiel: `literate space parakeet`. Du kannst den Anzeigenamen für deinen Codespace ändern.

So suchst du nach dem Anzeigenamen eines Codespace:

- Zeige unter {% data variables.product.product_name %} deine Liste der Codespaces unter https://github.com/codespaces an.

  ![Screenshot der Liste der Codespaces in GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- Klicke in der {% data variables.product.prodname_vscode %}-Desktopanwendung oder dem {% data variables.product.prodname_vscode_shortname %}-Webclient auf den Remote-Explorer. Der Anzeigename wird unterhalb des Repositorynamens angezeigt. Beispiel: `symmetrical space telegram` im folgenden Screenshot.

  ![Screenshot des Remote-Explorers in VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Verwende in einem Terminalfenster auf deinem lokalen Computer diesen {% data variables.product.prodname_cli %}-Befehl: `gh codespace list`. 

### Permanente Codespacenamen

Zusätzlich zum Anzeigenamen wird beim Erstellen eines Codespaces dem Codespace auch ein permanenter Name zugewiesen. Der Name ist eine Kombination aus deinem {% data variables.product.company_short %}-Handle, dem Repositorynamen und einigen zufälligen Zeichen. Beispiel: `octocat-myrepo-gmc7`. Diesen Namen kannst du nicht ändern.

So suchst du nach dem permanenten Namen eines Codespace:

* In {% data variables.product.product_name %} wird der permanente Name in einem Popupfenster angezeigt, wenn du auf die Option **In** Browser öffnen https://github.com/codespaces zeigst. 

   ![Screenshot des Codespacenamens, der beim Zeigen angezeigt wird](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* Verwende in einem Codespace diesen Befehl im Terminal: `echo $CODESPACE_NAME`.
* Verwende in einem Terminalfenster auf deinem lokalen Computer diesen {% data variables.product.prodname_cli %}-Befehl: `gh codespace list`.

## Umbenennen eines Codespaces

Das Ändern des Anzeigenamens eines Codespaces kann nützlich sein, wenn du mehrere Codespaces hast, die du für einen längeren Zeitraum verwendest. Ein geeigneter Name hilft dir, einen Codespace zu identifizieren, den du für einen bestimmten Zweck verwendest. Du kannst den Anzeigenamen für deinen Codespace mithilfe der {% data variables.product.prodname_cli %} ändern.

Verwende zum Umbennenen eines Codespaces den Unterbefehl `gh codespace edit`:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

Ersetze in diesem Beispiel `PERMANENT-CODESPACE-NAME` durch den permanenten Namen des Codespaces, dessen Anzeigenamen du ändern möchtest. Ersetze `NEW-DISPLAY-NAME` durch den Anzeigenamen, den du für diesen Codespace verwenden möchtest.

Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} mit der {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace).
