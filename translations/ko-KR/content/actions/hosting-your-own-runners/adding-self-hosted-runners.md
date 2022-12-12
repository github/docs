---
title: 자체 호스팅 실행기 추가
intro: '리포지토리, 조직 또는 엔터프라이즈에 자체 호스팅 실행기를 추가할 수 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109298'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

리포지토리, 조직 또는 엔터프라이즈에 자체 호스팅 실행기를 추가할 수 있습니다.

조직 또는 엔터프라이즈 관리자인 경우 조직 또는 엔터프라이즈 수준에서 자체 호스팅 실행기를 추가해야 합니다. 이 방법을 사용하면 조직 또는 엔터프라이즈의 여러 리포지토리에서 실행기를 사용할 수 있으며 한 곳에서 실행기를 관리할 수도 있습니다.

자체 호스팅 실행기를 지원하는 운영 체제 또는 프록시 서버에서 자체 호스팅 실행기를 사용하는 방법에 대한 자세한 내용은 “[자체 호스팅 실행기 정보](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)”를 참조하세요.

{% ifversion not ghae %} {% warning %}

**경고:** {% data reusables.actions.self-hosted-runner-security %}

자세한 내용은 “[자체 호스트 실행기 정보](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”를 참조하세요.

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

자동화를 설정하여 자체 호스팅 실행기 수를 스케일링할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기 자동 스케일링](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)”을 참조하세요.

{% endif %}

## 필수 조건

{% data reusables.actions.self-hosted-runners-prerequisites %}

## 리포지토리에 자체 호스팅 실행기 추가

단일 리포지토리에 자체 호스팅 실행기를 추가할 수 있습니다. 사용자 리포지토리에 자체 호스팅 실행기를 추가하려면 리포지토리 소유자여야 합니다. 조직 리포지토리의 경우 조직 소유자이거나 리포지토리에 대한 관리자 액세스 권한이 있어야 합니다. REST API를 사용하여 자체 호스트 실행기를 추가하는 방법에 대한 자세한 내용은 “[자체 호스트 실행기](/rest/reference/actions#self-hosted-runners)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. **자체 호스팅 실행기 새로 만들기** 를 클릭합니다.
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. {% ifversion ghes or ghae or ghec %}“실행기”{% else %}“자체 호스팅 실행기”{% endif %}에서 **실행기 추가** 를 클릭합니다.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.

## 조직에 자체 호스팅 실행기 추가

자체 호스팅 실행기를 조직 수준에서 추가하여 조직의 여러 리포지토리에 대한 작업을 처리하는 데 사용할 수 있습니다. 조직에 자체 호스팅 실행기를 추가하려면 조직 소유자여야 합니다. REST API를 사용하여 자체 호스트 실행기를 추가하는 방법에 대한 자세한 내용은 “[자체 호스트 실행기](/rest/reference/actions#self-hosted-runners)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %} 1. **새 실행기** 를 클릭한 다음 **자체 호스팅 실행기 새로 만들기** 를 클릭합니다.{% else %}1. **새 실행기** 를 클릭합니다.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. {% ifversion ghes or ghae %}“실행기”에서 **새로 추가** 를 클릭한 다음, **새 실행기** 를 클릭합니다.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## 엔터프라이즈에 자체 호스팅 실행기 추가

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우{% elsif ghec or ghes or ghae %}{% endif %}자체 호스팅 실행기를 여러 조직에 할당할 수 있는 엔터프라이즈에 추가할 수 있습니다. 그러면 조직 관리자는 이를 사용할 수 있는 리포지토리를 제어할 수 있습니다. {% ifversion fpt %}자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)를 참조하세요.{% endif %}

{% ifversion ghec or ghes or ghae %} 새 실행기는 기본 그룹에 할당됩니다. 실행기를 등록한 후 실행기 그룹을 수정할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”를 참조하세요.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

엔터프라이즈에 자체 호스팅 실행기를 추가하려면 엔터프라이즈 소유자여야 합니다. REST API를 사용하여 자체 호스트 실행기를 추가하는 방법에 대한 자세한 내용은 [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners)의 엔터프라이즈 엔드포인트를 참조하세요.

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### 엔터프라이즈 실행기를 리포지토리에 사용할 수 있도록 만들기

기본적으로 엔터프라이즈의 “기본” 자체 호스팅 실행기 그룹의 실행기는 엔터프라이즈의 모든 조직에서 사용할 수 있지만 각 조직의 일부 리포지토리에는 사용할 수 없습니다.

엔터프라이즈 수준의 자체 호스팅 실행기 그룹을 조직 리포지토리에서 사용할 수 있도록 하려면 실행기 그룹에 대한 조직의 상속된 설정을 변경하여 실행기를 조직의 리포지토리에 사용할 수 있도록 해야 합니다.

실행기 그룹 액세스 설정 변경에 대한 자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”를 참조하세요.
{% endif %}

{% ifversion ghec or ghes or ghae %}

## 추가 참고 자료

- “[엔터프라이즈의 자체 호스팅 실행기 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)”

{% endif %}
