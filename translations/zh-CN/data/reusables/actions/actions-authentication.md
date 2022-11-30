---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098588"
---
此 API 适用于经过身份验证的用户、{% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %}。 对于专用存储库，访问令牌需要 [`repo` 范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)，对于 {% ifversion ghae %}内部{% else %}公共给{% endif %} 存储库，则需要 [`public_repo` 范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)。
