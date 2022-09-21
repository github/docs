---
title: 从组织中删除成员
intro: 如果组织的成员不再需要访问组织拥有的任何仓库，则可以从组织中删除他们。
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064696'
---
{% ifversion fpt or ghec %}

{% warning %}

**警告：** 从组织删除成员时：
- 付费的许可数不会自动降级。 要在从组织中删除用户后减少付费的许可证数，请按照“[降级组织的付费席位](/articles/downgrading-your-organization-s-paid-seats)”中的步骤操作。
- 被删除的成员将无法访问组织私有仓库的私人复刻，但仍可拥有本地副本。 但是，它们无法将本地副本与组织的仓库同步。 如果用户在从组织中删除后的三个月内[恢复为组织成员](/articles/reinstating-a-former-member-of-your-organization)，则可以恢复其专用分支。 最终，您负责确保无法访问仓库的人员删除任何机密信息或知识产权。
- 将专用存储库的分支连接到其他组织时，这些组织能够控制对分支网络的访问。 这意味着即使在失去对原始组织的访问权限后，用户也可以保留对分支的访问权限，因为他们仍可通过分支进行显式访问。 {%- ifversion ghec %}
-  如果被删除成员不是同一企业帐户拥有的任何其他组织的成员，则被删除成员也将失去对组织内部仓库私人复刻的访问权限。 有关详细信息，请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。
{%- endif %}
- 被删除成员发出的任何组织邀请，如果没有被接受，都会取消，且无法访问。

{% endwarning %}

{% else %}

{% warning %}

**警告：** 从组织删除成员时：
 - 被删除的成员将无法访问组织私有仓库的私人复刻，但仍可拥有本地副本。 但是，它们无法将本地副本与组织的仓库同步。 如果用户在从组织中删除后的三个月内[恢复为组织成员](/articles/reinstating-a-former-member-of-your-organization)，则可以恢复其专用分支。 最终，您负责确保无法访问仓库的人员删除任何机密信息或知识产权。
- 如果被删除成员不是企业中任何其他组织的成员，则被删除成员也将失去对组织内部仓库私人复刻的访问权限。
 - 被删除用户发出的任何组织邀请，如果没有被接受，都会取消，且无法访问。

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

为帮助您从组织中删除的人员过渡并帮助确保他们删除机密信息或知识产权，我们建议您共享一份离开组织的最佳实践检查列表。 有关示例，请参阅“[离开公司的最佳做法](/articles/best-practices-for-leaving-your-company/)”。

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## 撤销用户的成员身份

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 选择您想要从组织中删除的成员。
  ![选择了两名成员的成员列表](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 在成员列表上方，使用下拉菜单，然后单击“从组织中删除”。
  ![包含删除成员选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options.png)
6. 查看将从组织中删除的一个或多个成员，然后单击“删除成员”。
  ![将删除的成员列表和“删除成员”按钮](/assets/images/help/teams/confirm-remove-members-bulk.png)

## 延伸阅读

- [从团队中删除组织成员](/articles/removing-organization-members-from-a-team){% ifversion remove-enterprise-members %}
- [从企业中删除成员](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise){% endif %}
