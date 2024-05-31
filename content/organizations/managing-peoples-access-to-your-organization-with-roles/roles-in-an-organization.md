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
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
---

## About roles

{% data reusables.organizations.about-roles %}

Repository-level roles give organization members, outside collaborators and teams of people varying levels of access to repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

Team-level roles are roles that give permissions to manage a team. You can give any individual member of a team the team maintainer role, which gives the member a number of administrative permissions over a team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."

Organization-level roles are sets of permissions that can be assigned to individuals or teams to manage an organization and the organization's repositories, teams, and settings. For more information about all the roles available at the organization level, see "[About organization roles](#about-organization-roles)."

## About organization roles

You can assign people to a variety of organization-level roles to control your members' access to your organization and its resources. For more details about the individual permissions included in each role, see "[Permissions for organization roles](#permissions-for-organization-roles)."

{% ifversion custom-org-roles %}
For more granular control of access to your organization's settings, you can create a custom organization role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
{% endif %}

{% ifversion enterprise-owner-join-org %}
If your organization is owned by an enterprise account, enterprise owners can choose to join your organization with any role. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
{% endif %}

### Organization owners

Organization owners have complete administrative access to your organization. This role should be limited, but to no less than two people, in your organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)."

### Organization members

The default, non-administrative role for people in an organization is the organization member. By default, organization members have a number of permissions, including the ability to create repositories and projects.

{% ifversion fpt or ghec %}

### Organization moderators

Moderators are organization members who, in addition to their permissions as members, are allowed to block and unblock non-member contributors, set interaction limits, and hide comments in public repositories owned by the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)."

### Billing managers

Billing managers are users who can manage the billing settings for your organization, such as payment information. This is a useful option if members of your organization don't usually have access to billing resources. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)."

{% endif %}

{% ifversion security-managers %}

### Security managers

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

If your organization has a security team, you can use the security manager role to give members of the team the least access they need to the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
{% endif %}

### {% data variables.product.prodname_github_app %} managers

By default, only organization owners can manage the settings of {% data variables.product.prodname_github_app %} registrations owned by an organization. To allow additional users to manage {% data variables.product.prodname_github_app %} registrations owned by an organization, an owner can grant them {% data variables.product.prodname_github_app %} manager permissions.

When you designate a user as a {% data variables.product.prodname_github_app %} manager in your organization, you can grant them access to manage the settings of some or all {% data variables.product.prodname_github_app %} registrations owned by the organization. The {% data variables.product.prodname_github_app %} manager role does not grant users access to install and uninstall {% data variables.product.prodname_github_apps %} on an organization. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization)."

### Outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}

To keep your organization's data secure while allowing access to repositories, you can add outside collaborators. An outside collaborator is a person who has access to one or more organization repositories but is not explicitly a member of the organization, such as a consultant or temporary employee.

{% ifversion repository-collaborators %}
If your enterprise uses {% data variables.enterprise.prodname_managed_users %}, the outside collaborator role is called "repository collaborator." A repository collaborator must be part of your enterprise, with a {% data variables.enterprise.prodname_managed_user %} provisioned from your identity provider. If the user does not already consume a license, the user will consume a license after you grant access to a repository. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#about-changes-to-your-subscription)."

Generally, the outside collaborator and repository collaborator roles are equivalent, and the documentation for outside collaborators also applies to repository collaborators. However, the following distinctions apply:
- You cannot enforce two-factor authentication (2FA) for repository collaborators, because this feature is not available with {% data variables.product.prodname_emus %}.
- Repository collaborators cannot bypass single sign-on (SSO) requirements, because SSO is managed at the enterprise level in an {% data variables.enterprise.prodname_emu_enterprise %}. However, like outside collaborators, they do not need to provide SSO authorization of credentials for organizations where they are a collaborator.
- Repository collaborators are subject to your enterprise IP allow list policy and your identity provider's conditional access policy. However, they are not subject to the organization's IP allow list policy.

