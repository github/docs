---
title: 个性化您账户的 Codespaces
intro: '您可以通过使用 {% data variables.product.product_name %} 上的 `dotfiles` 仓库或使用设置同步来个性化 {% data variables.product.prodname_codespaces %}。'
permissions: 'Anyone can personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### 关于个性化 {% data variables.product.prodname_codespaces %}

在使用任何开发环境时，根据您的喜好和工作流程自定义设置和工具是一个重要步骤。 {% data variables.product.prodname_codespaces %} 允许两种主要方法个性化您的代码空间。

- [设置同步](#settings-sync) - 您可以在 {% data variables.product.prodname_codespaces %} 与其他 {% data variables.product.prodname_vscode %}实例之间使用和共享 {% data variables.product.prodname_vscode %} 设置。
- [Dotfiles](#dotfiles) - 您可以使用公共 `dotfiles` 仓库来指定脚本、shell 首选项和其他配置。

{% data variables.product.prodname_codespaces %} 个性化适用于您创建的任何代码空间。

项目维护员还可以定义默认配置，将应用到任何人创建的仓库的每个代码空间。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

### 设置同步

设置同步允许您在机器和 {% data variables.product.prodname_vscode %} 实例中共享配置，如设置、键盘快捷方式、片段、扩展和 UI 状态。

设置同步默认打开。 要配置任何设置，在活动栏的左下角，选择 {% octicon "gear" aria-label="The gear icon" %} 并单击 **Settings Sync is on（设置同步打开）**。 从对话框中，您可以选择配置、显示设置和数据，或关闭设置同步。

![在管理菜单中设置同步选项](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[设置同步指南](https://code.visualstudio.com/docs/editor/settings-sync)。

### Dotfiles

Dotfiles 是类似 Unix 的系统上以 `.` 开头的文件和文件夹，用于控制系统上应用程序和 shell 的配置。 您可以在 {% data variables.product.prodname_dotcom %} 上的仓库中存储和管理 dotfiles。 有关 `dotfiles` 仓库中所含内容的建议和教程，请参阅 [GitHub 执行 dotfiles](https://dotfiles.github.io/)。

如果您在 {% data variables.product.prodname_dotcom %} 上的用户帐户拥有名为 `dotfiles` 的公共仓库，{% data variables.product.prodname_dotcom %} 会自动使用这个仓库来个性化设置您的代码空间环境。 私有 `dotfiles` 仓库目前不支持。

`dotfiles` 仓库可能包括 shell 别名和首选项、您想要安装的任何工具或您想要执行的任何其他代码个性化。

创建新的代码空间时，{% data variables.product.prodname_dotcom %} 会将 `dotfile` 仓库克隆到代码空间环境，并查找以下文件之一来设置环境。

* _install.sh_
* _安装_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

如果未找到这些文件，则 `dotfiles` 中以 `.` 开头的文件或文件夹通过符号链接到代码空间的 `~` 或 `$HOME` 目录。

对 `dotfile` 仓库所做的任何更改只会应用到每个新的代码空间，而不影响任何现有的代码空间。

{% note %}

**注：**目前，{% data variables.product.prodname_codespaces %} 不支持使用 `dotfiles` 仓库个性化 {% data variables.product.prodname_vscode %} 编辑器的_用户_设置。 您可以为项目仓库中的特定项目设置默认的 _Workspace_ 和 _Remote [Codespaces]_ 设置。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)”。

{% endnote %}

您还可以配置用户帐户的设置以添加加密密码、启用 GPG 验证以及允许代码空间访问其他仓库。 更多信息请参阅“[管理 {% data variables.product.prodname_codespaces %} 的加密密码](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”、“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”以及“[管理 {% data variables.product.prodname_codespaces %} 的访问权限和设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)”。

### 延伸阅读

* "[创建新仓库](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
