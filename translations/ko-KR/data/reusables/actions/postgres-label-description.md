---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068149"
---
워크플로는 `postgres` 레이블을 사용하여 서비스 컨테이너를 구성합니다. 모든 서비스는 컨테이너에서 실행되어야 하므로 각 서비스는 컨테이너 `image`를 지정해야 합니다. 이 예제에서는 `postgres` 컨테이너 이미지를 사용하고, 기본 PostgreSQL 암호를 제공하며, 서비스가 실행 중인지 확인하기 위한 상태 검사 옵션을 포함합니다. 자세한 내용은 Docker Hub의 [postgres 이미지](https://hub.docker.com/_/postgres)를 참조하세요.
