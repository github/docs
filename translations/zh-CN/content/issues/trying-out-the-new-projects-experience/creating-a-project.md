---
title: 创建项目（测试版）
intro: 了解如何创建项目、填充项目并添加自定义字段。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128683"
---
项目是可自定义的项集合，可随 {% data variables.product.company_short %} 数据保持最新状态。 您的项目可以跟踪议题、拉取请求以及您加入的想法。 您可以添加自定义字段并为特定目的创建视图。

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>创建项目

### <a name="creating-an-organization-project"></a>创建组织项目

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>创建用户项目

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>更新项目描述和 README

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>为您的项目添加项

您的项目可以跟踪草稿议题、议题和拉取请求。

### <a name="creating-draft-issues"></a>创建草稿议题

草稿议题有助于快速捕获想法。

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 键入想法，然后按 Enter 键。
1. 要添加正文文本，请单击草稿议题的标题。 在显示的 Markdown 输入框中，输入草拟的问题正文文本，然后单击“保存”。

草稿议题可以具有标题、文本正文、受理人以及项目中的任何自定义字段。 为了填充草稿议题的存储库、标签或里程碑，必须首先将草稿问题转换为议题。 有关详细信息，请参阅“[将草稿问题转换为问题](#converting-draft-issues-to-issues)”。

{% note %}

注意：用户在草稿问题中被分配或提及时不会收到通知，除非草稿问题已转换为问题。

{% endnote %}

### <a name="issues-and-pull-requests"></a>议题和拉取请求

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>粘贴议题或拉取请求的 URL

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 粘贴议题或拉取请求的 URL。

#### <a name="searching-for-an-issue-or-pull-request"></a>搜索议题或拉取请求

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
2. 输入 <kbd>#</kbd> 。
3. 选择拉取请求或议题所在的仓库。 您可以输入仓库名称的一部分来缩小选项范围。
4. 选择议题或拉取请求。 您可以键入标题的一部分以缩小选项范围。

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>从存储库添加多个问题或拉取请求

1. 在 {% data variables.product.product_location %} 上，导航到包含要添加到项目中的问题或拉取请求的存储库。
{% data reusables.repositories.sidebar-issue-pr %}
1. 在每个问题标题的左侧，选择要添加到项目中的问题。
  ![显示用于选择问题或拉取请求的复选框的屏幕截图](/assets/images/help/issues/select-issue-checkbox.png)
1. （可选）若要选择页面上的每个问题或拉取请求，请在问题或拉取请求列表的顶部选择全选。 
  ![显示用于在屏幕上全选的复选框的屏幕截图](/assets/images/help/issues/select-all-checkbox.png)
1. 在问题列表或拉取请求的上方，单击“项目(beta 版本)”。 
  ![显示用于在屏幕上全选的复选框的屏幕截图](/assets/images/help/issues/projects-beta-assign-button.png)
1. 单击要向其添加所选问题或拉取请求的项目。
  ![显示用于在屏幕上全选的复选框的屏幕截图](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>从议题或拉取请求中分配项目

1. 导航到要添加到项目的议题或拉取请求。
2. 在侧栏中，单击“项目”。
3. 选择要添加议题或拉取请求的项目。
4. （可选）填充自定义字段。

   ![项目侧边栏](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>将草稿议题转换为议题

在表格布局中：

1. 在要转换的草稿议题上单击 {% octicon "triangle-down" aria-label="the item menu" %}。
2. 选择“转换为问题”。
3. 选择要将议题添加到的存储库。
4. 或者，编辑要转换的草稿问题的 `labels`、`milestone` 或 `repository` 字段。

在板布局中：

1. 在要转换的草稿议题上单击 {% octicon "kebab-horizontal" aria-label="the item menu" %}。
2. 选择“转换为问题”。
3. 选择要将议题添加到的存储库。

## <a name="removing-items-from-your-project"></a>从项目中删除项

您可以对项存档以保留项目中有关该项的上下文，但将其从项目视图中移除。 您可以删除某个项以将其从项目中完全移除。

1. 选择要存档或删除的项。 要选择多个项，请执行下列操作之一：
     - <kbd>Command</kbd>+单击 (Mac) 或 <kbd>Ctrl</kbd>+单击 (Windows/Linux) 每个项。
     - 选择某项，然后按 <kbd>Shift</kbd>+<kbd>↑</kbd> 或 <kbd>Shift</kbd>+<kbd>↓</kbd> 以选择最初选择项上方或下方的其他项。
     - 选择一个项，然后按 <kbd>Shift</kbd>＋单击另一个项，以选择两个项之间的所有项。
     - 输入 <kbd>Command</kbd>+<kbd>A</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux)，以选择板布局中某一列的所有项或表格布局中的所有项。
2. 若要存档所有选定的项，请输入 <kbd>E</kbd>。若要删除所有选定的项，请输入 <kbd>Del</kbd>。或者，选择 {% octicon "triangle-down" aria-label="the item menu" %}（在表格布局中）或 {% octicon "kebab-horizontal" aria-label="the item menu" %}（在板布局中），然后选择所需的操作。

您可以恢复已存档的项，但不能恢复已删除的项。 有关详细信息，请参阅[还原存档项](#restoring-archived-items)。

## <a name="restoring-archived-items"></a>恢复存档的项

1. 导航到你的项目。
1. 单击右上角的 {% octicon "kebab-horizontal" aria-label="the kebab icon" %}。
1. 在菜单中，单击“已存档项”。
1. （可选）若要筛选显示的已存档项，请在项列表上方的文本框中键入筛选器。 有关可用筛选器的详细信息，请参阅“[筛选项目（beta 版本）](/issues/trying-out-the-new-projects-experience/filtering-projects)”。

   ![显示用于筛选已存档项的字段的屏幕截图](/assets/images/help/issues/filter-archived-items.png)
   
1. 在每个项标题的左侧，选择要还原的项。

   ![显示已存档项旁边的复选框的屏幕截图](/assets/images/help/issues/select-archived-item.png)
   
1. 若要还原所选的项，请单击项列表上方的“还原”。 

   ![显示“还原”按钮的屏幕截图](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>添加字段

随着字段值的变化，它们会自动同步，以便您的项目及其跟踪的项保持最新。

### <a name="showing-existing-fields"></a>显示现有字段

您的项目跟踪有关议题和拉取请求的最新信息，包括对标题、受理人、标签、里程碑、存储库、审阅者和链接的拉取请求所做的任何更改。 当项目初始化时，会显示“标题”和“受理人”；其他字段隐藏。 您可以更改项目中这些字段的可见性。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "show"。
3. 选择所需的命令（例如： "Show: Repository"）。

或者，您可以在界面中执行以下操作：

1. 单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。
   ![显示或隐藏字段](/assets/images/help/issues/projects_fields_menu.png)
2. 选择您想要显示或隐藏的字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。

### <a name="adding-custom-fields"></a>添加自定义字段

您可以添加自定义字段到项目。 自定义字段将显示在项目中议题和拉取请求的侧栏。

自定义字段可以是文本、数字、日期、单选或迭代：

- 文本：值可以是任何文本。
- 数字：值必须是数字。
- 日期：值必须是日期。
- 单选：必须从一组指定的值中选择值。
- 迭代：必须从一组日期范围（迭代）中选择值。 过去的迭代将自动标记为“已完成”，覆盖当前日期范围的迭代将标记为“当前”。 有关详细信息，请参阅“[管理项目中的迭代](/issues/trying-out-the-new-projects-experience/managing-iterations)”。

1. {% data reusables.projects.open-command-palette %} 开始输入 "Create new field" 的任何部分。 当 "Create new field" 显示在命令板中时，选择它。
2. 或者，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 单击“新建字段”。
3. 将显示一个弹出窗口，供您输入有关新字段的信息。
   ![新建字段](/assets/images/help/issues/projects_new_field.png)
4. 在文本框中，输入新字段的名称。
5. 选择下拉菜单并点击所需的类型。
6. 如果将类型指定为“单选”，请输入选项。
7. 如果将类型指定为“迭代”，请输入第一个迭代的开始日期和迭代的持续时间。 将自动创建三个迭代，您可以在项目的设置页上添加其他迭代。

你还可以编辑自定义字段。

{% data reusables.projects.project-settings %}
1. 在“字段”下，选择要编辑的字段。
1. 对于单选字段，您可以添加、删除或重新排序选项。
1. 对于迭代字段，您可以添加或删除迭代、更改迭代名称以及更改迭代的开始日期和持续时间。

   有关修改迭代字段的详细信息，请参阅“[管理项目中的迭代](/issues/trying-out-the-new-projects-experience/managing-iterations)”。

## <a name="customizing-your-views"></a>自定义视图

您可以将项目视为表格或板、按字段对项分组、筛选项，等等。 有关详细信息，请参阅“[自定义项目（beta 版本）视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。

## <a name="configuring-built-in-automation"></a>配置内置自动化

{% data reusables.projects.about-workflows %}

您可以为项目启用或禁用内置工作流程。

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>将项目添加到存储库

您可以在存储库中列出相关项目。 您只能列出由拥有存储库的同一用户或组织拥有的项目。

为了使存储库成员能够看到存储库中列出的项目，他们必须具有项目的可见性。 有关详细信息，请参阅“[管理项目（beta 版本）的可见性](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)”和“[管理对项目（beta 版本）的访问权限](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)”。

1. 在 {% data variables.product.prodname_dotcom %} 上，导航到仓库的主页面。
1. 单击 {% octicon "table" aria-label="the project icon" %}“项目”。
1. 单击侧栏中的“项目(beta 版本)”。
1. 单击“添加项目”。
1. 在显示的搜索栏中，搜索由拥有存储库的同一用户或组织拥有的项目。
1. 单击某个项目以将其列在您的存储库中。
