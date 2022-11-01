---
title: Using GitHub Code Search (beta)
intro: ''
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
---

{% note %}

**Note:** {% data reusables.search.code-search-code-view-beta-note %}<br><br>

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## About using GitHub Code Search (beta)

Upon getting access to the GitHub Code Search beta, GitHub will index any repositories you own and any repositories in organizations you are a member of, whether public, private, or internal. This means that you can search across all of your repositories, in addition to the public repositories on GitHub.com that have already been indexed. Only users with permission to view your code on GitHub.com will be able to see your code in search results.

Not all code is indexed, and you can currently only search the default branches of repositories. For more information on known limitations, see "[About GitHub Code Search (beta)](/search-github/github-code-search/about-github-code-search#limitations)."

The GitHub Code Search beta is integrated within the new code view beta. {% data reusables.search.code-view-link %}

## Using the search bar

You can use the existing search bar on the top navigation of GitHub.com. Using suggestions, completions, and saved searches, you can quickly find what you are looking for, often without having to fully type a query or view the search results page.

For more information about the search syntax of GitHub Code Search (beta), see "[Understanding GitHub Code Search (beta) syntax](/search-github/github-code-search/understanding-github-code-search-syntax)."

Note that the syntax and qualifiers for searching for non-code content, such as issues, users, and discussions, works the same as it did before, in the classic search. For more information on the classic search, see "[About search on GitHub](/articles/about-search-on-github) and "[Searching on GitHub](/search-github/searching-on-github/index.md)."

1. In the top navigation of GitHub.com, click the search bar.
2. Under the search bar, you will see a list of suggestions organized by category, including recent searches and suggested repositories, teams, and projects that you have access to. You can also see a list of saved searches that you have created. For more information on saved searches, see [Using the search results view](#creating-and-managing-saved-searches).

If you click on any of the specific suggestions, you will be taken directly to the page for that suggestion (for example, the repository or project page). If you click on a recent or saved search, you will be taken to the search results view for that search query. 
3. Once you start typing a search query, you will see a list of completions and suggestions that match your query. You can click on those to jump to a specific location. As you type more qualifiers, you will see more specific suggestions, such as code files.
4.  After typing your query, you can also hit Enter to be taken to the full search results view. For more information, see [Using the search results view](#using-the-search-results-view).

## Creating and managing saved searches

1. In the top navigation of GitHub.com, click the search bar and start typing a search query (or any word).
2. Under the search bar, the "Saved searches" section should now show. Click **Create saved search**.
3. In the pop-up window, fill out the name you want for your query and the query that you want to save. Click **Create saved search**.

If you click again on the search bar, you can now see your saved search in the "Saved searches" section under the search bar. Clicking on a saved search will add the query to the search bar and filter the suggestions accordingly.

To edit a saved search, select the search bar and, in the "Saved searches" section, click the pencil icon to the right of the saved search. To delete a saved search, click the trash can icon to the right of the saved search.

## Using the search results view

This search results view already existed for the current search on GitHub, and the functionality for most search types, except code, is the same. With GitHub Code Search beta enabled, the search results page has a redesigned UI and includes filters that are part of the new code search engine, such as path and symbol filters. 

To construct a search query and view, sort, and filter results using a visual interface, you can use {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. 

If you hit Enter after typing a search query in the search bar, you will also be taken to the search results view. 

On the search results view, you can navigate between different types of search results, including code, issues, pull request, repositories, and more. You can also view and click on filters and sort results.