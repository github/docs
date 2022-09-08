---
title: 在 GitHub 上查找文件
intro: '您可以使用文件查找器在仓库中搜索文件。 若要在 {% data variables.product.product_name %} 上搜索多个存储库中的文件，请使用 [`filename` 代码搜索限定符](/search-github/searching-on-github/searching-code#search-by-filename)。'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419847'
---
{% tip %}

**提示：**

- 默认情况下，文件查找器结果将排除某些目录，例如 `build`、`log`、`tmp` 和 `vendor`。 若要搜索这些目录中的文件，请使用 [`filename` 代码搜索限定符](/search-github/searching-on-github/searching-code#search-by-filename)。{% ifversion file-finder-exclusion-controls %}或者，可以[使用 `.gitattributes` 文件](#customizing-excluded-files)自定义默认排除的目录。{% endif %}
- 按键盘上的 `t` 键也可以打开文件查找器。 有关详细信息，请参阅“[键盘快捷方式](/articles/keyboard-shortcuts)”。

{% endtip %}

## 使用文件查找器

{% data reusables.repositories.navigate-to-repo %}
2. 在文件列表上方，单击“转到文件”。
![查找文件按钮](/assets/images/help/search/find-file-button.png)
3. 在搜索字段中，键入要查找文件的名称。
![查找文件搜索字段](/assets/images/help/search/find-file-search-field.png)
4. 在结果列表中 ，单击要查找的文件。

{% ifversion file-finder-exclusion-controls %}

## 自定义排除的文件

默认情况下，如果文件查找器结果存在于存储库根路径中，则结果不会包含以下目录中的文件：

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

可以使用 `.gitattributes` 文件替代这些默认排除项。

为此，请在存储库根路径中创建或更新名为 `.gitattributes` 的文件，将应包含在文件查找器结果中的每个目录的 [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) 属性设置为 `false`。

例如，以下 `.gitattributes` 文件会导致 `build/` 目录中的文件可供文件查找器使用：

```
build/** linguist-generated=false
```

请注意，此替代需要使用递归 glob 模式 (`**`)。 有关详细信息，请参阅 Git 文档中的“[模式格式](https://git-scm.com/docs/gitignore#_pattern_format)”。 不支持对默认排除目录中的子目录进行更复杂的替代。

{% endif %}

## 延伸阅读

- “[关于在 GitHub 中搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”{% ifversion file-finder-exclusion-controls %}
- “[自定义更改的文件在 GitHub 中的显示方式](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)”
- Git 文档中的 [`.gitattributes`](https://git-scm.com/docs/gitattributes){% endif %}
