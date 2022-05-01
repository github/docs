---
title: Roles in an organization
intro: Organization owners can assign roles to individuals and teams giving them different sets of permissions in the organization.
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
---
## About roles
{% data reusables.organizations.about-roles %}

Repository-level roles give organization members, outside collaborators and teams of people varying levels of access to repositories. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

Team-level roles are roles that give permissions to manage a team. You can give any individual member of a team the team maintainer role, which gives the member a number of administrative permissions over a team. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."

Organization-level roles are sets of permissions that can be assigned to individuals or teams to manage an organization and the organization's repositories, teams, and settings. For more information about all the roles available at the organization level, see "[About organization roles](#about-organization-roles)."

## About organization roles

You can assign individuals or teams to a variety of organization-level roles to control your members' access to your organization and its resources. For more details about the individual permissions included in each role, see "[Permissions for organization roles](#permissions-for-organization-roles)."

{% if enterprise-owner-join-org %}
If your organization is owned by an enterprise account, enterprise owners can choose to join your organization with any role. For more information, see "[Managing your role in an organization owned by your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
{% endif %}

### Organization owners
Organization owners have complete administrative access to your organization. This role should be limited, but to no less than two people, in your organization. For more information, see "[Maintaining ownership continuity for your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)."

### Organization members
The default, non-administrative role for people in an organization is the organization member. By default, organization members have a number of permissions, including the ability to create repositories and project boards.

{% ifversion fpt or ghec %}
### Organization moderators
Moderators are organization members who, in addition to their permissions as members, are allowed to block and unblock non-member contributors, set interaction limits, and hide comments in public repositories owned by the organization. For more information, see "[Managing moderators in your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)."

### Billing managers
Billing managers are users who can manage the billing settings for your organization, such as payment information. This is a useful option if members of your organization don't usually have access to billing resources. For more information, see "[Adding a billing manager to your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)."

{% endif %}

{% if security-managers %}
### Security managers

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

If your organization has a security team, you can use the security manager role to give members of the team the least access they need to the organization. For more information, see "[Managing security managers in your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
{% endif %}
### {% data variables.product.prodname_github_app %} managers
By default, only organization owners can manage the settings of {% data variables.product.prodname_github_apps %} owned by an organization. To allow additional users to manage {% data variables.product.prodname_github_apps %} owned by an organization, an owner can grant them {% data variables.product.prodname_github_app %} manager permissions.

When you designate a user as a {% data variables.product.prodname_github_app %} manager in your organization, you can grant them access to manage the settings of some or all {% data variables.product.prodname_github_apps %} owned by the organization. For more information, see:

- "[Adding GitHub App managers in your organization](/articles/adding-github-app-managers-in-your-organization)"
- "[Removing GitHub App managers from your organization](/articles/removing-github-app-managers-from-your-organization)"

### Outside collaborators
To keep your organization's data secure while allowing access to repositories, you can add *outside collaborators*. {% data reusables.organizations.outside_collaborators_description %}

## Permissions for organization roles

