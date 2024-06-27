---
title: 'Filtering cards on a {% data variables.product.prodname_project_v1 %}'
intro: 'You can filter the cards on a {% data variables.projects.projects_v1_board %} to search for specific cards or view a subset of the cards.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

On a card, you can click any assignee, milestone, or label to filter the {% data variables.projects.projects_v1_board %} by that qualifier. To clear the search, you can click the same assignee, milestone, or label again.

You can also use the "Filter cards" search bar at the top of each {% data variables.projects.projects_v1_board %} to search for cards. You can filter cards using the following search qualifiers in any combination, or by simply typing some text you'd like to search for.

* Filter cards by author using `author:USERNAME`
* Filter cards by assignee using `assignee:USERNAME` or `no:assignee`
* Filter cards by label using `label:LABEL`, `label:"MULTI-WORD LABEL NAME"`, or `no:label`
* Filter by milestone by using `milestone:MY-MILESTONE`
* Filter cards by state using `state:open`, `state:closed`, or `state:merged`
* Filter by review status using `review:none`, `review:required`, `review:approved`, or `review:changes_requested`
* Filter by check status using `status:pending`, `status:success`, or `status:failure`
* Filter cards by type using `type:issue`, `type:pr`, or `type:note`
* Filter cards by state and type using `is:open`, `is:closed`, or `is:merged`; and `is:issue`, `is:pr`, or `is:note`
* Filter cards by issues that are linked to a pull request by a closing reference using `linked:pr`
* Filter cards by repository in an organization-wide {% data variables.projects.projects_v1_board %} using `repo:ORGANIZATION/REPOSITORY`

1. Navigate to the {% data variables.projects.projects_v1_board %} that contains the cards you want to filter.
1. Above the project card columns, click into the "Filter cards" search bar and type a search query to filter the cards.

{% tip %}

**Tip:** You can drag and drop filtered cards or use keyboard shortcuts to move them between columns. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Further reading

* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board)"
