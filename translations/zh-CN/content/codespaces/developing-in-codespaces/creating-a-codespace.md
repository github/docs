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

You can create a codespace on {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

代码空间与仓库的特定分支相关联，且仓库不能为空。 {% data reusables.codespaces.concurrent-codespace-limit %} 更多信息请参阅“[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)”。


创建代码空间时，需要执行一些步骤并将您连接到开发环境。

- 第 1 步：虚拟机和存储被分配到您的代码空间。
- 第 2 步：创建容器并克隆仓库。
- 第 3 步：您可以连接到代码空间。
- 第 4 步：代码空间继续创建后设置。

有关创建代码空间时会发生什么的更多信息，请参阅“[深潜](/codespaces/getting-started/deep-dive)”。

For more information on the lifecycle of a codespace, see "[Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)."

If you want to use Git hooks for your codespace, then you should set up hooks using the [`devcontainer.json` lifecycle scripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), such as `postCreateCommand`, during step 4. Since your codespace container is created after the repository is cloned, any [git template directory](https://git-scm.com/docs/git-init#_template_directory) configured in the container image will not apply to your codespace. Hooks must instead be installed after the codespace is created. For more information on using `postCreateCommand`, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the Visual Studio Code documentation.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

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

3. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

   ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

   如果您是组织的成员，并且在该组织拥有的仓库上创建代码空间，您可以选择不同机器类型的选项。 From the dialog box, choose a machine type and then click **Create codespace**.

   ![机器类型选择](/assets/images/help/codespaces/choose-custom-machine-type.png)

   {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a new codespace, use the `gh codespace create` subcommand.

```shell
gh codespace create 
```

You are prompted to choose a repository, a branch, and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> -m <em>machine-type</em> 
```

Replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your user account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}
