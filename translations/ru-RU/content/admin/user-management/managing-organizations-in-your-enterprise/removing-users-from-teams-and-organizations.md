---
title: Removing users from teams and organizations
intro: 'If a member of your organization no longer requires access to certain repositories, you can remove them from the team that allows that access. If a member of your organization no longer requires access to any repositories owned by the organization, you can remove them from the organization.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
---

Only owners or team admins can remove organization members. When a user is removed from a team or organization, their issues, pull requests, and comments in the organization's repositories remain intact and are still attributed to the user.

{% warning %}

**Warning**: When you remove a user from an organization, they will lose access to any private forks they have of your organization's **private repositories**. They may still have local copies of those forks. However, they will be unable to sync them with your organization's repositories. You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property. If the user removed from your organization was an organization member, their access to private forks of organization repositories can be restored if the user is [reinstated as an organization member](/articles/reinstating-a-former-member-of-your-organization) within three months of being removed from an organization.

{% endwarning %}

### Removing a team member

{% warning %}

**Note:** {% data reusables.enterprise_management_console.badge_indicator %}

To remove an existing member of a team synced to an LDAP group, contact your LDAP administrator.

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
4. Select the person or people you'd like to remove. ![Check box next to organization member](/assets/images/help/teams/team-member-check-box.png)
5. Above the list of team members, use the drop-down menu and click **Remove from team**. ![Drop-down menu with option to change role](/assets/images/help/teams/bulk-edit-drop-down.png)

### Removing a user from an organization

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. Next to the name of the users you want to remove from the organization, click the check box. ![Remove user checkbox](/assets/images/help/organizations/Organization-remove-user.png)
5. At the top of the page, under the organization name, click **Remove from organization**. ![Remove from organization button](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
