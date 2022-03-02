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
shortTitle: 基本格式语法
---

## 标题

要创建标题，请在标题文本前添加一至六个 <kbd>#</kbd> 符号。 您使用的 <kbd>#</kbd> 数量将决定标题的大小。

```markdown
# 最大标题
## 第二大标题
###### 最小标题
```

![渲染的 H1、H2 和 H6 标题](/assets/images/help/writing/headings-rendered.png)

When you use two or more headings, GitHub automatically generates a table of contents which you can access by clicking {% octicon "list-unordered" aria-label="The unordered list icon" %} within the file header. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section.

![Screenshot highlighting the table of contents icon](/assets/images/help/repository/headings_toc.png)


## 样式文本

您可以在评论字段和 `.md` 文件中以粗体、斜体或删除线的文字表示强调。

| 样式       | 语法                 | 键盘快捷键                                                                                 | 示例                 | 输出               |
| -------- | ------------------ | ------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| 粗体       | `** **` 或 `__ __`  | <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**这是粗体文本**`       | **这是粗体文本**       |
| 斜体       | `* *` 或 `_ _`      | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*这是斜体文本*`         | *这是斜体文本*         |
| 删除线      | `~~ ~~`            |                                                                                       | `~~这是错误文本~~`       | ~~这是错误文本~~       |
| 粗体和嵌入的斜体 | `** **` 和 `_ _`    |                                                                                       | `**此文本 _非常_ 重要**`  | **此文本_非常_重要**    |
| 全部粗体和斜体  | `*** ***`          |                                                                                       | `***所有这些文本都很重要***` | ***所有这些文本都是斜体*** |

## 引用文本

