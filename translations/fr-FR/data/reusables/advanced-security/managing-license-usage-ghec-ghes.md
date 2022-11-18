---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877056"
---
Quand vous activez ou désactivez {% data variables.product.prodname_advanced_security %} pour les référentiels, {% data variables.product.prodname_dotcom %} affiche une vue d’ensemble des modifications apportées à l’utilisation de votre licence. Si vous désactivez l’accès à {% data variables.product.prodname_GH_advanced_security %}, tous les sièges utilisés par les commiters « uniques » sont libérés.

Si vous dépassez la limite de votre licence, {% data variables.product.prodname_GH_advanced_security %} continue de fonctionner sur tous les référentiels où il est déjà activé. Toutefois, dans les organisations où {% data variables.product.prodname_GH_advanced_security %} est activé pour les nouveaux référentiels, les référentiels sont créés avec la fonctionnalité désactivée. En outre, l’option permettant d’activer {% data variables.product.prodname_GH_advanced_security %} pour les référentiels existants n’est pas disponible.{% ifversion fpt or ghec %} Si vous modifiez la visibilité d’un référentiel public en référentiel privé, {% data variables.product.prodname_GH_advanced_security %} est désactivé pour ce référentiel.{% endif %}

Dès que vous libérez des sièges, en désactivant {% data variables.product.prodname_GH_advanced_security %} pour certains référentiels ou en augmentant la taille de votre licence, les options d’activation de {% data variables.product.prodname_GH_advanced_security %} fonctionnent de nouveau normalement.
