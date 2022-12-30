---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145108621"
---
{% ifversion not ghec%}Par défaut, un compte d’utilisateur{% else %}A{% endif %} est considéré comme inactif s’il n’a pas été actif pendant 90 jours. {% ifversion not ghec %}Vous pouvez configurer la durée pendant laquelle un utilisateur ne doit pas être actif pour être considéré comme inactif{% ifversion ghes%} et choisir de suspendre les utilisateurs inactifs pour libérer des licences utilisateur{% endif %}.{% endif %}
