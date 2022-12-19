---
title: 받은 편지함에서 알림 관리
intro: '받은 편지함을 사용하여 메일{% ifversion fpt or ghes or ghec %} 및 모바일{% endif %}에서 알림을 빠르게 심사하고 동기화합니다.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106807'
---
## 받은 편지함 정보

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”을 참조하세요.
{% endif %}

알림 받은 편지함에 액세스하려면 페이지의 오른쪽 위 모서리에서 {% octicon "bell" aria-label="The notifications bell" %} 아이콘을 클릭합니다.

  ![읽지 않은 메시지를 나타내는 알림](/assets/images/help/notifications/notifications_general_existence_indicator.png)

받은 편지함에 구독을 취소하지 않았거나 **완료** 로 표시된 모든 알림이 표시됩니다. 필터를 사용하여 워크플로에 가장 적합하도록 받은 편지함을 사용자 지정하고 모든 알림 또는 읽지 않은 알림을 보고 알림을 그룹화하여 빠른 개요를 만들 수 있습니다.

  ![받은 편지함 보기](/assets/images/help/notifications-v2/inbox-view.png)

기본적으로 받은 편지함에는 읽은 알림과 읽지 않은 알림이 표시됩니다. 읽지 않은 알림만 보려면 **읽지 않음** 을 클릭하거나 `is:unread` 쿼리를 사용합니다.

  ![읽지 않은 받은 편지함 보기](/assets/images/help/notifications-v2/unread-inbox-view.png)

## 심사 옵션

받은 편지함에서 알림을 심사하는 몇 가지 옵션이 있습니다.

| 심사 옵션 | Description |
|-----------------|-------------|
| 저장            | 나중에 검토하기 위한 알림을 저장합니다. 알림을 저장하려면 알림의 오른쪽에서 {% octicon "bookmark" aria-label="The bookmark icon" %} 아이콘을 클릭합니다. <br> <br> 저장된 알림은 무기한으로 유지되며 사이드바에서 **저장** 을 클릭하거나 `is:saved` 쿼리를 사용하여 볼 수 있습니다. 저장된 알림이 5개월보다 오래되어 저장되지 않은 경우 해당 알림은 하루 내에 받은 편지함에서 사라집니다. |
| 완료            | 알림을 완료된 것으로 표시하고 받은 편지함에서 알림을 제거합니다. 사이드바에서 **완료** 를 클릭하거나 `is:done` 쿼리를 사용하여 완료된 모든 알림을 볼 수 있습니다. **완료** 로 표시된 알림은 5개월 동안 저장됩니다.
| 구독 취소     | 사용자가 @mentioned되거나 속한 팀이 @mentioned되거나 또는 검토 요청이 있을 때까지 받은 편지함에서 알림을 자동으로 제거하고 대화에서 구독을 취소합니다.
| 읽기            | 알림을 읽은 것으로 표시합니다. 받은 편지함에서 읽은 알림만 보려면 `is:read` 쿼리를 사용합니다. 이 쿼리에는 **완료** 로 표시된 알림이 포함되지 않습니다.
| Unread          | 알림을 읽지 않은 상태로 표시합니다. 받은 편지함에서 읽지 않은 알림만 보려면 `is:unread` 쿼리를 사용합니다. |

