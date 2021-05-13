---
title: 管理仓库中的发行版
intro: 您可以创建要捆绑的发行版，并将项目的迭代交付给用户。
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion ver_gt "github-ae@latest" %}

### 关于发行版管理

{% if currentversion == "free proteam@latest" %}
您也可以在 {% data variables.product.prodname_marketplace %} 中发布特定版本的操作。 更多信息请参阅“<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">在 {% data variables.product.prodname_marketplace %} 中发布操作</a>”。
{% endif %}
您可以选择是否

将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在 {% data variables.product.product_name %} 为每个发行版创建的 ZIP 文件和 tarball 中。 更多信息请参阅“[管理仓库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 管理发行版。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh 发行版`](https://cli.github.com/manual/gh_release)”。

{% endtip %}
{% endif %}

### 创建发行版

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 单击 **Draft a new release（草拟新发行版）**。 ![发行版草稿按钮](/assets/images/help/releases/draft_release_button.png)
4. 键入发行版的版本号。 版本基于 [Git 标记](https://git-scm.com/book/en/Git-Basics-Tagging)。 我们建议使用[语义版本号](http://semver.org/)命名标记。 ![发行版标记版本](/assets/images/help/releases/releases-tag-version.png)
5. 使用下拉菜单，选择包含要发布的项目的分支。 ![发行版标记分支](/assets/images/help/releases/releases-tag-branch.png)
6. 键入发行版的标题和说明。 ![发行版说明](/assets/images/help/releases/releases_description.png)
7. （可选）要在发行版中包含二进制文件（例如已编译的程序），请在二进制文件框中拖放或手动选择文件。 ![通过发行版提供 DMG](/assets/images/help/releases/releases_adding_binary.gif)
8. 要通知用户发行版本尚不可用于生产，可能不稳定，请选择 **This is a pre-release（这是预发布）**。 ![将版本标记为预发行版的复选框](/assets/images/help/releases/prerelease_checkbox.png)
{%- if currentVersion == "free-pro-team@latest" %}
1. （可选）选择 **Create a discussion for this release（为此版本创建讨论）**，然后选择 **Category（类别）**下拉菜单，然后点击类别进行版本讨论。 ![用于创建发行版讨论和下拉菜单以选择类别的复选框](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. 如果您准备推广您的发行版，请单击 **Publish release（发布版本）**。 要在以后处理该发行版，请单击 **Save draft（保存草稿）**。 ![发布版本和草拟发行版按钮](/assets/images/help/releases/release_buttons.png)

您也可以从命令行或脚本自动创建发行版。 更多信息请参阅“[发行版](/rest/reference/repos/#create-a-release)”。

### 编辑发行版

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 在页面右侧要编辑的发行版旁边，单击 **Edit release（编辑发行版）**。 ![编辑发行版](/assets/images/help/releases/edit-release.png)
4. 在表单中编辑发行版的详细信息，然后单击 **Update release（更新发行版）**。 ![更新发行版](/assets/images/help/releases/update-release.png)

### 删除发行版

必须先删除所有附加到发行版的二进制文件，然后才能删除发行版。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 单击要删除的发行版的名称。 ![用于查看发行版的链接](/assets/images/help/releases/release-name-link.png)
4. 在页面右上角，单击 **Delete（删除）**。 ![删除发行版按钮](/assets/images/help/releases/delete-release.png)
5. 单击 **Delete this release（删除此发行版）**。 ![确认删除发行版](/assets/images/help/releases/confirm-delete-release.png)
