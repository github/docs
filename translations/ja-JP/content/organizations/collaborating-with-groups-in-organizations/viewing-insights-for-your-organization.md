---
title: Organization のインサイトを表示する
intro: Organization のインサイトは、Organization のアクティビティ、コントリビューション、および依存関係についてのデータを提供します。
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130879'
---
## Organization のインサイトについて

Organization のメンバーが、コードについてコラボレートや作業をするため {% data variables.product.product_name %} をどう使っているかについて、より深く理解するために、Organization activity insights を使用できます。 dependency insights は、Organization のオープンソース利用について追跡、レポート、および行動するため役立ちます。

{% note %}

**注:** Organization の分析情報を表示するには、Organization で {% data variables.product.prodname_ghe_cloud %} を使用している必要があります。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Organization activity insights を表示する

{% note %}

**注:** Organization のアクティビティの分析情報は現在パブリック ベータ版であり、変更される可能性があります。

{% endnote %}

Organization activity insights を使えば、Issue やプルリクエストアクティビティ、使用されている言語の上位、Organization のメンバーが時間を費やした場所についての累積的情報などを含む、Organization 全体や特定のリポジトリに関するデータの視覚的表現を月ごと、週ごと、年ごとに表示できます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Organization 名の下の {% octicon "graph" aria-label="The bar graph icon" %} **[分析情報]** をクリックします。
  ![Organization の [分析情報] タブをクリック](/assets/images/help/organizations/org-nav-insights-tab.png)
4. 必要に応じて、ページの右上隅で、過去 **[1 週間]** 、 **[1 か月]** 、 **[1 年間]** のいずれかを選択してデータを表示できます。
  ![Organization の分析情報を表示する期間を選択](/assets/images/help/organizations/org-insights-time-period.png)
5. 必要に応じて、ページの右上隅にある最大 3 つのリポジトリのデータを表示し、 **[適用]** をクリックします。
  ![Organization の分析情報を表示するリポジトリを選択](/assets/images/help/organizations/org-insights-repos.png)

## Organization dependency insights を表示する

{% note %}

**注:** [[依存関係グラフ]](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph) が有効になっていることを確認してください。 

{% endnote %}

dependency insights を使えば、あなたの Organization が頼るオープンソースプロジェクトの脆弱性、ライセンスその他の重要情報を表示できます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Organization 名の下の {% octicon "graph" aria-label="The bar graph icon" %} **[分析情報]** をクリックします。
  ![メインの Organization ナビゲーション バーの [分析情報] タブ](/assets/images/help/organizations/org-nav-insights-tab.png)
4. この Organization の依存関係を表示するには、 **[依存関係]** をクリックします。
  ![メインの Organization ナビゲーション バーの下にある [依存関係] タブ](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. すべての {% data variables.product.prodname_ghe_cloud %} Organization の依存関係の分析情報を表示するには、 **[自分の Organizations]** をクリックします。
  ![[依存関係] タブの下にある [自分の Organizations] ボタン](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. **[セキュリティ アドバイザリを開く]** と **[ライセンス]** のグラフで結果をクリックすると、脆弱性の状態、ライセンス、または 2 つの組み合わせでフィルター処理できます。
  ![自分の Organization の脆弱性とライセンスのグラフ](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. 各脆弱性の隣にある {% octicon "package" aria-label="The package icon" %} **[依存関係]** をクリックすると、Organization のどの依存関係が各ライブラリを使っているかを表示できます。
  ![自分の Organization の脆弱性のある依存関係](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## 参考資料
 - "[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
 - 「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」
 - 「[Organization の依存関係の分析情報の可視性を変更する](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)」{% ifversion ghec %}
- 「[エンタープライズでの依存関係分析情報のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)」{% endif %}
