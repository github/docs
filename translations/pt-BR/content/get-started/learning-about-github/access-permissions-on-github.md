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
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Roles work differently for different types of accounts. For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

## Personal accounts

A repository owned by a personal account has two permission levels: the *repository owner* and *collaborators*. For more information, see "[Permission levels for a personal account repository](/articles/permission-levels-for-a-user-account-repository)."

## Organization accounts

Organization members can have *owner*{% ifversion fpt or ghec %}, *billing manager*,{% endif %} or *member* roles. Owners have complete administrative access to your organization{% ifversion fpt or ghec %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[About teams](/articles/about-teams)"

## Enterprise accounts

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %} 

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Enterprise owners* have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} *Billing managers* can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. For more information, see "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghec %}
If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new personal accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.enterprise.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.enterprise.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}
{% endif %}

## Further reading

- "[Types of {% data variables.product.prodname_dotcom %} accounts](/articles/types-of-github-accounts)"
