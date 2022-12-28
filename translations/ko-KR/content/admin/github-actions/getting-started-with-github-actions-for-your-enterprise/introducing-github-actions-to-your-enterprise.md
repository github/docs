---
title: 엔터프라이즈에 GitHub Actions 도입
shortTitle: Introduce Actions
intro: '엔터프라이즈에서 {% data variables.product.prodname_actions %}를 롤아웃하는 방법을 계획할 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191864'
---
## 엔터프라이즈용 {% data variables.product.prodname_actions %} 정보

{% data reusables.actions.about-actions %} {% data variables.product.prodname_actions %}를 사용하면 엔터프라이즈에서 테스트 및 배포와 같은 소프트웨어 개발 워크플로를 자동화, 사용자 지정 및 실행할 수 있습니다. 자세한 내용은 “[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”를 참조하세요.

![자체 호스트 실행기에서 실행되는 작업의 다이어그램](/assets/images/help/images/actions-enterprise-overview.png)

대기업의 경우 {% data variables.product.prodname_actions %}를 도입하기 전에 먼저 채택을 계획하고 엔터프라이즈에서 {% data variables.product.prodname_actions %}를 사용하여 고유한 요구 사항을 가장 잘 지원할 수 있는 방법을 결정해야 합니다.

## 거버넌스 및 규정 준수

엔터프라이즈의 {% data variables.product.prodname_actions %} 사용을 관리하고 규정 준수 의무를 충족하기 위한 계획을 수립해야 합니다.

개발자가 어떤 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}를 사용하도록 허용할지 결정합니다. {% ifversion ghes %}먼저, 인스턴스 외부에서 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}에 대한 액세스하도록 할지 여부를 결정합니다. {% data reusables.actions.access-actions-on-dotcom %} 자세한 내용은 “[엔터프라이즈에서 작업 사용 정보](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)”를 참조하세요.

그런 다음{% else %}먼저,{% endif %} 타사 작업 {% ifversion actions-workflow-policy %}및 {% data variables.product.company_short %}에서 만들지 않은 재사용 가능한 워크플로{% endif %}를 허용할지 여부를 결정합니다. 리포지토리, 조직, 엔터프라이즈 수준에서 실행하도록 허용된 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}를 구성하고 {% data variables.product.company_short %}에서 만든 작업만 허용하도록 선택할 수 있습니다. 타사 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용하는 경우 확인된 작성자가 만든 작업 또는 특정 작업 목록{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}로 허용된 작업을 제한할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)”, “[조직에 대해 {% data variables.product.prodname_actions %}를 사용하지 않도록 설정 또는 제한](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)” 및 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)을 참조하세요.

