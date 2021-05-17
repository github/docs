---
title: 搜索主题
intro: '您可以在 {% data variables.product.product_name %} 上搜索与仓库关联的主题。'
redirect_from:
  - /articles/searching-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

### 搜索 {% data variables.product.product_name %} 主题

您可以在 {% data variables.product.product_name %} 上搜索主题、探索相关主题以及查看有多少仓库与特定主题关联。

1. 导航到 https://github.com/search。
2. 输入主题关键词。 ![搜索字段](/assets/images/help/search/search-field.png)
3. 在左侧边栏中，要将搜索范围缩小到主题，请单击 **Topics（主题）**。
{% if currentVersion == "free-pro-team@latest" %}
  ![主题侧菜单选项突出显示的 Jekyll 仓库搜索结果页面](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

### 使用搜索限定符缩小搜索范围

如果您要探索关于特定主题的仓库、查找要贡献内容的项目或了解哪些主题在 {% data variables.product.product_name %} 上最受欢迎，您可以使用搜索限定符 `is:featured`、`is:curated`、`repositories:n` 和 `created:YYYY-MM-DD` 搜索主题。

`is:featured` 搜索限定符会将搜索结果范围缩小为 {% data variables.product.product_name %} 上具有最多仓库的主题。 这些主题还会在 https://github.com/topics/ 上提供。

`is:curated` 搜索限定符可将搜索结果范围缩小到社区成员已向其添加额外信息的主题。 更多信息请参阅[探索仓库](https://github.com/github/explore)。

您可以使用日期参数和 `created:` 根据创建时间过滤主题，也可以使用 `repositories:n` 根据与此主题关联的仓库数量过滤主题。 这两个限定符都可以使用[大于和小于范围限定符](/articles/understanding-the-search-syntax)。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                       | 示例                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:curated`              | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) 匹配精心策划且含有 "javascript" 字样的主题。                                       |
| `is:featured`             | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) 匹配 https://github.com/topics/ 上提供且含有 "javascript" 字样的主题。          |
| `is:not-curated`          | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) 匹配没有额外信息（例如说明或徽标）且含有 "javascript" 字样的主题。                    |
| `is:not-featured`         | [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) 匹配 https://github.com/topics/ 上未提供且含有 "javascript" 字样的主题。 |
| `repositories:n`          | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) 匹配超过 5000 个仓库的主题。                                                                         |
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) 匹配含有 "serverless" 字样、在 2018 年之后创建的主题。                 |

### 按主题搜索仓库

您可以使用 `topic:` 限定符查找连接到特定主题的每个仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories/#search-by-topic)”。

### 延伸阅读
- "[使用主题对仓库分类](/articles/classifying-your-repository-with-topics)"
