---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171863"
---
렌더링된 파일에서 상대 링크 및 이미지 경로를 정의하여 판독기에서 리포지토리의 다른 파일로 이동할 수 있습니다.

상대 링크는 현재 파일을 기준으로 하는 링크입니다. 예를 들어 리포지토리의 루트에 추가 정보 파일이 있고 _docs/CONTRIBUTING.md_ 에 다른 파일이 있는 경우 추가 정보의 _CONTRIBUTING.md_ 에 대한 상대 링크는 다음과 같습니다.

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %}는 현재 위치한 분기에 따라 상대 링크 또는 이미지 경로를 자동으로 변환하므로 링크 또는 경로는 항상 작동합니다. 링크의 경로는 현재 파일을 기준으로 합니다. `/` 시작 링크는 리포지토리 루트를 기준으로 합니다. `./` 및 `../`와 같은 모든 상대 링크 피연산자를 사용할 수 있습니다.

상대 링크는 리포지토리를 복제하는 사용자가 사용하기 더 쉽습니다. 절대 링크는 리포지토리의 복제본에서 작동하지 않을 수 있습니다. 상대 링크를 사용하여 리포지토리 내의 다른 파일을 참조하는 것이 좋습니다.
