---
title: Access permissions on GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'With roles, you can control who has access to your accounts and resources and the level of access each person has.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## About access permissions on {% data variables.product.github %}

{% data reusables.organizations.about-roles %}

Roles work differently for different types of accounts. For more information about accounts, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).

## Personal accounts

A repository owned by a personal account has two permission levels: the _repository owner_ and _collaborators_. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/permission-levels-for-a-personal-account-repository).

## Organization accounts

Organization members can have _owner_{% ifversion fpt or ghec %}, _billing manager_,{% endif %} or _member_ roles. Owners have complete administrative access to your organization{% ifversion fpt or ghec %}, while billing managers can manage billing settings{% endif %}. Member is the default role for everyone else. You can manage access permissions for multiple members at a time with teams. For more information, see:
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization){% ifversion projects-v1 %}
* [AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization){% endif %}
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)

## Enterprise accounts

Enterprise accounts have a range of predefined roles that define users' access to the enterprise settings. You can also create custom enterprise roles to define your own sets of fine-grained permissions.

For more information, see {% ifversion fpt %}[AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/abilities-of-roles) in the {% data variables.product.prodname_ghe_cloud %} documentation{% else %}[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/abilities-of-roles){% endif %}.

## Further reading

* [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)
