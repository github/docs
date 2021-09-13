---
title: Managing team access to an organization project board
intro: 'As an organization owner or project board admin, you can give a team access to a project board owned by your organization.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% warning %}

**Warnings:**
- You can change a team's permission level if the team has direct access to a project board. If the team's access to the project board is inherited from a parent team, you must change the parent team's access to the project board.
- If you add or remove project board access for a parent team, each of that parent's child teams will also receive or lose access to the project board. For more information, see "[About teams](/articles/about-teams)."

{% endwarning %}

### Giving a team access to a project board

You can give an entire team the same permission level to a project board.

{% note %}

**Note:** {% data reusables.project-management.cascading-permissions %} For example, if an organization owner has given a team read permissions to a project board, and a project board admin gives one of the team members admin permissions to that board as an individual collaborator, that person would have admin permissions to the project board. For more information see, "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. In the left sidebar, click **Teams**.
9. To add a team, click **Add a team: Select team**. Then, choose a team from the drop-down menu or search for the team you'd like to add. ![Add a team drop-down menu with list of teams in organization](/assets/images/help/projects/add-a-team.png)
10. Next to the team name, use the drop-down menu to select the desired permission level: **Read**, **Write**, or **Admin**. ![Team permissions drop-down menu with read, write, and admin options](/assets/images/help/projects/org-project-team-choose-permissions.png)

### Configuring a team's access to a project board

If a team's access to a project board is inherited from a parent team, you must change the parent team's access to the project board to update access to the child teams.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Above the team's conversation, click {% octicon "project" aria-label="The Projects icon" %} **Projects**. ![The team repositories tab](/assets/images/help/organizations/team-project-board-button.png)
5. To change permissions levels, to the right of the project board you want to update, use the drop-down. To remove a project board, click **{% octicon "trashcan" aria-label="The trashcan icon" %}**. ![Remove a project board from your team trash button](/assets/images/help/organizations/trash-button.png)
