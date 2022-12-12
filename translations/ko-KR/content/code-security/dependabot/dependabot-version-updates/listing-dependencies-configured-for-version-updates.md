---
title: 버전 업데이트에 구성된 종속성 나열
intro: '{% data variables.product.prodname_dependabot %}가 업데이트를 위해 모니터링하는 종속성을 볼 수 있습니다.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109801'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %}에 의해 모니터링되는 종속성 보기

버전 업데이트를 사용하도록 설정한 후에는 리포지토리에 대한 종속성 그래프의 **{% data variables.product.prodname_dependabot %}** 탭을 사용하여 구성이 올바른지 확인할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. 필요에 따라 패키지 관리자에 대해 모니터링되는 파일을 보려면 연결된 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭합니다.
  ![모니터링되는 종속성 파일](/assets/images/help/dependabot/monitored-dependency-files.png)

종속성이 누락된 경우 로그 파일에서 오류를 확인합니다. 패키지 관리자가 누락된 경우 구성 파일을 검토합니다.

## {% data variables.product.prodname_dependabot %} 로그 파일 보기

1. **{% data variables.product.prodname_dependabot %}** 탭에서 **마지막으로 확인한 시간 전** 을 클릭하여 버전 업데이트를 마지막으로 확인하는 동안 {% data variables.product.prodname_dependabot %}에서 생성된 로그 파일을 확인합니다.
  ![로그 파일 보기](/assets/images/help/dependabot/last-checked-link.png)
2. 필요에 따라 버전 확인을 다시 실행하려면 **업데이트 확인** 을 클릭합니다.
  ![업데이트 확인](/assets/images/help/dependabot/check-for-updates.png)
