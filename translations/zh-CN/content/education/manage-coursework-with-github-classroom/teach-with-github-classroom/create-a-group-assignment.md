---
title: 创建组分配
intro: 您可以为参加您课程的学生团队创建协作作业。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
---

## 关于组分配

{% data reusables.classroom.assignments-group-definition %} 学生可以像专业开发人员团队一样，在共享仓库中共同完成小组作业。

当学生接受小组作业时，该学生可以创建新团队或加入现有团队。 {% data variables.product.prodname_classroom %} 将任务团队保存为集合。 您可以在创建作业时为特定作业指定一组团队，并且在后面的作业中可以重复使用该组团队。

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

您可以决定一个任务可以拥有多少个团队，以及每个团队可以拥有多少成员。 学生为作业创建的每个团队都是 {% data variables.product.product_name %} 上组织内的团队。 团队的可见性是秘密。 您在 {% data variables.product.product_name %} 上创建的团队不会出现在 {% data variables.product.prodname_classroom %} 中。 更多信息请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

有关创建小组作业的视频演示，请参阅“[设置 {% data variables.product.prodname_classroom %} 的基本知识](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)”。

{% data reusables.classroom.reuse-assignment-link %}

## 基本要求

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 创建作业

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## 设置作业的基本信息

指定作业的名称，决定是否分配截止时间，确定团队，并选择作业仓库的可见性。

- [指定作业名称](#naming-an-assignment)
- [分配作业的截止时间](#assigning-a-deadline-for-an-assignment)
- [选择作业类型](#choosing-an-assignment-type)
- [确定作业的团队](#defining-teams-for-an-assignment)
- [选择作业仓库的可见性](#choosing-a-visibility-for-assignment-repositories)

### 指定作业名称

对于小组作业，{% data variables.product.prodname_classroom %} 使用仓库前缀和团队名称对仓库命名。 默认情况下，仓库前缀是作业标题。 例如，如果将作业命名为 "assignment-1"，而团队在 {% data variables.product.product_name %} 上的名称是 "student-team"，则团队成员的作业仓库的名称将是 `assignment-1-student-team`。

{% data reusables.classroom.assignments-type-a-title %}

### 分配作业的截止时间

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 选择作业类型

在“Individual or group assignment（个人或小组作业）”下，选择下拉菜单，然后单击 **Group assignment（小组作业）**。 创建作业后不可更改作业类型。 如果要创建个人作业，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”。

### 确定作业的团队

如果已为教室创建了小组作业，可以对新作业重复使用一组团队。 要使用学生为作业创建的团队创建一个新组，请输入组的名称。 （可选）键入团队成员和团队总数的最大数量。

{% tip %}

**提示**：

- 我们建议在组的名称中包含有关该组团队的详细信息。 例如，如果要对某个作业使用团队组，请以作业命名该组。 如果要在整个学期或课程中重复使用该组，请以学期或课程命名该组。

- 如果想将学生分配到特定团队，请为学生指定团队的名称并提供成员列表。

{% endtip %}

![用于参与小组作业的团队的参数](/assets/images/help/classroom/assignments-define-teams.png)

### 选择作业仓库的可见性

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## 添加起始代码并配置开发环境

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [选择模板仓库](#choosing-a-template-repository)
- [选择集成开发环境 (IDE)](#choosing-an-integrated-development-environment-ide)

### 选择模板仓库

默认情况下，新作业将为学生创建的每个团队创建一个空仓库。 {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### 选择集成开发环境 (IDE)

{% data reusables.classroom.about-online-ides %} 更多信息请参阅“[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)”。

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## 提供反馈

（可选）您可以自动对作业进行分级，并创建一个空间，用于与团队讨论每个提交。

- [自动测试作业](#testing-assignments-automatically)
- [为反馈创建拉取请求](#creating-a-pull-request-for-feedback)

### 自动测试作业

{% data reusables.classroom.assignments-guide-using-autograding %}

### 为反馈创建拉取请求

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## 邀请学生参加作业

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

您可以在作业的 **Teams（团队）**选项卡中查看正在处理或已提交作业的团队。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="组分配" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## 监控学生的进度
作业概述页显示有关作业接受和团队进度的信息。 根据作业的配置，您可能有不同的摘要信息。

- **团队总数**：已创建的团队数。
- **名册学生**：教室名册上的学生人数。
- **不在团队的学生**：课堂名册上尚未加入团队的学生人数。
-  **接受的团队**：已接受此任务的团队数。
-  **作业提交**：已提交作业的团队数。 在作业截止日期触发提交。
-  **通过团队**：当前通过此作业的自动评分测试的团队数。

## 后续步骤

- 在创建作业和学生组成团队后，团队成员可以使用 Git 和 {% data variables.product.product_name %} 的功能开始处理作业。 学生可以克隆仓库、推送提交、管理分支、创建和审查拉取请求、解决合并冲突以及讨论议题的更改。 您和团队都可以审查仓库的提交历史记录。 For more information, see "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Repositories](/repositories)," "[Using Git](/github/getting-started-with-github/using-git)," and "[Collaborating with issues and pull requests](/github/collaborating-with-issues-and-pull-requests)," and the free course on [resolving merge conflicts](https://github.com/skills/resolve-merge-conflicts) from {% data variables.product.prodname_learning %}.

- 当团队完成作业时，您可以查看仓库中的文件，或者查看仓库的历史和可视化内容，以更好地了解团队如何协作。 更多信息请参阅“[使用图表可视化仓库](/github/visualizing-repository-data-with-graphs)”。

- 您可以通过在拉取请求中评论个别提交或行来提供作业反馈。 更多信息请参阅“[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”和“[从代码打开议题](/github/managing-your-work-on-github/opening-an-issue-from-code)”。 有关创建已保存回复以对常见错误提供反馈的信息，请参阅“[关于已保存回复](/github/writing-on-github/about-saved-replies)”。

## 延伸阅读

- "[在课堂和研究中使用 {% data variables.product.prodname_dotcom %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[将学习管理系统连接到 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
- {% data variables.product.prodname_education %} 社区中的[在小组作业中使用现有团队吗？](https://education.github.community/t/using-existing-teams-in-group-assignments/6999)
