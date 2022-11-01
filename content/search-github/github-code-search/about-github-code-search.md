---
title: About GitHub Code Search (beta)
intro: 'You can search, navigate and understand code across GitHub with GitHub Code Search (beta).'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
---

{% note %}

**Note:** {% data reusables.search.code-search-code-view-beta-note %}<br><br>

{% data reusables.search.code-view-link %}

{% endnote %}

## About GitHub Code Search (beta)

GitHub Code Search (beta) lets you rapidly search, navigate and understand your code, your team's code, and the code of the open source community, all from GitHub.com. This search engine is designed to be scalable, code-aware, and support searching code across GitHub using regular expressions, boolean operations, specialized qualifiers, and keyboard shortcuts. For more information on the syntax of GitHub Code Search (beta), see "[Understanding GitHub Code Search (beta) syntax](/articles/understanding-github-code-search-syntax)."

On top of the new code search engine, GitHub Code Search (beta) includes new features in the search interface on GitHub.com, allowing you to more quickly and easily find what you are looking for, including suggestions, completions, and the ability to save your searches. For more information, see "[Using GitHub Code Search (beta)](/articles/using-github-code-search)."

Note that the syntax and qualifiers for searching for non-code content, such as issues, users, and discussions, works the same as it did before, in the classic search. For more information on the classic search, see "[About search on GitHub](/articles/about-search-on-github) and "[Searching on GitHub](/search-github/searching-on-github/index.md)."

GitHub Code Search (beta) is tightly integrated with a redesigned code view (beta) on GitHub.com. {% data reusables.search.code-view-link %}

To get access to GitHub Code Search (beta), along with the new code view, you can sign up for the [waitlist](https://github.com/features/code-search-code-view/signup). 

## Enabling and disabling GitHub Code Search (beta)

Once you are given access to the GitHub Code Search and Code View beta, you can enable or disable GitHub Code Search on GitHub.com anytime. Note that this setting applies to both the search and the code view.

{% data reusables.feature-preview.feature-preview-setting  %}
1. To the right of "New Code Search and Code View (Beta)", click **Enable** or **Disable**.

## Limitations

We have indexed more than 10 million public repositories for GitHub Code Search (beta). Additionally, the private repositories of GitHub users in the beta are indexed and searchable by beta participants that already have access to those private repositories on GitHub.com. However, very large repositories may not be indexed at this time, and not all code is indexed. 

The current limitations on indexed code are:
    - Vendored and generated code is excluded (as determined by [Enry](https://github.com/go-enry/go-enry))
    - Empty files and files over 350 KiB are excluded
    - Only UTF-8 encoded files are included
    - Very large repositories may not be indexed

We currently only support searching for code on the default branch of a repository.

Results for any search with GitHub Code Search (beta) are restricted to 100 results (10 pages). This limitation only applies to searching code with GitHub Code Search (beta) and does not apply to other types of searches.

ADD SYMBOL SEARCH INFO HERE

## Feedback and support

You can view and share feedback about GitHub Code Search (beta) in our [discussion forum](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).