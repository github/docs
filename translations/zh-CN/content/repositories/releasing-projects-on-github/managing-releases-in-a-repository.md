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
shortTitle: Manage releases
ms.openlocfilehash: 0170f17674fcd45e3459670672d545400f1b635a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409473'
---
## 关于发行版管理

可以使用发行说明、@mentions 参与者和指向二进制文件的链接创建新版本，以及编辑或删除现有发行版。

{% ifversion fpt or ghec %} 还可以从 {% data variables.product.prodname_marketplace %} 中的特定发行版发布操作。 有关详细信息，请参阅“[在 {% data variables.product.prodname_marketplace %} 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。

您可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在 {% data variables.product.product_name %} 为每个发行版创建的 ZIP 文件和 tarball 中。 有关详细信息，请参阅“[管理存储库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”。
{% endif %}

## 创建发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 单击“草拟新发行版”。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![发行版草稿按钮](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![发行版草稿按钮](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}单击“选择标记”，键入“{% else %}输入{% endif %} 发行版的版本号{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}”，然后按 Enter{% endif %} 键 。 或者，选择现有标记。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![输入标记](/assets/images/help/releases/releases-tag-create.png)
5. 如果要创建新标记，请单击“创建新标记”。

   ![确认要创建新标记](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![发行版标记的版本](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
5. 如果已创建新标记，请使用下拉菜单选择包含要发布的项目的分支。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![选择分支](/assets/images/help/releases/releases-choose-branch.png){% else %}![发行版标记的分支](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
6. 键入发行版的标题和说明。
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} 如果 @mention 描述中的任何 {% data variables.product.product_name %} 用户，发布的发行版将包含“参与者”部分以及所有被提及用户的头像列表。
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} 或者，可通过单击{% ifversion previous-release-tag %}“生成发行说明”{% else %}“自动生成发行说明”{% endif %}，以自动生成发行说明。 {% endif %}{% ifversion previous-release-tag %} ![发行说明](/assets/images/help/releases/releases_description_auto.png){% else %} ![发行说明](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}
1. （可选）要在发行版中包含二进制文件（例如已编译的程序），请在二进制文件框中拖放或手动选择文件。
   ![通过发行版提供 DMG](/assets/images/help/releases/releases_adding_binary.gif)
2. 若要通知用户发行版尚未准备投入生产，并且可能不稳定，请选择“这是预发行版”。
   ![用于将发行版标记为预发行版的复选框](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion discussions %}
1. （可选）如果 {% data variables.product.prodname_discussions %} 在存储库中启用，请选择“为此发行版创建讨论”，然后选择“类别”下拉菜单，并单击发行版讨论的类别 。
  ![用于创建发行版讨论和下拉菜单以选择类别的复选框](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
9. 如果已准备好公开发行版，请单击“发布发行版”。 若要稍后处理发行版，请单击“保存草稿”。
   ![“发布发行版”和“草拟发行版”按钮](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %} 然后可以在存储库的发行版源中查看发布的或草拟的发行版。 有关详细信息，请参阅“[查看存储库的发行版和标记](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)”。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![发布的发行版及 @mentioned 参与者](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![发布的发行版及 @mentioned 参与者](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 若要创建发行版，请使用 `gh release create` 子命令。 将 `tag` 替换为发行版所需的标记。

   ```shell
   gh release create <em>tag</em>
   ```

2. 按照交互式提示进行操作。 或者，您可以指定参数以跳过这些提示。 有关可能的参数的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_release_create)。 例如，此命令将创建具有指定标题和注释的预发行版。

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %} 如果 @mention 注释中任何 {% data variables.product.product_name %} 用户，则 {% data variables.product.prodname_dotcom_the_website %} 上发布的发行版将包含“参与者”部分以及所有被提及用户的头像列表。
{% endif %}

{% endcli %}

## 编辑发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. 在页面右侧要编辑的发行版旁边，单击 {% octicon "pencil" aria-label="The edit icon" %}。
  ![编辑发行版](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. 在页面右侧要编辑的发行版旁边，单击“编辑发行版”。
  ![编辑发行版](/assets/images/help/releases/edit-release.png) {% endif %}
4. 在窗体中编辑发行版的详细信息，然后单击“更新发行版”。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} 如果在描述中添加或删除 GitHub 用户的任何 @mentions，则该发行版的“参与者”部分的头像列表中将添加或删除这些用户。{% endif %} ![更新发行版](/assets/images/help/releases/update-release.png) 

{% endwebui %}

{% cli %}

当前无法使用 {% data variables.product.prodname_cli %} 编辑版本。

{% endcli %}

## 删除发行版

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. 在页面右侧要删除的发行版旁边，单击 {% octicon "trash" aria-label="The trash icon" %}。
  ![删除发行版](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. 单击要删除的发行版的名称。
  ![用于查看发行版的链接](/assets/images/help/releases/release-name-link.png)
4. 在页面的右上角，单击“删除”。
  ![删除发行版按钮](/assets/images/help/releases/delete-release.png) {% endif %}
5. 单击“删除此发行版”。
  ![确认删除发行版](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. 若要删除发行版，请使用 `gh release delete` 子命令。 将 `tag` 替换为要删除的发行版标记。 使用 `-y` 标志跳过确认。

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
