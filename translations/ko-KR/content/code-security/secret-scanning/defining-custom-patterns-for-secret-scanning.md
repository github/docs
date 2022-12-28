---
title: 비밀 검사를 위한 사용자 지정 패턴 정의
shortTitle: Define custom patterns
intro: '{% data variables.product.prodname_secret_scanning_GHAS %}를 확장하여 기본 패턴을 벗어난 비밀을 검색할 수 있습니다.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106519'
---
## {% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴 정보

사용자 지정 패턴을 정의하여 {% data variables.product.prodname_secret_scanning %}에서 지원하는 기본 패턴으로 검색되지 않는 비밀을 식별할 수 있습니다. 예를 들어 조직 내부에 비밀 패턴이 있을 수 있습니다. 지원되는 비밀 및 서비스 공급자에 대한 자세한 내용은 “[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns)”을 참조하세요.

엔터프라이즈, 조직 또는 리포지토리에 대한 사용자 지정 패턴을 정의할 수 있습니다. {% data variables.product.prodname_secret_scanning_caps %}는 각 조직 또는 엔터프라이즈 계정에 대해 최대 500개의 사용자 지정 패턴과 리포지토리당 최대 100개의 사용자 지정 패턴을 지원합니다.

## 사용자 지정 패턴에 대한 정규식 구문

{% data variables.product.prodname_secret_scanning_GHAS %}에 대한 사용자 지정 패턴을 하나 이상의 정규식으로 지정할 수 있습니다.

- **비밀 형식:** 비밀 자체의 형식을 설명하는 식입니다.
- **비밀 앞:** 비밀 앞에 오는 문자를 설명하는 식입니다. 기본적으로 `\A|[^0-9A-Za-z]`로 설정되며, 이는 비밀이 줄의 시작 부분에 있거나 영숫자가 아닌 문자가 앞에 있어야 함을 의미합니다.
- **비밀 뒤:** 비밀 뒤에 오는 문자를 설명하는 식입니다. 기본적으로 `\z|[^0-9A-Za-z]`로 설정되며, 이는 비밀 뒤에 줄 바꿈 문자 또는 영숫자가 아닌 문자가 있어야 함을 의미합니다.
- **추가 일치 요구 사항:** 비밀 자체가 일치해야 하거나 일치하지 않아야 하는 하나 이상의 선택적 식입니다.

단순 토큰의 경우 일반적으로 비밀 형식만 지정하면 됩니다. 다른 필드는 복잡한 정규식을 만들지 않고도 더 복잡한 비밀을 지정할 수 있도록 유연성을 제공합니다.  사용자 지정 패턴의 예는 아래의 "[추가 요구 사항을 사용하여 지정된 사용자 지정 패턴의 예](#example-of-a-custom-pattern-specified-using-additional-requirements)"를 참조하세요.

{% data variables.product.prodname_secret_scanning_caps %}는 [Hyperscan 라이브러리](https://github.com/intel/hyperscan)를 사용하며, PCRE 구문의 하위 집합인 Hyperscan 정규식 구문만 지원합니다. Hyperscan 옵션 한정자는 지원되지 않습니다.  Hyperscan 패턴 구문에 대한 자세한 내용은 Hyperscan 설명서의 "[패턴 지원](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)"을 참조하세요.

## 리포지토리에 대한 사용자 지정 패턴 정의

사용자 지정 패턴을 정의하려면 먼저 리포지토리에서 {% data variables.product.prodname_secret_scanning %}을 사용하도록 설정해야 합니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_secret_scanning %} 구성](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)"을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 새 사용자 지정 패턴을 테스트할 준비가 되면 경고를 만들지 않고 리포지토리에서 일치 항목을 식별하기 위해 **저장 및 시험 실행** 을 클릭합니다.
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

패턴이 만들어지면 {% data reusables.secret-scanning.secret-scanning-process %} {% data variables.product.prodname_secret_scanning %} 경고 보기에 대한 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}의 경고 관리](/code-security/secret-security/managing-alerts-from-secret-scanning)"를 참조하세요.

