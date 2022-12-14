---
title: Festlegen deines Standard-Editors für Codespaces
shortTitle: Set the default editor
intro: Du kannst deinen Standard-Editor für {% data variables.product.prodname_codespaces %} auf der Seite mit deinen persönlichen Einstellungen festlegen.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3c2fe809a749244efd8ffe76cde31646f984bea3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681301"
---
Auf der Einstellungsseite kannst du festlegen, dass alle neu erstellten Codespaces automatisch entweder in {% data variables.product.prodname_vscode %} für das Web oder in der {% data variables.product.prodname_vscode %}-Desktopanwendung geöffnet werden.

Wenn du {% data variables.product.prodname_vscode %} als Standard-Editor für {% data variables.product.prodname_codespaces %} verwenden möchtest, musst du {% data variables.product.prodname_vscode %} und die {% data variables.product.prodname_github_codespaces %}-Erweiterung für {% data variables.product.prodname_vscode %} installieren. Weitere Informationen findest du auf der [Downloadseite für {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) und die [{% data variables.product.prodname_github_codespaces %}-Erweiterung im {% data variables.product.prodname_vscode %}-Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## <a name="setting-your-default-editor"></a>Festlegen deines Standard-Editors

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „Editor-Einstellung“ die gewünschte Option aus.
   ![Festlegen des Editors](/assets/images/help/codespaces/select-default-editor.png) Wenn du **{% data variables.product.prodname_vscode %}** auswählst, wird {% data variables.product.prodname_codespaces %} automatisch in der Desktopanwendung geöffnet, wenn du das nächste Mal einen Codespace erstellst. Möglicherweise musst du den Zugriff sowohl auf deinen Browser als auch auf {% data variables.product.prodname_vscode %} zulassen, damit der Editor erfolgreich geöffnet werden kann.
   ![Festlegen des Editors](/assets/images/help/codespaces/launch-default-editor.png)
