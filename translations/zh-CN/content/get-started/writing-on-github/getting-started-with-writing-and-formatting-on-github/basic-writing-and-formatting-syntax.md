---
title: 基本撰写和格式语法
intro: 使用简单的语法在 GitHub 上为您的散文和代码创建复杂的格式。
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: 1d9a57dca3ffc1af8483ad973d2a6426204ce244
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076702'
---
## 标题

要创建标题，请在标题文本前添加一至六个 <kbd>#</kbd> 符号。 你使用的 <kbd>#</kbd> 数量将决定标题的大小。

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![渲染的 H1、H2 和 H6 标题](/assets/images/help/writing/headings-rendered.png)

使用两个或多个标题时，GitHub 会自动生成一个目录，可以通过单击文件标题中的 {% octicon "list-unordered" aria-label="The unordered list icon" %} 来访问该目录。 每个标题都列在目录中，可以单击某个标题导航到所选部分。 

![突出显示目录图标的屏幕截图](/assets/images/help/repository/headings_toc.png)

## 文本样式

可以在评论字段和 `.md` 文件中以粗体、斜体、删除线、下标或上标文本表示强调。  

| Style | 语法 | 键盘快捷键 | 示例 | 输出 |
| --- | --- | --- | --- | --- |
| 加粗 | `** **` 或 `__ __`| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **这是粗体文本** |
| 斜体 | `* *` 或 `_ _`     | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *这是斜体文本* |
| 删除线 | `~~ ~~` | | `~~This was mistaken text~~` | ~~这是错误文本~~ |
| 粗体和嵌入的斜体 | `** **` 和 `_ _` | | `**This text is _extremely_ important**` | **此文本 _非常_ 重要** |
| 全部粗体和斜体 | `*** **_` | | `_*_All this text is important_*_` | _ *_所有这些文本都很重要_** |
| 下标 | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | 这是下标文本<sub></sub> |
| 上标 | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | 这是上标文本<sup></sup> |

## 引用文本

可以使用 <kbd>></kbd> 来引用文本。

```markdown
Text that is not a quote

> Text that is a quote
```

![渲染的引用文本](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

提示：查看对话时，可以通过突出显示文本然后键入 <kbd>R</kbd> 来自动引用评论中的文本。你可以通过单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 然后单击“引用回复”来引用整条评论。 有关键盘快捷方式的详细信息，请参阅“[键盘快捷方式](/articles/keyboard-shortcuts/)”。

{% endtip %}

## 引用代码

使用单反引号可标注句子中的代码或命令。 反引号中的文本不会被格式化。 你也可以按 <kbd>Command</kbd>+<kbd>E</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) 键盘快捷方式将代码块的反引号插入到 Markdown 一行中。

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![渲染的内联代码块](/assets/images/help/writing/inline-code-rendered.png)

要将代码或文本格式化为各自的不同块，请使用三反引号。

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![渲染的代码块](/assets/images/help/writing/code-block-rendered.png)

有关详细信息，请参阅“[创建和突出显示代码块](/articles/creating-and-highlighting-code-blocks)”。

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 支持的颜色模型

在问题、拉取请求和讨论中，可以使用反引号在句子中标注颜色。 反引号内支持的颜色模型将显示颜色的可视化效果。

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![呈现支持的颜色模型。](/assets/images/help/writing/supported-color-models-rendered.png)

下面是当前支持的颜色模型。

