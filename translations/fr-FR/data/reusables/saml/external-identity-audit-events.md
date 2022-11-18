---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145132912"
---
| Action | Description
|------------------|-------------------
| `external_identity.deprovision` | Déclenché quand un utilisateur est supprimé de votre groupe Okta et est donc déprovisionné de {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_identity.provision` | Déclenché quand un utilisateur Okta est ajouté à votre groupe Okta et est donc provisionné à l’équipe mappée dans {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_identity.update` | Déclenché lorsque les paramètres d’un utilisateur Okta sont mis à jour. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
