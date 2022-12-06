---
title: 문제 만들기 일정 계획
shortTitle: Schedule issue creation
intro: '{% data variables.product.prodname_actions %}를 사용하여 일일 회의 또는 분기별 검토 등에 대해 정기적으로 이슈를 만들 수 있습니다.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 11925693d42c354c2a04d0cc198a1a9869c33abc
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009518'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 [`imjohnbo/issue-bot` 작업](https://github.com/marketplace/actions/issue-bot-action)을 사용하여 정기적으로 문제를 만드는 방법을 보여 줍니다. 예를 들어 매주 문제를 만들어 팀 모임의 어젠더로 사용할 수 있습니다.

자습서에서는 먼저 [`imjohnbo/issue-bot` 작업](https://github.com/marketplace/actions/issue-bot-action)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. 워크플로 파일에서 매개 변수를 사용자 지정합니다.
   - `on.schedule` 값을 변경하여 이 워크플로를 실행할 시기를 지시합니다. 위의 예제에서 워크플로는 매주 월요일 7:20 UTC에 실행됩니다. 예약된 워크플로에 대한 자세한 내용은 “[예약된 이벤트](/actions/reference/events-that-trigger-workflows#scheduled-events)”를 참조하세요.
   - `assignees`의 값을 문제에 할당하려는 {% data variables.product.prodname_dotcom %} 사용자 이름 목록으로 바꿉니다.
   - `labels` 값을 이슈에 적용할 레이블 목록으로 변경합니다.
   - `title`의 값을 문제에 포함할 제목으로 변경합니다.
   - `body`의 값을 문제 본문에 원하는 텍스트로 변경합니다. `|` 문자를 사용하면 이 매개 변수에 여러 줄 값을 사용할 수 있습니다.
   - 이 문제를 리포지토리에 고정하려면 `pinned`를 `true`로 설정하십시오. 고정된 문제에 대한 자세한 내용은 “[리포지토리에 문제 고정](/articles/pinning-an-issue-to-your-repository)”을 참조하세요.
   - 새 문제가 생성될 때마다 이 워크플로에서 생성된 이전 문제를 닫으려면 `close-previous`를 `true`로 설정합니다. 워크플로는 `labels` 필드에 레이블이 정의된 가장 최근 문제를 닫습니다. 잘못된 문제를 닫지 않도록 하려면 고유한 레이블 또는 레이블 조합을 사용합니다.
5. {% data reusables.actions.commit-workflow %}

## 예상 결과

`schedule` 매개 변수(예: 매주 월요일 UTC 7:20)에 따라 워크플로는 지정한 담당자, 레이블, 제목, 본문으로 새 문제를 만듭니다. `pinned`를 `true`로 설정하면 워크플로가 문제를 리포지토리에 고정합니다. `close-previous`를 true로 설정하면 워크플로에서 레이블이 일치하는 가장 최근 문제를 닫습니다.

{% data reusables.actions.schedule-delay %}

워크플로 실행 기록을 보고 이 워크플로 실행을 주기적으로 확인할 수 있습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.

## 다음 단계

- 담당자 순환 또는 문제 템플릿 사용과 같이 `imjohnbo/issue-bot` 작업으로 수행할 수 있는 추가 작업에 대한 자세한 내용은 [`imjohnbo/issue-bot` 작업 문서](https://github.com/marketplace/actions/issue-bot-action)를 참조하세요.
- [GitHub 검색](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code)을 통해 이 작업을 사용하는 워크플로의 예제를 확인합니다.
