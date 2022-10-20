---
title: About searching on GitHub
intro: 'Our integrated search covers the many repositories, users, and lines of code on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---
{% data reusables.search.you-can-search-globally %}

- To search globally across all of {% data variables.product.product_name %}, type what you're looking for into the search field at the top of any page, and choose "All {% data variables.product.prodname_dotcom %}" in the search drop-down menu.
- To search within a particular repository or organization, navigate to the repository or organization page, type what you're looking for into the search field at the top of the page, and press **Enter**.

{% note %}

**Notes:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} sites are not searchable on {% data variables.product.product_name %}. However you can search the source content if it exists in the default branch of a repository, using code search. For more information, see "[Searching code](/search-github/searching-on-github/searching-code)." For more information about {% data variables.product.prodname_pages %}, see "[What is GitHub Pages?](/articles/what-is-github-pages/)"
- Currently our search doesn't support exact matching.
- Whenever you are searching in code files, only the first two results in each file will be returned.

{% endnote %}

After running a search on {% data variables.product.product_name %}, you can sort the results, or further refine them by clicking one of the languages in the sidebar. For more information, see "[Sorting search results](/search-github/getting-started-with-searching-on-github/sorting-search-results)."

{% data variables.product.product_name %} search uses an ElasticSearch cluster to index projects every time a change is pushed to {% data variables.product.product_name %}. Issues and pull requests are indexed when they are created or modified.

## Types of searches on {% data variables.product.prodname_dotcom %}

You can search for the following information across all repositories you can access on {% data variables.location.product_location %}.

- [Repositories](/search-github/searching-on-github/searching-for-repositories)
- [Topics](/search-github/searching-on-github/searching-topics)
- [Issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Discussions](/search-github/searching-on-github/searching-discussions){% endif %}
- [Code](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Users](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Searching using a visual interface

You can search {% data variables.product.product_name %} using the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. {% ifversion command-palette %}Alternatively, you can use the interactive search in the {% data variables.product.prodname_command_palette %} to search your current location in the UI, a specific user, repository or organization, and globally across all of {% data variables.product.product_name %}, without leaving the keyboard. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

The {% data variables.search.advanced_url %} provides a visual interface for constructing search queries. You can filter your searches by a variety of factors, such as the number of stars or number of forks a repository has. As you fill in the advanced search fields, your query will automatically be constructed in the top search bar.

![Advanced Search](/assets/images/help/search/advanced_search_demo.gif)

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

{% ifversion fpt or ghec %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, and an enterprise owner has enabled {% data variables.enterprise.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}. For more information, see [the {% data variables.product.prodname_ghe_server %} documentation](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) or [the {% data variables.product.prodname_ghe_managed %} documentation](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}, and an enterprise owner has enabled {% data variables.enterprise.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.product_name %}. For more information about how enterprise owners can enable {% data variables.enterprise.prodname_unified_search %}, see "[Enabling {% data variables.enterprise.prodname_unified_search %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

Your enterprise owner on {% data variables.product.product_name %} can separately enable {% data variables.enterprise.prodname_unified_search %} for all public repositories on {% data variables.product.prodname_dotcom_the_website %} and for private repositories owned by the organization or enterprise on {% data variables.product.prodname_dotcom_the_website %} that is connected to {% data variables.product.product_name %} through {% data variables.product.prodname_github_connect %}.

Before you can use {% data variables.enterprise.prodname_unified_search %} for private repositories, you must connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

When you search from {% data variables.product.product_name %}, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Neither you nor anyone else will be able to search private repositories owned by your personal account on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.product_name %}.

To limit your search to one environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.product_name %}, use the search syntax `environment:local`. To only search for content on {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Further reading

- "[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Searching on GitHub](/articles/searching-on-github)"
