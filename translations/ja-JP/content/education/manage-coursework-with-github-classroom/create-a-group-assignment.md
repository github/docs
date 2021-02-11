---
title: グループ課題の作成
intro: 'コースに参加している学生のチームのために、共同課題を作成できます。'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
---

### グループ課題について

{% data reusables.classroom.assignments-group-definition %}学生は、プロフェッショナルな開発者チームと同じように、共有リポジトリでグループ課題に協力して取り組むことができます。

グループ課題を受け入れた学生は、新しいTeamを作成するか、既存のTeamに参加できます。 {% data variables.product.prodname_classroom %}は、課題のためのTeamをセットとして保存します。 課題を作成する際、特定の課題に対するTeamのセットに名前を付けることができます。また、後の課題でTeamのセットを再利用できます。

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

1つの課題に取り組むチームの数と、各Teamのメンバーの数を決めることができます。 学生が課題ために作成する各グループは、{% data variables.product.product_name %}のOrganization内のTeamです。 Teamの可視性はシークレットとなります。 {% data variables.product.product_name %}上で作成したTeamは、{% data variables.product.prodname_classroom %}では表示されません。 詳細は「[Team について](/github/setting-up-and-managing-organizations-and-teams/about-teams)」を参照してください。

グループ課題作成の方法を説明する動画については、「[{% data variables.product.prodname_classroom %}の設定の基本](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)」を参照してください。

### 必要な環境

{% data reusables.classroom.assignments-classroom-prerequisite %}

### 課題を作成する

{% data reusables.classroom.assignments-guide-create-the-assignment %}

### 課題の基本情報をセットアップする

課題に名前を付け、期限を設定するか、Teamを定義するかを決定し、課題リポジトリの可視性を選択します。

- [課題に名前を付ける](#naming-an-assignment)
- [課題に期限を設定する](#assigning-a-deadline-for-an-assignment)
- [課題のタイプを選択する](#choosing-an-assignment-type)
- [課題のTeamを定義する](#defining-teams-for-an-assignment)
- [課題リポジトリの可視性を選択する](#choosing-a-visibility-for-assignment-repositories)

#### 課題に名前を付ける

グループ課題では、{% data variables.product.prodname_classroom %}はリポジトリのプレフィックスとTeamの名前から、リポジトリに名前を付けます。 デフォルトでは、リポジトリのプレフィックスが課題のタイトルとなります。 たとえば、課題に「assignment-1」と名付け、{% data variables.product.product_name %}のチーム名が「student-team」である場合、そのTeamのメンバーの課題リポジトリ名は「`assignment-1-student-team`」となります。

{% data reusables.classroom.assignments-type-a-title %}

#### 課題に期限を設定する

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### 課題のタイプを選択する

[Individual or group assignment] の下で、ドロップダウンメニューを選択し、[**Group assignment**] をクリックします。 課題の作成後は、課題タイプを変更できません。 個人課題を作成する場合は、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」を参照してください。

#### 課題のTeamを定義する

すでにクラスルームに対してグループ課題を作成している場合は、新しい課題にTeamのセットを再利用できます。 学生が課題用に作成したTeamで新しいセットを作成するには、そのセットの名前を入力します。 必要に応じて、Teamメンバーと合計チーム数の上限を入力してください。

{% tip %}

**ヒント**:

- セットの名前には、Teamのセットについの情報を含めることをお勧めします。 たとえば、1つの課題用にTeamのセットを使う場合は、その課題にちなんだ名前を付けます。 学期またはコースを通じてセットを再利用する場合は、学期またはコースにちなんだ名前を付けます。

- 特定のTeamに学生を割り当てる場合は、学生にTeamの名前を伝え、メンバーのリストを提供します。

{% endtip %}

![Parameters for the teams participating in a group assignment](/assets/images/help/classroom/assignments-define-teams.png)

#### 課題リポジトリの可視性を選択する

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

### スターターコードを追加し、開発環境を構成する

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [テンプレートリポジトリを作成する](#choosing-a-template-repository)
- [オンライン統合開発環境 (IDE) を選択する](#choosing-an-online-integrated-development-environment-ide)

#### テンプレートリポジトリを作成する

デフォルトでは、新しい課題では学生が作成した各Teamに対し、空のリポジトリが作成されます。 {% data reusables.classroom.you-can-choose-a-template-repository %}テンプレートリポジトリに関する詳しい情報については、「[テンプレートリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)」を参照してください。

{% data reusables.classroom.assignments-guide-choose-template-repository %}

#### オンライン統合開発環境 (IDE) を選択する

{% data reusables.classroom.about-online-ides %} For more information, see "[Integrate {% data variables.product.prodname_classroom %} with an IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Providing feedback

Optionally, you can automatically grade assignments and create a space for discussing each submission with the team.

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

You can see the teams that are working on or have submitted an assignment in the **Teams** tab for the assignment. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

### 次のステップ

- After you create the assignment and your students form teams, team members can start work on the assignment using Git and {% data variables.product.product_name %}'s features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and the team can review the commit history for the repository. For more information, see "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Creating, cloning, and archiving repositories](/github/creating-cloning-and-archiving-repositories)," "[Using Git](/github/using-git)," and "[Collaborating with issues and pull requests](/github/collaborating-with-issues-and-pull-requests)," and the free course on [managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts) from {% data variables.product.prodname_learning %}.

- When a team finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand how the team collaborated. For more information, see "[Visualizing repository data with graphs](/github/visualizing-repository-data-with-graphs)."

- You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see "[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" and "[Opening an issue from code](/github/managing-your-work-on-github/opening-an-issue-from-code)." For more information about creating saved replies to provide feedback for common errors, see "[About saved replies](/github/writing-on-github/about-saved-replies)."

### 参考リンク

- "[Use {% data variables.product.prodname_dotcom %} in your classroom and research](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Connect a learning management system to {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
- [Using Existing Teams in Group Assignments?](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) in the {% data variables.product.prodname_education %} Community
