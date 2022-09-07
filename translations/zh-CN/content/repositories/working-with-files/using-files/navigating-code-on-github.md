---
title: 在 GitHub 上导航代码
intro: '您可以直接在 {% data variables.product.product_name %} 中导航代码，来理解仓库内及仓库之间的关系。'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: becb68c2813f1e6914edb34b235ac59aba8ae00b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129230'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## 关于在 {% data variables.product.prodname_dotcom %} 上导航代码

代码导航通过显示和链接该实体的引用对应的命名实体定义以及实体定义对应的引用，帮助您阅读、导航和理解代码。

![代码导航显示](/assets/images/help/repository/code-navigation-popover.png)

代码导航使用开放源代码 [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) 库。 支持以下语言和导航策略：

| 语言   | 基于搜索的代码导航 | 精确的代码导航 |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| TypeScript | ✅                           |                         |


您无需在存储库中配置任何内容即可启用代码导航。 我们将在所有存储库中自动提取这些受支持语言的基于搜索的精确代码导航信息，如果您的编程语言都支持这两种支持的语言，则可以在两种受支持的代码导航方法之间切换。

{% data variables.product.prodname_dotcom %} 基于开放源代码 [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) 和 [`stack-graphs`](https://github.com/github/stack-graphs) 库开发了两种代码导航方法：
 - 基于搜索 - 搜索存储库中的所有定义和引用，以查找具有给定名称的实体
 - 精确 - 根据代码中给定点的类、函数和导入定义的集合解析定义和引用

若要了解有关这些方法的详细信息，请参阅“[精确和基于搜索的导航](#precise-and-search-based-navigation)”。

未来的版本将针对更多语言添加精确的代码导航，这种代码导航方法可以提供更准确的结果。

## 跳至功能或方法的定义

您可以在文件中单击函数或方法调用，跳至同一仓库中该函数或方法的定义。

![跳至定义选项卡](/assets/images/help/repository/jump-to-definition-tab.png)

## 查找函数或方法的所有引用

你可以在文件中单击函数或方法调用，然后单击“引用”选项卡，查找同一存储库中该函数或方法的所有引用。

![查找所有引用选项卡](/assets/images/help/repository/find-all-references-tab.png)

## 精确和基于搜索的导航

{% data variables.product.prodname_dotcom %} 支持的某些语言可以使用精确的代码导航，它使用算法（基于开放源代码 [`stack-graphs`](https://github.com/github/stack-graphs) 库）根据在代码中任何给定点可见的类、函数和导入定义集解析定义和引用。 其他语言使用基于搜索的代码导航，它在存储库中搜索所有定义和引用，以查找具有给定名称的实体。 这两种策略在查找结果方面都很有效，并且都确保避免不适当的结果（如注释），但精确的代码导航可以提供更准确的结果，特别是当存储库包含具有相同名称的多个方法或函数时。

如果看不到精确代码导航查询的预期结果，可以单击显示的弹出窗口中的“基于搜索”链接以执行基于搜索的导航。

![基于搜索的代码导航链接](/assets/images/help/repository/search-based-code-navigation-link.png)

如果精确结果显示不准确，您可以提交支持请求。

## 代码导航疑难解答

如果已为您启用代码导航，但您没有看到指向函数和方法定义的链接：
- 代码导航仅适用于活动的分支。 推送到分支，然后重试。
- 代码导航仅适用于文件少于 100,000 个的存储库。

## 延伸阅读
- “[搜索代码](/github/searching-for-information-on-github/searching-code)”
