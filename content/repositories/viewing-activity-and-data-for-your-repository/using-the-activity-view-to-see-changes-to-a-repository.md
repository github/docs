---
title: Using the activity view to see changes to a repository
intro: 'You can use the activity view to see a detailed history of changes to your repository.'
versions:
  feature: repository-activity-view
topics:
  - Repositories
shortTitle: Using the activity view
---

## About the activity view

The activity view lets you see a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and authenticated users.

You can filter the view to show activity for a particular branch, a particular user, or for a specific period of time. You can also filter by activity type. For example, you can choose to filter by "Force pushes", to see all force pushes to the repository.

For each activity, you can view the exact changes by clicking "Compare changes."

## Using the activity view to see changes to a repository

{% data reusables.repositories.navigate-to-repo %}
1. There are two ways to enter the activity view:
   - On the main page of the repository, to the right of the list of files, click **{% octicon "pulse" aria-hidden="true" %} Activity**.

   - Alternatively, click **{% octicon "git-branch" aria-hidden="true" %} Branches**, then to the right of any branch, click **{% octicon "pulse" aria-label="View branch activity" %}**.

     ![Screenshot of a repository's branches view. To the right of a branch, the pulse icon is highlighted with a dark orange outline.](/assets/images/help/graphs/activity-view-icon.png)

1. Use the dropdown menus to filter the activity view.
   - To see activity on a particular branch, select the **{% octicon "git-branch" aria-hidden="true" %} BRANCH NAME** dropdown menu, then click a branch name. Alternatively, within the dropdown menu, start typing a branch name into the search field. To view activity across all branches in the repository, click "View activity for all branches".

   - To filter by activity type, select the **{% octicon "pulse" aria-hidden="true" %} All activity** dropdown menu, then click an activity type. You can choose to display direct pushes, pull request merges, force pushes, branch creations, and branch deletions.

   - To filter by user, select the **{% octicon "people" aria-hidden="true" %} All users** dropdown menu, then click a username. Alternatively, within the dropdown menu, start typing a username into the search field.

   - To filter by time, select the **{% octicon "clock" aria-hidden="true" %} All time** dropdown menu, then click a time period.

1. Optionally, to see some additional details about the activity, such as the incoming branch name from a pull request, hover over the embedded link.

   ![Screenshot of a repository's activity view. A link, embedded in the description of an activity, is highlighted with a dark orange outline.](/assets/images/help/graphs/activity-view-embedded-link.png)

1. To see exactly what changes were introduced by a particular activity, to the right of the activity, select {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **{% octicon "git-compare" aria-hidden="true" %} Compare changes**.

   ![Screenshot of a repository's activity view. The horizontal kebab icon, and a pop-up button, labeled "Compare changes", are highlighted with a dark orange outline.](/assets/images/help/graphs/activity-view-compare-changes.png)
