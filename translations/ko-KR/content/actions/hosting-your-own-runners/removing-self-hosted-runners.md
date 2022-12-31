---
title: 자체 호스트 실행기 제거
intro: '리포지토리{% ifversion fpt %} 또는 조직{% elsif ghec or ghes or gahe %} 또는 조직 또는 엔터프라이즈{% endif %}에서 자체 호스팅 실행기를 영구적으로 제거할 수 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090440'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 리포지토리에서 실행기 제거

{% note %}

**참고:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

사용자 리포지토리에서 자체 호스트 실행기를 제거하려면 리포지토리 소유자여야 합니다. 조직 리포지토리의 경우 조직 소유자이거나 리포지토리에 대한 관리자 액세스 권한이 있어야 합니다. 자체 호스트 실행기 컴퓨터에 대한 액세스 권한이 있는 것도 좋습니다. REST API를 사용하여 자체 호스트 실행기를 제거하는 방법에 대한 자세한 내용은 “[자체 호스트 실행기](/rest/reference/actions#self-hosted-runners)”를 참조하세요.

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## 조직에서 실행기 제거

{% note %}

**참고:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

조직에서 자체 호스트 실행기를 제거하려면 조직 소유자여야 합니다. 자체 호스트 실행기 컴퓨터에 대한 액세스 권한이 있는 것도 좋습니다. REST API를 사용하여 자체 호스트 실행기를 제거하는 방법에 대한 자세한 내용은 “[자체 호스트 실행기](/rest/reference/actions#self-hosted-runners)”를 참조하세요.

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## 엔터프라이즈에서 실행기 제거

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}을(를) 사용하는 경우 엔터프라이즈에서 실행기를 제거할 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise)를 참조하세요.
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

**참고:** {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

엔터프라이즈에서 자체 호스팅 실행기를 제거하려면 엔터프라이즈 소유자여야 합니다. 자체 호스트 실행기 컴퓨터에 대한 액세스 권한이 있는 것도 좋습니다. REST API를 사용하여 자체 호스트 실행기 그룹을 제거하는 방법에 대한 자세한 내용은 [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners)의 엔터프라이즈 엔드포인트를 참조하세요.

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
