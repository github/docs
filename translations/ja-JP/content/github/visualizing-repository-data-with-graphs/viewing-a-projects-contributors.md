---
title: プロジェクトのコントリビューターを表示する
intro: 'リポジトリへのコミットにコントリビュートした人{% if currentVersion == "free-pro-team@latest" %}とその依存関係{% endif %}を表示できます。'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### コントリビューターについて

コントリビューターグラフで{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}、コミットの共作者を含めて{% endif %}、リポジトリに貢献した上位 100 人のコントリビューターを表示できます。 マージコミットと空のコミットは、このグラフでコントリビューションとして数えられません。

{% if currentVersion == "free-pro-team@latest" %}
プロジェクトの Python 依存関係に貢献した人のリストも表示されます。 この、コミュニティコントリビューターのリストを表示するには、`https://github.com/REPO-OWNER/REPO-NAME/community_contributors` にアクセスしてください。
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
- コミットの作成に使用したメールアドレスが、{% data variables.product.product_name %} のアカウントに接続されていない。

{% tip %}

**ヒント:** リポジトリへのコミットのコントリビューターを一覧表示する方法については、「[リポジトリ](/rest/reference/repos#list-contributors)」を参照してください。

{% endtip %}

リポジトリ内のあなたのコミットがすべてデフォルト以外のブランチにある場合、コントリビュータグラフには表示されません。 たとえば、`gh-pages`ブランチに対して行われたコミットは、`gh-pages`がリポジトリのデフォルトのブランチでない限り、グラフに含まれません。 コミットをデフォルトブランチにマージするため、プルリクエストを作成できます。 詳しい情報については[プルリクエストについて](/articles/about-pull-requests)を参照してください。

コミットの作成に使用したメールアドレスが {% data variables.product.product_name %} のアカウントに接続されていない場合、コミットはアカウントにリンクされず、コントリビュータグラフに表示されません。 詳しい情報については、「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address){% if currentVersion != "github-ae@latest" %}」および「[{% data variables.product.product_name %} アカウントにメールアドレスを追加する](/articles/adding-an-email-address-to-your-github-account){% endif %}」を参照してください。
