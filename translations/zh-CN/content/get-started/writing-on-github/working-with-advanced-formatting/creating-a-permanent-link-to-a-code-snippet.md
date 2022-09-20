---
title: 创建指向代码段的永久链接
intro: 您可以创建指向特定版本的文件或拉取请求中特定代码行或行范围的永久链接。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066774'
---
## 链接到代码

此类永久链接仅在其起源仓库中呈现为代码段。 在其他仓库中，永久链接代码段将呈现为 URL。

![评论中呈现的代码段](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**提示：** 若要为整个文件创建永久链接，请参阅“[获取文件永久链接](/articles/getting-permanent-links-to-files)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 找到要链接的代码：
    - 要链接到文件中的代码，请导航到该文件。
    - 要链接到拉取请求中的代码，请导航到该拉取请求并单击 {% octicon "diff" aria-label="The file diff icon" %}“已更改文件”。 然后浏览到含有要包含在注释中的代码的文件，并单击“查看”。
{% data reusables.repositories.choose-line-or-range %}
4. 在行或行范围的左侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}。 在下拉菜单中，单击“复制永久链接”。
  ![可选择复制所选行的永久链接的 Kebab 菜单](/assets/images/help/repository/copy-permalink-specific-line.png)
5. 导航到要链接到代码段的对话。
6. 将永久链接粘贴到注释中，然后单击“注释”。
  ![粘贴在同一个存储库的注释中的永久链接](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## 链接到 Markdown

您可以通过加载 Markdown 文件而不进行 Markdown 渲染来链接到 Markdown 文件中的特定行。 要在不呈现的情况下加载 Markdown 文件，可以在文件的 URL 末尾使用 `?plain=1` 参数。 例如，`github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`。

您可以在代码中以同样的方式链接到 Markdown 文件中的特定行。 在 URL 末尾的行号处附加 `#L`。 例如，`github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` 将在纯文本 README.md 文件中突出显示第 14 行。

## 延伸阅读

- [创建问题](/articles/creating-an-issue/)
- [从代码打开问题](/articles/opening-an-issue-from-code/)
- [审查拉取请求中的更改](/articles/reviewing-changes-in-pull-requests/)
