---
ms.openlocfilehash: 3b0b01478e2297c1fd4a61f79bdba02f2c7e4c83
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145099326"
---
| 操作 | 说明
|------------------|-------------------
| `external_group.delete` | 删除 Okta 组时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.link` | 当 Okta 组映射到 {% data variables.product.prodname_ghe_managed %} 团队时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.provision` | 当 Okta 组在 {% data variables.product.prodname_ghe_managed %} 上映射到团队时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.unlink` | 当 Okta 组从 {% data variables.product.prodname_ghe_managed %} 团队中取消映射时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.update` | 当 Okta 组的设置更新时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
