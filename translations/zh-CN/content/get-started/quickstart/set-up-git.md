---
title: 设置 Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: '{% data variables.product.prodname_dotcom %} 的核心是名为 Git 的开源版本控制系统 (VCS)。 Git 负责在你计算机上本地发生的、与 {% data variables.product.prodname_dotcom %} 有关的所有内容。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643955'
---
## 使用 Git

若要在命令行中使用 Git，你将需要在计算机上下载、安装和配置 Git。 您还可以安装 {% data variables.product.prodname_cli %} 以从命令行使用 {% data variables.product.prodname_dotcom %} 。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

如果要在本地使用 Git，但不想使用命令行，可以下载并安装 [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) 客户端。  有关详细信息，请参阅“[安装并配置 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)”。

如果无需在本地使用文件，{% data variables.product.product_name %} 可让你在浏览器中直接完成许多 Git 相关的操作，包括：

- [创建存储库](/articles/create-a-repo)
- [存储库创建分支](/articles/fork-a-repo)
- [管理文件](/repositories/working-with-files/managing-files)
- [社交化](/articles/be-social)

## 设置 Git

1. [下载并安装最新版本的 Git](https://git-scm.com/downloads)。

   {% note %}
   
   注意：如果使用的是 Chrome OS 设备，则需要进行其他设置：
   
   1. 在 Chrome OS 设备上安装终端模拟器，例如 Google Play 商店中的 Termux。
   1. 从您安装的终端模拟器安装 Git。 例如，在 Termux 中，输入 `apt install git` 并在出现提示时键入 `y`。 
   
   {% endnote %}

1. [在 Git 中设置用户名](/github/getting-started-with-github/setting-your-username-in-git)。
1. [在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address).

## 使用来自 Git 的 {% data variables.product.prodname_dotcom %} 进行身份验证

从 Git 连接到 {% data variables.product.prodname_dotcom %} 存储库时，需要使用 HTTPS 或 SSH 向 {% data variables.product.product_name %} 进行身份验证。

{% note %}

注意：可以使用针对 HTTP 或 SSH 的 {% data variables.product.prodname_cli %} 向 {% data variables.product.product_name %} 进行身份验证。 有关详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

{% endnote %}

### 通过 HTTPS 连接（推荐）

如果使用 HTTPS 克隆，则可以使用凭据帮助程序在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据。 有关详细信息，请参阅“[使用 HTTPS URL 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)”和“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)”。

### 通过 SSH 连接

如果使用 SSH 克隆，则必须在每台计算机上生成用于从 {% data variables.product.product_name %} 进行推送或拉取的 SSH 密钥。 有关详细信息，请参阅“[使用 SSH URL 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)”和“[生成新的 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

## 后续步骤

你现在已将 Git 和 {% data variables.product.prodname_dotcom %} 全部设置完毕。 您现在可以选择创建仓库以放置项目。 在存储库中保存代码可以备份代码并在世界各地共享。 

* {% data reusables.getting-started.create-a-repository %}。

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
