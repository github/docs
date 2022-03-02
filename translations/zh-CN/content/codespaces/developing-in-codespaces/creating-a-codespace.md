---
title: 创建代码空间
intro: 您可以为仓库中的分支创建代码空间以便在线开发。
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace
---

## 关于代码空间的创建

可以在 {% data variables.product.prodname_dotcom_the_website %} 上、{% data variables.product.prodname_vscode %} 中或使用 {% data variables.product.prodname_cli %} 创建代码空间。 {% data reusables.codespaces.codespaces-are-personal %}

代码空间与仓库的特定分支相关联，且仓库不能为空。 {% data reusables.codespaces.concurrent-codespace-limit %} 更多信息请参阅“[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)”。


创建代码空间时，需要执行一些步骤并将您连接到开发环境。

- 第 1 步：虚拟机和存储被分配到您的代码空间。
- 第 2 步：创建容器并克隆仓库。
- 第 3 步：您可以连接到代码空间。
- 第 4 步：代码空间继续创建后设置。

有关创建代码空间时会发生什么的更多信息，请参阅“[深潜](/codespaces/getting-started/deep-dive)”。

有关代码空间生命周期的更多信息，请参阅“[代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)”。

如果要将 Git 挂钩用于代码空间，则应在步骤 4 中使用 [`devcontainer.json` 生命周期脚本](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)设置挂钩，例如 `postCreateCommand`。 由于代码空间容器是在克隆仓库后创建的，因此在容器映像中配置的任何 [git template directory](https://git-scm.com/docs/git-init#_template_directory) 将不适用于代码空间。 在创建代码空间后，必须改为安装挂钩。 有关使用 `postCreateCommand` 的更多信息，请参阅 visual Studio Code 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) 。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## 访问 {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.availability %}

当您访问 {% data variables.product.prodname_codespaces %} 时，在查看仓库时会看到 **{% octicon "code" aria-label="The code icon" %} Code（代码）**下拉菜单中的“Codespaces（代码空间）”选项卡。

在以下条件下，您可以访问代码空间：

* 您是已启用 {% data variables.product.prodname_codespaces %} 并设定支出限额的组织的成员。
* 组织所有者已授予您访问 {% data variables.product.prodname_codespaces %}。
* 仓库归启用 {% data variables.product.prodname_codespaces %} 的组织所有。

{% note %}

**注意：** 已使用个人 {% data variables.product.prodname_dotcom %} 帐户加入测试版的个人不会失去 {% data variables.product.prodname_codespaces %} 访问权限，但个人的 {% data variables.product.prodname_codespaces %} 将继续保留在测试版中。

{% endnote %}

组织所有者可以允许组织的所有成员创建代码空间，将代码空间创建限制为选定的组织成员，或者禁用代码空间的创建。 有关管理对组织内代码空间的访问的更多信息，请参阅“[为组织中的用户启用代码空间](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)”。

在组织中使用 {% data variables.product.prodname_codespaces %} 之前，所有者或帐单管理员必须设定支出限额。 更多信息请参阅“[关于代码空间的支出限额](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)”。

如果想为您的个人帐户或其他用户拥有的仓库创建代码空间， 并且您有权在已启用 {% data variables.product.prodname_codespaces %} 的组织中创建仓库， 您可以将用户拥有的仓库复刻到该组织，然后为该复刻创建一个代码空间。

## 创建代码空间

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. 在仓库名称下，使用“Branch（分支）”下拉菜单选择您要为其创建代码的分支。

   ![分支下拉菜单](/assets/images/help/codespaces/branch-drop-down.png)

3. 在存储库名称下，使用 **{% octicon "code" aria-label="The code icon" %} 代码**下拉菜单，然后在**Codespaces（代码空间）**选项卡中，单击 {% octicon "plus" aria-label="The plus icon" %} **New codespace（新建代码空间）**。

   ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

   如果您是组织的成员，并且在该组织拥有的仓库上创建代码空间，您可以选择不同机器类型的选项。 从对话框中选择机器类型，然后点击 **Create codespace（创建代码空间）**。

   ![机器类型选择](/assets/images/help/codespaces/choose-custom-machine-type.png)

   {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建新的代码空间，请使用 `gh codespace create` 子命令。

```shell
gh codespace create 
```

系统将提示您选择仓库、分支和计算机类型（如果有多个可用）。

或者，您可以使用标志来指定部分或全部选项：

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> -m <em>machine-type</em> 
```

将 `owner/repo` 替换为仓库标识符。 将 `branch` 替换为您希望在代码空间中最初检出的分支的名称或提交的完整 SHA 哈希。 如果使用 `-r` 标志而不使用 `b` 标志，则将从默认分支创建代码空间。

将 `machine-type` 替换为可用计算机类型的有效标识符。 标识符是字符串，例如：`basicLinux32gb` 和 `standardLinux32gb`。 可用的计算机类型取决于仓库、您的用户帐户和您的位置。 如果输入无效或不可用的计算机类型，则错误消息中将显示可用类型。 如果省略此标志，并且有多个计算机类型可用，系统将提示您从列表中选择一个计算机类型。

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_create)。

{% endcli %}
