---
title: 管理讨论类别
intro: 可以对讨论进行分类，以组织社区成员的对话，也可为每个类别选择格式。
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410465'
---
## 关于讨论类别

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

每个类别必须具有唯一的名称和表情符号配对，并可以附有说明其用途的详细说明。 类别帮助维护者组织如何提交对话，并可自定义，以帮助区分问答或更多开放式对话的类别。 {% data reusables.discussions.repository-category-limit %} 有关详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)”。

## 默认类别

| 类别 | 用途 | 格式 |
| :- | :- | :- |
| 📣 公告 | 项目维护者提供的最新消息和新闻 | 公告 |
| #️⃣ 常规 | 与项目相关的任何及所有内容 | 开放式讨论 |
|💡 想法 | 改变或改进项目的想法 | 开放式讨论 |
| 🗳 投票 | 提供多个选项的投票，供社区进行投票和讨论 | 投票 |
| 🙏 问答 | 供社区回答的问题，使用问题/回答的形式 | 问答 |
| 🙌 展示和说明 | 与项目有关的创作、试验或测试 | 开放式讨论 |

## 创建类别

1. 在 {% data variables.product.product_location %} 上，导航到要在其中创建类别的存储库或组织的主页。
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. 单击“新建类别”。
  ![存储库讨论类别列表上方的“新建类别”按钮](/assets/images/help/discussions/click-new-category-button.png)
1. 编辑类别的表情符号、标题、说明和讨论格式。 有关讨论格式的详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)”。
  ![新建类别的表情符号、标题、说明和讨论格式](/assets/images/help/discussions/edit-category-details.png)
1. 单击“创建”。
  ![新建类别的“创建”按钮](/assets/images/help/discussions/new-category-click-create-button.png)

## 编辑类别

您可以编辑类别以更改类别的表情符号、标题、说明和讨论格式。

1. 在 {% data variables.product.product_location %} 上，导航到要在其中编辑类别的存储库或组织的主页。
{% data reusables.discussions.discussions-tab %}
1. 在列表中类别右侧，单击 {% octicon "pencil" aria-label="The pencil icon" %}。
  ![存储库类别列表中类别右侧的“编辑”按钮](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![编辑现有类别的表情符号、标题、说明和讨论格式](/assets/images/help/discussions/edit-existing-category-details.png)
1. 单击“保存更改”。 
  ![现有类别的“保存更改”按钮](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## 删除类别

删除类别时，{% data variables.product.product_name %} 会将已删除类别中的所有讨论移到您选择的现有类别。

1. 在 {% data variables.product.product_location %} 上，导航到要在其中删除类别的存储库或组织的主页。
{% data reusables.discussions.discussions-tab %}
1. 在列表中类别右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。
  ![存储库类别列表中类别右侧的“回收站”按钮](/assets/images/help/discussions/click-delete-for-category.png)
1. 使用下拉菜单，为要删除的类别中的任何讨论选择新类别。
  ![删除现有类别时用于选择新建类别的下拉菜单](/assets/images/help/discussions/choose-new-category.png)
1. 单击“删除和移动”。
  ![删除现有类别时用于选择新建类别的下拉菜单](/assets/images/help/discussions/click-delete-and-move-button.png)
