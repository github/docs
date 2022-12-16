---
title: 엔터프라이즈에 Dependabot 사용
intro: '{% data variables.location.product_location %}의 사용자가 {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} 및 {% data variables.product.prodname_dependabot_updates %}{% endif %}을(를) 사용하도록 설정하여 코드 종속성에서 취약성을 찾아 수정하도록 허용할 수 있습니다.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 009b6199e0212c531caaf48b220342853d656248
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135673'
---
## {% data variables.product.product_name %}에 대한 {% data variables.product.prodname_dependabot %} 정보

{% data variables.product.prodname_dependabot %}는 {% data variables.location.product_location %}의 사용자가 종속성에서 취약성을 찾고 수정하는 데 도움이 됩니다. {% ifversion ghes %} {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정하여 취약한 종속성에 대해 사용자에게 알리고 {% data variables.product.prodname_dependabot_updates %}을(를) 사용하여 취약성을 수정하고 종속성을 최신 버전으로 업데이트할 수 있습니다.

{% data variables.product.prodname_dependabot %}는 {% data variables.location.product_location %}에 대한 공급망 보안을 강화하는 데 사용할 수 있는 많은 기능 중 하나일 뿐입니다. 다른 기능에 대한 자세한 내용은 "[엔터프라이즈의 공급망 보안 정보"를 참조하세요](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise).

### {% data variables.product.prodname_dependabot_alerts %} 정보
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot_alerts %}를 사용하면 {% data variables.product.prodname_dotcom %}는 리포지토리에서 안전하지 않은 종속성을 식별하고 {% data variables.location.product_location %}에 대한 경고를 만듭니다. {% data variables.product.prodname_advisory_database %} 및 종속성 그래프 서비스의 데이터를 사용합니다.

{% data reusables.repositories.tracks-vulnerabilities %}

엔터프라이즈에 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하면 취약성 데이터가 {% data variables.product.prodname_advisory_database %}에서 매시간 인스턴스로 동기화됩니다. {% data variables.product.company_short %}에서 검토한 권고만 동기화됩니다. {% data reusables.security-advisory.link-browsing-advisory-db %} 

언제든지 취약성 데이터를 수동으로 동기화하도록 선택할 수도 있습니다. 자세한 내용은 “[엔터프라이즈의 취약성 데이터 보기](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)”를 참조하세요.

{% note %}

**참고:** {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정하면 {% data variables.location.product_location %}의 코드에 대한 코드나 정보가 {% data variables.product.prodname_dotcom_the_website %}에 업로드되지 않습니다. 

{% endnote %}

{% data variables.location.product_location %}이(가) 취약성에 대한 정보를 수신하면 영향을 받는 버전의 종속성을 사용하는 {% data variables.location.product_location %}에서 리포지토리를 식별하고 {% data variables.product.prodname_dependabot_alerts %}를 생성합니다. 새 {% data variables.product.prodname_dependabot_alerts %}에 대해 사용자에게 자동으로 알릴지 여부를 선택할 수 있습니다. 

{% data variables.product.prodname_dependabot_alerts %}가 활성화된 리포지토리의 경우 매니페스트 파일 또는 잠금 파일이 포함된 기본 분기로 푸시할 때 검색이 트리거됩니다. 또한 {% data variables.location.product_location %}에 새 취약성 레코드가 추가되면 {% data variables.product.product_name %}는 {% data variables.location.product_location %}의 모든 기존 리포지토리를 검사하고 취약한 리포지토리에 대한 경고를 생성합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.

{% ifversion ghes %}
### {% data variables.product.prodname_dependabot_updates %} 정보

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정한 후 {% data variables.product.prodname_dependabot_updates %}를 사용하도록 선택할 수 있습니다. {% data variables.product.prodname_dependabot_updates %}이(가) {% data variables.location.product_location %}에 사용하도록 설정되면 사용자는 리포지토리를 구성하여 종속성이 업데이트되고 자동으로 안전하게 유지되도록 할 수 있습니다. 

{% note %} 

**참고:** {% data variables.product.product_name %}의 {% data variables.product.prodname_dependabot_updates %}에는 자체 호스팅 실행기에 {% data variables.product.prodname_actions %}가 필요합니다.

{% endnote %}

기본적으로 {% data variables.product.prodname_actions %} 실행기는 업스트림 패키지 관리자로부터 업데이트된 패키지를 다운로드하기 위해 {% data variables.product.prodname_dependabot %}에서 인터넷에 액세스해야 합니다. {% data variables.product.prodname_github_connect %}에서 제공하는 {% data variables.product.prodname_dependabot_updates %}의 경우 인터넷 액세스는 {% data variables.product.prodname_dotcom_the_website %}에 호스트된 종속성 및 권고에 액세스할 수 있는 토큰을 실행기에게 제공합니다.

{% data variables.product.prodname_dependabot_updates %}를 사용하면 {% data variables.product.company_short %}는 두 가지 방법으로 종속성을 업데이트하기 위한 끌어오기 요청을 자동으로 만듭니다.

- **{% data variables.product.prodname_dependabot_version_updates %}** : 사용자가 {% data variables.product.prodname_dependabot %} 구성 파일을 리포지토리에 추가하여 {% data variables.product.prodname_dependabot %}을 사용하여 추적된 종속성의 새 버전이 릴리스되면 끌어오기 요청을 만들 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 정보](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)”를 참조하세요.
- **{% data variables.product.prodname_dependabot_security_updates %}** : {% data variables.product.prodname_dependabot %}을 사용하도록 리포지토리를 설정하여 {% data variables.product.prodname_dotcom %}가 리포지토리에 대한 종속성 그래프의 종속성 중 하나에서 취약성을 감지하면 끌어오기 요청을 만들 수 있도록 합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)” 및 “[{% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) 정보”를 참조하세요.
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} 사용

{% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하려면 다음을 수행합니다.
- {% data variables.product.prodname_github_connect %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 관리](/admin/configuration/configuring-github-connect/managing-github-connect)”를 참조하세요.{% ifversion ghes %}
- 종속성 그래프를 사용하도록 설정해야 합니다. 자세한 내용은 “[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”을 참조하세요.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. “{% data variables.product.prodname_dependabot %}”에서 “사용자가 오픈 소스 코드 종속성에 대한 취약성 경고를 받을 수 있습니다”의 오른쪽에 있는 드롭다운 메뉴를 선택하고 **알림 없이 사용** 을 클릭합니다. 필요에 따라 알림과 함께 경고를 사용하도록 설정하려면 **알림과 함께 사용** 을 클릭합니다.

   ![취약성에 대한 스캔 리포지토리를 사용하도록 설정하는 드롭다운 메뉴의 스크린샷](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. “리포지토리의 취약성 스캔 가능”에서 드롭다운 메뉴를 선택하고 **알림 없이 사용** 을 클릭합니다. 필요에 따라 알림과 함께 경고를 사용하도록 설정하려면 **알림과 함께 사용** 을 클릭합니다.
   ![취약성에 대한 스캔 리포지토리를 사용하도록 설정하는 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png){%- endif %} {% tip %}

   **팁**: 메일 오버로드를 방지하려면 처음 며칠 동안 알림 없이 {% data variables.product.prodname_dependabot_alerts %}를 구성하는 것이 좋습니다. 며칠 후 알림이 평소와 같이 {% data variables.product.prodname_dependabot_alerts %}를 수신하도록 설정할 수 있습니다.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## {% data variables.product.prodname_dependabot_updates %} 사용

엔터프라이즈에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정한 후 {% data variables.product.prodname_dependabot_updates %}를 사용하도록 설정할 수 있습니다.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} 자세한 내용은 "[GitHub Enterprise Server에 대한 {% data variables.product.prodname_actions %} 시작"을 참조하세요](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

엔터프라이즈에서 클러스터링을 사용하는 경우 {% data variables.product.prodname_dependabot_updates %}는 {% data variables.product.product_name %}에서 지원되지 않습니다.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. “보안”에서 **{% data variables.product.prodname_dependabot_security_updates %}** 를 선택합니다.

   ![{% data variables.product.prodname_dependabot_security_updates %}를 사용하거나 사용하지 않도록 설정하는 확인란의 스크린샷](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. **인스턴스 방문** 을 클릭합니다.
1. 전용 자체 호스팅 실행기를 구성하여 종속성을 업데이트하는 끌어오기 요청을 만듭니다. 워크플로에서 특정 실행기 레이블을 사용하기 때문에 이 작업이 필요합니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_dependabot_updates %}에 대한 자체 호스팅 실행기 관리](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)”를 참조하세요.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. “{% data variables.product.prodname_dependabot %}”에서의 “사용자가 취약하지 않은 오픈 소스 코드 종속성으로 쉽게 업그레이드할 수 있습니다” 오른쪽에서 **사용** 을 클릭합니다.

   ![취약한 종속성을 업데이트할 수 있도록 하는 드롭다운 메뉴의 스크린샷](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

{% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하는 경우 {% data variables.product.prodname_dependabot_security_updates %}에 대해 {% data variables.product.prodname_actions %}를 설정하는 것이 좋습니다. 이 기능을 사용하면 개발자가 종속성에서 취약성을 수정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_dependabot_updates %}에 대한 자체 호스팅 실행기 관리](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)”를 참조하세요.

보안 강화가 필요한 경우 프라이빗 레지스트리를 사용하도록 {% data variables.product.prodname_dependabot %}을 구성하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %}에 대한 암호화된 비밀 관리](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)”를 참조하세요.

{% endif %}
