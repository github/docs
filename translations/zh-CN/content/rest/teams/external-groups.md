---
title: 外部组
intro: 外部组 API 允许查看可用于组织的外部标识提供者组，并管理组织中外部组和团队之间的连接。
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 590605ab68eb40d42949e179e471d5c7d333f43e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '147059968'
---
## <a name="about-the-external-groups-api"></a>关于外部组 API

要使用此 API，经过身份验证的用户必须是团队维护员或与团队关联的组织的所有者。

{% ifversion ghec %} {% note %}

**注意：** 

- 外部组 API 仅适用于属于使用 {% data variables.product.prodname_emus %} 的企业中的组织。 有关详细信息，请参阅“[关于企业托管用户](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
- 如果您的组织使用团队同步，则可以使用团队同步 API。 有关详细信息，请参阅“[团队同步 API](#team-synchronization)”。

{% endnote %} {% endif %}
