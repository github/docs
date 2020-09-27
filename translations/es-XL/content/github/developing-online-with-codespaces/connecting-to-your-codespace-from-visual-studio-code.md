---
title: Conectarte a tu codespace desde Visual Studio Code
intro: 'Puedes desarrollar tu codespace directamente en {{ site.data.variables.product.prodname_vscode }} si conectas la extensión de {{ site.data.variables.product.prodname_vs_codespaces }} con tu cuenta en {{ site.data.variables.product.product_name }}.'
product: '{{ site.data.reusables.gated-features.codespaces }}'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.codespaces.release-stage }}

### Conectar la extensión de {{ site.data.variables.product.prodname_vs_codespaces }} a tu cuenta de {{ site.data.variables.product.prodname_dotcom }}

Antes de que puedas desarrollar en un codespace directamente en {{ site.data.variables.product.prodname_vscode }}, debes configurar la extensión {{ site.data.variables.product.prodname_vs_codespaces }} para conectar tu cuenta de {{ site.data.variables.product.product_name }}.

1. Utiliza {{ site.data.variables.product.prodname_vs }} Marketplace para instalar la extensión de [{{ site.data.variables.product.prodname_vs_codespaces }}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline). Para obtener más información, consulta la sección[Extensión de Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) en la documentación de {{ site.data.variables.product.prodname_vscode }}.
2. En {{ site.data.variables.product.prodname_vscode }}, en la barra lateral izquierda, da clic en el icono de Extensiones. ![El icono de extensiones en {{ site.data.variables.product.prodname_vscode }}](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. Debajo de {{ site.data.variables.product.prodname_vs_codespaces }}, da clic en el icono de Administrar, después, da clic en **Configuración de Extensión**. ![La opción de configuración de extensión](/assets/images/help/codespaces/select-extension-settings.png)
4. Utiliza el menú desplegable "Vsonline: Proveedor de Cuenta" y selecciona {{ site.data.variables.product.prodname_dotcom }}. ![Configurar un Proveedor de Cuenta con {{ site.data.variables.product.prodname_dotcom }}](/assets/images/help/codespaces/select-account-provider-vscode.png)
{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
6. Si {{ site.data.variables.product.prodname_codespaces }} nose ha seleccionado en el encabezado, da clic en **{{ site.data.variables.product.prodname_codespaces }}**. ![El encabezado {{ site.data.variables.product.prodname_codespaces }}](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. Da clic en **Registrarse para ver {{ site.data.variables.product.prodname_codespaces }}...**. ![Registrarse para ver {{ site.data.variables.product.prodname_codespaces }}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. Para autorizar a {{ site.data.variables.product.prodname_vscode }} para acceder a tu cuenta en {{ site.data.variables.product.product_name }}, da clic en **Permitir**.
9. Regístrate en {{ site.data.variables.product.product_name }} para aprobar la extensión.

### Abrir un codespace en {{ site.data.variables.product.prodname_vscode }}

Después de que hayas conectado tu cuenta de {{ site.data.variables.product.product_name }} a la extensión de {{ site.data.variables.product.prodname_vs_codespaces }}, podrás desarrollar un codespace que hayas creado en {{ site.data.variables.product.product_name }} directamente en {{ site.data.variables.product.prodname_vscode }}.

{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
2. Debajo de Codespaces, da clic en el codespace en el que quieras desarrollar.
3. Da clic en en el icono de conexión al codespace. ![Icono de conectarse al codespace en {{ site.data.variables.product.prodname_vscode }}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
