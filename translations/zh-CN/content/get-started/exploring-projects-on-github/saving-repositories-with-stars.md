---
title: 使用星标保存仓库
intro: '您可以对仓库和主题标星以跟踪您感兴趣的项目{% ifversion fpt or ghec %} and discover related content in your news feed{% endif %}。'
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
shortTitle: 保存有星标的仓库
---

您可以在 {% data variables.explore.your_stars_page %} 上搜索、排序和筛选星标仓库和主题。'

## 关于星标

标星操作便于以后再次找到仓库或主题。 您可以到 {% data variables.explore.your_stars_page %} 查看已经加星标的所有仓库和主题。

{% ifversion fpt or ghec %}
您可以对仓库和主题加星标以在 {% data variables.product.product_name %} 上发现类似的项目。 当您为存储库或主题添加星标时， {% data variables.product.product_name %} 可能会在您的个人仪表板上推荐相关内容。 更多信息请参阅“[查找参与 {% data variables.product.prodname_dotcom %} 上的开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”和“[关于个人仪表板](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)”。
{% endif %}

对仓库加星标也可表示赞赏仓库维护员的工作。 许多 {% data variables.product.prodname_dotcom %} 的仓库评级取决于仓库拥有的星标数。 此外，[Explore](https://github.com/explore) 也会根据星标数显示最受欢迎的仓库。

## 对仓库标星

对仓库标星是一个简单的两步过程。

{% data reusables.repositories.navigate-to-repo %}
1. 在页面的右上角，单击 **Star（星标）**。 ![对仓库标星](/assets/images/help/stars/starring-a-repository.png)
1. （可选）要取消先前已标星仓库的星标，请点击 **Unstar（取消星标）**。 ![解压仓库](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## 查看谁为存储库加了星标

您可以查看已为您有权访问的公共存储库或私有存储库加星标的每个人。


要查看已为存储库加星标的每个人，请将 `/stargazers` 添加到存储库 URL 的末尾。 例如，要查看 github/docs 存储库的标星者，请访问 https://github.com/github/docs/stargazers。

## 使用列表组织带星标的存储库

{% note %}

**注意：**列表目前处于公开测试阶段，可能会有变化。

{% endnote %}

管理您已经用公开列表加星标的存储库。 您可以创建出现在星标页面 `https://github.com/USERNAME?tab=stars` 上的公共列表。

如果将私有存储库添加到列表中，则私有存储库将仅显示在您的列表中，供具有存储库`读取`访问权限的人员使用。

![星标页面上列表的屏幕截图](/assets/images/help/stars/lists-overview-on-stars-page.png)

只要您看到存储库的 **Star（星标）**或 **Starred（已加星标）**下拉菜单，无论是在存储库页面上还是在已加星标的存储库列表中，您都可以将存储库添加到现有列表或新列表中。

!["Star（星标）"下拉菜单的屏幕截图，其中包含存储库页面中的列表选项](/assets/images/help/stars/stars-dropdown-on-repo.png)

!["Starred（已加星标）"下拉菜单的屏幕截图，其中包含已加星标存储库列表中的列表选项](/assets/images/help/stars/add-repo-to-list.png)

### 创建列表

{% data reusables.stars.stars-page-navigation %}
2. 在“Lists（列表）”旁边，单击 **Create list（创建列表）**。 !["Create list（创建列表）"按钮的屏幕截图](/assets/images/help/stars/create-list.png)
3. 输入列表的名称和说明，然后单击 **Create（创建）**。 ![模式的屏幕截图，显示您在使用"Create（创建）"按钮输入名称和描述的位置。](/assets/images/help/stars/create-list-with-description.png)

### 将存储库添加到列表

{% data reusables.stars.stars-page-navigation %}
2. 找到要添加到列表中的存储库。 ![已加星标的存储库搜索栏的屏幕截图](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. 在要添加的存储库旁边，使用 **Starred（已加星标）**下拉菜单，然后选择您的列表。 ![显示列表复选框的下拉列表的屏幕截图](/assets/images/help/stars/add-repo-to-list.png)

### 从列表中删除存储库

{% data reusables.stars.stars-page-navigation %}
2. 选择您的列表。
3. 在要删除的存储库旁边，使用 **Starred（已加星标）**下拉菜单并取消选择列表。 ![显示列表复选框的下拉列表的屏幕截图](/assets/images/help/stars/add-repo-to-list.png)

### 编辑列表名称或说明

{% data reusables.stars.stars-page-navigation %}
1. 选择要编辑的列表。
2. 单击 **Edit list（编辑列表）**。
3. 更新名称或说明，然后单击 **Save list（保存列表）**。 ![显示"Save list（保存列表）"按钮的模式的屏幕截图](/assets/images/help/stars/edit-list-options.png)

### 删除列表

{% data reusables.stars.stars-page-navigation %}
2. 选择要删除的列表。
3. 单击 **Delete list（删除列表）**。 ![显示"Delete list（删除列表）"按钮的模式的屏幕截图](/assets/images/help/stars/edit-list-options.png)
4. 要确认，请单击 **Delete（删除）**。

{% endif %}

## 搜索已加星标的存储库和主题

您可以使用 {% data variables.explore.your_stars_page %} 上的搜索栏快速查找您标星的仓库和主题。

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 使用搜索栏按名称查找您标星的仓库或主题。 ![搜索星标](/assets/images/help/stars/stars_search_bar.png)

搜索栏只能根据仓库或主题名称搜索，而不能根据任何其他限定符（如仓库大小或上次更新时间）搜索。

## 在星标页面上排序和筛选星标

您可以使用排序或筛选来自定义您如何在星标页面上查看标星的仓库和主题。

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 要对星标排序，选择 **Sort（排序）**下拉菜单，然后选择 **Recently starred（最近标星）**、**Recently active（最近活跃）**或 **Most stars（最多星标）**。 ![排序星标](/assets/images/help/stars/stars_sort_menu.png)
1. 要根据星标的语言筛选星标名单，请单击“**Filter by languages（按语言筛选）**下所需的语言。 ![按语言过滤星标](/assets/images/help/stars/stars_filter_language.png)
1. 要根据仓库或主题筛选您的星标列表，请单击所需的选项。 ![按主题筛选星标](/assets/images/help/stars/stars_filter_topic.png)

## 延伸阅读

- "[使用主题对仓库分类](/articles/classifying-your-repository-with-topics)"
