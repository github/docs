---
title: 查看仓库的流量
intro: 具有仓库推送权限的任何人都可以查看其流量，包括完整克隆（不是提取）、过去 14 天的访问者、推荐站点以及流量图中的热门内容。
product: '此仓库洞察图可用于具有 {% data variables.product.prodname_free_user %} 和 {% data variables.product.prodname_free_team %}（对于组织）的公共仓库，以及具有 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 和 {% data variables.product.prodname_ghe_cloud %} 的公共和私有仓库。{% if currentVersion == "free-pro-team@latest" %}更多信息请参阅“[关于仓库图](/articles/about-repository-graphs)”和“[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)。”{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---
您可以从推荐特定路径的链接导航到推荐站点，不包括搜索引擎和 {% data variables.product.product_name %} 本身。 热门内容会链接到生成流量的特定内容。

推荐站点和热门内容按视图和唯一的访问者排序。 完整克隆和访问者信息每小时更新一次，而推荐站点和热门内容部分每天更新。 无论您的位置如何，流量图中的所有数据均使用 UTC+0 时区。

{% tip %}

**提示：**您可以将鼠标悬停在流量图中的特定日期，以查看该日期的确切数据。

{% endtip %}

![带工具提示的仓库流量图](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

### 访问流量图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击 **Traffic（流量）**。 ![流量选项卡](/assets/images/help/graphs/traffic_tab.png)
