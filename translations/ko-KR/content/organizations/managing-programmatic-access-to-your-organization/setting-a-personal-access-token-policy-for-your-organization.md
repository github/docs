---
title: 조직에 대한 개인용 액세스 토큰 정책 설정
intro: '조직 소유자는 {% data variables.product.pat_v2 %}s 및 {% data variables.product.pat_v1_plural %}을(를) 허용할지 여부를 제어할 수 있으며 {% data variables.product.pat_v2 %}s에 대한 승인을 요구할 수 있습니다.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106471'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %}s에 의한 액세스 제한

조직 소유자는 {% data variables.product.pat_v2 %}s이(가) 조직 소유의 리소스에 액세스하지 못하도록 방지할 수 있습니다. {% data variables.product.pat_v2_caps %}s은(는) 여전히 조직 내에서 공용 리소스를 읽을 수 있습니다. 이 설정은 {% data variables.product.pat_v1_plural %}이 아닌 {% data variables.product.pat_v2 %}s의 액세스만 제어합니다. {% data variables.product.pat_v1_plural %}으로 액세스를 제한하는 방법에 대한 자세한 내용은 이 페이지의 "[{% data variables.product.pat_v1_plural %}으로 액세스 제한](#restricting-access-by-personal-access-tokens-classic)"을 참조하세요.

{% ifversion ghec or ghes or ghae %} 조직이 엔터프라이즈 소유이고 엔터프라이즈 소유자가 {% data variables.product.pat_v2 %}s의 액세스를 제한한 경우 조직의 정책을 재정의할 수 없습니다. 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.pat_generic %}s에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **설정을** 클릭합니다.
1. **{% data variables.product.pat_v2_caps %}s** 에서 요구 사항에 맞는 옵션을 선택합니다.
   - **{% data variables.product.pat_v2 %}s을(를) 통한 액세스 허용**: {% data variables.product.pat_v2_caps %}s는 조직 소유의 리소스에 액세스할 수 있습니다.
   - **{% data variables.product.pat_v2 %}s를 통한 액세스 제한**: {% data variables.product.pat_v2_caps %}s은(는) 조직 소유의 리소스에 액세스할 수 없습니다. {% data variables.product.pat_v2 %}s에서 만든 SSH 키는 계속 작동합니다.
1. **저장** 을 클릭합니다.

## {% data variables.product.pat_v2 %}s에 대한 승인 정책 적용

조직 소유자는 조직에 액세스할 수 있는 각 {% 데이터 variables.product.pat_v2 %}에 대한 승인을 요구할 수 있습니다. {% data variables.product.pat_v2_caps %}s은(는) 승인 없이 조직 내에서 공용 리소스를 읽을 수 있습니다. 조직 소유자가 만든 {% data variables.product.pat_v2_caps %}은(는) 승인이 필요하지 않습니다.

{% ifversion ghec or ghes or ghae %} 조직이 엔터프라이즈 소유이고 엔터프라이즈 소유자가 {% data variables.product.pat_v2 %}s에 대한 승인 정책을 설정한 경우 조직의 정책을 재정의할 수 없습니다. 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.pat_generic %}s에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% note %}

**참고**: {% data variables.product.pat_v1_plural %}이 아닌 {% data variables.product.pat_v2 %}s만 승인될 수 있습니다. 조직에서 {% data variables.product.pat_v1_plural %}의 액세스를 제한하지 않는 한 모든 {% data variables.product.pat_v1 %}는 사전 승인 없이 조직 리소스에 액세스할 수 있습니다. 자세한 내용은 이 페이지의 "[{% data variables.product.pat_v1_plural %}으로 액세스 제한](#restricting-access-by-personal-access-tokens-classic)"을 참조하세요.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **설정을** 클릭합니다.
1. **{% data variables.product.pat_v2 %}s의 승인 필요** 에서 요구 사항에 맞는 옵션을 선택합니다.
   - **관리자 승인 필요**: 조직 소유자는 조직에 액세스할 수 있는 각 {% data variables.product.pat_v2 %}을 승인해야 합니다. 조직 소유자가 만든 {% data variables.product.pat_v2_caps %}은(는) 승인이 필요하지 않습니다.
   - **관리자 승인 필요 없음**: 조직 구성원이 만든 {% data variables.product.pat_v2_caps %}s는 사전 승인 없이 조직의 리소스에 액세스할 수 있습니다.
1. **저장** 을 클릭합니다.

## {% data variables.product.pat_v1_plural %}으로 액세스 제한

조직 소유자는 {% data variables.product.pat_v1_plural %}이(가) 조직 소유의 리소스에 액세스하지 못하도록 방지할 수 있습니다. {% data variables.product.pat_v1_caps_plural %}은(는) 여전히 조직 내에서 공용 리소스를 읽을 수 있습니다. 이 설정은 {% data variables.product.pat_v2 %}s가 아니라 {% data variables.product.pat_v1_plural %}의 액세스만 제어합니다. {% data variables.product.pat_v2 %}s로 액세스를 제한하는 방법에 대한 자세한 내용은 이 페이지에서 "[{% data variables.product.pat_v2 %}s로 액세스 제한](#restricting-access-by-fine-grained-personal-access-tokens)"을 참조하세요.

{% ifversion ghec or ghes or ghae %} 조직이 엔터프라이즈 소유이고 엔터프라이즈 소유자가 {% data variables.product.pat_v1_plural %}의 액세스를 제한한 경우 조직의 정책을 재정의할 수 없습니다. 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.pat_generic %}s에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **설정을** 클릭합니다.
1. **{% data variables.product.pat_v1_caps %}** 에서 요구 사항에 맞는 옵션을 선택합니다.
   - **{% data variables.product.pat_v1_plural %}을(를) 통한 액세스 허용**: {% data variables.product.pat_v1_caps_plural %}는 조직 소유의 리소스에 액세스할 수 있습니다.
   - **{% data variables.product.pat_v1_plural %}을(를) 통한 액세스 제한**: {% data variables.product.pat_v1_caps_plural %}은(는) 조직 소유의 리소스에 액세스할 수 없습니다. {% data variables.product.pat_v1_plural %}에서 만든 SSH 키는 계속 작동합니다.
1. **저장** 을 클릭합니다.
