---
title: 在复刻中搜索
intro: '默认情况下，[forks](/articles/about-forks) 不会在搜索结果中显示。 如果复刻满足特定条件，您可以选择在仓库搜索以及在代码搜索中包括它们。'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
要在[仓库搜索](/articles/searching-for-repositories)结果中显示复刻，请将 `fork:true` 或 `fork:only` 添加到查询。

仅当复刻具有比父仓库更多的星号时，才会为[代码搜索](/articles/searching-code)编索引。 您无法在比父项具有更少星号的复刻中搜索代码。 要在代码搜索结果中显示比父仓库具有更多星号的复刻，请将 `fork:true` 或 `fork:only` 添加到查询。

`fork:true` 限定符查找匹配搜索查询的所有结果，包括复刻。 `fork:only` 限定符_仅_查找匹配搜索查询的复刻。

| 限定符         | 示例                                                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) 匹配包含 "github" 字样的所有仓库，包括复刻。                                     |
|             | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) 匹配复刻和普通仓库中包含 "android" 字样、以 Java 编写的代码。 |
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) 匹配包含 "github" 字样的所有复刻仓库。                                        |
|             | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) 匹配具有超过 500 个复刻的仓库，并且只返回作为复刻的仓库。                     |

### 延伸阅读

- "[关于复刻](/articles/about-forks)"
- “[关于在 GitHub 上搜索](/articles/about-searching-on-github)”
