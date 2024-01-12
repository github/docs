---
title: About GitHub Code Search
intro: 'You can search, navigate and understand code across {% data variables.product.prodname_dotcom %} with code search.'
allowTitleToDifferFromFilename: true
versions:
  feature: code-search-code-view
topics:
  - GitHub search
---

## About {% data variables.product.prodname_dotcom %} code search

{% data variables.product.prodname_dotcom %} code search lets you rapidly search, navigate and understand your code, your team's code, and the code of the open source community. This search engine is designed to be scalable, code-aware, and support searching code across {% data variables.product.prodname_dotcom %} using regular expressions, boolean operations, specialized qualifiers, and symbol search. For more information on the syntax of code search, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax)."

Code search is integrated with features in the search interface on {% data variables.product.prodname_dotcom_the_website %}, such as suggestions, completions, and the ability to save your searches. On {% data variables.product.prodname_mobile %}, you can use the same methods to search through code in a specific repository. For more information, see "[AUTOTITLE](/search-github/github-code-search/using-github-code-search)."

{% data reusables.search.code-search-login-requirement %}

{% data reusables.search.non-code-search-explanation %}

## Limitations

We have indexed many public repositories for code search, and continue to index more. Additionally, the private repositories of {% data variables.product.prodname_dotcom%} users are indexed and searchable by those that already have access to those private repositories on {% data variables.product.prodname_dotcom_the_website %}. However, very large repositories may not be indexed at this time, and not all code is indexed.

The current limitations on indexed code are:
- Vendored and generated code is excluded
- Empty files and files over 350 KiB are excluded
- Lines over 1,024 characters long are truncated
- Only UTF-8 encoded files are included
- Very large repositories may not be indexed
- Exhaustive search is not supported

We currently only support searching for code on the default branch of a repository. The query length is limited to 1000 characters.

Results for any search with code search are restricted to 100 results (5 pages). Sorting is not supported for code search results at this time. This limitation only applies to searching code with the new code search and does not apply to other types of searches.

If you use the `path:` qualifier for a file that's in multiple repositories with similar content, {% data variables.product.prodname_dotcom %} will only show a few of those files. If this happens, you can choose to expand by clicking **Show identical files** at the bottom of the page.

Code search supports searching for symbol definitions in code, such as function or class definitions, using the `symbol:` qualifier. However, note that the `symbol:` qualifier only searches for definitions and not references, and not all symbol types or languages are fully supported yet. For a list of what languages are supported, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)."

{% ifversion mobile-code-search %}On {% data variables.product.prodname_mobile %}, you can only search the code in one repository at a time. For more information, see "[AUTOTITLE](/search-github/github-code-search/using-github-code-search#using-github-code-search-on-github-mobile)."{% endif %}

## Feedback and support

You can view and share feedback about code search in our [discussion forum](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).
