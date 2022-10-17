---
title: Managing team access to an organization {% data variables.product.prodname_project_v1 %}
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can give a team access to a {% data variables.projects.projects_v1_board %} owned by your organization.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% warning %}

**Warnings:**
- You can change a team's permission level if the team has direct access to a {% data variables.projects.projects_v1_board %}. If the team's access to the {% data variables.projects.projects_v1_board %} is inherited from a parent team, you must change the parent team's access to the {% data variables.projects.projects_v1_board %}.
- If you add or remove {% data variables.projects.projects_v1_board %} access for a parent team, each of that parent's child teams will also receive or lose access to the {% data variables.projects.projects_v1_board %}. For more information, see "[About teams](/articles/about-teams)."

{% endwarning %}

## Giving a team access to a {% data variables.projects.projects_v1_board %}

You can give an entire team the same permission level to a {% data variables.projects.projects_v1_board %}.

{% note %}

**Note:** {% data reusables.project-management.cascading-permissions %} For example, if an organization owner has given a team read permissions to a {% data variables.projects.projects_v1_board %}, and a {% data variables.projects.projects_v1_board %} admin gives one of the team members admin permissions to that board as an individual collaborator, that person would have admin permissions to the {% data variables.projects.projects_v1_board %}. For more information see, "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. In the left sidebar, click **Teams**.
9. To add a team, click **Add a team: Select team**. Then, choose a team from the drop-down menu or search for the team you'd like to add.
 ![Add a team drop-down menu with list of teams in organization](/assets/images/help/projects/add-a-team.png)
10. Next to the team name, use the drop-down menu to select the desired permission level: **Read**, **Write**, or **Admin**.
 ![Team permissions drop-down menu with read, write, and admin options](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configuring a team's access to a {% data variables.projects.projects_v1_board %}

If a team's access to a {% data variables.projects.projects_v1_board %} is inherited from a parent team, you must change the parent team's access to the {% data variables.projects.projects_v1_board %} to update access to the child teams.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
4. Above the team's conversation, click {% octicon "project" aria-label="The Projects icon" %} **Projects**.
  ![The team repositories tab](/assets/images/help/organizations/team-project-board-button.png)
5. To change permissions levels, to the right of the {% data variables.projects.projects_v1_board %} you want to update, use the drop-down. To remove a {% data variables.projects.projects_v1_board %}, click **{% octicon "trash" aria-label="The trash icon" %}**.
  ![Remove a project board from your team trash button](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Further reading

- [Adding your project to a team](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}