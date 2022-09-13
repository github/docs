---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145129595"
---
| 操作 | 说明
|------------------|-------------------
| `external_identity.deprovision` | 当用户从 Okta 组中删除并随后从 {% data variables.product.prodname_ghe_managed %} 取消预配时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_identity.provision` | 当 Okta 用户添加到 Okta 组并随后预配到 {% data variables.product.prodname_ghe_managed %} 上的映射团队时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_identity.update` | 在更新 Okta 用户的设置时触发。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
