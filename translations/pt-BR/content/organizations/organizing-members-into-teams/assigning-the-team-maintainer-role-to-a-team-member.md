---
title: Assigning the team maintainer role to a team member
intro: 'You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.'
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

- [Change the team's name and description](/articles/renaming-a-team)
- [Change the team's visibility](/articles/changing-team-visibility)
- [Request to add a child team](/articles/requesting-to-add-a-child-team)
- [Request to add or change a parent team](/articles/requesting-to-add-or-change-a-parent-team)
- [Set the team profile picture](/articles/setting-your-team-s-profile-picture)
- [Edit team discussions](/articles/managing-disruptive-comments/#editing-a-comment)
- [Delete team discussions](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Add organization members to the team](/articles/adding-organization-members-to-a-team)
- [Remove organization members from the team](/articles/removing-organization-members-from-a-team)
- Remove the team's access to repositories{% ifversion fpt or ghes or ghae or ghec %}
- [Manage code review assignment for the team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% endif %}{% ifversion fpt or ghec %}
- [Manage scheduled reminders for pull requests](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}


## Promoting an organization member to team maintainer

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. Select the person or people you'd like to promote to team maintainer.
![Check box next to organization member](/assets/images/help/teams/team-member-check-box.png)
5. Above the list of team members, use the drop-down menu and click **Change role...**.
![Drop-down menu with option to change role](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Select a new role and click **Change role**.
![Radio buttons for Maintainer or Member roles](/assets/images/help/teams/team-role-modal.png)
