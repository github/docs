---
title: 엔터프라이즈의 자체 호스트 실행기 시작
shortTitle: Self-hosted runners
intro: '개발자가 {% data variables.product.prodname_actions %}를 사용하여 워크플로 자동화를 시작할 수 있도록 엔터프라이즈용 실행기 컴퓨터를 구성할 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106623'
---
## {% data variables.product.prodname_actions %}를 위한 자체 호스트 실행기 정보

{% data reusables.actions.about-actions-for-enterprises %} 자세한 내용은 “[엔터프라이즈를 위한 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”를 참조하세요.

{% data variables.product.prodname_actions %}를 사용하면 개발자는 작업이라는 개별 작업을 작성하고 결합하여 사용자 지정 워크플로를 만들 수 있습니다. {% ifversion ghes or ghae %} {% ifversion ghae %}엔터프라이즈{% elsif ghes %} {% data variables.location.product_location %}{% endif %}에 {% data variables.product.prodname_actions %}을(를) 사용하도록 설정하려면 작업을 실행하려면 하나 이상의 컴퓨터를 호스트해야 합니다. {% endif %} {% ifversion ghec %} 사용자 고유의 실행기 컴퓨터를 호스트하여 작업을 실행할 수 있으며, 이 {% elsif ghes or ghae %}이{% endif %} 컴퓨터를 자체 호스팅 실행기라고 합니다. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}모든{% elsif ghes or ghae %}자체 호스트{% endif %} 실행기는 Linux, Windows 또는 macOS를 실행할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

{% ifversion ghec %}

또는 {% data variables.product.company_short %}가 호스트하는 실행기 컴퓨터를 사용할 수 있습니다. {% data variables.product.company_short %} 호스트 실행기는 이 가이드에서 다루는 범위를 벗어납니다. 자세한 내용은 “[{% data variables.product.company_short %} 호스트 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)”를 참조하세요.

{% endif %}

이 가이드에서는 엔터프라이즈의 {% data variables.product.prodname_actions %}를 위한 자체 호스트 실행기에 중앙 집중식 관리 접근 방식을 적용하는 방법을 보여 줍니다. 이 단원에서는 다음 작업을 완료합니다.

1. 엔터프라이즈 내에서 실행할 수 있는 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 제한하도록 제한된 정책을 구성합니다.
1. 엔터프라이즈를 위한 자체 호스트 실행기 배포
1. 엔터프라이즈에 사용할 수 있는 실행기에 대한 액세스 권한을 관리하는 그룹 만들기
1. 필요에 따라 실행기를 사용할 수 있는 리포지토리를 추가로 제한합니다.
1. 필요에 따라 자체 호스팅 실행기의 크기를 자동으로 조정하는 사용자 지정 도구를 빌드합니다.

또한 자체 호스트 실행기를 모니터링하고 보호하는 방법,{% ifversion ghes or ghae %} {% data variables.product.prodname_dotcom_the_website %}에서 작업에 액세스하는 방법{% endif %} 및 실행기 컴퓨터에서 소프트웨어를 사용자 지정하는 방법에 대한 자세한 내용을 찾을 수 있습니다.

가이드를 완료하면 {% ifversion ghec or ghae %}엔터프라이즈 구성원{% elsif ghes %}{% data variables.location.product_location %}{% endif %} 사용자는 자체 호스팅 실행기 컴퓨터에서 {% data variables.product.prodname_actions %}에서 워크플로 작업을 실행할 수 있습니다.

## 필수 조건

{% data reusables.actions.self-hosted-runners-prerequisites %}

- 엔터프라이즈는 하나 이상의 조직을 소유해야 합니다. 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)” 및 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

## 1. {% data variables.product.prodname_actions %}에 대한 정책 구성

먼저 모든 조직에 대해 {% data variables.product.prodname_actions %}을(를) 사용하도록 설정하고 {% data variables.product.product_name %}{% data variables.location.product_location %}{% endif %}에서 엔터프라이즈 내에서 {% ifversion ghec or ghae%}을(를) 실행할 수 있는 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 제한하는 정책을 구성합니다. 필요에 따라 조직 소유자는 각 조직에 대해 이러한 정책을 추가로 제한할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. “정책”에서 **모든 조직에 대해 사용하도록 설정** 을 선택합니다.
   
   ![{% data variables.product.prodname_actions %}에 대한 “모든 조직에 대해 사용하도록 설정” 정책 스크린샷](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. {% data reusables.actions.policy-label-for-select-actions-workflows %} 및 **GitHub에서 만든 작업 허용** 을 선택하여 로컬 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}와 {% data variables.product.company_short %}에서 만든 작업을 허용합니다.

   {% ifversion actions-workflow-policy %} ![{% data variables.product.prodname_actions %}에 대한 “작업 선택 허용” 및 “{% data variables.product.company_short %}에서 만든 작업 허용” 스크린샷 ](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![{% data variables.product.prodname_actions %}에 대한 “작업 선택 허용” 및 “{% data variables.product.company_short %}에서 만든 작업 허용” 스크린샷](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% ifversion ghec or ghae %}엔터프라이즈 구성원{% elsif ghes %}{% data variables.location.product_location %}{% endif %}의 사용자에게 사용할 수 있는 작업을 제한하도록 추가 정책을 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)”을 참조하세요.

## 2. 엔터프라이즈를 위한 자체 호스트 실행기 배포

다음으로, 엔터프라이즈에 자체 호스트 실행기를 추가합니다. {% data variables.product.product_name %}에서 실행기 컴퓨터에 필요한 소프트웨어를 설치하도록 안내합니다. 실행기를 배포한 후 실행기 컴퓨터와 {%ifversion ghec or ghae %}엔터프라이즈{% elsif ghes %}{% data variables.location.product_location %}{% endif %} 간의 연결을 확인할 수 있습니다.

