---
title: 管理仓库中的发行版
intro: 您可以创建要捆绑的发行版，并将项目的迭代交付给用户。
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 管理版本
---

## 关于发行版管理

您可以使用发行说明、@提及贡献者和指向二进制文件的链接来创建新版本，也可以编辑或删除现有版本。

{% ifversion fpt or ghec %}
您也可以在 {% data variables.product.prodname_marketplace %} 中从特定的发行版发布操作。 更多信息请参阅“[在 {% data variables.product.prodname_marketplace %} 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。

您可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在 {% data variables.product.product_name %} 为每个发行版创建的 ZIP 文件和 tarball 中。 更多信息请参阅“[管理仓库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”。
{% endif %}

## 创建发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 单击 **Draft a new release（草拟新发行版）**。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}单击 **Choose a tag（选择标记）**，键入{% else %}类型{% endif %} 版本号{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}，然后按 **Enter**{% endif %}。 或者，选择现有标记。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![输入标记](/assets/images/help/releases/releases-tag-create.png)
5. 如果要创建新标记，请单击 **Create new tag（创建新标记）**。

   ![确认您要创建新标记](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![发行版标记版本](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. 如果已创建新标记，请使用下拉菜单选择包含要发布的项目的分支。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![选择分支](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png){% endif %}
{%- data reusables.releases.previous-release-tag %}
6. 键入发行版的标题和说明。
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}
   如果您在描述中@提及任何 {% data variables.product.product_name %} 用户，则已发布的版本将包含**贡献者**部分，其中包含所有提及用户的头像列表。
   {%- endif %}
   {% ifversion fpt or ghec or ghes > 3.3 %} 或者，您也可以通过单击{% ifversion previous-release-tag %}**Generate release notes（生成发行说明）**{% else %}**Auto-generate release notes（自动生成发行说明）**{% endif %} 来自动生成发行说明。{% endif %}{% ifversion previous-release-tag %}
   ![发行版说明](/assets/images/help/releases/releases_description_auto.png){% else %}
![Releases description](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}
1. （可选）要在发行版中包含二进制文件（例如已编译的程序），请在二进制文件框中拖放或手动选择文件。 ![通过发行版提供 DMG](/assets/images/help/releases/releases_adding_binary.gif)
2. 要通知用户发行版本尚不可用于生产，可能不稳定，请选择 **This is a pre-release（这是预发布）**。 ![将版本标记为预发行版的复选框](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion discussions %}
1. （可选）如果在存储库中启用了 {% data variables.product.prodname_discussions %}，选择 **Create a discussion for this release（为此版本创建讨论）**，然后选择 **Category（类别）**下拉菜单，然后点击类别进行版本讨论。 ![用于创建发行版讨论和下拉菜单以选择类别的复选框](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. 如果您准备推广您的发行版，请单击 **Publish release（发布版本）**。 要在以后处理该发行版，请单击 **Save draft（保存草稿）**。 ![发布版本和草拟发行版按钮](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}
   然后，您可以在存储库的版本源中查看已发行版或草稿版本。 更多信息请参阅“[查看仓库的版本和标签](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)”。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![@提及贡献者的已发布版本](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
   {% else %}
   ![@提及贡献者的已发布版本](/assets/images/help/releases/releases-overview-with-contributors.png)
   {% endif %}
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 要创建发行版，请使用e `gh release create` 子命令。 将 `tag` 替换为所需的版本标签。

   ```shell
   gh release create <em>tag</em>
   ```

2. 按照交互式提示进行操作。 或者，您可以指定参数以跳过这些提示。 有关可能的参数的详细信息，请参阅 [ {% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_release_create)。 例如，此命令将创建具有指定标题和注释的预发行版。

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %}
如果您在注释中@提及任何 {% data variables.product.product_name %} 用户，则在 {% data variables.product.prodname_dotcom_the_website %} 上发布的版本将包括**贡献者** 部分，其中包含所有提及用户的头像列表。
{% endif %}

{% endcli %}

## 编辑发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. 在页面右侧要编辑的发行版旁边，单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑发行版](/assets/images/help/releases/edit-release-pencil.png)
{% else %}
3. 在页面右侧要编辑的发行版旁边，单击 **Edit release（编辑发行版）**。 ![编辑发行版](/assets/images/help/releases/edit-release.png)
{% endif %}
4. 在表单中编辑版本的详细信息，然后单击 **Update release（更新版本）**。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} 如果您在描述中添加或删除 GitHub 用户的任何@提及，则会在版本的**贡献者**部分的头像列表中添加或删除这些用户。{% endif %} ![更新发行版](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

当前无法使用 {% data variables.product.prodname_cli %} 编辑版本。

{% endcli %}

## 删除发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. 在页面右侧要删除的发行版旁边，单击 {% octicon "trash" aria-label="The trash icon" %}。 ![删除发行版](/assets/images/help/releases/delete-release-trash.png)
{% else %}
3. 单击要删除的发行版的名称。 ![用于查看发行版的链接](/assets/images/help/releases/release-name-link.png)
4. 在页面右上角，单击 **Delete（删除）**。 ![删除发行版按钮](/assets/images/help/releases/delete-release.png)
{% endif %}
5. 单击 **Delete this release（删除此发行版）**。 ![确认删除发行版](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. 要删除版本，请使用 `gh release delete` 子命令。 将 `tag` 替换为要删除的版本标记。 使用 `-y` 标志跳过确认。

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
