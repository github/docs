---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103986"
---
Cette API est disponible pour des utilisateurs authentifiés, {% data variables.product.prodname_oauth_apps %} et {% data variables.product.prodname_github_apps %}. Les jetons d’accès nécessitent une [étendue `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) pour les dépôts privés et une [étendue `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) pour les dépôts {% ifversion ghae %}internes{% else %}publics{% endif %}.
