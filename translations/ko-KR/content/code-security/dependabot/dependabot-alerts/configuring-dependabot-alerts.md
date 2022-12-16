---
title: Dependabot 경고 구성
intro: '새로운 취약한 종속성 {% ifversion GH-advisory-db-supports-malware %}또는 맬웨어가{% endif %} 리포지토리 중 하나에 있을 때 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정합니다.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 4eb1e58be21dfd96cf0723a1067757f2105810e5
ms.sourcegitcommit: 421ed92f4157e469e4043b995922d1984a9b3cc1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009659'
---
## 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 및 맬웨어에{% endif %} 대한 {% data variables.product.prodname_dependabot_alerts %} 정보

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_dependabot %}은 {% data variables.product.prodname_advisory_database %} 또는 리포지토리 변경에 대한 종속성 그래프에 새 권고가 추가되면 코드를 검색합니다. 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어가{% endif %} 감지되면 {% data variables.product.prodname_dependabot_alerts %}가 생성됩니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”를 참조하세요.

다음에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다.
* 개인 계정
* 리포지토리
* 조직

## 개인 계정에 대한 {% data variables.product.prodname_dependabot_alerts %} 관리

{% ifversion fpt or ghec %}

개인 계정 소유의 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다.

### 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. “코드 보안 및 분석”의 {% data variables.product.prodname_dependabot_alerts %}의 오른쪽에서 **모두 사용 안 함** 또는 **모두 사용** 을 클릭합니다.
 ![“모두 사용” 또는 “모두 사용 안 함” 단추가 강조 표시된 “보안 및 분석 구성” 기능의 스크린샷](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. 필요에 따라 만든 새 리포지토리에 대해 기본적으로 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정합니다.
  ![“새 프라이빗 리포지토리에 대해 기본적으로 사용” 확인란이 강조 표시된 “Dependabot 경고 사용” 스크린샷](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. **{% data variables.product.prodname_dependabot_alerts %} 사용 안 함** 또는 **{% data variables.product.prodname_dependabot_alerts %} 사용** 을 클릭하여 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정합니다.
  ![“Dependabot 경고 사용” 단추가 강조 표시된 “Dependabot 경고 사용”의 스크린샷](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하면 몇 분 내에 GitHub에 결과가 표시됩니다.

### 새 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. “코드 보안 및 분석”의 {% data variables.product.prodname_dependabot_alerts %}의 오른쪽에서 생성한 새 리포지토리에 대해 기본적으로 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정합니다.
  ![“모든 새 프라이빗 리포지토리에 대해 사용” 확인이 강조 표시된 “보안 및 분석 구성” 스크린샷](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} 엔터프라이즈 소유자가 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대해 Dependabot 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.

{% endif %}

## 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %} 관리

{% ifversion fpt or ghec %}퍼블릭, 프라이빗 또는 내부 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}를 관리할 수 있습니다.

기본적으로 영향을 받는 리포지토리의 관리자 권한이 있는 사용자에게 새 {% data variables.product.prodname_dependabot_alerts %}에 대해 알립니다. {% data variables.product.product_name %}은 리포지토리에 대해 식별된 취약성을 공개적으로 공개하지 않습니다. 또한 사용자가 소유하거나 관리자 권한이 있는 리포지토리에서 작업하는 추가 사용자 또는 팀에 {% 데이터 variables.product.prodname_dependabot_alerts %}을(를) 표시할 수도 있습니다.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. “코드 보안 및 분석” 아래 {% data variables.product.prodname_dependabot_alerts %} 오른쪽에 있는 **사용** 을 클릭하여 경고를 사용하도록 설정하거나 **사용 안 함** 을 클릭하여 경고를 사용하지 않도록 설정합니다. 
  ![{% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정하는 단추가 “코드 보안 및 분석” 섹션의 스크린샷](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

엔터프라이즈 소유자가 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대해 Dependabot 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.
{% endif %}

## 조직에 대한 {% data variables.product.prodname_dependabot_alerts %} 관리
{% ifversion fpt or ghec %}조직 소유의 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다. 변경 내용은 모든 리포지토리에 영향을 줍니다.

### 모든 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. “코드 보안 및 분석”의 {% data variables.product.prodname_dependabot_alerts %}의 오른쪽에서 **모두 사용 안 함** 또는 **모두 사용** 을 클릭합니다. 
   {% ifversion fpt or ghec %} ![Dependabot 경고에 대해 “모두 사용” 또는 “모두 사용 안 함” 단추가 강조 표시된 “보안 및 분석 구성” 기능의 스크린샷](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![“보안 및 분석 구성” 기능의 “모두 사용” 또는 “모두 사용 안 함” 단추](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. 필요에 따라 조직의 새 리포지토리에 대해 기본적으로 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정합니다.
   {% ifversion fpt or ghec %} ![새 리포지토리에 대한 “기본적으로 사용” 옵션의 스크린샷](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. **{% data variables.product.prodname_dependabot_alerts %} 사용 안 함** 또는 **{% data variables.product.prodname_dependabot_alerts %} 사용** 을 클릭하여 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정합니다.
   {% ifversion fpt or ghec %} ![기능을 사용하지 않거나 사용하기 위해 단추가 강조 표시된 “Dependabot 경고 사용” 모드의 스크린샷](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} 엔터프라이즈 소유자가 조직에 대한 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[GitHub Enterprise Server용 Dependabot 정보](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”를 참조하세요.
   {% endif %}
