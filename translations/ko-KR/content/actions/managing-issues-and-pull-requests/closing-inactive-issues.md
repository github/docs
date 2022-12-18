---
title: 비활성 이슈 닫기
shortTitle: Close inactive issues
intro: '{% data variables.product.prodname_actions %}를 사용하여 일정 기간 동안 비활성 상태인 이슈에 대해 주석을 달거나 이러한 이슈를 닫을 수 있습니다.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 13471d0e7e786f4ba107cfcc10c0a2c5f4b8818e
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009572'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 [`actions/stale` 작업](https://github.com/marketplace/actions/close-stale-issues)을 사용하여 특정 기간 동안 비활성 상태였던 이슈에 주석을 달고 닫는 방법을 보여 줍니다. 예를 들어 이슈가 30일 동안 비활성 상태였던 경우 주석을 달아서 참가자에게 조치를 취하라는 메시지를 표시할 수 있습니다. 그런 다음, 14일 후에도 추가 활동이 발생하지 않을 경우 이슈를 닫을 수 있습니다.

자습서에서는 먼저 [`actions/stale` 작업](https://github.com/marketplace/actions/close-stale-issues)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. 워크플로 파일에서 매개 변수를 사용자 지정합니다.
   - `on.schedule` 값을 변경하여 이 워크플로를 실행할 시기를 지시합니다. 위 예제에서는 워크플로가 매일 1:30 UTC에 실행됩니다. 예약된 워크플로에 대한 자세한 내용은 “[예약된 이벤트](/actions/reference/events-that-trigger-workflows#scheduled-events)”를 참조하세요.
   - `days-before-issue-stale` 값을 `actions/stale` 작업에서 이슈에 레이블을 지정하기 전에 활동이 없었던 일수로 변경합니다. 이 작업을 통해 이슈에 레이블을 지정하지 않으려면 값을 `-1`로 설정합니다.
   - `days-before-issue-close` 값을 `actions/stale` 작업에서 이슈를 닫기 전에 활동이 없었던 일수로 변경합니다. 이 작업을 통해 이슈를 닫지 않으려면 값을 `-1`로 설정합니다.
   - `stale-issue-label` 값을 `days-before-issue-stale`로 지정된 시간 동안 비활성 상태였던 이슈에 적용할 레이블로 변경합니다.
   - `stale-issue-message` 값을 `actions/stale` 작업에서 레이블이 지정된 이슈에 추가할 주석으로 변경합니다.
   - `close-issue-message` 값을 `actions/stale` 작업에서 닫힌 이슈에 추가할 주석으로 변경합니다.
5. {% data reusables.actions.commit-workflow %}

## 예상 결과

`schedule` 매개 변수(예: 매일 1:30 UTC)에 따라 워크플로는 지정된 기간 동안 비활성 상태였던 이슈를 찾아 지정된 주석과 레이블을 추가합니다. 또한 지정된 기간 동안 추가 활동이 발생하지 않은 경우 워크플로는 이전에 레이블이 지정된 이슈를 닫습니다.

{% data reusables.actions.schedule-delay %}

워크플로 실행 기록을 보고 이 워크플로 실행을 주기적으로 확인할 수 있습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.

이 워크플로는 속도 제한을 초과하지 않도록 한 번에 30개 이슈에만 레이블을 지정하거나 닫습니다. `operations-per-run` 설정을 사용하여 구성할 수 있습니다. 자세한 내용은 [`actions/stale` 작업 설명서](https://github.com/marketplace/actions/close-stale-issues)를 참조하세요.

## 다음 단계

- `actions/stale` 작업으로 수행할 수 있는 추가 작업(예: 비활성 끌어오기 요청 닫기, 특정 레이블 또는 마일스톤이 있는 이슈 무시 또는 특정 레이블이 있는 이슈만 확인)에 대한 자세한 내용은 [`actions/stale` 작업 설명서](https://github.com/marketplace/actions/close-stale-issues)를 참조하세요.
- [GitHub 검색](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code)을 통해 이 작업을 사용하는 워크플로의 예를 확인합니다.
