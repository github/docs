---
title: 在复刻中搜索
intro: '默认情况下，[分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)不会显示在搜索结果中。 如果复刻满足特定条件，您可以选择在仓库搜索以及在代码搜索中包括它们。'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147785788'
---
若要在[存储库搜索](/search-github/searching-on-github/searching-for-repositories)结果中显示分支，请将 `fork:true` 或 `fork:only` 添加到查询。

仅当分支的星级高于父存储库时，才会为[代码搜索](/search-github/searching-on-github/searching-code)编制索引。 您无法在比父项具有更少星号的复刻中搜索代码。 若要在代码搜索结果中显示星级高于父存储库的分支，请将 `fork:true` 或 `fork:only` 添加到查询。

`fork:true` 限定符查找与搜索查询匹配的所有结果，包括分支。 `fork:only` 限定符仅查找与搜索查询匹配的分支。

| 限定符  | 示例
| ------------- | -------------
| `fork:true` | [github fork:true](https://github.com/search?q=github+fork%3Atrue&type=Repositories) 与所有包含“github”一词的存储库匹配，包括分支。
| | [android language:java fork:true](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) 与具有分支和常规存储库中用 Java 编写的“android”一词的代码相匹配。
| `fork:only` | [github fork:only](https://github.com/search?q=github+fork%3Aonly&type=Repositories) 与所有包含“github”一词的分支存储库匹配。
| | [forks:>500 fork:only](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) 与具有超过 500 个分支的存储库匹配，并且仅返回分支存储库。

## 延伸阅读

- “[关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
- “[关于在 GitHub 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”
