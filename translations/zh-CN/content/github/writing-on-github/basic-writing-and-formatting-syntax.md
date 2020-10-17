---
title: 基本撰写和格式语法
intro: 使用简单的语法在 GitHub 上为您的散文和代码创建复杂的格式。
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 标题

要创建标题，请在标题文本前添加一至六个 `#` 符号。 您使用的 `#` 数量将决定标题的大小。

```
# 最大标题
## 第二大标题
###### 最小标题
```

![渲染的 H1、H2 和 H6 标题](/assets/images/help/writing/headings-rendered.png)

### 样式文本

您可以使用粗体、斜体或删除线文本来表示强调。

| 样式       | 语法                | 键盘快捷键      | 示例                 | 输出               |
| -------- | ----------------- | ---------- | ------------------ | ---------------- |
| 粗体       | `** **` 或 `__ __` | 命令/控制键 + b | `**这是粗体文本**`       | **这是粗体文本**       |
| 斜体       | `* *` 或 `_ _`     | 命令/控制键 + i | `*这是斜体文本*`         | *这是斜体文本*         |
| 删除线      | `~~ ~~`           |            | `~~这是错误文本~~`       | ~~这是错误文本~~       |
| 粗体和嵌入的斜体 | `** **` 和 `_ _`   |            | `**此文本 _非常_ 重要**`  | **此文本_非常_重要**    |
| 全部粗体和斜体  | `*** ***`         |            | `***所有这些文本都很重要***` | ***所有这些文本都是斜体*** |

### 引用文本

您可以使用 `>` 来引用文本。

```
用 Abraham Lincoln 的话来说：

> 原谅我爆粗口
```

