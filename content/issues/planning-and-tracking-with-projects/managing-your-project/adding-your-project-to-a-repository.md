---
title: 'Adding your {% data variables.projects.project_v2 %} to a repository'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a repo'
intro: 'You can add your {% data variables.projects.project_v2 %} to a repository to make it accessible from that repository.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

## Linking a repository to your project

You can list relevant projects in a repository. You can only list projects that are owned by the same user or organization that owns the repository.

In order for repository members to see a project listed in a repository, they must have visibility for the project. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) and [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your repository.
1. Click **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects**.
   ![Screenshot showing a repository's tabs. The "Projects" tab is highlighted with an orange outline.](/assets/images/help/projects-v2/repo-tab.png)
1. Click **Link a project**.
1. In the search bar that appears, search for projects that are owned by the same user or organization that owns the repository.
1. Click on a project to list it in your repository.

{% ifversion project-default-repositories %}

## Setting a default repository for your project

You can set a default repository for a project. When you set a default repository, new issues created from your project are automatically assigned to that repository. After you set a default repository, your project also appears in the repository’s **Projects** tab.

To update the default repository for your project:

1. In your repository, click **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects**.
1. Under "Projects," find and click your project in the list.
1. In the top-right of the project page, click the {% octicon "kebab-horizontal" aria-label="repository settings" %} dropdown menu, then select **{% octicon "gear" aria-label="Settings" %} Settings** to go to the project settings page.
   ![Screenshot showing the location of the "Settings" button in the project menu, highlighted with a red outline.](/assets/images/help/projects-v2/project-settings-navigation.png)
1. Under "Default repository," select a default repository for your project.
1. Click **Save changes** to confirm your changes.{% endif %}
