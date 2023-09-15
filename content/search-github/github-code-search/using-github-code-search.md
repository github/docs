---
title: Using GitHub Code Search
intro: 'You can use suggestions, completions and saved searches in the upgraded search interface to quickly find what you are looking for across {% data variables.product.prodname_dotcom_the_website %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: code-search-code-view
topics:
  - GitHub search
---

## About using {% data variables.product.prodname_dotcom%} code search

{% data variables.product.prodname_dotcom %} indexes repositories you own and repositories in organizations you are a member of, whether public, private, or internal. This means that you can search across all of your repositories, in addition to the public repositories on {% data variables.product.prodname_dotcom_the_website %} that have already been indexed. Only users with permission to view your code on {% data variables.product.prodname_dotcom_the_website %} will be able to see your code in search results. Forks are indexed and searchable in the same way as other repositories.

Not all code is indexed, and you can currently only search the default branches of repositories. For more information on known limitations, see "[AUTOTITLE](/search-github/github-code-search/about-github-code-search#limitations)."

{% data reusables.search.code-search-login-requirement %}

## Using the search bar

You can search using the search interface on {% data variables.product.prodname_dotcom_the_website %}. Using suggestions, completions, and saved searches, you can quickly find what you are looking for, often without having to fully type a query or view the search results page.

For more information about the search syntax of code search, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax)."

{% data reusables.search.non-code-search-explanation %}

1. In the top navigation of {% data variables.product.prodname_dotcom_the_website %}, click the search bar.
1. Under the search bar, you will see a list of suggestions organized by category, including recent searches and suggested repositories, teams, and projects that you have access to. You can also see a list of saved searches that you have created. For more information on saved searches, see "[Creating and managing saved searches](#creating-and-managing-saved-searches)."

    ![Screenshot of the {% data variables.product.prodname_dotcom %} search bar. There is a list of search suggestions by category below the search bar.](/assets/images/help/search/code-search-beta-search-bar.png)

    If you click on any of the specific suggestions, you will be taken directly to the page for that suggestion (for example, the repository or project page). If you click on a recent or saved search, depending on the type of search, the search query will appear in the search bar or you will be taken to the search results page for the search term.

1. Once you start typing a search query, you will see a list of completions and suggestions that match your query. You can click on a suggestion to jump to a specific location. As you type more qualifiers, you will see more specific suggestions, such as code files you can jump to directly.

   ![Screenshot of a search for "repo:octocat/spoon-knife". The code results are outlined in dark orange.](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1. After typing your query, you can also press Enter to go to the full search results view, where you can see each match and a visual interface for applying filters. For more information, see "[Using the search results view](#using-the-search-results-view)."

## Creating and managing saved searches

1. In the top navigation of {% data variables.product.prodname_dotcom_the_website %}, click the search bar and type `saved:`.
1. Under the search bar, the "Saved searches" section should now appear. Click {% octicon "plus-circle" aria-hidden="true" %} **Create saved search**.
1. In the pop-up window, fill out the name you want for your query and the query that you want to save. Click **Create saved search**.
1. If you click again on the search bar, you can now see your saved search in the "Saved searches" section under the search bar. Clicking on a saved search entry will add the query to the search bar and filter the suggestions accordingly.
    - To edit a saved search, in the "Saved searches" section, click {% octicon "pencil" aria-label="The pencil icon" %} to the right of the saved search.
    - To delete a saved search, click {% octicon "trash" aria-label="The trash icon" %} to the right of the saved search.

## Using the search results view

To construct a search query, as well as view and filter results, using a visual interface, you can use the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. If you press Enter after typing a search query in the search bar, you will also be taken to the search results view.

On the search results view, you can navigate between different types of search results, including code, issues, pull request, repositories, and more. You can also view and use filters.
