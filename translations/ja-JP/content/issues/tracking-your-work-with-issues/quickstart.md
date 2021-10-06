---
title: GitHub Issueのクイックスタート
intro: 'この簡単なインタラクティブガイドに従って、{% data variables.product.prodname_github_issues %}について学んでください。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## はじめに

このガイドは、{% data variables.product.prodname_github_issues %}を使って作業の断片を計画及び追跡する方法を示します。 このガイドでは、新しいIssueを作成し、タスクリストを追加してサブタスクを追跡します。 ラベル、マイルストーン、アサインされた人、プロジェクトを追加して、Issueに関するメタデータをやりとりする方法についても学びます。

## 必要な環境

Issueを作成するにはリポジトリが必要です。 書き込みアクセス権を持つ既存のリポジトリを利用することも、新しいリポジトリを作成することもできます。 このリポジトリではIssueが有効になっていなければなりません。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。 リポジトリでIssueが無効化されている場合、Issueを有効化する方法に関する情報については「[Issueの無効化](/github/administering-a-repository/managing-repository-settings/disabling-issues)」を参照してください。

## 空のIssueのオープン

まず、Issueを作成してください。 Issueの作成方法は複数あります。自分のワークフローで最も便利な方法を選択できます。 この例では、{% data variables.product.prodname_dotcom %} UIを使用します。 Issueを作成する他の方法に関する情報については「[Issueの作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. この例では、空のIssueから始めます。 リポジトリでは、コントリビューターが特定の情報を提供することを促進するためにIssueテンプレート{% ifversion fpt %}及びIssueフォーム{% endif %}が使われるかもしれません。 リポジトリがIssueテンプレートを使うなら、{% ifversion fpt or ghes %}**Open a blank Issue（空のIssueをオープン）**をクリック{% else %}**Open a regular issue（通常のIssueをオープン）をクリック**{% endif %}してください。

![空のIssue](/assets/images/help/issues/blank-issue.png)

## 情報の記入

Issueに分かりやすいタイトルを付けてください。 このタイトルは、Issueが何に関するものなのかが一目でわかるものにすべきです。

Issueを解決するのに役立つかもしれない詳細情報も含めて、Issueの目的を記述する説明を追加してください。 たとえば、もしそれがバグレポートなら、バグを再現するステップ、期待される結果、実際の結果を記述してください。

フォーマット、リンク、絵文字などを追加するためにMarkdownを使うことができます。 くわしいじょうほうについては「[GitHubでの執筆](/github/writing-on-github)」を参照してください。

![Issueのタイトルと本文](/assets/images/help/issues/issue-title-body.png)

## タスクリストの追加

大きなIssueを小さなタスクに分割したり、複数の関連するIssueを1つの大きなIssueで追跡すると役立つことがあります。 リストアイテムの前に`[ ]`を置いて、Issueにタスクリストを追加してください。 既存のIssueは、Issue番号あるいはURLで参照してください。 対応するIssueを持たないタスクを追跡するのにプレーンテキストを使い、それらを後でIssueに変換することができます。 詳しい情報については[タスクリストについて](/issues/tracking-your-work-with-issues/about-task-lists)を参照してください。

![タスクリストのあるIssue](/assets/images/help/issues/issue-task-list-raw.png)

## ラベルの追加

Issueを分類するために、ラベルを追加してください。 たとえば、`bug`ラベルと`good first issue`ラベルを使って、そのIssueが初めてのコントリビューターが取り上げることができるバグであることを示せるでしょう。 ユーザは、ラベルを使ってIssueをフィルタリングし、特定のラベルを持つすべてのIssueを見つけることができます。

デフォルトのラベルを使うことも、新しいラベルを作成することもできます。 詳しい情報については、「[ラベルを管理する](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。

![ラベルを持つIssue](/assets/images/help/issues/issue-with-label.png)

## マイルストーンの追加

マイルストーンを追加して、Issueを日付ベースのターゲットの一部として追跡できます。 マイルストーンは、ターゲットの日に近づくにつれて、Issueの進捗を示します。 詳しい情報については、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」を参照してください。

![マイルストーンを持つIssue](/assets/images/help/issues/issue-milestone.png)

## Issueのアサイン

責任をやりとりするために、IssueをOrganizatoinのメンバーにアサインできます。 詳しい情報については、「[GitHub の他のユーザに Issue およびプルリクエストをアサインする](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)」を参照してください。

![アサインされた人を持つIssue](/assets/images/help/issues/issue-assignees.png)

## プロジェクトへのIssueの追加

Issueを既存のプロジェクトに追加できます。 {% ifversion fpt %}プロジェクト（ベータ）を使っているなら、プロジェクトのメタデータを展開することもできます。 {% endif %}プロジェクトに関する詳しい情報については{% ifversion fpt %}「[プロジェクト（ベータ）について](/issues/trying-out-the-new-projects-experience/about-projects)」及び{% endif %}「[プロジェクトボードで作業を整理する](/issues/organizing-your-work-with-project-boards)」を参照してください。

![プロジェクトを持つIssue](/assets/images/help/issues/issue-project.png)

## Issueのサブミット

**Submit new issue（新しいIssueのサブミット）**をクリックして、Issueを作成してください。 上記のフィールドは、いずれもIssueを作成した後に編集できます。 Issueは一意のURLを持ち、それをTeamのメンバーと共有したり、あるいは他のIssueやPull Request内で参照したりできます。

## コミュニケーション

Issueを作成した後は、そのIssueにコメントを追加して会話を続けてください。 コラボレータあるいはTeamを@メンションして、コメントに注意を惹きつけることができます。 同じリポジトリ内の関連するIssueをリンクするために、`#`につづいてIssueのタイトルの一部を続け、リンクしたいIssueをクリックできます。 くわしいじょうほうについては「[GitHubでの執筆](/github/writing-on-github)」を参照してください。

![Issueのコメント](/assets/images/help/issues/issue-comment.png)

## 次のステップ

Issueは、幅広い目的で使用できます。 例:

- アイデアの追跡
- フィードバックの収集
- タスクの計画
- バグの報告

{% data variables.product.prodname_github_issues %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- Issueについてさらに学ぶには「[Issueについて](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。
- プロジェクトが計画と追跡にどのように役立つかをさらに学ぶには、{% ifversion fpt %}「[プロジェクト（ベータ）について](/issues/trying-out-the-new-projects-experience/about-projects)」あるいは{% endif %}「[プロジェクトボードでの作業の整理](/issues/organizing-your-work-with-project-boards)」を参照してください。
- Issueテンプレート{% ifversion fpt %}及びIssueフォーム{% endif %}を利用して、コントリビューターが特定の情報を提供してくれるよう促進することについてさらに学ぶには「[IssueやPull Requestが役立つものになるよう促進するためのテンプレートの利用](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。
