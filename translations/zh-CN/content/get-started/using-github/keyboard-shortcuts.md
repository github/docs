---
title: 键盘快捷键
intro: '几乎 {% data variables.product.prodname_dotcom %} 上的每一页都有键盘快捷键，可以更快地执行操作。'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 关于键盘快捷键

Typing <kbd>?</kbd> on {% data variables.product.prodname_dotcom %} brings up a dialog box that lists the keyboard shortcuts available for that page. 您可以使用这些键盘快捷键对站点执行操作，而无需使用鼠标导航。

{% if keyboard-shortcut-accessibility-setting %}
You can disable character key shortcuts, while still allowing shortcuts that use modifier keys, in your accessibility settings. For more information, see "[Managing accessibility settings](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings)."{% endif %}

下面是一些可用键盘快捷键的列表。
{% if command-palette %}
The {% data variables.product.prodname_command_palette %} also gives you quick access to a wide range of actions, without the need to remember keyboard shortcuts. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## 站点快捷键

| 键盘快捷键                       | 描述                                                                                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>S</kbd> 或 <kbd>/</kbd> | 聚焦于搜索栏。 更多信息请参阅“[关于在 {% data variables.product.company_short %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。                                                                                                     |
| <kbd>G</kbd> <kbd>N</kbd>   | 转到您的通知。 更多信息请参阅{% ifversion fpt or ghes or ghae or ghec %}"[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}“[关于通知](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}”。 |
| <kbd>Esc</kbd>              | 当聚焦于用户、议题或拉取请求悬停卡时，关闭悬停卡并重新聚焦于悬停卡所在的元素                                                                                                                                                                                                                        |

{% if command-palette %}

<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## 仓库

| 键盘快捷键                     | 描述                                                                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>G</kbd> <kbd>C</kbd> | 转到 **Code（代码）**选项卡                                                                                                                                                                                                                          |
| <kbd>G</kbd> <kbd>I</kbd> | 转到 **Issues（议题）**选项卡。 更多信息请参阅“[关于议题](/articles/about-issues)”。                                                                                                                                                                              |
| <kbd>G</kbd> <kbd>P</kbd> | 转到 **Pull requests（拉取请求）**选项卡。 For more information, see "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."{% ifversion fpt or ghes or ghec %}
| <kbd>G</kbd> <kbd>A</kbd> | 转到 **Actions（操作）**选项卡。 更多信息请参阅“[关于 Actions](/actions/getting-started-with-github-actions/about-github-actions)”。{% endif %}
| <kbd>G</kbd> <kbd>B</kbd> | 转到 **Projects（项目）**选项卡。 更多信息请参阅“[关于项目板](/articles/about-project-boards)”。                                                                                                                                                                   |
| <kbd>G</kbd> <kbd>W</kbd> | 转到 **Wiki** 选项卡。 更多信息请参阅“[关于 wiki](/communities/documenting-your-project-with-wikis/about-wikis)”。{% ifversion fpt or ghec %}
| <kbd>G</kbd> <kbd>G</kbd> | 转到 **Discussions（讨论）**选项卡。 更多信息请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。{% endif %}

## 源代码编辑

| 键盘快捷键                                                                                                                                           | 描述                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| <kbd>.</kbd>                                                                                                                                    | Opens a repository or pull request in the web-based editor. For more information, see "[Web-based editor](/codespaces/developing-in-codespaces/web-based-editor)."{% endif %}
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                                     | 插入 Markdown 格式用于粗体文本                                                                                                                                                          |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                                     | 插入 Markdown 格式用于斜体文本                                                                                                                                                          |
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                     | Inserts Markdown formatting for creating a link{% ifversion fpt or ghec or ghae or ghes > 3.3 %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux)                   | Inserts Markdown formatting for an ordered list                                                                                                                               |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux)                   | Inserts Markdown formatting for an unordered list                                                                                                                             |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux)                   | Inserts Markdown formatting for a quote{% endif %}
| <kbd>E</kbd>                                                                                                                                    | 在 **Edit file（编辑文件）**选项卡中打开源代码文件                                                                                                                                              |
| <kbd>Command</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux)                                                     | 开始在文件编辑器中搜索                                                                                                                                                                   |
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                                     | 查找下一个                                                                                                                                                                         |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux)                   | 查找上一个                                                                                                                                                                         |
| <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux)                  | 替换                                                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | 全部替换                                                                                                                                                                          |
| <kbd>Alt</kbd>+<kbd>G</kbd>                                                                                                                     | 跳至行                                                                                                                                                                           |
| <kbd>Command</kbd>+<kbd>Z</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux)                                                     | 撤消                                                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>Y</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux)                                                     | 重做                                                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>                                                                                                | 在 **Edit file（编辑文件）** 与 **Preview changes（预览更改）**选项卡之间切换                                                                                                                      |
| <kbd>Command</kbd>+<kbd>S</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux)                                                     | 填写提交消息                                                                                                                                                                        |

