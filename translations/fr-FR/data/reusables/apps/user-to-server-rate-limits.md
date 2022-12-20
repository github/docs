---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103489"
---
{% ifversion ghes %}Par défaut, les requêtes utilisateur à serveur{% else %}Utilisateur à serveur{% endif %} sont limitées à {% ifversion ghae %}15 000{% elsif fpt or ghec or ghes %}5 000{% endif %} requêtes par heure et par utilisateur authentifié. Toutes les requêtes provenant d’applications OAuth autorisées par un utilisateur ou un jeton d’accès personnel appartenant à cet utilisateur, ainsi que les requêtes authentifiées à l’aide des informations d’identification d’authentification de l’utilisateur, partagent le même quota de {% ifversion ghae %}15 000{% elsif fpt or ghec or ghes %}5 000{% endif %} requêtes par heure pour cet utilisateur.
