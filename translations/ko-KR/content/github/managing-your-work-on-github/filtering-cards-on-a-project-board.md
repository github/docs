---
title: Filtering cards on a project board
intro: You can filter the cards on a project board to search for specific cards or view a subset of the cards.
redirect_from:
  - /articles/filtering-cards-on-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

On a card, you can click any assignee, milestone, or label to filter the project board by that qualifier. To clear the search, you can click the same assignee, milestone, or label again.

You can also use the "Filter cards" search bar at the top of each project board to search for cards. You can filter cards using the following search qualifiers in any combination, or by simply typing some text you'd like to search for.

- Filter cards by author using `author:USERNAME`
- Filter cards by assignee using `assignee:USERNAME` or `no:assignee`
- Filter cards by label using `label:LABEL`, `label:"MULTI-WORD LABEL NAME"`, or `no:label`
- Filter by milestone by using `milestone:MY-MILESTONE`
- Filter cards by state using `state:open`, `state:closed`, or `state:merged`
- Filter by review status using `review:none`, `review:required`, `review:approved`, or `review:changes_requested`
- Filter by check status using `status:pending`, `status:success`, or `status:failure`
- Filter cards by type using `type:issue`, `type:pr`, or `type:note`
- Filter cards by state and type using `is:open`, `is:closed`, or `is:merged`; and `is:issue`, `is:pr`, or `is:note`
- Filter cards by issues that are linked to a pull request by a closing reference using `linked:pr`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- Filter cards by repository in an organization-wide project board using `repo:ORGANIZATION/REPOSITORY`{% endif %}

1. Navigate to the project board that contains the cards you want to filter.
2. Above the project card columns, click into the "Filter cards" search bar and type a search query to filter the cards. ![Filter card search bar](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Tip:** You can drag and drop filtered cards or use keyboard shortcuts to move them between columns. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

### 더 읽을거리

- "[About project boards](/articles/about-project-boards)"
- "[Adding issues and pull requests to a project board](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adding notes to a project board](/articles/adding-notes-to-a-project-board)"
