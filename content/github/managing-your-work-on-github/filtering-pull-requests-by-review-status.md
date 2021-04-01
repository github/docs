---
title: Filtering pull requests by review status
intro: You can use filters to list pull requests by review status and to find pull requests that you've reviewed or other people have asked you to review.
redirect_from:
  - /articles/filtering-pull-requests-by-review-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

You can filter a repository's list of pull requests to find:
- Pull requests that haven't been [reviewed](/articles/about-pull-request-reviews) yet
- Pull requests that [require a review](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged
- Pull requests that a reviewer has approved
- Pull requests in which a reviewer has asked for changes
- Pull requests that you have reviewed
- Pull requests that [someone has asked you, or a team you're a member of, to review](/articles/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. In the upper-right corner, select the Reviews drop-down menu.
  ![Reviews drop-down menu in the filter menu above the list of pull requests](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Choose a filter to find all of the pull requests with that filter's status.
  ![List of filters in the Reviews drop-down menu](/assets/images/help/pull_requests/pr-review-filters.png)

### Further reading

- "[About pull request reviews](/articles/about-pull-request-reviews)"
- "[Using search to filter issues and pull requests](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[Viewing all of your issues and pull requests](/articles/viewing-all-of-your-issues-and-pull-requests)"
