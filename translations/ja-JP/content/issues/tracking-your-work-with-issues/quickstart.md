---
title: GitHub Issueのクイックスタート
intro: 'この簡単なインタラクティブガイドに従って、{% data variables.product.prodname_github_issues %}について学んでください。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423253'
---
## はじめに

このガイドは、{% data variables.product.prodname_github_issues %}を使って作業の断片を計画及び追跡する方法を示します。 このガイドでは、新しいIssueを作成し、タスクリストを追加してサブタスクを追跡します。 ラベル、マイルストーン、アサインされた人、プロジェクトを追加して、Issueに関するメタデータをやりとりする方法についても学びます。

## 前提条件

Issueを作成するにはリポジトリが必要です。 書き込みアクセス権を持つ既存のリポジトリを利用することも、新しいリポジトリを作成することもできます。 {% data reusables.enterprise-accounts.emu-permission-repo %} リポジトリはIssueを有効化していなければなりません。 リポジトリの作成の詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。 リポジトリで無効になっている場合の Issue の有効化の詳細については、「[Issue の無効化](/github/administering-a-repository/managing-repository-settings/disabling-issues)」を参照してください。

## 空のIssueのオープン

まず、Issueを作成してください。 Issueの作成方法は複数あります。自分のワークフローで最も便利な方法を選択できます。 この例では、{% data variables.product.prodname_dotcom %} UIを使用します。 Issue を作成するその他の方法の詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. この例では、空のIssueから始めます。 リポジトリでは、コントリビューターが特定の情報を提供することを促進するために Issue テンプレート{% ifversion fpt or ghec %}および Issue フォーム{% endif %}が使用される場合があります。 リポジトリで Issue テンプレートが使用されている場合は、{% ifversion fpt or ghes or ghec %} **[空の Issue をオープン]** をクリックします{% else %} **[通常の Issue をオープン]** をクリックします{% endif %}。

![空のIssue](/assets/images/help/issues/blank-issue.png)

## 情報の記入

Issueに分かりやすいタイトルを付けてください。 このタイトルは、Issueが何に関するものなのかが一目でわかるものにすべきです。

Issueを解決するのに役立つかもしれない詳細情報も含めて、Issueの目的を記述する説明を追加してください。 たとえば、もしそれがバグレポートなら、バグを再現するステップ、期待される結果、実際の結果を記述してください。

フォーマット、リンク、絵文字などを追加するためにMarkdownを使うことができます。 詳細については、「[GitHub での執筆](/github/writing-on-github)」を参照してください。

![Issueのタイトルと本文](/assets/images/help/issues/issue-title-body.png)

## タスクリストの追加

大きなIssueを小さなタスクに分割したり、複数の関連するIssueを1つの大きなIssueで追跡すると役立つことがあります。 リスト項目の前に `[ ]` を置いて、Issue にタスク リストを追加します。 既存のIssueは、Issue番号あるいはURLで参照してください。 対応するIssueを持たないタスクを追跡するのにプレーンテキストを使い、それらを後でIssueに変換することができます。 詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/about-task-lists)」を参照してください。

![タスクリストのあるIssue](/assets/images/help/issues/issue-task-list-raw.png)

## ラベルの追加

Issueを分類するために、ラベルを追加してください。 たとえば、`bug` ラベルと `good first issue` ラベルを使って、Issue が初めてのコントリビューターが取り上げることができるバグであることを示す場合があります。 ユーザは、ラベルを使ってIssueをフィルタリングし、特定のラベルを持つすべてのIssueを見つけることができます。

デフォルトのラベルを使うことも、新しいラベルを作成することもできます。 詳細については、[ラベルの管理](/issues/using-labels-and-milestones-to-track-work/managing-labels)に関する記事を参照してください。

![ラベルを持つIssue](/assets/images/help/issues/issue-with-label.png)

## マイルストーンの追加

マイルストーンを追加して、Issueを日付ベースのターゲットの一部として追跡できます。 マイルストーンは、ターゲットの日に近づくにつれて、Issueの進捗を示します。 詳細については、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」を参照してください。

![マイルストーンを持つIssue](/assets/images/help/issues/issue-milestone.png)

## Issueのアサイン

責任をやりとりするために、IssueをOrganizatoinのメンバーにアサインできます。 詳細については、[他の GitHub ユーザーに Issue と pull request を割り当てる](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)方法に関するページを参照してください。

![アサインされた人を持つIssue](/assets/images/help/issues/issue-assignees.png)

## プロジェクトへのIssueの追加

issue を既存のプロジェクトに追加して{% ifversion projects-v2 %}、そのプロジェクトのメタデータを設定できます。 {% endif %} プロジェクトの詳しい情報については、{% ifversion projects-v2 %}「[プロジェクトについて](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」または{% else %}「[プロジェクト ボードで作業を整理する](/issues/organizing-your-work-with-project-boards)」{% endif %}を参照してください。

![プロジェクトを持つIssue](/assets/images/help/issues/issue-project.png)

## Issueのサブミット

**[新しい Issue をサブミット]** をクリックして、Issue を作成します。 上記のフィールドは、いずれもIssueを作成した後に編集できます。 Issueは一意のURLを持ち、それをTeamのメンバーと共有したり、あるいは他のIssueやPull Request内で参照したりできます。

## コミュニケーション

Issueを作成した後は、そのIssueにコメントを追加して会話を続けてください。 コラボレーターまたはチームを @mention して、コメントに注意を惹きつけることができます。 同じリポジトリ内の関連する Issue をリンクするために、`#` の後に Issue のタイトルの一部を続け、リンクする Issue をクリックできます。 詳細については、「[GitHub での執筆](/github/writing-on-github)」を参照してください。

![Issueのコメント](/assets/images/help/issues/issue-comment.png)

## 次の手順

Issueは、幅広い目的で使用できます。 たとえば次のような点です。

- アイデアの追跡
- フィードバックの収集
- タスクの計画
- バグの報告

{% data variables.product.prodname_github_issues %} で次のステップを実行するための役立つリソースを、いくつか次に示します。

- Issue の詳細については、「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。
- プロジェクトの計画と追跡に役立つ方法の詳細については、{% ifversion projects-v2 %}「[プロジェクトについて](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」または{% else %}「[プロジェクト ボードで作業を整理する](/issues/organizing-your-work-with-project-boards)」{% endif %}を参照してください。
- Issue テンプレート{% ifversion fpt or ghec %}および Issue フォーム{% endif %}を使用して、コントリビューターが特定の情報を提供してくれるように促進することについてさらに学ぶには、「[テンプレートを使用して便利な Issue やプル リクエストを推進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。
