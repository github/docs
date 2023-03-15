---
title: About GitHub Code Search (beta)
intro: 'You can search, navigate and understand code across GitHub with the new code search (beta).'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
---

{% note %}

**Note:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## About the new code search (beta)

The new code search (beta) lets you rapidly search, navigate and understand your code, your team's code, and the code of the open source community, all from {% data variables.product.prodname_dotcom_the_website %}. This search engine is designed to be scalable, code-aware, and support searching code across GitHub using regular expressions, boolean operations, specialized qualifiers, and symbol search. For more information on the syntax of the new code search (beta), see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax)."

On top of the new code search engine, the code search (beta) includes new features in the search interface on {% data variables.product.prodname_dotcom_the_website %}, such as suggestions, completions, and the ability to save your searches. The new search interface allows you to more quickly and easily find what you are looking for. For more information, see "[AUTOTITLE](/search-github/github-code-search/using-github-code-search)."

{% data reusables.search.non-code-search-explanation %}

The new code search (beta) is tightly integrated with a redesigned code view (beta) on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-view-link %}

## Enabling and disabling the new code search and code view (beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Limitations

We have indexed many public repositories for the new code search (beta), and continue to index more. Additionally, the private repositories of GitHub users in the beta are indexed and searchable by beta participants that already have access to those private repositories on GitHub.com. However, very large repositories may not be indexed at this time, and not all code is indexed.

The current limitations on indexed code are:
   - Vendored and generated code is excluded (as determined by [Enry](https://github.com/go-enry/go-enry))
   - Empty files and files over 350 KiB are excluded
   - Only UTF-8 encoded files are included
   - Very large repositories may not be indexed

We currently only support searching for code on the default branch of a repository.

Results for any search with the new code search (beta) are restricted to 100 results (10 pages). Sorting is not supported for code search results at this time. This limitation only applies to searching code with the new code search (beta) and does not apply to other types of searches.

The new code search (beta) supports searching for symbol definitions in code, such as function or class definitions, using the `symbol:` qualifier. However, note that the `symbol:` qualifier only searches for definitions and not references, and not all symbol types or languages are fully supported yet. For a list of what languages are supported, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)."

## Feedback and support

You can view and share feedback about the new code search (beta) in our [discussion forum](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).
