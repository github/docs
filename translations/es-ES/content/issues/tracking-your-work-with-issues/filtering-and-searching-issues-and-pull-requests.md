---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtering issues and pull requests

Issues and pull requests come with a set of default filters you can apply to organize your listings.

{% data reusables.search.requested_reviews_search %}

You can filter issues and pull requests to find:
- All open issues and pull requests
- Issues and pull requests that you've created
- Issues and pull requests that are assigned to you
- Issues and pull requests where you're [**@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Click **Filters** to choose the type of filter you're interested in.
  ![Using the Filters drop-down](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtering issues and pull requests by assignees

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. In the upper-right corner, select the Assignee drop-down menu.
4. The Assignee drop-down menu lists everyone who has write access to your repository. Click the name of the person whose assigned items you want to see, or click **Assigned to nobody** to see which issues are unassigned.
![Using the Assignees drop-down tab](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

To clear your filter selection, click **Clear current search query, filters, and sorts**.

{% endtip %}

## Filtering issues and pull requests by labels

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. In the list of labels, click a label to see the issues and pull requests that it's been applied to.
  ![List of a repository's labels](/assets/images/help/issues/labels-page.png)

{% tip %}

**Tip:** To clear your filter selection, click **Clear current search query, filters, and sorts**.

{% endtip %}

## Filtering pull requests by review status

You can use filters to list pull requests by review status and to find pull requests that you've reviewed or other people have asked you to review.

You can filter a repository's list of pull requests to find:
- Pull requests that haven't been [reviewed](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) yet
- Pull requests that [require a review](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged
- Pull requests that a reviewer has approved
- Pull requests in which a reviewer has asked for changes
- Pull requests that you have reviewed{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- Pull requests that someone has asked you directly to review{% endif %}
- Pull requests that [someone has asked you, or a team you're a member of, to review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. In the upper-right corner, select the Reviews drop-down menu.
  ![Reviews drop-down menu in the filter menu above the list of pull requests](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Choose a filter to find all of the pull requests with that filter's status.
  ![List of filters in the Reviews drop-down menu](/assets/images/help/pull_requests/pr-review-filters.png)

## Using search to filter issues and pull requests

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

{% webui %}

The issues and pull requests search bar allows you to define your own custom filters and sort by a wide variety of criteria. You can find the search bar on each repository's **Issues** and **Pull requests** tabs and on your [Issues and Pull requests dashboards](/articles/viewing-all-of-your-issues-and-pull-requests).

![The issues and pull requests search bar](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Tip:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

With issue and pull request search terms, you can:

- Filter issues and pull requests by author: `state:open type:issue author:octocat`
- Filter issues and pull requests that involve, but don't necessarily [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), certain people: `state:open type:issue involves:octocat`
- Filter issues and pull requests by assignee: `state:open type:issue assignee:octocat`
- Filter issues and pull requests by label: `state:open type:issue label:"bug"`
- Filter out search terms by using `-` before the term: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

For issues, you can also use search to:

- Filter for issues that are linked to a pull request by a closing reference: `linked:pr`{% ifversion issue-close-reasons %}
- Filter issues by the reason they were closed: `is:closed reason:complete` or `is:closed reason:"not planned"`{% endif %}

For pull requests, you can also use search to:
- Filter [draft](/articles/about-pull-requests#draft-pull-requests) pull requests: `is:draft`
- Filter pull requests that haven't been [reviewed](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) yet: `state:open type:pr review:none`
- Filter pull requests that [require a review](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) before they can be merged: `state:open type:pr review:required`
- Filter pull requests that a reviewer has approved: `state:open type:pr review:approved`
- Filter pull requests in which a reviewer has asked for changes: `state:open type:pr review:changes_requested`
- Filter pull requests by [reviewer](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filter pull requests by the specific user [requested for review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- Filter pull requests that someone has asked you directly to review: `state:open type:pr user-review-requested:@me`{% endif %}
- Filter pull requests by the team requested for review: `state:open type:pr team-review-requested:github/atom`
- Filter for pull requests that are linked to an issue that the pull request may close: `linked:issue`

## Sorting issues and pull requests

Filters can be sorted to provide better information during a specific time period.

You can sort any filtered view by:

* The newest created issues or pull requests
* The oldest created issues or pull requests
* The most commented issues or pull requests
* The least commented issues or pull requests
* The newest updated issues or pull requests
* The oldest updated issues or pull requests
* The most added reaction on issues or pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. In the upper-right corner, select the Sort drop-down menu.
  ![Using the Sort drop-down tab](/assets/images/help/issues/issues_sort_dropdown.png)

To clear your sort selection, click **Sort** > **Newest**.

## Sharing filters

When you filter or sort issues and pull requests, your browser's URL is automatically updated to match the new view.

You can send the URL that issues generates to any user, and they'll be able to see the same filter view that you see.

For example, if you filter on issues assigned to Hubot, and sort on the oldest open issues, your URL would update to something like the following:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Further reading

- "[Searching issues and pull requests](/articles/searching-issues)"
