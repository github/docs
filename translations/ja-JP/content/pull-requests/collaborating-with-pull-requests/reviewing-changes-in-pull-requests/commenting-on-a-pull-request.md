---
title: プルリクエストへのコメント
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: リポジトリのプルリクエストのオープン後、コラボレーターや Team メンバーは、特定の 2 つのブランチ間におけるファイルの比較について、またプロジェクト全体についてコメントできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578957'
---
## プルリクエストのコメントについて

pull request の **[Conversation]\(会話)** タブには、一般的なコメント、質問、提案などを書き込むことができます。 プルリクエストの作者がコメントから直接適用できる変更を提案することもできます。

![プルリクエストの会話](/assets/images/help/pull_requests/conversation.png)

または、pull request の **[Files changed]\(変更したファイル)** タブにあるファイルの特定のセクションについては、個々の行コメントの形式で、または [pull request レビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)の一部として、コメントすることもできます。 行コメントを追加することは、インプリメンテーションについての問題を話し合ったり、作者にフィードバックを行ったりする上でよい方法です。

pull request レビューへの行コメントの追加に関する詳細については、「[pull request で提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

{% note %}

**注:** pull request に対してメールで返信する場合、コメントは、pull request レビューの一部としてではなく、 **[Conversation]\(会話)** タブに追加されます。

{% endnote %}

既存の行コメントに返信するには、 **[Conversation]\(会話)** タブまたは **[Files changed]\(変更したファイル)** タブのいずれかでコメントに移動して、その下に追加の行コメントを追加します。

{% tip %}

**ヒント:**
- pull request のコメントは、{% data variables.product.product_name %} のコメントと同じ[フォーマット](/categories/writing-on-github) (@mentions、絵文字、参照など) をサポートしています。
- pull request 内のコメントに対する反応は、 **[Files changed]\(変更したファイル)** タブに追加できます。

{% endtip %}

## プルリクエストに行コメントを追加する

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、行コメントをしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. 完了したら、 **[Add single comment]\(1 つのコメントの追加)** をクリックします。
  ![行内コメントのウィンドウ](/assets/images/help/commits/inline-comment.png)

プルリクエストまたはリポジトリを Watch している全員が、コメントの通知を受信します。

{% data reusables.pull_requests.resolving-conversations %}

## 参考資料

- 「[Writing on GitHub](/github/writing-on-github)」 (Github での執筆) {% ifversion fpt or ghec %}- 「[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)」 (乱用やスパムをレポートする) {% endif %}
