---
title: 리포지토리에 대한 GitHub Actions 설정 관리
intro: '특정 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하지 않도록 설정하거나 구성할 수 있습니다.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b6e782788c35409a66110dd48496e639a8bbe373
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101241'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 리포지토리에 대한 {% data variables.product.prodname_actions %} 권한 정보

{% data reusables.actions.disabling-github-actions %} {% data variables.product.prodname_actions %}에 대한 자세한 내용은 "[{% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) 정보"를 참조하세요.

{% data variables.product.prodname_actions %}를 리포지토리에 사용하도록 설정할 수 있습니다. {% data reusables.actions.enabled-actions-description %} {% data variables.product.prodname_actions %}를 모두 리포지토리에 사용하지 않도록 설정할 수 있습니다. {% data reusables.actions.disabled-actions-description %}

또는 리포지토리에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하지만 워크플로에서 실행할 수 있는 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}를 제한할 수 있습니다.

## 리포지토리에 대한 {% data variables.product.prodname_actions %} 권한 관리

{% data variables.product.prodname_actions %}를 리포지토리에 사용하지 않도록 설정하거나 리포지토리에서 사용할 수 있는 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 구성하는 정책을 설정할 수 있습니다.

{% note %}

**참고:** 이러한 설정은 조직에 재정의 정책이 있거나 재정의 정책이 있는 엔터프라이즈에서 관리하는 경우 관리하지 못할 수 있습니다. 자세한 내용은 "[조직에 대한 {% data variables.product.prodname_actions %} 사용 안 함 또는 제한](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" 또는 "[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)"을 참조하세요.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. "작업 권한" 아래에서 옵션을 선택합니다.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![이 리포지토리에 대한 작업 정책 설정](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![이 리포지토리에 대한 작업 정책 설정](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. "작업 권한" 아래에서 {% data reusables.actions.policy-label-for-select-actions-workflows %}를 선택하고, 필요한 작업을 목록에 추가합니다.

   {% ifversion actions-workflow-policy%} ![허용 목록에 작업 및 재사용 가능한 워크플로 추가](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![허용 목록에 작업 추가](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![허용 목록에 작업 추가](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% ifversion fpt or ghec %}
## 퍼블릭 리포지토리에서 포크로부터 워크플로로의 변경 제어

{% data reusables.actions.workflow-run-approve-public-fork %}

이 동작은 리포지토리에 대해 아래 절차를 사용하여 구성할 수 있습니다. 이 설정을 수정하면 조직 또는 엔터프라이즈 수준에서 구성 세트가 재정의됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## 프라이빗 리포지토리의 포크에 워크플로 사용

{% data reusables.actions.private-repository-forks-overview %}

정책이 {% ifversion ghec or ghae or ghes %}엔터프라이즈 또는{% endif %} 조직에 대해 사용하지 않도록 설정되면 해당 정책을 리포지토리에 사용하도록 설정할 수 없습니다.

{% data reusables.actions.private-repository-forks-options %}

### 프라이빗 리포지토리에 대한 포크 정책 구성

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## 리포지토리에 대한 `GITHUB_TOKEN`의 권한 설정

{% data reusables.actions.workflow-permissions-intro %}

기본 권한은 조직 설정에서도 구성할 수 있습니다. 리포지토리가 조직에 속해 있고 조직 설정에서 더 제한적인 기본값을 선택한 경우 리포지토리 설정에서 동일한 옵션이 선택되고 허용 옵션이 사용하지 않도록 설정됩니다.

{% data reusables.actions.workflow-permissions-modifying %}

### 기본 `GITHUB_TOKEN` 권한 구성

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} 기본적으로 개인 계정에서 새 리포지토리를 만드는 경우 `GITHUB_TOKEN`은 `contents` 범위에 대한 읽기 액세스 권한만 갖습니다. 조직에서 새 리포지토리를 만드는 경우 설정은 조직 설정에 구성된 항목에서 상속됩니다.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. "워크플로 권한" 아래에서 `GITHUB_TOKEN`에서 모든 범위에 대한 읽기 및 쓰기 액세스 권한을 갖도록 할지 아니면 `contents` 범위에 대한 읽기 권한만 갖도록 할지 여부를 선택합니다.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ 이 리포지토리](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png) 에 대한 GITHUB_TOKEN 권한 설정 {% else %} ![이 리포지](/assets/images/help/settings/actions-workflow-permissions-repository.png) 토리 {% endif %}에 대한 GITHUB_TOKEN 권한 설정

1. **저장** 을 클릭하여 설정을 적용합니다.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### {% data variables.product.prodname_actions %}에서 끌어오기 요청을 만들거나 승인하지 못하도록 방지

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

기본적으로 개인 계정에서 새 리포지토리를 만드는 경우 워크플로에서 끌어오기 요청을 만들거나 승인할 수 없습니다. 조직에서 새 리포지토리를 만드는 경우 설정은 조직 설정에 구성된 항목에서 상속됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. "워크플로 권한" 아래에서 **GitHub Actions에서 끌어오기 요청을 만들고 승인하도록 허용** 설정을 사용하여 `GITHUB_TOKEN`에서 끌어오기 요청을 만들고 승인할 수 있는지 여부를 구성합니다.

   ![이 리포지토리에 대한 GITHUB_TOKEN 권한 설정](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. **저장** 을 클릭하여 설정을 적용합니다.
{% endif %}

{% ifversion ghes > 3.3 또는 ghae > 3.3 또는 ghec %}
## 내부 리포지토리의 구성 요소에 대한 액세스 허용

엔터프라이즈 멤버는 정보를 공개적으로 공유하지 않고도 내부 리포지토리를 사용하여 프로젝트 작업을 수행할 수 있습니다. 자세한 내용은 "[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)"를 참조하세요.

아래 단계를 사용하여 내부 리포지토리의 {% ifversion internal-actions%}작업 및 {% endif %}워크플로를 리포지토리 외부에서 액세스할 수 있는지 여부를 구성할 수 있습니다.{% ifversion internal-actions %} 자세한 내용은 “[엔터프라이즈와 작업 및 워크플로 공유](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”를 참조하세요. 또는 REST API를 사용하여 액세스 수준을 설정하거나 해당 세부 정보를 가져올 수 있습니다. 자세한 내용은 "[리포지토리 외부의 워크플로에 대한 액세스 수준 가져오기](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" 및 "[리포지토리 외부의 워크플로에 대한 액세스 수준 설정](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)"을 참조하세요.{% endif %}

1. {% data variables.product.prodname_dotcom %}에서 내부 리포지토리의 기본 페이지로 이동합니다.
1. 리포지토리 이름 아래에서 {% octicon "gear" aria-label="The gear icon" %} **설정** 을 클릭합니다.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. **액세스** 아래에서 다음 액세스 설정 중 하나를 선택합니다.

   {% ifversion ghes > 3.4 또는 ghae > 3.4 또는 ghec %}![Actions 구성 요소에 대한 액세스 설정](/assets/images/help/settings/actions-access-settings.png){% else %}![Actions 구성 요소에 대한 액세스 설정](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **액세스할 수 없음** - 다른 리포지토리의 워크플로에서 이 리포지토리에 액세스할 수 없습니다.
   * **'조직 이름' 조직의 리포지토리에서 액세스할** 수 있음 - {% ifversion ghes > 3.4 또는 ghae > 3.4 또는 'ORGANIZATION NAME' 조직의 일부인 다른 리포지토리의 ghec %}워크플로는 이 리포지토리의 작업 및 워크플로에 액세스할 수 있습니다. 액세스는 프라이빗 또는 내부 리포지토리에서만 허용됩니다.{% else %}다른 리포지토리의 워크플로가 동일한 조직의 일부이고 표시 유형이 프라이빗 또는 내부인 경우 이 리포지토리의 워크플로를 사용할 수 있습니다.{% endif %}
   * **'ENTERPRISE NAME' 엔터프라이즈의 리포지토리에서 액세스할** 수 있음 - {% ifversion ghes > 3.4 또는 ghae > 3.4 또는 'ENTERPRISE NAME' 엔터프라이즈의 일부인 다른 리포지토리의 ghec %}워크플로는 이 리포지토리의 작업 및 워크플로에 액세스할 수 있습니다. 액세스는 프라이빗 또는 내부 리포지토리에서만 허용됩니다.{% else %}다른 리포지토리의 워크플로가 동일한 엔터프라이즈의 일부이고 표시 유형이 프라이빗 또는 내부인 경우 이 리포지토리의 워크플로를 사용할 수 있습니다.{% endif %}
1. **저장** 을 클릭하여 설정을 적용합니다.
{% endif %}

## 리포지토리의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간 구성

리포지토리의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간을 구성할 수 있습니다.

{% data reusables.actions.about-artifact-log-retention %}

또한 워크플로에서 만든 특정 아티팩트에 대한 사용자 지정 보존 기간을 정의할 수 있습니다. 자세한 내용은 "[아티팩트 보존 기간 설정](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)"을 참조하세요.

## 리포지토리 보존 기간 설정

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## 리포지토리에 대한 캐시 스토리지 구성

{% data reusables.actions.cache-default-size %} 그러나 엔터프라이즈 소유자가 변경한 경우 이러한 기본 크기가 다를 수 있습니다. {% data reusables.actions.cache-eviction-process %}

리포지토리의 총 캐시 스토리지 크기를 {% ifversion actions-cache-admin-ui %}조직 또는 {% endif %} 엔터프라이즈 정책 설정{% ifversion actions-cache-admin-ui %}s{% endif %}에서 허용하는 최대 크기까지 설정할 수 있습니다.

{% ifversion actions-cache-admin-ui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-cache-size-limit %}

{% else %}

{% data variables.product.prodname_actions %} 캐시 스토리지에 대한 리포지토리 설정은 현재 REST API를 통해서만 수정할 수 있습니다.

* 리포지토리에 대한 현재 캐시 리포지토리 제한을 보려면 "[리포지토리에 대한 GitHub Actions 캐시 사용 정책 가져오기](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)"를 참조하세요.
* 리포지토리에 대한 캐시 스토리지 제한을 변경하려면 "[리포지토리에 대한 GitHub Actions 캐시 사용 정책 설정](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)"을 참조하세요.

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

{% endif %}
