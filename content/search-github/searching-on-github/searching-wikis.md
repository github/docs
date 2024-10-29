---
title: Searching wikis
intro: 'You can search wikis on {% data variables.product.product_name %} and narrow the results using these wiki search qualifiers in any combination.'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub search
---
You can search wikis globally across all of {% data variables.product.product_name %}, or search wikis within a particular repository or organization. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% data reusables.search.syntax_tips %}

## Search within a user's or organization's repositories

To find wiki pages from all repositories owned by a certain user or organization, use the `user` or `org` qualifier. To find wiki pages from a specific repository, use the `repo` qualifier.

| Qualifier        | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) matches wiki pages from repositories owned by @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) matches wikis in repositories owned by the GitHub organization.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) matches wiki pages from @defunkt's "gibberish" repository.

## Search within a wiki page title or body text

The `in` qualifier limits the search to the wiki page title or body text. Without the qualifier, both the title and body text are searched.

| Qualifier        | Example
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) matches wiki page titles with the word "usage."
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) matches wiki pages with the word "installation" in their main body text.

## Search by last updated date

The `updated` qualifier matches wiki pages that were last updated within the specified date range.

{% data reusables.search.date_gt_lt %}

| Qualifier        | Example
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) matches wiki pages with the word "usage" that were last updated after 2016-01-01.

## Further reading

* "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)"
