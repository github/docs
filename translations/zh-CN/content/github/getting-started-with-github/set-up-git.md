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
intro: '{% data variables.product.product_name %} 的核心是名为 Git 的开源版本控制系统 (VCS) 。 Git 负责在您计算机上本地发生的、与 {% data variables.product.product_name %} 有关的所有内容。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

要在命令行中使用 Git，您将需要在计算机上下载、安装和配置 Git。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} 您也可以从命令行安装 {% data variables.product.prodname_cli %} 以使用 {% data variables.product.product_name %}。 有关 {% data variables.product.prodname_cli %} 的更多信息，请参阅 [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) 文档。{% endif %}

如果要在本地使用 Git，但不想使用命令行，您可以下载并安装 [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) 客户端。  更多信息请参阅“[安装和配置 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)”。

如果无需在本地使用文件，{% data variables.product.product_name %} 可让您在浏览器中直接完成许多 Git 相关的操作，包括：

- [创建仓库](/articles/create-a-repo)
- [复刻仓库](/articles/fork-a-repo)
- [管理文件](/articles/managing-files-on-github/)
- [社交化](/articles/be-social)

### 设置 Git

1. [下载并安装最新版本的 Git](https://git-scm.com/downloads)。
2. [在 Git 中设置您的用户名](/articles/setting-your-username-in-git)。
3. [在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)。

### 后续步骤：使用来自 Git 的 {% data variables.product.prodname_dotcom %} 进行身份验证

从 Git 连接到 {% data variables.product.product_name %} 仓库时，您将需要使用 HTTPS 或 SSH 通过 {% data variables.product.product_name %} 进行身份验证。

#### 通过 HTTPS 连接（推荐）

如果[使用 HTTPS 克隆](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)，您可以使用凭据小助手[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/using-git/caching-your-github-credentials-in-git)。

#### 通过 SSH 连接

如果[使用 SSH 克隆](/articles/which-remote-url-should-i-use#cloning-with-ssh-urls)，您必须在用于从 {% data variables.product.product_name %} 推送或拉取的每台计算机上[生成 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

### 祝贺

恭喜。您现在已将 Git 和 {% data variables.product.product_name %} 全部设置完毕！ 接下来您要做什么？

- **设置 Git**
- “[创建仓库](/articles/create-a-repo)”
- “[复刻仓库](/articles/fork-a-repo)”
- “[社交化](/articles/be-social)”
- {% data reusables.support.connect-in-the-forum-bootcamp %}
