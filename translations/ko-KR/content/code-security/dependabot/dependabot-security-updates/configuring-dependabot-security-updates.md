---
title: Dependabot 보안 업데이트 구성.
intro: '{% data variables.product.prodname_dependabot_security_updates %} 또는 수동 끌어오기 요청을 사용하여 취약한 종속성을 쉽게 업데이트할 수 있습니다.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180771'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_security_updates %} 구성 정보

리포지토리 수준 또는 개인 계정 또는 조직이 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하도록 설정할 수 있습니다. {% data variables.product.prodname_dependabot_alerts %} 및 종속성 그래프를 사용하는 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”를 참조하세요.

개별 리포지토리 또는 개인 계정이나 조직이 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하지 않도록 설정할 수 있습니다.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## 지원되는 리포지토리

{% data variables.product.prodname_dotcom %}은(는) 개인 계정 또는 조직에서 {% data variables.product.prodname_dependabot_security_updates %}에 **대한 새 리포지토리에 대해 자동으로 사용하도록 설정한 경우 새로 만든 리포지토리에** 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 자동으로 사용하도록 설정합니다. 자세한 내용은 "[리포지토리에 대한 {% 데이터 variables.product.prodname_dependabot_security_updates %} 관리](#managing-dependabot-security-updates-for-your-repositories)"를 참조하세요. 

보안 업데이트를 사용하도록 설정된 리포지토리의 포크를 만드는 경우 {% data variables.product.prodname_dotcom %}는 포크에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 자동으로 사용하지 않도록 설정합니다. 그런 다음 특정 포크에서 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하도록 설정할지 여부를 결정할 수 있습니다.

보안 업데이트가 리포지토리에 대해 사용하도록 설정되지 않았고 그 이유를 모르는 경우 먼저 아래 절차 섹션에 제공된 지침을 사용하여 사용하도록 설정해 봅니다. 그래도 보안 업데이트가 작동하지 않으면 {% data variables.contact.contact_support %}에 문의할 수 있습니다.

## 리포지토리에 대한 {% data variables.product.prodname_dependabot_security_updates %} 관리

개인 계정 또는 조직이 소유한 모든 적격 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하거나 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[개인 계정의 보안 및 분석 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요. 

개별 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하거나 사용하지 않도록 설정할 수도 있습니다.

### 개별 리포지토리에 {% data variables.product.prodname_dependabot_security_updates %} 사용 또는 사용 안 함

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. “코드 보안 및 분석” 아래 “{% data variables.product.prodname_dependabot %} 보안 업데이트” 오른쪽에 있는 **사용** 을 클릭하여 기능을 사용하도록 설정하거나 **사용 안 함** 을 클릭하여 사용하지 않도록 설정합니다. {% ifversion fpt or ghec %} 퍼블릭 리포지토리의 경우 기능이 항상 사용하도록 설정된 경우 단추가 비활성화됩니다. {% endif %} {% ifversion fpt or ghec %}![ {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 또는 ghae > 3.6 %}을 사용하도록 설정하는 단추가 있는 "코드 보안 및 분석" 섹션의 스크린샷<!--Insert screenshot for GHES 3.7 when available--> {% else %}![{% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정하는 단추가 있는 “코드 보안 및 분석” 섹션의 스크린샷](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## 구성 파일을 사용하여 기본 동작 재정의

리포지토리에 dependabot.yml 파일을 추가하여 {% data variables.product.prodname_dependabot_security_updates %}의 기본 동작을 재정의할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)”을 참조하세요. 

보안 업데이트만 필요하고 버전 업데이트를 제외하려는 경우 지정된 `package-ecosystem`에 대한 버전 업데이트를 방지하기 위해 `open-pull-requests-limit`를 `0`으로 설정할 수 있습니다. 자세한 내용은 “[`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)”를 참조하세요.

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

보안 업데이트에 사용할 수 있는 구성 옵션에 대한 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)”의 표를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”
- “[{% data variables.product.prodname_dependabot_alerts %} 구성](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)”{% ifversion fpt or ghec %}
- “[프라이빗 리포지토리에 대한 데이터 사용 설정 관리](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”{% endif %}
- “[지원되는 패키지 에코시스템](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”
