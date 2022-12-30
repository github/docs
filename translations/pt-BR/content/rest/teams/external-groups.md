---
title: Grupos externos
intro: A API de grupos externos permite que você visualize os grupos de provedores de identidade externos que estão disponíveis para sua organização e gerencie a conexão entre grupos externos e equipes na sua organização.
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 590605ab68eb40d42949e179e471d5c7d333f43e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147059967'
---
## <a name="about-the-external-groups-api"></a>Sobre a API de Grupos Externos

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe.

{% ifversion ghec %} {% note %}

**Observações:** 

- A API de grupos externos está disponível apenas para organizações que fazem parte de uma empresa que usa {% data variables.product.prodname_emus %}. Para obter mais informações, confira "[Sobre os Usuários Gerenciados do Enterprise](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Se sua organização usar a sincronização de equipe, você poderá usar a API de sincronização de equipe. Para obter mais informações, confira "[API de sincronização da equipe](#team-synchronization)".

{% endnote %} {% endif %}
