---
title: 엔터프라이즈 정책 정보
intro: 엔터프라이즈 정책을 사용하면 엔터프라이즈가 소유한 모든 조직에 대한 정책을 관리할 수 있습니다.
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: 041b763ad0b76d10161bab9a32df1ec0447a87d1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098749'
---
비즈니스 규칙 및 규정 준수를 적용하는 데 도움이 되도록 정책은 엔터프라이즈 계정이 소유한 모든 조직에 대해 단일 관리 지점을 제공합니다. 

{% data reusables.enterprise.about-policies %}

예를 들어 “기본 권한” 정책을 사용하면 조직 소유자가 조직에 대해 “기본 사용 권한” 정책을 구성하도록 허용하거나 엔터프라이즈 내의 모든 조직에 대해 “읽기”와 같은 특정 기본 사용 권한 수준을 적용할 수 있습니다.

기본적으로 엔터프라이즈 정책은 적용되지 않습니다. 비즈니스의 고유한 요구 사항을 충족하기 위해 적용해야 하는 정책을 식별하려면 리포지토리 관리 정책부터 시작하여 엔터프라이즈 계정에서 사용 가능한 모든 정책을 검토하는 것이 좋습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)”을 참조하세요.

엔터프라이즈 정책을 구성하는 동안 각 정책 변경의 영향을 이해하는 데 도움이 되도록 엔터프라이즈가 소유한 조직의 현재 구성을 볼 수 있습니다.

{% ifversion ghes %} 엔터프라이즈 내에서 표준을 적용하는 또 다른 방법은 {% 데이터 variables.location.product_location %}에서 실행되는 스크립트인 사전 수신 후크를 사용하여 품질 검사를 구현하는 것입니다. 자세한 내용은 “[사전 수신 후크를 사용하여 정책 적용](/admin/policies/enforcing-policy-with-pre-receive-hooks)”을 참조하세요.
{% endif %}

## 추가 참고 자료

- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”
