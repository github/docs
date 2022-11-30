---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145132913"
---
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `external_identity.deprovision` | Wird ausgelöst, wenn ein Benutzer aus einer Okta-Gruppe entfernt wurde und die Bereitstellung in {% data variables.product.prodname_ghe_managed %} anschließend aufgehoben wurde. Weitere Informationen findest du unter „[Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)“.
| `external_identity.provision` | Wird ausgelöst, wenn ein Okta-Benutzer einer Okta-Gruppe hinzugefügt wurde und anschließend dem zugeordneten Team auf {% data variables.product.prodname_ghe_managed %} bereitgestellt wurde. Weitere Informationen findest du unter „[Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)“.
| `external_identity.update` | Wird ausgelöst, wenn die Einstellungen eines Okta Benutzers aktualisiert werden. Weitere Informationen findest du unter „[Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)“.
