---
title: 键盘快捷方式
intro: '几乎 {% data variables.product.prodname_dotcom %} 上的每一页都有键盘快捷方式，可以更快地执行操作。'
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
ms.openlocfilehash: 857c4129e2e156025c8ee8f37a0c834242c0b216
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423538'
---
## 关于键盘快捷键

键入 <kbd>?</kbd> （{% data variables.product.prodname_dotcom %} 上）会显示一个对话框，其中列出了可用于该页面的键盘快捷方式。 您可以使用这些键盘快捷键对站点执行操作，而无需使用鼠标导航。

{% ifversion keyboard-shortcut-accessibility-setting %} 可以在辅助功能设置中禁用字符键快捷方式，同时仍允许使用用于修改键的快捷方式。 有关详细信息，请参阅“[管理辅助功能设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)”。{% endif %}

下面是一些可用键盘快捷键的列表。
{% ifversion command-palette %} {% data variables.product.prodname_command_palette %} 还可用于快速访问各种操作，而无需记住键盘快捷方式。 有关详细信息，请参阅“[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”。{% endif %}

## 站点快捷键

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>S</kbd> 或 <kbd>/</kbd> | 聚焦于搜索栏。 有关详细信息，请参阅“[关于搜索 {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”。
|<kbd>G</kbd> <kbd>N</kbd> | 转到您的通知。 有关详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”。
|Esc  | 当聚焦于用户、议题或拉取请求悬停卡时，关闭悬停卡并重新聚焦于悬停卡所在的元素
{% ifversion command-palette %}|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | 打开 {% data variables.product.prodname_command_palette %}。 如果要编辑 Markdown 文本，请使用 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> 打开命令面板。 有关详细信息，请参阅“[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”。{% endif %}

## 存储库

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | 转到“代码”选项卡
|<kbd>G</kbd> <kbd>I</kbd> | 转到“问题”选项卡。有关详细信息，请参阅“[关于问题](/articles/about-issues)”。
|<kbd>G</kbd> <kbd>P</kbd> | 转到“拉取请求”选项卡。有关详细信息，请参阅“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | 转到“操作”选项卡。有关详细信息，请参阅“[关于操作](/actions/getting-started-with-github-actions/about-github-actions)”。{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | 转到“项目”选项卡。有关详细信息，请参阅“[关于项目板](/articles/about-project-boards)”。
|<kbd>G</kbd> <kbd>W</kbd> | 转到“Wiki”选项卡。有关详细信息，请参阅“[关于 Wiki](/communities/documenting-your-project-with-wikis/about-wikis)”。{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | 转到“讨论”选项卡。有关详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。{% endif %}

## 源代码编辑

| 键盘快捷方式 | 说明 |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | 在基于 Web 的编辑器中打开存储库或拉取请求。 有关详细信息，请参阅“[基于 Web 的编辑器](/codespaces/developing-in-codespaces/web-based-editor)”。{% endif %} |<kbd>Command</kbd>+<kbd>B</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | 插入 Markdown 格式将文本设为粗体 | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | 插入 Markdown 格式将文本设为斜体 | <kbd>Command</kbd>+<kbd>K</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | 插入 Markdown 格式创建链接{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | 插入 Markdown 格式创建有序列表 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | 插入 Markdown 格式创建无序列表 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 插入 Markdown 格式创建引用{% endif %} |<kbd>E</kbd> | 在“编辑文件”选项卡中打开源代码文件 |<kbd>Command</kbd>+<kbd>F</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | 开始在文件编辑器中搜索 |<kbd>Command</kbd>+<kbd>G</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | 查找下一个 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux) | 查找上一个 |<kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux) | 替换 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | 全部替换 |<kbd>Alt</kbd>+<kbd>G</kbd> | 跳转到行 |<kbd>Command</kbd>+<kbd>Z</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux) | 撤消 |<kbd>Command</kbd>+<kbd>Y</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux) | 恢复 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | 在“编辑文件”和“预览更改”选项卡之间切换 |<kbd>Command</kbd>+<kbd>S</kbd> (Mac) 或  </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) | 编写提交消息

有关更多键盘快捷方式的详细信息，请参阅 [CodeMirror 文档](https://codemirror.net/doc/manual.html#commands)。

## 源代码浏览

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>T</kbd> | 激活文件查找器
|<kbd>L</kbd> | 跳至代码中的某一行
|<kbd>W</kbd> | 切换到新分支或标记
|<kbd>是</kbd> | 将 URL 展开为其规范形式。 有关详细信息，请参阅“[获取文件的永久链接](/articles/getting-permanent-links-to-files)”。
|<kbd>I</kbd> | 显示或隐藏有关差异的评论。 有关详细信息，请参阅“[评论拉取请求的差异](/articles/commenting-on-the-diff-of-a-pull-request)”。
|<kbd>A</kbd> | 在差异上显示或隐藏注释
|<kbd>B</kbd> | 打开追溯视图。 有关详细信息，请参阅“[跟踪文件中的更改](/articles/tracing-changes-in-a-file)”。

## 注释

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>Command</kbd>+<kbd>B</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | 插入 Markdown 格式用于粗体文本
|<kbd>Command</kbd>+<kbd>I</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | 插入 Markdown 格式用于斜体文本
|<kbd>Command</kbd>+<kbd>E</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) | 在行 {% ifversion fpt or ghae-issue-5434 or ghes or ghec %} 中插入代码或命令的 Markdown 格式
|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | 插入 Markdown 格式以创建链接{% endif %}{% ifversion fpt or ghae-issue-7103 or ghes > 3.5 or ghec %}
|<kbd>Command</kbd>+<kbd>V</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux) | 应用于突出显示的文本时创建 Markdown 链接{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | 在“撰写”和“预览”评论选项卡之间切换{% ifversion fpt or ghae or ghes > 3.4 or ghec %} 
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Windows/Linux) | 将 HTML 链接粘贴为纯文本{% endif %}{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>V</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | 将 HTML 链接粘贴为纯文本{% endif %}{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | 为有序列表插入 Markdown 格式
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | 为无序列表插入 Markdown 格式{% endif %}
|<kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux) | 提交评论
|Ctrl+. 然后按 <kbd>Ctrl</kbd>+<kbd>[保存的回复编号]</kbd> | 打开已保存回复菜单，然后使用已保存回复自动填写评论字段。 有关详细信息，请参阅“[关于已保存的回复](/articles/about-saved-replies)”。{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 为报价插入 Markdown 格式{% endif %}{% ifversion fpt or ghec %}
|<kbd>Command</kbd>+<kbd>G</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | 插入建议。 有关详细信息，请参阅“[审查拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。 |{% endif %}
|<kbd>R</kbd> | 在您的回复中引用所选的文本。 有关详细信息，请参阅“[基本撰写和格式设置语法](/articles/basic-writing-and-formatting-syntax#quoting-text)”。 |

## 议题和拉取请求列表

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>C</kbd> | 创建问题
|<kbd>Command</kbd>+<kbd>/</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | 将光标聚焦于议题或拉取请求搜索栏。 有关详细信息，请参阅“[筛选和搜索问题与拉取请求](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”。||
|<kbd>U</kbd> | 按作者过滤
|<kbd>L</kbd> | 按标签过滤或编辑标签。 有关详细信息，请参阅[按标签筛选问题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)。
|<kbd>Alt</kbd> 并单击 | 按标签过滤时，排除标签。 有关详细信息，请参阅[按标签筛选问题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)。
|<kbd>M</kbd> | 按里程碑过滤或编辑里程碑。 有关详细信息，请参阅“[按里程碑筛选问题和拉取请求](/articles/filtering-issues-and-pull-requests-by-milestone)”。
|<kbd>A</kbd> | 按受理人过滤或编辑受理人。 有关详细信息，请参阅“[按被分派人筛选问题和拉取请求](/articles/filtering-issues-and-pull-requests-by-assignees)”。
|<kbd>O</kbd> 或 <kbd>Enter</kbd> | 激活议题

## 议题和拉取请求
| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>Q</kbd> | 请求审查者。 有关详细信息，请参阅“[请求拉取请求审查](/articles/requesting-a-pull-request-review/)”。
|<kbd>M</kbd> | 设置里程碑。 有关详细信息，请参阅“[将里程碑与问题和拉取请求相关联](/articles/associating-milestones-with-issues-and-pull-requests/)”。
|<kbd>L</kbd> | 应用标签。 有关详细信息，请参阅“[将标签应用于问题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests/)”。
|<kbd>A</kbd> | 设置受理人。 有关详细信息，请参阅“[向其他 {% data variables.product.company_short %} 用户分配问题和拉取请求](/articles/assigning-issues-and-pull-requests-to-other-github-users/)”。
|<kbd>X</kbd> | 链接来自同一存储库的议题或拉取请求。 有关详细信息，请参阅“[将拉取请求链接到问题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)”。
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | 在“写入”和“预览”选项卡之间切换{% ifversion fpt or ghec %} 
|<kbd>Alt</kbd> 并单击 | 从任务列表创建问题时，按住 <kbd>Alt</kbd> 并单击任务右上角的 {% octicon "issue-opened" aria-label="The issue opened icon" %}，以在当前选项卡中打开新问题表单。 有关详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。
|<kbd>Shift</kbd> 并单击 | 从任务列表创建问题时，按住 <kbd>Alt</kbd> 并单击任务右上角的 {% octicon "issue-opened" aria-label="The issue opened icon" %}，以在新的选项卡中打开新问题表单。 有关详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。
|<kbd>Command</kbd> 并单击 (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> 并单击 (Windows/Linux) | 从任务列表创建问题时，按住 <kbd>Command</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd> 并单击任务右上角的 {% octicon "issue-opened" aria-label="The issue opened icon" %}，以在新窗口中打开新问题表单。 有关详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。{% endif %}

## 拉取请求中的更改

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>C</kbd> | 在拉取请求中打开提交列表
|<kbd>T</kbd> | 在拉取请求中打开已更改文件列表
|<kbd>J</kbd> | 将所选内容在列表中向下移动
|<kbd>K</kbd> | 将所选内容在列表中向上移动
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> | 添加一条有关拉取请求差异的评论 |
|<kbd>Alt</kbd> 并单击 | 按住 <kbd>Alt</kbd> 并单击“显示已过期内容”或“隐藏已过期内容”，在折叠和展开拉取请求中所有过期的审查评论之间切换 。|
|单击，然后按住 <kbd>Shift</kbd> 并单击 | 单击一个行号，按住 <kbd>Shift</kbd>，然后单击另一行号，对拉取请求的多行进行评论。 有关详细信息，请参阅“[评论拉取请求](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)”。|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### 导航项目

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>⌘</kbd>+<kbd>f</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>f</kbd> (Windows/Linux) | 焦点筛选器字段
|<kbd>←</kbd> | 将单元格焦点移到左侧
|<kbd>→</kbd> | 将单元格焦点移到右侧
|<kbd>↑</kbd> | 向上移动单元格焦点
|<kbd>↓</kbd> | 向下移动单元格焦点

### 操作项目

| 键盘快捷方式 | 说明
|-----------|------------
|Enter | 切换聚焦单元格的编辑模式
|<kbd>Esc 键</kbd> | 取消对聚焦单元格的编辑
|<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Windows/Linux) | 打开行操作菜单
|<kbd>Shift</kbd>+<kbd>Space</kbd> | 选择项
|<kbd>Space</kbd> | 打开选定项
|<kbd>e</kbd> | 存档选定项

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### 移动列

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>Enter</kbd> 或<kbd>空格</kbd> | 开始移动聚焦的列
|Esc  | 取消正在进行的移动
|Enter | 完成正在进行的移动
|<kbd>←</kbd> 或 <kbd>H</kbd> | 向左移动列
|<kbd>Command</kbd>+<kbd>←</kbd> 或 <kbd>Command</kbd>+<kbd>H</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> 或 <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | 将列移动到最左侧的位置
|<kbd>→</kbd> 或 <kbd>L</kbd> | 向右移动列
|<kbd>Command</kbd>+<kbd>→</kbd> 或 <kbd>Command</kbd>+<kbd>L</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> 或 <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | 将列移动到最右侧的位置

### 移动卡片

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>Enter</kbd> 或<kbd>空格</kbd> | 开始移动聚焦的卡片
|Esc  | 取消正在进行的移动
|Enter | 完成正在进行的移动
|<kbd>↓</kbd> 或 <kbd>J</kbd> | 向下移动卡片
|<kbd>Command</kbd>+<kbd>↓</kbd> 或 <kbd>Command</kbd>+<kbd>J</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> 或 <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux) | 将卡片移动到该列的底部
|<kbd>↑</kbd> 或 <kbd>K</kbd> | 向上移动卡片
|<kbd>Command</kbd>+<kbd>↑</kbd> 或 <kbd>Command</kbd>+<kbd>K</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> 或 <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | 将卡片移动到该列的顶部
|<kbd>←</kbd> 或 <kbd>H</kbd> | 将卡片移动到左侧列的底部
|<kbd>Shift</kbd>+<kbd>←</kbd> 或 <kbd>Shift</kbd>+<kbd>H</kbd> | 将卡片移动到左侧列的顶部
|<kbd>Command</kbd>+<kbd>←</kbd> 或 <kbd>Command</kbd>+<kbd>H</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> 或 <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | 将卡片移动到最左侧列的底部
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> 或 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 将卡片移动到最左侧列的顶部
|<kbd>→</kbd> | 将卡片移动到右侧列的底部
|<kbd>Shift</kbd>+<kbd>→</kbd> 或 <kbd>Shift</kbd>+<kbd>L</kbd> | 将卡片移动到右侧列的顶部
|<kbd>Command</kbd>+<kbd>→</kbd> 或 <kbd>Command</kbd>+<kbd>L</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> 或 <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | 将卡片移动到最右侧列的底部
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> 或 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 将卡片移动到最右侧列的底部

### 预览卡片

| 键盘快捷方式 | 说明
|-----------|------------
|Esc  | 关闭卡片预览窗格

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>Command</kbd>+<kbd>空格</kbd> (Mac) 或 </br> <kbd>Ctrl</kbd>+<kbd>空格</kbd> (Windows/Linux) | 在工作流程编辑器中，获取对工作流程文件的建议。
|<kbd>G</kbd> <kbd>F</kbd> | 转到工作流程文件
|<kbd>Shift</kbd>+<kbd>T</kbd> 或 <kbd>T</kbd> | 切换日志中的时间戳
|<kbd>Shift</kbd>+<kbd>F</kbd> 或 <kbd>F</kbd> | 切换全屏日志
|Esc  | 退出全屏日志

{% endif %}

## 通知

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>E</kbd> | 标记为完成
|<kbd>Shift</kbd>+<kbd>U</kbd>| 标记为“未读”
|<kbd>Shift</kbd>+<kbd>I</kbd>| 标记为已读
|<kbd>Shift</kbd>+<kbd>M</kbd> | 取消订阅

## 网络图

| 键盘快捷方式 | 说明
|-----------|------------
|<kbd>←</kbd> 或 <kbd>H</kbd> | 向左滚动
|<kbd>→</kbd> 或 <kbd>L</kbd> | 向右滚动
|<kbd>↑</kbd> 或 <kbd>K</kbd> | 向上滚动
|<kbd>↓</kbd> 或 <kbd>J</kbd> | 向下滚动
|<kbd>Shift</kbd>+<kbd>←</kbd> </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | 一直向左滚动
|<kbd>Shift</kbd>+<kbd>→</kbd> (Mac) 或 </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | 一直向右滚动
|<kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) 或 </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | 一直向上滚动
|<kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) 或 </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | 一直向下滚动
