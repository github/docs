---
title: 使用 Git 和 GitHub 起始作业
intro: '可以使用 Git 和 {% data variables.product.company_short %} 入门作业，让学生全面了解 Git 和 {% data variables.product.company_short %} 基础知识。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574010'
---
Git 和 {% data variables.product.company_short %} 入门作业是一个预制课程，概括了 Git 和 {% data variables.product.company_short %} 的基础知识，并将学生与资源联系起来以了解更多关于具体主题的信息。

## 先决条件

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 创建起始作业

### 如果在课堂中没有现有作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
2. 导航到教室。
3. 在 {% octicon "repo" aria-label="The repo icon" %}“作业”选项卡中，单击“使用入门作业” 。

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### 如果在课堂中已经有现有作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
2. 导航到教室。
3. 在 {% octicon "repo" aria-label="The repo icon" %}“作业”选项卡中，单击蓝色横幅上的链接。

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## 设置作业的基本信息

将入门课程导入您的组织，命名您的作业，决定是否分配截止日期，并选择分配仓库的可见性。

- [先决条件](#prerequisites)
- [创建入门作业](#creating-the-starter-assignment)
  - [如果在课堂中没有现有作业](#if-there-are-no-existing-assignments-in-the-classroom)
  - [如果在课堂中已经有现有作业](#if-there-already-are-existing-assignments-in-the-classroom)
- [设置作业的基本信息](#setting-up-the-basics-for-an-assignment)
  - [导入作业](#importing-the-assignment)
  - [命名作业](#naming-the-assignment)
  - [分配作业的截止时间](#assigning-a-deadline-for-an-assignment)
  - [选择作业存储库的可见性](#choosing-a-visibility-for-assignment-repositories)
- [邀请学生参加作业](#inviting-students-to-an-assignment)
- [后续步骤](#next-steps)
-               进一步阅读

### 导入作业

你首先需要将 Git 和 {% data variables.product.product_name %} 入门作业导入你的组织。

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### 命名作业

对于个人作业，{% data variables.product.prodname_classroom %} 使用仓库前缀和学生的 {% data variables.product.product_name %} 用户名对仓库命名。 默认情况下，仓库前缀是作业标题。 例如，如果你对作业 "assignment-1" 命名，学生在 {% data variables.product.product_name %} 上的用户名是 @octocat，则 @octocat 的作业存储库的名称将是 `assignment-1-octocat`。

{% data reusables.classroom.assignments-type-a-title %}

### 分配作业的截止时间

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 选择作业仓库的可见性

作业的仓库可以是公开或私有的。 如果您使用私有仓库，只有学生可以查看您提供的反馈。 在“Repository visibility（仓库可见性）”下，选择可见性。

完成后，单击“继续”。 {% data variables.product.prodname_classroom %} 将创建作业并将您带到作业页面。

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## 邀请学生参加作业

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

你可以在作业的“所有学生”选项卡中查看学生是否已进入教室以及是否接受或提交作业。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Git 和 {% data variables.product.company_short %} 入门作业只适用于个别学生，不适用于组。 一旦您创建作业，学生可以开始做作业。

## 后续步骤

- 根据课程定制其他作业。 有关详细信息，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”、“[创建组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”和“[重复使用作业](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)”。

## 延伸阅读

- [教师版 {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- [将学习管理系统连接到 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)
