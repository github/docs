---
title: 리포지토리에 대한 보안 및 분석 설정 관리
intro: '{% data variables.product.prodname_dotcom %}에서 프로젝트의 코드를 보호하고 분석하는 기능을 제어할 수 있습니다.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109658'
---
{% ifversion fpt or ghec %}
## 퍼블릭 리포지토리에 대한 보안 및 분석 기능 사용 또는 사용 안 함

퍼블릭 리포지토리에 대한 보안 및 분석 기능의 하위 집합을 관리할 수 있습니다. 종속성 그래프 및 비밀 검색을 비롯한 기타 기능이 영구적으로 사용됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. “코드 보안 및 분석”에서 기능 오른쪽에 있는 **사용 안 함** 또는 **사용** 을 클릭합니다.
  ![퍼블릭 리포지토리에서 “보안 및 분석 구성” 기능에 대한 “사용” 또는 “사용 안 함” 단추](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## {% ifversion fpt or ghec %}프라이빗 리포지토리에 대한 보안 및 분석 기능 사용 또는 사용 안 함{% endif %}

{% ifversion fpt or ghec %}프라이빗 또는 내부 {% endif %}리포지토리에 대한 보안 및 분석 기능을 관리할 수 있습니다.{% ifversion ghes or ghec %} 조직이 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 엔터프라이즈에 속한 경우 추가 옵션을 사용할 수 있습니다. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} {% data variables.product.prodname_ghe_cloud %}와 함께 {% data variables.product.prodname_advanced_security %}을(를) 사용하는 조직에는 추가 옵션을 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories)를 참조하세요.
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. “코드 보안 및 분석”에서 기능 오른쪽에 있는 **사용 안 함** 또는 **사용** 을 클릭합니다. {% ifversion not fpt %} 엔터프라이즈에 {% data variables.product.prodname_advanced_security %}에 사용할 수 있는 라이선스가 없는 경우 "{% data variables.product.prodname_GH_advanced_security %}"에 대한 컨트롤이 비활성화됩니다. {% endif %} {% ifversion fpt %} ![ "보안 및 분석 구성" 기능에](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) 대한 "사용" 또는 "사용 안 함" 단추의 스크린샷{% elsif ghec %} !["보안 및 분석 구성" 기능에](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png) 대한 "사용" 또는 "사용 안 함" 단추의 스크린샷{% elsif ghes > 3.6 또는 ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  !["보안 및 분석 구성" 기능에](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png) 대한 "사용" 또는 "사용 안 함" 단추의 스크린샷{% endif %}
  
  {% ifversion not fpt %} {% note %}

  **참고:** {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}종속성 검토를 사용하지 않도록 설정하면 {% endif %}{% data variables.product.prodname_secret_scanning %} 및 {% data variables.product.prodname_code_scanning %}이(가) 사용하지 않도록 설정됩니다. {% data variables.product.prodname_code_scanning %}에 대한 워크플로, SARIF 업로드 또는 API 호출이 실패합니다.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. “코드 보안 및 분석”에서 기능 오른쪽에 있는 **사용 안 함** 또는 **사용** 을 클릭합니다. “{% data variables.product.prodname_secret_scanning %}”을(를) 사용하도록 설정하려면 먼저 {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하도록 설정해야 합니다.
   ![리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 또는 {% data variables.product.prodname_secret_scanning %}을(를) 사용하거나 사용하지 않도록 설정](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## 보안 경고에 대한 액세스 권한 부여

리포지토리에 대한 보안 경고는 리포지토리에 대한 관리자 액세스 권한이 있는 사용자와 조직의 조직 소유자가 리포지토리를 소유할 때 표시됩니다. 추가 팀과 사용자에게 경고에 대한 액세스 권한을 부여할 수 있습니다.

{% note %}

조직 소유자 및 리포지토리 관리자는 리포지토리에 대한 쓰기 권한이 있는 사용자 또는 팀에게 {% data variables.product.prodname_secret_scanning %} 경고와 같은 보안 경고를 볼 수 있는 액세스 권한만 부여할 수 있습니다.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. “경고에 액세스”의 검색 필드에 찾으려는 사람 또는 팀의 이름을 입력한 다음 일치 항목 목록에서 이름을 클릭합니다.
   {% ifversion fpt or ghec or ghes %} ![ 사용자 또는 팀에게 보안 경고](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) 에 대한 액세스 권한을 부여하기 위한 검색 필드 {% endif %}
   
   {% ifversion ghae %} ![ 사용자 또는 팀에게 보안 경고](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) 에 대한 액세스 권한을 부여하기 위한 검색 필드 {% endif %}
   
5. **변경 내용 저장** 을 클릭합니다.
   {% ifversion fpt or ghes or ghec %} ![" 보안 경고 설정](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) 변경에 대한 변경 내용 저장" 단추 {% endif %}
   
   {% ifversion ghae %} ![" 보안 경고 설정](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) 변경에 대한 변경 내용 저장" 단추 {% endif %}

## 보안 경고에 대한 액세스 제거

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. “경고에 대한 액세스”에서 제거할 액세스 권한이 있는 사용자 또는 팀의 오른쪽에 있는 {% octicon "x" aria-label="X symbol" %}을(를) 클릭합니다.
   {% ifversion fpt or ghec or ghes %}  
   ![리포지토리](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) 에 대한 보안 경고에 대한 다른 사용자의 액세스를 제거하는 "x" 단추 {% endif %}
   
   {% ifversion ghae %} ![" 리포지토리](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) 에 대한 보안 경고에 대한 다른 사용자의 액세스를 제거하는 x" 단추 {% endif %}
  5. **변경 내용 저장** 을 클릭합니다.

## 추가 참고 자료

- “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”
- “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”
