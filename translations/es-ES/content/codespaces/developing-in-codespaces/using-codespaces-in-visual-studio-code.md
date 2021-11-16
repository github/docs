---
title: Utilizar codespaces en Visual Studio Code
intro: 'Puedes desarrollar tu codespace directamente en {% data variables.product.prodname_vscode %} si conectas la extensión de {% data variables.product.prodname_github_codespaces %} con tu cuenta en {% data variables.product.product_name %}.'
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
---

 

## Prerrequisitos

Para hacer desarrollos en un codespace directamente desde {% data variables.product.prodname_vscode %}, debes ingresar en la extensión de {% data variables.product.prodname_github_codespaces %}. La extensión de {% data variables.product.prodname_github_codespaces %} requiere el lanzamiento 1.51 de octubre de 2020 de {% data variables.product.prodname_vscode %} o superior.

Utiliza {% data variables.product.prodname_vs %} Marketplace para instalar la extensión de [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obtener más información, consulta la sección[Extensión de Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {% data variables.product.prodname_vscode %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Da clic en **Registrarse para ver {% data variables.product.prodname_dotcom %}...**.

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

3. Para autorizar a {% data variables.product.prodname_vscode %} para acceder a tu cuenta en {% data variables.product.product_name %}, da clic en **Permitir**.
4. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Utiliza el menú desplegable de "REMOTE EXPLORER" y luego da clic en **{% data variables.product.prodname_github_codespaces %}**.

   ![El encabezado {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

3. Da clic en **Registrarse para ver {% data variables.product.prodname_codespaces %}...**.

   ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

4. Para autorizar a {% data variables.product.prodname_vscode %} para acceder a tu cuenta en {% data variables.product.product_name %}, da clic en **Permitir**.
5. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

{% endwindows %}

## Crear un codespace en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Abrir un codespace en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Debajo de "Codespaces", da clic en el codespace en el que quieras desarrollar.
3. Da clic en en el icono de conexión al codespace.

   ![Icono de conectarse al codespace en {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Cambiar el tipo de máquina en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.codespaces-machine-types %}

Puedes cambiar el tipo de máquina de tu codespace en cualquier momento.

1. En {% data variables.product.prodname_vscode %}, abre la paleta de comandos (`shift command P` / `shift control P`).
2. Busca y selecciona "Codespaces: Cambiar mi tipo de máquina".

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

3. Haz clic en el codespace que quieras cambiar.

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

4. Elige el tipo de máquina que quieres utilizar.

Si el codespace se está ejecutando actualmente, se mostrará un mensaje que pregunta si te gustaría reiniciar y reconectarte con tu codespace ahora. Haz clic en **Sí** en caso de que quieras cambiar el tipo de máquina que se utiliza para este codespace inmediatamente. Si haces clic en **No** o si el codespace no se está ejecutando actualmente, el cambio se reflejará la próxima vez que este se reinicie.

## Borrar un codespace en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}