### 추가 요구 사항을 사용하여 지정된 사용자 지정 패턴의 예

회사에는 5가지 특성이 있는 내부 토큰이 있습니다. 다른 필드를 사용하여 다음과 같이 토큰을 식별하는 방법을 지정합니다.

| **특성** | **필드 및 정규식** |
|----------------|------------------------------|
| 5~10자의 길이 | 비밀 형식: `[$#%@AA-Za-z0-9]{5,10}` |
| `.`로 끝나지 않음 | 비밀 뒤: `[^\.]` |
| 숫자 및 대문자 포함 | 추가 요구 사항: 비밀은 `[A-Z]` 및 `[0-9]`와 일치해야 합니다. |
| 한 행에 둘 이상의 소문자를 포함하지 않음 | 추가 요구 사항: 비밀은 `[a-z]{2,}`와 일치하지 않아야 합니다. |
| `$%@!` 중 하나 포함 | 추가 요구 사항: 비밀은 `[$%@!]`와 일치해야 합니다. |

다음 토큰은 위에서 설명한 사용자 지정 패턴과 일치합니다.

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

다음 문자열은 위에서 설명한 사용자 지정 패턴과 일치하지 않습니다.

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## 조직에 대한 사용자 지정 패턴 정의

사용자 지정 패턴을 정의하려면 먼저 {% data variables.product.prodname_secret_scanning %}을 조직에서 검사하려는 리포지토리에 사용하도록 설정해야 합니다. 조직의 모든 리포지토리에서 {% data variables.product.prodname_secret_scanning %}을 사용하도록 설정하려면 "[조직에 대한 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"를 참조하세요.

{% ifversion ghes < 3.5 or ghae %} {% note %}

**참고:** 시험 실행 기능이 없으므로 전체 조직에 대해 정의하기 전에 리포지토리에서 사용자 지정 패턴을 테스트하는 것이 좋습니다. 이렇게 하면 과도한 가양성 {% data variables.product.prodname_secret_scanning %} 경고를 만들지 않도록 방지할 수 있습니다.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 새 사용자 지정 패턴을 테스트할 준비가 되면 경고를 만들지 않고 선택한 리포지토리에서 일치 항목을 식별하기 위해 **저장 및 시험 실행** 을 클릭합니다.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

패턴이 만들어지면 {% data variables.product.prodname_secret_scanning %}에서 모든 분기의 전체 Git 기록을 포함하여 조직의 리포지토리에 있는 모든 비밀을 검사합니다. 조직 소유자와 리포지토리 관리자는 검색된 모든 비밀에 대해 경고를 받고 비밀이 검색된 리포지토리에서 경고를 검토할 수 있습니다. {% data variables.product.prodname_secret_scanning %} 경고를 보는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}이 경고 관리](/code-security/secret-security/managing-alerts-from-secret-scanning)"를 참조하세요.

## 엔터프라이즈 계정에 대한 사용자 지정 패턴 정의

{% ifversion fpt or ghec or ghes %}

사용자 지정 패턴을 정의하려면 먼저 비밀 검사를 엔터프라이즈 계정에 사용하도록 설정해야 합니다. 자세한 내용은 "[엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %} 사용]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)"을 참조하세요.

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **참고:**
- 엔터프라이즈 수준에서 사용자 지정 패턴의 작성자만 패턴을 편집하고 시험 실행에서 사용할 수 있습니다. 
- 엔터프라이즈 소유자는 액세스 권한이 있는 리포지토리에서만 시험 실행을 사용할 수 있으며, 엔터프라이즈 소유자가 반드시 엔터프라이즈 내의 모든 조직 또는 리포지토리에 액세스할 수 있는 것은 아닙니다.
{% else %} **참고:** 시험 실행 기능이 없으므로 전체 엔터프라이즈에 대해 정의하기 전에 리포지토리에서 사용자 지정 패턴을 테스트하는 것이 좋습니다. 이렇게 하면 과도한 가양성 {% data variables.product.prodname_secret_scanning %} 경고를 만들지 않도록 방지할 수 있습니다.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. "코드 보안 및 분석"에서 **보안 기능을** 클릭합니다. {% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %} {% endif %}
1. "비밀 검사 사용자 지정 패턴"에서 **새 패턴을** 클릭합니다.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. 새 사용자 지정 패턴을 테스트할 준비가 되면 경고를 만들지 않고 엔터프라이즈에서 일치 항목을 식별하기 위해 **저장 및 시험 실행** 을 클릭합니다.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

