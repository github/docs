---
title: Star を付けてリポジトリを保存する
intro: 'リポジトリやトピックに星を付けて、興味のあるプロジェクトを追跡{% ifversion fpt or ghec %}し、ニュース フィードで関連コンテンツを見つけることが{% endif %}できます。'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374180'
---
{% data variables.explore.your_stars_page %} の Star 付きリポジトリとトピックを検索、並べ替え、フィルター処理できます。

## Star について

Star を付けることで、リポジトリやトピックが後で見つけやすくなります。 {% data variables.explore.your_stars_page %} にアクセスすると、Star 付きのリポジトリとトピックを確認することができます。

{% ifversion fpt or ghec %} リポジトリとトピックに Star を付けて、{% data variables.product.product_name %} 上で類似のプロジェクトを発見することができます。 リポジトリやトピックに Star を付けると、{% data variables.product.product_name %} によって、関連するコンテンツがお勧めとして個人用ダッシュボードに表示されることがあります。 詳細については、「[{% data variables.product.prodname_dotcom %} でオープンソースに貢献する方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」と「[パーソナルダッシュボードについて](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)」を参照してください。
{% endif %}

リポジトリに Star を付けるということは、リポジトリメンテナに対してその作業についての感謝を示すことでもあります。 {% data variables.product.prodname_dotcom %} のリポジトリランキングの多くは、リポジトリに付けられた Star の数を考慮しています。 また、[[探索]](https://github.com/explore) には、Star の数に基づいて人気のリポジトリが表示されます。

## リポジトリの Star 付け

リポジトリの Star 付けは、2 つのステップからなるシンプルなプロセスです。

{% data reusables.repositories.navigate-to-repo %}
1. ページの右上隅の **[Star]\(星\)** を選択します。
![リポジトリの Star 付け](/assets/images/help/stars/starring-a-repository.png)
1. 必要に応じて、以前に Star を付けたリポジトリの Star を解除するには、 **[Unstar]\(星の解除\)** をクリックします。
![リポジトリの Star 解除](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## リポジトリに星を付けたユーザーを表示する


パブリック リポジトリまたは自分がアクセス権を持つプライベート リポジトリに星を付けたすべてのユーザーを表示できます。 


リポジトリに星を付けたすべてのユーザーを表示するには、リポジトリの URL の末尾に `/stargazers` を追加します。 たとえば、github/docs リポジトリに星を付けたユーザーを表示するには、 https://github.com/github/docs/stargazers にアクセスします。


## Star 付きのリポジトリをリストで整理する

{% note %}

**注:** リストは現在パブリック ベータであり、変更される可能性があります。

{% endnote %}

パブリック リストで、Star 付きのリポジトリをキュレーションできます。 ユーザーは、`https://github.com/USERNAME?tab=stars` の Star ページに表示されるパブリック リストを作成できます。

リストにプライベート リポジトリを追加した場合、そのプライベート リポジトリは、そのリポジトリへの `read` アクセス権を持つユーザーに対してのみ、リストに表示されます。

![Star ページのリストのスクリーンショット](/assets/images/help/stars/lists-overview-on-stars-page.png)

リポジトリ ページでも Star 付きリポジトリのリストでも、リポジトリの **[Star]\(星\)** または **[Stared]\(星付き\)** ドロップダウン メニューが表示される場所であれば、既存または新しいリストにリポジトリを追加できます。 

![リポジトリ ページの [Star]\(星\) ドロップダウン メニューに表示されたリスト オプションのスクリーンショット](/assets/images/help/stars/stars-dropdown-on-repo.png)

![星付きリポジトリ リストの [Starred]\(星付き\) ドロップダウン メニューに表示されたリスト オプションのスクリーンショット](/assets/images/help/stars/add-repo-to-list.png)

### リストの作成

{% data reusables.stars.stars-page-navigation %}
2. [リスト] の横にある **[リストの作成]** をクリックします。
  ![[リストの作成] ボタンのスクリーンショット](/assets/images/help/stars/create-list.png)
3. リストの名前と説明を入力し、 **[作成]** をクリックします。
  ![名前と説明の入力場所と [作成] ボタンが表示されたモーダルのスクリーンショット。](/assets/images/help/stars/create-list-with-description.png)

### リストへのリポジトリの追加

{% data reusables.stars.stars-page-navigation %}
2. リストに追加するリポジトリを探します。
  ![星付きリポジトリの検索バーのスクリーンショット](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. 追加するリポジトリの横にある **[Starred]\(星付き\)** ドロップダウン メニューを使用して、リストを選択します。
  ![リストのチェックボックスが表示されたドロップダウンのスクリーンショット](/assets/images/help/stars/add-repo-to-list.png)

### リストからリポジトリを削除する

{% data reusables.stars.stars-page-navigation %}
2. リストを選択します。
3. 削除するリポジトリの横にある **[Starred]\(星付き\)** ドロップダウン メニューを使用して、リストを選択解除します。
  ![リストのチェックボックスが表示されたドロップダウンのスクリーンショット](/assets/images/help/stars/add-repo-to-list.png)

### リストの名前または説明の編集

{% data reusables.stars.stars-page-navigation %}
1. 編集するリストを選択します。
2. **[リストの編集]** をクリックします。
3. 名前または説明を更新し、 **[リストの保存]** をクリックします。
  ![[リストの保存] ボタンが表示されたモーダルのスクリーンショット](/assets/images/help/stars/edit-list-options.png) 

### リストの削除

{% data reusables.stars.stars-page-navigation %}
2. 削除するリストを選択します。
3. **[リストの削除]** をクリックします。
  ![[リストの削除] ボタンが表示されたモーダルのスクリーンショット](/assets/images/help/stars/edit-list-options.png)
4. 確認のために、 **[削除]** をクリックします。

{% endif %}

## Star 付きのリポジトリとトピックの検索

{% data variables.explore.your_stars_page %} の検索バーを使用すると、Star の付いたリポジトリやトピックをすばやく見つけることができます。 

1. {% data variables.explore.your_stars_page %} に移動します。
1. 検索バーを使用して、Star 付きのリポジトリまたはトピックを名前で検索します。
![Star の検索](/assets/images/help/stars/stars_search_bar.png)

検索バーは、リポジトリまたはトピックの名前に基づいて検索するだけで、他の条件 (リポジトリのサイズ、最終更新日時など) は使われません。

## Star ページでの Star の並べ替えとフィルター処理

並べ替えやフィルター処理を使用して、Star 付きのリポジトリやトピックの Star ページでの表示方法をカスタマイズできます。

1. {% data variables.explore.your_stars_page %} に移動します。
1. Star を並べ替えるには、 **[並べ替え]** ドロップダウン メニューを選択し、 **[Recently starred]\(星の新しい順\)** 、 **[Recently active]\(最近アクティブな順\)** 、または **[Most stars]\(星が多い順\)** を選択します。
![Star の並べ替え](/assets/images/help/stars/stars_sort_menu.png)
1. Star のリストを言語に基づいてフィルター処理するには、 **[Filter by languages]\(言語でフィルター処理\)** で目的の言語をクリックします。
![Star を言語別にフィルター処理する](/assets/images/help/stars/stars_filter_language.png)
1. Star のリストをリポジトリやトピックに基づいてフィルター処理するには、目的のオプションをクリックします。
![Star をトピックでフィルター処理する](/assets/images/help/stars/stars_filter_topic.png)

## 参考資料

- 「[トピックでリポジトリを分類する](/articles/classifying-your-repository-with-topics)」
