---
title: 새 릴리스로 업그레이드 정보
shortTitle: About upgrades
intro: '{% ifversion ghae %}{% data variables.product.product_name %}의 엔터프라이즈는 {% data variables.product.company_short %}에 의해 정기적으로 최신 기능 및 버그 수정으로 업데이트됩니다.{% else %}엔터프라이즈를 새로 릴리스된 버전으로 업그레이드하면 {% data variables.product.product_name %}에 대한 새로운 기능 및 버그 수정의 혜택을 누릴 수 있습니다.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108852'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %} {% data variables.product.prodname_ghe_managed %}는 완전 관리형 서비스이므로 {% data variables.product.company_short %}는 엔터프라이즈의 업그레이드 프로세스를 완료합니다.{% endif %}

기능 릴리스에는 새로운 기능 및 기능 업그레이드가 포함되며 일반적으로 분기별로 수행됩니다. {% ifversion ghae %}{% data variables.product.company_short %}는 엔터프라이즈를 최신 기능 릴리스로 업그레이드합니다. 엔터프라이즈에 대해 계획된 가동 중지 시간에 대한 사전 알림이 제공됩니다.{% endif %}

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 3.0부터 모든 기능 릴리스는 최소 하나의 릴리스 후보로 시작됩니다. 릴리스 후보는 전체 기능 집합과 함께 제안된 기능 릴리스입니다. 릴리스 후보에서 실제로 {% data variables.product.product_name %}를 사용하는 고객의 피드백을 통해서만 찾을 수 있는 버그나 문제가 있을 수 있습니다. 

릴리스 후보가 제공되는 즉시 릴리스 후보를 테스트하여 최신 기능에 조기에 액세스할 수 있습니다. 지원되는 버전에서 릴리스 후보로 업그레이드할 수 있으며 릴리스되면 릴리스 후보에서 이후 버전으로 업그레이드할 수 있습니다. 릴리스가 출시되는 즉시 릴리스 후보를 실행하는 모든 환경을 업그레이드해야 합니다. 자세한 내용은 [업그레이드 요구 사항](/admin/enterprise-management/upgrade-requirements)을 참조하세요.

릴리스 후보는 테스트 또는 스테이징 환경에 배포해야 합니다. 릴리스 후보를 테스트할 때 지원에 문의하여 피드백을 제공하세요. 자세한 내용은 “[{% data variables.contact.github_support %} 작업](/admin/enterprise-support)”을 참조하세요.

피드백을 사용하여 버그 수정 및 기타 필요한 변경 내용을 적용하고 안정적인 프로덕션 릴리스를 만들겠습니다. 각 새 릴리스 후보는 이전 버전에서 발견된 문제에 대한 버그 수정을 추가합니다. 릴리스가 광범위하게 채택될 준비가 되면 {% data variables.product.company_short %}는 안정적인 프로덕션 릴리스를 게시합니다.

{% endif %}

{% warning %}

**경고**: 새 기능 릴리스로 업그레이드하면 몇 시간 동안 가동이 중지되며 해당 기간 동안 어떤 사용자도 엔터프라이즈를 사용할 수 없습니다. 엔터프라이즈 설정 또는 REST API를 사용하여 전역 공지 배너를 게시하여 사용자에게 가동 중지 시간을 알릴 수 있습니다. 자세한 내용은 “[인스턴스에서 사용자 메시지 사용자 지정](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)” 및 “[{% data variables.product.prodname_enterprise %} 관리](/rest/reference/enterprise-admin#announcements)”를 참조하세요.

{% endwarning %}

{% ifversion ghes %}

핫 패치 및 버그 수정으로만 구성된 패치 릴리스는 더 자주 발생합니다. 패치 릴리스는 일반적으로 릴리스 후보 없이 처음 릴리스될 때 사용할 수 있습니다. 패치 릴리스로 업그레이드하려면 일반적으로 5분 미만의 가동 중지 시간이 필요합니다.

엔터프라이즈를 새 릴리스로 업그레이드하려면 “[릴리스 정보](/enterprise-server/admin/release-notes)” 및 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/admin/enterprise-management/upgrading-github-enterprise-server)”를 참조하세요. 최대 두 개의 릴리스 뒤에 있는 기능 릴리스에서만 업그레이드할 수 있으므로 [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)를 사용하여 현재 릴리스 버전에서 업그레이드 경로를 찾으세요.

{% endif %}

## 추가 참고 자료

- [ `github/roadmap` 리포지토리의 {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ){% ifversion ghae %}
- [ {% data variables.product.prodname_ghe_managed %} 릴리스 정보](/admin/release-notes) {% endif %}
