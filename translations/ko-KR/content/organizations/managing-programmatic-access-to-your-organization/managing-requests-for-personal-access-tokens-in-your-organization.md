---
title: 조직에서 개인용 액세스 토큰에 대한 요청 관리
intro: '조직 소유자는 조직에 대한 액세스를 요청하는 {% data variables.product.pat_v2 %}s을(를) 승인하거나 거부할 수 있습니다.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131387'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %} 요청 정보

조직 구성원이 조직이 소유한 리소스에 액세스하기 위해 {% 데이터 variables.product.pat_v2 %}을(를) 만들 때 조직에서 {% data variables.product.pat_v2 %}에 대한 승인이 필요한 경우 조직 소유자는 토큰을 승인해야 공개되지 않은 리소스에 액세스하는 데 사용할 수 있습니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% data variables.product.company_short %}은 승인을 기다리는 모든 {% data variables.product.pat_v2 %}s에 대한 일일 전자 메일을 조직 소유자에게 알립니다. 토큰이 거부되거나 승인되면 토큰을 만든 사용자는 이메일 알림을 받게 됩니다.

{% note %}

**참고**: {% data variables.product.pat_v1_plural %}이 아닌 {% data variables.product.pat_v2 %}s만 승인될 수 있습니다. 조직이 {% data variables.product.pat_v1_plural %}의 액세스를 제한하지 않는 한 모든 {% 데이터 variables.product.pat_v1 %}은 사전 승인 없이 조직 리소스에 액세스할 수 있습니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endnote %}

## {% data variables.product.pat_v2 %} 요청 관리

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 아래에서 **보류 중인 요청을** 클릭합니다. 조직에 대한 승인이 보류 중인 토큰이 있으면 해당 토큰이 표시됩니다.
1. 승인하거나 거부할 토큰의 이름을 클릭합니다.
1. 토큰이 요청하는 액세스 및 권한을 검토합니다.
1. 토큰에 조직에 대한 액세스 권한을 부여하려면 **승인을** 클릭합니다. 조직에 대한 토큰 액세스를 거부하려면 **거부** 를 클릭합니다.
1. 요청을 거부한 경우 확인 상자에 토큰을 거부한 이유를 선택적으로 입력합니다. 이러한 이유는 토큰 소유자에게 전송되는 알림에서 공유됩니다. 그런 다음 **거부** 를 클릭합니다.

또는 한 번에 여러 토큰을 승인하거나 거부할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 아래에서 **보류 중인 요청을** 클릭합니다. 조직에 대한 승인이 보류 중인 토큰이 있으면 해당 토큰이 표시됩니다.
{% data reusables.user-settings.patv2-filters %}
1. 승인하거나 거부할 각 토큰을 선택합니다.
1. **선택한 요청...** 드롭다운 메뉴를 선택하고 **승인...** 또는 **거부...** 를 클릭합니다.
