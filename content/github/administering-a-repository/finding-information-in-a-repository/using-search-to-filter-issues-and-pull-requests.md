---
title: Using search to filter issues and pull requests
intro: Every issues and pull requests view comes with a search bar for advanced filter management.
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Use search to filter
---
The issues and pull requests search bar allows you to define your own custom filters and sort by a wide variety of criteria. You can find the search bar on each repository's **Issues** and **Pull requests** tabs and on your [Issues and Pull requests dashboards](/articles/viewing-all-of-your-issues-and-pull-requests).

![The issues and pull requests search bar](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Tip:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

With issue and pull request search terms, you can:

- Filter issues and pull requests by author: `state:open type:issue author:octocat`
- Filter issues and pull requests that involve, but don't necessarily [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), certain people: `state:open type:issue involves:octocat`
- Filter issues and pull requests by assignee: `state:open type:issue assignee:octocat`
- Filter issues and pull requests by label: `state:open type:issue label:"bug"`
- Filter out search terms by using `-` before the term: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`. 
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
For issues, you can also use search to:

- Filter for issues that are linked to a pull request by a closing reference: `linked:pr`
{% endif %}

For pull requests, you can also use search to:
- Filter [draft](/articles/about-pull-requests#draft-pull-requests) pull requests: `is:draft`
- Filter pull requests that haven't been [reviewed](/articles/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filter pull requests that [require a review](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged: `state:open type:pr review:required`
- Filter pull requests that a reviewer has approved: `state:open type:pr review:approved`
- Filter pull requests in which a reviewer has asked for changes: `state:open type:pr review:changes_requested`
- Filter pull requests by [reviewer](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filter pull requests by the specific user [requested for review](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filter pull requests by the team requested for review: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
- Filter for pull requests that are linked to an issue that the pull request may close: `linked:issue`{% endif %}

## Further reading

- "[Searching issues and pull requests](/articles/searching-issues)"
- "[Filtering issues and pull requests](/articles/filtering-issues-and-pull-requests)"
- "[Sorting issues and pull requests](/articles/sorting-issues-and-pull-requests)"
- "[Sharing filters](/articles/sharing-filters)"
