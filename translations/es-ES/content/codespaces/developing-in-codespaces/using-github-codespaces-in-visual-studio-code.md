---
title: "Uso de GitHub Codespaces en Visual\_Studio Code"
shortTitle: Visual Studio Code
intro: 'Puedes realizar tareas de desarrollo en tu codespace directamente en {% data variables.product.prodname_vscode %} conectando la extensión {% data variables.product.prodname_github_codespaces %} con tu cuenta de {% data variables.product.product_name %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159923'
---
## Acerca de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}

Puedes utilizar tu instalación local de {% data variables.product.prodname_vscode %} para crear, administrar, trabajar en y borrar codespaces. {% data reusables.codespaces.using-codespaces-in-vscode %} Para obtener más información sobre la configuración de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode_shortname %}, consulta "[Requisitos previos](#prerequisites)".

Predeterminadamente, si creas un codespace nuevo en {% data variables.product.prodname_dotcom_the_website %}, este se abrirá en el buscador. Si prefieres que cualquier codespace nuevo se abra en {% data variables.product.prodname_vscode_shortname %} automáticamente, puedes configurar que {% data variables.product.prodname_vscode_shortname %} sea tu editor predeterminado. Para más información, consulta "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Si prefieres trabajar en el explorador, pero quieres seguir usando las extensiones, los temas y los accesos directos existentes de {% data variables.product.prodname_vscode_shortname %}, puedes activar la sincronización de la configuración. Para más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} para la cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)".

## Requisitos previos

Para hacer desarrollos en un codespace directamente desde {% data variables.product.prodname_vscode_shortname %}, debes instalar e iniciar sesión en la extensión de {% data variables.product.prodname_github_codespaces %} con tus credenciales de {% data variables.product.product_name %}. La extensión de {% data variables.product.prodname_github_codespaces %} requiere el lanzamiento 1.51 de octubre de 2020 de {% data variables.product.prodname_vscode_shortname %} o superior.

Usa{% data variables.product.prodname_vscode_marketplace %} para instalar la extensión [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obtener más información, consulta [Marketplace de extensiones](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Haz clic en **Iniciar sesión en {% data variables.product.prodname_dotcom %}...** .

   ![Inicio de sesión en {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. A fin de autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a la cuenta en {% data variables.product.product_name %}, haz clic en **Permitir**.
3. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Use el menú desplegable "EXPLORADOR REMOTO" y, después, haga clic en **{% data variables.product.prodname_github_codespaces %}** .

   ![El encabezado de {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Haz clic en **Iniciar sesión para ver {% data variables.product.prodname_codespaces %}** .

   ![Registrarse para ver {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. A fin de autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a la cuenta en {% data variables.product.product_name %}, haz clic en **Permitir**.
1. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endwindows %}

## Creación de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Apertura de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Debajo de "Codespaces", da clic en el codespace en el que quieras desarrollar.
1. Da clic en en el icono de conexión al codespace.

   ![Icono de conectarse al codespace en {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Cambio del tipo de máquina en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Puedes cambiar el tipo de máquina del codespace en cualquier momento.

{% note %}

**Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Eliminación de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Cambio a la compilación para usuarios expertos de {% data variables.product.prodname_vscode_shortname %}

Puedes usar la [versión para expertos de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) en {% data variables.product.prodname_github_codespaces %}.

1. En la esquina inferior izquierda de la ventana {% data variables.product.prodname_github_codespaces %}, selecciona Configuración de **{% octicon "gear" aria-label="The settings icon" %}** .
2. Desde la lista, selecciona "Cambiar a la versión para expertos".

   ![Clic en "Versión para expertos" en {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. Una vez seleccionado, {% data variables.product.prodname_github_codespaces %} seguirá abriéndose en la Versión para Expertos.

## Información adicional

- "[Uso de {% data variables.product.prodname_vscode_command_palette %} en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)"
- "[Uso de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
