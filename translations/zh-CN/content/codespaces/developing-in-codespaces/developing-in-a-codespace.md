---
title: 在代码空间中开发
intro: '您可以在 {% data variables.product.product_name %} 上打开代码空间，然后使用 {% data variables.product.prodname_vscode %} 的功能进行开发。'
permissions: Anyone can develop in a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### 关于 {% data variables.product.prodname_codespaces %} 的开发

{% data variables.product.prodname_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Codespace overview with annotations](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Side Bar - By default, this area shows your project files in the Explorer.
2. Activity Bar - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
3. Editor - This is where you edit your files. You can use the tab for each editor to position it exactly where you need it.
4. Panels - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
5. Status Bar - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.

For more information on using {% data variables.product.prodname_vscode %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} 更多信息请参阅“[代码空间故障排除](/github/developing-online-with-codespaces/troubleshooting-your-codespace)”。

#### Personalizing your codespace

{% data reusables.codespaces.about-personalization %} 更多信息请参阅“[个性化您帐户的 {% data variables.product.prodname_codespaces %}](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)”。

{% data reusables.codespaces.apply-devcontainer-changes %} 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)”。

#### Running your app from a codespace
{% data reusables.codespaces.about-port-forwarding %} 更多信息请参阅“[代码空间中的转发端口](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)”。

#### Committing your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Navigating to an existing codespace

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. 单击您要在其中开发的代码空间的名称。 ![代码空间的名称](/assets/images/help/codespaces/click-name-codespace.png)

Alternatively, you can see any active codespaces for a repository by navigating to the repository in which it was made and selecting **{% octicon "codespaces" aria-label="The codespaces icon" %} Codespaces**.
