---
title: 克隆仓库
intro: 'When you create a repository on {% data variables.product.product_location %}, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.'
redirect_from:
  - /articles/cloning-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于克隆仓库

You can clone a repository from {% data variables.product.product_location %} to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from {% data variables.product.product_location %} to your local machine.

克隆仓库将提取 {% data variables.product.product_location %} 在当时拥有的所有仓库数据的完整副本，包括项目每个文件和文件夹的所有版本。 You can push your changes to the remote repository on {% data variables.product.product_location %}, or pull other people's changes from {% data variables.product.product_location %}. 更多信息请参阅“[使用常见的 Git 命令](/github/using-git/using-common-git-commands)”。

You can clone your existing repository or clone another person's existing repository to contribute to a project.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also clone a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo clone`](https://cli.github.com/manual/gh_repo_clone)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### 使用命令行克隆仓库

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### 将仓库克隆到 {% data variables.product.prodname_desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. 按照 {% data variables.product.prodname_desktop %} 中的提示完成克隆。

更多信息请参阅“[将仓库从 {% data variables.product.prodname_dotcom %} 克隆到 {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”。

### 克隆空仓库

空仓库不含任何文件。 如果创建仓库时不使用 README 初始化仓库，通常会出现空仓库。

{% data reusables.repositories.navigate-to-repo %}
2. 要使用 HTTPS 以命令行克隆仓库，请在“Quick setup（快速设置）”下单击 {% octicon "clippy" aria-label="The clipboard icon" %}。 要使用 SSH 密钥克隆仓库{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}，包括组织的 SSH 认证中心颁发的证书，{% endif %} 单击 **SSH**，然后单击 {% octicon "clippy" aria-label="The clipboard icon" %}。 ![空仓库克隆 URL 按钮](/assets/images/help/repository/empty-https-url-clone-button.png)

   或者，要在 Desktop 中克隆仓库，请单击 {% octicon "desktop-download" aria-label="The desktop download button" %} **Set up in Desktop（在 Desktop 中设置）**并按照提示完成克隆。 ![空仓库克隆桌面按钮](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}


### 排查克隆错误

在克隆仓库时，可能会遇到一些错误。

如果无法克隆仓库，请检查：

- 您可以使用 HTTPS 连接。 更多信息请参阅“[HTTPS 克隆错误](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)”。
- 您有权访问要克隆的仓库。 更多信息请参阅“[错误：找不到仓库](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)”。
- 要克隆的默认分支仍然存在。 您有权访问要克隆的仓库。 更多信息请参阅“[错误：远程 HEAD 引用不存在的 ref，无法检出](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)”。


{% if currentVersion == "free-pro-team@latest" %}

### 延伸阅读

- "[连接问题故障排除](/articles/troubleshooting-connectivity-problems)"
{% endif %}
