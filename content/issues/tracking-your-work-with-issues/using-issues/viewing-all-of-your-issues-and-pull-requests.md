---
title: Viewing all issues and pull requests
intro: 'The Issues and Pull Request dashboards list the open issues and pull requests you''ve created{% ifversion issues-saved-views %}, as well as your saved views{% endif %}. You can use them to update items that have gone stale, close them, or keep track of where you''ve been mentioned across all repositories—including those you''re not subscribed to.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/viewing-all-of-your-issues-and-pull-requests
  - /articles/viewing-all-of-your-issues-and-pull-requests
  - /github/managing-your-work-on-github/viewing-all-of-your-issues-and-pull-requests
  - /issues/tracking-your-work-with-issues/managing-issues/viewing-all-of-your-issues-and-pull-requests
  - /issues/tracking-your-work-with-issues/viewing-all-of-your-issues-and-pull-requests
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
shortTitle: View all issues & PRs
type: how_to
---

## Viewing your issues and pull requests

Your issue and pull request dashboards are available at the top of any page. On each dashboard, you can filter the list to find issues or pull requests you created, that are assigned to you, or in which you're mentioned. You can also find pull requests that you've been asked to review.

1. At the top of any page, click **{% octicon "issue-opened" aria-label="Issues" %}** to see your issues or **{% octicon "git-pull-request" aria-label="Pull requests" %}** to see your pull requests.

   ![Screenshot of the header of any page on {% data variables.product.github %}. The "Pull requests" and "Issues" icons are outlined in dark orange.](/assets/images/help/navigation/issues-and-prs-new-navigation.png)

1. Optionally, choose a filter or use the search bar to filter for more specific results. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).

{% ifversion issues-saved-views %}

## Tracking issues and pull requests with saved views

To help you better monitor and find issues and pull requests across multiple repositories, you can create saved views on the issues dashboard.

You can create up to 25 saved views.

### Create a saved view

1. At the top of any page, click {% octicon "issue-opened" aria-label="Issues" %} to see your issues.
1. On the left sidebar, under "Views", click **{% octicon "plus" aria-label="Create view" %}**.

   ![Screenshot of the {% octicon "plus" aria-label="Create view" %}. The icon is outlined in dark orange.](/assets/images/help/issues/issues-create-saved-view.png)

1. Add a title, description, and custom icon for your view.
1. Under "Query", build your search query using the advanced filters. For help using filters, see [AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests).
   > [!TIP] Use the `is:pr` filter to include pull requests in the saved view.
1. Click **Save view**.

### Edit, duplicate or delete a saved view

1. At the top of any page, click {% octicon "issue-opened" aria-label="Issues" %} to see your issues.
1. On the left sidebar, under "Views", click the saved view you want to edit, duplicate or delete.
1. To the right of the name of the saved view, click **{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.**.
1. Click **{% octicon "pencil" aria-hidden="true" %} Edit** to modify the view, **{% octicon "duplicate" aria-hidden="true" %} Duplicate** to create a copy of the view, or **{% octicon "trash" aria-hidden="true" %} Delete** to remove the view.

{% endif %}

## Further reading

* [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions#reviewing-repositories-that-youre-watching)
