---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878899"
---
| 옵션 | 필수 | 보안 업데이트 | 버전 업데이트 | 설명 |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | 사용할 패키지 관리자입니다.                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | 패키지 매니페스트의 위치입니다.           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | 업데이트를 확인하는 빈도입니다.                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | X | X | 허용되는 업데이트를 사용자 지정합니다.         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | X | X | 끌어오기 요청에 설정할 담당자입니다.           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | X | X | 커밋 메시지 기본 설정입니다.                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | X | 베타 수준 지원이 있는 에코시스템을 사용하도록 설정합니다. |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | X | X | 특정 종속성 또는 버전을 무시합니다.     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | X | 매니페스트 파일의 코드 실행을 허용하거나 거부합니다. |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | X | X | 끌어오기 요청에 설정할 레이블입니다.              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | X | 끌어오기 요청에 설정할 마일스톤입니다.           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | X | X | 버전 업데이트를 위해 열린 끌어오기 요청 수를 제한합니다. |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | X | X | 끌어오기 요청 분기 이름의 구분 기호를 변경합니다. |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | X | X | 자동 다시 지정을 사용하지 않도록 설정합니다.                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | X | {% data variables.product.prodname_dependabot %}이 액세스할 수 있는 프라이빗 레지스트리입니다.|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | X | X | 끌어오기 요청에 설정할 검토자입니다.           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | X | 업데이트를 확인하는 요일입니다.              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | X | 업데이트를 확인하는 하루 중 시간(hh:mm)입니다.      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | X | 하루 중 시간의 표준 시간대(영역 식별자)입니다.    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | X  | 끌어오기 요청을 만들 분기입니다.     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | X | 벤더링된 종속성 또는 캐시된 종속성을 업데이트합니다.        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | X | X | 매니페스트 버전 요구 사항을 업데이트하는 방법입니다. |
