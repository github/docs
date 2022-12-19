---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114785"
---
Esta API se encuentra disponible para los usuarios autenticados, las {% data variables.product.prodname_oauth_apps %} y las {% data variables.product.prodname_github_apps %}. Los tokens de acceso necesitan el [ámbito `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para los repositorios privados y el [ámbito `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para los repositorios {% ifversion ghae %}internos{% else %}públicos{% endif %}.
