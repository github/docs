---
title: About access permissions on GitHub
intro: 'Learn about roles, and how you can control who has access to your enterprise''s resources and the level of access each person has.'
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.github %}

{% data reusables.organizations.about-roles %}

Roles work differently for different types of accounts. For more information about accounts, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).

## Personal accounts

A repository owned by a personal account has two permission levels: the **repository owner** and **collaborators**. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/permission-levels-for-a-personal-account-repository).

## Organization accounts

Organization members can have **owner**, **billing manager**, or **member** roles. Owners have complete administrative access to your organization, while billing managers can manage billing settings. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)

## Enterprise accounts

_Enterprise owners_ have ultimate power over the enterprise account and can take every action in the enterprise account. _Billing managers_ can manage your enterprise account's billing settings. Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings.

Enterprise owners cannot access organization content or repositories unless they are explicitly granted a role in the organization. However, enterprise owners can manage enterprise settings and policies that impact an organization in the enterprise. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise).

If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new personal accounts on {% data variables.product.github %} and are fully managed by the identity provider. The {% data variables.enterprise.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.enterprise.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see [AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users).

## Next steps

Next, learn about how you can use rulesets to manage how people interact with your enterprise's repositories. See [AUTOTITLE](/enterprise-onboarding/feature-enhancements/about-rulesets).