![渲染的引用文本](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**提示：**在查看转换时，您可以突出显示文本，然后输入代码 `r`，以自动引用评论中的文本。 您可以单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 和 **Quote reply（引用回复）**引用整个评论。 有关键盘快捷键的更多信息，请参阅“[键盘快捷键](/articles/keyboard-shortcuts/)”。

{% endtip %}

### 引用代码

使用单反引号可标注句子中的代码或命令。 反引号中的文本不会被格式化。

```
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

### 链接

通过将链接文本包含在方括号 `[ ]` 内，然后将 URL 包含在括号 `( )` 内，可创建内联链接。 还可以使用键盘快捷键`命令键 + k` 来创建链接。

`本站点是使用 [GitHub Pages](https://pages.github.com/) 构建的。`

![渲染的链接](/assets/images/help/writing/link-rendered.png)

{% tip %}

**提示：**当评论中写入了有效 URL 时，{% data variables.product.product_name %} 会自动创建链接。 更多信息请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

{% endtip %}

### 章节链接

{% data reusables.repositories.section-links %}

### 相对链接

{% data reusables.repositories.relative-links %}

### 列表

通过在一行或多行文本前面添加 `-` 或 `*` 可创建无序列表。

```
- George Washington
- John Adams
- Thomas Jefferson
```

![渲染的无序列表](/assets/images/help/writing/unordered-list-rendered.png)

要对列表排序，请在每行前面添加一个编号。

```
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![渲染的有序列表](/assets/images/help/writing/ordered-list-rendered.png)

#### 嵌套列表

通过在一个列表项下面缩进一个或多个其他列表项，可创建嵌套列表。

要通过 {% data variables.product.product_name %} 上的 web 编辑器或使用等宽字体的文本编辑器（例如 [Atom](https://atom.io/)）创建嵌套列表，您可以直观地对齐列表。 在嵌套列表项的前面键入空格字符，直至列表标记字符（`-` 或 `*`）位于其上方条目中第一个文本字符的正下方。

```
1. 第一个列表项
   -  第一个嵌套列表项
     - 第二个嵌套列表项
```

![突出显示对齐的嵌套列表](/assets/images/help/writing/nested-list-alignment.png)

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-1.png)

要在 {% data variables.product.product_name %} 上的评论编辑器中创建嵌套列表（不使用等宽字体），您可以查看嵌套列表正上方的列表项，并计算该条目内容前面的字符数量。 然后在嵌套列表项的前面键入该数量的空格字符。

在此例中，您可以通过缩进嵌套列表项至少五个空格，在列表项 `100. 第一个列表项`的下面添加一个嵌套列表项，因为在`第一个列表项`的前面有五个字符 (`100.`) 。

```
100. 第一个列表项
     - 第一个嵌套列表项
```

![含一个嵌套列表项的列表](/assets/images/help/writing/nested-list-example-3.png)

您可以使用相同的方法创建多层级嵌套列表。 例如，由于在第一个嵌套列表项中，嵌套列表项内容`第一个嵌套列表项`之前有七个空格 (`␣␣␣␣␣-␣`)，因此需要将第二个嵌套列表项缩进七个空格。

```
100. 第一个列表项
     - 第一个嵌套列表项
       - 第二个嵌套列表项
```

![含两级嵌套项的列表](/assets/images/help/writing/nested-list-example-2.png)

更多示例请参阅 [GitHub Flavored Markdown 规范](https://github.github.com/gfm/#example-265)。

### 任务列表

{% data reusables.repositories.task-list-markdown %}

如果任务列表项说明以括号开头，则需要使用 `\` 进行规避：

`- [ ] \(Optional) 打开后续议题`

更多信息请参阅“[关于任务列表](/articles/about-task-lists)”。

### 提及人员和团队

您可以在 {% data variables.product.product_name %} 上提及人员或[团队](/articles/setting-up-teams/)，方法是键入 `@` 加上其用户名或团队名称。 这将触发通知并提请他们注意对话。 如果您在编辑的评论中提及某人的用户名或团队名称，该用户也会收到通知。 For more information about notifications, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[About notifications](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}."

`@github/support 您如何看待这些更新？`

![渲染的 @提及](/assets/images/help/writing/mention-rendered.png)

当您提及父团队时，其子团队的成员也会收到通知，这简化了与多个人员团队的沟通。 更多信息请参阅“[关于团队](/articles/about-teams)”。

键入 `@` 符号将显示项目中的人员或团队列表。 列表会在您键入时进行过滤，因此一旦找到所需人员或团队的名称，您可以使用箭头键选择它，然后按 Tab 或 Enter 键以填写名称。 提及团队时，请输入 @组织/团队名称，该团队的所有成员将收到关注对话的提醒。

自动填写结果仅限于仓库协作者和该线程上的任何其他参与者。

### 引用议题和拉取请求

通过键入 `#` 可显示仓库中建议的议题和拉取请求列表。 键入议题或拉取请求的编号或标题以过滤列表，然后按 Tab 或 Enter 键以填写选中的结果。

更多信息请参阅“[自动链接的引用和 URL](/articles/autolinked-references-and-urls)”。

### 引用外部资源

{% data reusables.repositories.autolink-references %}

### 内容附件

有些 {% data variables.product.prodname_github_app %} 在 {% data variables.product.product_name %} 中提供链接到其注册域名的 URL 信息。 {% data variables.product.product_name %} 可渲染应用程序在正文或者议题或拉取请求的评论中的 URL 下提供的信息。

![内容附件](/assets/images/help/writing/content-attachment.png)

To see content attachments, you must have a {% data variables.product.prodname_github_app %} that uses the Content Attachments API installed on the repository.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Installing an app in your personal account](/articles/installing-an-app-in-your-personal-account)" and "[Installing an app in your organization](/articles/installing-an-app-in-your-organization)."{% endif %}

内容附件不会显示在属于 markdown 链接的 URL 中。

有关构建使用内容附件的 {% data variables.product.prodname_github_app %} 的详细信息，请参阅“[使用内容附件](/apps/using-content-attachments)”。

### 使用表情符号

通过键入 `:EMOJICODE:` 可在您的写作中添加表情符号。

`@octocat :+1: 这个 PR 看起来很棒 - 可以合并了！ :shipit:`

![渲染的表情符号](/assets/images/help/writing/emoji-rendered.png)

键入 `:` 将显示建议的表情符号列表。 列表将在您键入时进行过滤，因此一旦找到所需表情符号，请按 **Tab** 或 **Enter** 键以填写选中的结果。

有关可用表情符号和代码的完整列表，请查看 [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com)。

### 段落

通过在文本行之间留一个空白行，可创建新段落。

### 忽略 Markdown 格式

通过在 Markdown 字符前面输入 `\`，可告诉 {% data variables.product.product_name %} 忽略（或规避）Markdown 格式。

`让我们将 \*our-new-project\* 重命名为 \*our-old-project\*。`

![渲染的规避字符](/assets/images/help/writing/escaped-character-rendered.png)

更多信息请参阅 Daring Fireball 的“[Markdown 语法](https://daringfireball.net/projects/markdown/syntax#backslash)”。

### 延伸阅读

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
- “[关于 GitHub 上的撰写和格式](/articles/about-writing-and-formatting-on-github)”
- "[使用高级格式](/articles/working-with-advanced-formatting)"
- "[熟悉 Markdown](https://guides.github.com/features/mastering-markdown/)"
