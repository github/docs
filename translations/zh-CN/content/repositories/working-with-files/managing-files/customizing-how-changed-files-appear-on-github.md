---
title: 自定义更改的文件在 GitHub 中如何显示
intro: 要确保某些文件默认显示差异，或者计入存储库语言，可以使用 .gitattributes 文件中的 `linguist-generated` 属性来标记它们。
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129267'
---
使用“.gitattributes”文件来通过指定的属性标记与给定“模式”匹配的文件。 “.gitattributes”文件使用与“.gitignore”文件匹配的同一规则。 有关详细信息，请参阅 Git 文档中的 [PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format)。

1. 除非“.gitattributes”文件已存在，否则请在存储库的根目录中创建一个“.gitattributes”文件 。
2. 使用 `linguist-generated` 属性标记或取消标记要根据存储库的语言统计数据而忽略或默认隐藏差异的路径。

  例如，若要将 `search/index.json` 标记为生成的文件，请将此行添加到“.gitattributes”：

  ```
search/index.json linguist-generated=true
  ```

## 延伸阅读
- Linguist 文档中的“[生成的代码](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code)”
- [新建文件](/articles/creating-new-files/)
