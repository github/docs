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
shortTitle: Access permissions
ms.openlocfilehash: 32db1949cbc110559023f719682caed0319aae9e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128916'
---
## 关于 {% data variables.product.prodname_dotcom %} 上的访问权限

{% data reusables.organizations.about-roles %} 

对于不同类型的帐户，角色的工作方式不同。 有关帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/get-started/learning-about-github/types-of-github-accounts)”。

## 个人帐户

个人帐户拥有的存储库有两种权限级别：存储库所有者和协作者 。 有关详细信息，请参阅“[个人帐户存储库的权限级别](/articles/permission-levels-for-a-user-account-repository)”。

## 组织帐户

组织成员可以拥有所有者{% ifversion fpt or ghec %}、计费管理员{% endif %}或成员角色  。 所有者对组织具有完全管理权限{% ifversion fpt or ghec %}，而计费管理员可以管理计费设置{% endif %}。 成员是其他每个人的默认角色。 您可以通过团队一次管理多个成员的访问权限。 有关详细信息，请参阅：
- [组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [组织的项目委员会权限](/articles/project-board-permissions-for-an-organization)
- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [关于团队](/articles/about-teams)

## 企业帐户

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

有关企业帐户权限的详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github)。
{% else %}企业所有者对企业帐户拥有最终执行权，并且可以在企业帐户中执行所有操作。{% ifversion ghec or ghes %}计费管理员可以管理企业帐户的计费设置。{% endif %}企业帐户所拥有的组织的成员和外部协作者自动成为企业帐户的成员，尽管他们无法访问企业帐户本身或其设置 。 有关详细信息，请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

{% ifversion ghec %}如果企业使用 {% data variables.product.prodname_emus %}，成员将在 {% data variables.product.prodname_dotcom %} 上预配作为新个人帐户，并由标识提供者完全托管。 {% data variables.product.prodname_managed_users %} 对不属于其企业的存储库具有只读访问权限，并且无法与不是企业成员的用户进行交互。 在企业拥有的组织中，可以向 {% data variables.product.prodname_managed_users %} 授予与常规组织相同的粒度访问级别。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
{% endif %} {% endif %}

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 帐户类型](/articles/types-of-github-accounts)
