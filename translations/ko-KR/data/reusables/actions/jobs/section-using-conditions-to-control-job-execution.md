---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114231"
---
`jobs.<job_id>.if` 조건부를 사용하여 조건이 충족되지 않는 한, 작업이 실행되지 않도록 할 수 있습니다. 지원되는 컨텍스트 및 식을 사용하여 조건부를 만들 수 있습니다.

{% data reusables.actions.expression-syntax-if %} 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

### 예: 특정 리포지토리에 대해서만 작업 실행

이 예제에서는 `if`를 사용하여 `production-deploy` 작업을 실행할 수 있는 시기를 제어합니다. 리포지토리 이름이 `octo-repo-prod`이고 `octo-org` 조직 내에 있는 경우에만 작업이 실행됩니다. 그렇지 않으면 작업이 ‘건너뛴 것’으로 표시됩니다.

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
