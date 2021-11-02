---
title: 设置 Git
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: '{% data variables.product.prodname_dotcom %} 的核心是名为 Git 的开源版本控制系统 (VCS) 。 Git 负责在您计算机上本地发生的、与 {% data variables.product.prodname_dotcom %} 有关的所有内容。'
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
---

## 使用 Git

要在命令行中使用 Git，您将需要在计算机上下载、安装和配置 Git。 You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.prodname_dotcom %} from the command line. 更多信息请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

如果要在本地使用 Git，但不想使用命令行，您可以下载并安装 [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) 客户端。  更多信息请参阅“[安装和配置 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)”。

如果无需在本地使用文件，{% data variables.product.product_name %} 可让您在浏览器中直接完成许多 Git 相关的操作，包括：

- [创建仓库](/articles/create-a-repo)
- [复刻仓库](/articles/fork-a-repo)
- [管理文件](/repositories/working-with-files/managing-files)
- [社交化](/articles/be-social)

## 设置 Git

1. [下载并安装最新版本的 Git](https://git-scm.com/downloads)。
2. [在 Git 中设置您的用户名](/github/getting-started-with-github/setting-your-username-in-git)。
3. [在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)。

## 后续步骤：使用来自 Git 的 {% data variables.product.prodname_dotcom %} 进行身份验证

从 Git 连接到 {% data variables.product.prodname_dotcom %} 仓库时，您将需要使用 HTTPS 或 SSH 通过 {% data variables.product.product_name %} 进行身份验证。

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### 通过 HTTPS 连接（推荐）

如果[使用 HTTPS 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)，您可以使用凭据小助手[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)。

### 通过 SSH 连接

如果[使用 SSH 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)，您必须在用于从 {% data variables.product.product_name %} 推送或拉取的每台计算机上[生成 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

## 祝贺

恭喜。您现在已将 Git 和 {% data variables.product.prodname_dotcom %} 全部设置完毕！ 您现在可以选择创建仓库以放置项目。 这是备份代码的好方法，易于在世界各地分享代码。 更多信息请参阅“[创建仓库](/articles/create-a-repo)”。

您可以通过复刻创建仓库的副本，并提出您希望看到的更改，而不会影响上游仓库。 更多信息请参阅“[复刻仓库](/articles/fork-a-repo)”。

Each repository on {% data variables.product.prodname_dotcom %} is owned by a person or an organization. 您可以在 {% data variables.product.product_name %} 上连接和关注人员、仓库和组织以与之进行交互。 更多信息请参阅“[社交](/articles/be-social)”。

{% data reusables.support.connect-in-the-forum-bootcamp %}
