---
title: Viewing all repositories
intro: 'The repository dashboard lists the repositories you''ve created as well as where you''ve made contributions. You can use search and filters to find the right repositories and create saved views.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.22'
topics:
  - Repositories
shortTitle: View all repositories
type: how_to
---

## Viewing repositories

Your repository dashboard is available at the top of any page. On the dashboard, you can see repositories by `My contributions`, `My repositories`, and `My forks`.

1. At the top of any page, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %}** to see your repositories.

1. Optionally, choose a filter or use the search bar to filter for more specific results. Refine your search using filters like `visibility`, `language`, `organization`, and more. Sort by relevance to intelligently surface the repositories you're most active in.

{% ifversion issues-saved-views %}

## Tracking repositories with saved views

To help you better monitor and find repositories across multiple organizations, you can create saved views on the repository dashboard.

You can create up to 25 saved views.

### Create a saved view

1. At the top of any page, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %}** to see your repositories.
1. On the left sidebar, under "Views", click **{% octicon "plus" aria-label="Create view" %}**.
1. Add a title, description, and custom icon for your view.
1. Under "Query", build your search query using the advanced filters. For help using filters, see [AUTOTITLE](/search-github/searching-on-github/searching-for-repositories).
   > [!TIP] Use the `organization:<slug>` filter followed by `props.key:value` to find repositories by organization custom properties.
1. Click **Save view**.

### Edit, duplicate, or delete a saved view

1. At the top of any page, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %}** to see your repositories.
1. On the left sidebar, under "Views", click the saved view you want to edit, duplicate or delete.
1. To the right of the name of the saved view, click **{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}**.
1. Click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit** to modify the view, **{% octicon "duplicate" aria-hidden="true" aria-label="duplicate" %} Duplicate** to create a copy of the view, or **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete** to remove the view.

{% endif %}
