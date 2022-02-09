---
title: GitHub 上的访问权限
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
shortTitle: 访问权限
---

## About access permissions on {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %}

Roles work differently for different types of accounts. For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

## 个人用户帐户

用户帐户拥有的仓库有两种权限级别：*仓库所有者*和*协作者*。 更多信息请参阅“[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)”。

## 组织帐户

组织成员可以是*所有者*{% ifversion fpt or ghec %}、*帐单管理员*{% endif %}或*成员*角色。 所有者对组织具有完全管理权限{% ifversion fpt or ghec %}，而帐单管理员负责管理帐单设置{% endif %}。 成员是其他每个人的默认角色。 您可以通过团队一次管理多个成员的访问权限。 更多信息请参阅：
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[关于团队](/articles/about-teams)"

## 企业帐户

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %}

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Enterprise owners* have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} *Billing managers* can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. 更多信息请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

{% ifversion ghec %}
If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.product.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.product.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
{% endif %}
{% endif %}

## 延伸阅读

- "[{% data variables.product.prodname_dotcom %} 帐户的类型](/articles/types-of-github-accounts)"
