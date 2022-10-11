---
title: 使用星标保存仓库
intro: '可以对存储库和主题标星以跟踪感兴趣的项目{% ifversion fpt or ghec %}，并在消息馈送中发现相关内容{% endif %}。'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374177'
---
您可以在 {% data variables.explore.your_stars_page %} 上搜索、排序和筛选星标仓库和主题。'

## 关于星标

标星操作便于以后再次找到仓库或主题。 您可以到 {% data variables.explore.your_stars_page %} 查看已经加星标的所有仓库和主题。

{% ifversion fpt or ghec %} 可以对存储库和主题加星标以在 {% data variables.product.product_name %} 上发现类似的项目。 当您为存储库或主题添加星标时， {% data variables.product.product_name %} 可能会在您的个人仪表板上推荐相关内容。 有关详细信息，请参阅“[查找为 {% data variables.product.prodname_dotcom %} 上的开放源代码做贡献的方式](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”和“[关于个人仪表板](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)”。
{% endif %}

对仓库加星标也可表示赞赏仓库维护员的工作。 许多 {% data variables.product.prodname_dotcom %} 的仓库评级取决于仓库拥有的星标数。 此外，[Explore](https://github.com/explore) 也会根据星标数显示最受欢迎的存储库。

## 对仓库标星

对仓库标星是一个简单的两步过程。

{% data reusables.repositories.navigate-to-repo %}
1. 在页面右上角，单击“星标”。
![为存储库加星标](/assets/images/help/stars/starring-a-repository.png)
1. （可选）若要取消先前已标星存储库的星标，请单击“取消星标”。
![取消存储库星标](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## 查看谁已为存储库加了星标


可以查看已为你有权访问的公共存储库或专用存储库加星标的每个人。 


要查看已为存储库加星标的每个人，请将 `/stargazers` 添加到存储库 URL 的末尾。 例如，要查看 github/docs 存储库的标星者，请访问 https://github.com/github/docs/stargazers 。


## 使用列表组织带星标的存储库

{% note %}

注意：列表目前为公共 beta 版，可能会有变动。

{% endnote %}

管理您已经用公开列表加星标的存储库。 可以在 `https://github.com/USERNAME?tab=stars` 创建显示在星标页面上的公开列表。

如果将专用存储库添加到列表中，则专用存储库将仅显示在你的列表中，供具有存储库 `read` 访问权限的人员使用。

![星标页面上列表的屏幕截图](/assets/images/help/stars/lists-overview-on-stars-page.png)

只要你看到存储库的“星标”或“已加星标”下拉菜单，无论是在存储库页面还是已加星标存储库列表上，你都可以将存储库添加到现有列表或新列表中 。 

![“星标”下拉菜单的屏幕截图，其中包含存储库页面中的列表选项](/assets/images/help/stars/stars-dropdown-on-repo.png)

![“已加星标”下拉菜单的屏幕截图，其中包含已加星标存储库列表中的列表选项](/assets/images/help/stars/add-repo-to-list.png)

### 创建列表

{% data reusables.stars.stars-page-navigation %}
2. 在“列表”旁边，单击“创建列表”。
  ![“创建列表”按钮的屏幕截图](/assets/images/help/stars/create-list.png)
3. 输入列表的名称和说明，然后单击“创建”。
  ![模式屏幕截图，显示使用“创建”按钮输入名称和说明的位置。](/assets/images/help/stars/create-list-with-description.png)

### 将存储库添加到列表

{% data reusables.stars.stars-page-navigation %}
2. 找到要添加到列表中的存储库。
  ![已加星标存储库搜索栏的屏幕截图](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. 在要添加的存储库旁边，使用“已加星标”下拉菜单并选择你的列表。
  ![显示列表复选框的下拉列表的屏幕截图](/assets/images/help/stars/add-repo-to-list.png)

### 从列表中删除存储库

{% data reusables.stars.stars-page-navigation %}
2. 选择您的列表。
3. 在要删除的存储库旁边，使用“已加星标”下拉菜单并取消选择你的列表。
  ![显示列表复选框的下拉列表的屏幕截图](/assets/images/help/stars/add-repo-to-list.png)

### 编辑列表名称或说明

{% data reusables.stars.stars-page-navigation %}
1. 选择要编辑的列表。
2. 单击“编辑列表”。
3. 更新名称或说明，然后单击“保存列表”。
  ![显示“保存列表”按钮的模式屏幕截图](/assets/images/help/stars/edit-list-options.png) 

### 删除列表

{% data reusables.stars.stars-page-navigation %}
2. 选择要删除的列表。
3. 单击“删除列表”。
  ![显示“删除列表”按钮的模式屏幕截图](/assets/images/help/stars/edit-list-options.png)
4. 若要确认，请单击“删除”。

{% endif %}

## 搜索已加星标的存储库和主题

您可以使用 {% data variables.explore.your_stars_page %} 上的搜索栏快速查找您标星的仓库和主题。 

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 使用搜索栏按名称查找您标星的仓库或主题。
![搜索星标](/assets/images/help/stars/stars_search_bar.png)

搜索栏只能根据仓库或主题名称搜索，而不能根据任何其他限定符（如仓库大小或上次更新时间）搜索。

## 在星标页面上排序和筛选星标

您可以使用排序或筛选来自定义您如何在星标页面上查看标星的仓库和主题。

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 若要对星标进行排序，请选择“排序”下拉菜单，然后选择“最近标星”、“最近活跃”或“最多星标”   。
![对星标进行排序](/assets/images/help/stars/stars_sort_menu.png)
1. 若要根据星标的语言筛选星标列表，请在“按语言筛选”下单击所需的语言。
![按语言筛选星标](/assets/images/help/stars/stars_filter_language.png)
1. 要根据仓库或主题筛选您的星标列表，请单击所需的选项。
![按主题筛选星标](/assets/images/help/stars/stars_filter_topic.png)

## 延伸阅读

- [使用主题对存储库分类](/articles/classifying-your-repository-with-topics)
