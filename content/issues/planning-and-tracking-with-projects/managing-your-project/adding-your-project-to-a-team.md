---
title: 'Adding your {% data variables.projects.project_v2 %} to a team'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: You can add projects to teams to manage permissions and improve project discoverability.
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
---

## About adding projects to teams

You can add projects to your team to give the whole team collaborator access to their projects. When you add a project to a team, that project is listed on the team's projects page, making it easier for members to identify which projects a particular team uses.

Teams are granted read permissions on any project they are added to. This permission is added to existing permissions for the project and for individual team members, ensuring that any higher permissions are retained. For more information about setting permissions for teams and individual contributors, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## Adding a project to a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
1. Click {% octicon "project" aria-hidden="true" %} **Projects**.

   ![Screenshot of the main page for a team. In the horizontal navigation bar, the "Projects" tab is outlined in dark orange.](/assets/images/help/organizations/team-project-board-button.png)

1. Click **Link a project**.
1. In the search field, start typing the name of the project you want to add and then select the project in the list of matches.

   {% note %}

   **Note:** If this change will result in increased project permissions for the team's members, {% data variables.product.product_name %} will prompt you to confirm your choice.

   {% endnote %}

## Removing a project from a team

{% data reusables.projects.project-settings %}
1. Click **Manage access**.
1. Next to the team that you want to remove from the project, click **Remove**.

{% ifversion projects-v1 %}

## Further reading

- [Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
