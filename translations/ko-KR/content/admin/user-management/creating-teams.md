---
title: Creating teams
intro: 'Teams give organizations the ability to create groups of members and control access to repositories. Team members can be granted read, write, or admin permissions to specific repositories.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
---

Teams are central to many of {% data variables.product.prodname_dotcom %}'s collaborative features, such as team @mentions to notify appropriate parties that you'd like to request their input or attention. For more information, see "[Permission levels for an organization repository](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".

A team can represent a group within your company or include people with certain interests or expertise. For example, a team of accessibility experts on {% data variables.product.product_location %} could comprise of people from several different departments. Teams can represent functional concerns that complement a company's existing divisional hierarchy.

Organizations can create multiple levels of nested teams to reflect a company or group's hierarchy structure. For more information, see "[About teams](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)."

### Creating a team

A prudent combination of teams is a powerful way to control repository access. For example, if your organization allows only your release engineering team to push code to the default branch of any repository, you could give only the release engineering team **admin** permissions to your organization's repositories and give all other teams **read** permissions.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### Creating teams with LDAP Sync enabled

Instances using LDAP for user authentication can use LDAP Sync to manage a team's members. Setting the group's **Distinguished Name** (DN) in the **LDAP group** field will map a team to an LDAP group on your LDAP server. If you use LDAP Sync to manage a team's members, you won't be able to manage your team within {% data variables.product.product_location %}. The mapped team will sync its members in the background and periodically at the interval configured when LDAP Sync is enabled. For more information, see "[Enabling LDAP Sync](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)."

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**참고:**
- LDAP Sync only manages the team's member list. You must manage the team's repositories and permissions from within {% data variables.product.prodname_ghe_server %}.
- If an LDAP group mapping to a DN is removed, such as if the LDAP group is deleted, then every member is removed from the synced {% data variables.product.prodname_ghe_server %} team. To fix this, map the team to a new DN, add the team members back, and [manually sync the mapping](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts).
- When LDAP Sync is enabled, if a person is removed from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.

{% endwarning %}

1. Ensure that [LDAP Sync is enabled](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. Search for an LDAP group's DN to map the team to. If you don't know the DN, type the LDAP group's name.
{% data variables.product.prodname_ghe_server %} will search for and autocomplete any matches.
![Mapping to the LDAP group DN](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}
