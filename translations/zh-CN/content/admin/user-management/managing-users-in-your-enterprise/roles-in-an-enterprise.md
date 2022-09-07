---
title: 企业中的角色
intro: 企业中的每个人都是企业的成员。 要控制对企业的设置和数据的访问权限，您可以为企业成员分配不同的角色。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178453'
---
## 关于企业中的角色

企业中的每个人都是企业的成员。 您还可以为企业成员分配管理角色。 每个管理员角色都映射到业务职能，并提供在企业中执行特定任务的权限。

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} 如果你的企业没有使用 {% data variables.product.prodname_emus %}，你可以邀请他人使用他们控制的 {% data variables.product.product_name %} 用户帐户来管理角色。 有关详细信息，请参阅“[邀请人员管理企业](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)”。

在使用 {% data variables.product.prodname_emus %} 的企业中，必须通过身份提供商预配新所有者和成员。 企业所有者和组织所有者不能使用 {% data variables.product.prodname_dotcom %} 向企业添加新成员或所有者。 您可以使用 IdP 选择成员的企业角色，它不能在 {% data variables.product.prodname_dotcom %} 上更改。 您可以在 {% data variables.product.prodname_dotcom %} 上选择成员在组织中的角色。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
{% else %} 有关如何将人员添加到企业的详细信息，请参阅“[身份验证](/admin/authentication)”。

{% endif %}

## 企业所有者

企业所有者可以完全控制企业，并可以采取所有操作，包括：
- 管理管理员
- {% ifversion ghec %}添加和删除{% elsif ghae or ghes %}管理{% endif %}组织{% ifversion ghec %}{% elsif ghae or ghes %}（在{% endif %}企业{% ifversion remove-enterprise-members %}中操作）
- 从企业拥有的所有组织中删除企业成员{% endif %}
- 管理企业设置
- 跨组织强制实施策略 {% ifversion ghec %}- 管理计费设置{% endif %}

{% ifversion enterprise-owner-join-org %} 默认情况下，企业所有者无权访问组织设置或内容。 要获得访问权限，企业所有者可以加入其企业拥有的任何组织。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。

除非您将其设为企业所有者，否则企业中的组织所有者无权访问企业。
{% else %} 企业所有者无法访问组织设置或内容，除非将其设为组织所有者或授予直接访问组织所拥有存储库的权限。 同样，除非您将其设为企业所有者，否则企业中的组织所有者无权访问企业。
{% endif %}

企业所有者仅在他们是企业中至少一个组织的所有者或成员时才可使用许可证。 即使企业所有者在多个组织中具有角色，他们也会使用单个许可证。 {% ifversion ghec %}企业所有者必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。{% endif %} 作为最佳实践，我们建议只将少数人设为公司的企业所有者，以降低业务风险。

## 企业成员

您的企业所拥有组织的成员也会自动成为企业的成员。 成员可以在组织中进行协作，也可以是组织所有者，但成员无法访问或配置企业设置{% ifversion ghec %}，包括计费设置{% endif %}。

企业中的人员可能对您的企业拥有的各种组织以及这些组织中的仓库具有不同级别的访问权限。 您可以查看每个人具有访问权限的资源。 有关详细信息，请参阅“[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)”。

有关企业级权限的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

对组织所拥有仓库具有外部协作者访问权限的人员也会在企业的 People（人员）选项卡中列出，但他们不是企业成员，也没有对企业的任何访问权限。 有关外部协作者的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)”。

{% ifversion ghec %}

## 帐单管理员

帐单管理员只能访问企业的帐单设置。 企业的帐单管理员可以：
- 查看和管理用户许可证、{% data variables.large_files.product_name_short %} 包以及其他计费设置
- 查看帐单管理员列表
- 添加或删除其他帐单管理员

帐单管理员仅在他们是企业中至少一个组织的所有者或成员时才可使用许可证。 帐单管理员无权访问企业中的组织或仓库，也无法添加或删除企业所有者。 帐单管理员必须在 {% data variables.product.prodname_dotcom %} 上拥有个人帐户。

## 关于支持权利

{% data reusables.enterprise-accounts.support-entitlements %}

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”

{% endif %}