You can quote text with a <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![渲染的引用文本](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Tip:** When viewing a conversation, you can automatically quote text in a comment by highlighting the text, then typing <kbd>R</kbd>. 您可以单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 和 **Quote reply（引用回复）**引用整个评论。 有关键盘快捷键的更多信息，请参阅“[键盘快捷键](/articles/keyboard-shortcuts/)”。

{% endtip %}

## 引用代码

使用单反引号可标注句子中的代码或命令。 The text within the backticks will not be formatted.{% ifversion fpt or ghae or ghes > 3.1 or ghec %} You can also press the <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.{% endif %}

```markdown
使用 `git status` 列出尚未提交的所有新文件或已修改文件。
```

![渲染的内联代码块](/assets/images/help/writing/inline-code-rendered.png)

要将代码或文本格式化为各自的不同块，请使用三反引号。

<pre>
一些基本的 Git 命令为：
```
git status
git add
git commit
```
</pre>

![渲染的代码块](/assets/images/help/writing/code-block-rendered.png)

更多信息请参阅“[创建和突出显示代码块](/articles/creating-and-highlighting-code-blocks)”。

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 链接

通过将链接文本包含在方括号 `[ ]` 内，然后将 URL 包含在括号 `( )` 内，可创建内联链接。 {% ifversion fpt or ghae or ghes > 3.1 or ghec %}You can also use the keyboard shortcut <kbd>Command</kbd>+<kbd>K</kbd> to create a link.{% endif %}{% ifversion fpt or ghae-issue-5434 or ghes > 3.3 or ghec %} When you have text selected, you can paste a URL from your clipboard to automatically create a link from the selection.{% endif %}

`本站点是使用 [GitHub Pages](https://pages.github.com/) 构建的。`

![渲染的链接](/assets/images/help/writing/link-rendered.png)

{% tip %}

**提示：**当评论中写入了有效 URL 时，{% data variables.product.product_name %} 会自动创建链接。 更多信息请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

{% endtip %}

## 章节链接

{% data reusables.repositories.section-links %}

## 相对链接

{% data reusables.repositories.relative-links %}

## 图像

You can display an image by adding <kbd>!</kbd> and wrapping the alt text in `[ ]`. 然后将图像链接包装在括号 `()` 中。

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![渲染的图像](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} 支持将图像嵌入到您的议题、拉取请求{% ifversion fpt or ghec %}、讨论{% endif %}、评论和 `.md` 文件中。 您可以从仓库显示图像、添加在线图像链接或上传图像。 更多信息请参阅“[上传资产](#uploading-assets)”。

{% tip %}

**提示：**想要显示仓库中的图像时，应该使用相对链接而不是绝对链接。

{% endtip %}

下面是一些使用相对链接显示图像的示例。

| 上下文                | 相对链接                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| 在同一个分支上的 `.md` 文件中 | `/assets/images/electrocat.png`                                        |
| 在另一个分支的 `.md` 文件中  | `/../main/assets/images/electrocat.png`                                |
| 在仓库的议题、拉取请求和评论中    | `../blob/main/assets/images/electrocat.png`                            |
| 在另一个仓库的 `.md` 文件中  | `/../../../../github/docs/blob/main/assets/images/electrocat.png`      |
| 在另一个仓库的议题、拉取请求和评论中 | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**注意**：上表中的最后两个相对链接只有在查看者至少能够读取包含这些图像的私有仓库时，才可用于私有仓库中的图像。

{% endnote %}

更多信息请参阅“[相对链接](#relative-links)”。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5559 %}
### Specifying the theme an image is shown to

You can specify the theme an image is displayed to by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL, in Markdown.

We distinguish between light and dark color modes, so there are two options available. You can use these options to display images optimized for dark or light backgrounds. This is particularly helpful for transparent PNG images.

| 上下文         | URL                                                                      |
| ----------- | ------------------------------------------------------------------------ |
| Dark Theme  | `![GitHub Light](https://github.com/github-light.png#gh-dark-mode-only)` |
| Light Theme | `![GitHub Dark](https://github.com/github-dark.png#gh-light-mode-only)`  |
{% endif %}

## 列表

通过在一行或多行文本前面添加 <kbd>-</kbd> 或 <kbd>*</kbd> 可创建无序列表。

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

要通过 {% data variables.product.product_name %} 上的 web 编辑器或使用等宽字体的文本编辑器（例如 [Atom](https://atom.io/)）创建嵌套列表，您可以直观地对齐列表。 在嵌套列表项的前面键入空格字符，直至列表标记字符（<kbd>-</kbd> 或 <kbd>*</kbd>）位于其上方条目中第一个文本字符的正下方。

```markdown
1. 第一个列表项
   -  第一个嵌套列表项
     - 第二个嵌套列表项
```

![突出显示对齐的嵌套列表](/assets/images/help/writing/nested-list-alignment.png)

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-1.png)

要在 {% data variables.product.product_name %} 上的评论编辑器中创建嵌套列表（不使用等宽字体），您可以查看嵌套列表正上方的列表项，并计算该条目内容前面的字符数量。 然后在嵌套列表项的前面键入该数量的空格字符。

在此例中，您可以通过缩进嵌套列表项至少五个空格，在列表项 `100. 第一个列表项`的下面添加一个嵌套列表项，因为在`第一个列表项`的前面有五个字符 (`100.`) 。

```markdown
100. 第一个列表项
     - 第一个嵌套列表项
```

![含一个嵌套列表项的列表](/assets/images/help/writing/nested-list-example-3.png)

您可以使用相同的方法创建多层级嵌套列表。 例如，由于在第一个嵌套列表项中，嵌套列表项内容`第一个嵌套列表项`之前有七个字符 (`␣␣␣␣␣-␣`)，因此需要将第二个嵌套列表项缩进七个空格。

```markdown
100. 第一个列表项
     - 第一个嵌套列表项
       - 第二个嵌套列表项
```

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-2.png)

更多示例请参阅 [GitHub Flavored Markdown 规范](https://github.github.com/gfm/#example-265)。

## 任务列表

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with <kbd>\\</kbd>:

`- [ ] \(Optional) 打开后续议题`

更多信息请参阅“[关于任务列表](/articles/about-task-lists)”。

## 提及人员和团队

您可以在 {% data variables.product.product_name %} 上提及人员或[团队](/articles/setting-up-teams/)，方法是键入 <kbd>@</kbd> 加上其用户名或团队名称。 这将触发通知并提请他们注意对话。 如果您在编辑的评论中提及某人的用户名或团队名称，该用户也会收到通知。 有关通知的更多信息，请参阅{% ifversion fpt or ghes or ghae or ghec %}"[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}“[关于通知](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}”。

`@github/support 您如何看待这些更新？`

![渲染的 @提及](/assets/images/help/writing/mention-rendered.png)

当您提及父团队时，其子团队的成员也会收到通知，这简化了与多个人员团队的沟通。 更多信息请参阅“[关于团队](/articles/about-teams)”。

键入 <kbd>@</kbd> 符号将显示项目中的人员或团队列表。 列表会在您键入时进行过滤，因此一旦找到所需人员或团队的名称，您可以使用箭头键选择它，然后按 Tab 或 Enter 键以填写名称。 提及团队时，请输入 @组织/团队名称，该团队的所有成员将收到关注对话的提醒。

自动填写结果仅限于仓库协作者和该线程上的任何其他参与者。

## 引用议题和拉取请求

通过键入 <kbd>#</kbd> 可显示仓库中建议的议题和拉取请求列表。 键入议题或拉取请求的编号或标题以过滤列表，然后按 Tab 或 Enter 键以填写选中的结果。

更多信息请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

## 引用外部资源

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## 内容附件

有些 {% data variables.product.prodname_github_apps %} 在 {% data variables.product.product_name %} 中提供链接到其注册域名的 URL 信息。 {% data variables.product.product_name %} 可渲染应用程序在正文或者议题或拉取请求的评论中的 URL 下提供的信息。

![内容附件](/assets/images/github-apps/content_reference_attachment.png)

要查看内容附件，您必须拥有使用仓库中安装的内容附件 API 的 {% data variables.product.prodname_github_app %}。{% ifversion fpt or ghec %} 更多信息请参阅“[在个人帐户中安装应用程序](/articles/installing-an-app-in-your-personal-account)”和“[在组织中安装应用程序](/articles/installing-an-app-in-your-organization)”。{% endif %}

内容附件不会显示在属于 markdown 链接的 URL 中。

For more information about building a {% data variables.product.prodname_github_app %} that uses content attachments, see "[Using Content Attachments](/apps/using-content-attachments)."{% endif %}

## 上传资产

您可以通过拖放、从文件浏览器中选择或粘贴来上传图像等资产。 您可以将资产上传到议题、拉取请求、评论和仓库中的 `.md` 文件。

## 使用表情符号

通过键入 `:EMOJICODE:` 可在您的写作中添加表情符号。

`@octocat :+1: 这个 PR 看起来很棒 - 可以合并了！ :shipit:`

![渲染的表情符号](/assets/images/help/writing/emoji-rendered.png)

键入 <kbd>:</kbd> 将显示建议的表情符号列表。 列表将在您键入时进行过滤，因此一旦找到所需表情符号，请按 **Tab** 或 **Enter** 键以填写选中的结果。

有关可用表情符号和代码的完整列表，请查看[表情符号备忘清单](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)。

## 段落

通过在文本行之间留一个空白行，可创建新段落。

{% ifversion fpt or ghae-issue-5180 or ghes > 3.2 or ghec %}
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

**注意**：Markdown 中脚注的位置不会影响该脚注的呈现位置。 您可以在引用脚注后立即写脚注，脚注仍将呈现在 Markdown 的底部。

{% endtip %}
{% endif %}

## 隐藏有评论的内容

您可以通过在 HTML 评论中加入内容来指示 {% data variables.product.product_name %} 隐藏渲染的 Markdown 中的内容。

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## 忽略 Markdown 格式

You can tell {% data variables.product.product_name %} to ignore (or escape) Markdown formatting by using <kbd>\\</kbd> before the Markdown character.

`让我们将 \*our-new-project\* 重命名为 \*our-old-project\*。`

![渲染的规避字符](/assets/images/help/writing/escaped-character-rendered.png)

更多信息请参阅 Daring Fireball 的“[Markdown 语法](https://daringfireball.net/projects/markdown/syntax#backslash)”。

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

## 禁用 Markdown 渲染

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
- “[关于 GitHub 上的撰写和格式](/articles/about-writing-and-formatting-on-github)”
- "[使用高级格式](/articles/working-with-advanced-formatting)"
- "[熟悉 Markdown](https://guides.github.com/features/mastering-markdown/)"
