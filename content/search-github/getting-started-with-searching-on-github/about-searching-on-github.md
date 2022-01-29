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

You can search for the following information across all repositories you can access on {% data variables.product.product_location %}.

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

You can search {% data variables.product.product_name %} using the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. {% if command-palette %}Alternatively, you can use the interactive search in the {% data variables.product.prodname_command_palette %} to search your current location in the UI, a specific user, repository or organization, and globally across all of {% data variables.product.product_name %}, without leaving the keyboard. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

The {% data variables.search.advanced_url %} provides a visual interface for constructing search queries. You can filter your searches by a variety of factors, such as the number of stars or number of forks a repository has. As you fill in the advanced search fields, your query will automatically be constructed in the top search bar.

![Advanced Search](/assets/images/help/search/advanced_search_demo.gif)

{% ifversion fpt or ghes or ghae or ghec %}

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

If you use {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}{% else %}{% data variables.product.product_name %}{% endif %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, an enterprise owner for your {% data variables.product.prodname_enterprise %} environment can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time{% ifversion ghes or ghae %} from {% data variables.product.product_name %}{% endif %}. For more information, see the following.

{% ifversion fpt or ghes or ghec %}

- "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}
- "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise](/github-ae@latest/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" in the {% data variables.product.prodname_ghe_managed %} documentation

{% ifversion ghes or ghae %}

To scope your search by environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.product_name %}, use the search syntax `environment:local`. To only search for content on {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.

Your enterprise owner on {% data variables.product.product_name %} can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.

When you search from {% data variables.product.product_name %}, you can only search in the private repositories that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Enterprise owners for {% data variables.product.product_name %} and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account on {% data variables.product.prodname_dotcom_the_website %}. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

{% endif %}

{% endif %}

## Further reading

- "[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[Searching on GitHub](/articles/searching-on-github)"
