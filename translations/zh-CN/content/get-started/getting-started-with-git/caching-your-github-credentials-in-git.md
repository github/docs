---
title: 在 Git 中缓存 GitHub 凭据
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: '如果您[使用 HTTPS 克隆 {% data variables.product.product_name %} 存储库](/github/getting-started-with-github/about-remote-repositories)，我们建议您使用 {% data variables.product.prodname_cli %} 或 Git Credential Manager (GCM) 来记住您的凭据。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 缓存凭据
---

{% tip %}

**提示：**如果您使用 SSH 克隆 {% data variables.product.product_name %} 仓库，则可使用 SSH 密钥进行身份验证，而不是使用其他凭据。 有关设置 SSH 连接的信息，请参阅“[生成 SSH 密钥](/articles/generating-an-ssh-key)”。

{% endtip %}

## {% data variables.product.prodname_cli %}

当您选择 `HTTPS` 作为 Git 操作的首选协议时，{% data variables.product.prodname_cli %} 将自动为您存储 Git 凭据，并对询问您是否要使用 {% data variables.product.product_name %} 凭据向 Git 进行身份验证的提示回答“是”。

1. 在 macOS、Windows 或 Linux 上[安装](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %}。
2. 在命令行中，输入 `gh auth login`，然后按照提示操作。
   - 当系统提示输入 Git 操作的首选协议时，请选择 `HTTPS`。
   - 当系统询问您是否要使用 {% data variables.product.product_name %} 凭据向 Git 进行身份验证时，请输入 `Y`。

有关使用 {% data variables.product.prodname_cli %} 进行身份验证的详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

## Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) 是安全存储凭据并通过 HTTPS 连接到 GitHub 的另一种方法。 使用 GCM，您不必手动[创建和存储 PAT](/github/authenticating-to-github/creating-a-personal-access-token)，因为 GCM 代表您管理身份验证，包括 2FA（双重身份验证）。

{% mac %}

1. 使用 [Homebrew](https://brew.sh/) 安装 Git：
  ```shell
  $ brew install git
  ```

2. 使用 Homebrew 安装 GCM：
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  对于 MacOS，您不需要运行 `git config`，因为 GCM 会自动为您配置 Git。

{% data reusables.gcm-core.next-time-you-clone %}

验证成功后，您的凭据存储在 macOS 密钥链中，每次克隆 HTTPS URL 时都会使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

{% endmac %}

{% windows %}

1. 安装 Windows 版 Git，其中包括 GCM。 更多信息请参阅其[版本页面](https://github.com/git-for-windows/git/releases/latest)中的“[Windows 版 Git](https://github.com/git-for-windows/git/releases/latest)”。

我们建议始终安装最新版本。 至少安装版本 2.29 或更高版本，这是第一个为 GitHub 提供 OAuth 支持的版本。

{% data reusables.gcm-core.next-time-you-clone %}

成功通过身份验证后，您的凭据将存储在 Windows 凭据管理器中，并且每次克隆 HTTPS URL 时都将使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

<br>

{% warning %}

**警告：** 旧版本的 Windows 版 Git 附有 Windows 版 Git Credential Manager。 此旧产品不再受支持，并且无法通过 OAuth 连接到 GitHub。 我们建议您升级到[最新版本的 Windows 版 Git](https://github.com/git-for-windows/git/releases/latest)。

{% endwarning %}

{% warning %}

**警告：**如果在 Windows 凭据管理器中缓存了不正确或过期的凭据，Git 将无法访问 {% data variables.product.product_name %}。 若要重置缓存的凭据，以便 Git 提示您输入凭据，请在 Windows 控制面板中的“用户帐户”>“凭据管理器”下访问凭据管理器。 找到 {% data variables.product.product_name %} 条目并将其删除。

{% endwarning %}

{% endwindows %}

{% linux %}

对于 Linux，安装 Git 和 GCM，然后配置 Git 使用 GCM。

1. 从发行版的打包系统安装 Git。 说明将根据您运行的 Linux 的风格而有所不同。

2. 安装 GCM。 请参阅 [GCM 存储库中的说明](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions)，因为它们会因您运行的 Linux 风格而异。

3. 配置 Git 使用 GCM 有几个支持商店，您可以从中选择，因此请参阅 GCM 文档来完成设置。 更多信息请参阅“[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)”。

{% data reusables.gcm-core.next-time-you-clone %}

验证成功后，您的凭据存储在系统中，每次克隆 HTTPS URL 时都会使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

有关在 Linux 上存储凭据的更多选项，请参阅 Pro Git 中的[凭据存储](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) 。

{% endlinux %}

<br>

如需详细信息或报告 GCM 问题，请参阅 [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) 上的官方 GCM 文档。
