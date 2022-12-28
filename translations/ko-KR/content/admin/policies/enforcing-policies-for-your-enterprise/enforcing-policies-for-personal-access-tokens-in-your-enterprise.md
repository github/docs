---
title: 엔터프라이즈에서 개인용 액세스 토큰에 대한 정책 적용
intro: '엔터프라이즈 소유자는 {% data variables.product.pat_v2 %}s 및 {% data variables.product.pat_v1_plural %}을(를) 허용할지 여부를 제어할 수 있으며 {% data variables.product.pat_v2 %}s에 대한 승인이 필요할 수 있습니다.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107007'
---
{% note %}

**참고**: {% data reusables.user-settings.pat-v2-beta %}

베타 중에 엔터프라이즈는 {% data variables.product.pat_v2 %}s에 옵트인해야 합니다. 엔터프라이즈에서 아직 옵트인하지 않은 경우 아래 단계를 수행할 때 옵트인하고 정책을 설정하라는 메시지가 표시됩니다.

엔터프라이즈가 {% data variables.product.pat_v2 %}s에 옵트인하지 않은 경우에도 엔터프라이즈가 소유한 조직은 여전히 옵트인할 수 있습니다. {% data variables.product.prodname_emus %}를 포함한 모든 사용자는 엔터프라이즈가 {% data variables.product.pat_v2 %}s에 옵트인하지 않은 경우에도 사용자가 소유한 리소스(예: 계정으로 만든 리포지토리)에 액세스할 수 있는 {% data variables.product.pat_v2 %}s을(를) 만들 수 있습니다.

{% endnote %}

## {% data variables.product.pat_v2 %}s으로 액세스 제한

엔터프라이즈 소유자는 {% 데이터 variables.product.pat_v2 %}s이(가) 엔터프라이즈가 소유한 프라이빗 및 내부 리소스에 액세스하지 못하도록 방지할 수 있습니다. {% data variables.product.pat_v2_caps %}s은(는) 조직 내의 공용 리소스에 계속 액세스할 수 있습니다. 이 설정은 {% data variables.product.pat_v2 %}이 아닌 {% data variables.product.pat_v1_plural %}의 액세스만 제어합니다. {% data variables.product.pat_v1_plural %}으로 액세스를 제한하는 방법에 대한 자세한 내용은 이 페이지에서 "[{% data variables.product.pat_v1_plural %}으로 액세스 제한](#restricting-access-by-personal-access-tokens-classic)"을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **정책** 에서 **조직을** 클릭합니다.
1. **{% data variables.product.pat_v2 %}s를 통한 액세스 제한** 에서 요구 사항을 충족하는 옵션을 선택합니다.
   - **조직에서 액세스 요구 사항을 구성할** 수 있도록 허용: 엔터프라이즈가 소유한 각 조직에서 {% data variables.product.pat_v2 %}s로 액세스를 제한할지 여부를 결정할 수 있습니다.
   - **{% data variables.product.pat_v2 %}s를 통한 액세스 제한**: {% data variables.product.pat_v2_caps %}s는 엔터프라이즈가 소유한 조직에 액세스할 수 없습니다. {% data variables.product.pat_v2 %}s에서 만든 SSH 키는 계속 작동합니다. 조직은 이 설정을 재정의할 수 없습니다.
   - **{% data variables.product.pat_v2 %}s을(를) 통해 액세스 허용**: {% data variables.product.pat_v2_caps %}s는 엔터프라이즈가 소유한 조직에 액세스할 수 있습니다. 조직은 이 설정을 재정의할 수 없습니다.
1. **저장** 을 클릭합니다.

## {% data variables.product.pat_v2 %}s에 대한 승인 정책 적용

엔터프라이즈 소유자는 엔터프라이즈가 소유한 모든 조직이 조직에 액세스할 수 있는 각 {% 데이터 variables.product.pat_v2 %}을 승인하도록 요구할 수 있습니다. {% data variables.product.pat_v2_caps %}s은(는) 승인 없이 조직 내에서 공용 리소스를 읽을 수 있습니다. 반대로 엔터프라이즈 소유자는 {% data variables.product.pat_v2 %}s이(가) 사전 승인 없이 엔터프라이즈의 조직에 액세스하도록 허용할 수 있습니다. 엔터프라이즈 소유자는 엔터프라이즈의 각 조직에서 자체 승인 설정을 선택하도록 할 수도 있습니다.

