---
title: 配置组织成员关系的可见性
intro: 您可以将企业中新组织成员的可见性设置为公开或私密。 您还可以阻止成员将其可见性改为非默认值。
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332342'
---
{% ifversion ghes %} 你也可以使用命令行实用工具，在实例的所有当前组织成员中强制执行默认设置。 例如，如果您需要每个组织成员的可见性都设为公开，可以将默认值设为公开，并在管理员设置中为所有新成员强制使用默认值，然后使用命令行实用程序在现有成员中强制使用公开设置。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. 在“默认组织成员身份可见性”下，使用下拉菜单，然后单击“私密”或“公开” 。
  ![包含用于将默认组织成员身份可见性配置为公开或私密的选项的下拉菜单](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. 或者，若要阻止成员将其成员身份可见性改为非默认值，请选择“对组织成员强制执行”。
  ![对所有成员强制执行默认设置的复选框](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. 如果要对所有现有成员强制执行新的可见性设置，请使用 `ghe-org-membership-update` 命令行实用工具。 有关详细信息，请参阅“[命令行实用工具](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)”。{% endif %}
