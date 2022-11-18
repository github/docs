---
title: 알림을 심사하기 위한 워크플로 사용자 지정
intro: 알림을 심사하는 데 적합한 워크플로를 만들기 위해 이러한 예제 워크플로를 조정하고 사용자 지정할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115927'
---
## 받은 편지함 심사 시작

받은 편지함 심사를 시작하기 전에 먼저 가장 중요한 업데이트를 찾아서 응답할지 또는 제거하거나 심사하기 쉬운 주의를 분산하는 업데이트의 받은 편지함을 지울지 고려합니다.

사용하는 알림의 양에 따라 다양한 시간에 두 방법의 조합을 사용하도록 결정할 수 있습니다.

가장 중요한 알림을 찾고 응답하는 예제 워크플로는 “[가장 높은 알림 우선 순위 확인](#checking-your-highest-notification-priorities)”을 참조하세요.

제거하거나 심사하기 쉬운 알림을 제거하는 예제 워크플로는 “[가장 중요하지 않은 알림 지우기](#clearing-your-least-important-notifications)”를 참조하세요.

## 가장 높은 알림 우선 순위 확인

가장 긴급한 알림 유형을 선택하고 가장 적합한 알림 검토 시간을 선택합니다. “누구를 차단하는지”에 대한 질문을 고려해 볼 수 있습니다.

예를 들어 매일 계획 시간 동안 아침에 다음 순서대로 알림을 확인하기로 결정할 수 있습니다.
  - 검토가 요청된 끌어오기 요청. (필터 기준: `reason:review-requested`)
  - 직접 멘션이라고도 하는, 사용자 이름이 @mentioned되는 이벤트. (필터 기준: `reason:mention`)
  - 팀 멘션이라고도 하는, 속한 팀이 @mentioned되는 이벤트. (필터 기준: `reason:team-mention`)
  - 특정 리포지토리에 대한 CI 워크플로 오류. (필터 기준: `reason:ci-activity` 및 `repo:owner/repo-name`, 알림 설정에서 워크플로 오류에 대한 CI 활동 알림을 사용하도록 설정했는지 확인)

  {% tip %}

  **팁:** 가장 높은 우선 순위를 빠르게 검토하려면 검토 우선 순위의 순서대로 사용자 지정 필터를 설정합니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)”를 참조하세요.

  {% endtip %}

## 지속적인 알림 업데이트에 대한 후속 작업

알림에 대한 후속 조치를 취하려면 “더 이상 차단되지 않는 차단 항목”에 대한 질문을 고려할 수 있습니다. 후속 알림 우선 순위를 선택합니다.

예를 들어 다음 순서로 후속 조치를 취하기로 결정할 수 있습니다.
  - 할당된 문제 및 끌어오기 요청. 즉시 문제 또는 끌어오기 요청을 닫거나 업데이트를 추가합니다. 필요에 따라 나중에 검토할 알림을 저장합니다.
  - 저장된 받은 편지함의 알림, 특히 읽지 않은 업데이트를 검토합니다. 스레드가 더 이상 필요 없는 경우 {% octicon "bookmark" aria-label="The bookmark icon" %} 아이콘을 선택 취소하여 저장된 받은 편지함에서 알림을 제거하고 저장을 해제합니다.

## 우선 순위가 낮은 알림 관리

우선 순위가 높은 알림을 심사한 후 참여 알림과 같은 나머지 알림을 검토합니다. 고려해야 하는 질문은 다음과 같습니다.
  - 이 알림을 구독 취소할 수 있나요? 이 알림이 완료되었으며 **완료** 로 표시해도 되나요?
  {% tip %}

  **팁:** 알림에서 구독을 취소하면 스레드에 참가하기 시작하거나 @mentioned되거나 속한 팀이 @mentioned되지 않는 한 새 업데이트가 수신되지 않습니다. 알림을 **완료** 로 표시하면 알림이 기본 받은 편지함 보기에서 제거되고 `is:read` 쿼리로 볼 수 있습니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)”를 참조하세요.

  {% endtip %}
  - 이 문제 또는 끌어오기 요청이 닫히거나 다시 열리거나 끌어오기 요청이 병합될 때 향후 업데이트를 받으시겠어요? 해당 옵션에 대한 자세한 내용은 “[단일 알림 심사](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”를 참조하세요.
  - 나중에 이와 같은 알림을 받지 않으시겠어요? 그렇다면 구독 취소를 고려합니다. 자세한 내용은 “[GitHub 작업에 대한 구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”를 참조하세요.

## 가장 중요하지 않은 알림 지우기

받은 편지함에서 가장 빠르고 쉽게 심사하고 제거할 수 있는 알림 유형을 선택합니다. 한 번에 여러 알림을 심사하는 것이 가장 좋습니다.

예를 들어 다음 순서로 알림을 지우기로 결정할 수 있습니다.
  - 구독을 취소할 수 있는 참여 알림.
  - 유지 또는 후속 조치와 관련이 없는 리포지토리 업데이트.

받은 편지함에서 동시에 여러 알림을 관리하는 방법에 대한 자세한 내용은 “[받은 편지함에서 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”를 참조하세요.

알림 설정을 변경하거나 가능한 경우 업데이트의 구독을 취소하는 것도 고려할 수 있습니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)” 또는 “[GitHub 활동에 대한 구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”를 참조하세요.
