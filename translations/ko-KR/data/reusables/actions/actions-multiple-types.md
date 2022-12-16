---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114748"
---
이벤트에 대해 작업 유형 또는 필터를 지정하고 여러 이벤트에서 워크플로가 트리거되는 경우 각 이벤트를 별도로 구성해야 합니다. 구성이 없는 이벤트를 포함하여 모든 이벤트에 콜론(`:`)을 추가해야 합니다.

예를 들어 다음 `on` 값이 있는 워크플로는 다음과 같은 경우에 실행됩니다.

- 레이블이 생성되는 경우
- 리포지토리의 `main` 분기에 푸시되는 경우
- {% data variables.product.prodname_pages %} 사용 분기에 푸시되는 경우

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
