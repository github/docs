---
title: Dependabot 버전 업데이트 정보
intro: '{% data variables.product.prodname_dependabot %}을 사용하여 사용하는 패키지를 최신 버전으로 업데이트할 수 있습니다.'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
ms.openlocfilehash: 56bac2fbf2fb42a418cffbd478aa526803b124d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145186086'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_version_updates %} 정보

{% data variables.product.prodname_dependabot %}은 종속성을 유지 관리하지 않습니다. Dependabot을 사용하여 리포지토리가 종속된 패키지 및 애플리케이션의 최신 릴리스로 최신 상태를 자동으로 유지하도록 할 수 있습니다.

`dependabot.yml` 구성 파일을 리포지토리로 체크 인하여 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정합니다. 구성 파일은 리포지토리에 저장된 매니페스트 또는 다른 패키지 정의 파일의 위치를 지정합니다. {% data variables.product.prodname_dependabot %}은 이 정보를 사용하여 오래된 패키지와 애플리케이션을 확인합니다. {% data variables.product.prodname_dependabot %}은 종속성의 의미 체계 버전 관리([semver](https://semver.org/))를 보고 새 버전의 종속성이 있는지 확인하여 해당 버전으로 업데이트할지 여부를 결정합니다. 특정 패키지 관리자의 경우 {% data variables.product.prodname_dependabot_version_updates %}에서 벤더링도 지원합니다. 벤더링된(또는 캐시된) 종속성은 매니페스트에서 참조되는 대신 리포지토리의 특정 디렉터리에 체크 인된 종속성입니다. 벤더링된 종속성은 패키지 서버를 사용할 수 없는 경우에도 빌드 타임에 사용할 수 있습니다. 벤더링된 종속성의 새 버전을 확인하고 필요한 경우 업데이트하도록 {% data variables.product.prodname_dependabot_version_updates %}를 구성할 수 있습니다. 

오래된 종속성이 확인되면 {% data variables.product.prodname_dependabot %}은 매니페스트를 최신 버전의 종속성으로 업데이트하기 위한 끌어오기 요청을 수행합니다. 벤더링된 종속성의 경우 {% data variables.product.prodname_dependabot %}은 오래된 종속성을 새 버전으로 직접 바꾸기 위한 끌어오기 요청을 수행합니다. 테스트를 통과했는지 확인하고 끌어오기 요청 요약에 포함된 변경 로그 및 릴리스 정보를 검토한 다음, 병합합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.

_보안 업데이트_ 를 사용하도록 설정하면 {% data variables.product.prodname_dependabot %}에서 취약한 종속성을 업데이트하기 위한 끌어오기 요청도 수행합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”를 참조하세요.

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## {% data variables.product.prodname_dependabot %} 끌어오기 요청 빈도

구성 파일을 통해 각 에코시스템에서 새 버전을 확인하는 빈도를 지정합니다(매일, 매주 또는 매월).

{% data reusables.dependabot.initial-updates %}

보안 업데이트를 사용하도록 설정한 경우 보안 업데이트를 위한 추가 끌어오기 요청이 표시되는 경우도 있습니다. 이 끌어오기 요청은 기본 분기에 대한 종속성과 관련된 {% data variables.product.prodname_dependabot %} 경고로 트리거됩니다. {% data variables.product.prodname_dependabot %}에서 취약한 종속성을 업데이트하기 위한 끌어오기 요청을 자동으로 수행합니다.

## 지원되는 리포지토리 및 에코시스템
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

지원되는 패키지 관리자 중 하나의 종속성 매니페스트 또는 잠금 파일이 포함된 리포지토리에 대해 버전 업데이트를 구성할 수 있습니다. 일부 패키지 관리자의 경우 종속성 벤더링도 구성할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor)”을 참조하세요.
{% note %}

{% data reusables.dependabot.private-dependencies-note %} 

{% data variables.product.prodname_dependabot %}이 모든 패키지 관리자에 대해 프라이빗 {% data variables.product.prodname_dotcom %} 종속성을 지원하는 것은 아닙니다. 아래 표에 있는 세부 정보를 참조하세요.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

리포지토리에서 이미 종속성 관리 통합을 사용 중인 경우 먼저 사용하지 않도록 설정한 후 {% data variables.product.prodname_dependabot %}을 사용하도록 설정해야 합니다. {% ifversion fpt or ghec %}자세한 내용은 “[통합 정보](/github/customizing-your-github-workflow/about-integrations)”를 참조하세요.{% endif %}

## {% data variables.product.prodname_dependabot %} 버전 업데이트 알림 정보

{% data variables.product.company_short %}에서 알림을 필터링하여 {% data variables.product.prodname_dependabot %}이 만든 끌어오기 요청에 대한 알림을 표시할 수 있습니다. 자세한 내용은 “[받은 편지함에서 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”를 참조하세요.