{% ifversion actions-workflow-policy %} ![{% data variables.product.prodname_actions %} 정책 스크린샷](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![{% data variables.product.prodname_actions %} 정책 스크린샷](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %} 리포지토리, 조직 또는 엔터프라이즈에서 일관된 배포를 적용하려면 OIDC(OpenID Connect)를 재사용 가능한 워크플로와 결합하는 것이 좋습니다. 재사용 가능한 워크플로를 기반으로 클라우드 역할에 대한 신뢰 조건을 정의하여 이 작업을 수행할 수 있습니다. 자세한 내용은 “[재사용 가능한 워크플로에서 OpenID Connect 사용](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)”을 참조하세요.
{% endif %}

엔터프라이즈에 대한 감사 로그에서 {% data variables.product.prodname_actions %}와 관련된 활동에 대한 정보에 액세스할 수 있습니다. 비즈니스 요구 사항에 따라 감사 로그 데이터가 보존되는 기간보다 더 오래 이 정보를 보존해야 하는 경우 {% data variables.product.prodname_dotcom %} 외부에서 데이터를 내보내고 저장하는 방법을 계획합니다. 자세한 내용은 {% ifversion ghec %}“[엔터프라이즈에 대한 감사 로그 작업 내보내기](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)” 및 “[엔터프라이즈에 대한 감사 로그 스트리밍](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”을 참조하세요.{% else %}{% ifversion audit-log-streaming %}“[엔터프라이즈에 대한 감사 로그 스트리밍](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)” 및 {% endif %}“[로그 전달](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”을 참조하세요.{% endif %}

![이벤트 로그 항목](/assets/images/help/repository/audit-log-entries.png)

## 보안

{% data variables.product.prodname_actions %}에 대한 보안 강화 접근 방식을 계획해야 합니다.

### 보안 강화 개별 워크플로 및 리포지토리

엔터프라이즈 내에서 {% data variables.product.prodname_actions %} 기능을 사용하는 사용자에게 적절한 보안 사례를 적용하기 위한 계획을 수립합니다. 이러한 사례에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions)”를 참조하세요.

보안을 위해 이미 평가된 워크플로를 다시 사용하도록 권장할 수도 있습니다. 자세한 내용은 “[내부 소싱](#innersourcing)”을 참조하세요.

### 비밀 및 배포 리소스에 대한 액세스 보호

비밀을 저장할 위치를 계획해야 합니다. {% data variables.product.prodname_dotcom %}에 비밀을 저장하는 것이 좋지만 클라우드 공급자에 비밀을 저장하도록 선택할 수 있습니다.

{% data variables.product.prodname_dotcom %}에서 리포지토리 또는 조직 수준에서 비밀을 저장할 수 있습니다. 리포지토리 수준의 비밀은 프로덕션 또는 테스트와 같은 특정 환경의 워크플로로 제한될 수 있습니다. 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

![비밀 목록 스크린샷](/assets/images/help/settings/actions-org-secrets-list.png) 중요한 환경에 대해 수동 승인 보호를 추가할지 고려해야 합니다. 따라서 환경의 비밀에 대한 액세스 권한을 얻기 전에 워크플로를 허용해야 합니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”을 참조하세요.

### 타사 작업에 대한 보안 고려 사항

{% data variables.product.prodname_dotcom %}의 타사 리포지토리에서 작업을 소싱할 때 상당한 위험이 있습니다. 타사 작업을 허용하는 경우 전체 커밋 SHA에 작업 고정과 같은 모범 사례를 따르도록 팀에 권장하는 내부 지침을 만들어야 합니다. 자세한 내용은 “[타사 작업 사용](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)”을 참조하세요.

## 내부 소싱

엔터프라이즈에서 {% data variables.product.prodname_actions %}의 기능을 사용하여 자동화를 내부 소싱하는 방법에 대해 생각해 보세요. 내부 소싱은 오픈 소스 방법론의 이점을 내부 소프트웨어 개발 주기에 통합하는 방법입니다. 자세한 내용은 {% data variables.product.company_short %} 리소스의 [내부 소스 소개](https://resources.github.com/whitepapers/introduction-to-innersource/)를 참조하세요.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %} 재사용 가능한 워크플로를 사용하면 팀이 다른 워크플로에서 하나의 워크플로를 호출하여 정확한 중복을 방지할 수 있습니다. 재사용 가능한 워크플로는 팀이 잘 설계되고 이미 테스트된 워크플로를 사용하도록 지원하여 모범 사례를 적용하도록 촉진합니다. 자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.
{% endif %}

새 워크플로를 빌드하는 개발자를 위한 시작 위치를 제공하려면 시작 워크플로를 사용할 수 있습니다. 이렇게 하면 개발자에게 시간을 절약할 수 있지만 엔터프라이즈 전체에서 일관성과 모범 사례를 촉진할 수 있습니다. 자세한 내용은 “[조직의 시작 워크플로 만들기](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”를 참조하세요.

{% ifversion not internal-actions %} 워크플로 개발자가 프라이빗 리포지토리에 저장된 작업을 사용하려고 할 때마다 먼저 리포지토리를 복제하도록 워크플로를 구성해야 합니다. 복제해야 하는 리포지토리 수를 줄이려면 일반적으로 사용되는 작업을 단일 리포지토리에서 그룹화하는 것이 좋습니다. 자세한 내용은 “[사용자 지정 작업 정보](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)”를 참조하세요.
{% endif %}

## 리소스 관리

{% data variables.product.prodname_actions %}를 사용하는 데 필요한 리소스를 관리하는 방법을 계획해야 합니다.

{% ifversion ghes %}
### 하드웨어 요구 사항

{% data variables.location.product_location %}에 대한 CPU 및 메모리 리소스를 업그레이드하여 성능 저하를 일으키지 않고 {% data variables.product.prodname_actions %}의 부하를 처리해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작하기](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)”를 참조하세요.
{% endif %}

### 실행기

{% data variables.product.prodname_actions %} 워크플로에는 실행기가 필요합니다.{% ifversion ghec %} {% data variables.product.prodname_dotcom %} 호스트 실행기 또는 자체 호스트 실행기를 사용하도록 선택할 수 있습니다. {% data variables.product.prodname_dotcom %} 호스트 실행기는 대신 유지 관리 및 업그레이드를 처리하는 {% data variables.product.company_short %}에서 관리되므로 편리합니다. 그러나 방화벽 뒤에 있는 리소스에 액세스하는 워크플로를 실행해야 하거나 실행기 컴퓨터의 리소스, 구성 또는 지리적 위치를 더 정확하게 제어하려는 경우 자체 호스트 실행기를 사용하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 호스트 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)” 및 “[셀프 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”{% else %}를 참조하세요. 고유한 컴퓨터에 {% data variables.product.prodname_actions %} 셀프 호스트 실행기 애플리케이션을 설치하여 고유한 실행기를 호스트해야 합니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.{% endif %}

{% ifversion ghec %}자체 호스트 실행기를 사용하는 경우 물리적 컴퓨터, 가상 머신 또는 컨테이너를 사용할지 여부를 결정해야 합니다.{% else %}자체 호스트 실행기에 물리적 컴퓨터, 가상 머신 또는 컨테이너를 사용할지 여부를 결정합니다.{% endif %} 물리적 컴퓨터는 이전 작업의 나머지 부분을 유지하므로 각 작업에 대해 새 이미지를 사용하거나 각 작업이 실행된 후 컴퓨터를 정리하지 않는 한 가상 머신도 유지됩니다. 컨테이너를 선택하는 경우 실행기 자동 업데이트가 컨테이너를 종료하므로 워크플로가 실패할 수 있다는 점을 인지해야 합니다. 자동 업데이트를 방지하거나 컨테이너를 종료하는 명령을 건너뛰어 이 문제에 대한 솔루션을 마련해야 합니다.

또한 각 실행기를 추가할 위치를 결정해야 합니다. 자체 호스트 실행기를 개별 리포지토리에 추가하거나 전체 조직 또는 전체 엔터프라이즈에서 실행기를 사용하도록 할 수 있습니다. 조직 또는 엔터프라이즈 수준에서 실행기를 추가하면 실행기를 공유할 수 있으므로 실행기 인프라의 크기가 줄어들 수 있습니다. 정책을 사용하여 특정 리포지토리 또는 조직에 실행기 그룹을 할당하여 조직 및 엔터프라이즈 수준에서 자체 호스트 실행기로 액세스를 제한할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)” 및 “[그룹을 사용하여 자체 호스트 실행기 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.

{% ifversion ghec or ghes %} 자동 크기 조정을 사용하여 사용 가능한 자체 호스팅 실행기 수를 자동으로 늘리거나 줄이는 것이 좋습니다. 자세한 내용은 “[자체 호스팅 실행기 자동 스케일링](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)”을 참조하세요.
{% endif %}

마지막으로 자체 호스트 실행기를 위한 보안 강화를 고려해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”를 참조하세요.

### Storage

{% data reusables.actions.about-artifacts %} 자세한 내용은 “[워크플로 데이터를 아티팩트로 저장](/actions/advanced-guides/storing-workflow-data-as-artifacts)”을 참조하세요. 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %}에는 워크플로 실행 속도를 높이기 위해 종속성을 캐시하는 데 사용할 수 있는 캐싱 시스템도 있습니다. 자세한 내용은 "[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)"을 참조하세요.{% endif %}

{% ifversion ghes %} 워크플로 아티팩트{% ifversion actions-caching %}, 캐시,{% endif %}, 기타 워크플로 로그의 경우 외부 Blob Storage를 구성해야 합니다. 엔터프라이즈에서 사용할 지원되는 스토리지 공급자를 결정합니다. 자세한 내용은 “[{% data variables.product.product_name %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)”을 참조하세요.
{% endif %}

{% ifversion ghec or ghes %}

{% data variables.product.prodname_actions %}에 대한 정책 설정을 사용하여 워크플로 아티팩트{% ifversion actions-caching %}, 캐시,{% endif %}, 로그 보존의 스토리지를 사용자 지정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”을 참조하세요.

{% endif %}

{% ifversion ghec %} 일부 스토리지는 구독에 포함되지만 추가 스토리지는 청구서에 영향을 줍니다. 이 비용에 대한 계획을 수립해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요.
{% endif %}

## 사용량 추적

워크플로 실행 빈도, 통과 및 실패하는 워크플로 실행 횟수, 어떤 리포지토리가 어떤 워크플로를 사용하는지에 대한 정보 등 엔터프라이즈의 {% data variables.product.prodname_actions %} 사용을 추적하는 계획을 수립하는 것이 좋습니다.

{% ifversion ghec %} 청구 설정을 통해 엔터프라이즈의 각 조직에 대해 {% data variables.product.prodname_actions %}의 스토리지 및 데이터 전송 사용에 대한 기본 세부 정보를 볼 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 사용량 보기](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)”를 참조하세요.

자세한 사용량 현황 데이터를 보려면 {% else %}{% endif %}웹후크를 사용하여 워크플로 작업 및 워크플로 실행에 대한 정보를 구독할 수 있습니다. 자세한 내용은 “[웹후크 정보](/developers/webhooks-and-events/webhooks/about-webhooks)”를 참조하세요.

엔터프라이즈에서 이러한 웹후크의 정보를 데이터 보관 시스템으로 전달할 수 있는 방법에 대한 계획을 수립합니다. {% data variables.product.prodname_dotcom %}에서 웹후크 데이터를 수집 및 처리하는 오픈 소스 도구인 “CEDAR.GitHub.Collector” 사용을 고려할 수 있습니다. 자세한 내용은 [`Microsoft/CEDAR.GitHub.Collector` 리포지토리](https://github.com/microsoft/CEDAR.GitHub.Collector/)

또한 팀이 보관 시스템에서 필요한 데이터를 가져올 수 있도록 하는 방법도 계획해야 합니다.
