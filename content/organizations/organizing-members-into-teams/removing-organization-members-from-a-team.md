---
title: Removing organization members from a team
intro: 'People with *owner* or *team maintainer* permissions can remove team members from a team. This may be necessary if a person no longer needs access to a repository the team grants, or if a person is no longer focused on a team''s projects.'
redirect_from:
  - /articles/removing-organization-members-from-a-team-early-access-program
  - /articles/removing-organization-members-from-a-team
  - /github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove members
---

Removing a member from a team revokes their access to all repositories and related resources granted through the team. This includes:

* Removal from assignee fields in issues, pull requests, and project cards.
* Loss of access to repository-specific tools such as {% data variables.product.prodname_discussions %}, {% data variables.product.prodname_projects_v2 %}, and Wikis.
* Inability to contribute to any repositories the team has access to.

If the member is assigned to any ongoing tasks, you should reassign them or grant them individual repository permissions, as required.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
1. Select the person or people you'd like to remove.

   ![Screenshot of the first user in a list of team members. To the left of the user, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/team-member-check-box.png)
1. Above the list of team members, use the drop-down menu and click **Remove from team**.

   {% data reusables.organizations.bulk-edit-team-members %}
