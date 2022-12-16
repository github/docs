---
title: Externe Gruppen
intro: 'Mit der API für externe Gruppen kannst du die Gruppen externer Identitätsanbieter anzeigen, die für deine Organisation verfügbar sind, und die Verbindung zwischen externen Gruppen und Teams in deiner Organisation verwalten.'
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710371'
---
## Informationen zur API für externe Gruppen

Um diese API verwenden zu können, müssen authentifizierte Benutzer*innen entweder Teamverwalter*innen oder Besitzer*innen der Organisation sein, die dem Team zugeordnet ist.

{% ifversion ghec %} {% note %}

**Hinweise:** 

- Die API für externe Gruppen ist nur für Organisationen verfügbar, die Teil eines Unternehmens sind, das {% data variables.product.prodname_emus %} verwendet. Weitere Informationen findest du unter [Informationen zu Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
- Wenn deine Organisation die Teamsynchronisierung verwendet, kannst du die Teamsynchronisierung-API nutzen. Weitere Informationen findest du unter [API für die Teamsynchronisierung](#team-synchronization).

{% endnote %} {% endif %}
