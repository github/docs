---
title: Dependabot을 사용하여 작업을 최신 상태로 유지
intro: '{% data variables.product.prodname_dependabot %}을 사용하여 사용하는 작업을 최신 버전으로 업데이트할 수 있습니다.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107727'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## 작업에 대한 {% data variables.product.prodname_dependabot_version_updates %} 정보

작업은 버그 수정 및 새로운 기능으로 수시로 업데이트되어 자동화된 프로세스의 신뢰성, 속도, 안전을 향상합니다. {% data variables.product.prodname_actions %}에 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정하면 {% data variables.product.prodname_dependabot %}이 리포지토리의 *workflow.yml* 파일에 있는 작업에 대한 참조를 최신 상태로 유지할 수 있습니다. 파일의 각 작업에 대해 {% data variables.product.prodname_dependabot %}은 작업 참조(일반적으로 작업과 연결된 버전 번호 또는 커밋 식별자)를 최신 버전과 비교합니다. 최신 버전의 작업을 사용할 수 있는 경우 {% data variables.product.prodname_dependabot %}은 워크플로 파일의 참조를 최신 버전으로 업데이트하는 끌어오기 요청을 전송합니다. {% data variables.product.prodname_dependabot_version_updates %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 정보](/github/administering-a-repository/about-dependabot-version-updates)”를 참조하세요. {% data variables.product.prodname_actions %}에 워크플로를 구성하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대해 알아보기](/actions/learn-github-actions)”를 참조하세요.
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## 작업에 {% data variables.product.prodname_dependabot_version_updates %} 사용

{% data variables.product.prodname_dependabot_version_updates %}를 구성하여 작업뿐만 아니라 사용하는 라이브러리 및 패키지를 유지할 수 있습니다. 

1. 다른 에코시스템 또는 패키지 관리자에 대해 {% data variables.product.prodname_dependabot_version_updates %}를 이미 사용하도록 설정한 경우 기존 *dependabot.yml* 파일을 열기만 하면 됩니다. 그렇지 않으면 리포지토리의 `.github` 디렉터리에 *dependabot.yml* 구성 파일을 만듭니다. 자세한 내용은 “[Dependabot 버전 업데이트 구성](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)”을 참조하세요.
1. 모니터링할 `package-ecosystem`으로 `"github-actions"`를 지정합니다.
1. `directory`를 `"/"`로 설정하여 `.github/workflows`에서 워크플로 파일을 확인합니다.
1. `schedule.interval`을 설정하여 새 버전을 확인하는 빈도를 지정합니다.
{% data reusables.dependabot.check-in-dependabot-yml %} 기존 파일을 편집한 경우 변경 내용을 저장합니다.

포크에서 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)”을 참조하세요.

### {% data variables.product.prodname_actions %}에 대한 *dependabot.yml* 파일 예시

아래 예시 *dependabot.yml* 파일은 {% data variables.product.prodname_actions %}에 대한 버전 업데이트를 구성합니다. `.github/workflows`에서 워크플로 파일을 확인하려면 `directory`를 `"/"`로 설정해야 합니다. `schedule.interval`는 `"weekly"`로 설정됩니다. 이 파일을 체크 인하거나 업데이트한 후 {% data variables.product.prodname_dependabot %}은 새 버전의 작업을 확인합니다. {% data variables.product.prodname_dependabot %}은 오래된 작업을 위한 버전 업데이트에 대한 끌어오기 요청을 발행합니다. 초기 버전이 업데이트된 후 {% data variables.product.prodname_dependabot %}은(는) 일주일에 한 번 오래된 버전의 작업을 계속 확인합니다.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## 작업에 대한 {% data variables.product.prodname_dependabot_version_updates %} 구성

작업에 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정하는 경우, `package-ecosystem`, `directory`, `schedule.interval` 값을 지정해야 합니다. 버전 업데이트를 추가적으로 사용자 지정하도록 설정할 수 있는 더 많은 선택적 속성이 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates)”을 참조하세요.

## 추가 참고 자료

- “[GitHub Actions 정보](/actions/getting-started-with-github-actions/about-github-actions)”
