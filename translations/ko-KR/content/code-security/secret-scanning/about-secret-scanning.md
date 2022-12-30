---
title: 비밀 검사 정보
intro: '{% data variables.product.product_name %}에서는 실수로 커밋된 비밀이 사기에 사용되는 것을 방지하기 위해 리포지토리에 알려진 유형의 비밀이 있는지 검사합니다.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192947'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## {% data variables.product.prodname_secret_scanning %} 정보

프로젝트에서 외부 서비스와 통신하는 경우 토큰 또는 프라이빗 키를 인증에 사용할 수 있습니다. 토큰과 프라이빗 키는 서비스 공급자가 발급할 수 있는 비밀의 예입니다. 비밀을 리포지토리에 체크 인하면 리포지토리에 대한 읽기 액세스 권한이 있는 모든 사용자가 비밀을 사용하여 해당 권한으로 외부 서비스에 액세스할 수 있습니다. 비밀은 프로젝트의 리포지토리 외부에 있는 안전한 전용 위치에 저장하는 것이 좋습니다.

{% data variables.product.prodname_secret_scanning_caps %}는 리포지토리가 보관된 경우에도 {% data variables.product.prodname_dotcom %} 리포지토리에 있는 모든 분기에서 전체 Git 기록을 검사하여 비밀{% ifversion ghec or ghes > 3.4 또는 ghae > 3.4 %}를 검색합니다. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %}는 {% data variables.product.prodname_dotcom_the_website %}에서 다음 두 가지 형식으로 사용할 수 있습니다.

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** 모든 퍼블릭 리포지토리에서 자동으로 실행됩니다. 비밀 검사 파트너가 제공한 패턴과 일치하는 모든 문자열은 관련 파트너에게 직접 보고됩니다.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}{% data variables.product.prodname_GH_advanced_security %} 라이선스가 있는 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 조직에서 소유한 리포지토리에 대한 추가 검사를 사용하도록 설정하고 구성할 수 있습니다.{% elsif ghec %}{% data variables.product.prodname_ghe_cloud %}를 사용하고 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 조직에서 소유한 리포지토리에 대한 추가 검사를 사용하도록 설정하고 구성할 수 있습니다.{% endif %} 비밀 검사 파트너, 다른 서비스 공급자가 제공하거나 조직에서 정의한 패턴과 일치하는 모든 문자열은 리포지토리의 "보안" 탭에서 경고로 보고됩니다. 퍼블릭 리포지토리의 문자열이 파트너 패턴과 일치하는 경우 파트너에게도 보고됩니다.{% endif %}{% ifversion fpt %} 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security)를 참조하세요.{% endif %}

서비스 공급자는 {% data variables.product.company_short %}와 협력하여 검사에 대한 비밀 형식을 제공할 수 있습니다. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

{% data variables.product.prodname_secret_scanning %}을 리포지토리 또는 조직에 대한 푸시 보호로 사용하도록 설정할 수도 있습니다. 이 기능을 사용하도록 설정하면 {% data variables.product.prodname_secret_scanning %}에서 기여자가 검색된 비밀을 사용하여 코드를 푸시하지 못하도록 방지합니다. 계속하려면 기여자는 푸시에서 비밀을 제거하거나 필요한 경우 보호를 무시해야 합니다. {% ifversion push-protection-custom-link-orgs %}관리자는 푸시가 차단될 때 기여자에게 표시되는 사용자 지정 링크를 지정할 수도 있습니다. 이 링크는 기여자를 돕기 위해 조직과 관련된 리소스를 포함할 수 있습니다. {% endif %}자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_secret_scanning_partner %} 정보

퍼블릭 리포지토리를 만들거나 변경 내용을 퍼블릭 리포지토리에 푸시하는 경우 {% data variables.product.product_name %}은 항상 코드에서 파트너 패턴과 일치하는 비밀을 검사합니다. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} {% data variables.product.prodname_secret_scanning %}이(가) 잠재적인 비밀을 감지하면 비밀을 발급한 서비스 공급자에게 알립니다. 서비스 공급자는 문자열의 유효성을 검사한 다음, 비밀을 철회할지, 새 비밀을 발급할지 또는 사용자에게 직접 연락할지를 결정합니다. 이러한 작업은 자신 또는 사용자에게 관련된 위험에 따라 달라집니다. 자세한 내용은 "[파트너 패턴에 지원되는 비밀](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)"을 참조하세요.

퍼블릭 리포지토리에서 {% data variables.product.prodname_secret_scanning %}의 구성을 변경할 수 없습니다.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## {% data variables.product.prodname_secret_scanning_GHAS %} 정보
{% elsif ghes or ghae %}
## {% data variables.product.product_name %}의 {% data variables.product.prodname_secret_scanning %} 정보
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %}는 {% data variables.product.prodname_GH_advanced_security %}의 일부로 모든 조직 소유 리포지토리에서 사용할 수 있습니다. 사용자 소유 리포지토리에서는 사용할 수 없습니다. {% data variables.product.prodname_secret_scanning %}을 리포지토리에 사용하도록 설정하면 {% data variables.product.prodname_dotcom %}이 코드에서 많은 서비스 공급자가 사용하는 비밀과 일치하는 패턴을 검사합니다. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} {% ifversion secret-scanning-backfills %} {% data variables.product.prodname_dotcom %}은 {% data variables.product.prodname_GH_advanced_security %}이(가) 활성화된 {% data variables.product.prodname_GH_advanced_security %} 리포지토리에서 기존 콘텐츠에 대한 전체 git 기록 검사를 주기적으로 실행하고 {% data variables.product.prodname_secret_scanning variables.product.prodname_secret_scanning %} 경고 알림 설정에 따라 경고 알림을 보냅니다. {% endif %} 자세한 내용은 "{% ifversion ghec %}[고급 보안에 지원되는 비밀](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns){% endif %}"을 참조하세요.

