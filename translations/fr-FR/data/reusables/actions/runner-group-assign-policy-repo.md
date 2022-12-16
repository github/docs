---
ms.openlocfilehash: ef09954dd829eae3eb7cfaefbefab65b9a2fffc5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086257"
---
1. Affectez une stratégie d’accès au dépôt.

    Vous pouvez configurer un groupe d’exécuteurs pour qu’il soit accessible à une liste spécifique de dépôts ou à tous les dépôts de l’organisation.{% ifversion ghec or ghes %} Par défaut, seuls les dépôts privés peuvent accéder aux exécuteurs dans un groupe d’exécuteurs, mais vous pouvez changer cela. Ce paramètre ne peut pas être remplacé si vous configurez un groupe d’exécuteurs d’une organisation qui a été partagé par une grande entreprise. {% endif %}
