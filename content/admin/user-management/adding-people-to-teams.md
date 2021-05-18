---
title: Adding people to teams
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
intro: 'Once a team has been created, organization admins can add users from {% data variables.product.product_location %} to the team and determine which repositories they have access to.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
---

Each team has its own individually defined [access permissions for repositories owned by your organization](/articles/permission-levels-for-an-organization).

- Members with the owner role can add or remove existing organization members from all teams.
- Members of teams that give admin permissions can only modify team membership and repositories for that team.

### Setting up a team

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### Mapping teams to LDAP groups (for instances using LDAP Sync for user authentication)

{% data reusables.enterprise_management_console.badge_indicator %}

To add a new member to a team synced to an LDAP group, add the user as a member of the LDAP group, or contact your LDAP administrator.