{% note %}

**참고**: {% data variables.product.pat_v1_plural %}이 아닌 {% data variables.product.pat_v2 %}s만 승인될 수 있습니다. 조직 또는 엔터프라이즈가 {% data variables.product.pat_v1_plural %}의 액세스를 제한하지 않는 한 모든 {% 데이터 variables.product.pat_v1 %}은 사전 승인 없이 조직 리소스에 액세스할 수 있습니다. {% data variables.product.pat_v1_plural %}을(를) 제한하는 방법에 대한 자세한 내용은 이 페이지의 "[{% data variables.product.pat_v1_plural %}으로 액세스 제한](#restricting-access-by-personal-access-tokens-classic)" 및 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)"을 참조하세요.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **정책** 에서 **조직을** 클릭합니다.
1. **{% data variables.product.pat_v2 %}s의 승인 필요** 에서 요구 사항을 충족하는 옵션을 선택합니다.
   - **조직에서 승인 요구 사항을 구성할** 수 있도록 허용: 엔터프라이즈가 소유한 각 조직에서 조직에 액세스할 수 있는 {% data variables.product.pat_v2 %}의 승인을 요구할지 여부를 결정할 수 있습니다.
   - **조직이 승인 흐름을 사용하도록 요구**: 엔터프라이즈가 소유한 모든 조직은 조직에 액세스할 수 있는 각 {% 데이터 variables.product.pat_v2 %}을 승인해야 합니다. 조직 소유자가 만든 {% 데이터 variables.product.pat_v2_caps %}은(는) 승인이 필요하지 않습니다. 조직은 이 설정을 재정의할 수 없습니다.
   - **모든 조직에서 승인 흐름 사용 안 함**: 조직 구성원이 만든 {% 데이터 variables.product.pat_v2_caps %}은 사전 승인 없이 엔터프라이즈가 소유한 조직에 액세스할 수 있습니다. 조직은 이 설정을 재정의할 수 없습니다.
1. **저장** 을 클릭합니다.

## {% data variables.product.pat_v1_plural %}으로 액세스 제한

엔터프라이즈 소유자는 {% data variables.product.pat_v1_plural %}이(가) 엔터프라이즈가 소유한 엔터프라이즈 및 조직에 액세스하지 못하도록 방지할 수 있습니다. {% data variables.product.pat_v1_caps_plural %}은(는) 여전히 조직 내의 공용 리소스에 액세스할 수 있습니다. 이 설정은 {% data variables.product.pat_v2 %}s이 아닌 {% data variables.product.pat_v1_plural %}의 액세스만 제어합니다. {% data variables.product.pat_v2 %}s로 액세스를 제한하는 방법에 대한 자세한 내용은 이 페이지에서 "[{% data variables.product.pat_v2 %}s로 액세스 제한](#restricting-access-by-fine-grained-personal-access-tokens)"을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. {% octicon "law" aria-label="The law icon" %} **정책** 에서 **조직을** 클릭합니다.
1. **{% data variables.product.pat_v1_plural %}이(가) 조직에 액세스하지 못하도록 제한에서** 요구 사항을 충족하는 옵션을 선택합니다.
   - **조직에서 {% data variables.product.pat_v1_plural %} 액세스 요구 사항을 구성할** 수 있도록 허용: 엔터프라이즈가 소유한 각 조직은 {% data variables.product.pat_v1_plural %}으로 액세스를 제한할지 여부를 결정할 수 있습니다.
   - **{% data variables.product.pat_v1_plural %}을(를) 통한 액세스 제한**: {% data variables.product.pat_v1_caps_plural %}은(는) 엔터프라이즈 또는 엔터프라이즈가 소유한 조직에 액세스할 수 없습니다. {% data variables.product.pat_v1_plural %}에서 만든 SSH 키는 계속 작동합니다. 조직은 이 설정을 재정의할 수 없습니다.
   - **{% data variables.product.pat_v1_plural %}을 통해 액세스 허용**: {% data variables.product.pat_v1_caps_plural %}는 엔터프라이즈가 소유한 엔터프라이즈 및 조직에 액세스할 수 있습니다. 조직은 이 설정을 재정의할 수 없습니다.
1. **저장** 을 클릭합니다.
