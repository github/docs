---
title: 关于仓库语言
intro: 仓库中的文件和目录确定构成仓库的语言。 您可以查看仓库的语言以快速获取仓库的概述。
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129350'
---
{% data variables.product.product_name %} 使用开放源代码 [Linguist 库](https://github.com/github/linguist)来确定用于语法突出显示和存储库统计的文件语言。 语言统计数据在您推送更改到默认分支后将会更新。

有些文件难以识别，有时项目包含的库和供应商文件多于其主要代码。 如果收到错误结果，请参阅 Linguist [故障排除指南](https://github.com/github/linguist/blob/master/docs/troubleshooting.md)获取帮助。

## 标记语言

标记语言使用开放源代码[标记库](https://github.com/github/markup)呈现为 HTML 并内联显示。 目前，我们不接受在 {% data variables.product.product_name %} 中显示新的标记语言。 但我们会主动维护目前的标记语言。 如果发现问题，[请创建问题](https://github.com/github/markup/issues/new)。
