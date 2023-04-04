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
1. Click {% octicon "project" aria-label="The Projects icon" %} **Projects**.
   
   ![Screenshot showing the team projects tab.](/assets/images/help/organizations/team-project-board-button.png)
   
1. Click **Add project**.
   
   ![Screenshot showing the "Add project" button.](/assets/images/help/organizations/team-project-add-project.png)
   
1. Start typing the name of the project you want to add and then select the project in the list of matches.  
   
   {% note %}
   
   **Note:** If this change will result in increased project permissions for the team's members, {% data variables.product.product_name %} will prompt you to confirm your choice.
   
   {% endnote %}
   
   ![Screenshot showing the "Add project" form.](/assets/images/help/organizations/team-project-search.png)
   

## Removing a project from a team

{% data reusables.projects.project-settings %}
1. Click **Manage access**.
   
   ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
   
1. Next to the team that you want to remove from the project, click **Remove**.
   
   ![Screenshot showing removing a collaborator](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Further reading

- [Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
