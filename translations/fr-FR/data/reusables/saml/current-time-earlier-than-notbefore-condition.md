---
ms.openlocfilehash: a9ba68f182b48a4186a4ae63909ef4e146d7c392
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108505"
---
## Erreur : « L’heure actuelle est antérieure à la condition NotBefore »

Cette erreur peut se produire lorsqu’il y a une trop grande différence de temps entre votre fournisseur d’identité et {% data variables.product.product_name %}, ce qui arrive souvent avec les fournisseurs d’identité auto-hébergés.

{% ifversion ghes %}Pour éviter ce problème, nous vous recommandons de faire pointer votre appareil vers la même source NTP (Network Time Protocol) que votre fournisseur d’identité, si possible. {% endif %}Si vous rencontrez cette erreur, assurez-vous que l’heure de votre {% ifversion ghes %}appliance{% else %}fournisseur d’identité{% endif %} est correctement synchronisée avec votre serveur NTP.

Si vous utilisez ADFS comme fournisseur d’identité, définissez également `NotBeforeSkew` dans ADFS sur 1 minute pour {% data variables.product.prodname_dotcom %}. Si `NotBeforeSkew` est défini sur 0, même les différences de temps très petites, y compris de l’ordre de la milliseconde, peuvent entraîner des problèmes d’authentification.