{% data reusables.repositories.repository-collaborators-release-phase %}

{% endif %}

#### Managing outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}

To manage access to repositories for outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}, see:

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/removing-an-outside-collaborator-from-an-organization-repository)"

{% ifversion ghec or ghes %}
To control who can add outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %} to repositories, see:

- "[AUTOTITLE](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)"
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)"
{% endif %}

## Permissions for organization roles

{% ifversion fpt %}
Some of the features listed below are limited to organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

{% rowheaders %}

| Organization permission | Owners | Members | Moderators | Billing managers | Security managers |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Create repositories (see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)") |  {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |  {% octicon "x" aria-label="No" %}  | {% octicon "check" aria-label="Yes" %}  |
| View and edit billing information | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Invite people to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Edit and cancel invitations to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Remove members from the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} |
| Reinstate former members to the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Add and remove people from **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Promote organization members to _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Configure code review assignments (see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Set scheduled reminders (see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)") | {% octicon "check" aria-label="Yes" %} |{% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Add collaborators to **all repositories** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Access the organization audit log | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Edit the organization's profile page (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghec %}
| Verify the organization's domains (see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Restrict email notifications to verified or approved domains (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Delete **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Delete the organization account, including all repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Create teams (see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
| [Move teams in an organization's hierarchy](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Create projects (see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
| See all organization members and teams | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
| @mention any visible team | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
| Can be made a _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion ghec %}
| View organization insights (see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |{% endif %}{% ifversion team-discussions %}
| View and post public team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
| View and post private team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Edit and delete team discussions in **all teams** (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Disable team discussions for an organization (see "[AUTOTITLE](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Hide comments on writable commits, pull requests, and issues (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Hide comments on _all_ commits, pull requests, and issues (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Block and unblock non-member contributors (see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  |
| Limit interactions for certain users in public repositories (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghec %}
| Manage viewing of organization dependency insights (see "[AUTOTITLE](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Set a team profile picture in **all teams** (see "[AUTOTITLE](/organizations/organizing-members-into-teams/setting-your-teams-profile-picture)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Sponsor accounts and manage the organization's sponsorships (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| Manage email updates from sponsored accounts (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Attribute your sponsorships to another organization (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)" for details ) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage security and analysis settings (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| View security overview for the organization (see "[AUTOTITLE](/code-security/security-overview/about-security-overview)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion ghec %}
| Enable and enforce [SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| [Manage a user's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage an organization's SSH certificate authorities (see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Transfer repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %}  | {% octicon "x" aria-label="No" %} |
| Purchase, install, manage billing for, and cancel {% data variables.product.prodname_marketplace %} apps | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| List apps in {% data variables.product.prodname_marketplace %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Receive [{% data variables.product.prodname_dependabot_alerts %} about insecure dependencies](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) for all of an organization's repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Manage {% data variables.product.prodname_dependabot_security_updates %} (see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Manage the forking policy](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| [Limit activity in public repositories in an organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Pull (read) _all repositories_ in the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Push (write) and clone (copy) _all repositories_ in the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Convert organization members to {% ifversion repository-collaborators %}[outside collaborators or repository collaborators](#outside-collaborators-or-repository-collaborators){% else %}[outside collaborators](#outside-collaborators){% endif %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| [View people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghec %}
| [Export a list of people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository#exporting-a-list-of-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Manage the default branch name (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage default labels (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghec %}
| Enable team synchronization (see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Manage pull request reviews in the organization (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion repo-rules-enterprise %}
| Manage organization-level rulesets (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}

{% endrowheaders %}

{% elsif ghes %}
<!-- GHES 3.3+ doesn't have the extra columns for Moderators and Billing managers. -->

{% rowheaders %}

| Organization action | Owners | Members | Security managers |
|:--------------------|:------:|:-------:|:-------:|
| Invite people to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% octicon "x" aria-label="No" %}  |
| Edit and cancel invitations to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Remove members from the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Reinstate former members to the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Add and remove people from **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Promote organization members to _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Configure code review assignments (see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Add collaborators to **all repositories** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Access the organization audit log | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Edit the organization's profile page (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghes %}
| Verify the organization's domains (see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Restrict email notifications to verified or approved domains (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Delete **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Delete the organization account, including all repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Create teams (see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| See all organization members and teams | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| @mention any visible team | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| Can be made a _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| Transfer repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage security and analysis settings (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion ghes %}
| View the security overview for the organization (see "[AUTOTITLE](/code-security/security-overview/about-the-security-overview)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% endif %}{% ifversion ghes %}
| Manage {% data variables.product.prodname_dependabot_security_updates %} (see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% endif %}
| Manage an organization's SSH certificate authorities (see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Create {% data variables.projects.projects_v1_boards %} (see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion team-discussions %}
| View and post public team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |
| View and post private team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Edit and delete team discussions in **all teams** (for more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Hide comments on commits, pull requests, and issues (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %}  |{% ifversion team-discussions %}
| Disable team discussions for an organization (see "[AUTOTITLE](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Set a team profile picture in **all teams** (see "[AUTOTITLE](/organizations/organizing-members-into-teams/setting-your-teams-profile-picture)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghes %}
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| [Move teams in an organization's hierarchy](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Pull (read) _all repositories_ in the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Push (write) and clone (copy) _all repositories_ in the organization | {% octicon "check" aria-label="Yes" %} |{% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Convert organization members to {% ifversion repository-collaborators %}[outside collaborators or repository collaborators](#outside-collaborators-or-repository-collaborators){% else %}[outside collaborators](#outside-collaborators){% endif %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| [View people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| [Export a list of people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository#exporting-a-list-of-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |
| Manage default labels (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% ifversion pull-request-approval-limit %}
| Manage pull request reviews in the organization (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} |{% endif %}

{% endrowheaders %}

{% else %}
<!-- Older versions of GHES don't have columns for Moderators, Billing managers or Security managers. -->

{% rowheaders %}

| Organization action | Owners | Members |
|:--------------------|:------:|:-------:|
| Invite people to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Edit and cancel invitations to join the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Remove members from the organization | {% octicon "check" aria-label="Yes" %} |{% octicon "x" aria-label="No" %} |
| Reinstate former members to the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Add and remove people from **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Promote organization members to _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Configure code review assignments (see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)")) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Add collaborators to **all repositories** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Access the organization audit log | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Edit the organization's profile page (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghes %}
| Verify the organization's domains (see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Restrict email notifications to verified or approved domains (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Delete **all teams** | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Delete the organization account, including all repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Create teams (see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| See all organization members and teams | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| @mention any visible team | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Can be made a _team maintainer_ | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Transfer repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Manage an organization's SSH certificate authorities (see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Create {% data variables.projects.projects_v1_boards %} (see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% ifversion team-discussions %}
| View and post public team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| View and post private team discussions to **all teams** (see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Edit and delete team discussions in **all teams** (for more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Hide comments on commits, pull requests, and issues (see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)") | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion team-discussions %}
| Disable team discussions for an organization (see "[AUTOTITLE](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| Set a team profile picture in **all teams** (see "[AUTOTITLE](/organizations/organizing-members-into-teams/setting-your-teams-profile-picture)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% ifversion ghes %}
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |{% endif %}
| [Move teams in an organization's hierarchy](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Pull (read), push (write), and clone (copy) _all repositories_ in the organization | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Convert organization members to {% ifversion repository-collaborators %}[outside collaborators or repository collaborators](#outside-collaborators-or-repository-collaborators){% else %}[outside collaborators](#outside-collaborators){% endif %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| [View people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| [Export a list of people with access to an organization repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/viewing-people-with-access-to-your-repository#exporting-a-list-of-people-with-access-to-your-repository) | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| Manage default labels (see "[AUTOTITLE](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization)") | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |

{% endrowheaders %}

{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
- "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