패턴이 만들어지면 {% data variables.product.prodname_secret_scanning %}에서 모든 분기의 전체 Git 기록을 포함하여 {% data variables.product.prodname_GH_advanced_security %}가 사용하도록 설정된 엔터프라이즈 조직 내의 리포지토리에 있는 모든 비밀을 검사합니다. 조직 소유자와 리포지토리 관리자는 검색된 모든 비밀에 대해 경고를 받고 비밀이 검색된 리포지토리에서 경고를 검토할 수 있습니다. {% data variables.product.prodname_secret_scanning %} 경고를 보는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}이 경고 관리](/code-security/secret-security/managing-alerts-from-secret-scanning)"를 참조하세요.

## 사용자 지정 패턴 편집

사용자 지정 패턴에 대한 변경 내용을 저장하면 이전 버전의 패턴을 사용하여 만든 모든 {% data variables.product.prodname_secret_scanning %} 경고가 종료됩니다.
1. 사용자 지정 패턴을 만든 위치로 이동합니다. 사용자 지정 패턴은 리포지토리, 조직 또는 엔터프라이즈 계정에서 만들 수 있습니다.
   * 리포지토리 또는 조직의 경우 사용자 지정 패턴을 만든 리포지토리 또는 조직에 대한 "보안 및 분석" 설정을 표시합니다. 자세한 내용은 위의 "[리포지토리에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-a-repository)" 또는 "[조직에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-an-organization)"를 참조하세요.
   * 엔터프라이즈의 경우 "정책" 아래에서 "고급 보안" 영역을 표시한 다음, **보안 기능** 을 클릭합니다. 자세한 내용은 위의 "[엔터프라이즈 계정에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-an-enterprise-account)"를 참조하세요.
2. "{% data variables.product.prodname_secret_scanning_caps %}" 아래에서 편집하려는 사용자 지정 패턴의 오른쪽에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. 편집한 사용자 지정 패턴을 테스트할 준비가 되면 경고를 만들지 않고 일치 항목을 식별하기 위해 **저장 및 시험 실행** 을 클릭합니다.
{%- endif %}
4. 변경 내용이 검토되고 테스트되었으면 **변경 내용 저장** 을 클릭합니다.

## 사용자 지정 패턴 제거

1. 사용자 지정 패턴을 만든 위치로 이동합니다. 사용자 지정 패턴은 리포지토리, 조직 또는 엔터프라이즈 계정에서 만들 수 있습니다.

   * 리포지토리 또는 조직의 경우 사용자 지정 패턴을 만든 리포지토리 또는 조직에 대한 "보안 및 분석" 설정을 표시합니다. 자세한 내용은 위의 "[리포지토리에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-a-repository)" 또는 "[조직에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-an-organization)"를 참조하세요.
   * 엔터프라이즈의 경우 "정책" 아래에서 "고급 보안" 영역을 표시한 다음, **보안 기능** 을 클릭합니다.  자세한 내용은 위의 "[엔터프라이즈 계정에 대한 사용자 지정 패턴 정의](#defining-a-custom-pattern-for-an-enterprise-account)"를 참조하세요.
1. 제거하려는 사용자 지정 패턴의 오른쪽에서 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
1. 확인을 검토하고 사용자 지정 패턴과 관련된 열린 경고를 처리하는 방법을 선택합니다.
1. **예, 이 패턴을 삭제합니다.** 를 클릭합니다.

   ![사용자 지정 {% data variables.product.prodname_secret_scanning %} 패턴 삭제 확인 ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
