---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114783"
---
이 API는 인증된 사용자 {% data variables.product.prodname_oauth_apps %} 및 {% data variables.product.prodname_github_apps %}에 사용할 수 있습니다. 액세스 토큰을 사용하려면 프라이빗 리포지토리의 경우 [`repo` 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)가, {% ifversion ghae %}내부{% else %}퍼블릭{% endif %} 리포지토리의 경우 [`public_repo` 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)가 필요합니다.
