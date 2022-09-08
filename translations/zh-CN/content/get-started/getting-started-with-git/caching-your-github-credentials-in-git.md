---
title: 在 Git 中缓存 GitHub 凭据
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: '如果你[使用 HTTPS 克隆 {% data variables.product.product_name %} 存储库](/github/getting-started-with-github/about-remote-repositories)，我们建议你使用 {% data variables.product.prodname_cli %} 或 Git Credential Manager (GCM) 来记住你的凭据。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097909'
---
{% tip %}

**提示：** 如果使用 SSH 克隆 {% data variables.product.product_name %} 存储库，则可使用 SSH 密钥进行身份验证，而不是使用其他凭据。 有关设置 SSH 连接的信息，请参阅“[生成 SSH 密钥](/articles/generating-an-ssh-key)”。

{% endtip %}

## {% data variables.product.prodname_cli %}

选择 `HTTPS` 作为 Git 操作的首选协议时，{% data variables.product.prodname_cli %} 将自动为你存储 Git 凭据，并对询问你是否要使用 {% data variables.product.product_name %} 凭据向 Git 进行身份验证的提示回答“是”。

1. 在 macOS、Windows 或 Linux 上[安装](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %}。
2. 在命令行中，输入 `gh auth login`，然后按照提示进行操作。
   - 当系统提示输入 Git 操作的首选协议时，请选择 `HTTPS`。
   - 当系统询问是否要使用 {% data variables.product.product_name %} 凭据向 Git 进行身份验证时，请输入 `Y`。

有关使用 {% data variables.product.prodname_cli %} 进行身份验证的详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

## Git Credential Manager

[Git 凭据管理器](https://github.com/GitCredentialManager/git-credential-manager) (GCM) 是安全存储凭据并通过 HTTPS 连接到 GitHub 的另一种方法。 使用 GCM 时，不必手动[创建和存储 PAT](/github/authenticating-to-github/creating-a-personal-access-token)，因为 GCM 代表你管理身份验证，包括 2FA（双因素身份验证）。

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
  对于 MacOS，不需要运行 `git config`，因为 GCM 会自动为你配置 Git。

{% data reusables.gcm-core.next-time-you-clone %}

验证成功后，您的凭据存储在 macOS 密钥链中，每次克隆 HTTPS URL 时都会使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

{% endmac %}

{% windows %}

1. 安装 Windows 版 Git，其中包括 GCM。 有关详细信息，请参阅[版本页面](https://github.com/git-for-windows/git/releases/latest)中的 [Git for Windows 版本](https://github.com/git-for-windows/git/releases/latest)。

我们建议始终安装最新版本。 至少安装版本 2.29 或更高版本，这是第一个为 GitHub 提供 OAuth 支持的版本。

{% data reusables.gcm-core.next-time-you-clone %}

成功通过身份验证后，您的凭据将存储在 Windows 凭据管理器中，并且每次克隆 HTTPS URL 时都将使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

<br>

{% warning %}

**警告：** 旧版本的 Git for Windows 附有 Windows 版 Git 凭据管理器。 此旧产品不再受支持，并且无法通过 OAuth 连接到 GitHub。 建议升级到[最新版本的 Git for Windows](https://github.com/git-for-windows/git/releases/latest)。

{% endwarning %}

{% warning %}

**警告：** 如果在 Windows 版凭据管理器中缓存了不正确或过期的凭据，Git 将无法访问 {% data variables.product.product_name %}。 若要重置缓存的凭据，以便 Git 提示输入凭据，请在 Windows 控制面板中的“用户帐户”>“凭据管理器”下访问凭据管理器。 找到 {% data variables.product.product_name %} 条目并将其删除。 

{% endwarning %}

{% endwindows %}

{% linux %}

对于 Linux，安装 Git 和 GCM，然后配置 Git 使用 GCM。

1. 从发行版的打包系统安装 Git。 说明将根据您运行的 Linux 的风格而有所不同。

2. 安装 GCM。 查看 [GCM 存储库中的说明](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions)，说明将根据运行的 Linux 的风格而有所不同。

3. 配置 Git 使用 GCM 有几个支持商店，您可以从中选择，因此请参阅 GCM 文档来完成设置。 有关详细信息，请参阅“[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)”。

{% data reusables.gcm-core.next-time-you-clone %}

验证成功后，您的凭据存储在系统中，每次克隆 HTTPS URL 时都会使用。 Git 不会要求您在命令行中再次键入凭据，除非您更改凭据。

有关在 Linux 上存储凭据的更多选项，请参阅 Pro Git 中的[凭据存储](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)。

{% endlinux %}

<br>

如需详细信息或报告 GCM 问题，请参阅官方 GCM 文档的“[Git 凭据管理器](https://github.com/GitCredentialManager/git-credential-manager)”部分。
