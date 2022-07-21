---
title: Using GitHub Codespaces in Visual Studio Code
intro: 'Puedes desarrollar tu codespace directamente en {% data variables.product.prodname_vscode %} si conectas la extensión de {% data variables.product.prodname_github_codespaces %} con tu cuenta en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
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
shortTitle: Visual Studio Code
---

 
## Acerca de los {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}

Puedes utilizar tu instalación local de {% data variables.product.prodname_vscode %} para crear, administrar, trabajar en y borrar codespaces. Para utilizar los {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode_shortname %}, necesitas instalar la extensión de {% data variables.product.prodname_codespaces %}. Para obtener más información sobre cómo configurar los Codespaces en {% data variables.product.prodname_vscode_shortname %}, consulta los "[Prerrequisitos](#prerequisites)".

Predeterminadamente, si creas un codespace nuevo en {% data variables.product.prodname_dotcom_the_website %}, este se abrirá en el buscador. Si prefieres que cualquier codespace nuevo se abra en {% data variables.product.prodname_vscode_shortname %} automáticamente, puedes configurar que {% data variables.product.prodname_vscode_shortname %} sea tu editor predeterminado. Para obtener más información, consulta la sección "[Configurar tu editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Si prefieres trabajar en el buscador pero quieres seguir utilizando tus extensiones existentes, temas y atajos de {% data variables.product.prodname_vscode_shortname %}, puedes activar la Sincronización de Ajustes. For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)."

## Prerrequisitos

Para hacer desarrollos en un codespace directamente desde {% data variables.product.prodname_vscode_shortname %}, debes instalar e iniciar sesión en la extensión de {% data variables.product.prodname_codespaces %} con tus credenciales de {% data variables.product.product_name %}. La extensión de {% data variables.product.prodname_codespaces %} requiere el lanzamiento 1.51 de octubre de 2020 de {% data variables.product.prodname_vscode_shortname %} o superior.

Utiliza el {% data variables.product.prodname_vscode_marketplace %} para instalar la extesión de [{% data variables.product.prodname_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obtener más información, consulta la sección[Extensión de Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Da clic en **Registrarse para ver {% data variables.product.prodname_dotcom %}...**.

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Para autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a tu cuenta en {% data variables.product.product_name %}, da clic en **Permitir**.
3. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Utiliza el menú desplegable de "REMOTE EXPLORER" y luego da clic en **{% data variables.product.prodname_github_codespaces %}**.

   ![El encabezado {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Da clic en **Registrarse para ver {% data variables.product.prodname_codespaces %}...**.

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Para autorizar a {% data variables.product.prodname_vscode_shortname %} para acceder a tu cuenta en {% data variables.product.product_name %}, da clic en **Permitir**.
1. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endwindows %}

## Crear un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Abrir un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Debajo de "Codespaces", da clic en el codespace en el que quieras desarrollar.
1. Da clic en en el icono de conexión al codespace.

   ![Icono de conectarse al codespace en {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Cambiar el tipo de máquina en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Puedes cambiar el tipo de máquina de tu codespace en cualquier momento.

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

   Haz clic en **Sí** en caso de que quieras cambiar el tipo de máquina que se utiliza para este codespace inmediatamente.

   Si haces clic en **No** o si el codespace no se está ejecutando actualmente, el cambio se reflejará la próxima vez que este se reinicie.

## Borrar un codespace en {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Cambiar a la compilación para usuarios expertos de {% data variables.product.prodname_vscode_shortname %}

Puedes utilizar la [Compilación de insiders de {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) dentro de {% data variables.product.prodname_codespaces %}.

1. En la parte inferior izquierda de tu ventana de {% data variables.product.prodname_codespaces %}, selecciona **{% octicon "gear" aria-label="The settings icon" %} Ajustes**.
2. Desde la lista, selecciona "Cambiar a la versión para expertos".

   ![Hacer clic en "Compilación para expertos" en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Una vez seleccionada, {% data variables.product.prodname_codespaces %} seguirá abriéndose en la Versión para Expertos.
