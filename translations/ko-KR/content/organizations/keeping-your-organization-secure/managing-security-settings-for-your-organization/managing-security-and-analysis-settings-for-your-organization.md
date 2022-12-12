---
title: 조직의 보안 및 분석 설정 관리
intro: '{% data variables.product.prodname_dotcom %}에서 조직 프로젝트의 코드를 보호하고 분석하는 기능을 제어할 수 있습니다.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107703'
---
## 보안 및 분석 설정 관리 정보

{% data variables.product.prodname_dotcom %}은(는) 조직의 리포지토리를 보호하는 데 도움이 될 수 있습니다. 구성원이 조직에서 만드는 모든 기존 또는 새 리포지토리에 대한 보안 및 분석 기능을 관리할 수 있습니다. {% ifversion ghec %}{% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 경우 이러한 기능에 대한 액세스를 관리할 수도 있습니다. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}{% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 {% data variables.product.prodname_ghe_cloud %}을(를) 사용하는 조직에서도 이러한 기능에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)를 참조하세요.{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## 보안 및 분석 설정 표시

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

표시되는 페이지에서는 조직의 리포지토리에 대한 모든 보안 및 분석 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% ifversion ghec %}조직이 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 엔터프라이즈에 속한 경우 페이지에는 {% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정하는 옵션도 포함됩니다. {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하는 모든 리포지토리가 페이지 아래쪽에 나열됩니다.{% endif %}

{% ifversion ghes %}{% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 경우 페이지에는 {% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정하는 옵션도 포함됩니다. {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하는 모든 리포지토리가 페이지 아래쪽에 나열됩니다.{% endif %}

{% ifversion ghae %}페이지에는 {% data variables.product.prodname_advanced_security %} 기능을 사용하거나 사용하지 않도록 설정하는 옵션도 포함되어 있습니다. {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하는 모든 리포지토리가 페이지 아래쪽에 나열됩니다.{% endif %}

## 모든 기존 리포지토리에 대한 기능 사용 또는 사용 안 함

모든 리포지토리에 대해 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다. {% ifversion fpt or ghec %}변경 내용이 조직의 리포지토리에 미치는 영향은 표시 유형에 따라 결정됩니다.

- **종속성 그래프** - 기능은 항상 퍼블릭 리포지토리에 대해 사용하도록 설정되므로 변경 내용은 프라이빗 리포지토리에만 영향을 줍니다.
- **{% data variables.product.prodname_dependabot_alerts %}** - 변경 내용이 모든 리포지토리에 영향을 미칩니다.
- **{% data variables.product.prodname_dependabot_security_updates %}** - 변경 내용이 모든 리포지토리에 영향을 미칩니다.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - {% data variables.product.prodname_GH_advanced_security %} 및 관련 기능이 항상 퍼블릭 리포지토리에 대해 사용하도록 설정되어 있으므로 변경 내용은 프라이빗 리포지토리에만 영향을 줍니다.
- **{% data variables.product.prodname_secret_scanning_caps %}** - 변경 내용은 {% data variables.product.prodname_GH_advanced_security %}도 사용하도록 설정된 리포지토리에 영향을 줍니다. 이 옵션은 {% data variables.product.prodname_secret_scanning_GHAS %}을(를) 사용할지 여부를 제어합니다. {% data variables.product.prodname_secret_scanning_partner_caps %}은(는) 항상 모든 퍼블릭 리포지토리에서 실행됩니다.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

**참고:** "조직에 대한 정책 설정으로 인해 GitHub Advanced Security 사용하도록 설정할 수 없습니다"라는 오류가 발생하는 경우 엔터프라이즈 관리자에게 문의하고 엔터프라이즈에 대한 GitHub Advanced Security 정책을 변경하도록 요청합니다. 자세한 내용은 "[엔터프라이즈에서 고급 보안에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
{% endnote %} {% endif %}

1. 조직의 보안 및 분석 설정으로 이동합니다. 자세한 내용은 “[보안 및 분석 설정 표시](#displaying-the-security-and-analysis-settings)”를 참조하세요.
2. “코드 보안 및 분석”에서 기능 오른쪽에 있는 **모두 사용** 또는 **모두 사용 안 함** 을 클릭합니다. {% ifversion ghes or ghec %} {% data variables.product.prodname_GH_advanced_security %} 라이선스에 사용 가능한 사용자가 없는 경우 "{% data variables.product.prodname_GH_advanced_security %}"에 대한 컨트롤이 비활성화됩니다. {% endif %} {% ifversion fpt %} ![" "보안 및 분석 구성" 기능에 대해 모두 사용" 또는 "모두 사용 안 함" 단추](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} !["모두 사용" 또는 "모두 사용 안 함" 단추 "보안 및 분석 구성" 기능](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) {% endif %} {% ifversion ghes %} !["모두 사용" 또는 "모두 사용 안 함" 단추 "보안 및 분석 구성" 기능](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %} ![“보안 및 분석 구성” 기능에 대한 “모두 사용” 또는 “모두 사용 안 함” 단추](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. 필요에 따라 조직의 새 리포지토리에 대해 기본적으로 기능을 사용하도록 설정합니다.
   {% ifversion fpt or ghec %} ![새 리포지토리에 대한 “기본적으로 사용” 옵션](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. **기능 사용 안 함** 또는 **기능 사용** 을 클릭하여 조직의 모든 리포지토리에 대한 기능을 사용하거나 사용하지 않도록 설정합니다.
   {% ifversion fpt or ghec %} ![기능을 사용하도록 또는 사용하지 않도록 설정하는 단추](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. **모두 사용/사용 안 함** 또는 **적격 리포지토리에 대해 사용/사용 안 함** 을 클릭하여 변경 내용을 확인합니다.
   ![조직의 모든 적격 리포지토리에 기능을 사용하도록 설정하는 단추](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## 새 리포지토리가 추가되면 자동으로 기능 사용 또는 사용 안 함

1. 조직의 보안 및 분석 설정으로 이동합니다. 자세한 내용은 “[보안 및 분석 설정 표시](#displaying-the-security-and-analysis-settings)”를 참조하세요.
2. “코드 보안 및 분석”에서 기능 오른쪽에 있는 새 리포지토리{% ifversion fpt or ghec %}, 또는 조직의 모든 새 프라이빗 리포지토리{% endif %}에 대해 기본적으로 기능을 사용하거나 사용하지 않도록 설정합니다.
   {% ifversion fpt or ghec %} ![ 새 리포지토리](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) 에 기능을 사용하도록 설정하기 위한 확인란의 스크린샷 {% endif %} {% ifversion ghes %} ![새 리포지토리](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) 에 기능을 사용하도록 설정하기 위한 확인란의 스크린샷 {% endif %}
   
   {% ifversion ghae %} ![ 새 리포지토리](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) 에 기능을 사용하도록 설정하기 위한 확인란의 스크린샷 {% endif %}

{% ifversion fpt or ghec or ghes %}

## {% data variables.product.prodname_dependabot %}이(가) 프라이빗 종속성에 액세스할 수 있도록 허용

{% data variables.product.prodname_dependabot %}은(는) 프로젝트에서 오래된 종속성 참조를 검사하고 자동으로 끌어오기 요청을 생성하여 업데이트할 수 있습니다. 이렇게 하려면 {% data variables.product.prodname_dependabot %}이(가) 모든 대상 종속성 파일에 액세스할 수 있어야 합니다. 일반적으로 하나 이상의 종속성에 액세스할 수 없는 경우 버전 업데이트가 실패합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 정보](/github/administering-a-repository/about-dependabot-version-updates)”를 참조하세요.

기본적으로 {% data variables.product.prodname_dependabot %}은(는) 프라이빗 리포지토리 또는 프라이빗 패키지 레지스트리에 있는 종속성을 업데이트할 수 없습니다. 그러나 종속성이 해당 종속성을 사용하는 프로젝트와 동일한 조직 내의 프라이빗 {% data variables.product.prodname_dotcom %} 리포지토리에 있는 경우 {% data variables.product.prodname_dependabot %}에서 호스트 리포지토리에 대한 액세스 권한을 부여하여 버전을 성공적으로 업데이트하도록 허용할 수 있습니다.

코드가 프라이빗 레지스트리의 패키지에 종속된 경우 {% data variables.product.prodname_dependabot %}에서 리포지토리 수준에서 이를 구성하여 이러한 종속성의 버전을 업데이트하도록 허용할 수 있습니다. 이 작업은 리포지토리의 _dependabot.yml_ 파일에 인증 세부 정보를 추가하여 수행합니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)”을 참조하세요.

{% data variables.product.prodname_dependabot %}이(가) 프라이빗 {% data variables.product.prodname_dotcom %} 리포지토리에 액세스할 수 있도록 허용하려면 다음을 수행합니다.

1. 조직의 보안 및 분석 설정으로 이동합니다. 자세한 내용은 “[보안 및 분석 설정 표시](#displaying-the-security-and-analysis-settings)”를 참조하세요.
1. “{% data variables.product.prodname_dependabot %} 프라이빗 리포지토리 액세스”에서 **프라이빗 리포지토리 추가** 또는 **내부 및 프라이빗 리포지토리 추가** 를 클릭합니다.
   ![리포지토리 추가 단추](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. 허용하려는 리포지토리의 이름을 입력하기 시작합니다.
   ![필터링된 드롭다운이 있는 리포지토리 검색 필드](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. 허용할 리포지토리를 클릭합니다.

1. 필요에 따라 목록에서 리포지토리를 제거하려면 리포지토리의 오른쪽에서 {% octicon "x" aria-label="The X icon" %}을(를) 클릭합니다.
   ![리포지토리를 제거하는 “X” 단추](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## 조직의 개별 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %}에 대한 액세스 제거

“설정” 탭에서 리포지토리에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요. 그러나 조직의 “설정” 탭에서 리포지토리에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하지 않도록 설정할 수도 있습니다.

1. 조직의 보안 및 분석 설정으로 이동합니다. 자세한 내용은 “[보안 및 분석 설정 표시](#displaying-the-security-and-analysis-settings)”를 참조하세요.
1. {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하도록 설정된 조직의 모든 리포지토리 목록을 보려면 “{% data variables.product.prodname_GH_advanced_security %} 리포지토리” 섹션으로 스크롤합니다.
  ![{% data variables.product.prodname_GH_advanced_security %} 리포지토리 섹션](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) 표에는 각 리포지토리에 대한 고유 커밋자 수가 나열됩니다. 이는 {% data variables.product.prodname_GH_advanced_security %}에 대한 액세스를 제거하여 라이선스를 확보할 수 있는 사용자 수입니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요.
1. 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %}에 대한 액세스를 제거하고 리포지토리에 고유한 커밋자가 사용하는 좌석을 확보하려면 인접한 {% octicon "x" aria-label="X symbol" %}을(를) 클릭합니다.
1. 확인 대화 상자에서 **리포지토리 제거** 를 클릭하여 {% data variables.product.prodname_GH_advanced_security %}의 기능에 대한 액세스를 제거합니다.

{% note %}

**참고:** 리포지토리에 대한 {% data variables.product.prodname_GH_advanced_security %}에 대한 액세스를 제거하는 경우 변경이 의도되었음을 알 수 있도록 영향을 받는 개발 팀과 통신해야 합니다. 이렇게 하면 실패한 코드 검색 실행을 디버깅하는 데 시간을 낭비하지 않을 수 있습니다.

{% endnote %}

{% endif %}

## 추가 참고 자료

- “[리포지토리 보안](/code-security/getting-started/securing-your-repository)”{% ifversion not fpt %}
- “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”{% endif %}{% ifversion not ghae %}
- “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”{% endif %}
- “[공급망 보안 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”
