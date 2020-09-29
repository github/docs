---
title: 搜索 wiki
intro: '您可以在 {% data variables.product.product_name %} 上搜索 wiki，并使用这些 wiki 搜索限定符的任意组合缩小结果范围。'
redirect_from:
  - /articles/searching-wikis
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以在所有 {% data variables.product.product_name %} 内全局搜索 wiki，也可以在特定仓库或组织内搜索 wiki。 更多信息请参阅“[关于在 {% data variables.product.company_short %} 上搜索](/articles/about-searching-on-github)”。

{% data reusables.search.syntax_tips %}

### 在用户或组织的仓库内搜索

要从特定用户或组织拥有的所有仓库中查找 wiki 页面，请使用 `user` 或 `org` 限定符。 要从特定仓库中查找 wiki 页面，请使用 `repo` 限定符。

| 限定符                       | 示例                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) 匹配来自 @defunkt 拥有的仓库的 wiki 页面。                      |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) 匹配 GitHub 组织拥有的仓库中的 wiki。               |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) 匹配来自 @defunkt 的 "gibberish" 仓库的 wiki 页面。 |

### 在 wiki 页面标题或正文文本中搜索

`in` 限定符将搜索限制为 wiki 页面标题或正文文本。 如果未使用该限定符，将同时搜索标题和正文文本。

| 限定符        | 示例                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) 匹配含有 "usage" 字样的 wiki 页面。                            |
| `in:body`  | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) 匹配其主要正文文本中含有 "installation" 字样的 wiki 页面。 |

### 按上次更新日期搜索

`updated` 限定符匹配其上次更新在指定日期范围内的 wiki 页面。

{% data reusables.search.date_gt_lt %}

| 限定符                       | 示例                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) 匹配包含文字 "usage" 且上次更新在 2016-01-01 后的 wiki 页面。 |

### 延伸阅读

- “[排序搜索结果](/articles/sorting-search-results/)”
