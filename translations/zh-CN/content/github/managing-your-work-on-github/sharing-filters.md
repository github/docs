---
title: 共享过滤器
intro: '当您过滤或排序议题和拉取请求时，浏览器的 URL 自动更新以匹配新视图。'
redirect_from:
  - /articles/sharing-filters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

您可以将议题生成的 URL 发送给任何用户，这些用户将能够看到与您所见相同的过滤视图。

例如，如果您过滤分配给 Hubot 的议题，然后对最早的开放议题进行排序，您的 URL 将更新为类似如下内容：

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

### 延伸阅读

* "[过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"
* "[排序议题和拉取请求](/articles/sorting-issues-and-pull-requests)"
* "[使用搜索过滤议题和拉取请求](/articles/using-search-to-filter-issues-and-pull-requests)"
