---
title: 在 Visual Studio Code 中使用代码空间
intro: '您可以将 {% data variables.product.prodname_github_codespaces %} 扩展连接到您在 {% data variables.product.product_name %} 上的帐户，直接在 {% data variables.product.prodname_vscode %} 代码空间中开发。'
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

 
## About {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}

You can use your local install of {% data variables.product.prodname_vscode %} to create, manage, work in, and delete codespaces. To use {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}, you need to install the {% data variables.product.prodname_github_codespaces %} extension. For more information on setting up Codespaces in {% data variables.product.prodname_vscode %}, see "[Prerequisites](#prerequisites)."

By default, if you create a new codespace on {% data variables.product.prodname_dotcom_the_website %}, it will open in the browser. If you would prefer to open any new codespaces in {% data variables.product.prodname_vscode %} automatically, you can set your default editor to be {% data variables.product.prodname_vscode %}. For more information, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."

If you prefer to work in the browser, but want to continue using your existing {% data variables.product.prodname_vscode %} extensions, themes, and shortcuts, you can turn on Settings Sync. 更多信息请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)”。

## 基本要求

To develop in a codespace directly in {% data variables.product.prodname_vscode %}, you must install and sign into the {% data variables.product.prodname_github_codespaces %} extension with your {% data variables.product.product_name %} credentials. {% data variables.product.prodname_github_codespaces %} 扩展需要 {% data variables.product.prodname_vscode %} 2020 年 10 月 1 日版本 1.51 或更高版本。

使用 {% data variables.product.prodname_vs %} Marketplace 安装 [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 扩展。 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[扩展 Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 单击 **Sign in to view {% data variables.product.prodname_dotcom %}...（登录以查看 Codespaces...）**。

   ![登录以查看 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

3. 要授权 {% data variables.product.prodname_vscode %} 访问您在 {% data variables.product.product_name %} 上的帐户，请单击 **Allow（允许）**。
4. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 使用“REMOTE EXPLORER（远程资源管理器）”下拉列表，然后单击 **{% data variables.product.prodname_github_codespaces %}**。

   ![{% data variables.product.prodname_codespaces %} 标头](/assets/images/help/codespaces/codespaces-header-vscode.png)

3. 单击 **Sign in to view {% data variables.product.prodname_codespaces %}...（登录以查看 Codespaces...）**。

   ![登录以查看 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

4. 要授权 {% data variables.product.prodname_vscode %} 访问您在 {% data variables.product.product_name %} 上的帐户，请单击 **Allow（允许）**。
5. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endwindows %}

## 在 {% data variables.product.prodname_vscode %} 中创建代码空间

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## 在 {% data variables.product.prodname_vscode %} 中打开代码空间

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 在“Codespaces（代码空间）”下，单击您要在其中开发的代码空间。
3. 单击 Connect to Codespace（连接到代码空间）图标。

   ![{% data variables.product.prodname_vscode %} 中的连接到代码空间图标](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## 在 {% data variables.product.prodname_vscode %} 中更改机器类型

{% data reusables.codespaces.codespaces-machine-types %}

您可以随时更改代码空间的机器类型。

1. 在 {% data variables.product.prodname_vscode %} 中，打开命令调色板 (`shift command P` / `shift control P`)。
2. 搜索并选择“代码空间：更改机器类型”。

   ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

3. 单击您要更改的代码空间。

   ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

4. 选择您要使用的机器类型。

如果代码空间正在运行，则会显示一条消息，询问您现在是否要重新启动并重新连接到代码空间。 如果您想立即更改用于此代码空间的机器类型，请单击 **Yes（是）** 。 如果您单击 **No（否）**，或者代码空间当前未运行，更改将在代码空间下次重启时生效。

## 在 {% data variables.product.prodname_vscode %} 中删除代码空间

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Switching to the Insiders build of {% data variables.product.prodname_vscode %}

You can use the [Insiders Build of Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) within {% data variables.product.prodname_codespaces %}.

1. In bottom left of your {% data variables.product.prodname_codespaces %} window, select **{% octicon "gear" aria-label="The settings icon" %} Settings**.
2. From the list, select "Switch to Insiders Version".

   ![Clicking on "Insiders Build" in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Once selected, {% data variables.product.prodname_codespaces %} will continue to open in Insiders Version.
