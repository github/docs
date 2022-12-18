---
ms.openlocfilehash: 9960ade469b1d52c0f880067e4dd449082b190c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086989"
---
Une file d’attente de fusion peut augmenter le débit de fusion des demandes de tirage dans une branche cible occupée tout en veillant à la réussite de toutes les vérifications de protection de branche nécessaires.

Dès qu’une demande de tirage a réussi toutes les vérifications de protection de branche nécessaires, un utilisateur avec un accès en écriture sur le dépôt peut ajouter cette demande de tirage à une file d’attente de fusion.

Une file d’attente de fusion peut utiliser {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [{% data variables.product.prodname_actions %}](/actions/) ».
