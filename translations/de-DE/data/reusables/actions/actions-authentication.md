---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103987"
---
Diese API ist für authentifizierte Benutzer, {% data variables.product.prodname_oauth_apps %} und {% data variables.product.prodname_github_apps %} verfügbar. Zugriffstoken erfordern einen [`repo`-Bereich](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) für private Repositorys und einen [`public_repo`-Bereich](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) für {% ifversion ghae %}interne{% else %}öffentliche{% endif %} Repositorys.
