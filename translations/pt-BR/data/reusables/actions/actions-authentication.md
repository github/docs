---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094494"
---
Esta API está disponível para usuários autenticados, {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %}. Os tokens de acesso exigem o [escopo `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para repositórios privados e o [escopo `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) para repositórios {% ifversion ghae %}internos{% else %}públicos{% endif %}.
