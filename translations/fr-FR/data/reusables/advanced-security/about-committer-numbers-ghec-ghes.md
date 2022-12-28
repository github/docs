---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086216"
---
Nous enregistrons et affichons deux nombres de valideurs pour {% data variables.product.prodname_GH_advanced_security %} sur {% data variables.product.product_location %} :

- **Valideurs** indique le nombre de valideurs qui ont contribué à au moins un dépôt {% ifversion fpt or ghec %}privé {% endif %}dans une organisation, et qui utilisent un poste dans votre licence d’entreprise. Autrement dit, il sont également membres de l’organisation ou collaborateurs externes, ou ont une invitation en attente à rejoindre une organisation dans votre entreprise.
- Le nombre de valideurs qui ont contribué uniquement à ce dépôt ou à des dépôts dans cette organisation est **propre à ce dépôt ou à cette organisation**. Ce nombre indique combien de postes de licence vous pouvez libérer en désactivant {% data variables.product.prodname_GH_advanced_security %} pour ce dépôt ou cette organisation.

À défaut de valideur unique, tous les valideurs actifs contribuent également à d’autres dépôts ou organisations qui utilisent {% data variables.product.prodname_GH_advanced_security %}. La désactivation de la fonctionnalité pour ce dépôt ou cette organisation ne libérerait aucun poste sur votre licence.

Lorsque vous supprimez un utilisateur de votre compte d’entreprise, la licence de l’utilisateur est libérée dans les 24 heures.

{% note %}

**Remarque :** les utilisateurs peuvent contribuer à plusieurs dépôts ou organisations. L’utilisation est mesurée dans l’ensemble du compte d’entreprise pour s’assurer que chaque membre utilise un seul poste, quel que soit le nombre de dépôts ou d’organisations auxquels l’utilisateur contribue.

{% endnote %}
