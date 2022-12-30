---
title: 搜索存储库的版本
intro: 您可以使用关键字、标记和其他限定符来搜索存储库中的特定版本。
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108683'
---
## 在存储库中搜索版本

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. 要搜索存储库的版本，请在“版本”页面顶部的搜索字段中键入你的查询，然后按 Enter。
![版本搜索字段](/assets/images/help/releases/search-releases.png)

## 用于在存储库中搜索版本的搜索语法

您可以在搜索查询中提供文本，这些文本将与存储库版本的标题、正文和标记进行匹配。 您还可以组合以下限定符以面向特定版本。

| 限定符        | 示例
| ------------- | -------------
| `draft:true` | draft:true 仅匹配草稿版本。
| `draft:false` | draft:false 仅匹配已发布的版本。
| `prerelease:true` | prerelease:true 仅匹配预发行版本。
| `prerelease:false` | prerelease:false 仅匹配不是预发行版的版本。
| <code>tag:<em>TAG</em></code> | tag:v1 匹配具有 v1 标记的版本以及 v1 中的任何次要版本或补丁版本，例如 v1.0、v1.2 和 v1.2.5。
| <code>created:<em>DATE</em></code> | created:2021 匹配 2021 年创建的版本。 您还可以提供日期范围。 有关详细信息，请参阅“[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)”。
