---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089473"
---
`jobs.<job_id>.environment`를 사용하여 작업에서 참조하는 환경을 정의합니다. 환경을 참조하는 작업이 실행기로 전송되기 전에 모든 환경 보호 규칙이 전달되어야 합니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/using-environments-for-deployment)”을 참조하세요.

환경을 환경 `name`만으로 제공하거나 `name` 및 `url`을 사용하여 환경 개체로 제공할 수 있습니다. URL은 배포 API에서 `environment_url`에 매핑됩니다. 배포 API에 대한 자세한 내용은 “[배포](/rest/reference/repos#deployments)”를 참조하세요.

### 예: 단일 환경 이름 사용
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### 예: 환경 이름 및 URL 사용

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL은 식일 수 있으며, [`secrets` 컨텍스트](/actions/learn-github-actions/contexts#contexts)를 제외한 모든 컨텍스트를 사용할 수 있습니다. 식에 대한 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

### 예: 출력을 URL로 사용
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
