---
title: リポジトリの内容への変更の分析
intro: リポジトリのコミット、コミット頻度、内容の追加や削除を分析することで、リポジトリの内容の変更を見ることができます。
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
---

## リポジトリ内のコミットを可視化する

コミットグラフには、過去 1 年間にリポジトリに対して行われたすべてのコミット (マージコミットを除く) が表示されます。

上のグラフは、週ごとの年間のコミットを示しています。

![リポジトリコミット年グラフ](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

下のグラフは、選択した週の曜日別のコミットの平均数を示しています。

![リポジトリコミット週グラフ](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### コミットグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左サイドバーで [**Commits**] をクリックします。 ![[Commits] タブ](/assets/images/help/graphs/commits_tab.png)

## Visualizing additions and deletion to content in a repository

コード更新頻度グラフには、リポジトリの履歴における各週のコンテンツの追加と削除が表示されます。

{% ifversion fpt or ghec %}

![コード更新頻度グラフ](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### コード更新頻度グラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左サイドバーで [**Code frequency**] をクリックします。 ![コード更新頻度タブ](/assets/images/help/graphs/code_frequency_tab.png)
