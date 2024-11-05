---
title: About teams
intro: Teams are groups of organization members that reflect your company or group's structure with cascading access permissions and mentions.
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## About teams

You can use teams to manage access for people in an organization, and for sending notifications. Organization owners and team maintainers can give teams admin, read, or write access to organization repositories. Organization members can send a notification to an entire team by mentioning the team's name. Teams can only be made up of members of your organization, outside collaborators are unable to be on a team.

{% ifversion team-mentions-setting %}Organization owners and team maintainers can disable team notifications. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/configuring-team-notifications)."{% endif %}

Organization members can also send a notification to an entire team by requesting a review from that team. Organization members can request reviews from specific teams with read access to the repository where the pull request is opened. Teams can be designated as owners of certain types or areas of code in a CODEOWNERS file.

For more information, see:
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)"
* "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams)"
* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)"

{% ifversion ghes %}

You can also use LDAP Sync to synchronize {% data variables.location.product_location %} team members and team roles against your established LDAP groups. This lets you establish role-based access control for users from your LDAP server instead of manually within {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync)."

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Team visibility

{% data reusables.organizations.types-of-team-visibility %}

You can view all the teams you belong to on your personal dashboard. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)."

## Team pages

Each team has its own page within an organization. On a team's page, you can view team members, child teams, and the team's repositories. Organization owners and team maintainers can access team settings and update the team's description and profile picture from the team's page.

{% ifversion team-discussions %}
Organization members can create and participate in discussions with the team. For more information, see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)."
{% else %}
{% data reusables.organizations.team-discussions-deprecation %}
{% endif %}

## Nested teams

You can reflect your group or company's hierarchy within your {% data variables.product.product_name %} organization with multiple levels of nested teams. A parent team can have multiple child teams, while each child team only has one parent team. You cannot nest secret teams.

Child teams inherit the parent's access permissions, simplifying permissions management for large groups. Members of child teams also receive notifications when the parent team is @mentioned, simplifying communication with multiple groups of people.

For example, if your team structure is Employees > Engineering > Application Engineering > Identity, granting Engineering write access to a repository means Application Engineering and Identity also get that access. If you @mention the Identity Team or any team at the bottom of the organization hierarchy, they're the only ones who will receive a notification.

To easily understand who shares a parent team's permissions and mentions, you can see all of the members of a parent team's child teams on the Members tab of the parent team's page. Members of a child team are not direct members of the parent team.

You can choose a parent when you create the team, or you can move a team in your organization's hierarchy later. For more information see, "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Preparing to nest teams in your organization

If your organization already has existing teams, you should audit each team's repository access permissions before you nest teams above or below it. You should also consider the new structure you'd like to implement for your organization.

At the top of the team hierarchy, you should give parent teams repository access permissions that are safe for every member of the parent team and its child teams. As you move toward the bottom of the hierarchy, you can grant child teams additional, more granular access to more sensitive repositories.

1. Remove all members from existing teams
1. Audit and adjust each team's repository access permissions and give each team a parent
1. Create any new teams you'd like to, choose a parent for each new team, and give them repository access
1. Add people directly to teams

## Further reading

* "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)"
* "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)"
