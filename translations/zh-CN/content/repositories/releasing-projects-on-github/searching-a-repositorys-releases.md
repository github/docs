---
title: 搜索存储库的版本
intro: 您可以使用关键字、标记和其他限定符来搜索存储库中的特定版本。
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: 搜索版本
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae: issue-4974
topics:
  - Repositories
---

## 在存储库中搜索版本

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. 要搜索存储库的版本，请在 Releases（发行版）页面顶部的搜索字段中，键入您的查询，然后按 **Enter**。 ![版本搜索字段](/assets/images/help/releases/search-releases.png)

## 用于在存储库中搜索版本的搜索语法

您可以在搜索查询中提供文本，这些文本将与存储库版本的标题、正文和标记进行匹配。 您还可以组合以下限定符以面向特定版本。

| 限定符                       | 示例                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `draft:true`              | **draft:true** 将仅匹配草稿版本。                                                                                                                                                    |
| `draft:false`             | **draft:false** 仅匹配已发布的版本。                                                                                                                                                  |
| `prerelease:true`         | **prerelease:true** 仅匹配预发行版本。                                                                                                                                               |
| `prerelease:false`        | **prerelease:false** 仅匹配非预发行版的版本。                                                                                                                                           |
| <code>tag:<em>TAG</em></code> | **tag:v1** 匹配具有 v1 标记的版本以及 v1 中的任何次要版本或修补程序版本，例如 v1.0、v1.2 和 v1.2.5。                                                                                                        |
| <code>created:<em>DATE</em></code> | **created:2021** 将匹配 2021 年期间创建的版本。 您还可以提供日期范围。 更多信息请参阅“[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)”。 |
