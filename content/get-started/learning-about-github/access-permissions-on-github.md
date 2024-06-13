---
title: Access permissions on GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'With roles, you can control who has access to your accounts and resources on {% data variables.product.product_name %} and the level of access each person has.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %}

Roles work differently for different types of accounts. For more information about accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

## Personal accounts

A repository owned by a personal account has two permission levels: the _repository owner_ and _collaborators_. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/permission-levels-for-a-personal-account-repository)."

## Organization accounts

Organization members can have _owner_{% ifversion fpt or ghec %}, _billing manager_,{% endif %} or _member_ roles. Owners have complete administrative access to your organization{% ifversion fpt or ghec %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
* "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"

## Enterprise accounts

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %}

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
_Enterprise owners_ have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} _Billing managers_ can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghec %}
If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new personal accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.enterprise.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.enterprise.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users)."
{% endif %}
{% endif %}

## Further reading

* "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)"
