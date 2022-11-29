---
title: Festlegen deines Standard-Editors für GitHub Codespaces
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159606'
---
Auf der Einstellungsseite kannst du deine Editor-Einstellungen so festlegen, dass Codespaces beim Erstellen eines Codespace oder Öffnen eines bereits vorhandenen Codespace in der gewünschten der folgenden Anwendungen geöffnet werden:
* {% data variables.product.prodname_vscode %} (Desktopanwendung)
* {% data variables.product.prodname_vscode %} (Webclientanwendung)
* JetBrains Gateway: Zum Öffnen von Codespaces in einer JetBrains-IDE
* JupyterLab: Die Webschnittstelle von Project Jupyter 

{% data reusables.codespaces.template-codespaces-default-editor %}

Wenn du {% data variables.product.prodname_vscode %} als Standard-Editor für {% data variables.product.prodname_github_codespaces %} verwenden möchtest, musst du {% data variables.product.prodname_vscode %} und die {% data variables.product.prodname_github_codespaces %}-Erweiterung für {% data variables.product.prodname_vscode %} installieren. Weitere Informationen findest du auf der [Downloadseite für {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) und die [{% data variables.product.prodname_github_codespaces %}-Erweiterung im {% data variables.product.prodname_vscode %}-Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

Wenn du an einem Codespace in einer JetBrains-IDE arbeiten möchtest, musst du JetBrains Gateway installieren. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

## Festlegen deines Standard-Editors

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „Editor-Einstellung“ die gewünschte Option aus.

   ![Festlegen des Editors](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * Wenn du **{% data variables.product.prodname_vscode %}** auswählst, wird {% data variables.product.prodname_github_codespaces %} automatisch in der Desktopanwendung geöffnet, wenn du das nächste Mal einen Codespace erstellst oder öffnest. 

     Möglicherweise musst du den Zugriff sowohl auf deinen Browser als auch auf {% data variables.product.prodname_vscode %} zulassen, damit der Editor erfolgreich geöffnet werden kann.<br><br>
     
   * Wenn du **JetBrains Gateway** auswählst, wird automatisch die Gateway-Anwendung geöffnet, wenn du das nächste Mal einen Codespace erstellst oder öffnest. 

     Beim ersten Öffnen eines Codespace auf diese Weise musst du die Berechtigung zum Öffnen der Anwendung erteilen. 

     Die Gateway-Anwendung wird geöffnet, und der Codespace wird dann automatisch ausgewählt. Anschließend kannst du eine JetBrains-IDE auswählen (sofern noch nicht geschehen) und auf **Verbinden** klicken, um den Codespace im JetBrains-Client zu öffnen. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).
     
     Damit über die Gateway-Anwendung eine Verbindung mit einem Codespace hergestellt werden kann, muss in dem Codespace ein SSH-Server ausgeführt werden. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * Wenn du **JupyterLab** auswählst, muss in den von dir geöffneten Codespaces die JupyterLab-Anwendung installiert sein. {% data reusables.codespaces.jupyterlab-in-default-image %}
