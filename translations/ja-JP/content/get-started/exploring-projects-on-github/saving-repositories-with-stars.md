---
title: Star を付けてリポジトリを保存する
intro: 'リポジトリや Topics に Star を付けて、興味のあるプロジェクトを追跡し{% ifversion fpt or ghec %}、ニュースフィードで関連コンテンツを見つけることができます{% endif %}。'
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
---

You can search, sort, and filter your starred repositories and topics on your {% data variables.explore.your_stars_page %}.

## Star について

Star を付けることで、リポジトリやトピックが後で見つけやすくなります。 {% data variables.explore.your_stars_page %} にアクセスすると、Star 付きのリポジトリとトピックを確認することができます。

{% ifversion fpt or ghec %}
リポジトリとトピックに Star を付けることで、{% data variables.product.product_name %} 上で類似のプロジェクトを見つけることができます。 When you star repositories or topics, {% data variables.product.product_name %} may recommend related content on your personal dashboard. For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)" and "[About your personal dashboard](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)."
{% endif %}

リポジトリに Star を付けるということは、リポジトリメンテナに対してその作業についての感謝を示すことでもあります。 {% data variables.product.prodname_dotcom %} のリポジトリランキングの多くは、リポジトリに付けられた Star の数を考慮しています。 また、[Explore](https://github.com/explore) は、リポジトリに付けられた Star の数に基づいて、人気のあるリポジトリを表示しています。

## Starring a repository

Starring a repository is a simple two-step process.

{% data reusables.repositories.navigate-to-repo %}
1. In the top-right corner of the page, click **Star**. ![Starring a repository](/assets/images/help/stars/starring-a-repository.png)
1. Optionally, to unstar a previously starred repository, click **Unstar**. ![Untarring a repository](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Viewing who has starred a repository


You can view everyone who has starred a public repository or a private repository you have access to.


To view everyone who has starred a repository, add `/stargazers` to the end of the URL of a repository. For example, to view stargazers for the github/docs repository, visit https://github.com/github/docs/stargazers.


## Organizing starred repositories with lists

{% note %}

**Note:** Lists are currently in public beta and subject to change.

{% endnote %}

Curate repositories that you've starred with public lists. You can create public lists that appear on your stars page at `https://github.com/USERNAME?tab=stars`.

If you add a private repository to a list, then the private repository will only appear in your list for people with `read` access to the repository.

![Screenshot of lists on stars page](/assets/images/help/stars/lists-overview-on-stars-page.png)

You can add a repository to an existing or new list wherever you see a repository's **Star** or **Starred** dropdown menu, whether on a repository page or in a list of starred repositories.

![Screenshot of "Star" dropdown menu with list options featured from the repository page](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Screenshot of "Starred" dropdown menu with list options featured from a starred repository list](/assets/images/help/stars/add-repo-to-list.png)

### Creating a list

{% data reusables.stars.stars-page-navigation %}
2. Next to "Lists", click **Create list**. ![Screenshot of "Create list" button](/assets/images/help/stars/create-list.png)
3. Enter a name and description for your list and click **Create**. ![Screenshot of modal showing where you enter a name and description with the "Create" button.](/assets/images/help/stars/create-list-with-description.png)

### Adding a repository to a list

{% data reusables.stars.stars-page-navigation %}
2. Find the repository you want to add to your list. ![Screenshot of starred repos search bar](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Next to the repository you want to add, use the **Starred** dropdown menu and select your list. ![Screenshot of dropdown showing a list checkboxes](/assets/images/help/stars/add-repo-to-list.png)

### Removing a repository from your list

{% data reusables.stars.stars-page-navigation %}
2. Select your list.
3. Next to the repository you want to remove, use the **Starred** dropdown menu and deselect your list. ![Screenshot of dropdown showing list checkboxes](/assets/images/help/stars/add-repo-to-list.png)

### Editing a list name or description

{% data reusables.stars.stars-page-navigation %}
1. Select the list you want to edit.
2. Click **Edit list**.
3. Update the name or description and click **Save list**. ![Screenshot of modal showing "Save list" button](/assets/images/help/stars/edit-list-options.png)

### Deleting a list

{% data reusables.stars.stars-page-navigation %}
2. Select the list you want to delete.
3. Click **Delete list**. ![Screenshot of modal showing "Delete list" button](/assets/images/help/stars/edit-list-options.png)
4. To confirm, click **Delete**.

{% endif %}

## Searching starred repositories and topics

You can use the search bar on your {% data variables.explore.your_stars_page %} to quickly find repositories and topics you've starred.

1. Go to your {% data variables.explore.your_stars_page %}.
1. Use the search bar to find your starred repositories or topics by their name. ![Star で検索する](/assets/images/help/stars/stars_search_bar.png)

検索バーは、リポジトリまたはトピックの名前に基づいて検索するだけで、他の条件 (リポジトリのサイズ、最終更新日時など) は使われません。

## Sorting and filtering stars on your stars page

You can use sorting or filtering to customize how you see starred repositories and topics on your stars page.

1. Go to your {% data variables.explore.your_stars_page %}.
1. To sort stars, select the **Sort** drop-down menu, then select **Recently starred**, **Recently active**, or **Most stars**. ![Star のソート](/assets/images/help/stars/stars_sort_menu.png)
1. To filter your list of stars based on their language, click on the desired language under **Filter by languages**. ![Star を言語別にフィルタリング](/assets/images/help/stars/stars_filter_language.png)
1. To filter your list of stars based on repository or topic, click on the desired option. ![Filter stars by topic](/assets/images/help/stars/stars_filter_topic.png)

## 参考リンク

- [Topics によるリポジトリの分類](/articles/classifying-your-repository-with-topics)
