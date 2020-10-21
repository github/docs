---
title: Issue とプルリクエストをマイルストーンでフィルタリングする
intro: 'Issue およびプルリクエストを、関連付けられたマイルストーンに基づいてフィルタリングできます。 [Issue やプルリクエストをマイルストーンと関連付ける](/articles/associating-milestones-with-issues-and-pull-requests) と、それらのマイルストーンに基づいて項目を検索できます。 マイルストーン内で Issue およびプルリクエストに優先順位を付けることができます。'
redirect_from:
  - /articles/filtering-issues-and-pull-requests-by-milestone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**参考:**

- 検索バーを使用して Issue とプルリクエストをフィルタリングしたい場合は、マイルストーンの検索構文を使用できます。 My Milestone という名前のマイルストーンであれば、検索構文は `milestone:"My Milestone"` となります。
- フィルタの選択をクリアするには、[**Clear current search query, filters, and sorts**] をクリックします。
-  {% data variables.product.prodname_cli %} を使用して Issue またはプルリクエストをフィルタすることもできます。 For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. [**Milestones**] を選択して、リポジトリで使用可能なすべてのマイルストーンのリストを表示します。 ![[Milestones] ボタン](/assets/images/help/issues/issues_milestone_button.png)
4. 対象のマイルストーンをリストから選択します。 関連付けられたすべての Issue やプルリクエストなどのマイルストーンの関連情報を、マイルストーンのページで確認できます。 詳しい情報については、「[マイルストーンについて](/articles/about-milestones)」を参照してください。

### 参考リンク

- 「[Issue およびプルリクエストをフィルタリングする](/articles/filtering-issues-and-pull-requests)」
- [Issue およびプルリクエストのソート](/articles/sorting-issues-and-pull-requests)
- 「[検索を使用して Issue およびプルリクエストをフィルタリングする](/articles/using-search-to-filter-issues-and-pull-requests)」
- 「[フィルタの共有](/articles/sharing-filters)」
- 「[プロジェクトボードでカードをフィルタリングする](/articles/filtering-cards-on-a-project-board)」
