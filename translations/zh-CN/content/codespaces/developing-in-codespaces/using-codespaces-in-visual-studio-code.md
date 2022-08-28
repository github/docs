---
title: 在 Visual Studio Code 中使用代码空间
intro: '您可以将 {% data variables.product.prodname_github_codespaces %} 扩展连接到您在 {% data variables.product.product_name %} 上的帐户，直接在 {% data variables.product.prodname_vscode %} 代码空间中开发。'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
---

{% data reusables.codespaces.release-stage %}

### 基本要求

要直接在 {% data variables.product.prodname_vscode %} 中开发代码空间，必须登录到 {% data variables.product.prodname_github_codespaces %} 扩展。 {% data variables.product.prodname_github_codespaces %} 扩展需要 {% data variables.product.prodname_vscode %} 2020 年 10 月 1 日版本 1.51 或更高版本。

使用 {% data variables.product.prodname_vs %} Marketplace 安装 [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 扩展。 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[扩展 Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 单击 **Sign in to view {% data variables.product.prodname_dotcom %}...（登录以查看 Codespaces...）**。 ![登录以查看 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)
3. 要授权 {% data variables.product.prodname_vscode %} 访问您在 {% data variables.product.product_name %} 上的帐户，请单击 **Allow（允许）**。
4. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 使用“REMOTE EXPLORER（远程资源管理器）”下拉列表，然后单击 **{% data variables.product.prodname_github_codespaces %}**。 ![{% data variables.product.prodname_codespaces %} 标头](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. 单击 **Sign in to view {% data variables.product.prodname_codespaces %}...（登录以查看 Codespaces...）**。 ![登录以查看 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. 要授权 {% data variables.product.prodname_vscode %} 访问您在 {% data variables.product.product_name %} 上的帐户，请单击 **Allow（允许）**。
5. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endwindows %}

### 在 {% data variables.product.prodname_vscode %} 中创建代码空间

将 {% data variables.product.product_name %} 帐户连接到 {% data variables.product.prodname_github_codespaces %} 扩展后，您可以在 {% data variables.product.prodname_vscode %} 或 {% data variables.product.product_name %} 上创建的代码空间中进行开发。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 单击 Add（添加）图标，然后单击 **Create New Codespace（创建新代码空间）**。 ![{% data variables.product.prodname_codespaces %} 中的 Create new Codespace（创建新代码空间）选项](/assets/images/help/codespaces/create-codespace-vscode.png)
3. 键入，然后单击要在其中开发仓库的名称。 ![搜索仓库以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. 单击要在其中开发的分支。 ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)
5. Click the machine type you want to develop in. ![新 {% data variables.product.prodname_codespaces %} 的实例类型](/assets/images/help/codespaces/choose-sku-vscode.png)
### 在 {% data variables.product.prodname_vscode %} 中打开代码空间

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 在“Codespaces（代码空间）”下，单击您要在其中开发的代码空间。
3. 单击 Connect to Codespace（连接到代码空间）图标。 ![{% data variables.product.prodname_vscode %} 中的连接到代码空间图标](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### 在 {% data variables.product.prodname_vscode %} 中更改机器类型

{% data reusables.codespaces.codespaces-machine-types %}

您可以随时更改代码空间的机器类型。

1. 在 {% data variables.product.prodname_vscode %} 中，打开命令调色板 (`shift command P` / `shift control P`)。
2. 搜索并选择“代码空间：更改机器类型”。 ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)
3. 单击您要更改的代码空间。 ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)
4. 选择您要使用的机器类型。 ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-type.png)

如果代码空间正在运行，则会显示一条消息，询问您现在是否要重新启动并重新连接到代码空间。 如果您想立即更改用于此代码空间的机器类型，请单击 **Yes（是）** 。 如果您单击 **No（否）**，或者代码空间当前未运行，更改将在代码空间下次重启时生效。

### 在 {% data variables.product.prodname_vscode %} 中删除代码空间

1. 在“Codespaces（代码空间）”下，右键点击您要删除的代码空间。
2. 在下拉菜单中，单击 **Delete Codespace（删除代码空间）**。 ![在 {% data variables.product.prodname_dotcom %} 中删除代码空间](/assets/images/help/codespaces/delete-codespace-vscode.png)
