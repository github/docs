---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060225"
---
La plupart des ressources de cette API fournissent un raccourci pour obtenir des informations sur l’utilisateur actuellement authentifié. Si une URL de demande n’a pas de paramètre `{username}`, la réponse est destinée à l’utilisateur connecté (et vous devez transmettre les [informations d’authentification](/rest/overview/resources-in-the-rest-api#authentication) avec votre demande).{% ifversion fpt or ghes or ghec %} Des informations privées supplémentaires, par exemple si l’authentification à deux facteurs est activée pour un utilisateur, sont incluses lors de l’authentification par le biais de l’authentification de base ou OAuth avec l’étendue `user`.{% endif %}
