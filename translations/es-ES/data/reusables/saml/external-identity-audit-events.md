---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145137613"
---
| Acción | Descripción
|------------------|-------------------
| `external_identity.deprovision` | Se activa cuando se elimina a un usuario de tu grupo de Okta y este se desaprovisiona subsecuentemente de {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.provision` | Se activa cuando se agrega a un usuario de Okta a tu grupo de Okta y este se aprovisiona subsecuentemente al equipo mapeado en {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.update` | Se activa cuando se actualizan los ajustes de un usuario de Okta. Para obtener más información, consulta "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
