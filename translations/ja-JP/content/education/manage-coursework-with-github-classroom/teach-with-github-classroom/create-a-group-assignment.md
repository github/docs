---
title: グループ課題の作成
intro: コースに参加している学生のTeamのために、共同課題を作成できます。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179761'
---
## グループ課題について

{% data reusables.classroom.assignments-group-definition %}学生は、プロフェッショナルな開発者チームと同じように、共有リポジトリでグループ課題に協力して取り組むことができます。

グループ課題を受け入れた学生は、新しいTeamを作成するか、既存のTeamに参加できます。 {% data variables.product.prodname_classroom %}は、課題のためのTeamをセットとして保存します。 課題を作成する際、特定の課題に対するTeamのセットに名前を付けることができます。また、後の課題でTeamのセットを再利用できます。

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

1つの課題に取り組むチームの数と、各Teamのメンバーの数を決めることができます。 学生が課題ために作成する各グループは、{% data variables.product.product_name %}のOrganization内のTeamです。 Teamの可視性はシークレットとなります。 {% data variables.product.product_name %}上で作成したTeamは、{% data variables.product.prodname_classroom %}では表示されません。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

グループ課題の作成のビデオ デモについては、「[{% data variables.product.prodname_classroom %} のセットアップの基本](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)」を参照してください。

{% data reusables.classroom.reuse-assignment-link %}

## 前提条件

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 課題を作成する

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## 課題の基本情報をセットアップする

課題に名前を付け、期限を設定するか、Teamを定義するかを決定し、課題リポジトリの可視性を選択します。

- [課題に名前を付ける](#naming-an-assignment)
- [課題に期限を設定する](#assigning-a-deadline-for-an-assignment)
- [課題のタイプを選択する](#choosing-an-assignment-type)
- [課題の Team を定義する](#defining-teams-for-an-assignment)
- [課題リポジトリの可視性を選択する](#choosing-a-visibility-for-assignment-repositories)

### 課題に名前を付ける

グループ課題では、{% data variables.product.prodname_classroom %}はリポジトリのプレフィックスとTeamの名前から、リポジトリに名前を付けます。 デフォルトでは、リポジトリのプレフィックスが課題のタイトルとなります。 たとえば、課題に "assignment-1" という名前を付けて、{% data variables.product.product_name %} での Team の名前名が "student-team" である場合、Team のメンバーの課題リポジトリの名前は `assignment-1-student-team` になります。

{% data reusables.classroom.assignments-type-a-title %}

### 課題に期限を設定する

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 課題のタイプを選択する

[個人またはグループの課題] でドロップダウン メニューを選択して、 **[グループの課題]** をクリックします。 課題の作成後は、課題タイプを変更できません。 個人の課題を作成する場合は、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」を参照してください。

### 課題のTeamを定義する

すでにクラスルームに対してグループ課題を作成している場合は、新しい課題にTeamのセットを再利用できます。 学生が課題用に作成したTeamで新しいセットを作成するには、そのセットの名前を入力します。 必要に応じて、Teamメンバーと合計チーム数の上限を入力してください。

{% tip %}

**ヒント**:

- セットの名前には、Teamのセットについの情報を含めることをお勧めします。 たとえば、1つの課題用にTeamのセットを使う場合は、その課題にちなんだ名前を付けます。 学期またはコースを通じてセットを再利用する場合は、学期またはコースにちなんだ名前を付けます。

- 特定のTeamに学生を割り当てる場合は、学生にTeamの名前を伝え、メンバーのリストを提供します。

{% endtip %}

![グループ課題に参加するチームのパラメータ](/assets/images/help/classroom/assignments-define-teams.png)

### 課題リポジトリの可視性を選択する

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## スターターコードを追加し、開発環境を構成する

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [テンプレートリポジトリを作成する](#choosing-a-template-repository)
- [統合開発環境 (IDE) を選択する](#choosing-an-integrated-development-environment-ide)

### テンプレートリポジトリを作成する

デフォルトでは、新しい課題では学生が作成した各Teamに対し、空のリポジトリが作成されます。 {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### 統合開発環境 (IDE) を選択する

{% data reusables.classroom.about-online-ides %}詳細については、「[{% data variables.product.prodname_classroom %} と IDE の統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)」を参照してください。

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## フィードバックの提供

必要に応じて、課題を自動的に採点し、各提出物をTeamで議論するための場を作成できます。

- [課題を自動的にテストする](#testing-assignments-automatically)
- [フィードバックのために pull request を作成する](#creating-a-pull-request-for-feedback)

### 課題を自動的にテストする

{% data reusables.classroom.assignments-guide-using-autograding %}

### フィードバックのためにプルリクエストを作成する

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## 学生を課題に招待する

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

課題の **[チーム]** タブで、課題を作業している、または提出済みのチームを確認できます。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## 学生の進捗状況を監視する
課題の概要ページには、課題の受け入れとチームの進捗状況に関する情報が表示されます。 課題の構成に基づいて、表示される概要情報が異なる場合があります。

- **[チームの合計数]** : 作成されたチームの数。
- **[名簿に登録された学生]** : Classroom の名簿に登録されている学生の数。
- **[チームに参加していない学生]** : Classroom の名簿でチームにまだ参加していない学生の数。
-  **[承認済みチーム]** : この課題を受け入れたチームの数。
-  **[課題の提出]** : 課題を提出したチームの数。 提出は、課題の期限にトリガーされます。
-  **[合格したチーム]** : 現在、この課題の自動採点テストに合格しているチームの数。

## 次の手順

- 課題を作成し、学生がTeamを編成した後、TeamメンバーはGitと{% data variables.product.product_name %}の機能を使用して課題を開始できます。 学生はリポジトリのクローン、コミットのプッシュ、ブランチの管理、プルリクエストの作成およびレビュー、マージコンフリクトへの対処、およびIssueの変更に関するディスカッションが可能です。 あなたもTeamも、リポジトリのコミット履歴をレビューできます。 詳細については、「[{% data variables.product.prodname_dotcom %} の概要](/github/getting-started-with-github)」、「[リポジトリ](/repositories)」、「[Git を使用する](/github/getting-started-with-github/using-git)」、「[issue と pull request を使用したコラボレーション](/github/collaborating-with-issues-and-pull-requests)」、および {% data variables.product.prodname_learning %} の[マージの競合の解決](https://github.com/skills/resolve-merge-conflicts)に関する無料コースを参照してください。

- 課題を完了したチームがある場合は、そのリポジトリにあるファイルをレビューできます。また、チームがどのように協力したかをより深く理解するため、リポジトリの履歴や視覚化されたデータを確認できます。 詳細については、[グラフを使用したリポジトリ データの視覚化](/github/visualizing-repository-data-with-graphs)に関する記事を参照してください。

- プルリクエストの内の個々のコミットや行にコメントすることで、課題にフィードバックを行うことができます。 詳細については、「[pull request へコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」および[コードから issue を開く方法](/github/managing-your-work-on-github/opening-an-issue-from-code)に関する記事を参照してください。 返信テンプレートを作成して一般的なエラーに関するフィードバックを提供する方法の詳細については、「[返信テンプレートについて](/github/writing-on-github/about-saved-replies)」を参照してください。

## 参考資料

- [教師向け {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- 「[学習管理システムのコースをクラスルームに接続する](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)」
- {% data variables.product.prodname_education %} Community の「[グループ課題における既存チームの使用](https://education.github.community/t/using-existing-teams-in-group-assignments/6999)」
