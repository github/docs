---
title: 조직의 GitHub Actions 사용 안 함 또는 제한
intro: 조직 소유자는 조직의 GitHub Actions를 사용 및 사용하지 않도록 설정하고 제한할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2be7794de8f1e189641a1769a9f8f82caf984c5f
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101265'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 조직에 대한 {% data variables.product.prodname_actions %} 권한 정보

{% data reusables.actions.disabling-github-actions %} {% data variables.product.prodname_actions %}에 관한 자세한 내용은 “[{% data variables.product.prodname_actions %} 정보](/actions/getting-started-with-github-actions/about-github-actions)”를 참조하세요.

조직의 모든 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정할 수 있습니다. {% data reusables.actions.enabled-actions-description %} 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하지 않도록 설정할 수 있습니다. {% data reusables.actions.disabled-actions-description %}

또는 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정할 수 있지만, 워크플로가 실행할 수 있는 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}를 제한할 수 있습니다.

## 조직에 대한 {% data variables.product.prodname_actions %} 권한 관리

조직의 모든 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하지 않도록 설정하거나 특정 리포지토리만 허용하도록 선택할 수 있습니다. 또한 퍼블릭 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}의 사용을 제한할 수 있으므로 사용자는 {% ifversion ghec or ghes or ghae %}엔터프라이즈{% else %}조직{% endif %}에 있는 로컬 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}만 사용할 수 있습니다.

{% note %}

