---
title: 创建代码空间
intro: 您可以为仓库中的分支创建代码空间以便在线开发。
permissions: 'Anyone can create a codespace for any public repository, or for any repository owned by their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### 关于代码空间的创建

您可以在 {% data variables.product.prodname_dotcom_the_website %} 或 {% data variables.product.prodname_vscode %} 中创建代码。 {% data reusables.codespaces.codespaces-are-personal %}

代码空间与仓库的特定分支相关联，且仓库不能为空。 {% data reusables.codespaces.concurrent-codespace-limit %} 更多信息请参阅“[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)”。


创建代码空间时，需要执行一些步骤来实现对开发环境的完全访问。

- 分配了 VM 和容器存储等资源。 每次创建或启动代码空间时都会创建新的 VM，以确保您始终有最新的版本和安全补丁。
- {% data variables.product.prodname_codespaces %} 接收有关您的仓库、分支、提交、公共 dotfiles 仓库以及您创建的所有密钥的信息。
- {% data variables.product.prodname_codespaces %} 执行仓库的浅表克隆。
- 如果仓库中有 `devcontainer.json` 文件，{% data variables.product.prodname_codespaces %} 将运行它。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。
- Docker 容器、`docker-compose` 或其他其他初始化将运行。
- 此时，代码空间标记为可用，您可以连接。
- 一旦代码空间可用，根据开发容器中的命令，代码空间将继续进行一些设置。
  - 代码空间共享 `devcontainer.json` 文件中添加的端口。
  - 代码空间运行 `postCreateCommand` 中指定的任何操作。
  - {% data variables.product.prodname_codespaces %} 将 dotfiles 仓库克隆到代码空间并查找安装文件。 更多信息请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)”。
  - 最后，代码空间对仓库进行完整克隆，使您可以完全访问它。


{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### 创建代码空间

{% data reusables.repositories.navigate-to-repo %}
2. 在仓库名称下，使用“Branch（分支）”下拉菜单选择您要为其创建代码的分支。

  ![分支下拉菜单](/assets/images/help/codespaces/branch-drop-down.png)

3. 在仓库名称下，使用 {% octicon "download" aria-label="The download icon" %} **Code（代码）**下拉菜单选择 **Open with Codespaces（使用 Codespaces 打开）**。

  ![使用 Codespaces 打开按钮](/assets/images/help/codespaces/open-with-codespaces-button.png)

4. 要使用标准机器类型创建代码空间，请单击 {% octicon "plus" aria-label="The plus icon" %} **New codespace（新建代码空间）**。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)


   
