---
title: 创建项目（测试版）
intro: 了解如何创建项目、填充项目并添加自定义字段。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: quick_start
topics:
  - Projects
---

项目是可自定义的项集合，可随 {% data variables.product.company_short %} 数据保持最新状态。 您的项目可以跟踪议题、拉取请求以及您加入的想法。 您可以添加自定义字段并为特定目的创建视图。

{% data reusables.projects.projects-beta %}

## 创建项目

{% data reusables.projects.create-project %}

## 为您的项目添加项

您的项目可以跟踪草稿议题、议题和拉取请求。

### 创建草稿议题

草稿议题有助于快速捕获想法。

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
2. 输入您的想法，然后按 **Enter**。

### 议题和拉取请求

#### 粘贴议题或拉取请求的 URL

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 粘贴议题或拉取请求的 URL。

#### 搜索议题或拉取请求

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
2. 输入 `#`。
3. 选择拉取请求或议题所在的仓库。 您可以输入仓库名称的一部分来缩小选项范围。
4. 选择议题或拉取请求。 您可以键入标题的一部分以缩小选项范围。

#### 从议题或拉取请求中分配项目

1. 导航到要添加到项目的议题或拉取请求。
2. 在侧边栏中，单击 **Projects（项目）**。
3. 选择要添加议题或拉取请求的项目。
4. （可选）填充自定义字段。

   ![项目侧边栏](/assets/images/help/issues/project_side_bar.png)

## 添加字段

随着字段值的变化，它们会自动同步，以便您的项目及其跟踪的项保持最新。

{% note %}

**注意：** 在向项目添加至少一个项之前，您无法编辑或添加字段。

{% endnote %}

### 显示现有字段

您的项目跟踪有关议题和拉取请求的最新信息，包括标题、受理人、标签、里程碑和仓库的任何更改。 当项目初始化时，会显示“标题”和“受理人”；其他字段隐藏。 您可以更改项目中这些字段的可见性。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "show"。
3. 选择所需的命令（例如： "Show: Repository"）。

或者，您可以在界面中执行以下操作：

1. 单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 ![显示或隐藏字段](/assets/images/help/issues/projects_fields_menu.png)
2. 选择您想要显示或隐藏的字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。

### 添加自定义字段

您可以添加自定义字段到项目。 自定义字段可以是文本、数字、日期或单个选择。 自定义字段将显示在项目中议题和拉取请求的侧栏。

1. {% data reusables.projects.open-command-palette %} 开始输入 "Create new field" 的任何部分。 当 "Create new field" 显示在命令板中时，选择它。
2. 或者，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 单击 **New field（新建字段）**。
3. 将显示一个弹出窗口，供您输入有关新字段的信息。 ![新建字段](/assets/images/help/issues/projects_new_field.png)
4. 在文本框中，输入新字段的名称。
5. 选择下拉菜单并点击所需的类型。
6. 如果您指定 "single select" 为类型，请输入选项。

## 自定义视图

您可以将项目视为表格或板、按字段对项分组、筛选项，等等。 更多信息请参阅“[自定义项目（测试版）视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。
