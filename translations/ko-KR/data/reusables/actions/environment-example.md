---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114415"
---
워크플로의 각 작업에 대한 환경을 지정할 수 있습니다. 이렇게 하려면 `jobs.<job_id>.environment` 키 뒤에 환경 이름을 추가합니다.

예를 들어 이 워크플로는 `production`이라는 환경을 사용합니다.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

위의 워크플로가 실행되면 `deployment` 작업에는 `production` 환경에 대해 구성된 모든 규칙이 적용됩니다. 예를 들어 환경에 검토자가 필요한 경우 검토자 중 한 명이 작업을 승인할 때까지 작업이 일시 중지됩니다.

환경에 대한 URL을 지정할 수도 있습니다. 지정된 URL은 리포지토리의 배포 페이지(리포지토리의 홈페이지에서 **Environments**(환경)를 클릭하여 액세스됨) 및 워크플로 실행에 대한 시각화 그래프에 표시됩니다. 끌어오기 요청이 워크플로를 트리거한 경우 URL은 끌어오기 요청 타임라인에 **View deployment**(배포 보기) 단추로도 표시됩니다.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![URL이 있는 워크플로 그래프](/assets/images/help/images/deploy-graph.png)
