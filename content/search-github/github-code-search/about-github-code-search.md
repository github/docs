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

GitHub Code Search (beta) lets you rapidly search, navigate and understand your code, your team's code, and the code of the open source community, all from {% data variables.product.prodname_dotcom_the_website %}. This search engine is designed to be scalable, code-aware, and support searching code across GitHub using regular expressions, boolean operations, specialized qualifiers, and symbol search. For more information on the syntax of GitHub Code Search (beta), see "[Understanding GitHub Code Search (beta) syntax](/search-github/github-code-search/understanding-github-code-search-syntax)."

On top of the new code search engine, GitHub Code Search (beta) includes new features in the search interface on {% data variables.product.prodname_dotcom_the_website %}, allowing you to more quickly and easily find what you are looking for, including suggestions, completions, and the ability to save your searches. For more information, see "[Using GitHub Code Search (beta)](/search-github/github-code-search/using-github-code-search)."

{% data reusables.search.non-code-search-explanation %}

GitHub Code Search (beta) is tightly integrated with a redesigned code view (beta) on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-view-link %}

To get access to GitHub Code Search (beta), along with the new code view, you can sign up for the [waitlist](https://github.com/features/code-search-code-view/signup). 

## Enabling and disabling GitHub Code Search (beta)

Once you are given access to the GitHub Code Search and Code View beta, you can enable or disable GitHub Code Search on {% data variables.product.prodname_dotcom_the_website %} anytime. Note that this setting applies to both the search and the code view.

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

GitHub Code Search (beta) supports searching for symbol definitions in code, such as function or class definitions, using the `symbol:` qualifier. However, note that the `symbol:` qualifier only searches for definitions and not references, and not all symbol types or languages are fully supported yet. For a list of what languages are supported, see "[Symbol qualifier](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)."
## Feedback and support

You can view and share feedback about GitHub Code Search (beta) in our [discussion forum](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).