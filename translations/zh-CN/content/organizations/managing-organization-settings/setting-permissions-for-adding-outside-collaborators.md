---
title: 设置添加外部协作者的权限
intro: 为了保护组织的数据和组织中使用的付费许可证数，你可以配置可向组织存储库添加外部协作者的人员。
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: eadf4f805775a99f763ec4df211fe6ea9735dabc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099703'
---
默认情况下，对存储库具有管理员访问权限的任何人都可以邀请外部协作者处理存储库。 你可以选择将添加外部协作者的能力限制为仅添加组织所有者。

{% ifversion ghec %} {% note %}

**注意：** 只有使用 {% data variables.product.prodname_ghe_cloud %} 的组织才能限制向组织所有者邀请外部协作者的能力。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}如果贵组织属于企业帐户，在企业所有者设置了企业级策略的情况下，{% else %}你{% endif %}可能无法为组织配置此设置。 有关详细信息，请参阅“[在企业中强制实施存储库管理策略]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}。”

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion ghes < 3.3 %}
5. 在“存储库邀请”下，选择“允许成员邀请外部协作者加入组织存储库”。
   ![“允许成员邀请外部协作者加入组织存储库”复选框](/assets/images/help/organizations/repo-invitations-checkbox-old.png){% else %}
5. 在“存储库外部协作者”下，取消选择“允许存储库管理员邀请外部协作者加入该组织的存储库”。
  ![“允许存储库管理员邀请外部协作者加入组织存储库”复选框](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% endif %}
6. 单击“保存” 。
