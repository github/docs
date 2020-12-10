---
title: 创建代码空间
intro: 您可以为仓库中的分支创建代码空间以便在线开发。
product: '{% data reusables.gated-features.codespaces %}'
permissions: '任何人都可以为任何公共仓库或其用户帐户拥有的任何私有仓库创建代码空间。'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### 关于代码空间的创建

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} 更多信息请参阅“[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)”。

{% data reusables.codespaces.unsupported-repos %}

不能在空仓库中创建代码空间。 如果仓库是空的，请先在仓库中创建文件，然后再创建代码空间。 更多信息请参阅“[添加文件到仓库](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)”和“[使用命令行添加文件到仓库](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)”。

您创建的代码空间的环境将基于仓库的配置。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

{% data reusables.codespaces.about-personalization %} 更多信息请参阅“[个性化您帐户的 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)”。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### 创建代码空间

{% data reusables.repositories.navigate-to-repo %}
2. 在仓库名称下，使用“Branch（分支）”下拉菜单选择您要为其创建代码的分支。 ![分支下拉菜单](/assets/images/help/codespaces/branch-drop-down.png)
3. 在仓库名称下，使用 {% octicon "download" aria-label="The download icon" %} **Code（代码）**下拉菜单选择 **Open with Codespaces（使用 Codespaces 打开）**。 ![使用 Codespaces 打开按钮](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. 如果分支已经有代码空间，请单击 {% octicon "plus" aria-label="The plus icon" %} **New codespace（新建代码空间）**。 ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)
