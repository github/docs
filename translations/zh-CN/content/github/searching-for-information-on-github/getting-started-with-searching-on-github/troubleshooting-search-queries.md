---
title: 搜索查询故障排除
intro: '如果您在 {% data variables.product.product_name %} 上搜索时遇到意外的结果，您可以通过查看常见问题和限制来进行故障排除。'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
### 可能的超时

对于我们要执行的搜索基础架构来说，有些查询的计算成本很高。 为了让所有人都能快速搜索，我们会限制任何单个查询能够运行的时长。 在查询超过时间限制的极少数情况下，搜索将返回超时之前找到的所有匹配项，并通知您发生了超时。

达到超时并不意味着搜索结果不完整， 它只是表示查询在搜索所有可能的数据之前被中断。

### 查询长度限制

在 {% data variables.product.product_name %} 上搜索时，查询的长度有一些限制：

* 不支持长度超过 256 个字符的查询
* 您无法使用超过五个 `AND`、`OR` 或 `NOT` 运算符构造查询

特定搜索类型（例如，代码搜索）可能有其他限制。 查看这些搜索类型的文档以了解更多信息。

### 延伸阅读

- “[关于在 GitHub 上搜索](/articles/about-searching-on-github)”
