---
title: 管理视图
intro: 了解如何创建、保存和管理项目视图。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108638'
---
## 创建项目视图

项目视图允许您快速查看项目的特定方面。 每个视图都显示在项目中单独的选项卡上。 

例如，您可以有：
- 显示所有尚未开始的项的视图（按“状态”过滤）。
- 显示每个团队的工作负荷的视图（按自定义“团队”字段分组）。
- 显示具有最早目标运送日期的项的视图（按日期字段排序）。

要添加新视图：

{% data reusables.projects.new-view %}

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，并开始键入“新建视图”。

新视图将自动保存。

## 复制视图

可以复制现有视图，并将其用作基础进行进一步更改。

1. 切换到要复制的视图。
{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "versions" aria-label="the versions icon" %}“复制视图”。
   ![显示“复制”菜单项的屏幕截图](/assets/images/help/projects-v2/duplicate-view.png)

## 保存对视图的更改

对视图进行更改（例如，对视图中的数据进行排序、重新排序、过滤或分组）时，视图名称旁边会显示一个点，以指示存在未保存的更改。 

![未保存的更改指示符](/assets/images/help/projects/unsaved-changes.png)

如果您不想保存更改，可以忽略此指示。 没有其他人会看到您的更改。

{% data reusables.projects.save-view %}

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，并开始键入“保存视图”。

## 对保存的视图重新排序

要更改包含已保存视图的选项卡的顺序，请单击选项卡并将其拖到新位置。 新选项卡顺序自动保存。

## 重命名保存的视图

可重命名已保存的视图。 名称更改将自动保存。

1. 切换到要重命名的视图。
{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "pencil" aria-label="the pencil icon" %}“重命名视图”。
   ![显示“重命名”菜单项的屏幕截图](/assets/images/help/projects-v2/rename-view.png)
1. 键入视图的新名称。
1. 要保存更改，请按<kbd>回车键</kbd>。

## 删除已保存的视图

1. 切换到要删除的视图。
{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "trash" aria-label="the trasj icon" %}“删除视图”。
   ![显示重命名删除项的屏幕截图](/assets/images/help/projects-v2/delete-view.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，并开始键入“删除视图”。
