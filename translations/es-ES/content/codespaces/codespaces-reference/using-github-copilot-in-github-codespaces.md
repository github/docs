---
title: Uso de GitHub Copilot en GitHub Codespaces
intro: 'Puedes usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_github_codespaces %} si agregas la extensión.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158729'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Uso de {% data variables.product.prodname_copilot %} en el cliente web de {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## Uso de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## Instalación de {% data variables.product.prodname_copilot %} en el IDE de JetBrains

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), un programador de pares de IA, se puede usar en cualquier codespace. Para obtener más información, consulta "[Acerca de GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot)".

Para usar {% data variables.product.prodname_copilot %} en un codespace en el IDE de JetBrains, instala el [complemento de {% data variables.product.prodname_copilot %}](https://plugins.jetbrains.com/plugin/17718-github-copilot) desde el codespace.

{% note %}

**Nota**: Debes instalar el complemento de {% data variables.product.prodname_copilot %} cada vez que crees un codespace.

{% endnote %}

1. En la aplicación cliente JetBrains, abre el cuadro de diálogo Configuración (Windows/Linux) o Preferencias (Mac):

   - **Windows/Linux**: haz clic en **Archivo** y, luego, en **Configuración** (o presiona <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>).
   - **Mac**: haz clic en **Cliente JetBrains** en la barra de menús de MacOS y, luego, en **Preferencias** (o presiona <kbd>comando</kbd>+<kbd>,</kbd>).

1. En el menú izquierdo del cuadro de diálogo Configuración/Preferencias, haz clic en **Complementos en el host**. Después, haz clic en la pestaña **Marketplace**.

   ![Captura de pantalla de la pestaña Marketplace para "Complementos en el host"](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. En el cuadro de búsqueda, escribe "copilot" y haz clic en el botón **Instalar** del complemento de {% data variables.product.prodname_copilot %}.

   ![Captura de pantalla del complemento de {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. Haz clic en **Aceptar** en el cuadro de diálogo "Nota de privacidad de complementos de terceros".
1. Haga clic en **Restart IDE** (Reiniciar IDE).

   ![Captura de pantalla del complemento de {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. Haz clic en **Reiniciar** cuando se te pida que confirmes que quieres reiniciar el IDE de back-end que se ejecuta de forma remota. La aplicación cliente JetBrains se cerrará cuando lo hagas.
1. Vuelve a abrir el codespace desde la aplicación JetBrains Gateway. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide)".
1. Una vez reiniciado el IDE de JetBrains, haz clic en el menú **Herramientas**. Haz clic en **{% data variables.product.prodname_copilot %}** y, a continuación, haz clic en **Iniciar sesión en {% data variables.product.prodname_dotcom %}** . 

    ![Captura de pantalla del menú de herramientas de JetBrains](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. En el cuadro de diálogo "Iniciar sesión en {% data variables.product.prodname_dotcom %}", para copiar el código del dispositivo y abrir la ventana de activación del dispositivo, haz clic en **Copiar y abrir**.

    ![Captura de pantalla de la copia y apertura del código del dispositivo](/assets/images/help/copilot/device-code-copy-and-open.png)

1. Se abrirá una ventana de activación del dispositivo en el explorador. Pega el código del dispositivo y haz clic en **Continuar**.

   - Para pegar el código en Windows o Linux, presiona <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para pegar el código en macOS, presiona <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar complemento {% data variables.product.prodname_copilot %}** .
1. Una vez aprobados los permisos, el IDE de JetBrains mostrará una confirmación. Para empezar a usar {% data variables.product.prodname_copilot %}, haz clic en **Aceptar**.

   ![Captura de pantalla de la confirmación de permisos del IDE de JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## Información adicional

- "[Introducción a GitHub Copilot en un IDE de JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)"

{% endjetbrains %}
