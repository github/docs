---
title: Use the Git and GitHub starter assignment
intro: 'You can use the Git & {% data variables.product.company_short %} starter assignment to give students an overview of Git and {% data variables.product.company_short %} fundamentals.'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
---

{% note %}

**Note:** The Git & {% data variables.product.company_short %} starter assignment is in beta and subject to change.

{% endnote %}

The Git & {% data variables.product.company_short %} starter assignment is a pre-made course that summarizes the basics of Git and {% data variables.product.company_short %} and links students to resources to learn more about specific topics.

### 必要な環境

{% data reusables.classroom.assignments-classroom-prerequisite %}

### Creating the starter assignment

#### If there are no existing assignments in the classroom

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
2. Navigate to a classroom.
3. In the {% octicon "repo" aria-label="The repo icon" %} **Assignments** tab, click  **Use starter assignment**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

#### If there already are existing assignments in the classroom

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
2. Navigate to a classroom.
3. In the {% octicon "repo" aria-label="The repo icon" %} **Assignments** tab, click the link on the blue banner.

<div class="procedural-image-wrapper">
  <img alt="'新しい課題'ボタン" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

### 課題の基本情報をセットアップする

Import the starter course into your organization, name your assignment, decide whether to assign a deadline, and choose the visibility of assignment repositories.

- [Importing the assignment](#importing-the-assignment)
- [課題に名前を付ける](#naming-an-assignment)
- [課題に期限を設定する](#assigning-a-deadline-for-an-assignment)
- [課題のタイプを選択する](#choosing-an-assignment-type)
- [課題リポジトリの可視性を選択する](#choosing-a-visibility-for-assignment-repositories)

#### Importing the assignment

You first need to import the Git & {% data variables.product.product_name %} starter assignment into your organization.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

#### Naming the assignment

個人課題では、{% data variables.product.prodname_classroom %}はリポジトリのプレフィックスと学生の{% data variables.product.product_name %}ユーザ名から、リポジトリに名前を付けます。 デフォルトでは、リポジトリのプレフィックスが課題のタイトルとなります。 たとえば、課題に「assignment-1」と名付け、学生の{% data variables.product.product_name %}ユーザ名が「@octocat」である場合、「@octocat」の課題リポジトリ名は「`assignment-1-octocat`」となります。

{% data reusables.classroom.assignments-type-a-title %}

#### 課題に期限を設定する

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### 課題リポジトリの可視性を選択する

課題のためのリポジトリは、パブリックにもプライベートにもできます。 If you use private repositories, only the student can see the feedback you provide. Under "Repository visibility," select a visibility.

When you're done, click **Continue**. {% data variables.product.prodname_classroom %} will create the assignment and bring you to the assignment page.

<div class="procedural-image-wrapper">
  <img alt="'続ける'ボタン" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

### 学生を課題に招待する

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

課題の [**All students**] タブで、学生がクラスルームに参加して課題を受け入れたかや、サブミットしたかを表示できます。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="個人課題" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

The Git & {% data variables.product.company_short %} starter assignment is only available for individual students, not for groups. Once you create the assignment, students can start work on the assignment.

### 次のステップ

- Make additional assignments customized to your course. For more information, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" and "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

### 参考リンク

- 「[教室や研究で{% data variables.product.prodname_dotcom %}を使う](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)」
- 「[学習管理システムを{% data variables.product.prodname_classroom %}に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)」
