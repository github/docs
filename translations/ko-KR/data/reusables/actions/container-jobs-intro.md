---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117015"
---
컨테이너에서 실행되도록 작업을 구성하면 작업과 서비스 컨테이너 간의 네트워킹 구성이 간소화됩니다. 동일한 사용자 정의 브리지 네트워크의 Docker 컨테이너는 모든 포트를 서로 노출하므로 서비스 컨테이너 포트를 Docker 호스트에 매핑할 필요가 없습니다. 워크플로에서 구성하는 레이블을 사용하여 작업 컨테이너에서 서비스 컨테이너에 액세스할 수 있습니다.
