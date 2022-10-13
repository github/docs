---
title: Setting your default editor for GitHub Codespaces
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
---

On the settings page, you can set your editor preference so that when you create a codespace, or open an existing codespace, it is opened in your choice of:
* The {% data variables.product.prodname_vscode %} desktop appliction
* The {% data variables.product.prodname_vscode %} web client
* The JetBrains Gateway application

If you want to use {% data variables.product.prodname_vscode %} as your default editor for {% data variables.product.prodname_github_codespaces %}, you need to install {% data variables.product.prodname_vscode %} and the {% data variables.product.prodname_github_codespaces %} extension for {% data variables.product.prodname_vscode %}. For more information, see the [download page for {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) and the [{% data variables.product.prodname_github_codespaces %} extension on the {% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

If you want to work on a codespace in a JetBrains IDE you must install the JetBrains Gateway. For more information, see "[Using Codespaces in your JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."

## Setting your default editor

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Editor preference", select the option you want.

   ![Setting your editor](/assets/images/help/codespaces/select-default-editor.png)

   * If you choose **{% data variables.product.prodname_vscode %}**, {% data variables.product.prodname_github_codespaces %} will automatically open in the desktop application when you next create or open a codespace. 

     You may need to allow access to both your browser and {% data variables.product.prodname_vscode %} for it to open successfully.<br><br>
     
   * If you choose **JetBrains Gateway**, the Gateway application will automatically open when you next create or open a codespace. 

     The first time you open a codespace this way you must give permission to open the application. 

     The Gateway application will open and the codespace will then be automatically selected. You can then choose a JetBrains IDE, if  you have not previously done so, and click **Connect** to open the codespace in the JetBrains client. For more information, see "[Using Codespaces in your JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."
