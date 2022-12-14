---
title: 종속성 업데이트에 대한 끌어오기 요청 관리
intro: '{% data variables.product.prodname_dependabot %}에서 발생한 끌어오기 요청은 다른 끌어오기 요청과 거의 동일한 방식으로 관리하지만 몇 가지 추가 옵션이 있습니다.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147112320'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} 끌어오기 요청 정보

{% data reusables.dependabot.pull-request-introduction %}

{% data variables.product.prodname_dependabot %}이 끌어오기 요청을 발생시키면 선택한 방법으로 리포지토리에 대한 알림이 표시됩니다. 각 끌어오기 요청에는 패키지 관리자에서 가져온 제안된 변경 내용에 대한 자세한 정보가 포함됩니다. 이러한 끌어오기 요청은 리포지토리에 정의된 일반적인 검사 및 테스트를 따릅니다. {% ifversion fpt or ghec %}또한 충분한 정보를 사용할 수 있는 경우 호환성 점수가 표시됩니다. 이는 변경 내용의 병합 여부를 결정하는 데 유용합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”를 참조하세요.{% endif %}

관리할 종속성이 많은 경우 끌어오기 요청에 특정 검토자, 담당자 및 레이블이 있도록 각 패키지 관리자에 대한 구성을 사용자 지정할 수 있습니다. 자세한 내용은 “[종속성 업데이트 사용자 지정](/github/administering-a-repository/customizing-dependency-updates)”을 참조하세요.

## {% data variables.product.prodname_dependabot %} 끌어오기 요청 보기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. 보안 또는 버전 업데이트에 대한 끌어오기 요청은 쉽게 식별할 수 있습니다.
    - 작성자는 {% data variables.product.prodname_dependabot %}에서 사용하는 봇 계정인 {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}입니다.
    - 기본적으로 `dependencies` 레이블이 있습니다.

## {% data variables.product.prodname_dependabot %} 끌어오기 요청에 대한 다시 지정 전략 변경

기본적으로 {% data variables.product.prodname_dependabot %}은 충돌을 해결하기 위해 끌어오기 요청을 자동으로 다시 지정합니다. 병합 충돌을 수동으로 처리하려는 경우 `rebase-strategy` 옵션을 사용하여 이를 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)”을 참조하세요.

## {% data variables.product.prodname_dependabot %}이 추가 커밋을 다시 지정하고 강제 푸시하도록 허용

기본적으로 {% data variables.product.prodname_dependabot %}은 추가 커밋이 푸시되면 끌어오기 요청의 재지정을 중지합니다. {% data variables.product.prodname_dependabot %}이 해당 분기에 추가된 커밋을 강제로 푸시할 수 있도록 하려면 커밋 메시지에 다음 문자열 `[dependabot skip]`을 `[skip dependabot]``[dependabot-skip]``[skip-dependabot]`포함합니다.

## 주석 명령을 사용하여 {% data variables.product.prodname_dependabot %} 끌어오기 요청 관리

{% data variables.product.prodname_dependabot %}은 주석의 간단한 명령에 응답합니다. 각 끌어오기 요청에는 “{% data variables.product.prodname_dependabot %} 명령 및 옵션” 섹션에서 끌어오기 요청을 처리하는 데 사용할 수 있는 명령의 세부 정보(예: 끌어오기 요청 병합, 스쿼시, 다시 열기, 닫기 또는 다시 지정)가 포함됩니다. 목표는 자동으로 생성된 끌어오기 요청을 최대한 쉽게 심사할 수 있도록 하는 것입니다.

{% data variables.product.prodname_dependabot %} 끌어오기 요청에서 다음 명령을 사용할 수 있습니다.

- `@dependabot cancel merge`는 이전에 요청된 병합을 취소합니다.
- `@dependabot close`는 끌어오기 요청을 닫고 {% data variables.product.prodname_dependabot %}에서 해당 끌어오기 요청을 다시 만들 수 없도록 합니다. 끌어오기 요청을 수동으로 닫으면 동일한 결과를 얻을 수 있습니다.
- `@dependabot ignore this dependency`는 끌어오기 요청을 닫고 {% data variables.product.prodname_dependabot %}에서 이 종속성에 대한 끌어오기 요청을 더 이상 만들지 못하게 합니다(끌어오기 요청을 다시 열거나 제안된 종속성 버전으로 직접 업그레이드하지 않는 한).
- `@dependabot ignore this major version`은 끌어오기 요청을 닫고 {% data variables.product.prodname_dependabot %}에서 이 주 버전에 대한 끌어오기 요청을 더 이상 만들지 못하게 합니다(끌어오기 요청을 다시 열거나 이 주 버전으로 직접 업그레이드하지 않는 한).
- `@dependabot ignore this minor version`은 끌어오기 요청을 닫고 {% data variables.product.prodname_dependabot %}에서 이 부 버전에 대한 끌어오기 요청을 더 이상 만들지 못하게 합니다(끌어오기 요청을 다시 열거나 이 부 버전으로 직접 업그레이드하지 않는 한).
- `@dependabot merge`는 CI 테스트가 통과되면 끌어오기 요청을 병합합니다.
- `@dependabot rebase`는 끌어오기 요청을 다시 지정합니다.
- `@dependabot recreate`는 끌어오기 요청을 다시 만들고 끌어오기 요청에 대한 편집 내용을 덮어씁니다.
- `@dependabot reopen`은 끌어오기 요청이 닫힌 경우 끌어오기 요청을 다시 엽니다.
- `@dependabot squash and merge`는 CI 테스트가 통과되면 끌어오기 요청을 스쿼시하고 병합합니다.

{% data variables.product.prodname_dependabot %}은 “엄지손가락 위로” 이모지로 반응하여 명령을 승인하고 끌어오기 요청에 대한 주석으로 응답할 수 있습니다. {% data variables.product.prodname_dependabot %}은 일반적으로 빠르게 응답하지만, {% data variables.product.prodname_dependabot %}이 다른 업데이트 또는 명령을 처리하는 경우 일부 명령을 완료하는 데 몇 분 정도 걸릴 수 있습니다.

종속성 또는 버전을 무시하기 위해 명령을 실행하는 경우 {% data variables.product.prodname_dependabot %}는 리포지토리에 대한 기본 설정을 중앙에 저장합니다. 빠른 솔루션이지만 둘 이상의 기여자가 있는 리포지토리의 경우 구성 파일에서 무시할 종속성 및 버전을 명시적으로 정의하는 것이 좋습니다. 이렇게 하면 모든 참가자가 특정 종속성이 자동으로 업데이트되지 않는 이유를 쉽게 확인할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)”을 참조하세요.
