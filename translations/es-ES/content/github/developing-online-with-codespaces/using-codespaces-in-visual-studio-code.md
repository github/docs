---
title: Utilizar codespaces en Visual Studio Code
intro: 'Puedes desarrollar tu codespace directamente en {% data variables.product.prodname_vscode %} si conectas la extensión de {% data variables.product.prodname_github_codespaces %} con tu cuenta en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

### Prerrequisitos

Para hacer desarrollos en un codespace directamente desde {% data variables.product.prodname_vscode %}, debes ingresar en la extensión de {% data variables.product.prodname_github_codespaces %}. La extensión de {% data variables.product.prodname_github_codespaces %} requiere el lanzamiento 1.51 de octubre de 2020 de {% data variables.product.prodname_vscode %} o superior.

1. Utiliza

{% data variables.product.prodname_vs %} Marketplace para instalar la extensión de [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obtener más información, consulta la sección[Extensión de Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {% data variables.product.prodname_vscode %}.
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Utiliza el menú desplegable de "REMOTE EXPLORER" y luego da clic en **{% data variables.product.prodname_github_codespaces %}**. ![El encabezado {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. Da clic en **Registrarse para ver {% data variables.product.prodname_codespaces %}...**. ![Registrarse para ver {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. Para autorizar a {% data variables.product.prodname_vscode %} para acceder a tu cuenta en {% data variables.product.product_name %}, da clic en **Permitir**.
5. Regístrate en {% data variables.product.product_name %} para aprobar la extensión.

### Crear un codespace en {% data variables.product.prodname_vscode %}

Despuès de que conectas tu cuenta de {% data variables.product.product_name %} a la extensiòn de {% data variables.product.prodname_vs_codespaces %}, puedes desarrollar en un codespace que hayas creado en {% data variables.product.product_name %} o en {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Da clic en el icono de Agregar y luego en **Crear codespace nuevo**. ![La opciòn de crear un codespace nuevo en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Teclea y luego da clic en el nombre del repositorio en el que quieras desarrollar. ![Buscar un repositorio para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Da clic en la rama en la que quieras desarrollar. ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-branch-vscode.png)
5. Da clic en el tipo de instancia en el que quieras desarrollar. ![Tipos de instancia para un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-sku-vscode.png)
### Abrir un codespace en {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Debajo de "Codespaces", da clic en el codespace en el que quieras desarrollar.
3. Da clic en en el icono de conexión al codespace. ![Icono de conectarse al codespace en {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Borrar un codespace en {% data variables.product.prodname_vscode %}

1. Debajo de "Codespaces", da clic derecho en el codespace que quieras borrar.
2. En el menù desplegable, da clic en **Borrar codespace**. ![Borrar un codespace en {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
