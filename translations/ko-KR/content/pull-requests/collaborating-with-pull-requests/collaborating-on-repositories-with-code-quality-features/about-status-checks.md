---
title: 상태 검사 정보
intro: 상태 검사를 통해 커밋이 사용자가 기여하는 리포지토리에 대해 설정된 조건을 충족하는지 알 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065868'
---
상태 검사는 리포지토리에 대한 각 푸시에 대해 실행되는 지속적 통합 빌드와 같은 외부 프로세스를 기반으로 합니다. 끌어오기 요청의 개별 커밋 옆에 있는 상태 검사의 보류 중, 전달 또는 실패 상태를 볼 수 있습니다.  

![커밋 및 상태 목록](/assets/images/help/pull_requests/commit-list-statuses.png)

리포지토리에 대한 쓰기 권한이 있는 사용자는 리포지토리의 상태 검사 상태를 설정할 수 있습니다.

리포지토리의 분기 페이지 또는 리포지토리의 끌어오기 요청 목록에서 분기에 대한 마지막 커밋의 전체 상태를 볼 수 있습니다.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## {% data variables.product.product_name %}에 대한 상태 검사 유형

{% data variables.product.product_name %}에 대한 두 가지 유형의 상태 검사가 있습니다.

- 확인
- 상태

_검사_ 는 행 주석과 더 자세한 메시지를 제공하고 {% data variables.product.prodname_github_apps %}에서만 사용할 수 있다는 점에서 _상태_ 와 다릅니다.

리포지토리에 대한 푸시 액세스 권한이 있는 조직 소유자 및 사용자는 {% data variables.product.product_name %}의 API를 사용하여 검사 및 상태를 만들 수 있습니다. 자세한 내용은 “[검사](/rest/reference/checks)” 및 “[상태](/rest/reference/commits#commit-statuses)를 참조하세요.

## 확인

_검사_ 가 리포지토리에 설정되면 끌어오기 요청에는 상태 검사에서 자세한 빌드 출력을 보고 실패한 검사를 다시 실행할 수 있는 **검사** 탭이 있습니다.

![끌어오기 요청 내 상태 검사](/assets/images/help/pull_requests/checks.png)

{% note %}

**참고:** **확인** 탭은 리포지토리에 대해 상태가 아니라 확인을 설정한 경우에만 끌어오기 요청에 대해 채워집니다. 

{% endnote %}

커밋의 특정 줄로 인해 검사가 실패하는 경우 끌어오기 요청의 **파일** 탭에 있는 관련 코드 옆에 오류, 경고 또는 알림에 대한 세부 정보가 표시됩니다.

![상태 검사의 세부 정보](/assets/images/help/pull_requests/checks-detailed.png)

**대화** 탭 아래의 커밋 드롭다운 메뉴를 사용하여 끌어오기 요청의 다양한 커밋에 대한 검사 요약을 탐색할 수 있습니다.

![드롭다운 메뉴에서 다른 커밋에 대한 요약 확인](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### 개별 커밋에 대한 검사 건너뛰기 및 요청

리포지토리가 푸시에 대한 검사를 자동으로 요청하도록 설정된 경우 푸시하는 개별 커밋에 대한 검사를 건너뛰도록 선택할 수 있습니다. 리포지토리가 푸시 검사를 자동으로 요청하도록 설정되지 않은 경우 푸시한 개별 커밋에 대한 검사를 요청할 수 있습니다. 이러한 설정에 대한 자세한 내용은 “[검사 도구 모음](/rest/reference/checks#update-repository-preferences-for-check-suites)”을 참조하세요.

커밋에 대한 검사를 건너뛰거나 요청하려면 커밋 메시지의 끝에 다음 트레일러 줄 중 하나를 추가합니다.

- 커밋에 대한 _확인을 건너뛰려면_ 커밋 메시지와 변경 내용에 대한 짧고 의미 있는 설명을 입력합니다. 커밋 설명 뒤 닫는 따옴표 앞에 빈 줄 두 개를 추가하고 그 뒤에 `skip-checks: true`을 추가합니다.
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- 커밋 확인을 _요청_ 하려면 커밋 메시지와 변경 내용에 대한 짧고 의미 있는 설명을 입력합니다. 커밋 설명 뒤 닫는 따옴표 앞에 빈 줄 두 개를 추가하고 그 뒤에 `request-checks: true`를 추가합니다.
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### 상태 검사 보존

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
