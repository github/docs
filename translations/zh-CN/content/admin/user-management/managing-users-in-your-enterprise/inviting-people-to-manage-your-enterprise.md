---
title: 邀请人员管理企业
intro: '你可以{% ifversion ghec %}邀请用户成为企业所有者或帐单管理员，以{% elsif ghes %}将企业所有者添加到{% endif %}企业帐户。 也可以删除不再需要访问企业帐户的企业所有者{% ifversion ghec %}或帐单管理员{% endif %}。'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180445'
---
## 关于可以管理企业帐户的用户

{% data reusables.enterprise-accounts.enterprise-administrators %} 有关详细信息，请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

{% ifversion ghes %}

如果要在 {% data variables.product.prodname_dotcom_the_website %} 上管理企业帐户的所有者和账单管理员，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[邀请人员管理企业](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)”。

{% endif %}

{% ifversion ghec %}

如果您的企业使用 {% data variables.product.prodname_emus %}，企业所有者只能通过您的身份提供商添加或删除。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% endif %}

{% tip %}

提示：有关管理企业帐户拥有的组织中用户的详细信息，请参阅“[管理组织中的成员身份](/articles/managing-membership-in-your-organization)”和“[使用角色管理用户对组织的访问权限](/articles/managing-peoples-access-to-your-organization-with-roles)”。

{% endtip %}

## {% ifversion ghec %}邀请{% elsif ghes %}添加{% endif %}企业管理员到企业帐户

{% ifversion ghec %}在邀请用户加入企业帐户后，他们必须接受电子邮件邀请，然后才可访问企业帐户。 待处理的邀请将在 7 天后过期。{% endif %}

{% ifversion enterprise-membership-view-improvements %} 可以查看成为企业帐户管理员的所有待处理邀请。 有关详细信息，请参阅[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 在管理员列表上方，单击{% ifversion ghec %}“邀请管理员”{% elsif ghes %}“添加所有者”{% endif %} 。
  {% ifversion ghec %} ![企业所有者列表上方的“邀请管理员”按钮](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![企业所有者列表上方的“添加所有者”按钮](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. 输入您要邀请其成为企业管理员的人员的用户名、全名或电子邮件地址，然后从结果中选择适当的人员。
  ![包含用于键入个人用户名、全名或电子邮件地址的字段的模态框，以及“邀请”按钮](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. 选择“所有者”或“账单管理员” 。
  ![角色选择模态框](/assets/images/help/business-accounts/invite-admins-roles.png)
1. 单击“发送邀请”。
  ![“发送邀请”按钮](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. 单击“添加”。
  ![“添加”按钮](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## 从企业帐户删除企业管理员

只有企业所有者才可从企业帐户删除其他企业管理员。

{% ifversion ghec %} 如果要删除的管理员是企业拥有的任何组织的成员，可以选择“转换为成员”，此操作删除的是管理角色，但保留了组织成员身份，或者选择“从企业中删除”，这将同时删除他们的管理角色和组织成员身份。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 在要删除的人员的用户名旁边，单击 {% octicon "gear" aria-label="The Settings gear" %}，然后单击 {% ifversion ghes %}“删除所有者”{% elsif ghec %}“转换为成员”或“从企业中删除”  。{% endif %}.
  {% ifversion ghec %} ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Settings gear with menu option to remove an enterprise administrator](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. 阅读确认信息，然后单击{% ifversion ghes %}“删除所有者”{% elsif ghec %}“是，将 [用户名] 转换为成员”{% endif %} 。
