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

Repository-level roles give organization members, outside collaborators and teams of people varying levels of access to repositories. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

Team-level roles are roles that give permissions to manage a team. You can give any individual member of a team the team maintainer role, which gives the member a number of administrative permissions over a team. For more information, see [AUTOTITLE](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).

{% ifversion org-pre-defined-roles %}
Organization-level roles are sets of permissions that can be assigned to individuals or teams to manage an organization and the organization's repositories, teams, and settings. For more information about all the roles available at the organization level, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-predefined-organization-roles).
{% endif %}

{% ifversion ghec or ghes %}
If your organization is owned by an enterprise account, enterprise owners can choose to join your organization with any role. For more information, see [AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
{% endif %}

{% ifversion org-pre-defined-roles %}

## About predefined organization roles

Predefined organization roles are roles that are available by default in every organization. You don't need to create them yourself. They can include both organization permissions that let the recipient manage the organization, as well as repository permissions that apply to all of the repositories in the organization.

For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-predefined-organization-roles).

{% endif %}

## About custom organization roles

{% data reusables.organizations.custom-org-roles-intro %}

{% ifversion fpt %}
This feature is only available to organizations on {% data variables.product.prodname_ghe_cloud %}.
{% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

For more information on the permissions available with custom roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).


## Descriptions of predefined organization roles

You can assign people to a variety of organization-level roles to control your members' access to your organization and its resources.

Upon invitation, you can add a user as an owner, billing manager, or member. After they have joined, you can designate them additional permissions under a predefined or custom role, such as a Moderator role or a CI/CD role.

### Organization owners

Organization owners have complete administrative access to your organization. This role should be limited, but to no less than two people, in your organization. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

### Organization members

The default, non-administrative role for people in an organization is the organization member. By default, organization members have a number of permissions, including the ability to create repositories and projects.

{% ifversion fpt or ghec %}

### Organization moderators

Moderators are organization members who, in addition to their permissions as members, are allowed to block and unblock non-member contributors, set interaction limits, and hide comments in public repositories owned by the organization. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization).

### Billing managers

Billing managers are users who can manage the billing settings for your organization, such as payment information. This is a useful option if members of your organization don't usually have access to billing resources. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

{% endif %}

### Security managers

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

If your organization has a security team, you can use the security manager role to give members of the team the least access they need to the organization. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

### {% data variables.product.prodname_github_app %} managers

By default, only organization owners can manage the settings of {% data variables.product.prodname_github_app %} registrations owned by an organization. To allow additional users{% ifversion org-app-manager-teams %} or teams{% endif %} to manage {% data variables.product.prodname_github_app %} registrations owned by an organization, an owner can grant them {% data variables.product.prodname_github_app %} manager permissions.

When you designate a user{% ifversion org-app-manager-teams %} or team{% endif %} as a {% data variables.product.prodname_github_app %} manager in your organization, you can grant them access to manage the settings of some or all {% data variables.product.prodname_github_app %} registrations owned by the organization. The {% data variables.product.prodname_github_app %} manager role does not grant users access to install and uninstall {% data variables.product.prodname_github_apps %} on an organization. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization).

### Outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}

To keep your organization's data secure while allowing access to repositories, you can add outside collaborators. An outside collaborator is a person who has access to one or more organization repositories but is not explicitly a member of the organization, such as a consultant or temporary employee.

{% ifversion repository-collaborators %}
If your enterprise uses {% data variables.enterprise.prodname_managed_users %}, the outside collaborator role is called "repository collaborator." A repository collaborator must be part of your enterprise, with a {% data variables.enterprise.prodname_managed_user %} provisioned from your identity provider. If the user does not already consume a license, the user will consume a license after you grant access to a repository. For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#about-changes-to-your-subscription).

Generally, the outside collaborator and repository collaborator roles are equivalent, and the documentation for outside collaborators also applies to repository collaborators. However, the following distinctions apply:
* You cannot enforce two-factor authentication (2FA) for repository collaborators, because this feature is not available with {% data variables.product.prodname_emus %}.
* Repository collaborators cannot bypass single sign-on (SSO) requirements, because SSO is managed at the enterprise level in an {% data variables.enterprise.prodname_emu_enterprise %}. However, like outside collaborators, they do not need to provide SSO authorization of credentials for organizations where they are a collaborator.
* Repository collaborators are subject to your enterprise IP allow list policy and your identity provider's conditional access policy. However, they are not subject to the organization's IP allow list policy.

{% endif %}

#### Managing outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}

To manage access to repositories for outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %}, see:

* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/removing-an-outside-collaborator-from-an-organization-repository)

{% ifversion ghec or ghes %}
To control who can add outside collaborators{% ifversion repository-collaborators %} or repository collaborators{% endif %} to repositories, see:

* [AUTOTITLE](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)
{% endif %}

## Next steps

* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)