| Color | 语法 | 示例 | 输出 |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![以 HEX 格式呈现支持的颜色模型。](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![以 RGB 格式呈现支持的颜色模型。](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![以 HSL 格式呈现支持的颜色模型。](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**注意：**

- 支持的颜色模型在反引号内不能有任何前导或尾随空格。
- 颜色的可视化效果仅在问题、拉取请求和讨论中受支持。

{% endnote %}

## 链接

通过将链接文本用方括号 `[ ]` 括起来，然后将 URL 用括号 `( )` 括起来，可创建内联链接。 你还可以使用键盘快捷方式 <kbd>Command</kbd>+<kbd>K</kbd> 来创建链接。{% ifversion fpt or ghae-issue-5434 or ghes > 3.3 or ghec %}选择文本后，可以粘贴剪贴板中的 URL 以自动从所选内容创建链接。{% endif %}

{% ifversion fpt or ghae-issue-7103 or ghes > 3.5 or ghec %}你还可以通过突出显示文本并使用键盘快捷方式 <kbd>Command</kbd>+<kbd>V</kbd> 来创建 Markdown 超链接。 如果要将文本替换为链接，请使用键盘快捷方式 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>。{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![渲染的链接](/assets/images/help/writing/link-rendered.png)

{% tip %}

提示：当评论中写入了有效 URL 时，{% data variables.product.product_name %} 会自动创建链接。 有关详细信息，请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

{% endtip %}

## 章节链接

{% data reusables.repositories.section-links %}

## relative links (相对链接)

{% data reusables.repositories.relative-links %}

## 图像

通过添加 <kbd>!</kbd> 并 将 alt 文本用 `[ ]` 括起来，可显示图像。 然后将图像的链接用括号 `()` 括起来。

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![渲染的图像](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} 支持将图像嵌入到议题、拉取请求{% ifversion fpt or ghec %}、讨论{% endif %}、评论和 `.md` 文件中。 您可以从仓库显示图像、添加在线图像链接或上传图像。 有关详细信息，请参阅“[上传资产](#uploading-assets)”。

{% tip %}

提示：想要显示存储库中的图像时，应该使用相对链接而不是绝对链接。

{% endtip %}

下面是一些使用相对链接显示图像的示例。

| 上下文 | 相对链接 |
| ------ | -------- |
| 在同一分支的 `.md` 文件中 | `/assets/images/electrocat.png` |
| 在另一个分支的 `.md` 文件中 | `/../main/assets/images/electrocat.png` |
| 在仓库的议题、拉取请求和评论中 | `../blob/main/assets/images/electrocat.png?raw=true` |
| 在另一个存储库的 `.md` 文件中 | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| 在另一个仓库的议题、拉取请求和评论中 | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

注意：上表中的最后两个相对链接只有在查看者至少对包含这些图像的专用存储库具有读取访问权限时，才可用于专用存储库中的图像。

{% endnote %}

有关详细信息，请参阅“[相对链接](#relative-links)”。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5559 %}
### 指定图像显示的主题

你可以通过结合使用 HTML `<picture>` 元素和 `prefers-color-scheme` 媒体功能来指定在 Markdown 中显示图像的主题。 我们区分浅色和深色模式，因此有两个选项可用。 可以使用这些选项来显示针对深色或浅色背景进行了优化的图像。 这对于透明的 PNG 图像特别有用。

例如，以下代码显示浅色主题的太阳图像和深色主题的月亮：

```HTML
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>
```

通过使用附加到 URL（`#gh-dark-mode-only` 或 `#gh-light-mode-only`）的片段来基于主题指定图像的旧方法已被弃用并将被删除，以支持上述新方法。
{% endif %}

## 列表

可以通过在一行或多行文本前面加上 <kbd>-</kbd> 或 <kbd>*</kbd> 来创建一个无序列表。

```markdown
- George Washington
- John Adams
- Thomas Jefferson
```

![渲染的无序列表](/assets/images/help/writing/unordered-list-rendered.png)

要对列表排序，请在每行前面添加一个编号。

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![渲染的有序列表](/assets/images/help/writing/ordered-list-rendered.png)

### 嵌套列表

通过在一个列表项下面缩进一个或多个其他列表项，可创建嵌套列表。

要通过 {% data variables.product.product_name %} 上的 Web 编辑器或使用等宽字体的文本编辑器（例如 [Atom](https://atom.io/)）创建嵌套列表，可以直观地对齐列表。 在嵌套列表项的前面键入空格字符，直至列表标记字符（<kbd>-</kbd> 或 <kbd>*</kbd>）位于其上方条目中第一个文本字符的正下方。

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

注意：在基于 Web 的编辑器中，可以先突出显示所需的行，然后分别使用 <kbd>Tab</kbd> 或 <kbd>Shift</kbd>+<kbd>Tab</kbd> 来缩进或取消缩进一行或多行文本。

{% endtip %}

![突出显示对齐的嵌套列表](/assets/images/help/writing/nested-list-alignment.png)

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-1.png)

要在 {% data variables.product.product_name %} 上的评论编辑器中创建嵌套列表（不使用等宽字体），您可以查看嵌套列表正上方的列表项，并计算该条目内容前面的字符数量。 然后在嵌套列表项的前面键入该数量的空格字符。

在本例中，可以通过将嵌套列表项缩进至少五个空格来在列表项 `100. First list item` 下添加一个嵌套列表项，因为在 `First list item` 前面有五个字符 (`100. `)。

```markdown
100. First list item
     - First nested list item
```

![含一个嵌套列表项的列表](/assets/images/help/writing/nested-list-example-3.png)   

您可以使用相同的方法创建多层级嵌套列表。 例如，由于在第一个嵌套列表项中，嵌套列表项内容 `First nested list item` 之前有七个字符 (`␣␣␣␣␣-␣`)，因此需要将第二个嵌套列表项缩进七个空格。

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-2.png)    

有关更多示例，请参阅 [GitHub 式 Markdown 规范](https://github.github.com/gfm/#example-265)。

## 任务列表

{% data reusables.repositories.task-list-markdown %}

如果任务列表项说明以括号开头，则需要使用 <kbd>\\</kbd> 进行转义：

`- [ ] \(Optional) Open a followup issue`

有关详细信息，请参阅“[关于任务列表](/articles/about-task-lists)”。

## 提及人员和团队

可以在 {% data variables.product.product_name %} 上提及人员或[团队](/articles/setting-up-teams/)，方法是键入 <kbd>@</kbd> 加上其用户名或团队名称。 这将触发通知并提请他们注意对话。 如果您在编辑的评论中提及某人的用户名或团队名称，该用户也会收到通知。 有关通知的详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”。

{% note %}

注意：仅当该人员具有对存储库的读取访问权限，该存储库为组织所拥有，且此人是组织成员时，才会收到有关提及的通知。

{% endnote %}

`@github/support What do you think about these updates?`

![呈现的 @mention](/assets/images/help/writing/mention-rendered.png)

当您提及父团队时，其子团队的成员也会收到通知，这简化了与多个人员团队的沟通。 有关详细信息，请参阅“[关于团队](/articles/about-teams)”。

键入 <kbd>@</kbd> 符号将显示项目中的人员或团队列表。 列表会在您键入时进行过滤，因此一旦找到所需人员或团队的名称，您可以使用箭头键选择它，然后按 Tab 或 Enter 键以填写名称。 对于团队，输入 @organization/team-name，该团队的所有成员都将订阅对话。

自动填写结果仅限于仓库协作者和该线程上的任何其他参与者。

## 引用议题和拉取请求

可以通过键入 <kbd>#</kbd> 在存储库中调出建议的议题和拉取请求的列表。 键入议题或拉取请求的编号或标题以过滤列表，然后按 Tab 或 Enter 键以填写选中的结果。

有关详细信息，请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

## 引用外部资源

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## 内容附件

有些 {% data variables.product.prodname_github_apps %} 在 {% data variables.product.product_name %} 中提供链接到其注册域名的 URL 信息。 {% data variables.product.product_name %} 可渲染应用程序在正文或者议题或拉取请求的评论中的 URL 下提供的信息。

![内容附件](/assets/images/github-apps/content_reference_attachment.png)

若要查看内容附件，必须拥有使用存储库中安装的内容附件 API 的 {% data variables.product.prodname_github_app %}。{% ifversion fpt or ghec %} 有关详细信息，请参阅“[在个人帐户中安装应用](/articles/installing-an-app-in-your-personal-account)”和“[在组织中安装应用](/articles/installing-an-app-in-your-organization)”。{% endif %}

内容附件不会显示在属于 markdown 链接的 URL 中。

有关构建使用内容附件的 {% data variables.product.prodname_github_app %} 的详细信息，请参阅“[使用内容附件](/apps/using-content-attachments)”。{% endif %}

## 上传资产

您可以通过拖放、从文件浏览器中选择或粘贴来上传图像等资产。 可以将资产上传到议题、拉取请求、评论和存储库中的 `.md` 文件。

## 使用表情符号

通过键入 `:EMOJICODE:` 可在写作中添加表情符号。

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![渲染的表情符号](/assets/images/help/writing/emoji-rendered.png)

键入 <kbd>:</kbd> 将显示建议的表情符号列表。 列表将在你键入时进行筛选，因此一旦找到所需表情符号，请按 Tab 或 Enter 键以填写突出显示的结果 。

有关可用表情符号和代码的完整列表，请查看 [Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)。

## 段落

通过在文本行之间留一个空白行，可创建新段落。

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
## 脚注

您可以使用此括号语法为您的内容添加脚注：

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

脚注将呈现如下：

![渲染的脚注](/assets/images/site/rendered-footnote.png)

{% tip %}

注意：Markdown 中脚注的位置不会影响该脚注的呈现位置。 您可以在引用脚注后立即写脚注，脚注仍将呈现在 Markdown 的底部。

Wiki 不支持脚注。

{% endtip %} {% endif %}

## 隐藏有评论的内容

您可以通过在 HTML 评论中加入内容来指示 {% data variables.product.product_name %} 隐藏渲染的 Markdown 中的内容。

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## 忽略 Markdown 格式

通过在 Markdown 字符前面输入 <kbd>\\</kbd>，可指示 {% data variables.product.product_name %} 忽略 Markdown 格式（或对其进行转义）。

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![渲染的规避字符](/assets/images/help/writing/escaped-character-rendered.png)

有关详细信息，请参阅 Daring Fireball 的“[Markdown 语法](https://daringfireball.net/projects/markdown/syntax#backslash)”。

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

## 禁用 Markdown 渲染

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 式 Markdown 规范](https://github.github.com/gfm/)
- “[关于在 GitHub 上编写和设置格式](/articles/about-writing-and-formatting-on-github)”
- “[使用高级格式设置](/articles/working-with-advanced-formatting)”
- “[熟练使用 Markdown](https://guides.github.com/features/mastering-markdown/)”
