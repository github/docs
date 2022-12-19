---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145137614"
---
| Действие | Описание
|------------------|-------------------
| `external_identity.deprovision` | Активируется, когда какой-либо пользователь удаляется из группы Okta, а затем отзывается из {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.provision` | Активируется, когда какой-либо пользователь добавляется в группу Okta, а затем подготавливается к работе в сопоставленной команде в {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.update` | Активируется при обновлении параметров Okta пользователя. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
