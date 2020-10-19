---
title: 排序搜索结果
intro: '您可以使用 Sort（排序）菜单或通过将 `sort` 限定符添加到查询来排序 [{% data variables.product.product_name %} 搜索](/articles/searching-on-github)结果。'
redirect_from:
  - /articles/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

使用 Sort（排序）菜单可按相关性、星号数量、复刻数量以及项目最近更新时间来排序结果。

  ![含有排序搜索结果选项的菜单](/assets/images/help/search/repo-search-sort.png)

要按交互、反应、作者日期、提交者日期或项目最近更新时间来排序，您可以将 `sort` 限定符添加到搜索查询。

### 按交互排序

`sort:interactions` 限定符按最高反应和评论总数排序。

| 限定符                                            | 示例                                                                                                                                                                                                       |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:interactions` 或 `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最高反应和评论总数排序。                        |
| `sort:interactions-asc`                        | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最低反应和评论总数排序。 |

### 按反应排序

`sort:reactions` 限定符按反应数量或类型排序。

| 限定符                                      | 示例                                                                                                                                                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:reactions` 或 `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最高反应数量排序。                                        |
| `sort:reactions-asc`                     | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按反应数量升序排序（最少到最多）。                         |
| <code>sort:reactions-<em>reaction</em></code>                | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最多赞成 (:+1:) 反应数排序。                       |
|                                          | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最多不赞成 (:-1:) 反应数排序。         |
|                                          | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最多大笑 (:smile:) 反应数排序。 |
|                                          | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最多欢呼 (:tada:) 反应数排序。    |
|                                          | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) 匹配 {% data variables.product.product_name %} 所拥有仓库中的议题，按最多红心 (:heart:) 反应数排序。 |

### 按作者日期排序

`sort:author-date` 限定符按作者日期降序或升序排序。

| 限定符                                          | 示例                                                                                                                                                                                                                                  |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:author-date` 或 `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) 匹配 {% data variables.product.product_name %} 所拥有仓库中含有 "feature" 字样的提交，按作者日期降序排序。         |
| `sort:author-date-asc`                       | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) 匹配 {% data variables.product.product_name %} 所拥有仓库中含有 "feature" 字样的提交，按作者日期升序排序。 |

### 按提交者日期排序

`sort:committer-date` 限定符按提交者日期降序或升序排序。

| 限定符                                                | 示例                                                                                                                                                                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sort:committer-date` 或 `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) 匹配 {% data variables.product.product_name %} 所拥有仓库中含有 "feature" 字样的提交，按提交者日期降序排序。         |
| `sort:committer-date-asc`                          | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) 匹配 {% data variables.product.product_name %} 所拥有仓库中含有 "feature" 字样的提交，按提交者日期升序排序。 |

### 按更新日期排序

`sort:updated` 限定符按项目最近更新日期排序。

| 限定符                                  | 示例                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:updated` 或 `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) 匹配含有 "feature" 字样的仓库，按最近更新日期排序。         |
| `sort:updated-asc`                   | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) 匹配含有 "feature" 字样的仓库，按最远更新日期排序。 |

### 延伸阅读

- [关于在 GitHub 上搜索](/articles/about-searching-on-github)
- [排序议题和拉取请求](/articles/sorting-issues-and-pull-requests/)
