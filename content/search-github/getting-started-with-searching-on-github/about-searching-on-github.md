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

## About searching on {% data variables.product.prodname_dotcom %}

{% data reusables.search.you-can-search-globally %}

- To search globally across all of {% data variables.product.product_name %}, type what you're looking for into the search field at the top of any page, and choose "Search all of {% data variables.product.prodname_dotcom %}" in the search dropdown menu.
- To search within a particular repository or organization, navigate to the repository or organization page, type what you're looking for into the search field at the top of the page, and press **Enter**.

  {% ifversion code-search-code-view %}You can also use suggestions and completions in the search bar to quickly find what you need.

- If you click on the search bar in the top navigation of GitHub.com, you will see a list of suggestions organized by category, including recent searches and suggested repositories, teams, and projects that you have access to.
- Clicking on any of the specific suggestions will take you directly to the page for that suggestion (for example, the repository or project page). If you click on a recent search, depending on the type of search, the search term will appear in the search bar or you will be taken to the search results page for the search term.
- Once you start typing, you will see a list of completions and suggestions that match your query. You can click on a suggestion to jump to a specific location. As you continue to type, you will see more specific suggestions, such as code files you can jump to directly.

After typing a search query, you can press **Enter** to go to the full search results view, where you can see each match and a visual interface for applying filters. For more information, see "[Searching using a visual interface](#searching-using-a-visual-interface)."
{% endif %}

{% note %}

**Notes:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} sites are not searchable on {% data variables.product.product_name %}. However you can search the source content if it exists in the default branch of a repository, using code search. For more information, see "[AUTOTITLE]{% ifversion code-search-code-view %}(/search-github/github-code-search/understanding-github-code-search-syntax){% else %}(/search-github/searching-on-github/searching-code){% endif %}." For more information about {% data variables.product.prodname_pages %}, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages)"
- Currently our search doesn't support exact matching.{% ifversion ghes or ghae %}
- Whenever you are searching in code files, only the first two results in each file will be returned.{% endif %}

{% endnote %}

After running a search on {% data variables.product.product_name %}, you can sort the results, or further refine them by clicking one of the languages in the sidebar. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)."

{% data variables.product.product_name %} search uses an ElasticSearch cluster to index projects every time a change is pushed to {% data variables.product.product_name %}. Issues and pull requests are indexed when they are created or modified.

## Types of searches on {% data variables.product.prodname_dotcom %}

You can search for the following information across all repositories you can access on {% data variables.location.product_location %}.

- [Repositories](/search-github/searching-on-github/searching-for-repositories)
- [Topics](/search-github/searching-on-github/searching-topics)
- [Issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Discussions](/search-github/searching-on-github/searching-discussions){% endif %}
- {% ifversion code-search-code-view %}[Code](/search-github/github-code-search/understanding-github-code-search-syntax){% else %}[Code](/search-github/searching-on-github/searching-code){% endif %}
- [Commits](/search-github/searching-on-github/searching-commits)
- [Users](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Searching using a visual interface

In addition to the search bar, you can search {% data variables.product.product_name %} using the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. {% ifversion command-palette %}Alternatively, you can use the interactive search in the {% data variables.product.prodname_command_palette %} to search your current location in the UI, a specific user, repository or organization, and globally across all of {% data variables.product.product_name %}, without leaving the keyboard. For more information, see "[AUTOTITLE](/get-started/using-github/github-command-palette)."{% endif %}

The {% data variables.search.advanced_url %} provides a visual interface for constructing search queries. You can filter your searches by a variety of factors, such as the number of stars or number of forks a repository has. As you fill in the advanced search fields, your query will automatically be constructed in the top search bar.

![Screenshot of the Advanced search page. The top search bar is filled in with the query "kittens user:octocat" and, under the "Advanced options" section below, the "From these owners" text box contains the term "octocat" and is outlined in dark orange.](/assets/images/help/search/advanced-search.png)

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

{% ifversion fpt or ghec %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, and an enterprise owner has enabled {% data variables.enterprise.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}. For more information, see [the {% data variables.product.prodname_ghe_server %} documentation](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) or [the {% data variables.product.prodname_ghe_managed %} documentation](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}, and an enterprise owner has enabled {% data variables.enterprise.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.product_name %}. For more information about how enterprise owners can enable {% data variables.enterprise.prodname_unified_search %}, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

Your enterprise owner on {% data variables.product.product_name %} can separately enable {% data variables.enterprise.prodname_unified_search %} for all public repositories on {% data variables.product.prodname_dotcom_the_website %} and for private repositories owned by the organization or enterprise on {% data variables.product.prodname_dotcom_the_website %} that is connected to {% data variables.product.product_name %} through {% data variables.product.prodname_github_connect %}.

Before you can use {% data variables.enterprise.prodname_unified_search %} for private repositories, you must connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

When you search from {% data variables.product.product_name %}, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Neither you nor anyone else will be able to search private repositories owned by your personal account on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.product_name %}.

To limit your search to one environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.product_name %}, use the search syntax `environment:local`. To only search for content on {% data variables.product.prodname_dotcom_the_website %}, use `environment:github`.
{% endif %}

## Further reading

- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[AUTOTITLE](/search-github/searching-on-github)"
