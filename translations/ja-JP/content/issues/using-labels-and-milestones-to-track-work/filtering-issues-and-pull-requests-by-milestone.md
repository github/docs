---
title: Issue とプルリクエストをマイルストーンでフィルタリングする
intro: 'Issue およびPull Requestを、関連付けられたマイルストーンに基づいてフィルタリングできます。 [イシューや pull request をマイルストーンに関連付けた](/articles/associating-milestones-with-issues-and-pull-requests)後は、マイルストーンに基づいて項目を見つけることができます。 マイルストーン内で Issue およびPull Requestに優先順位を付けることができます。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130923'
---
{% tip %}

**ヒント:**

- 検索バーを使用して Issue とPull Requestをフィルタリングしたい場合は、マイルストーンの検索構文を使用できます。 My Milestone というマイルストーンの場合、検索構文は `milestone:"My Milestone"` のようになります。
- フィルターの選択を解除するには、 **[Clear current search query, filters, and sorts]\(現在の検索クエリ、フィルター、並べ替えをクリアする\)** をクリックします。
-  {% data variables.product.prodname_cli %} を使用して Issue またはPull Requestをフィルタすることもできます。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh issue list`](https://cli.github.com/manual/gh_issue_list)」または「[`gh pr list`](https://cli.github.com/manual/gh_pr_list)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. **[マイルストーン]** を選択して、リポジトリで使用可能なすべてのマイルストーンのリストを表示します。
  ![[マイルストーン] ボタン](/assets/images/help/issues/issues_milestone_button.png)
4. 対象のマイルストーンをリストから選択します。 関連付けられたすべての Issue やPull Requestなどのマイルストーンの関連情報を、マイルストーンのページで確認できます。 詳細については、「[マイルストーンについて](/articles/about-milestones)」を参照してください。

## 参考資料

- [Issue および Pull request のフィルタリングと検索](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
- 「[プロジェクト ボードでカードをフィルタリングする](/articles/filtering-cards-on-a-project-board)」
