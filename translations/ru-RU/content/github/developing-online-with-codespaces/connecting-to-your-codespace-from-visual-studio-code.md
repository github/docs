---
title: Connecting to your codespace from Visual Studio Code
intro: 'You can develop in your codespace directly in {{ site.data.variables.product.prodname_vscode }} by connecting the {{ site.data.variables.product.prodname_vs_codespaces }} extension with your account on {{ site.data.variables.product.product_name }}.'
product: '{{ site.data.reusables.gated-features.codespaces }}'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.codespaces.release-stage }}

### Connecting the {{ site.data.variables.product.prodname_vs_codespaces }} extension to your {{ site.data.variables.product.prodname_dotcom }} account

Before you can develop in a codespace directly in {{ site.data.variables.product.prodname_vscode }}, you must configure the {{ site.data.variables.product.prodname_vs_codespaces }} extension to connect to your {{ site.data.variables.product.product_name }} account.

1. Use the {{ site.data.variables.product.prodname_vs }} Marketplace to install the [{{ site.data.variables.product.prodname_vs_codespaces }}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the {{ site.data.variables.product.prodname_vscode }} documentation.
2. In {{ site.data.variables.product.prodname_vscode }}, in the left sidebar, click the Extensions icon. ![The Extensions icon in {{ site.data.variables.product.prodname_vscode }}](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. Below {{ site.data.variables.product.prodname_vs_codespaces }}, click the Manage icon, then click **Extension Settings**. ![The Extension Settings option](/assets/images/help/codespaces/select-extension-settings.png)
4. Use the Codespaces: Account Provider drop-down menu, and click **{{ site.data.variables.product.prodname_dotcom }}**. ![Setting the Account Provider to {{ site.data.variables.product.prodname_dotcom }}](/assets/images/help/codespaces/select-account-provider-vscode.png)
{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
6. If {{ site.data.variables.product.prodname_codespaces }} is not already selected in the header, click **{{ site.data.variables.product.prodname_codespaces }}**. ![The {{ site.data.variables.product.prodname_codespaces }} header](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. Click **Sign in to view {{ site.data.variables.product.prodname_codespaces }}...**. ![Signing in to view {{ site.data.variables.product.prodname_codespaces }}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. To authorize {{ site.data.variables.product.prodname_vscode }} to access your account on {{ site.data.variables.product.product_name }}, click **Allow**.
9. Sign in to {{ site.data.variables.product.product_name }} to approve the extension.

### Opening a codespace in {{ site.data.variables.product.prodname_vscode }}

After you've connected your {{ site.data.variables.product.product_name }} account to the {{ site.data.variables.product.prodname_vs_codespaces }} extension, you can develop in a codespace that you created on {{ site.data.variables.product.product_name }} directly in {{ site.data.variables.product.prodname_vscode }}.

{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
2. Under Codespaces, click the codespace you want to develop in.
3. Click the Connect to Codespace icon. ![The Connect to Codespace icon in {{ site.data.variables.product.prodname_vscode }}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
