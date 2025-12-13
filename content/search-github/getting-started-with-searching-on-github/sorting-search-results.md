---
title: Sorting search results
intro: 'You can sort {% data variables.product.github %} search results using the Sort menu, or by adding a `sort` qualifier to your query.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub search
---

{% ifversion code-search-upgrade %}

> [!NOTE]
> Sorting search results is not supported for {% data variables.product.github %} code search. For more information on code search, see [AUTOTITLE](/search-github/github-code-search/about-github-code-search).

{% endif %}

Use the **Sort** dropdown menu to sort results by relevance, number of stars, number of forks, and how recently the items were updated.

To sort by interactions, reactions, comments, created date, relevance, author date, committer date, or how recently the items were updated, you can add a `sort` qualifier to your search query.

## Sort by comments

The `sort:comments` qualifier sorts by the number of comments.

| Qualifier  | Example
| ------------- | -------------
| `sort:comments` or `sort:comments-desc` | [**org:github sort:comments**](https://github.com/search?q=org%3Agithub+sort%3Acomments&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by the highest number of comments.
| `sort:comments-asc` | [**org:github sort:comments-asc**](https://github.com/search?q=org%3Agithub+sort%3Acomments-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending number of comments (the fewest to the most).

## Sort by created date

The `sort:created` qualifier sorts by the date when the items were created.

| Qualifier  | Example
| ------------- | -------------
| `sort:created` or `sort:created-desc` | [**org:github sort:created**](https://github.com/search?q=org%3Agithub+sort%3Acreated&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by the most recently created date.
| `sort:created-asc` | [**org:github sort:created-asc**](https://github.com/search?q=org%3Agithub+sort%3Acreated-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending created date (oldest to newest).

## Sort by relevance

The `sort:relevance` qualifier sorts by search relevance.

| Qualifier  | Example
| ------------- | -------------
| `sort:relevance` or `sort:relevance-desc` | [**org:github sort:relevance**](https://github.com/search?q=org%3Agithub+sort%3Arelevance&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by highest search relevance.

## Sort by interactions

The `sort:interactions` qualifier sorts by the highest combined number of reactions and comments.

| Qualifier  | Example
| ------------- | -------------
| `sort:interactions` or `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by the highest combined number of reactions and comments.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by the lowest combined number of reactions and comments.

## Sort by reactions

The `sort:reactions` qualifier sorts by the number or type of reactions.

| Qualifier  | Example
| ------------- | -------------
| `sort:reactions` or `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by the highest number of reactions.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending number of reactions (the fewest to the most).
| `sort:reactions-+1` or `sort:reactions-+1-asc` | [**org:github sort:reactions-+1-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending thumbs up (:+1:) reactions (the fewest to the most).
| `sort:reactions-+1-desc` | [**org:github sort:reactions-+1-desc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending thumbs up (:+1:) reactions (the most to the fewest).
| `sort:reactions--1` or `sort:reactions--1-asc` | [**org:github sort:reactions--1-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending thumbs down (:-1:) reactions (the fewest to the most).
| `sort:reactions--1-desc` | [**org:github sort:reactions--1-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending thumbs down (:-1:) reactions (the most to the fewest).
| `sort:reactions-smile` or `sort:reactions-smile-asc` | [**org:github sort:reactions-smile-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending laugh (:smile:) reactions (the fewest to the most).
| `sort:reactions-smile-desc` | [**org:github sort:reactions-smile-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending laugh (:smile:) reactions (the most to the fewest).
| `sort:reactions-tada` or `sort:reactions-tada-asc` | [**org:github sort:reactions-tada-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending hurray (:tada:) reactions (the fewest to the most).
| `sort:reactions-tada-desc` | [**org:github sort:reactions-tada-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending hurray (:tada:) reactions (the most to the fewest).
| `sort:reactions-heart` or `sort:reactions-heart-asc` | [**org:github sort:reactions-heart-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending heart (:heart:) reactions (the fewest to the most).
| `sort:reactions-heart-desc` | [**org:github sort:reactions-heart-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending heart (:heart:) reactions (the most to the fewest).
| `sort:reactions-thinking_face` or `sort:reactions-thinking_face-asc` | [**org:github sort:reactions-thinking_face-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-thinking_face-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending thinking face (:thinking_face:) reactions (the fewest to the most).
| `sort:reactions-thinking_face-desc` | [**org:github sort:reactions-thinking_face-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-thinking_face-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending thinking face (:thinking_face:) reactions (the most to the fewest).
| `sort:reactions-rocket` or `sort:reactions-rocket-asc` | [**org:github sort:reactions-rocket-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-rocket-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending rocket (:rocket:) reactions (the fewest to the most).
| `sort:reactions-rocket-desc` | [**org:github sort:reactions-rocket-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-rocket-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending rocket (:rocket:) reactions (the most to the fewest).
| `sort:reactions-eyes` or `sort:reactions-eyes-asc` | [**org:github sort:reactions-eyes-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-eyes-asc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by ascending eyes (:eyes:) reactions (the fewest to the most).
| `sort:reactions-eyes-desc` | [**org:github sort:reactions-eyes-desc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-eyes-desc&type=Issues) matches issues in repositories owned by {% data variables.product.github %}, sorted by descending eyes (:eyes:) reactions (the most to the fewest).

## Sort by author date

The `sort:author-date` qualifier sorts by descending or ascending author date.

| Qualifier  | Example
| ------------- | -------------
| `sort:author-date` or `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.github %}, sorted by descending author date.
| `sort:author-date-asc` | [**`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.github %}, sorted by ascending author date.

## Sort by committer date

The `sort:committer-date` qualifier sorts by descending or ascending committer date.

| Qualifier  | Example
| ------------- | -------------
| `sort:committer-date` or `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.github %}, sorted by descending committer date.
| `sort:committer-date-asc` | [**`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) matches commits containing the word "feature" in repositories owned by {% data variables.product.github %}, sorted by ascending committer date.

## Sort by updated date

The `sort:updated` qualifier sorts by how recently the items were updated.

| Qualifier  | Example
| ------------- | -------------
| `sort:updated` or `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) matches repositories containing the word "feature," sorted by most recently updated date.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) matches repositories containing the word "feature," sorted by least recently updated date.

## Further reading

* [AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
* [AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
