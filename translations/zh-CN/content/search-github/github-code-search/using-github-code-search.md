---
title: 使用 GitHub 代码搜索（beta 版本）
intro: '你可以在升级后的搜索界面中使用建议、完成和保存的搜索，快速找到你在 {% data variables.product.prodname_dotcom_the_website %} 查找中的内容。'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159517'
---
{% note %}

注意：{% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 关于使用新代码搜索（beta 版本）

在获得新代码搜索 beta 版访问权限后，GitHub 将为你拥有的任何存储库以及所属组织中任何存储库编制索引，无论是公共、专用还是内部存储库。 这意味着，除了已编制索引的 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库外，可以在所有存储库中搜索。 只有有权查看 {% data variables.product.prodname_dotcom_the_website %} 上代码的用户才能查看搜索结果中的代码。 分支的编制索引和搜索方式与其他存储库相同。

并非所有代码都已编制索引，你目前只能搜索存储库的默认分支。 有关已知限制的详细信息，请参阅“[关于 GitHub 代码搜索（beta 版本）](/search-github/github-code-search/about-github-code-search#limitations)”。

新代码搜索 beta 版已集成到新的代码视图 beta 版中。 {% data reusables.search.code-view-link %}

## 使用搜索栏

Beta 版基于新的代码搜索引擎，包括 {% data variables.product.prodname_dotcom_the_website %} 上升级的搜索界面。 使用建议、完成内容和保存的搜索，可以快速找到要查找的内容，通常无需完全键入查询或查看搜索结果页。

有关新代码搜索（beta 版本）的搜索语法的详细信息，请参阅“[了解 GitHub Code Search（beta 版本）语法](/search-github/github-code-search/understanding-github-code-search-syntax)”。

{% data reusables.search.non-code-search-explanation %}

1. 在 {% data variables.product.prodname_dotcom_the_website %} 的顶部导航中，单击搜索栏。
1. 在搜索栏下，你将看到按类别组织的建议列表，包括最近搜索以及你有权访问的建议存储库、团队和项目。 还可以查看已创建的保存的搜索的列表。 有关保存的搜索的详细信息，请参阅“[创建和管理保存的搜索](#creating-and-managing-saved-searches)”。

    ![包含建议和保存的搜索的搜索栏](/assets/images/help/search/code-search-beta-search-bar.png)

    如果单击任何特定建议，将直接转到该建议的页面（例如，存储库或项目页面）。 如果单击最近或保存的搜索，根据搜索的类型，搜索查询或显示在搜索栏中，或者将转到搜索词的搜索结果页。

1. 开始键入搜索查询后，将看到与查询匹配的完成内容和建议的列表。 可以单击建议跳转到特定位置。 键入更多限定符时，将看到更具体的建议，例如可以直接跳转到的代码文件。
   
   ![包含查询和代码建议的搜索栏](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  键入查询后，还可以按 Enter 转到完整的搜索结果视图，可在其中查看每个匹配项和用于应用筛选器的可视化界面。 有关详细信息，请参阅“[使用搜索结果视图](#using-the-search-results-view)”。

## 创建和管理保存的搜索

1. 在 {% data variables.product.prodname_dotcom_the_website %} 的顶部导航中，单击搜索栏并开始键入搜索查询（或任何字母）。
1. 在搜索栏下，现在应已显示“保存的搜索”部分。 单击 {% octicon "plus-circle" aria-label="The plus-circle icon" %}“创建保存的搜索”。

    ![搜索栏中的“创建保存的搜索”按钮](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. 在弹出窗口中，为查询和要保存的查询填写所需的名称。 单击“创建保存的搜索”

    ![“创建保存的搜索”窗口](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. 如果再次单击搜索栏，现在可以在搜索栏下的“保存的搜索”部分看到保存的搜索。 单击保存的搜索项会将查询添加到搜索栏，并相应地筛选建议。

  ![在搜索栏中使用保存的搜索](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - 若要编辑保存的搜索，请在“保存的搜索”部分中，单击保存的搜索右侧的 {% octicon "pencil" aria-label="The pencil icon" %}。 
    - 若要删除保存的搜索，请单击保存的搜索右侧的 {% octicon "trash" aria-label="The trash icon" %}。

  ![用于编辑或删除保存的搜索的按钮](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## 使用搜索结果视图

GitHub 上的经典搜索已有搜索结果视图，且大多数搜索类型（代码除外）的功能相同。 启用新代码搜索 beta 版本后，搜索结果页具有重新设计的 UI，并包含新代码搜索引擎支持的筛选器，例如路径和符号筛选器。

若要使用可视界面构造搜索查询以及查看和筛选结果，可以使用 {% data variables.search.search_page_url %} 或 {% data variables.search.advanced_url %}。 如果在搜索栏中键入搜索查询后按 Enter，则还会转到搜索结果视图。

在搜索结果视图中，可以在不同类型的搜索结果之间导航，包括代码、问题、拉取请求、存储库等。 还可以查看和使用筛选器。

![搜索结果视图](/assets/images/help/search/code-search-beta-results-view.png)
