---
title: GitHub 命令面板
intro: '使用 {% data variables.product.product_name %} 中的命令面板可以直接从键盘导航、搜索和运行命令。'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 1b9b8ecfa5e8824bcf7032c51250238ff5f8e8a7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423138'
---
{% data reusables.command-palette.beta-note %}

## 关于 {% data variables.product.prodname_command_palette %}

您可以使用 {% data variables.product.prodname_command_palette %} 在 {% data variables.product.product_name %} 上导航、搜索和运行命令。 命令面板是一种按需方式，用于根据您最近使用的当前上下文和资源显示建议。 您可以从 {% data variables.product.product_name %} 上的任何位置使用键盘快捷键打开命令面板，这样可以节省您的时间，手也不需要离开键盘。

### 快速导航

打开命令面板时，建议会进行优化，使你可以从存储库、个人帐户或组织中的任意位置轻松访问顶级页面，如“问题”页面。 如果未列出所需的位置，请开始输入位置的名称或编号以优化建议。

![命令面板存储库建议](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### 轻松访问命令

直接从键盘运行命令而无需浏览一系列菜单的功能可能会改变您使用 {% data variables.product.prodname_dotcom %} 的方式。 例如，您可以通过几次击键切换主题，从而在需求变化时轻松切换主题。

![命令面板更改主题](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## 打开 {% data variables.product.prodname_command_palette %}

使用以下默认键盘快捷键之一打开命令面板：
- Windows 和 Linux：<kbd>Ctrl</kbd>+<kbd>K</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac：<kbd>Command</kbd>+<kbd>K</kbd> 或 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

你可以在用户设置的[辅助功能部分](https://github.com/settings/accessibility)中自定义用于打开命令面板的键盘快捷方式。 有关详细信息，请参阅“[自定义 {% data variables.product.prodname_command_palette %} 键盘快捷方式](#customizing-your-github-command-palette-keyboard-shortcuts)”。

打开命令面板时，它会在左上角显示你的位置，并将其用作建议的范围（例如 `mashed-avocado` 组织）。

![命令面板启动](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**注意：**
- 如果正在编辑 Markdown 文本，请使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac) 打开命令面板。{% ifversion projects-v2 %}
- 如果正在处理 {% data variables.projects.project_v2 %}，会改为显示项目特定的命令面板。 有关详细信息，请参阅“[自定义视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”。{% endif %}

{% endnote %}

### 自定义 {% data variables.product.prodname_command_palette %} 键盘快捷键


用于打开命令面板的默认键盘快捷键可能与默认操作系统和浏览器键盘快捷键冲突。 你可以在帐户设置的[辅助功能部分](https://github.com/settings/accessibility)中自定义键盘快捷方式。 在命令面板设置中，可以自定义用于在搜索模式和命令模式下打开命令面板的键盘快捷键。 

![命令面板键盘快捷键设置](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## 使用 {% data variables.product.prodname_command_palette %} 导航

可以使用命令面板导航到 {% data variables.product.product_name %} 上您有权访问的任何页面。

{% data reusables.command-palette.open-palette %}

2. 开始键入要导航到的路径。 命令面板中的建议将更改以匹配您的文本。

   ![命令面板导航当前范围](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   您还可以使用按键来缩小搜索范围。 有关详细信息，请参阅“[按键功能](#keystroke-functions)”。

4. 完成输入路径，或使用箭头键从建议列表中突出显示所需的路径。

5. 使用 <kbd>Enter</kbd> 跳转到所选位置。 或者，使用 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) 在新的浏览器标签页中打开该位置。

## 使用 {% data variables.product.prodname_command_palette %} 搜索

可以使用命令面板在 {% data variables.product.product_location %} 上搜索任何内容。

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. （可选）使用按键查找特定类型的资源：

   - <kbd>#</kbd> 搜索问题、拉取请求、讨论和项目
   - <kbd>!</kbd> 搜索项目
   - <kbd>@</kbd> 搜索用户、组织和存储库
   - <kbd>/</kbd> 搜索存储库范围内的文件

   ![命令面板搜索文件](/assets/images/help/command-palette/command-palette-search-files.png)

4. 开始输入搜索字词。 命令面板将根据您的搜索范围为您提供一系列建议的搜索。

   {% tip %}

   你也可以在命令面板中使用 {% data variables.product.prodname_dotcom %} 集成搜索的完整语法。 有关详细信息，请参阅“[搜索有关 {% data variables.product.prodname_dotcom %} 的信息](/search-github)”。

   {% endtip %}

5. 使用箭头键突出显示所需的搜索结果，并使用 <kbd>Enter</kbd> 跳转到所选位置。 或者，使用 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) 在新的浏览器标签页中打开该位置。

## 从 {% data variables.product.prodname_command_palette %} 运行命令

您可以使用 {% data variables.product.prodname_command_palette %} 来运行命令。 例如，您可以创建新的存储库或议题，或更改主题。 运行命令时，其操作的位置由基础页面或命令面板中显示的范围确定。

- 拉取请求和议题命令始终在基础页面上运行。
- 更高级别的命令（例如存储库命令）在命令面板中显示的范围中运行。

有关受支持命令的完整列表，请参阅“[{% data variables.product.prodname_command_palette %} 参考](#github-command-palette-reference)”。

1. 在命令模式下打开命令面板的默认键盘快捷方式是 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)。 如果已打开命令面板，请按 <kbd>></kbd> 切换到命令模式。 {% data variables.product.prodname_dotcom %} 根据您的位置建议命令。

   ![命令面板命令模式](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. 如果未显示所需的命令，请检查范围，然后开始在文本框中输入命令名称。

4. 使用箭头键突出显示所需的命令，然后使用 <kbd>Enter</kbd> 运行它。


## 关闭命令面板

当命令面板处于活动状态时，可以使用以下键盘快捷键之一关闭命令面板：

- 搜索和导航模式：<kbd>Esc</kbd> 或 <kbd>Ctrl</kbd>+<kbd>K</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>K</kbd> (Mac)
- 命令模式：<kbd>Esc</kbd> 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>（Windows 和 Linux）或 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)

如果在辅助功能设置中自定义了命令面板键盘快捷键，则自定义的键盘快捷键将用于打开和关闭命令面板。  

## {% data variables.product.prodname_command_palette %} 引用

### 按键功能

当命令面板处于导航和搜索模式时，这些按键可用，也就是说，它们在命令模式下不可用。

| 击键 | 函数 |
| :- | :- |
|<kbd>></kbd>| 进入命令模式。 有关详细信息，请参阅“[从 {% data variables.product.prodname_command_palette %} 运行命令](#running-commands-from-the-github-command-palette)”。 |
|<kbd>#</kbd>| 搜索议题、拉取请求、讨论和项目。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_command_palette %} 搜索](#searching-with-the-github-command-palette)”。|
|<kbd>@</kbd>| 搜索用户、组织和存储库。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_command_palette %} 搜索](#searching-with-the-github-command-palette)”。|
|<kbd>/</kbd>| 搜索存储库范围内的文件或组织范围内的存储库。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_command_palette %} 搜索](#searching-with-the-github-command-palette)”。 |
|<kbd>!</kbd>| 只搜索项目。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_command_palette %} 搜索](#searching-with-the-github-command-palette)”。|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> 或 <kbd>Command</kbd>+<kbd>C</kbd>| 将突出显示结果的搜索或导航 URL 复制到剪贴板。|
|Enter| 跳转到突出显示的结果或运行突出显示的命令。|
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> 或 <kbd>Command</kbd>+<kbd>Enter</kbd>| 在新的浏览器选项卡中打开突出显示的搜索或导航结果。|
|<kbd>?</kbd>| 在命令面板中显示帮助。|

### 全局命令

以下命令可从所有范围使用。

| Command | 行为|
| :- | :- | :- |
|`Import repository`|通过从另一个版本控制系统导入项目来创建新存储库。 有关详细信息，请参阅“[使用 GitHub 导入工具导入存储库](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)”。  |
|`New gist`|打开新 gist。 有关详细信息，请参阅“[创建 Gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)”。 |
|`New organization`|创建新组织。 有关详细信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。 |
|`New project`|创建新的项目板。 有关详细信息，请参阅“[创建项目](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)”。  |
|`New repository`|从头开始创建新的存储库。 有关详细信息，请参阅“[创建新存储库](/repositories/creating-and-managing-repositories/creating-a-new-repository)”。 |
|`Switch theme to <theme name>`|直接更改为 UI 的其他主题。 有关详细信息，请参阅“[管理主题设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)”。 |


### 组织命令

以下命令仅在组织的范围内可用。

| Command | 行为|
| :- | :- |
| `New team`| 在当前组织中创建新团队。 有关详细信息，请参阅“[创建团队](/organizations/organizing-members-into-teams/creating-a-team)”。

### 存储库命令

这些命令中的大多数仅在存储库的主页上可用。 如果某个命令在其他页面上也可用，则会在行为列中注明。

| Command | 行为|
| :- | :- |
|`Clone repository: <URL type>`|将使用 {% data variables.product.prodname_cli %}、HTTPS 或 SSH 克隆存储库所需的 URL 复制到剪贴板。 有关详细信息，请参阅“[克隆存储库](/repositories/creating-and-managing-repositories/cloning-a-repository)”。|
|`New discussion`|在存储库中创建新讨论。 有关详细信息，请参阅“[创建新讨论](/discussions/quickstart#creating-a-new-discussion)”。|
|`New file`|从存储库中的任何页面创建新文件。 有关详细信息，请参阅“[将文件添加到存储库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)”。
|`New issue`|从存储库中的任何页面打开新议题。 有关详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-an-issue)”。|
|`Open in new codespace`|为此存储库创建并打开代码空间。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace)”。|
|`Open in github.dev editor`|在 github.dev 编辑器中打开当前存储库。 有关详细信息，请参阅“[打开基于 Web 的编辑器](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)”。|

### 文件命令

以下命令仅当您从存储库中的文件打开命令面板时才可用。

| Command | 行为|
| :- | :- |
|`Copy permalink`|创建指向包含当前提交 SHA 的文件的链接，并将该链接复制到剪贴板。 有关详细信息，请参阅“[获取文件的永久链接](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)”。
|`Open in github.dev editor`|在 github.dev 编辑器中打开当前显示的文件。 有关详细信息，请参阅“[打开基于 Web 的编辑器](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)”。|

### 讨论命令

以下命令仅当您从讨论中打开命令面板时才可用。 它们作用于当前页面，不受命令面板中设置的范围的影响。

| Command | 行为|
| :- | :- |
|`Delete discussion...`|永久删除讨论。 有关详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)”。
|`Edit discussion body`|打开讨论的正文以供编辑。
|`Subscribe`/`unsubscribe`|选择接收或不接收有关讨论内容增加的通知。 有关详细信息，请参阅“[关于通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。
|`Transfer discussion...`|将讨论移动到其他存储库。 有关详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)”。

### 议题命令

以下命令仅当您从议题中打开命令面板时才可用。 它们作用于当前页面，不受命令面板中设置的范围的影响。

| Command | 行为|
| :- | :- |
|`Close`/`reopen issue`|关闭或重新打开当前议题。 有关详细信息，请参阅“[关于问题](/issues/tracking-your-work-with-issues/about-issues)”。|
|`Convert issue to discussion...`|将当前议题转换为讨论。 有关详细信息，请参阅“[审查讨论](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”。
|`Delete issue...`|删除当前议题。 有关详细信息，请参阅“[删除问题](/issues/tracking-your-work-with-issues/deleting-an-issue)”。|
|`Edit issue body`|打开议题正文以进行编辑。
|`Edit issue title`|打开议题的标题以进行编辑。
|`Lock issue`|将新评论限于对存储库具有写入访问权限的用户。 有关详细信息，请参阅“[锁定对话](/communities/moderating-comments-and-conversations/locking-conversations)”。
|`Pin`/`unpin issue`|更改议题是否显示在存储库的固定议题部分中。 有关详细信息，请参阅“[将问题固定到存储库](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”。|
|`Subscribe`/`unsubscribe`|选择接收或不接收有关此议题更改的通知。 有关详细信息，请参阅“[关于通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。
|`Transfer issue...`|将议题转移到另一个存储库。 有关详细信息，请参阅“[将问题转移到其他存储库](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)”。|

### 拉取请求命令

以下命令仅当您从拉取请求打开命令面板时才可用。 它们作用于当前页面，不受命令面板中设置的范围的影响。

| Command | 行为|
| :- | :- |
|`Close`/`reopen pull request`|关闭或重新打开当前拉取请求。 有关详细信息，请参阅“[关于拉取请求](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。|
|`Convert to draft`/`Mark pull request as ready for review`|更改拉取请求的状态，以将其显示为就绪或未准备好以供审阅。 有关详细信息，请参阅“[更改拉取请求的状态](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)”。|
|`Copy current branch name`| 将拉取请求的头部分支的名称添加到剪贴板。
|`Edit pull request body`|打开拉取请求的正文以进行编辑。
|`Edit pull request title`|打开拉取请求的标题以进行编辑。
|`Open in new codespace`|为拉取请求的头部分支创建并打开代码空间。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace)”。
|`Subscribe`/`unsubscribe`|选择接收或不接收有关此拉取请求更改的通知。 有关详细信息，请参阅“[关于通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。
|`Update current branch`|使用来自基础分支的更改更新拉取请求的头部分支。 这仅适用于以存储库的默认分支为目标的拉取请求。 有关详细信息，请参阅“[关于分支](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”。|
