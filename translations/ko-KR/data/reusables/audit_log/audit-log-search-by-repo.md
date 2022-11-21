---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113743"
---
### 리포지토리 기반 검색

`repo` 한정자를 사용하여 작업을 특정 리포지토리로 제한합니다. 예를 들면 다음과 같습니다.

  * `repo:my-org/our-repo`는 `my-org` 조직의 `our-repo` 리포지토리에 대해 발생한 모든 이벤트를 찾습니다.
  * `repo:my-org/our-repo repo:my-org/another-repo`는 `my-org` 조직의 `our-repo` 및 `another-repo` 리포지토리 모두에 대해 발생한 모든 이벤트를 찾습니다.
  * `-repo:my-org/not-this-repo`는 `my-org` 조직의 `not-this-repo` 리포지토리에 대해 발생한 모든 이벤트를 제외합니다.

`repo` 한정자 내에 계정 이름을 포함해야 합니다. `repo:our-repo`만 검색하면 작동하지 않습니다.
