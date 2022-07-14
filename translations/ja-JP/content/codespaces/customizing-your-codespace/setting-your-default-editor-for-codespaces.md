---
title: Setting your default editor for Codespaces
shortTitle: Set the default editor
intro: 'You can set your default editor for {% data variables.product.prodname_codespaces %} in your personal settings page.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
---

On the settings page, you can set your editor preference so that any newly created codespaces are opened automatically in either {% data variables.product.prodname_vscode %} for Web or the {% data variables.product.prodname_vscode %} desktop application.

If you want to use {% data variables.product.prodname_vscode %} as your default editor for {% data variables.product.prodname_codespaces %}, you need to install {% data variables.product.prodname_vscode %} and the {% data variables.product.prodname_github_codespaces %} extension for {% data variables.product.prodname_vscode %}. For more information, see the [download page for {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) and the [{% data variables.product.prodname_github_codespaces %} extension on the {% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Setting your default editor

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Editor preference", select the option you want. ![Setting your editor](/assets/images/help/codespaces/select-default-editor.png) If you choose **{% data variables.product.prodname_vscode %}**, {% data variables.product.prodname_codespaces %} will automatically open in the desktop application when you next create a codespace. You may need to allow access to both your browser and {% data variables.product.prodname_vscode %} for it to open successfully. ![Setting your editor](/assets/images/help/codespaces/launch-default-editor.png)
