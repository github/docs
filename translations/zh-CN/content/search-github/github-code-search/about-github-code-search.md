---
title: 关于 GitHub 代码搜索（beta 版本）
intro: 可以使用新的代码搜索（beta 版本）在 GitHub 中搜索、导航和了解代码。
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159523'
---
{% note %}

注意：{% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## 关于新的代码搜索（beta 版本）

可使用新的代码搜索（beta 版本）快速搜索、导航和了解你的代码、团队的代码以及开放源代码社区的代码，这一切可通过 {% data variables.product.prodname_dotcom_the_website %} 实现。 此搜索引擎设计为可缩放、代码感知，并支持使用正则表达式、布尔运算、专用限定符和符号搜索在 GitHub 中搜索代码。 有关新的代码搜索（beta 版本）的语法的详细信息，请参阅“[了解 GitHub 代码搜索（beta 版本）语法](/search-github/github-code-search/understanding-github-code-search-syntax)”。

在新的代码搜索引擎的基础上，代码搜索（beta 版本）包括 {% data variables.product.prodname_dotcom_the_website %} 上的搜索界面中的新功能，例如建议、完成和保存搜索的功能。 借助新的搜索界面，可以更快、更轻松地找到要查找的内容。 有关详细信息，请参阅“[使用 GitHub 代码搜索（beta 版本）](/search-github/github-code-search/using-github-code-search)”。

{% data reusables.search.non-code-search-explanation %}

新的代码搜索（beta 版本）与 {% data variables.product.prodname_dotcom_the_website %} 上重新设计的代码视图（beta 版本）紧密集成。 {% data reusables.search.code-view-link %}

若要访问新的代码搜索（beta 版本）以及新的代码视图，可以注册[等待列表](https://github.com/features/code-search-code-view/signup)。 

## 启用和禁用新的代码搜索和代码视图（beta 版本）

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## 限制

我们已为新的代码搜索（beta 版本）编制了许多公共存储库索引，并将继续编制更多索引。 此外，Beta 版本 GitHub 用户的专用存储库已编制索引，可供已经可以访问 GitHub.com 上的专用存储库的 Beta 版本参与者搜索。 但是，目前可能不会为非常大的存储库编制索引，并且并非所有代码都已编制索引。 

当前对编制索引的代码的限制是：
   - 排除供应商和生成的代码（由 [Enry](https://github.com/go-enry/go-enry) 确定）
   - 排除空文件和超过 350 KiB 的文件
   - 仅包含 UTF-8 编码文件
   - 可能不会为非常大的存储库编制索引

目前仅支持在存储库的默认分支上搜索代码。

使用新代码搜索（beta 版本）的任何搜索的结果限制为 100 个结果（10 页）。 代码搜索结果目前不支持排序。 此限制仅适用于使用新代码搜索（beta 版本）搜索代码，不适用于其他类型的搜索。

新的代码搜索（beta 版本）支持使用 `symbol:` 限定符在代码中搜索符号定义，例如函数或类定义。 但是，请注意 `symbol:` 限定符仅搜索定义而不搜索引用，并且尚未完全支持所有符号类型或语言。 有关受支持语言的列表，请参阅“[符号限定符](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)”。

## 反馈和支持

可以在[论坛](https://github.com/orgs/community/discussions/categories/code-search-and-navigation)中查看和分享有关新代码搜索（beta 版本）的反馈。
