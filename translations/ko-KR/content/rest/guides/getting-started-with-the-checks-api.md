---
title: Checks API 시작
intro: '실행 검사 API를 사용하면 리포지토리의 코드 변경 내용에 대해 강력한 검사를 실행하는 GitHub 앱을 빌드할 수 있습니다. 연속 통합, 코드 린팅 또는 코드 검사 서비스를 수행하고 커밋에 대한 자세한 피드백을 제공하는 앱을 만들 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: 6d98940d9cf4f4fd534034e142aa3d86a0900406
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710245'
---
## 개요

이진 통과/실패 빌드 상태가 아닌 GitHub 앱은 풍부한 상태를 보고하고, 자세한 정보를 사용하여 코드 줄에 주석을 달고, 테스트를 다시 실행할 수 있습니다. Checks API 기능은 GitHub 앱에서만 사용할 수 있습니다.

{% data variables.product.prodname_github_app %}에서 Checks API를 사용하는 방법의 예는 “[Checks API를 사용하여 CI 테스트 만들기](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)”를 참조하세요.

## 검사 도구 모음 정보

다른 사용자가 리포지토리에 코드를 푸시할 때 GitHub는 마지막 커밋에 대한 검사 도구 모음을 만듭니다. 검사 도구 모음은 특정 커밋에 대해 단일 GitHub 앱에서 만든 [검사 실행](/rest/reference/checks#check-runs)의 컬렉션입니다. 검사 도구 모음에는 제품군에 포함된 검사 실행의 상태 및 결론이 요약되어 있습니다.

![검사 도구 모음 워크플로](/assets/images/check_suites.png)

검사 도구 모음은 검사 도구 모음의 `conclusion`에서 가장 높은 우선 순위 검사 실행 `conclusion`을 보고합니다. 예를 들어, 세 번의 검사 실행에 `timed_out`, `success`, `neutral`의 결론이 있는 경우 검사 도구 모음 결론은 `timed_out`입니다.

기본적으로 GitHub는 코드가 리포지토리에 푸시될 때 자동으로 검사 도구 모음을 만듭니다. 이 기본 흐름은 `checks:write` 권한이 있는 모든 GitHub 앱에 `check_suite` 이벤트(`requested` 작업 포함)를 보냅니다. GitHub 앱이 `check_suite` 이벤트를 수신하면 최신 커밋에 대한 새 검사 실행을 만들 수 있습니다. GitHub는 검사 실행의 리포지토리 및 SHA에 따라 올바른 [검사 도구 모음](/rest/reference/checks#check-suites)에 새 검사 실행을 자동으로 추가합니다.

기본 자동 흐름을 사용하지 않으려면 검사 도구 모음을 만들 때 제어할 수 있습니다. 검사 도구 모음 만들기에 대한 기본 설정을 변경하려면 [검사 도구 모음에 대한 업데이트 리포지토리 기본 설정](/rest/reference/checks#update-repository-preferences-for-check-suites) 엔드포인트를 사용합니다. 자동 흐름 설정에 대한 모든 변경 내용은 리포지토리의 감사 로그에 기록됩니다. 자동 흐름을 사용하지 않도록 설정한 경우 [검사 도구 모음 만들기](/rest/reference/checks#create-a-check-suite) 엔드포인트를 사용하여 검사 도구 모음을 만들 수 있습니다. 계속 [검사 실행 만들기](/rest/reference/checks#create-a-check-run) 엔드포인트를 사용하여 커밋에 대한 피드백을 제공해야 합니다.

{% data reusables.apps.checks-availability %}

검사 도구 모음 API를 사용하려면 GitHub 앱에 `checks:write` 권한이 있어야 하며 [check_suite](/webhooks/event-payloads/#check_suite) 웹후크를 구독할 수도 있어야 합니다.

{% data reusables.shortdesc.authenticating_github_app %}

## 검사 실행 정보

검사 실행은 검사 도구 모음의 일부인 개별 테스트입니다. 각 실행에는 상태 및 결론이 포함됩니다.

![검사 실행 워크플로](/assets/images/check_runs.png)

검사 실행이 14일 넘게 불완전한 상태이면 검사 실행의 `conclusion`은 `stale`이 되며 {% data variables.product.prodname_dotcom %}에 {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}과 함께 부실한 것으로 나타납니다. {% data variables.product.prodname_dotcom %}만 검사 실행을 `stale`로 표시할 수 있습니다. 검사 실행의 가능한 결론에 대한 자세한 내용은 [`conclusion` 매개 변수](/rest/reference/checks#create-a-check-run--parameters)를 참조하세요.

[`check_suite`](/webhooks/event-payloads/#check_suite) 웹후크를 받는 즉시 검사가 완료되지 않은 경우에도 검사 실행을 만들 수 있습니다. 검사 실행이 `queued`, `in_progress` 또는 `completed` 값으로 완료되면 검사 실행의 `status`를 업데이트할 수 있으며, 더 자세한 정보가 제공되면 `output`을 업데이트할 수 있습니다. 검사 실행에는 타임스탬프, 외부 사이트의 세부 정보에 대한 링크, 특정 코드 줄에 대한 자세한 주석, 수행된 분석에 대한 정보가 포함될 수 있습니다.

![검사 실행 주석](/assets/images/check_run_annotations.png)

GitHub UI에서 수동으로 검사를 다시 실행할 수도 있습니다. 자세한 내용은 “[상태 검사 정보](/articles/about-status-checks#checks)”를 참조하세요. 이 경우 검사 실행을 만든 GitHub 앱은 새 검사 실행을 요청하는 [`check_run`](/webhooks/event-payloads/#check_run) 웹후크를 받게 됩니다. 검사 도구 모음을 만들지 않고 검사 실행을 만드는 경우 GitHub는 자동으로 검사 도구 모음을 만듭니다.

{% data reusables.apps.checks-availability %}

검사 실행 API를 사용하려면 GitHub 앱에 `checks:write` 권한이 있어야 하며 [check_run](/webhooks/event-payloads#check_run) 웹후크를 구독할 수도 있어야 합니다.

## 검사 실행 및 요청된 작업

요청된 작업으로 검사 실행을 설정할 때({% data variables.product.prodname_actions %}와 혼동하지 않음) {% data variables.product.prodname_dotcom %}의 끌어오기 요청 보기에 사용자가 {% data variables.product.prodname_github_app %}을(를) 요청하여 추가 작업을 수행할 수 있는 단추를 표시할 수 있습니다.

예를 들어 코드 린팅 앱은 요청된 작업을 사용하여 끌어오기 요청에 단추를 표시하여 검색된 구문 오류를 자동으로 수정할 수 있습니다.

앱에서 추가 작업을 요청할 수 있는 단추를 만들려면 [검사 실행 만들기](/rest/reference/checks/#create-a-check-run) 시 [`actions` 개체](/rest/reference/checks#create-a-check-run--parameters)를 사용합니다. 예를 들어 아래 `actions` 개체는 끌어오기 요청에 “수정”이라는 레이블이 있는 단추를 표시합니다. 검사 실행이 완료되면 단추가 나타납니다.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![요청된 작업 검사 실행 단추](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

사용자가 단추를 클릭하면 {% data variables.product.prodname_dotcom %}이(가) [`check_run.requested_action` 웹후크](/webhooks/event-payloads/#check_run)를 앱으로 보냅니다. 앱이 `check_run.requested_action` 웹후크 이벤트를 받으면 웹후크 페이로드에서 `requested_action.identifier` 키를 찾아 클릭한 단추를 확인하고 요청된 작업을 수행할 수 있습니다.

Checks API를 사용하여 요청된 작업을 설정하는 방법에 대한 자세한 예제는 “[Checks API를 사용하여 CI 테스트 만들기](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)”를 참조하세요.

{% ifversion fpt or ghec %}
## 검사 데이터 보존

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
