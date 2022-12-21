---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877171"
---
Par défaut, {% ifversion ghes or ghae %}une fois que {% data variables.product.prodname_actions %} est activé {% data variables.product.product_location %}, il{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %} est activé pour tous les dépôts et toutes les organisations. Vous pouvez choisir de désactiver {% data variables.product.prodname_actions %} ou de le limiter aux actions {% ifversion actions-workflow-policy %}et aux workflows réutilisables{% endif %} dans votre {% ifversion ghec or ghes or ghae %}entreprise{% else %}organisation{% endif %}.
