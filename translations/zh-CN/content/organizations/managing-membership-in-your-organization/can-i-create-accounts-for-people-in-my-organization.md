---
title: 我可以为组织中的人员创建帐户吗？
intro: 虽然你可以将用户添加到你创建的组织，但无法代表其他人创建其个人帐户。
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145097349'
---
## 关于个人帐户

由于访问组织需要登录个人帐户，因此每个团队成员都需要创建自己的个人帐户。 在有了要添加到组织的每个人的用户名后，就可以将用户添加到团队。

{% ifversion fpt or ghec %} {% ifversion fpt %}使用 {% data variables.product.prodname_ghe_cloud %} 的组织{% else %}你{% endif %}可以使用 SAML 单点登录集中管理个人帐户通过标识提供者 (IdP) 对组织资源的访问。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行标识和访问管理](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}。{% endif %}

您也可以考虑 {% data variables.product.prodname_emus %}。 {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## 将用户添加到您的组织

1. 向每个人提供[创建个人帐户](/articles/signing-up-for-a-new-github-account)的说明。
2. 获取要赋予其组织成员资格的每个人的用户名。
3. [邀请新的个人帐户加入](/articles/inviting-users-to-join-your-organization)组织。 使用[组织角色](/articles/permission-levels-for-an-organization)和[存储库权限](/articles/repository-permission-levels-for-an-organization)来限制每个帐户的访问权限。
