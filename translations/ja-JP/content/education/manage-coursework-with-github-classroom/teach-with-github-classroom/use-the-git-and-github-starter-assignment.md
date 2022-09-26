---
title: Git と GitHub の初心者用課題を使用する
intro: 'Git と {% data variables.product.company_short %} の初心者用課題を使用して、Git と {% data variables.product.company_short %} の基礎の概要を学生に提供できます。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574013'
---
Git と {% data variables.product.company_short %} の初心者用課題は、Git と {% data variables.product.company_short %} の基本がまとめられている事前に作成されたコースであり、学生を特定のトピックの詳細について学習するためのリソースにリンクします。

## 前提条件

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 初心者用課題の作成

### クラスルームに既存の課題がない場合

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
2. クラスルームにアクセスしてください。
3. {% octicon "repo" aria-label="The repo icon" %} **[課題]** タブで、 **[初心者用課題の使用]** をクリックします。

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### クラスルームに既存の課題がある場合

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
2. クラスルームにアクセスしてください。
3. {% octicon "repo" aria-label="The repo icon" %} **[割り当て]** タブで、青いバナーのリンクをクリックします。

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## 課題の基本情報をセットアップする

初心者コースを組織にインポートし、課題に名前を付け、期限を設けるかどうかを決定して、課題リポジトリの可視性を選択します。

- [前提条件](#prerequisites)
- [初心者用課題の作成](#creating-the-starter-assignment)
  - [クラスルームに既存の課題がない場合](#if-there-are-no-existing-assignments-in-the-classroom)
  - [クラスルームに既存の課題がある場合](#if-there-already-are-existing-assignments-in-the-classroom)
- [課題の基本情報の設定](#setting-up-the-basics-for-an-assignment)
  - [課題のインポート](#importing-the-assignment)
  - [課題の名前の設定](#naming-the-assignment)
  - [課題への期限の設定](#assigning-a-deadline-for-an-assignment)
  - [課題リポジトリの可視性の選択](#choosing-a-visibility-for-assignment-repositories)
- [課題への学生の招待](#inviting-students-to-an-assignment)
- [次の手順](#next-steps)
- [参考資料](#further-reading)

### 課題のインポート

最初に、Git と {% data variables.product.product_name %} の初心者用課題を組織にインポートする必要があります。

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### 課題の名前の設定

個人課題では、{% data variables.product.prodname_classroom %}はリポジトリのプレフィックスと学生の{% data variables.product.product_name %}ユーザ名から、リポジトリに名前を付けます。 デフォルトでは、リポジトリのプレフィックスが課題のタイトルとなります。 たとえば、課題に "assignment-1" という名前を付け、{% data variables.product.product_name %} での学生のユーザー名が @octocat である場合、@octocat の課題リポジトリの名前は `assignment-1-octocat` になります。

{% data reusables.classroom.assignments-type-a-title %}

### 課題に期限を設定する

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 課題リポジトリの可視性を選択する

課題のためのリポジトリは、パブリックにもプライベートにもできます。 プライベート リポジトリを使うと、学生だけが提供されたフィードバックを見ることができます。 [リポジトリの可視性] の下で、可視性を選択します。

終了したら **[Continue]\(続行\)** をクリックします。 {% data variables.product.prodname_classroom %} によって課題が作成され、課題ページに移動します。

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## 学生を課題に招待する

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

課題の **[すべての学生]** タブで、学生がクラスルームに参加して課題を受け取ったか、または提出したかを確認できます。 {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Git と {% data variables.product.company_short %} の初心者用課題は、グループではなく、個々の学生のみが使用できます。 課題を作成すると、学生は課題の作業を開始できます。

## 次の手順

- コースに合わせて課題をさらにカスタマイズします。 詳細については、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」、「[グループ課題の作成](/education/manage-coursework-with-github-classroom/create-a-group-assignment)」、「[課題の再利用](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)」を参照してください。

## 参考資料

- 「[教師向け {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)」
- [学習管理システムを {% data variables.product.prodname_classroom %} に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)