### 자체 호스트 실행기 추가

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. 그룹을 사용하여 자체 호스트 실행기에 대한 액세스 권한 관리

실행기 그룹을 만들어 엔터프라이즈에 추가한 실행기에 대한 액세스 권한을 관리할 수 있습니다. 그룹을 사용하여 실행기의 {% data variables.product.prodname_actions %}에서 작업을 실행할 수 있는 조직을 선택합니다.

{% data variables.product.product_name %}에서는 그룹에 새 실행기를 모두 추가합니다. 실행기는 한 번에 그룹 하나에만 있을 수 있습니다. 기본적으로 {% data variables.product.product_name %}에서는 “기본” 그룹에 새 실행기를 추가합니다.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. 조직 액세스에 대한 정책을 선택하려면 “조직 액세스”에서 **조직 액세스** 드롭다운을 선택하고 **선택한 조직** 을 클릭합니다.
1. 조직 액세스 정책이 있는 드롭다운 오른쪽에서 {% octicon "gear" aria-label="The Gear icon" %}을 클릭합니다.
1. 실행기 그룹에 대한 액세스 권한을 부여하려는 조직을 선택합니다.
{%- ifversion ghec or ghes %}
1. 필요에 따라 선택한 조직의 퍼블릭 리포지토리가 그룹의 실행기를 사용하도록 허용하려면 **퍼블릭 리포지토리 허용** 을 선택합니다.

   {% warning %}

   **경고**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”를 참조하세요.

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. “실행기” 탭을 클릭합니다.
1. 실행기 목록에서 이전 섹션에서 배포한 실행기를 클릭합니다.
1. **편집** 을 클릭합니다.
1. **실행기 그룹 {% octicon "gear" aria-label="The Gear icon" %}** 을 클릭합니다.
1. 실행기 그룹 목록에서 이전에 만든 그룹의 이름을 클릭합니다.
1. **저장** 을 클릭하여 실행기를 그룹으로 이동합니다.
{%- elsif ghes < 3.4 or ghae %}
1. “기본값” 오른쪽에서 그룹의 실행기 수를 클릭하여 실행기를 표시합니다.
1. 배포한 실행기를 선택합니다.
1. “실행기 그룹” 오른쪽에서 **그룹으로 이동** 드롭다운을 선택하고 이전에 만든 그룹을 클릭합니다.
{%- endif %}

이제 지정한 조직 내 {% data variables.product.prodname_actions %}에서 작업을 실행할 수 있는 자체 호스트 실행기를 배포했습니다.

## 4. 자체 호스트 실행기에 대한 액세스 추가 제한

필요에 따라 조직 소유자는 만든 실행기 그룹의 액세스 정책을 추가로 제한할 수 있습니다. 예를 들어 조직 소유자는 조직의 특정 리포지토리만 실행기 그룹을 사용하도록 허용할 수 있습니다.

자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”를 참조하세요.

## 5. 자체 호스트 실행기 자동 스케일링

필요에 따라 {% ifversion ghec or ghae %}엔터프라이즈{% elsif ghes %}{% data variables.location.product_location %}{% endif %}에 대한 자체 호스팅 실행기의 크기를 자동으로 조정하는 사용자 지정 도구를 빌드할 수 있습니다. 예를 들어 도구는 {% data variables.location.product_location %}의 웹후크 이벤트에 응답하여 실행기 머신 클러스터의 크기를 자동으로 조정할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기 자동 스케일링](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)”을 참조하세요.

## 다음 단계

- 자체 호스트 실행기를 모니터링하고 일반적인 이슈를 해결할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.

- {% data variables.product.company_short %}에서는 자체 호스트 실행기 컴퓨터에 대한 보안 고려 사항을 검토하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”를 참조하세요.

- {% ifversion ghec %}{% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}를 사용하는 경우{% elsif ghes or ghae %}{% endif %} {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}{% endif %}에서 엔터프라이즈에 대한 작업을 포함하여 {% data variables.product.prodname_dotcom_the_website %}에서 리포지토리를 수동으로 동기화할 수 있습니다. 또는 엔터프라이즈 구성원이 {% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %}의 작업에 자동으로 액세스하도록 허용할 수 있습니다. 자세한 내용은 다음 항목을 참조하십시오.

   {%- ifversion ghes or ghae %}
   - “[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}에서 수동으로 작업 동기화](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)”
   - “[{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" {%- elsif ghec %}
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) 또는 [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) 설명서의 “{% data variables.product.prodname_dotcom_the_website %}에서 작업 수동 동기화”
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) 또는 [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) 설명서의 “{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스를 사용하도록 설정” {%- endif %}

- 자체 호스트 실행기 컴퓨터에서 사용할 수 있는 소프트웨어를 사용자 지정하거나 {% ifversion ghes or ghae %}{% data variables.product.prodname_dotcom_the_website %}을 사용하여 고객이 사용할 수 있는{% endif %} {% data variables.product.company_short %} 호스트 실행기와 유사한 소프트웨어를 실행하도록 실행기를 구성할 수 있습니다. {% data variables.product.prodname_actions %}를 위한 실행기 컴퓨터를 강화하는 소프트웨어는 오픈 소스입니다. 자세한 내용은 [`actions/runner`](https://github.com/actions/runner) 및 [`actions/runner-images`](https://github.com/actions/runner-images) 리포지토리를 참조하세요.

## 추가 참고 자료

- “[자체 호스트 실행기 애플리케이션을 서비스로 구성](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)”
- “[워크플로에서 자체 호스트 실행기 사용](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)”
