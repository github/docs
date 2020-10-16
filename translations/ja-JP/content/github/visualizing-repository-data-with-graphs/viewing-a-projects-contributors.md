---
title: プロジェクトのコントリビューターを表示する
intro: 'You can see who contributed commits to a repository{% if currentVersion == "free-pro-team@latest" %} and its dependencies{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### コントリビューターについて

You can view the top 100 contributors to a repository{% if currentVersion != "free-pro-team@latest" %}, including commit co-authors,{% endif %} in the contributors graph. マージコミットと空のコミットは、このグラフでコントリビューションとして数えられません。

{% if currentVersion == "free-pro-team@latest" %}
You can also see a list of people who have contributed to the project's Python dependencies. この、コミュニティコントリビューターのリストを表示するには、`https://github.com/REPO-OWNER/REPO-NAME/community_contributors` にアクセスしてください。
{% endif %}

### コントリビューターグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左サイドバーで [**Contributors**] をクリックします。 ![コントリビュータータブ](/assets/images/help/graphs/contributors_tab.png)
4. オプションで、特定の期間におけるコントリビューターを表示するには、クリックしてから、その期間が選択されるまでドラッグしてください。 ![コントリビュータグラフで選択した時間範囲](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

### コントリビューターのトラブルシューティング

リポジトリのコントリビュータグラフにあなたが表示されない場合、以下の理由が考えられます:
- 上位 100 人に入っていない。
- コミットがデフォルトブランチにマージされていない。
- コミットを書くのに使ったメールアドレスが、{% data variables.product.product_name %} アカウントに追加されていない。

{% tip %}

**ヒント:** リポジトリへのコミットのコントリビューターを一覧表示する方法については、「[リポジトリ](/v3/repos/#list-contributors)」を参照してください。

{% endtip %}

リポジトリ内のあなたのコミットがすべてデフォルト以外のブランチにある場合、コントリビュータグラフには表示されません。 たとえば、`gh-pages`ブランチに対して行われたコミットは、`gh-pages`がリポジトリのデフォルトのブランチでない限り、グラフに含まれません。 コミットをデフォルトブランチにマージするため、プルリクエストを作成できます。 詳しい情報については[プルリクエストについて](/articles/about-pull-requests)を参照してください。

コミットを書くために使ったメールアドレスがあなたの {% data variables.product.product_name %} アカウントに追加されていない場合、そのコミットはアカウントにリンクされず、コントリビュータグラフには表示されません。 詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」および「[{% data variables.product.product_name %} アカウントにメールアドレスを追加する](/articles/adding-an-email-address-to-your-github-account)」を参照してください。
