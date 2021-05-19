---
title: Sorting search results
intro: 'You can sort [{% data variables.product.product_name %} search](/articles/searching-on-github) results using the Sort menu, or by adding a `sort` qualifier to your query.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
Use the Sort menu to sort results by relevance, number of stars, number of forks, and how recently the items were updated.

  ![Menu with options for sorting search results](/assets/images/help/search/repo-search-sort.png)

To sort by interactions, reactions, author date, committer date, or how recently the items were updated, you can add a `sort` qualifier to your search query.

### Sort by interactions

The `sort:interactions` qualifier sorts by the highest combined number of reactions and comments.

| Qualifier  | Example
| ------------- | -------------
| `sort:interactions` or `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by the highest combined number of reactions and comments.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by the lowest combined number of reactions and comments.

### Sort by reactions

The `sort:reactions` qualifier sorts by the number or type of reactions.

| Qualifier  | Example
| ------------- | -------------
| `sort:reactions` or `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by the highest number of reactions.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by ascending number of reactions (the fewest to the most).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by most thumbs up (:+1:) reactions.
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by most thumbs down (:-1:) reactions.
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by most laugh (:smile:) reactions.
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by most hurray (:tada:) reactions.
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) matches issues in repositories owned by {% data variables.product.product_name %}, sorted by most heart (:heart:) reactions.

### Sort by author date

The `sort:author-date` qualifier sorts by descending or ascending author date.

| Qualifier  | Example
| ------------- | -------------
| `sort:author-date` or `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.product_name %}, sorted by descending author date.
| `sort:author-date-asc` | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.product_name %}, sorted by ascending author date.

### Sort by committer date

The `sort:committer-date` qualifier sorts by descending or ascending committer date.

| Qualifier  | Example
| ------------- | -------------
| `sort:committer-date` or `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.product_name %}, sorted by descending committer date.
| `sort:committer-date-asc` | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.product_name %}, sorted by ascending committer date.

### Sort by updated date

The `sort:updated` qualifier sorts by how recently the items were updated.

| Qualifier  | Example
| ------------- | -------------
| `sort:updated` or `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) matches repositories containing the word "feature," sorted by most recently updated date.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) matches repositories containing the word "feature," sorted by least recently updated date.

### Further reading

- [About searching on GitHub](/articles/about-searching-on-github)
- [Sorting issues and pull requests](/articles/sorting-issues-and-pull-requests/)
