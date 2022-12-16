---
title: Configuración del editor predeterminado para GitHub Codespaces
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159932'
---
En la página de configuración, puedes establecer la preferencia del editor de modo que, al crear un codespace o abrir uno existente, se abra en lo que hayas elegido:
* {% data variables.product.prodname_vscode %} (aplicación de escritorio)
* {% data variables.product.prodname_vscode %} (aplicación cliente web)
* JetBrains Gateway (para abrir codespaces en un IDE de JetBrains)
* JupyterLab (interfaz web para Project Jupyter) 

{% data reusables.codespaces.template-codespaces-default-editor %}

Si quieres usar {% data variables.product.prodname_vscode %} como editor predeterminado para {% data variables.product.prodname_github_codespaces %}, necesitas instalar {% data variables.product.prodname_vscode %} y la extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para más información, vea la [página de descarga de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) y la [extensión {% data variables.product.prodname_github_codespaces %} en el marketplace de {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

Si quieres trabajar en un codespace en un IDE de JetBrains, debes instalar la puerta de enlace de JetBrains. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

## Configurar tu editor predeterminado

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Preferencia de editor", selecciona la opción que desees.

   ![Configuración del editor](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * Si eliges **{% data variables.product.prodname_vscode %}** , {% data variables.product.prodname_github_codespaces %} se abrirá automáticamente en la aplicación de escritorio la próxima vez que crees o abras un codespace. 

     Podrías necesitar permitir acceso tanto a tu buscador como a {% data variables.product.prodname_vscode %} para que abra con éxito.<br><br>
     
   * Si eliges **JetBrains Gateway**, la aplicación Gateway se abrirá automáticamente al crear o abrir un codespace. 

     La primera vez que abras un codespace de esta manera, deberás conceder permiso para abrir la aplicación. 

     La aplicación Gateway se abrirá y el codespace se seleccionará automáticamente. Después, puedes elegir un IDE de JetBrains, si todavía no lo has hecho, y hacer clic en **Conectar** para abrir el codespace en el cliente de JetBrains. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".
     
     Para conectarte a un codespace desde la aplicación Gateway, debes tener un servidor SSH que se ejecute en el codespace. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * Si eliges **JupyterLab**, la aplicación JupyterLab debe estar instalada en los codespaces que abras. {% data reusables.codespaces.jupyterlab-in-default-image %}
