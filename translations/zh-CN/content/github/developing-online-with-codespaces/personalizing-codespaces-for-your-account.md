---
title: 个性化您账户的 Codespaces
intro: '{% data variables.product.prodname_codespaces %} 使用您在 {% data variables.product.product_name %} 上的 `dotfiles` 仓库个性化您创建的每个新代码空间。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: '任何人都可以创建 `dotfiles` 仓库来个性化其用户帐户的 {% data variables.product.prodname_codespaces %}。'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

Dotfiles 是类似 Unix 的系统上以 `.` 开头的文件和文件夹，用于控制系统上应用程序和 shell 的配置。 您可以在 {% data variables.product.prodname_dotcom %} 上的仓库中存储和管理 dotfiles。 有关 `dotfiles` 仓库中所含内容的建议和教程，请参阅 [GitHub 执行 dotfiles](https://dotfiles.github.io/)。

如果您在 {% data variables.product.prodname_dotcom %} 上的用户帐户拥有名为 `dotfiles` 的公共仓库，{% data variables.product.prodname_dotcom %} 会自动使用这个仓库来个性化设置您的代码空间环境。 私有 `dotfiles` 仓库目前不支持。

`dotfiles` 仓库可能包括 shell 别名和首选项、您想要安装的任何工具或您想要执行的任何其他代码个性化。

使用 `dotfiles` 仓库的代码空间个性化设置应用到您创建的任何代码空间。 项目维护员还可以定义默认配置，将应用到任何人创建的仓库的每个代码空间。 {% data reusables.codespaces.codespace-config-order %} 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

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
