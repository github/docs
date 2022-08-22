---
title: Managing your views
intro: 'Learn how to create, save, and manage your project views.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---


## 创建项目视图

项目视图允许您快速查看项目的特定方面。 每个视图都显示在项目中单独的选项卡上。

例如，您可以有：
- 显示所有尚未开始的项的视图（按“状态”过滤）。
- 显示每个团队的工作负荷的视图（按自定义“团队”字段分组）。
- 显示具有最早目标运送日期的项的视图（按日期字段排序）。

要添加新视图：

{% data reusables.projects.new-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "New view."

新视图将自动保存。

## Duplicating a view

You can duplicate an existing view and use it as a base to make further changes.

1. Switch to the view you want to duplicate.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "versions" aria-label="the versions icon" %} **Duplicate view**. ![Screenshot showing the duplicate menu item](/assets/images/help/projects-v2/duplicate-view.png)

## 保存对视图的更改

对视图进行更改（例如，对视图中的数据进行排序、重新排序、过滤或分组）时，视图名称旁边会显示一个点，以指示存在未保存的更改。

![未保存的更改指示符](/assets/images/help/projects/unsaved-changes.png)

如果您不想保存更改，可以忽略此指示。 没有其他人会看到您的更改。

{% data reusables.projects.save-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Save view."

## 对保存的视图重新排序

要更改包含已保存视图的选项卡的顺序，请单击选项卡并将其拖到新位置。 新选项卡顺序自动保存。

## 重命名保存的视图

You can rename your saved views. 名称更改将自动保存。

1. Switch to the view you want to rename.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save your changes, press <kbd>Return</kbd>.

## 删除已保存的视图

1. Switch to the view you want to delete.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "trash" aria-label="the trasj icon" %} **Delete view**. ![Screenshot showing the rename delete item](/assets/images/help/projects-v2/delete-view.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Delete view."