有关更多键盘快捷键，请参阅 [CodeMirror 文档](https://codemirror.net/doc/manual.html#commands)。

## 源代码浏览

| 键盘快捷键        | 描述                                                                                      |
| ------------ | --------------------------------------------------------------------------------------- |
| <kbd>T</kbd> | 激活文件查找器                                                                                 |
| <kbd>L</kbd> | 跳至代码中的某一行                                                                               |
| <kbd>W</kbd> | 切换到新分支或标记                                                                               |
| <kbd>Y</kbd> | 将 URL 展开为其规范形式。 更多信息请参阅“[获取文件的永久链接](/articles/getting-permanent-links-to-files)”。       |
| <kbd>I</kbd> | 显示或隐藏有关差异的评论。 更多信息请参阅“[评论拉取请求的差异](/articles/commenting-on-the-diff-of-a-pull-request)”。 |
| <kbd>A</kbd> | 在差异上显示或隐藏注释                                                                             |
| <kbd>B</kbd> | 打开追溯视图。 更多信息请参阅“[跟踪文件中的更改](/articles/tracing-changes-in-a-file)”。                       |

## 评论

| 键盘快捷键                                                                                                                         | 描述                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                   | 插入 Markdown 格式用于粗体文本                                                                                                                                                         |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                   | 插入斜体文本的 Markdown 格式{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
| <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux)                                   | 在行内插入代码或命令的 Markdown 格式{% endif %}
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                   | 插入 Markdown 格式用于创建链接                                                                                                                                                         |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Toggles between the **Write** and **Preview** comment tabs{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Windows/Linux) | Pastes HTML link as plain text{% endif %}{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | Inserts Markdown formatting for an ordered list                                                                                                                              |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | Inserts Markdown formatting for an unordered list{% endif %}
| <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux)                           | 提交评论                                                                                                                                                                         |
| <kbd>Ctrl</kbd>+<kbd>.</kbd> and then <kbd>Ctrl</kbd>+<kbd>[saved reply number]</kbd>                                         | 打开已保存回复菜单，然后使用已保存回复自动填写评论字段。 更多信息请参阅“[关于已保存回复](/articles/about-saved-replies)”。{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | Inserts Markdown formatting for a quote{% endif %}{% ifversion fpt or ghec %}
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                   | 插入建议。 更多信息请参阅“[审查拉取请求中提议的更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。 
{% endif %}
| <kbd>R</kbd>                                                                                                                  | 在您的回复中引用所选的文本。 更多信息请参阅“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax#quoting-text)”。                                                                             |


## 议题和拉取请求列表

| 键盘快捷键                                                                                       | 描述                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                                                                | 创建议题                                                                                                                                                                                        |
| <kbd>Command</kbd>+<kbd>/</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | 将光标聚焦于议题或拉取请求搜索栏。 For more information, see "[Filtering and searching issues and pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."| |
| <kbd>U</kbd>                                                                                | 按作者过滤                                                                                                                                                                                       |
| <kbd>L</kbd>                                                                                | 按标签过滤或编辑标签。 更多信息请参阅“[按标签过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)”。                                                                                                |
| <kbd>Alt</kbd> 并单击                                                                          | 按标签过滤时，排除标签。 更多信息请参阅“[按标签过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)”。                                                                                               |
| <kbd>M</kbd>                                                                                | 按里程碑过滤或编辑里程碑。 更多信息请参阅“[按里程碑过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-milestone)”。                                                                                          |
| <kbd>A</kbd>                                                                                | 按受理人过滤或编辑受理人。 更多信息请参阅“[按受理人过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-assignees)”。                                                                                          |
| <kbd>O</kbd> or <kbd>Enter</kbd>                                                            | 打开议题                                                                                                                                                                                        |

## 议题和拉取请求
| 键盘快捷键                                                                                                                         | 描述                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Q</kbd>                                                                                                                  | 请求审查者。 更多信息请参阅“[申请拉取请求审查](/articles/requesting-a-pull-request-review/)”。                                                                                                                                                                                                                                                                                                            |
| <kbd>M</kbd>                                                                                                                  | 设置里程碑。 更多信息请参阅“[将里程碑与议题及拉取请求关联](/articles/associating-milestones-with-issues-and-pull-requests/)”。                                                                                                                                                                                                                                                                                  |
| <kbd>L</kbd>                                                                                                                  | 应用标签。 更多信息请参阅“[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests/)”。                                                                                                                                                                                                                                                                                              |
| <kbd>A</kbd>                                                                                                                  | 设置受理人。 更多信息请参阅“[分配议题和拉取请求到其他 {% data variables.product.company_short %} 用户](/articles/assigning-issues-and-pull-requests-to-other-github-users/)”。                                                                                                                                                                                                                                  |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | 在 **Write（撰写）**和 **Preview（预览）**选项卡之间切换{% ifversion fpt or ghec %}
| <kbd>Alt</kbd> 并单击                                                                                                            | When creating an issue from a task list, open the new issue form in the current tab by holding <kbd>Alt</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。                                                   |
| <kbd>Shift</kbd> 并点击                                                                                                          | When creating an issue from a task list, open the new issue form in a new tab by holding <kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。                                                       |
| <kbd>Command</kbd> and click (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click (Windows/Linux)                        | When creating an issue from a task list, open the new issue form in the new window by holding <kbd>Command</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. 更多信息请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。{% endif %}

## 拉取请求中的更改

| 键盘快捷键                                                | 描述                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                         | 在拉取请求中打开提交列表                                                                                                                                                                                                                                                                                |
| <kbd>T</kbd>                                         | 在拉取请求中打开已更改文件列表                                                                                                                                                                                                                                                                             |
| <kbd>J</kbd>                                         | 将所选内容在列表中向下移动                                                                                                                                                                                                                                                                               |
| <kbd>K</kbd>                                         | 将所选内容在列表中向上移动                                                                                                                                                                                                                                                                               |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> | 添加一条有关拉取请求差异的评论                                                                                                                                                                                                                                                                             |
| <kbd>Alt</kbd> 并单击                                   | Toggle between collapsing and expanding all outdated review comments in a pull request by holding down <kbd>Alt</kbd> and clicking **Show outdated** or **Hide outdated**.|{% ifversion fpt or ghes or ghae or ghec %}
| Click, then <kbd>Shift</kbd> and click               | Comment on multiple lines of a pull request by clicking a line number, holding <kbd>Shift</kbd>, then clicking another line number. 更多信息请参阅“[评论拉取请求](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)。”
{% endif %}

## 项目板

### 移动列

| 键盘快捷键                                                                                                                                                          | 描述          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                           | 开始移动聚焦的列    |
| <kbd>Esc</kbd>                                                                                                                                                 | 取消正在进行的移动   |
| <kbd>Enter</kbd>                                                                                                                                               | 完成正在进行的移动   |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                   | 向左移动列       |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | 将列移动到最左侧的位置 |
| <kbd>→</kbd> or <kbd>L</kbd>                                                                                                                                   | 向右移动列       |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | 将列移动到最右侧的位置 |

### 移动卡片

| 键盘快捷键                                                                                                                                                                                                                              | 描述            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                                                                                               | 开始移动聚焦的卡片     |
| <kbd>Esc</kbd>                                                                                                                                                                                                                     | 取消正在进行的移动     |
| <kbd>Enter</kbd>                                                                                                                                                                                                                   | 完成正在进行的移动     |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                                                                                                                                                                       | 向下移动卡片        |
| <kbd>Command</kbd>+<kbd>↓</kbd> or <kbd>Command</kbd>+<kbd>J</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> or <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux)                                                                     | 将卡片移动到该列的底部   |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                                                                                                                                                                       | 向上移动卡片        |
| <kbd>Command</kbd>+<kbd>↑</kbd> or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                                     | 将卡片移动到该列的顶部   |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                                                                                       | 将卡片移动到左侧列的底部  |
| <kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Shift</kbd>+<kbd>H</kbd>                                                                                                                                                                     | 将卡片移动到左侧列的顶部  |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux)                                                                     | 将卡片移动到最左侧列的底部 |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 将卡片移动到最左侧列的顶部 |
| <kbd>→</kbd>                                                                                                                                                                                                                       | 将卡片移动到右侧列的底部  |
| <kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Shift</kbd>+<kbd>L</kbd>                                                                                                                                                                     | 将卡片移动到右侧列的顶部  |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux)                                                                     | 将卡片移动到最右侧列的底部 |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 将卡片移动到最右侧列的底部 |

### 预览卡片

| 键盘快捷键          | 描述       |
| -------------- | -------- |
| <kbd>Esc</kbd> | 关闭卡片预览窗格 |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| 键盘快捷键                                                                                                | 描述                      |
| ---------------------------------------------------------------------------------------------------- | ----------------------- |
| <kbd>Command</kbd>+<kbd>Space </kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) | 在工作流程编辑器中，获取对工作流程文件的建议。 |
| <kbd>G</kbd> <kbd>F</kbd>                                                                            | 转到工作流程文件                |
| <kbd>Shift</kbd>+<kbd>T</kbd> or <kbd>T</kbd>                                                        | 切换日志中的时间戳               |
| <kbd>Shift</kbd>+<kbd>F</kbd> or <kbd>F</kbd>                                                        | 切换全屏日志                  |
| <kbd>Esc</kbd>                                                                                       | 退出全屏日志                  |

