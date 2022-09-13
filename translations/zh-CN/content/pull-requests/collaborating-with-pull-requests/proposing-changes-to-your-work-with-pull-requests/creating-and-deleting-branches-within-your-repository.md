---
title: 创建和删除仓库中的分支
intro: '您可以直接在 {% data variables.product.product_name %} 上创建或删除分支。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526628'
---
## 创建分支
可以在 {% data variables.product.product_name %} 上以不同的方式创建分支。

{% note %}

注意：只能在具有推送访问权限的存储库中创建分支。

{% endnote %}

{% ifversion create-branch-from-overview %}
### 通过分支概述创建分支
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. 单击“新建分支”。
   ![分支概述页的屏幕截图，其中突出显示了“新建分支”按钮](/assets/images/help/branches/new-branch-button.png)
2. 在对话框中，输入分支名称，并可选择性地更改分支源。  
   如果存储库是一个分支，还可以选择上游存储库作为分支源。
   ![分支的分支创建模式的屏幕截图，其中突出显示了“分支源”](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. 单击“创建分支”。
   ![分支创建模式的屏幕截图，其中突出显示了“创建分支”按钮](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### 使用分支下拉列表创建分支
{% data reusables.repositories.navigate-to-repo %}
1. （可选）如果要从存储库的默认分支以外的分支创建新分支，请单击“{% octicon "git-branch" aria-label="The branch icon" %} 分支”，然后选择另一个分支。
    ![概述页面上的分支链接](/assets/images/help/branches/branches-overview-link.png)
1. 单击分支选择器菜单。
    ![分支选择器菜单](/assets/images/help/branch/branch-selection-dropdown.png)
1. 键入新分支的唯一名称，然后选择“创建分支”。
    ![分支创建文本框](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### 为问题创建分支
可以创建一个分支以直接从问题页面处理问题，方便快捷。 有关详细信息，请参阅“[创建分支以处理问题](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)”。
{% endif %}

## 删除分支

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**注意：** 如果要删除的分支是存储库的默认分支，则在删除该分支之前必须选择新的默认分支。 有关详细信息，请参阅“[更改默认分支](/github/administering-a-repository/changing-the-default-branch)”。

{% endnote %}

如果要删除的分支与打开的拉取请求关联，则在删除该分支之前必须合并或关闭拉取请求。 有关详细信息，请参阅“[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”或“[关闭拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. 滚动到要删除的分支，然后单击 {% octicon "trash" aria-label="The trash icon to delete the branch" %}。
    ![删除分支](/assets/images/help/branches/branches-delete.png){% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. 如果尝试删除与至少一个打开的拉取请求关联的分支，必须确认要关闭拉取请求。
   
   ![确认删除分支](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} 有关详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)”。

## 延伸阅读

- [关于分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [查看存储库中的分支](/github/administering-a-repository/viewing-branches-in-your-repository)
- [删除和恢复拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)
