---
title: 비밀 검사 패턴
intro: '{% data variables.product.company_short %}가 실수로 커밋된 비밀의 사기성 사용을 방지하기 위해 사용하는 지원되는 비밀 및 파트너 목록입니다.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184506'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_secret_scanning %} 패턴 정보

{% data variables.product.product_name %}는 다음 {% data variables.product.prodname_secret_scanning %} 패턴 집합을 유지 관리합니다.

1. **파트너 패턴.** 모든 퍼블릭 리포지토리에서 잠재적인 비밀을 검색하는 데 사용됩니다. 자세한 내용은 “[파트너 패턴에서 지원되는 비밀](#supported-secrets-for-partner-patterns)”을 참조하세요.
2. **고급 보안 패턴.** {% data variables.product.prodname_secret_scanning %}를 사용할 수 있는 리포지토리에서 잠재적인 비밀을 검색하는 데 사용됩니다. {% ifversion ghec %} 자세한 내용은 “[고급 보안에서 지원되는 비밀](#supported-secrets-for-advanced-security)”을 참조하세요.{% endif %}{% ifversion secret-scanning-push-protection %}
3. **푸시 보호 패턴.** {% data variables.product.prodname_secret_scanning %}을(를) 푸시 보호로 사용할 수 있는 리포지토리에서 잠재적인 비밀을 검색하는 데 사용됩니다. 자세한 내용은 “[푸시 보호에 지원되는 비밀](#supported-secrets-for-push-protection)”을 참조하세요.{% endif %}

{% ifversion fpt %} {% data variables.product.prodname_GH_advanced_security %}가 포함된 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 해당 리포지토리에서 {% data variables.product.prodname_secret_scanning_GHAS %}를 사용하도록 설정할 수 있습니다. 패턴에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)를 참조하세요.
{% endif %}

## 파트너 패턴에서 지원되는 비밀

{% data variables.product.product_name %}은 현재 다음 서비스 공급자가 발급한 비밀에 대해 공용 리포지토리를 검사하고 커밋에서 비밀이 검색될 때마다 관련 서비스 공급자에게 경고합니다. {% data variables.product.prodname_secret_scanning_partner %}에 대한 자세한 내용은 “[{% data variables.product.prodname_secret_scanning_partner %} 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”를 참조하세요.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## {% ifversion ghec %}고급 보안에서 {% endif %}지원되는 비밀

{% data variables.product.prodname_secret_scanning_GHAS %}를 사용하도록 설정하면 {% data variables.product.prodname_dotcom %}는 다음 서비스 공급자가 발급한 비밀을 검색합니다. {% ifversion ghec %}{% data variables.product.prodname_secret_scanning_GHAS %}에 대한 자세한 내용은 “[{% data variables.product.prodname_secret_scanning_GHAS %} 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)”를 참조하세요.{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

비밀 검사에 REST API를 사용하는 경우 `Secret type`을 사용하여 특정 발급자의 비밀을 보고할 수 있습니다. 자세한 내용은 “[비밀 검사](/enterprise-cloud@latest/rest/secret-scanning)”를 참조하세요.
 
{% ifversion ghes or ghae or ghec %} {% note %}

**참고:** 리포지토리, 조직 또는 엔터프라이즈에 대한 사용자 지정 {% data variables.product.prodname_secret_scanning %} 패턴을 정의할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴 정의](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”를 참조하세요.

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## 푸시 보호에 지원되는 비밀

{% data variables.product.prodname_secret_scanning_caps %}은(는) 푸시 보호로 현재 리포지토리에서 다음 서비스 공급자가 발급한 비밀을 검색합니다.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## 추가 참고 자료

- “[리포지토리 보안 유지](/code-security/getting-started/securing-your-repository)”
- “[계정 및 데이터 보안 유지](/github/authenticating-to-github/keeping-your-account-and-data-secure)” {%- ifversion fpt or ghec %}
- “[{% data variables.product.prodname_secret_scanning_caps %} 파트너 프로그램](/developers/overview/secret-scanning-partner-program)” {%- else %}
- {% data variables.product.prodname_ghe_cloud %} 설명서의 “[{% data variables.product.prodname_secret_scanning_caps %} 파트너 프로그램](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)” {% endif %}
