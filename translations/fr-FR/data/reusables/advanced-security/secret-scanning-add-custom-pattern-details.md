---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086208"
---
1. Entrez les détails de votre nouveau modèle personnalisé :
   1. Vous devez au moins fournir le nom de votre modèle, ainsi qu’une expression régulière pour le format de votre modèle de secret.
   1. Vous pouvez cliquer sur **Autres options {% octicon "chevron-down" aria-label="down" %}** pour fournir tout autre contenu environnant ou des exigences de correspondance supplémentaires pour le format du secret.
   1. Fournissez un exemple de chaîne de test pour vérifier que votre configuration correspond aux modèles que vous attendez.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![Créer un formulaire de modèle {% data variables.product.prodname_secret_scanning %} personnalisé](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![Créer un formulaire de modèle {% data variables.product.prodname_secret_scanning %} personnalisé](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
