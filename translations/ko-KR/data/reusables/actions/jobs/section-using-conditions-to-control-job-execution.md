---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192064"
---
`jobs.<job_id>.if` 조건부를 사용하여 조건이 충족되지 않는 한, 작업이 실행되지 않도록 할 수 있습니다. {% data reusables.actions.if-supported-contexts %}

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
