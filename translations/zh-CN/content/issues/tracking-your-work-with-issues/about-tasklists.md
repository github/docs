---
title: 关于任务列表
intro: 可使用任务列表将问题划分为更小的子任务。
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180783'
---
{% data reusables.projects.tasklists-release-stage %}

## 关于任务列表

任务列表添加了对 {% data variables.product.product_name %} 上的问题层次结构的支持，从而帮助跟踪问题，将问题划分为更小的子任务，并在问题之间创建新的关系。

任务列表建立在 [beta 版本任务列表](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)的先前迭代基础之上，保留了将项转换为问题、显示任务列表进度以及在问题之间创建“跟踪/跟踪者”关系的功能。

将自动填充添加到任务列表的问题，以显示其被分配者和应用的任何标签。

![显示正在运行的任务列表的图像](/assets/images/help/issues/tasklist-hero.png)

### 关于与 {% data variables.projects.projects_v2 %} 的集成

 项目的侧面板在痕迹菜单的层次结构中显示问题的位置，使你可以浏览任务列表中包含的问题。 还可以将“跟踪”和“跟踪依据”字段添加到项目视图中，以快速查看问题之间的关系。 有关信息，请参阅“[关于“跟踪”和“跟踪依据”字段](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)”。

## 创建任务列表

可以在问题描述中使用 Markdown 来创建任务列表。 创建围栏代码块，并在右反引号旁边添加 `[tasklist]`。 可以在每个项前面加上 `- [ ]`，并添加指向其他问题或文本的链接。 可以有选择性地在列表顶部添加一个标题作为 Markdown 标头。 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
Markdown 将由 {% data variables.product.product_name %} 以任务列表的形式呈现。 然后，可使用 UI 进行更改并添加问题和草稿问题。 如果编辑问题描述，你将能够直接修改 Markdown 或复制 Markdown 以复制其他问题中的任务列表。

还可以单击格式设置工具栏中的 {% octicon "checklist" aria-label="The checklist icon" %}，以在创建新问题或编辑问题描述时插入任务列表。

![显示“添加任务列表”按钮的屏幕截图](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## 将问题添加到任务列表

1. 在“任务列表”底部，单击“将项添加到任务”。
   
   ![显示“将项添加到任务”按钮的屏幕截图](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. 选择要添加到任务列表的问题。
   
   * 要从存储库添加最近更新的问题，请单击下拉列表中的问题，或使用箭头键将其选中，然后按 <kbd>Enter</kbd>。 
     
     ![显示最近问题的屏幕截图](/assets/images/help/issues/select-recent-issue.png)
     
   * 要在存储库中搜索问题，请开始键入问题的标题或问题的编号，然后单击结果，或使用箭头键将其选中并按 <kbd>Enter</kbd>。
     
     ![显示搜索问题的屏幕截图](/assets/images/help/issues/search-for-issue.png)
     
   * 要使用问题 URL 直接添加问题，请粘贴问题的 URL，然后按 <kbd>Enter</kbd>。
        
     ![显示粘贴的问题 URL 的屏幕截图](/assets/images/help/issues/paste-issue-url.png)
     

## 在任务列表中创建草稿问题

草稿问题有助于快速捕获以后可以转换为问题的想法。 与从存储库引用的问题和拉取请求不同，草稿问题只存在于你的任务列表中。

1. 在“任务列表”底部，单击“将项添加到任务”。
   
   ![显示“将项添加到任务”按钮的屏幕截图](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. 输入草稿问题标题，然后按 <kbd>Enter</kbd>。
   
   ![显示草稿问题标题的屏幕截图](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## 将草稿问题转换为任务列表中的问题

可以将草稿问题转换为问题。 问题是在任务列表的父问题所在的同一存储库中创建的。

1. 在要转换的草稿问题旁边，单击 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}。
   
   ![显示菜单图标的屏幕截图](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. 在菜单中，单击“转换为问题”。
   
   ![“转换为问题”选项的屏幕截图](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## 从任务列表中删除某个问题或草稿问题

可以从任务列表中删除问题和草稿问题。 从任务列表中删除的问题不会从存储库中删除。

1. 在要删除的草稿问题旁边，单击 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}。
   
   ![显示菜单图标的屏幕截图](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. 在菜单中，单击“删除”。
   
   ![显示“删除”选项的屏幕截图](/assets/images/help/issues/tasklist-remove.png)
   
## 更改任务列表的标题

创建新任务列表时，默认标题为“任务”。 可通过编辑问题的 Markdown 来修改标题。

1. 在问题正文的右上角，单击 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}。
   
   ![显示菜单图标位置的屏幕截图](/assets/images/help/issues/comment-menu.png)
   
1. 在菜单上，单击“编辑”。
   
   ![显示“编辑”选项的屏幕截图](/assets/images/help/issues/comment-menu-edit.png)
   
1. 将防护代码块中的标题修改为新标题。 例如，将 `### Tasks` 更改为 `### My new title`。 
   
   ![显示“编辑”选项的屏幕截图](/assets/images/help/issues/edit-tasklist-title.png)
   
1. 单击“更新评论”。

## 复制任务列表

当使用“复制 Markdown”选项复制任务列表时，{% data variables.product.product_name %} 会将 Markdown 复制到剪贴板并添加问题的名称，这样可以将任务列表粘贴到 GitHub 之外而不会丢失上下文。 

1. 在任务列表的右上角，单击 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}。
   
   ![显示菜单图标的屏幕截图](/assets/images/help/issues/tasklist-kebab.png)
   
1. 在菜单中，单击“复制 Markdown”。
   
   ![显示“复制 Markdown”选项的屏幕截图](/assets/images/help/issues/tasklist-copy-markdown.png)
   