{% ifversion fpt %}
Some of the features listed below are limited to organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Organization permission | Owners | Members | Moderators | Billing managers | Security managers |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Create repositories (see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| View and edit billing information | **X** |  |  | **X** |  |
| Invite people to join the organization | **X** |  |  |  |  |
| Edit and cancel invitations to join the organization | **X** |  |  |  |  |
| Remove members from the organization | **X** |  |  |  |  |
| Reinstate former members to the organization | **X** |  |  |  |  |
| Add and remove people from **all teams** | **X** |  |  |  |  |
| Promote organization members to *team maintainer* | **X** |  |  |  |  |
| Configure code review assignments (see "[Managing code review assignment for your team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |  |  |
| Set scheduled reminders (see "[Managing scheduled reminders for pull requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)") | **X** |  |  |  |  |
| Add collaborators to **all repositories** | **X** |  |  |  |  |
| Access the organization audit log | **X** |  |  |  |  |
| Edit the organization's profile page (see "[About your organization's profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |  |  |{% ifversion ghec %}
| Verify the organization's domains (see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)") | **X** |  |  |  |  |
| Restrict email notifications to verified or approved domains (see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Delete **all teams** | **X** |  |  |  |  |
| Delete the organization account, including all repositories | **X** |  |  |  |  |
| Create teams (see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| [Move teams in an organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Create project boards (see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |  | **X**  |
| See all organization members and teams | **X** | **X** | **X** |  | **X**  |
| @mention any visible team | **X** | **X** | **X** |  | **X**  |
| Can be made a *team maintainer* | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| View organization insights (see "[Viewing insights for your organization](/articles/viewing-insights-for-your-organization)") | **X** | **X** | **X** |  | **X**  |{% endif %}
| View and post public team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X** |  | **X**  |
| View and post private team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |  |  |
| Edit and delete team discussions in **all teams** (see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |  |  |
| Disable team discussions for an organization (see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |  |  |
| Hide comments on writable commits, pull requests, and issues (see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |  | **X** |
| Hide comments on _all_ commits, pull requests, and issues (see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** |  | **X** |  | **X** |
| Block and unblock non-member contributors (see "[Blocking a user from your organization](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)") | **X** |  | **X** |  |  |
| Limit interactions for certain users in public repositories (see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)") | **X** |  | **X** |  |  |{% ifversion ghec %}
| Manage viewing of organization dependency insights (see "[Changing the visibility of your organization's dependency insights](/articles/changing-the-visibility-of-your-organizations-dependency-insights)") | **X** |  |  |  |  |{% endif %}
| Set a team profile picture in **all teams** (see "[Setting your team's profile picture](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |  |  |
| Sponsor accounts and manage the organization's sponsorships (see "[Sponsoring open-source contributors](/sponsors/sponsoring-open-source-contributors)") | **X** |  |  | **X** | **X**  |
| Manage email updates from sponsored accounts (see "[Managing updates from accounts your organization's sponsors](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)") | **X** |  |  |  |  |
| Attribute your sponsorships to another organization (see "[Attributing sponsorships to your organization](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)" for details ) | **X** |  |  |  |  |
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** |  |  |  |  |
| Manage security and analysis settings (see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** |  |  |  | **X** |
| View the security overview for the organization (see "[About the security overview](/code-security/security-overview/about-the-security-overview)") | **X** |  |  |  | **X** |{% ifversion ghec %}
| Enable and enforce [SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Manage a user's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Manage an organization's SSH certificate authorities (see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |  |  |{% endif %}
| Transfer repositories | **X** |  |  |   |  |
| Purchase, install, manage billing for, and cancel {% data variables.product.prodname_marketplace %} apps | **X** |  |  |  |  |
| List apps in {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Receive [{% data variables.product.prodname_dependabot_alerts %} about vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) for all of an organization's repositories | **X** |  |  |  | **X** |
| Manage {% data variables.product.prodname_dependabot_security_updates %} (see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** |  |  |  | **X** |
| [Manage the forking policy](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Limit activity in public repositories in an organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Pull (read) *all repositories* in the organization | **X** |  |  |  | **X** |
| Push (write) and clone (copy) *all repositories* in the organization | **X** |  |  |  |  |
| Convert organization members to [outside collaborators](#outside-collaborators) | **X** |  |  |  |  |
| [View people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Export a list of people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Manage the default branch name (see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)") | **X** |  |  |  |  |
| Manage default labels (see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** |  |  |  |  |{% ifversion ghec %}
| Enable team synchronization (see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Manage pull request reviews in the organization (see "[Managing pull request reviews in your organization](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  |  |  |  |

{% elsif ghes > 3.2 or ghae-issue-4999 %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Organization action | Owners | Members | Security managers |
|:--------------------|:------:|:-------:|:-------:|
| Invite people to join the organization | **X** |  |  |
| Edit and cancel invitations to join the organization | **X** |  |  |
| Remove members from the organization | **X** | | |  |
| Reinstate former members to the organization | **X** | | |  |
| Add and remove people from **all teams** | **X** |  |  |
| Promote organization members to *team maintainer* | **X** |  |  |
| Configure code review assignments (see "[Managing code review assignment for your team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |
| Add collaborators to **all repositories** | **X** |  |  |
| Access the organization audit log | **X** |  |  |
| Edit the organization's profile page (see "[About your organization's profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes > 3.1 %}
| Verify the organization's domains (see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)") | **X** |  |  |
| Restrict email notifications to verified or approved domains (see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |{% endif %}
| Delete **all teams** | **X** |  |  |
| Delete the organization account, including all repositories | **X** |  |  |
| Create teams (see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X**  |
| See all organization members and teams | **X** | **X** | **X**  |
| @mention any visible team | **X** | **X** | **X**  |
| Can be made a *team maintainer* | **X** | **X** | **X**  |
| Transfer repositories | **X** | |  |
| Manage security and analysis settings (see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** | | **X** |{% ifversion ghes > 3.1 %}
| View the security overview for the organization (see "[About the security overview](/code-security/security-overview/about-the-security-overview)") | **X** | | **X** |{% endif %}{% ifversion ghes > 3.2 %}
| Manage {% data variables.product.prodname_dependabot_security_updates %} (see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** | | **X** |{% endif %}
| Manage an organization's SSH certificate authorities (see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |
| Create project boards (see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |
| View and post public team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X**  |
| View and post private team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Edit and delete team discussions in **all teams** (for more information, see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |  |
| Hide comments on commits, pull requests, and issues (see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X**  |
| Disable team discussions for an organization (see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Set a team profile picture in **all teams** (see "[Setting your team's profile picture](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes > 3.0 %}
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |  |{% endif %}
| [Move teams in an organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Pull (read) *all repositories* in the organization | **X** | | **X** |
| Push (write) and clone (copy) *all repositories* in the organization | **X** | |  |
| Convert organization members to [outside collaborators](#outside-collaborators) | **X** | |  |
| [View people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Export a list of people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Manage default labels (see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |  |{% if pull-request-approval-limit %}
| Manage pull request reviews in the organization (see "[Managing pull request reviews in your organization](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Manage IP allow lists (see "[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |  |{% endif %}


{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Organization action | Owners | Members |
|:--------------------|:------:|:-------:|
| Invite people to join the organization | **X** |  |
| Edit and cancel invitations to join the organization | **X** |  |
| Remove members from the organization | **X** | | |
| Reinstate former members to the organization | **X** | | |
| Add and remove people from **all teams** | **X** |  |  
| Promote organization members to *team maintainer* | **X** |  |
| Configure code review assignments (see "[Managing code review settings for your team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)")) | **X** |  |
| Add collaborators to **all repositories** | **X** |  |
| Access the organization audit log | **X** |  |
| Edit the organization's profile page (see "[About your organization's profile](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes > 3.1 %}
| Verify the organization's domains (see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)") | **X** |  |
| Restrict email notifications to verified or approved domains (see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |{% endif %}
| Delete **all teams** | **X** |  |
| Delete the organization account, including all repositories | **X** |  |
| Create teams (see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** |
| See all organization members and teams | **X** | **X** |
| @mention any visible team | **X** | **X** |
| Can be made a *team maintainer* | **X** | **X** |
| Transfer repositories | **X** | |
| Manage an organization's SSH certificate authorities (see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |
| Create project boards (see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | |
| View and post public team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** |  |
| View and post private team discussions to **all teams** (see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Edit and delete team discussions in **all teams** (for more information, see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |
| Hide comments on commits, pull requests, and issues (see "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |
| Disable team discussions for an organization (see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Set a team profile picture in **all teams** (see "[Setting your team's profile picture](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes > 3.0 %}
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |{% endif %}
| [Move teams in an organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Pull (read), push (write), and clone (copy) *all repositories* in the organization | **X** | |
| Convert organization members to [outside collaborators](#outside-collaborators) | **X** | |
| [View people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Export a list of people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Manage default labels (see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |
{% ifversion ghae %}| Manage IP allow lists (see "[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |{% endif %}

{% endif %}

## Further reading

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Project board permissions for an organization](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
