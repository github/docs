---
title: '将项添加到你的 {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 了解如何将拉取请求、问题和草稿问题单独或批量添加到你的项目中。
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107611'
---
您的项目可以跟踪草稿议题、议题和拉取请求。 

{% note %}

注意：一个项目最多可以包含 {% data variables.projects.item_limit %} 项和 {% data variables.projects.archived_item_limit %} 存档的项。 {% ifversion projects-v2-auto-archive %}若要了解有关在满足特定条件时自动存档项目的详细信息，请参阅“[项目自动存档](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)”。{% endif %}

{% endnote %}

### 将问题和拉取请求添加到项目

#### 粘贴问题或拉取请求的 URL

{% data reusables.projects.add-item-via-paste %}

#### 搜索议题或拉取请求

{% data reusables.projects.add-item-bottom-row %}
2. 输入 <kbd>#</kbd> 。
3. 选择拉取请求或议题所在的仓库。 您可以输入仓库名称的一部分来缩小选项范围。
  ![显示粘贴问题 URL 以将其添加到项目的屏幕截图](/assets/images/help/projects-v2/add-item-select-repo.png)
4. 选择议题或拉取请求。 您可以键入标题的一部分以缩小选项范围。
  ![显示粘贴问题 URL 以将其添加到项目的屏幕截图](/assets/images/help/projects-v2/add-item-select-issue.png)

#### 批量添加问题和拉取请求

1. 在项目的最后一行，单击 {% octicon "plus" aria-label="plus icon" %}。
  ![显示项目底部 + 按钮的屏幕截图](/assets/images/help/projects-v2/omnibar-add.png)
1. 单击“从存储库添加项”。
  ![显示“从存储库添加项”菜单项的屏幕截图](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### 从存储库添加多个问题或拉取请求

1. 在 {% data variables.location.product_location %} 上，导航到包含要添加到项目中的问题或拉取请求的存储库。
{% data reusables.repositories.sidebar-issue-pr %}
1. 在每个问题标题的左侧，选择要添加到项目中的问题。
  ![显示用于选择问题或拉取请求的复选框的屏幕截图](/assets/images/help/issues/select-issue-checkbox.png)
1. （可选）若要选择页面上的每个问题或拉取请求，请在问题或拉取请求列表的顶部选择全选。 
  ![显示用于在屏幕上全选的复选框的屏幕截图](/assets/images/help/issues/select-all-checkbox.png)
1. 在问题列表或拉取请求的上方，单击“项目”。 
  ![显示“项目”选项的屏幕截图](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 单击要向其添加所选问题或拉取请求的项目。
  ![显示用于在屏幕上全选的复选框的屏幕截图](/assets/images/help/projects-v2/issue-index-select-project.png)

#### 从议题或拉取请求中分配项目

1. 导航到要添加到项目的议题或拉取请求。
2. 在侧栏中，单击“项目”。
  ![显示问题侧边栏中“项目”的屏幕截图](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. 选择要添加议题或拉取请求的项目。
  ![显示从问题侧边栏选择项目的屏幕截图](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. （可选）填充自定义字段。
  ![项目侧边栏](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### 使用命令面板添加问题或拉取请求

1. {% data reusables.projects.open-command-palette %}
1. 开始键入“添加项”，然后按 <kbd>Return</kbd>。
{% data reusables.projects.bulk-add %}

### 创建草稿议题

草稿议题有助于快速捕获想法。 与从存储库引用的问题和拉取请求不同，草稿问题只存在于你的项目中。

{% data reusables.projects.add-draft-issue %}

草稿议题可以具有标题、文本正文、受理人以及项目中的任何自定义字段。 为了填充草稿议题的存储库、标签或里程碑，必须首先将草稿问题转换为议题。 有关详细信息，请参阅“[将草稿问题转换为问题](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)”。

{% note %}

注意：用户在草稿问题中被分配或提及时不会收到通知，除非草稿问题已转换为问题。

{% endnote %}
