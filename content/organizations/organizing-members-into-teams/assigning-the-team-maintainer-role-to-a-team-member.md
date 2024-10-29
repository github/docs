---
title: Assigning the team maintainer role to a team member
intro: You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

* [Change the team's name and description](/organizations/organizing-members-into-teams/renaming-a-team)
* [Change the team's visibility](/organizations/organizing-members-into-teams/changing-team-visibility)
* [Request to add a child team](/organizations/organizing-members-into-teams/requesting-to-add-a-child-team)
* [Request to add or change a parent team](/organizations/organizing-members-into-teams/requesting-to-add-or-change-a-parent-team)
* [Set the team profile picture](/organizations/organizing-members-into-teams/setting-your-teams-profile-picture){% ifversion team-discussions %}
* [Edit team discussions](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment)
* [Delete team discussions](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment){% endif %}
* [Add organization members to the team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)
* [Remove organization members from the team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)
* Remove the team's access to repositories
* [Manage code review assignment for the team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team){% ifversion fpt or ghec %}
* [Manage scheduled reminders for pull requests](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

{% ifversion ghec %}

{% note %}

**Note** If your enterprise uses {% data variables.enterprise.prodname_managed_users %} and manages a team's membership with an identity provider (IdP) group, you cannot assign the team maintainer role manually for that team. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

{% endnote %}

{% endif %}

## Promoting an organization member to team maintainer

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
1. Select the person or people you'd like to promote to team maintainer.

   ![Screenshot of the first user in a list of team members. To the left of the user, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/team-member-check-box.png)
1. Above the list of team members, use the drop-down menu and click **Change role...**.

   {% data reusables.organizations.bulk-edit-team-members %}
1. Select a new role, then click **Change role**.
