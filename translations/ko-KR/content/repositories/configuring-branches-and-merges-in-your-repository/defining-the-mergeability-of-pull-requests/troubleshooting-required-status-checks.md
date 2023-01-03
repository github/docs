---
title: 필수 상태 검사 문제 해결
intro: 일반적인 오류를 확인하고 필수 상태 검사와 관련된 문제를 해결할 수 있습니다.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135808'
---
동일한 이름의 확인 및 상태가 있고 해당 이름을 필수 상태 확인으로 선택하는 경우 확인과 상태가 모두 필요합니다. 자세한 내용은 “[확인](/rest/reference/checks)”을 참조하세요.

필수 상태 검사를 사용하도록 설정하면 병합하기 전에 분기가 기본 분기와 최신 상태여야 할 수 있습니다. 이렇게 하면 분기가 기본 분기의 최신 코드로 테스트됩니다. 분기가 만료된 경우 기본 분기를 분기에 병합해야 합니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.

{% note %}

**참고:** Git 다시 지정을 사용하여 기본 분기를 사용하여 분기를 최신 상태로 만들 수도 있습니다. 자세한 내용은 “[Git 다시 지정 정보](/github/getting-started-with-github/about-git-rebase)”를 참조하세요.

{% endnote %}

모든 필수 상태 검사가 통과될 때까지 보호된 분기에 로컬 변경 내용을 푸시할 수 없습니다. 대신에 다음과 유사한 오류 메시지가 나타납니다.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**참고:** 최신 상태이고 필수 상태 검사를 전달하는 끌어오기 요청은 로컬로 병합하고 보호된 분기로 푸시할 수 있습니다. 이 작업은 병합 커밋 자체에서 실행 중인 상태 검사 없이 수행할 수 있습니다.

{% endnote %}

## 헤드 커밋과 테스트 병합 커밋 간의 충돌

경우에 따라 테스트 병합 커밋 및 헤드 커밋에 대한 상태 검사 결과가 충돌합니다. 테스트 병합 커밋의 상태가 있는 경우 테스트 병합 커밋을 통과해야 합니다. 그렇지 않으면 분기를 병합하기 전에 헤드 커밋의 상태가 전달되어야 합니다. 테스트 병합 커밋에 대한 자세한 내용은 “[끌어오기](/rest/reference/pulls#get-a-pull-request)”를 참조하세요.

![병합 커밋이 충돌하는 분기](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## 건너뛰었으나 필요한 검사 처리

{% note %}

**참고:** [경로 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [분기 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) 또는 [커밋 메시지](/actions/managing-workflow-runs/skipping-workflow-runs)로 인해 워크플로를 건너뛰는 경우 해당 워크플로와 연결된 검사는 “보류 중” 상태로 유지됩니다. 이러한 검사가 성공해야 하는 끌어오기 요청은 병합에서 차단됩니다.

조건부로 인해 워크플로의 작업을 건너뛰면 해당 상태를 “성공”으로 보고합니다. 자세한 내용은 [워크플로 실행 건너뛰기](/actions/managing-workflow-runs/skipping-workflow-runs) 및 [조건을 사용한 작업 실행 제어](/actions/using-jobs/using-conditions-to-control-job-execution)를 참조하세요.

{% endnote %}

### 예제

다음 예제에서는 `build` 작업에 대해 “성공” 완료 상태가 필요한 워크플로를 보여 주지만, 끌어오기 요청이 `scripts` 디렉터리의 파일을 변경하지 않으면 워크플로를 건너뜁니다.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

[경로 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)으로 인해 리포지토리의 루트에 있는 파일만 변경하는 끌어오기 요청은 이 워크플로를 트리거하지 않으며 병합에서 차단됩니다. 끌어오기 요청에 다음 상태가 표시됩니다.

![필수 검사를 건너뛰었지만 보류 중으로 표시됨](/assets/images/help/repository/PR-required-check-skipped.png)

아래 워크플로와 비슷한 경우에 true를 반환하는 동일한 이름의 제네릭 워크플로를 만들어 이 문제를 해결할 수 있습니다.

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
이제 첫 번째 워크플로의 `paths`에 나열된 파일을 변경하지 않는 끌어오기 요청을 보낼 때마다 검사가 항상 전달됩니다.

![제네릭 워크플로로 인해 건너뛰었으나 통과한 확인](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**참고:**
* 두 워크플로 파일의 `name` 키 및 필수 작업 이름이 동일한지 확인합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions)”을 참조하세요.
* 위의 예제에서는 {% data variables.product.prodname_actions %}를 사용하지만 이 해결 방법은 {% data variables.product.company_short %}와 통합되는 다른 CI/CD 공급자에도 적용할 수 있습니다.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 예기치 않은 원본에서 필요한 상태 검사

보호된 분기가 특정 {% 데이터 variables.product.prodname_github_app %}에서 상태 검사를 요구할 수도 있습니다. 다음과 유사한 메시지가 표시되는 경우 병합 상자에 나열된 확인란이 예상된 앱에 의해 설정되었는지 확인해야 합니다.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
