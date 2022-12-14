---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066499"
---
Un exécuteur auto-hébergé peut se trouver dans les paramètres du compte de votre dépôt, organisation ou {% ifversion fpt or ghec %}entreprise sur {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} les paramètres de votre entreprise sur {% data variables.product.product_location %}{% endif %}. Pour gérer un exécuteur auto-hébergé, vous devez disposer des autorisations suivantes, selon l’emplacement auquel il a été ajouté :
- **Dépôt utilisateur** : Vous devez être le propriétaire du dépôt.
- **Organisation** : Vous devez être propriétaire de l’organisation. 
- **Dépôt d’organisation** : Vous devez être propriétaire de l’organisation ou disposer d’un accès administrateur au dépôt.
{% ifversion ghec %}
- **Compte d’entreprise** : Vous devez être propriétaire de l’entreprise.
{% elsif ghes or ghae %}
- **Entreprise** : Vous devez être administrateur de site {% data variables.product.prodname_enterprise %}.
{% endif %}
