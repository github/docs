---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145117028"
---
## 아티팩트 및 종속성 캐싱 비교

아티팩트 및 캐싱은 {% data variables.product.prodname_dotcom %}에 파일을 저장할 수 있는 기능을 제공하지만 각 기능은 서로 다른 사용 사례를 제공하므로 서로 바꿔서 사용할 수 없습니다.

- 패키지 관리 시스템의 빌드 종속성 등 작업 또는 워크플로 실행 간에 자주 변경되지 않는 파일을 다시 사용하려는 경우 캐싱을 사용합니다.
- 빌드된 이진 파일 또는 빌드 로그와 같이 워크플로 실행이 종료된 후 볼 작업에서 생성된 파일을 저장하려는 경우 아티팩트를 사용합니다. 
