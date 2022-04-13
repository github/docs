---
title: GitHub 上的访问权限
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: '使用角色，您可以控制谁有权访问您在 {% data variables.product.product_name %} 上的帐户和资源，以及每个人拥有的访问权限级别。'
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

## 关于 {% data variables.product.prodname_dotcom %} 上的访问权限

{% data reusables.organizations.about-roles %}

对于不同类型的帐户，角色的工作方式不同。 有关帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/get-started/learning-about-github/types-of-github-accounts)”。

## 个人用户帐户

用户帐户拥有的仓库有两种权限级别：*仓库所有者*和*协作者*。 更多信息请参阅“[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)”。

## 组织帐户

组织成员可以是*所有者*{% ifversion fpt or ghec %}、*帐单管理员*{% endif %}或*成员*角色。 所有者对组织具有完全管理权限{% ifversion fpt or ghec %}，而帐单管理员负责管理帐单设置{% endif %}。 成员是其他每个人的默认角色。 您可以通过团队一次管理多个成员的访问权限。 更多信息请参阅：
- "[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[关于团队](/articles/about-teams)"

## 企业帐户

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %}

有关企业帐户权限的详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github)。
{% else %}
*企业所有者*对企业帐户拥有最终权力，并且可以在企业帐户中执行所有操作。{% ifversion ghec or ghes %} *帐单管理员*可以管理企业帐户的帐单设置。{% endif %} 企业帐户拥有的组织的成员和外部协作者将自动成为企业帐户的成员，尽管他们无权访问企业帐户本身或其设置。 更多信息请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

{% ifversion ghec %}
如果企业使用 {% data variables.product.prodname_emus %}，则成员将在 {% data variables.product.prodname_dotcom %} 上预配为新的用户帐户，并由身份提供商完全管理。 {% data variables.product.prodname_managed_users %} 对不属于其企业的存储库具有只读访问权限，并且无法与不是企业成员的用户进行交互。 在企业拥有的组织中，可以向 {% data variables.product.prodname_managed_users %} 授予与常规组织相同的粒度访问级别。 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
{% endif %}
{% endif %}

## 延伸阅读

- "[{% data variables.product.prodname_dotcom %} 帐户的类型](/articles/types-of-github-accounts)"
