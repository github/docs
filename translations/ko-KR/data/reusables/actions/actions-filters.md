---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114775"
---
일부 이벤트에는 워크플로가 실행되어야 하는 시기를 더 자세히 제어할 수 있는 필터가 있습니다.

예를 들어 `push` 이벤트에는 푸시가 발생하는 경우 대신 `branches` 필터와 일치하는 분기로 푸시가 발생하는 경우에만 워크플로가 실행되도록 하는 `branches` 필터가 있습니다.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
