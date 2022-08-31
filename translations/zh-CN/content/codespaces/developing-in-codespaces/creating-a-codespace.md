---
title: 创建代码空间
intro: 您可以为仓库中的分支创建代码空间以便在线开发。
product: '{% data reusables.gated-features.codespaces %}'
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
shortTitle: 创建代码空间
---

## 关于代码空间的创建

可以在 {% data variables.product.prodname_dotcom_the_website %} 上、{% data variables.product.prodname_vscode %} 中或使用 {% data variables.product.prodname_cli %} 创建代码空间。 {% data reusables.codespaces.codespaces-are-personal %}

代码空间与仓库的特定分支相关联，且仓库不能为空。 {% data reusables.codespaces.concurrent-codespace-limit %}


创建代码空间时，需要执行一些步骤并将您连接到开发环境。

- 第 1 步：虚拟机和存储被分配到您的代码空间。
- 第 2 步：创建容器并克隆仓库。
- 第 3 步：您可以连接到代码空间。
- 第 4 步：代码空间继续创建后设置。

有关创建代码空间时会发生什么的更多信息，请参阅“[深潜](/codespaces/getting-started/deep-dive)”。

有关代码空间生命周期的更多信息，请参阅“[代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)”。

如果要将 Git 挂钩用于代码空间，则应在步骤 4 中使用 [`devcontainer.json` 生命周期脚本](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)设置挂钩，例如 `postCreateCommand`。 由于代码空间容器是在克隆仓库后创建的，因此在容器映像中配置的任何 [git template directory](https://git-scm.com/docs/git-init#_template_directory) 将不适用于代码空间。 在创建代码空间后，必须改为安装挂钩。 有关使用 `postCreateCommand` 的更多信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) 。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## 访问 {% data variables.product.prodname_github_codespaces %}

当您访问 {% data variables.product.prodname_github_codespaces %} 时，在查看仓库时会看到 **{% octicon "code" aria-label="The code icon" %} Code（代码）**下拉菜单中的“Codespaces（代码空间）”选项卡。

You'll have access to {% data variables.product.prodname_github_codespaces %} under the following conditions:

Either all of these are true:
* You are a member, or outside collaborator, of an organization that has enabled {% data variables.product.prodname_codespaces %} and set a spending limit.
* The organization owner has allowed you to create codespaces at the organization's expense.
* The repository for which you want to create a codespace is owned by this organization.

Or both of these are true:
* You are participating in the beta of {% data variables.product.prodname_codespaces %} for individual users.
* Either you own the repository for which you want to create a codespace, or it is owned by an organization of which you are either a member or an outside collaborator.

Before {% data variables.product.prodname_codespaces %} can be used in an organization, an owner or billing manager must have set a spending limit. For more information, see "[About spending limits for Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)."

Organization owners can specify who can create and use codespaces at the organization's expense. Organization owners can also prevent any codespace usage being charged to the organization. For more information, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)."

## 创建代码空间

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，使用“Branch（分支）”下拉菜单选择您要为其创建代码的分支。

   ![分支下拉菜单](/assets/images/help/codespaces/branch-drop-down.png)

1. 单击 **{% octicon "code" aria-label="The code icon" %} 代码**按钮，然后单击 **Codespaces** 选项卡。

   ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

1. 使用默认选项或在配置高级选项后创建代码空间：

   * **Use the default options**

      To create a codespace using the default options, click **Create codespace on BRANCH**.

      Optionally, before clicking **Create codespace on BRANCH**, you can click the down arrow at the side of the button to see what machine type will be used for your codespace.

      ![View the default machine type](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Note**: The machine type with the lowest resources that are valid for the repository is selected by default.

      {% endnote %}

   * **Configure options**

      To configure advanced options for your codespace, such as a different machine type or a particular `devcontainer.json` file:

      1. Click the down arrow at the side of the **Create codespace on BRANCH** button, then click **Configure and create codespace**.
      1. Click the **Configure and create codespace** button.
      1. On the options page for your codespace, choose your preferred options from the drop-down menus.

         ![The codespace options page](/assets/images/help/codespaces/advanced-options.png)

         {% note %}

         **注：**

         * You can bookmark the options page to give you a quick way to create a codespace for this repository and branch.
         * The [https://github.com/codespaces/new](https://github.com/codespaces/new) page provides a quick way to create a codespace for any repository and branch. You can get to this page quickly by typing `codespace.new` into your browser's address bar.
         * For more information about the `devcontainer.json` file, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."
         * For more information about machine types, see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."
         * {% data reusables.codespaces.codespaces-machine-type-availability %}

         {% endnote %}

      1. Click **Start session**.

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

You are prompted to choose a repository, a branch, a dev container configuration file (if more than one is available), and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> --devcontainer-path <em>path</em> -m <em>machine-type</em> 
```

In this example, replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `path` with the path to the dev container configuration file you want to use for the new codespace. If you omit this flag and more than one dev container file is available you will be prompted to choose one from a list. For more information about the dev container configuration file, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)."

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your personal account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For full details of the options for this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}
