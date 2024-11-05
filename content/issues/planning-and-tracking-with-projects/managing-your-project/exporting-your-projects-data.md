---
title: 'Exporting your {% data variables.projects.project_v2 %} data'
shortTitle: 'Exporting your {% data variables.projects.project_v2 %} data'
intro: 'Learn about exporting your {% data variables.projects.project_v2 %} data.'
permissions: 'People who can access a project can export a view. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."'
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

You can download a view as a _.tsv_ (tab-separated) file.

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your repository.
1. Click {% octicon "table" aria-hidden="true" %} **Projects**.
   ![Screenshot showing a repository's tabs. The "Projects" tab is highlighted with an orange outline.](/assets/images/help/projects-v2/repo-tab.png)

{% data reusables.projects.open-view-menu %}

1. Click {% ifversion ghes < 3.11 %}**Download**{% else %}**Export view data**{% endif %}.
