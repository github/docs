---
title: 使用新代码视图（beta 版本）执行文件导航
intro: 使用新代码视图（beta 版本），可以通过易于导航的文件树和集成的符号搜索，在上下文中查看代码。
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172185'
---
{% note %}

注意：{% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## 关于新代码视图（beta 版本）
新代码视图 beta 版本通过文件树视图改进了导航，简化了文件编辑，引入了用于符号搜索和导航的符号窗格，并更新了追溯视图以维护文件上下文。 新代码视图集成了 {% data variables.product.prodname_dotcom_the_website %} 上一个有限公共 beta 版本中的新代码搜索引擎和搜索界面。 {% data reusables.search.code-search-link %}

若要访问新代码视图（beta 版本），以及新代码搜索，可以注册[等待列表](https://github.com/features/code-search-code-view/signup)。

若要提供有关新代码视图 beta 版本的反馈，请参阅[讨论论坛](https://github.com/orgs/community/discussions/categories/repositories)。

## 启用和禁用新的代码搜索和代码视图（beta 版本）

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## 使用文件树视图
新的文件树视图是一个面板，可通过易于导航的树结构来显示存储库的目录和文件。 可以在目录和文件之间快速移动，并了解所查看的每个项的上下文。

1. 选择存储库，然后单击该存储库中的目录或文件以打开文件树视图。

  ![“github/docs”存储库的屏幕截图，重点是文件树视图](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. 若要搜索特定目录或文件，请单击 {% octicon "filter" aria-label="The filter icon" %}“跳转到文件”搜索栏，然后键入目录或文件名，然后从结果中选择目录或文件。 在每个搜索结果下方可以查看目录或文件的文件路径。

  ![文件树视图的屏幕截图，重点是“跳转到文件”搜索栏](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - 若要使用 {% data variables.product.prodname_dotcom %} 搜索栏在存储库中进行搜索，请单击 {% octicon "search" aria-label="The search icon" %}。

        ![文件树视图的屏幕截图，重点是搜索图标](/assets/images/help/repository/file-tree-view-search-icon.png)

1. 若要在分支之间切换，请选择 {% octicon "git-branch" aria-label="The branch icon" %} 分支下拉菜单，然后从结果中单击所需的分支。 若要查看存储库的所有分支，请单击“查看所有分支”。

  ![文件树视图的屏幕截图，重点是分支下拉菜单的“分支”选项卡](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. 若要在标记之间切换，请选择 {% octicon "git-branch" aria-label="The branch icon" %} 分支下拉菜单，然后从结果中单击所需的标记。 若要查看存储库的所有标记，请单击“查看所有标记”。

  ![文件树视图的屏幕截图，重点是分支下拉菜单的“标记”选项卡](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## 使用文件
新代码视图还包括对使用文件的方式的更新。 编辑文件、创建或上传文件以及删除文件或目录等现有功能已得到简化。 现在，你可以快速在 github.dev 或 {% data variables.product.prodname_desktop %} 中编辑文件，以及快速访问集成的文件内搜索功能。 

1. 选择存储库，然后单击该存储库中的文件以打开新的代码视图。

  ![“github/docs”存储库的屏幕截图，重点是文件树视图中的选定文件](/assets/images/help/repository/file-tree-view-file-selected.png)

1. 若要在集成文件编辑器中编辑文件，请单击 {% octicon "pencil" aria-label="The pencil icon" %}。

  ![新代码视图中文件编辑器的屏幕截图，重点是编辑图标](/assets/images/help/repository/code-view-edit-icon.png)

1. 若要在 github.dev {% data variables.codespaces.serverless %} 或 {% data variables.product.prodname_desktop %} 上编辑文件，请选择 {% octicon "pencil" aria-label="The pencil icon" %} 旁边的 {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %}，然后单击“github.dev”或“{% data variables.product.prodname_desktop %}” 。

  {% note %}

  注意：github.dev {% data variables.codespaces.serverless %} 目前为测试预览版。 你可以在[我们的讨论中](https://github.com/community/community/discussions/categories/general)提供反馈。

  {% endnote %}

  ![新代码视图中文件编辑器的屏幕截图，重点是编辑下拉菜单](/assets/images/help/repository/code-view-edit-dropdown.png)

1. 若要查找文件中的特定字符，请单击“代码”按钮查看该文件的原始代码。 接下来，按 <kbd>Command</kbd>+<kbd>F</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) 并键入要查找的字符。 可以通过按 <kbd>Return</kbd> (Mac) 或 <kbd>Enter</kbd> (Windows/Linux)，或单击 {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} 和 {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %} 在结果之间导航。

  {% note %}

  注意：若要使用浏览器的默认查找功能，请按 <kbd>Command</kbd>+<kbd>F</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) 两次。 请注意，浏览器的默认查找功能无法搜索大型文件的全部内容，而新代码视图中集成的搜索可以。

  {% endnote %}

  ![新代码视图中“在文件中查看”功能的屏幕截图](/assets/images/help/repository/code-view-find-in-file.png)

1. 若要将新文件添加到特定目录，请单击该目录，然后单击{% octicon "plus" aria-label="The plus sign icon" %}“新建文件”，或单击文件树视图中的 {% octicon "plus" aria-label="The plus sign icon" %}。

  ![文件树视图的屏幕截图，重点是加号图标](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. 若要删除目录或文件，请导航到该目录或文件，然后单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 然后，单击“删除目录”或“删除文件” 。

  ![新代码视图中“选项”菜单的屏幕截图，重点是“删除目录”选项](/assets/images/help/repository/code-view-delete-directory.png)

1. 若要上传文件，请导航到所选目录，然后单击 {% octicon "upload" aria-label="The upload icon" %}“上传文件”或将文件拖放到浏览器中。

  ![新代码视图中“上传文件”按钮的屏幕截图](/assets/images/help/repository/code-view-upload-files.png)

## 使用符号窗格
现在，可以使用符号窗格在代码中的函数或类等符号之间快速查看和导航。 可以在单个文件中、存储库中的所有文件中搜索符号，甚至可以在 {% data variables.product.prodname_dotcom %} 上的所有公共存储库中搜索符号。

符号搜索是新代码搜索（beta 版本）的一项功能。 有关详细信息，请参阅“[了解 GitHub 代码搜索（beta 版本）语法](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)”。

1. 选择存储库，然后导航到包含符号的文件。
2. 若要打开符号窗格，请单击 {% octicon "code-square" aria-label="The code square icon" %}。

  ![新代码视图中符号窗格图标的屏幕截图](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  或者，可以通过单击文件中的合格符号来打开符号窗格。 将鼠标悬停在可单击符号上时，它们会以黄色突出显示。

  ![新代码视图中的文件屏幕截图，重点是可单击符号](/assets/images/help/repository/code-view-clickable-symbol.png)

1. 单击要从符号窗格或文件本身中查找的符号。

  ![符号窗格的屏幕截图，重点是自动填充的符号](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - 若要在整个存储库中搜索符号，请单击“在此存储库中搜索此符号”。 若要在 {% data variables.product.prodname_dotcom %} 上的所有存储库中搜索符号，请单击“所有存储库”。

      ![符号窗格的屏幕截图，重点是用于扩大符号搜索范围的选项](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. 若要在对符号的引用之间导航，请单击 {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} 或 {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}。

  ![符号窗格的屏幕截图，重点是搜索导航的 v 字形](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. 若要导航到对符号的特定引用，请单击 {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %}“此文件中”下的符号搜索结果。

  ![符号窗格的屏幕截图，重点是符号搜索结果](/assets/images/help/repository/code-view-symbol-search-result.png)

1. 若要退出对特定符号的搜索，请单击 {% octicon "arrow-left" aria-label="The left arrow icon" %}“所有符号”。

  ![符号窗格的屏幕截图，重点是“所有符号”按钮](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## 使用追溯视图
当进入追溯视图时不会丢失文件上下文，你现在可以使用新的代码视图在追溯视图、原始代码视图和文件预览之间快速切换（取决于文件类型）。

1. 选择存储库，然后单击该存储库中的文件以打开新的代码视图。

  ![“github/docs”存储库的屏幕截图，重点是文件树视图中的选定文件](/assets/images/help/repository/file-tree-view-file-selected.png)

1. 若要查看文件的修订历史记录，请单击“追溯”。 此视图提供逐行修订历史记录，文件中的代码按提交分隔。 每个提交都会列出作者、提交说明和提交日期。

  ![新代码视图的屏幕截图，重点是“追溯”按钮](/assets/images/help/repository/code-view-blame-button.png)

   - 若要在特定提交之前查看文件的版本，请单击 {% octicon "versions" aria-label="The versions icon" %}。

      ![追溯视图中提交的屏幕截图，重点是版本图标](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - 若要查看有关特定提交的详细信息，请单击提交说明。

      ![追溯视图中提交的屏幕截图，重点是提交说明](/assets/images/help/repository/code-view-blame-commit-description.png)

1. 若要返回到原始代码视图，请单击“代码”。

  ![代码视图工具栏的屏幕截图，重点是代码视图按钮](/assets/images/help/repository/code-view-button.png)

   - 如果要查看 Markdown 文件，还可以单击“预览”以返回到应用 Markdown 格式的视图。

      ![代码视图工具栏的屏幕截图，重点是 Markdown 预览按钮](/assets/images/help/repository/code-view-preview-button.png)

## 延伸阅读

- [将文件移至新位置](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)
- [关于 GitHub 代码搜索（beta 版本）](/search-github/github-code-search/about-github-code-search)
