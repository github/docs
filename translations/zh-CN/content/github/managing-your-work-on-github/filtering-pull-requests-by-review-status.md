---
title: 按审查状态过滤拉取请求
intro: 您可以使用过滤器按审查状态列出拉取请求，查找您已审查的拉取请求或其他人要求您审查的拉取请求。
redirect_from:
  - /articles/filtering-pull-requests-by-review-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

您可以过滤仓库的拉取请求列表以查找：
- 尚未[审查](/articles/about-pull-request-reviews)的拉取请求
- [需要审查](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)后才能合并的拉取请求
- 审查者已批准的拉取请求
- 审查者要求更改的拉取请求
- 您已审查的拉取请求
- [有人要求您或您所属团队进行审查](/articles/requesting-a-pull-request-review)的拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 在右上角，选择 Reviews（审查）下拉菜单。 ![拉取请求列表上方过滤器菜单中的审查下拉菜单](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. 选择一个过滤器以查找具有该过滤器状态的所有拉取请求。 ![审查下拉菜单中的过滤器列表](/assets/images/help/pull_requests/pr-review-filters.png)

### 延伸阅读

- “[关于拉取请求审查](/articles/about-pull-request-reviews)”
- "[使用搜索过滤议题和拉取请求](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[查看所有议题和拉取请求](/articles/viewing-all-of-your-issues-and-pull-requests)"
