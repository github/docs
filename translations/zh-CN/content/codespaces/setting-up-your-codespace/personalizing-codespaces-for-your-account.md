---
title: 个性化您账户的 Codespaces
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
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

### About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a public `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

项目维护员还可以定义默认配置，将应用到任何人创建的仓库的每个代码空间。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

### Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

Settings Sync is on by default. To configure any settings, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is on**. From the dialog, you can choose to configure, show settings and data, or turn off Settings Sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

### Dotfiles

Dotfiles 是类似 Unix 的系统上以 `.` 开头的文件和文件夹，用于控制系统上应用程序和 shell 的配置。 您可以在 {% data variables.product.prodname_dotcom %} 上的仓库中存储和管理 dotfiles。 有关 `dotfiles` 仓库中所含内容的建议和教程，请参阅 [GitHub 执行 dotfiles](https://dotfiles.github.io/)。

如果您在 {% data variables.product.prodname_dotcom %} 上的用户帐户拥有名为 `dotfiles` 的公共仓库，{% data variables.product.prodname_dotcom %} 会自动使用这个仓库来个性化设置您的代码空间环境。 私有 `dotfiles` 仓库目前不支持。

`dotfiles` 仓库可能包括 shell 别名和首选项、您想要安装的任何工具或您想要执行的任何其他代码个性化。

创建新的代码空间时，{% data variables.product.prodname_dotcom %} 会将 `dotfile` 仓库克隆到代码空间环境，并查找以下文件之一来设置环境。

* _install.sh_
* _安装_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

如果未找到这些文件，则 `dotfiles` 中以 `.` 开头的文件或文件夹通过符号链接到代码空间的 `~` 或 `$HOME` 目录。

对 `dotfile` 仓库所做的任何更改只会应用到每个新的代码空间，而不影响任何现有的代码空间。

{% note %}

**注：**目前，{% data variables.product.prodname_codespaces %} 不支持使用 `dotfiles` 仓库个性化 {% data variables.product.prodname_vscode %} 编辑器的_用户_设置。 您可以为项目仓库中的特定项目设置默认的 _Workspace_ 和 _Remote [Codespaces]_ 设置。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)”。

{% endnote %}

您还可以配置用户帐户的设置以添加加密密码、启用 GPG 验证以及允许代码空间访问其他仓库。 更多信息请参阅“[管理 {% data variables.product.prodname_codespaces %} 的加密密码](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”、“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”以及“[管理 {% data variables.product.prodname_codespaces %} 的访问权限和设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)”。

### 延伸阅读

* "[创建新仓库](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
