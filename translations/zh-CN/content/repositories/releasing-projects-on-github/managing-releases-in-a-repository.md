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

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}

## 关于发行版管理

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt or ghec %}
您也可以在 {% data variables.product.prodname_marketplace %} 中从特定的发行版发布操作。 更多信息请参阅“<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">在 {% data variables.product.prodname_marketplace %} 中发布操作</a>”。

您可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在 {% data variables.product.product_name %} 为每个发行版创建的 ZIP 文件和 tarball 中。 更多信息请参阅“[管理仓库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”。
{% endif %}
{% endif %}

## 创建发行版

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 单击 **Draft a new release（草拟新发行版）**。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}Click **Choose a tag**, type{% else %}Type{% endif %} a version number for your release{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}, and press **Enter**{% endif %}. Alternatively, select an existing tag.

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
5. If you are creating a new tag, click **Create new tag**.

   ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![发行版标记版本](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png){% endif %}
6. 键入发行版的标题和说明。
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt or ghec %} Alternatively, you can automatically generate your release notes by clicking **Auto-generate release notes**.
   {% endif %}
   ![发行版说明](/assets/images/help/releases/releases_description_auto.png)
7. （可选）要在发行版中包含二进制文件（例如已编译的程序），请在二进制文件框中拖放或手动选择文件。 ![通过发行版提供 DMG](/assets/images/help/releases/releases_adding_binary.gif)
8. 要通知用户发行版本尚不可用于生产，可能不稳定，请选择 **This is a pre-release（这是预发布）**。 ![将版本标记为预发行版的复选框](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt or ghec %}
1. Optionally, if {% data variables.product.prodname_discussions %} are enabled in the repository, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion. ![用于创建发行版讨论和下拉菜单以选择类别的复选框](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. 如果您准备推广您的发行版，请单击 **Publish release（发布版本）**。 要在以后处理该发行版，请单击 **Save draft（保存草稿）**。 ![发布版本和草拟发行版按钮](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
   {% else %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {% endif %}
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create <em>tag</em>
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## 编辑发行版

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}. ![编辑发行版](/assets/images/help/releases/edit-release-pencil.png)
{% else %}
3. 在页面右侧要编辑的发行版旁边，单击 **Edit release（编辑发行版）**。 ![编辑发行版](/assets/images/help/releases/edit-release.png)
{% endif %}
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![更新发行版](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## 删除发行版

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to delete, click {% octicon "trash" aria-label="The trash icon" %}. ![删除发行版](/assets/images/help/releases/delete-release-trash.png)
{% else %}
3. 单击要删除的发行版的名称。 ![用于查看发行版的链接](/assets/images/help/releases/release-name-link.png)
4. 在页面右上角，单击 **Delete（删除）**。 ![删除发行版按钮](/assets/images/help/releases/delete-release.png)
{% endif %}
5. 单击 **Delete this release（删除此发行版）**。 ![确认删除发行版](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