**참고:** 조직이 재정의 정책을 사용하는 엔터프라이즈에서 관리되는 경우 이러한 설정을 관리하지 못할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)”을 참조하세요.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. “정책”에서 옵션을 선택합니다.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![이 조직에 대한 작업 정책 설정](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![이 조직에 대한 작업 정책 설정](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. “정책”에서 {% data reusables.actions.policy-label-for-select-actions-workflows %}를 선택하고 필요한 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 목록에 추가합니다.

   {% ifversion actions-workflow-policy %} ![허용 목록에 작업 및 재사용 가능한 워크플로 추가](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![허용 목록에 작업 추가](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![허용 목록에 작업 추가](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% ifversion fpt or ghec %}
## 퍼블릭 포크에서 워크플로에 필요한 승인 구성

{% data reusables.actions.workflow-run-approve-public-fork %}

아래 절차를 사용하여 조직에 대해 이 동작을 구성할 수 있습니다. 이 설정을 수정하면 엔터프라이즈 수준에서 구성 세트가 재정의됩니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## 프라이빗 리포지토리 포크에 워크플로 사용

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %} 엔터프라이즈에 대해 정책을 사용하지 않도록 설정하면 조직에서 정책을 사용하도록 설정할 수 없습니다. {% endif %} 조직에 대해 정책을 사용하지 않도록 설정하면 리포지토리에서 정책을 사용하도록 설정할 수 없습니다. 조직에서 정책을 사용하도록 설정하면 개별 리포지토리에 대해 정책을 사용하지 않도록 설정할 수 있습니다.

{% data reusables.actions.private-repository-forks-options %}

### 조직에 대한 프라이빗 포크 정책 구성

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## 조직에 대한 `GITHUB_TOKEN`의 권한 설정

{% data reusables.actions.workflow-permissions-intro %}

조직 또는 리포지토리의 설정에서 `GITHUB_TOKEN`에 대한 기본 권한을 설정할 수 있습니다. 조직 설정에서 제한 옵션을 기본값으로 선택하면 조직 내 리포지토리 설정에서 동일한 옵션이 선택되고 허용 옵션이 사용하지 않도록 설정됩니다. 조직이 {% data variables.product.prodname_enterprise %} 계정에 속하고 엔터프라이즈 설정에서 더 제한적인 기본값이 선택된 경우 조직 설정에서 더 허용적인 기본값을 선택할 수 없습니다.

{% data reusables.actions.workflow-permissions-modifying %}

### 기본 `GITHUB_TOKEN` 권한 구성

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} 기본적으로 새 조직을 만들 때 `GITHUB_TOKEN`에는 `contents` 범위에 대한 읽기 권한만 있습니다.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. “워크플로 권한”에서 `GITHUB_TOKEN`에 모든 범위에 대한 읽기 및 쓰기 권한을 부여할지 아니면 `contents` 범위에 대해 읽기 권한만 부여할지 선택합니다.

   {% ifversion allow-actions-to-approve-pr %}    {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ 이 조직에](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-creation-approval.png) 대한 GITHUB_TOKEN 권한 설정 {% else %} ![이 조직에 대한 GITHUB_TOKEN 권한 설정 {% endif %} {% else %} ![이 조직에](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png)](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png) 대한 GITHUB_TOKEN 권한 설정 {% endif %}
1. **저장** 을 클릭하여 설정을 적용합니다.

{% ifversion allow-actions-to-approve-pr %}
### {% data variables.product.prodname_actions %}가 끌어오기 요청을 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들거나 {% endif %}승인하는 것 방지

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

기본적으로 새 조직을 만들 때 워크플로는 끌어오기 요청을 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들거나 {% endif %}승인할 수 없습니다.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. “워크플로 권한”에서 **GitHub Actions를 사용하여 끌어오기 요청을 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들고 {% endif %}승인하도록 허용** 설정을 사용하여 `GITHUB_TOKEN`이 끌어오기 요청을 {% ifversion allow-actions-to-approve-pr-with-ent-repo %}만들고 {% endif %}승인할 수 있는지 여부를 구성합니다.

   {% ifversion allow-actions-to-approve-pr %}    {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ 이 조직에](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-creation-approval.png) 대한 GITHUB_TOKEN 끌어오기 요청 승인 권한 설정 {% else %} ![이 조직에](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png) 대한 GITHUB_TOKEN 끌어오기 요청 승인 권한 설정 {% endif %} {% else %} ![이 조직에](/assets/images/help/settings/actions-workflow-permissions-organization.png) 대한 GITHUB_TOKEN 끌어오기 요청 승인 권한 설정 {% endif %}
1. **저장** 을 클릭하여 설정을 적용합니다.

{% endif %}

{% ifversion actions-cache-org-ui %}

## 조직의 {% 데이터 variables.product.prodname_actions %} 캐시 스토리지 관리

조직 관리자는 {% ifversion actions-cache-admin-ui %}를 보고 조직의 모든 리포지토리에 대한 {% endif %}{% 데이터 variables.product.prodname_actions %} 캐시 스토리지를 관리할 수 있습니다. 

### 리포지토리별 {% 데이터 variables.product.prodname_actions %} 캐시 스토리지 보기

조직의 각 리포지토리에 대해 리포지토리가 사용하는 캐시 스토리지 양, 활성 캐시 수 및 리포지토리가 총 캐시 크기 제한에 근접한 경우를 확인할 수 있습니다. 캐시 사용 및 제거 프로세스에 대한 자세한 내용은 "[워크플로 속도를 높이기 위해 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy)"을 참조하세요.

{% 데이터 reusables.profile.access_profile %} {% 데이터 reusables.profile.access_org %} {% 데이터 reusables.profile.org_settings %}
1. 왼쪽 사이드바에서 {% octicon "play" aria-label="{% data variables.product.prodname_actions %} 아이콘" %} **작업을** 클릭한 다음 **캐시** 를 클릭합니다.
1. 해당 {% 데이터 variables.product.prodname_actions %} 캐시에 대한 정보는 리포지토리 목록을 검토하세요. 리포지토리 이름을 클릭하여 리포지토리의 캐시에 대한 자세한 내용을 볼 수 있습니다.

{% ifversion actions-cache-admin-ui %}

### 조직에 대한 {% 데이터 variables.product.prodname_actions %} 캐시 스토리지 구성

{% data reusables.actions.cache-default-size %}

조직의 각 리포지토리에 적용되는 {% 데이터 variables.product.prodname_actions %} 캐시의 크기 제한을 구성할 수 있습니다. 조직의 캐시 크기 제한은 엔터프라이즈 정책에 설정된 캐시 크기 제한을 초과할 수 없습니다. 리포지토리 관리자는 리포지토리에서 더 작은 제한을 설정할 수 있습니다.

{% 데이터 reusables.profile.access_profile %} {% 데이터 reusables.profile.access_org %} {% 데이터 reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.change-cache-size-limit %}

{% endif %}

{% endif %}