사용 가능한 바로 가기 키를 보려면 “[바로 가기 키](/github/getting-started-with-github/keyboard-shortcuts#notifications)”를 참조하세요.

심사 옵션을 선택하기 전에 먼저 알림의 세부 정보를 미리 확인하고 조사할 수 있습니다. 자세한 내용은 “[단일 알림 심사](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)”를 참조하세요.

## 동시에 여러 알림 심사

한 번에 여러 알림을 심사하려면 관련 알림을 선택하고 {% octicon "kebab-horizontal" aria-label="The edit icon" %} 드롭다운을 사용하여 심사 옵션을 선택합니다.

![심사 옵션 및 선택한 알림이 있는 드롭다운 메뉴](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## 기본 알림 필터

기본적으로 받은 편지함에는 할당되거나, 스레드에 참여하거나, 끌어오기 요청을 검토하도록 요청되거나, 사용자 이름이 직접 @mentioned되거나, 속한 팀이 @mentioned되는 경우를 위한 필터가 있습니다.

  ![기본 사용자 지정 필터](/assets/images/help/notifications-v2/default-filters.png)

## 사용자 지정 필터를 사용하여 받은 편지함 사용자 지정

사용자 지정 필터를 최대 15개까지 추가할 수 있습니다.

{% data reusables.notifications.access_notifications %}
2. 필터 설정을 열려면 왼쪽 사이드바의 ‘필터’ 옆에 있는 {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 클릭합니다.

  {% tip %}

  **팁:** 받은 편지함 보기에서 쿼리를 만들고 **저장** 을 클릭하여 필터의 받은 편지함 결과를 빠르게 미리 볼 수 있으며 사용자 지정 필터 설정이 열립니다.

  {% endtip %}

3. 필터 이름 및 필터 쿼리를 추가합니다. 예를 들어 특정 리포지토리에 대한 알림만 보려면 `repo:octocat/open-source-project-name reason:participating` 쿼리를 사용하여 필터를 만들 수 있습니다. 원시 이모지 키보드를 사용하여 이모지도 추가할 수 있습니다. 지원되는 검색 쿼리 목록은 “[사용자 지정 필터를 지원하는 쿼리](#supported-queries-for-custom-filters)”를 참조하세요.

  ![사용자 지정 필터 예제](/assets/images/help/notifications-v2/custom-filter-example.png)

4. **만들기** 를 클릭합니다.

## 사용자 지정 필터 제한 사항

사용자 지정 필터는 현재 다음을 지원하지 않습니다.
  - 끌어오기 요청 또는 문제 제목 검색을 포함하여 받은 편지함에서 전체 텍스트 검색
  - `is:issue`, `is:pr` 및 `is:pull-request` 쿼리 필터를 구분. 쿼리는 문제 및 끌어오기 요청을 모두 반환합니다.
  - 15개 이상의 사용자 지정 필터 만들기
  - 기본 필터 또는 해당 순서를 변경
  - `NOT` 또는 `-QUALIFIER`를 사용하여 검색 [제외](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results)

## 사용자 지정 필터를 지원하는 쿼리

다음은 사용할 수 있는 필터 유형입니다.
  - `repo:`를 사용하여 리포지토리별로 필터링
  - `is:`를 사용하여 토론 유형별로 필터링
  - `reason:`을 사용하여 알림 이유별로 필터링{% ifversion fpt or ghec %}
  - `author:`를 사용하여 알림 작성자별로 필터링
  - `org:`를 사용하여 조직별로 필터링{% endif %}

### 지원되는 `repo:` 쿼리

`repo:` 필터를 추가하려면 `repo:owner/repository` 쿼리에 리포지토리의 소유자를 포함해야 합니다. 소유자는 알림을 트리거하는 {% data variables.product.prodname_dotcom %} 자산을 소유한 조직 또는 사용자입니다. 예를 들어 `repo:octo-org/octo-repo`는 octo-org 조직 내의 octo-repo 리포지토리에서 트리거된 알림을 표시합니다.

### 지원되는 `is:` 쿼리

{% data variables.location.product_location %}에서 특정 활동에 대한 알림을 필터링하려면 쿼리를  `is` 사용할 수 있습니다. 예를 들어 리포지토리 초대 업데이트만 보려면 `is:repository-invitation`을 사용하고{% ifversion not ghae %} {% data variables.product.prodname_dependabot_alerts %}만 보려면 `is:repository-vulnerability-alert`만 사용합니다{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

{% data variables.product.prodname_dependabot_alerts %}에 대한 알림에서 노이즈를 줄이는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %}에 대한 알림 구성](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”을 참조하세요.

`is:` 쿼리를 사용하여 알림이 심사된 방법을 설명할 수도 있습니다.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### 지원되는 `reason:` 쿼리

업데이트를 받은 이유에 따라 알림을 필터링하려면 `reason:` 쿼리를 사용할 수 있습니다. 예를 들어 사용자(또는 속한 팀)가 끌어오기 요청을 검토하도록 요청된 경우 알림을 보려면 `reason:review-requested`를 사용합니다. 자세한 내용은 “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)”를 참조하세요.

| 쿼리 | Description |
|-----------------|-------------|
| `reason:assign` | 할당된 문제 또는 끌어오기 요청에 대한 업데이트가 있는 경우입니다.
| `reason:author` | 끌어오기 요청 또는 문제를 열었을 때 업데이트 또는 새 주석이 있었습니다.
| `reason:comment`| 문제, 끌어오기 요청 또는 팀 토론에 대해 주석을 달았을 경우입니다.
| `reason:participating` | 문제, 끌어오기 요청 또는 팀 토론에 대해 주석을 달았을 경우 또는 @mentioned되었을 경우입니다.
| `reason:invitation` | 팀, 조직 또는 리포지토리에 초대된 경우입니다.
| `reason:manual` | 아직 구독하지 않은 문제 또는 끌어오기 요청에 대한 **구독** 을 클릭했을 경우입니다.
| `reason:mention` | 직접 @mentioned되었습니다.
| `reason:review-requested` | 사용자 또는 사용자가 속한 팀이 끌어오기 요청을 검토하라는 요청을 받았습니다.
| `reason:security-alert` | 리포지토리에 대한 보안 경고가 발생하는 경우입니다.
| `reason:state-change`  | 끌어오기 요청 또는 문제의 상태가 변경된 경우입니다. 예를 들어 문제가 닫히거나 끌어오기 요청이 병합됩니다.
| `reason:team-mention` | 속한 팀이 @mentioned되는 경우입니다.
| `reason:ci-activity` | 리포지토리에 새 워크플로 실행 상태와 같은 CI 업데이트가 있는 경우입니다.

{% ifversion fpt or ghec %}
### 지원되는 `author:` 쿼리

사용자별로 알림을 필터링하려면 `author:` 쿼리를 사용할 수 있습니다. 작성자는 알림을 받는 스레드(문제, 끌어오기 요청, gist, 토론 등)의 원래 작성자입니다. 예를 들어 Octocat 사용자가 만든 스레드에 대한 알림을 보려면 `author:octocat`을 사용합니다.

### 지원되는 `org:` 쿼리

조직별로 알림을 필터링하려면 `org` 쿼리를 사용할 수 있습니다. 쿼리에서 지정해야 하는 조직은 {% data variables.product.prodname_dotcom %}에서 알림을 받는 리포지토리의 조직입니다. 이 쿼리는 여러 조직에 속해 있고 특정 조직에 대한 알림을 보려는 경우에 유용합니다.

예를 들어 octo-org 조직의 알림을 보려면 `org:octo-org`를 사용합니다. 

{% endif %}

## {% data variables.product.prodname_dependabot %} 사용자 지정 필터

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot %}을(를) 사용하여 종속성을 최신 상태로 유지하는 경우 다음 사용자 지정 필터를 사용하고 저장할 수 있습니다.
- `is:repository_vulnerability_alert`는 {% data variables.product.prodname_dependabot_alerts %}의 알림을 표시합니다.
- `reason:security_alert`는 {% data variables.product.prodname_dependabot_alerts %} 및 보안 업데이트 끌어오기 요청에 대한 알림을 표시합니다.
- `author:app/dependabot`는 {% data variables.product.prodname_dependabot %}에서 생성된 알림을 표시합니다. 여기에는 {% data variables.product.prodname_dependabot_alerts %}, 보안 업데이트 끌어오기 요청 및 버전 업데이트 끌어오기 요청이 포함됩니다.

{% data variables.product.prodname_dependabot %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
{% endif %}

{% ifversion ghae %}

{% data variables.product.prodname_dependabot %}을 사용하여 안전하지 않은 종속성에 대해 알림을 받는 경우 사용자 지정 필터를 사용하여 {% data variables.product.prodname_dependabot_alerts %}에 대한 알림을 표시할 수 있습니다.
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

{% data variables.product.prodname_dependabot %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
{% endif %}

