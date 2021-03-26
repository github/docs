---
title: About searching on GitHub
intro: 'Our integrated search covers the many repositories, users, and lines of code on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github search
---

{% data reusables.search.you-can-search-globally %}

- To search globally across all of {% data variables.product.product_name %}, type what you're looking for into the search field at the top of any page, and choose "All {% data variables.product.prodname_dotcom %}" in the search drop-down menu.
- To search within a particular repository or organization, navigate to the repository or organization page, type what you're looking for into the search field at the top of the page, and press **Enter**.

{% note %}

**Замечания:**

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} sites are not searchable on {% data variables.product.product_name %}. However you can search the source content if it exists in the default branch of a repository, using code search. For more information, see "[Searching code](/articles/searching-code)." For more information about {% data variables.product.prodname_pages %}, see "[What is GitHub Pages?](/articles/what-is-github-pages/)"
- Currently our search doesn't support exact matching.
- Whenever you are searching in code files, only the first two results in each file will be returned.

{% endnote %}

After running a search on {% data variables.product.product_name %}, you can sort the results, or further refine them by clicking one of the languages in the sidebar. For more information, see "[Sorting search results](/articles/sorting-search-results)."

{% data variables.product.product_name %} search uses an ElasticSearch cluster to index projects every time a change is pushed to {% data variables.product.product_name %}. Issues and pull requests are indexed when they are created or modified.

### Types of searches on {% data variables.product.prodname_dotcom %}

You can search for the following information across all repositories you can access on {% data variables.product.product_location %}.

- [Repositories](/articles/searching-for-repositories)
- [Topics](/articles/searching-topics)
- [Issues and pull requests](/articles/searching-issues-and-pull-requests){% if currentVersion == "free-pro-team@latest" %}
- [Discussions](/github/searching-for-information-on-github/searching-discussions){% endif %}
- [Code](/articles/searching-code)
- [Commits](/articles/searching-commits)
- [Users](/articles/searching-users){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest"  or currentVersion ver_gt "enterprise-server@2.21" %}
- [Packages](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### Searching using a visual interface

Alternatively, you can search {% data variables.product.product_name %} using the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}.

The {% data variables.search.advanced_url %} provides a visual interface for constructing search queries. You can filter your searches by a variety of factors, such as the number of stars or number of forks a repository has. As you fill in the advanced search fields, your query will automatically be constructed in the top search bar.

![Advanced Search](/assets/images/help/search/advanced_search_demo.gif)

{% if currentVersion != "github-ae@latest" %}
### Searching across {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_dotcom_the_website %} simultaneously

If you use {% data variables.product.prodname_enterprise %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, your {% data variables.product.prodname_enterprise %} site administrator can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time. For more information, see "[Enabling {% data variables.product.prodname_unified_search %} between {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com)."

You can only search across both environments from {% data variables.product.prodname_enterprise %}. To scope your search by environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.prodname_enterprise %}, use the search syntax `environment:local`. To only search for content on {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.

Your {% data variables.product.prodname_enterprise %} site administrator can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.
If your site administrator enables

{% data variables.product.prodname_unified_search %} in private repositories, you can only search in the private repositories that the administrator enabled {% data variables.product.prodname_unified_search %} for and that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Your {% data variables.product.prodname_enterprise %} administrators and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_enterprise %}. For more information, see "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your {% data variables.product.prodname_enterprise %} account](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)."
{% endif %}

### Дополнительная литература

- "[Understanding the search syntax](/articles/understanding-the-search-syntax)"
- "[Searching on GitHub](/articles/searching-on-github)"
