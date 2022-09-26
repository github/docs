---
title: Issueについて
intro: '{% data variables.product.prodname_github_issues %}を使って、{% data variables.product.company_short %}での作業に関するアイデア、フィードバック、タスク、バグを追跡してください。'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422733'
---
## GitHubとの統合

Issueを使って、開発が行われる{% data variables.product.company_short %}上での作業を追跡できます。 他のIssueもしくはPull Request内のIssueにメンションすると、そのIssueのタイムラインにはクロスリファレンスが反映され、関連する作業を追跡できるようになります。 作業が進行中であることを示すために、Pull RequestにIssueをリンクできます。 Pull Requestがマージされると、リンクされたIssueは自動的にクローズされます。

キーワードの詳細については、「[pull request を issue にリンクする](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)」を参照してください。

## 素早いIssueの作成

Issueは様々な方法で作成できるので、ワークフローで最も便利な方法を選択できます。 たとえば、issue の作成はリポジトリ、{% ifversion fpt or ghec %}タスク リストの項目、{% endif %}プロジェクトのノート、issue または pull request のコメント、特定のコード行、URL クエリからできます。 Issueは、Web UI、{% data variables.product.prodname_desktop %}、{% data variables.product.prodname_cli %}、GraphQL及びREST API、{% data variables.product.prodname_mobile %}といった好きなプラットフォームから作成することもできます。 詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)」を参照してください。

## 作業の把握

プロジェクトで、Issueを整理して優先順位付けできます。 {% ifversion fpt or ghec %}大きな issue の一部である issue を追跡するには、タスク リストが使えます。{% endif %}関連する issue を分類するには、ラベルとマイルストーンが使えます。

プロジェクトについて詳しくは、{% ifversion projects-v2 %}「[プロジェクトについて](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」 {% else %}「[プロジェクト ボードを使用した作業の整理](/issues/organizing-your-work-with-project-boards)」を参照してください。{% endif %} {% ifversion fpt or ghec %}タスク リストについて詳しくは、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。 {% endif %}ラベルとマイルストーンの詳細については、「[ラベルとマイルストーンを使用して作業を追跡する](/issues/using-labels-and-milestones-to-track-work)」を参照してください。

## 最新情報を入手する

Issueの最新のコメントの情報を得ておきたい場合には、Issueをサブスクライブして最新のコメントに関する通知を受け取ることができます。 サブスクライブした Issue の最新の更新へのリンクを素早く見つけるには、ダッシュボードにアクセスしてください。 詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」および「[個人用ダッシュボードについて](/articles/about-your-personal-dashboard)」を参照してください。

## コミュニティの管理

必要な情報を提供する意味のある issue を共同作成者がオープンしやすくするためには、{% ifversion fpt or ghec %}issue フォームと {% endif %}issue テンプレートが使用できます。 詳細については、「[テンプレートを使用して便利な issue や pull request を促進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% ifversion fpt or ghec %}コミュニティを健全に保つために、{% data variables.product.prodname_dotcom %} の[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines)に違反するコメントをレポートできます。 詳細については、「[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)」を参照してください。{% endif %}

## 効率的なコミュニケーション

コメントに注意を惹きつけるために、issue 内でリポジトリにアクセスできるコラボレーターを @mention できます。 同じリポジトリ内の関連する Issue をリンクするために、`#` の後に Issue のタイトルの一部を続け、リンクする Issue をクリックできます。 責任を伝えるために、Issueを割り当てることができます。 同じコメントを頻繁に入力しているなら、返信テンプレートを利用できます。
{% ifversion fpt or ghec %}詳細については、「[基本的な書き方とフォーマットの構文](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)」および「[GitHub の他のユーザーに issue と pull request を割り当てる](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)」を参照してください。
{% endif %} {% ifversion discussions %}
## Issueとディスカッションの比較

会話の中には、{% data variables.product.prodname_discussions %}に適しているものもあります。 {% data reusables.discussions.you-can-use-discussions %}issue またはディスカッションを使用するタイミングのガイダンスについては、「[GitHub でのコミュニケーション](/github/getting-started-with-github/quickstart/communicating-on-github)」を参照してください。

Issue内での会話にディスカッションの方が適している場合は、Issueをディスカッションに変換できます。
{% endif %}
