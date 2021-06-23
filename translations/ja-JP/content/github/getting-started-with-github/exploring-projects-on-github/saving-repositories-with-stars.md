---
title: Star を付けてリポジトリを保存する
intro: 'リポジトリや Topics に Star を付けて、興味のあるプロジェクトを追跡し{% if currentVersion == "free-pro-team@latest" %}、ニュースフィードで関連コンテンツを見つけることができます{% endif %}。'
redirect_from:
  - /articles/stars/
  - /articles/about-stars/
  - /articles/browsing-friends-stars/
  - /articles/managing-your-stars/
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

You can search, sort, and filter your starred repositories and topics on your {% data variables.explore.your_stars_page %}.

### Star について

Star を付けることで、リポジトリやトピックが後で見つけやすくなります。 {% data variables.explore.your_stars_page %} にアクセスすると、Star 付きのリポジトリとトピックを確認することができます。

{% if currentVersion == "free-pro-team@latest" %}
リポジトリとトピックに Star を付けることで、{% data variables.product.product_name %} 上で類似のプロジェクトを見つけることができます。 リポジトリあるいはトピックに Star を付けると、{% data variables.product.product_name %} はニュースフィードの discovery ビューで関連するコンテンツを推薦することがあります。 For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".
{% endif %}

リポジトリに Star を付けるということは、リポジトリメンテナに対してその作業についての感謝を示すことでもあります。 {% data variables.product.prodname_dotcom %} のリポジトリランキングの多くは、リポジトリに付けられた Star の数を考慮しています。 また、[Explore](https://github.com/explore) は、リポジトリに付けられた Star の数に基づいて、人気のあるリポジトリを表示しています。

### Starring a repository

Starring a repository is a simple two-step process.

{% data reusables.repositories.navigate-to-repo %}
1. In the top-right corner of the page, click **Star**. ![Starring a repository](/assets/images/help/stars/starring-a-repository.png)
1. Optionally, to unstar a previously starred repository, click **Unstar**. ![Untarring a repository](/assets/images/help/stars/unstarring-a-repository.png)

### Star の検索

You can use the search bar on your {% data variables.explore.your_stars_page %} to quickly find repositories and topics you've starred.

1. Go to your {% data variables.explore.your_stars_page %}.
1. Use the search bar to find your starred repositories or topics by their name. ![Star で検索する](/assets/images/help/stars/stars_search_bar.png)

検索バーは、リポジトリまたはトピックの名前に基づいて検索するだけで、他の条件 (リポジトリのサイズ、最終更新日時など) は使われません。

### Star のソートとフィルタリング

You can use sorting or filtering to customize how you see starred repositories and topics on your stars page.

1. Go to your {% data variables.explore.your_stars_page %}.
1. To sort stars, select the **Sort** drop-down menu, then select **Recently starred**, **Recently active**, or **Most stars**. ![Star のソート](/assets/images/help/stars/stars_sort_menu.png)
1. To filter your list of stars based on their language, click on the desired language under **Filter by languages**. ![Star を言語別にフィルタリング](/assets/images/help/stars/stars_filter_language.png)
1. To filter your list of stars based on repository or topic, click on the desired option. ![Filter stars by topic](/assets/images/help/stars/stars_filter_topic.png)

### 参考リンク

- [Topics によるリポジトリの分類](/articles/classifying-your-repository-with-topics)
