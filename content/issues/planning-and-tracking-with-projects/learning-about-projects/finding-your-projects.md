---
title: 'Finding your {% data variables.projects.projects_v2 %}'
intro: 'Learn how to locate projects in your account, organizations, repositories, and teams.'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2-global-nav
type: overview
topics:
  - Projects
---

## Browsing all of your projects

You can browse all of your projects, regardless of where they are located. You can see the projects you have recently viewed and the projects you have created, and apply your own filters.

1. In the top left of any page, click {% octicon "three-bars" aria-label="Open global navigation menu" %} to open the global navigation menu.
1. In the menu, click {% octicon "table" aria-hidden="true" %} **Projects**.
{% data reusables.projects.index-select %}

## Finding an organization's projects

You can view and filter all the projects owned by an organization that you have access to.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
1. Under the organization name, click {% octicon "table" aria-hidden="true" %} **Projects**.
{% data reusables.projects.index-select %}

## Finding projects owned by your personal account

You can view and filter projects that you have created under your personal account.

{% data reusables.profile.access_profile %}
1. On your profile, click {% octicon "table" aria-hidden="true" %} **Projects**.
{% data reusables.projects.index-select %}

## Finding projects linked to a repository

Repositories can be linked to organization-level and user-level projects.  You can browse and filter the projects that are linked to a specific repository. For more information on linking projects to a repository, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository)."

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %}, navigate to the main page of your repository.
1. Click {% octicon "table" aria-hidden="true" %} **Projects**.

   ![Screenshot showing a repository's tabs. The "Projects" tab is highlighted with an orange outline.](/assets/images/help/projects-v2/repo-tab.png)

{% data reusables.projects.index-select %}

## Finding projects linked to a team

You can also link a project to specific teams in an organization and then browse and filter the projects that are associated with a particular team. For more information on linking projects, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)."

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
1. Click {% octicon "project" aria-hidden="true" %} **Projects**.

   ![Screenshot of the main page for a team. In the horizontal navigation bar, the "Projects" tab is outlined in dark orange.](/assets/images/help/organizations/team-project-board-button.png)

{% data reusables.projects.index-select %}

## Syntax for filtering a list of projects

You can combine filters and even search project titles by including text. For example, `is:open creator:octocat game` will return open projects, created by the @octocat user, with the word "game" in the project title. You can use the search qualifiers in the following table to narrow down your search for a project.

| Qualifier  | Explanation
| ---------- | -------------
| `is:open` | Returns projects that are currently open. |
| `is:closed` | Returns projects that are currently closed. |
| `is:template` | Returns projects that are marked as a template. |
| `is:private` | Returns projects are set to private visibility. |
| `is:public` | Returns projects are set to public visibility. |
| `creator:USERNAME` | Returns projects created by USERNAME. For example, `creator:octocat` will return projects created by @octocat. |

You can also change how the projects are ordered.

| Qualifier  | Explanation
| ---------- | -------------
| `sort:title-asc` | Sort by project title. |
| `sort:updated-asc` or `sort:updated-desc`  | Sort by when the project was last updated. |
| `sort:created-asc` or `sort:created-desc`  | Sort by when the project was created. |
