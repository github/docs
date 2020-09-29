---
title: Using Codespaces in Visual Studio Code
intro: 'You can develop in your codespace directly in {% data variables.product.prodname_vscode %} by connecting the {% data variables.product.prodname_vs_codespaces %} extension with your account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Connecting the {% data variables.product.prodname_vs_codespaces %} extension to your {% data variables.product.prodname_dotcom %} account

Before you can develop in a codespace directly in {% data variables.product.prodname_vscode %}, you must configure the {% data variables.product.prodname_vs_codespaces %} extension to connect to your {% data variables.product.product_name %} account.

1. Use the {% data variables.product.prodname_vs %} Marketplace to install the [{% data variables.product.prodname_vs_codespaces %}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the {% data variables.product.prodname_vscode %} documentation.
2. In {% data variables.product.prodname_vscode %}, in the left sidebar, click the Extensions icon.
   ![The Extensions icon in {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. Below {% data variables.product.prodname_vs_codespaces %}, click the Manage icon, then click **Extension Settings**.
   ![The Extension Settings option](/assets/images/help/codespaces/select-extension-settings.png)
4. Use the Codespaces: Account Provider drop-down menu, and click **{% data variables.product.prodname_dotcom %}**.
   ![Setting the Account Provider to {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/select-account-provider-vscode.png)
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
6. If {% data variables.product.prodname_codespaces %} is not already selected in the header, click **{% data variables.product.prodname_codespaces %}**.
 ![The {% data variables.product.prodname_codespaces %} header](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. Click **Sign in to view {% data variables.product.prodname_codespaces %}...**.
   ![Signing in to view {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. To authorize {% data variables.product.prodname_vscode %} to access your account on {% data variables.product.product_name %}, click **Allow**.
9. Sign in to {% data variables.product.product_name %} to approve the extension.

### Opening a codespace in {% data variables.product.prodname_vscode %}

After you've connected your {% data variables.product.product_name %} account to the {% data variables.product.prodname_vs_codespaces %} extension, you can develop in a codespace that you created on {% data variables.product.product_name %} directly in {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Under Codespaces, click the codespace you want to develop in.
3. Click the Connect to Codespace icon.
 ![The Connect to Codespace icon in {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
