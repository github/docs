---
title: Searching code for exact matches
intro: 'You can search code for exact matches in repositories on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
permissions: People with read permissions to a repository can search the repository's files for exact matches.
versions:
  free-pro-team: '*'
---

{% note %}

{% data reusables.search.exact-match-beta %} To request access to the beta, [join the waitlist](https://github.com/features/code-search-exact-match/signup).

{% endnote %}

### About searching code for exact matches

{% data reusables.search.exact-match %}

By default, searches for exact matches are case and symbol-sensitive, and don't include partial matches or normalized grammar. For example, searching for `let ReactDOM*` will only return `let ReactDOM*`.

### Searching code for exact matches

{% note %}

Searching files within a repository for exact matches only works with indexed repositories for the beta release.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. In the search field, type the string you'd like to find. ![Exact match search string](/assets/images/help/search/exact-match-search-string.png)
3. Optionally, click the **Options** drop-down to narrow your search. ![Exact match search Options drop-down](/assets/images/help/search/exact-match-options.png)
4. Press <kbd>Enter</kbd> or <kbd>Return</kbd> on your keyboard.
5. In the list of results, click the file.

### Leia mais

- "[Pesquisar código](/github/searching-for-information-on-github/searching-code)"
- "[Navigating code on {% data variables.product.product_name %}](/github/managing-files-in-a-repository/navigating-code-on-github)"
