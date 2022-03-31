---
title: 创建个人作业
intro: 您可以为课程中的学生创建需单独完成的作业。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: 个人作业
---

## 关于个人作业

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

有关创建个人作业的视频演示，请参阅“[设置 {% data variables.product.prodname_classroom %} 的基本知识](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)”。

## 基本要求

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 创建作业

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## 设置作业的基本信息

指定作业的名称，决定是否分配截止时间，并选择作业仓库的可见性。

- [指定作业名称](#naming-an-assignment)
- [分配作业的截止时间](#assigning-a-deadline-for-an-assignment)
- [选择作业类型](#choosing-an-assignment-type)
- [选择作业仓库的可见性](#choosing-a-visibility-for-assignment-repositories)

### 指定作业名称

对于个人作业，{% data variables.product.prodname_classroom %} 使用仓库前缀和学生的 {% data variables.product.product_name %} 用户名对仓库命名。 默认情况下，仓库前缀是作业标题。 例如，如果您对作业 "assignment-1" 命名，学生在 {% data variables.product.product_name %} 上的用户名是 @octocat，则 @octocat 的作业仓库的名称将是 `assignment-1-octocat`。

{% data reusables.classroom.assignments-type-a-title %}

### 分配作业的截止时间

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 选择作业类型

在“Individual or group assignment（个人或小组作业）”下，选择下拉菜单，然后单击 **Individual assignment（个人作业）**。 创建作业后不可更改作业类型。 如果要创建小组作业，请参阅“[创建小组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”。

### 选择作业仓库的可见性

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## 添加起始代码并配置开发环境

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [选择模板仓库](#choosing-a-template-repository)
- [选择集成开发环境 (IDE)](#choosing-an-integrated-development-environment-ide)

### 选择模板仓库

默认情况下，新作业将为教室名册上的每个学生创建一个空仓库。 {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### 选择集成开发环境 (IDE)

{% data reusables.classroom.about-online-ides %} 更多信息请参阅“[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)”。

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## 为作业提供反馈

（可选）您可以自动对作业进行分级，并创建一个空间，用于与学生讨论每个提交。

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

您可以在作业的 **Classroom roster（课堂花名册）**选项卡中查看学生是否已进入教室或提交作业。 您还可以在此选项卡中将学生的 {% data variables.product.prodname_dotcom %} 别名链接到其关联的花名册标识符，反之亦然。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="个人作业" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## 监控学生的进度
作业概述页面提供了作业接受情况和学生进度的概述。 根据作业的配置，您可能有不同的摘要信息。

- **名册学生**：教室名册上的学生人数。
- **已添加的学生**：已接受作业且未与名册标识符关联的 {% data variables.product.prodname_dotcom %} 帐户数。
-  **已接受的学生**：已接受此作业的帐户数。
-  **作业提交**：已提交作业的学生人数。 在作业截止日期触发提交。
-  **及格学生**：当前通过此作业的自动评分测试的学生人数。

## 后续步骤

- 在创建作业后，学生可以使用 Git 和 {% data variables.product.product_name %} 的功能开始处理作业。 学生可以克隆仓库、推送提交、管理分支、创建和审查拉取请求、解决合并冲突以及讨论议题的更改。 您和学生都可以审查仓库的提交历史记录。 更多信息请参阅“[开始使用 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)”、“[仓库](/repositories)”和“[协作处理议题和拉取请求](/github/collaborating-with-issues-and-pull-requests)”。

- 当学生完成作业时，您可以查看仓库中的文件，或者查看仓库的历史和可视化内容，以更好地了解学生的工作。 更多信息请参阅“[使用图表可视化仓库](/github/visualizing-repository-data-with-graphs)”。

- 您可以通过在拉取请求中评论个别提交或行来提供作业反馈。 更多信息请参阅“[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”和“[从代码打开议题](/github/managing-your-work-on-github/opening-an-issue-from-code)”。 有关创建已保存回复以对常见错误提供反馈的信息，请参阅“[关于已保存回复](/github/writing-on-github/about-saved-replies)”。

## 延伸阅读

- "[在课堂和研究中使用 {% data variables.product.prodname_dotcom %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[将学习管理系统连接到 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
