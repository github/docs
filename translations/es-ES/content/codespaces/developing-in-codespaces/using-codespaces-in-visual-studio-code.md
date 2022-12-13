---
title: Utilizar codespaces en Visual Studio Code
intro: Puedes realizar tareas de desarrollo en tu codespace directamente en {% data variables.product.prodname_vscode %} conectando la extensión {% data variables.product.prodname_github_codespaces %} con tu cuenta de {% data variables.product.product_name %}.
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
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148772"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>Acerca de los {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode %}

Puedes utilizar tu instalación local de {% data variables.product.prodname_vscode %} para crear, administrar, trabajar en y borrar codespaces. Para utilizar los {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode_shortname %}, necesitas instalar la extensión de {% data variables.product.prodname_github_codespaces %}. Para obtener más información sobre cómo configurar Codespaces en {% data variables.product.prodname_vscode_shortname %}, consulta "[Requisitos previos](#prerequisites)".

Predeterminadamente, si creas un codespace nuevo en {% data variables.product.prodname_dotcom_the_website %}, este se abrirá en el buscador. Si prefieres que cualquier codespace nuevo se abra en {% data variables.product.prodname_vscode_shortname %} automáticamente, puedes configurar que {% data variables.product.prodname_vscode_shortname %} sea tu editor predeterminado. Para más información, vea "[Establecimiento del editor predeterminado para {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)".

Si prefieres trabajar en el explorador, pero quieres seguir usando las extensiones, temas y accesos directos existentes de {% data variables.product.prodname_vscode_shortname %}, puedes activar la sincronización de configuración. Para obtener más información, consulta "[Personalización de {% data variables.product.prodname_codespaces %} para la cuenta](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)".

## <a name="prerequisites"></a>Prerrequisitos

Para hacer desarrollos en un codespace directamente desde {% data variables.product.prodname_vscode_shortname %}, debes instalar e iniciar sesión en la extensión de {% data variables.product.prodname_github_codespaces %} con tus credenciales de {% data variables.product.product_name %}. La extensión de {% data variables.product.prodname_github_codespaces %} requiere el lanzamiento 1.51 de octubre de 2020 de {% data variables.product.prodname_vscode_shortname %} o superior.

Usa{% data variables.product.prodname_vscode_marketplace %} para instalar la extensión [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obtener más información, consulta [Marketplace de extensiones](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Haga clic en **Iniciar sesión para ver {% data variables.product.prodname_dotcom %}...** .

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. A fin de autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a la cuenta en {% data variables.product.product_name %}, haz clic en **Permitir**.
3. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Use el menú desplegable "EXPLORADOR REMOTO" y, después, haga clic en **{% data variables.product.prodname_github_codespaces %}** .

   ![El encabezado {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Haga clic en **Iniciar sesión para ver {% data variables.product.prodname_codespaces %}...** .

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. A fin de autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a la cuenta en {% data variables.product.product_name %}, haz clic en **Permitir**.
1. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Creación de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Apertura de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Debajo de "Codespaces", da clic en el codespace en el que quieras desarrollar.
1. Da clic en en el icono de conexión al codespace.

   ![Icono de conectarse al codespace en {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>Cambio del tipo de máquina en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Puedes cambiar el tipo de máquina del codespace en cualquier momento.

1. En {% data variables.product.prodname_vscode_shortname %}, abre la paleta de comandos (`shift command P` / `shift control P`).
1. Busca y selecciona "Codespaces: Cambiar mi tipo de máquina".

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Haz clic en el codespace que quieras cambiar.

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Elige el tipo de máquina que quieres utilizar. 

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Si el codespace se está ejecutando actualmente, se mostrará un mensaje que pregunta si te gustaría reiniciar y reconectarte con tu codespace ahora.

   Haga clic en **Sí** si quiere cambiar inmediatamente el tipo de máquina que se usa para este codespace.
   
   Si hace clic en **No** o si el codespace no está actualmente en ejecución, el cambio se aplicará la próxima vez que se reinicie.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Eliminación de un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>Cambio a la compilación para usuarios expertos de {% data variables.product.prodname_vscode_shortname %}

Puedes usar la [compilación Insider de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) en {% data variables.product.prodname_codespaces %}.

1. En la esquina inferior izquierda de la ventana {% data variables.product.prodname_codespaces %}, seleccione **{% octicon "gear" aria-label="The settings icon" %} Configuración**.
2. Desde la lista, selecciona "Cambiar a la versión para expertos".

   ![Clic en "Compilación Insiders" en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Una vez seleccionada, {% data variables.product.prodname_codespaces %} seguirá abriéndose en la Versión para Expertos.
