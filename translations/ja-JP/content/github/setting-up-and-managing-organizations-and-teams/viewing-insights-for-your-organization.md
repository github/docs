---
title: Organization のインサイトを表示する
intro: 'Organization のインサイトは、Organization のアクティビティ、コントリビューション、および依存関係についてのデータを提供します。'
product: '{% data reusables.gated-features.org-insights %}'
redirect_from:
  - /articles/viewing-insights-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Organization のメンバー全員が Organization のインサイトを表示できます。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

Organization のメンバーが、コードについてコラボレートや作業をするため {% data variables.product.product_name %} をどう使っているかについて、より深く理解するために、Organization activity insights を使用できます。 dependency insights は、Organization のオープンソース利用について追跡、レポート、および行動するため役立ちます。

### Organization activity insights を表示する

{% note %}

**注釈:** Organization activity insights は現在パブリックベータであり、変更されることがあります。

{% endnote %}

Organization activity insights を使えば、Issue やプルリクエストアクティビティ、使用されている言語の上位、Organization のメンバーが時間を費やした場所についての累積的情報などを含む、Organization 全体や特定のリポジトリに関するデータの視覚的表現を月ごと、週ごと、年ごとに表示できます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Organization 名の下にある {% octicon "graph" aria-label="The bar graph icon" %} [**Insights**] をクリックします。 ![[organization insights] タブをクリックする](/assets/images/help/organizations/org-nav-insights-tab.png)
4. オプションで、ページ右上において、表示するデータを直近**1 週間**、**1 か月**、 **1 年**から選びます。 ![org insights を表示する期間を選択する](/assets/images/help/organizations/org-insights-time-period.png)
5. オプションで、ページ右上において、データを表示するリポジトリを最大 3 つまで選んで、[**Apply**] をクリックします。 ![org insights を表示するリポジトリを選択する](/assets/images/help/organizations/org-insights-repos.png)

### Organization dependency insights を表示する
dependency insights を使えば、あなたの Organization が頼るオープンソースプロジェクトの脆弱性、ライセンスその他の重要情報を表示できます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Organization 名の下にある {% octicon "graph" aria-label="The bar graph icon" %} [**Insights**] をクリックします。 ![メイン Organization ナビゲーションバーの [Insights] タブ](/assets/images/help/organizations/org-nav-insights-tab.png)
4. この Organization への依存関係を表示するには、[**Dependencies**] をクリックします。 ![メイン Organization ナビゲーションバーの下にある [Dependencies] タブ](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. あなたの {% data variables.product.prodname_ghe_cloud %} Organization の dependency insights をすべて表示するには、[**My organizations**] をクリックします。 ![[Dependencies] タブの下にある [My organizations] ボタン](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. [**Open security advisories**] および [**Licenses**] グラフの結果をクリックすることで、脆弱性ステータス、ライセンスまたはその 2 つを組み合わせてフィルタリングできます。 ![My organizations vulnerabilities and licenses graphs](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. 各脆弱性の隣にある [{% octicon "package" aria-label="The package icon" %} **dependents**] をクリックして、Organization でどの依存関係が各ライブラリを使っているかを表示できます。 ![Organization の脆弱性のある依存関係](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)


  ### 参考リンク

   - [Organization について](/github/setting-up-and-managing-organizations-and-teams/about-organizations)
   - [リポジトリの依存関係を見る](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
   - [Organization dependency insights の可視性を変更する](/github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights)
   - [Enterprise アカウントに dependency insights に関するポリシーを施行する](/github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account)
