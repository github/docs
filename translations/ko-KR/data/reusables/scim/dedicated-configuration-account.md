---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063412"
---
조직에서 SCIM을 사용하려면 타사 소유 {% data variables.product.prodname_oauth_app %}을 사용해야 합니다. {% data variables.product.prodname_oauth_app %}은 특정 {% data variables.product.prodname_dotcom %} 사용자가 권한을 부여하며 해당 사용자를 대신해서 후속 작업을 수행합니다. 이 {% data variables.product.prodname_oauth_app %}에 마지막으로 권한을 부여한 사용자가 조직을 떠나거나 조직에서 제거되면 SCIM의 작동이 중지됩니다. 이 문제를 방지하려면 SCIM을 구성하기 위한 전용 사용자 계정을 만드는 것이 좋습니다. 이 사용자 계정은 조직 소유자여야 하며 라이선스를 사용합니다.
