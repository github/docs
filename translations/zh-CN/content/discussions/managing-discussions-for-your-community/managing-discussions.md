---
title: 管理讨论
intro: 您可以对讨论进行分类、聚焦、转让或删除。
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: 管理讨论
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
---


## 关于讨论的管理

{% data reusables.discussions.about-discussions %} 有关讨论的更多信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。

组织所有者可以选择为组织拥有的仓库创建讨论所需的权限。 同样，要选择创建组织讨论所需的权限，组织所有者可以更改源存储库中所需的权限。 更多信息请参阅“[管理组织中仓库的讨论创建](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”。

作为讨论维护者，您可以创建社区资源，以鼓励与总体项目目标一致的讨论，并为协作者维护一个友好、开放的论坛。 Creating{% ifversion fpt or ghec %} a code of conduct or{% endif %} contribution guidelines for collaborators to follow will help facilitate a collaborative and productive forum. For more information on creating community resources, see{% ifversion fpt or ghec %} "[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)," and{% endif %} "[Setting guidelines for repository contributors](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."

当讨论产生可以解决的想法或漏洞时，您可以从讨论创建新议题。 更多信息请参阅“[创建议题](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)”。

有关引导健康的讨论的更多信息，请参阅“[调解评论和对话](/communities/moderating-comments-and-conversations)”。

{% data reusables.discussions.you-can-label-discussions %}

## 基本要求

要管理仓库中的讨论，必须为仓库启用 {% data variables.product.prodname_discussions %}。 更多信息请参阅“[为仓库启用或禁用 {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)”。

要管理组织中的讨论，必须为组织启用 {% data variables.product.prodname_discussions %}。 更多信息请参阅“[为组织启用或禁用 {% data variables.product.prodname_discussions %}](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”。

## 更改讨论类别

您可以对讨论进行分类，以帮助社区成员查找相关的讨论。 更多信息请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

您也可以将讨论移动到另一个类别。 无法将讨论移入或移出投票类别。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中“Category（类别）”的右侧，单击 {% octicon "gear" aria-label="The gear icon" %}。 ![带齿轮图标的"类别"](/assets/images/help/discussions/category-in-sidebar.png)
1. 单击一个类别。 !["更改类别"下拉菜单](/assets/images/help/discussions/change-category-drop-down.png)

## 固定讨论

您可以在仓库或组织的讨论列表上固定多达四个重要的讨论。

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中，单击 {% octicon "pin" aria-label="The pin icon" %} **Pin discussion（固定讨论）**。 ![讨论右侧边栏中的"固定讨论"](/assets/images/help/discussions/click-pin-discussion.png)
1. （可选）自定义固定讨论的外观。 ![固定讨论的自定义选项](/assets/images/help/discussions/customize-pinned-discussion.png)
1. 单击 **Pin discussion（固定讨论）**。 ![固定的讨论自定义选项下的"固定讨论"按钮](/assets/images/help/discussions/click-pin-discussion-button.png)

## 编辑固定的讨论

编辑固定的讨论不会更改讨论的类别。 更多信息请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧侧边栏中，单击 {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion（编辑固定的讨论）**。 ![讨论右侧边栏中的"编辑固定的讨论"](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. 自定义固定的讨论的外观。 ![固定讨论的自定义选项](/assets/images/help/discussions/customize-pinned-discussion.png)
1. 单击 **Pin discussion（固定讨论）**。 ![固定的讨论自定义选项下的"固定讨论"按钮](/assets/images/help/discussions/click-pin-discussion-button.png)

## 取消固定讨论

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中，单击 {% octicon "pin" aria-label="The pin icon" %} **Unpin discussion（取消固定讨论）**。 ![讨论右侧边栏中的"取消固定讨论"](/assets/images/help/discussions/click-unpin-discussion.png)
1. 阅读警告，然后单击 **Unpin discussion（取消固定讨论）**。 ![模式中警告下方的"取消固定讨论"按钮](/assets/images/help/discussions/click-unpin-discussion-button.png)

## 转让讨论

要转让讨论，您必须具有在要转让讨论的仓库中创建讨论的权限。 如果要将讨论转移到组织，您必须有权限在源存储库中为组织的讨论创建讨论。 您只能在同一用户或组织帐户拥有的仓库之间转让讨论。 You can't transfer a discussion from a private{% ifversion ghec or ghes %} or internal{% endif %} repository to a public repository.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中，单击 {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transfer discussion（转让讨论）**。 ![讨论右侧边栏中的"转让讨论"](/assets/images/help/discussions/click-transfer-discussion.png)
1. 选择 **Choose a repository（选择仓库）**下拉菜单，并单击讨论要转让到的仓库。 如果要将讨论转移到组织，请选择组织讨论的源存储库。 !["选择仓库"下拉列表、"查找仓库"搜索字段以及列表中的仓库](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. 单击 **Transfer discussion（转让讨论）**。 !["转让讨论"按钮](/assets/images/help/discussions/click-transfer-discussion-button.png)

## 删除讨论

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. 在右侧边栏中，单击 {% octicon "trash" aria-label="The trash arrow icon" %} **Delete discussion（删除讨论）**。 ![讨论右侧边栏中的"删除讨论"](/assets/images/help/discussions/click-delete-discussion.png)
1. 阅读警告，然后单击 **Delete this discussion（删除此讨论）**。 ![模式中警告下方的"删除此讨论"按钮](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## 基于标签转换议题

您可以将具有相同标签的所有议题批量转换为讨论。 具有此标签的未来议题也将自动转换为您配置的讨论和类别。

1. 在 {% data variables.product.product_location %}上，导航到存储库的主页面，或者对于组织讨论，导航到源存储库。
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. 在要转换为议题的标签旁边，单击 **Convert issues（转换议题）**。
1. 选择 **Choose a category（选择类别）**下拉菜单，然后单击讨论的类别。
1. 单击 **I understand, convert this issue to a discussion（我了解，请将此议题转换为讨论）**。
