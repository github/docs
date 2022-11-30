---
ms.openlocfilehash: 6f5f7b9a1ef172b471215d5ea66d834fb00e19d7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877140"
---
Par défaut, les {% data variables.projects.projects_v1_boards %} appartenant à l’utilisateur et à l’échelle de l’organisation sont privés et seules les personnes avec des autorisations en lecture, écriture ou administration sur le {% data variables.projects.projects_v1_board %} peuvent les voir. Un {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interne{% else %}public{% endif %} est visible par {% ifversion ghae %}toute personne avec un accès à votre entreprise{% else %}toute personne{% endif %} avec l’URL du {% data variables.projects.projects_v1_board %}. Les {% data variables.projects.projects_v1_boards %} de niveau dépôt partagent la visibilité de leur dépôt. Autrement dit, un dépôt privé aura un projet privé et cette visibilité ne peut pas être changée.
