---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094494"
---
Esta API está disponível para usuários autenticados, {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %}. Os tokens de acesso exigem o [escopo `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para repositórios privados e o [escopo `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para repositórios {% ifversion ghae %}internos{% else %}públicos{% endif %}.
