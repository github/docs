---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111548"
---
`https://HOSTNAME/status` URL에 대해 반환되는 상태 코드를 확인하여 {% data variables.product.prodname_ghe_server %}의 가용성을 모니터링할 수 있습니다. 사용자 트래픽을 서비스할 수 있는 어플라이언스는 상태 코드 `200`(확인)을 반환합니다. 어플라이언스는 다음과 같은 몇 가지 이유로 `503`(서비스를 사용할 수 없음)을 반환할 수 있습니다.
 - 어플라이언스는 2노드 고가용성 구성의 복제본과 같은 수동 복제본입니다.
 - 어플라이언스를 유지 관리 모드로 전환합니다.
 - 어플라이언스는 지역 복제 구성의 일부이지만 비활성 복제본입니다.

다음 위치에서 사용할 수 있는 복제 개요 대시보드를 사용할 수도 있습니다.

`https://HOSTNAME/setup/replication`
