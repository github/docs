---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332322"
---
{% data variables.product.prodname_ghe_server %} 호스트 이름에 대한 DNS 조회는 부하 분산 장치로 확인되어야 합니다. 하위 도메인 격리를 사용하도록 설정하는 것이 좋습니다. 하위 도메인 격리를 사용하도록 설정하면 추가 와일드카드 레코드(`*.HOSTNAME`)도 부하 분산 장치로 확인되어야 합니다. 자세한 내용은 “[하위 도메인 격리 사용](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”을 참조하세요.
