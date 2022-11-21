---
ms.openlocfilehash: ba9c00a9dfa055c518eb60bca3acc59a3cc89381
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114876"
---
워크플로는 하나 이상의 작업을 실행하는 구성 가능한 자동화된 프로세스입니다. 워크플로는 리포지토리에 체크 인된 YAML 파일에서 정의되며, 리포지토리의 이벤트로 트리거될 때 실행되거나 수동으로 또는 정의된 일정에 따라 트리거될 수 있습니다.

워크플로는 리포지토리의 `.github/workflows` 디렉터리에 정의되며 리포지토리에는 여러 워크플로가 있을 수 있으며, 각 워크플로는 다른 작업 세트를 수행할 수 있습니다. 예를 들어 끌어오기 요청을 빌드 및 테스트하는 워크플로, 릴리스가 생성될 때마다 애플리케이션을 배포하는 워크플로, 누군가가 새 이슈를 열 때마다 레이블을 추가하는 워크플로가 있을 수 있습니다.