{% endif %}

## 通知
{% ifversion fpt or ghes or ghae or ghec %}
| 键盘快捷键                         | 描述    |
| ----------------------------- | ----- |
| <kbd>E</kbd>                  | 标记为完成 |
| <kbd>Shift</kbd>+<kbd>U</kbd> | 标记为未读 |
| <kbd>Shift</kbd>+<kbd>I</kbd> | 标记为已读 |
| <kbd>Shift</kbd>+<kbd>M</kbd> | 取消订阅  |

{% else %}

| 键盘快捷键                                        | 描述    |
| -------------------------------------------- | ----- |
| <kbd>E</kbd> or <kbd>I</kbd> or <kbd>Y</kbd> | 标记为已读 |
| <kbd>Shift</kbd>+<kbd>M</kbd>                | 静音线程  |
{% endif %}

## 网络图

| 键盘快捷键                                                                                      | 描述     |
| ------------------------------------------------------------------------------------------ | ------ |
| <kbd>←</kbd> or <kbd>H</kbd>                                                               | 向左滚动   |
| <kbd>→</kbd> or <kbd>L</kbd>                                                               | 向右滚动   |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                               | 向上滚动   |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                               | 向下滚动   |
| <kbd>Shift</kbd>+<kbd>←</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 一直向左滚动 |
| <kbd>Shift</kbd>+<kbd>→</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 一直向右滚动 |
| <kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | 一直向上滚动 |
| <kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | 一直向下滚动 |
