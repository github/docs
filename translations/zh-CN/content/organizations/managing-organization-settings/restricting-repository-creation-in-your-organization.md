---
title: 限制在组织中创建仓库
intro: 为保护组织的数据，您可以配置在组织中创建仓库的权限。
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065968'
---
您可以选择成员是否可以在组织中创建仓库。 {% ifversion ghec or ghes or ghae %}如果允许成员创建仓库，您可以选择成员可以创建的仓库类型。{% elsif fpt %}如果允许成员创建仓库，您可以选择成员是可以同时创建公共和私有仓库，还是只能创建公共仓库。{% endif %} 组织所有者始终可以创建任何类型的仓库。

{% ifversion fpt %} 使用 {% data variables.product.prodname_ghe_cloud %} 的组织还可以将成员限制于只能创建专用存储库。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)。
{% endif %}

{% ifversion ghec or ghae or ghes %} 企业所有者可以限制你可用于组织的存储库创建策略的选项。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”。
{% endif %}

{% warning %}

**警告**：此设置仅限制在存储库创建时可用的可见性选项，而不会限制以后更改存储库可见性的能力。 有关限制对现有存储库可见性进行更改的详细信息，请参阅“[限制组织中的存储库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“Repository creation（仓库创建）”下，选择一个或多个选项。

   {%- ifversion ghes or ghec or ghae %} ![存储库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![存储库创建选项](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **注意：** 要将成员限制为只能创建专用存储库，你的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. 单击“保存” 。
