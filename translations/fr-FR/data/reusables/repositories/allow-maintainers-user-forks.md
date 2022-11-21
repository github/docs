---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882866"
---
1. Sur les duplications appartenant à l’utilisateur, si vous souhaitez autoriser toute personne disposant d’un accès push au dépôt en amont à apporter des modifications à votre demande de tirage, sélectionnez **Autoriser les modifications des mainteneurs**.

    {% warning %}

    **Avertissement :** Si votre duplication contient des workflows {% data variables.product.prodname_actions %}, l’option est **Autoriser les mainteneurs à apporter des modifications et à accéder aux secrets**. L’autorisation de modifier sur la branche d’une duplication qui contient des workflows {% data variables.product.prodname_actions %} autorise également le mainteneur à modifier les workflows du dépôt dupliqué, ce qui peut révéler des valeurs de secrets et accorder l’accès à d’autres branches.

    {% endwarning %}
