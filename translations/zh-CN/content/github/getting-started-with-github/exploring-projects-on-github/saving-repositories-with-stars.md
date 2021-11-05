---
title: 使用星标保存仓库
intro: '您可以对仓库和主题标星以跟踪您感兴趣的项目{% if currentVersion == "free-pro-team@latest" %} and discover related content in your news feed{% endif %}。'
redirect_from:
  - /articles/stars/
  - /articles/about-stars/
  - /articles/browsing-friends-stars/
  - /articles/managing-your-stars/
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

您可以在 {% data variables.explore.your_stars_page %} 上搜索、排序和筛选星标仓库和主题。'

### 关于星标

标星操作便于以后再次找到仓库或主题。 您可以到 {% data variables.explore.your_stars_page %} 查看已经加星标的所有仓库和主题。

{% if currentVersion == "free-pro-team@latest" %}
您可以对仓库和主题加星标以在 {% data variables.product.product_name %} 上发现类似的项目。 对仓库或主题加星标时，{% data variables.product.product_name %} 可能会在消息馈送的发现视图中推荐相关内容。 更多信息请参阅“[寻找在 {% data variables.product.prodname_dotcom %} 上参与开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。
{% endif %}

对仓库加星标也可表示赞赏仓库维护员的工作。 许多 {% data variables.product.prodname_dotcom %} 的仓库评级取决于仓库拥有的星标数。 此外，[Explore](https://github.com/explore) 也会根据星标数显示最受欢迎的仓库。

### 对仓库标星

对仓库标星是一个简单的两步过程。

{% data reusables.repositories.navigate-to-repo %}
1. 在页面的右上角，单击 **Star（星标）**。 ![对仓库标星](/assets/images/help/stars/starring-a-repository.png)
1. （可选）要取消先前已标星仓库的星标，请点击 **Unstar（取消星标）**。 ![解压仓库](/assets/images/help/stars/unstarring-a-repository.png)

### 搜索星标

您可以使用 {% data variables.explore.your_stars_page %} 上的搜索栏快速查找您标星的仓库和主题。

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 使用搜索栏按名称查找您标星的仓库或主题。 ![搜索星标](/assets/images/help/stars/stars_search_bar.png)

搜索栏只能根据仓库或主题名称搜索，而不能根据任何其他限定符（如仓库大小或上次更新时间）搜索。

### 排序和过滤星标

您可以使用排序或筛选来自定义您如何在星标页面上查看标星的仓库和主题。

1. 转到您的 {% data variables.explore.your_stars_page %}。
1. 要对星标排序，选择 **Sort（排序）**下拉菜单，然后选择 **Recently starred（最近标星）**、**Recently active（最近活跃）**或 **Most stars（最多星标）**。 ![排序星标](/assets/images/help/stars/stars_sort_menu.png)
1. 要根据星标的语言筛选星标名单，请单击“**Filter by languages（按语言筛选）**下所需的语言。 ![按语言过滤星标](/assets/images/help/stars/stars_filter_language.png)
1. 要根据仓库或主题筛选您的星标列表，请单击所需的选项。 ![按主题筛选星标](/assets/images/help/stars/stars_filter_topic.png)

### 延伸阅读

- "[使用主题对仓库分类](/articles/classifying-your-repository-with-topics)"
