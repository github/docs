---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098588"
---
此 API 适用于经过身份验证的用户、{% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %}。 对于专用存储库，访问令牌需要 [`repo` 范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)，对于 {% ifversion ghae %}内部{% else %}公共给{% endif %} 存储库，则需要 [`public_repo` 范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)。