{% ifversion secret-scanning-issue-body-comments %} {% note %}

**참고:** 문제 설명 및 주석에 대한 {% data variables.product.prodname_secret_scanning_caps %}은(는) 공개 베타 버전이며 변경될 수 있습니다.

{% endnote %} {% endif %}

리포지토리 관리자인 경우 보관된 리포지토리{% endif %}를 포함하여 모든 리포지토리{% ifversion ghec or ghes > 3.4 또는 ghae > 3.4 %}에 대해 {% data variables.product.prodname_secret_scanning_GHAS %}를 사용하도록 설정할 수 있습니다. 조직 소유자는 {% data variables.product.prodname_secret_scanning_GHAS %}를 모든 리포지토리 또는 조직 내의 모든 새 리포지토리에 사용하도록 설정할 수도 있습니다. 자세한 내용은 "[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" 및 "[조직에 대한 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"를 참조하세요.

{% ifversion ghes or ghae or ghec %}리포지토리, 조직 또는 엔터프라이즈에 대한 사용자 지정 {% data variables.product.prodname_secret_scanning %} 패턴을 정의할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴 정의](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”를 참조하세요.
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %}은 전송 중 및 미사용 시 대칭 암호화를 사용하여 검색된 비밀을 저장합니다.{% endif %}{% ifversion ghes > 3.7 %} 검색된 비밀을 저장하는 데 사용되는 암호화 키를 회전하려면 {% data variables.contact.contact_ent_support %}에 문의할 수 있습니다. {% endif %}

### {% data variables.product.prodname_secret_scanning %} 경고 정보

리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정하거나 {% data variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정한 리포지토리에 커밋을 푸시하는 경우 {% data variables.product.prodname_dotcom %}은(는) 서비스 공급자{% ifversion ghes or ghae or ghec %}에서 정의한 패턴과 일치하는 비밀과 엔터프라이즈, 조직 또는 리포지토리{% endif %}에 정의된 사용자 지정 패턴을 검사합니다. {% ifversion secret-scanning-issue-body-comments %} {% data reusables.secret-scanning.scan-issue-description-and-comments %} {% endif %} {% ifversion secret-scanning-backfills %} {% data variables.product.prodname_dotcom %}은(는) {% data variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정된 리포지토리의 모든 기록 콘텐츠를 주기적으로 실행합니다. {% endif%}

{% data variables.product.prodname_secret_scanning %}에서 비밀을 검색하면 {% data variables.product.prodname_dotcom %}에서 경고를 생성합니다.

- {% data variables.product.prodname_dotcom %}에서 리포지토리 관리자와 조직 소유자에게 이메일 경고를 보냅니다. 리포지토리를 보고 있고 보안 경고 또는 리포지토리의 모든 활동에 대한 알림을 사용하도록 설정한 경우 경고를 받게 됩니다.
{% ifversion ghes or ghae or ghec %}
- 비밀을 커밋한 기여자가 리포지토리를 무시하지 않는 경우 {% data variables.product.prodname_dotcom %}은 기여자에게도 이메일 경고를 보냅니다. 이메일에는 관련 {% data variables.product.prodname_secret_scanning %} 경고에 대한 링크가 포함되어 있습니다. 그런 다음, 커밋 작성자가 리포지토리에서 경고를 보고 해당 경고를 해결할 수 있습니다.
{% endif %}
- {% data variables.product.prodname_dotcom %}는 리포지토리의 “보안” 탭에 경고를 표시합니다.

{% ifversion ghes or ghae or ghec %} {% data variables.product.prodname_secret_scanning %} 경고를 보고 해결하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}의 경고 관리](/github/administering-a-repository/managing-alerts-from-secret-scanning)"를 참조하세요.{% endif %}

리포지토리 관리자 및 조직 소유자는 {% data variables.product.prodname_secret_scanning %} 경고에 대한 액세스 권한을 사용자와 팀에 부여할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”를 참조하세요.

{% ifversion ghec or ghes or ghae > 3.4 %} 보안 개요를 사용하여 {% data variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정한 리포지토리와 발견된 경고에 대한 조직 수준 보기를 볼 수 있습니다. 자세한 내용은 "[보안 개요 보기](/code-security/security-overview/viewing-the-security-overview)"를 참조하세요.
{% endif %}

{%- ifversion ghec or ghes or ghae %} REST API를 사용하여 {% ifversion ghec %}프라이빗 {% endif %}리포지토리{% ifversion ghes %} 또는 조직{% endif %}에서 {% data variables.product.prodname_secret_scanning %}의 결과를 모니터링할 수도 있습니다. API 엔드포인트에 대한 자세한 내용은 "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)"을 참조하세요. {% endif %}

{% endif %}

## 추가 참고 자료

- “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”
- “[계정 및 데이터 보안 유지](/github/authenticating-to-github/keeping-your-account-and-data-secure)” {%- ifversion fpt or ghec %}
- "[codespaces에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %} {%- ifversion fpt or ghec or ghes %}
- "[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”
