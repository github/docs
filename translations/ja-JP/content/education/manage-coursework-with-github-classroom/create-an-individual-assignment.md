---
title: Create an individual assignment
intro: You can create an assignment for students in your course to complete individually.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
---

### About individual assignments

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

For a video demonstration of the creation of an individual assignment, see "[Basics of setting up {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)."

### 必要な環境

{% data reusables.classroom.assignments-classroom-prerequisite %}

### 課題を作成する

{% data reusables.classroom.assignments-guide-create-the-assignment %}

### 課題の基本情報をセットアップする

Name your assignment, decide whether to assign a deadline, and choose the visibility of assignment repositories.

- [課題に名前を付ける](#naming-an-assignment)
- [課題に期限を設定する](#assigning-a-deadline-for-an-assignment)
- [課題のタイプを選択する](#choosing-an-assignment-type)
- [課題リポジトリの可視性を選択する](#choosing-a-visibility-for-assignment-repositories)

#### 課題に名前を付ける

For an individual assignment, {% data variables.product.prodname_classroom %} names repositories by the repository prefix and the student's {% data variables.product.product_name %} username. デフォルトでは、リポジトリのプレフィックスが課題のタイトルとなります。 For example, if you name an assignment "assignment-1" and the student's username on {% data variables.product.product_name %} is @octocat, the name of the assignment repository for @octocat will be `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

#### 課題に期限を設定する

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### 課題のタイプを選択する

Under "Individual or group assignment", select the drop-down menu, and click **Individual assignment**. 課題の作成後は、課題タイプを変更できません。 If you'd rather create a group assignment, see "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

#### 課題リポジトリの可視性を選択する

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

### スターターコードを追加し、開発環境を構成する

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [テンプレートリポジトリを作成する](#choosing-a-template-repository)
- [オンライン統合開発環境 (IDE) を選択する](#choosing-an-online-integrated-development-environment-ide)

#### テンプレートリポジトリを作成する

By default, a new assignment will create an empty repository for each student on the roster for the classroom. {% data reusables.classroom.you-can-choose-a-template-repository %}テンプレートリポジトリに関する詳しい情報については、「[テンプレートリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)」を参照してください。

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

#### オンライン統合開発環境 (IDE) を選択する

{% data reusables.classroom.about-online-ides %} For more information, see "[Integrate {% data variables.product.prodname_classroom %} with an IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

### Providing feedback for an assignment

Optionally, you can automatically grade assignments and create a space for discussing each submission with the student.

- [Testing assignments automatically](#testing-assignments-automatically)
- [Preventing changes to important files](#preventing-changes-to-important-files)
- [Creating a pull request for feedback](#creating-a-pull-request-for-feedback)

#### Testing assignments automatically

{% data reusables.classroom.assignments-guide-using-autograding %}

#### Preventing changes to important files

{% data reusables.classroom.assignments-guide-prevent-changes %}

#### Creating a pull request for feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

### Inviting students to an assignment

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

You can see whether a student has joined the classroom and accepted or submitted an assignment in the **All students** tab for the assignment. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

### 次のステップ

- Once you create the assignment, students can start work on the assignment using Git and {% data variables.product.product_name %}'s features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and student can review the commit history for the repository. For more information, see "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Creating, cloning, and archiving repositories](/github/creating-cloning-and-archiving-repositories)," "[Using Git](/github/using-git)," and "[Collaborating with issues and pull requests](/github/collaborating-with-issues-and-pull-requests)."

- When a student finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand the student's work. For more information, see "[Visualizing repository data with graphs](/github/visualizing-repository-data-with-graphs)."

- You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see "[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" and "[Opening an issue from code](/github/managing-your-work-on-github/opening-an-issue-from-code)." For more information about creating saved replies to provide feedback for common errors, see "[About saved replies](/github/writing-on-github/about-saved-replies)."

### 参考リンク

- "[Use {% data variables.product.prodname_dotcom %} in your classroom and research](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Connect a learning management system to {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
