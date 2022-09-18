---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127547"
---
| Ação | Descrição
|------------------|-------------------
| `external_identity.deprovision` | Disparado quando um usuário é removido de um grupo do Okta e, posteriormente, desprovisionado do {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.provision` | Disparado quando um usuário do Okta é adicionado ao seu grupo do Okta e, posteriormente, provisionado na equipe mapeada no {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.update` | Disparado quando as configurações de um usuário Okta são atualizadas. Para obter mais informações, confira "[Como mapear grupos do Okta para equipes](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
