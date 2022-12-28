---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114784"
---
Этот API доступен для пользователей, прошедших проверку подлинности, {% data variables.product.prodname_oauth_apps %}, и {% data variables.product.prodname_github_apps %}. Маркерам доступа требуется [`repo` область](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) для закрытых репозиториев и [`public_repo` область](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) для репозиториев {% ifversion ghae %}internal{% else %}public{% endif %}.
