---
title: 엔터프라이즈에서 GitHub Actions에 대한 정책 적용
intro: '엔터프라이즈 조직 내에서 {% data variables.product.prodname_actions %}에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 6b26b4fad3dce53aa273e3303645e68c64adfd87
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101249'
---
{% data reusables.actions.enterprise-beta %}

## 엔터프라이즈의 {% data variables.product.prodname_actions %}에 대한 정책 정보

{% data variables.product.prodname_actions %}를 사용하면 엔터프라이즈 구성원이 {% data variables.product.product_name %}에서 소프트웨어 개발 워크플로를 자동화할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions)”를 참조하세요.

{% ifversion ghes %} {% 데이터 variables.product.prodname_actions %}을(를) 사용하도록 설정하면 {% 데이터 variables.location.product_location %}의 {% else %}Any{% endif %} 조직에서 {% 데이터 variables.product.prodname_actions %}을(를) 사용할 수 있습니다. 정책을 적용하여 {% data variables.product.product_name %}의 엔터프라이즈 구성원이 {% data variables.product.prodname_actions %}를 사용하는 방법을 제어할 수 있습니다. 기본적으로 조직 소유자는 구성원이 {% data variables.product.prodname_actions %}를 사용하는 방법을 관리할 수 있습니다. 자세한 내용은 “[조직에 대해 {% data variables.product.prodname_actions %} 사용 안 함 또는 제한](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)”을 참조하세요.

## 엔터프라이즈에서 {% data variables.product.prodname_actions %} 사용을 제한하는 정책 적용

엔터프라이즈의 모든 조직에 대해 {% data variables.product.prodname_actions %}를 사용하지 않도록 설정하거나 특정 조직만 허용하도록 선택할 수 있습니다. 또한 퍼블릭 작업 {% ifversion actions-workflow-policy %}및 재사용 가능 워크플로{% endif %}의 사용을 제한할 수 있으므로 사용자가 엔터프라이즈에 있는 로컬 작업 {% ifversion actions-workflow-policy %}및 재사용 가능한 워크플로{% endif %}만 사용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. “정책”에서 옵션을 선택합니다.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **참고:** 공용 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}에 대한 액세스를 사용하도록 설정하려면 먼저 {% 데이터 variables.location.product_location %}을(를) 구성하여 {% 데이터 variables.product.prodname_dotcom_the_website %}에 연결해야 합니다. 자세한 내용은 “[GitHub Connect를 사용하여 GitHub.com 작업에 대한 자동 액세스 사용](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요.

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![이 엔터프라이즈 계정에 대해 작업 사용, 사용 안 함 또는 제한](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![이 엔터프라이즈 계정에 대해 작업 사용, 사용 안 함 또는 제한](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. **저장** 을 클릭합니다.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. “정책”에서 {% data reusables.actions.policy-label-for-select-actions-workflows %}를 선택하고 필요한 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 목록에 추가합니다.
   {% ifversion actions-workflow-policy %} ![허용 목록에 작업 및 재사용 가능한 워크플로 추가](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![허용 목록에 작업 추가](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![허용 목록에 작업 추가](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## 엔터프라이즈에서 아티팩트 및 로그 보존에 대한 정책 적용

{% data variables.product.prodname_actions %}는 아티팩트와 로그 파일을 저장할 수 있습니다. 자세한 내용은 “[워크플로 아티팩트 다운로드](/actions/managing-workflow-runs/downloading-workflow-artifacts)”를 참조하세요.

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## 엔터프라이즈에서 포크 끌어오기 요청에 대한 정책 적용

엔터프라이즈{% ifversion ghec %} 또는 외부 협력자{% endif %}의 구성원이 포크에서 워크플로를 실행할 때 {% 데이터 variables.location.product_location %}에 대해 {% 데이터 variables.product.prodname_actions %}이(가) 동작하는 방식을 제어하는 정책을 적용할 수 있습니다.

{% ifversion ghec %}

### 외부 협력자의 끌어오기 요청 승인을 위한 정책 적용

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### 프라이빗 리포지토리에서 포크 끌어오기 요청에 대한 정책 적용

{% data reusables.actions.private-repository-forks-overview %}

엔터프라이즈에 대한 정책을 사용할 수 있도록 설정한 경우, 개별 조직 또는 리포지토리에서 정책을 선택적으로 사용하지 않도록 설정할 수 있습니다. 엔터프라이즈에 대해 정책을 사용하지 않도록 설정한 경우, 개별 조직 또는 리포지토리에서 정책을 사용하도록 설정할 수 없습니다.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## 엔터프라이즈에서 워크플로 권한에 대한 정책 적용

{% data reusables.actions.workflow-permissions-intro %}

엔터프라이즈, 조직 또는 리포지토리의 설정에서 `GITHUB_TOKEN`에 대한 기본 사용 권한을 설정할 수 있습니다. 엔터프라이즈 설정에서 기본값으로 제한된 옵션을 선택하면 조직 또는 리포지토리 설정에서 더 허용 가능한 설정이 선택되지 않습니다.

{% data reusables.actions.workflow-permissions-modifying %}

### 기본 `GITHUB_TOKEN` 권한 구성

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} 기본적으로 새 엔터프라이즈를 만들 때 `GITHUB_TOKEN`에는 `contents` 범위에 대한 읽기 권한만 있습니다.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. “워크플로 권한”에서 `GITHUB_TOKEN`에 모든 범위에 대한 읽기 및 쓰기 권한을 부여할지 아니면 `contents` 범위에 대해 읽기 권한만 부여할지 선택합니다.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ 이 엔터프라이즈에 대한 GITHUB_TOKEN 권한 설정 {% else %} ![이 엔터프라이즈](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)에 대한 GITHUB_TOKEN 사용 권한 설정 {% endif %}
1. **저장** 을 클릭하여 설정을 적용합니다.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### {% data variables.product.prodname_actions %}에서 끌어오기 요청을 만들거나 승인하지 못하도록 방지

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

기본적으로 새 엔터프라이즈를 만들 때 워크플로는 끌어오기 요청을 만들거나 승인할 수 없습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. “워크플로 권한” 아래에서 **GitHub Actions에서 끌어오기 요청을 만들고 승인하도록 허용** 설정을 사용하여 `GITHUB_TOKEN`에서 끌어오기 요청을 만들고 승인할 수 있는지 여부를 구성합니다.

   ![이 엔터프라이즈에 대한 GITHUB_TOKEN 권한 설정](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. **저장** 을 클릭하여 설정을 적용합니다.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## 엔터프라이즈에서 캐시 스토리지에 대한 정책 적용

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

그러나 엔터프라이즈 정책을 설정하여 각 리포지토리의 기본 총 캐시 크기와 리포지토리에 허용되는 최대 총 캐시 크기를 모두 사용자 지정할 수 있습니다. 예를 들어 각 리포지토리의 기본 총 캐시 크기를 5GB로 설정할 수 있지만 필요한 경우 {% ifversion actions-cache-admin-ui %}조직 소유자 및 {% endif %} 리포지토리 관리자가 총 캐시 크기를 최대 15GB로 구성할 수 있습니다.

{% ifversion actions-cache-admin-ui %} 조직 소유자는 조직의 각 리포지토리에 적용되는 더 낮은 총 캐시 크기를 설정할 수 있습니다. {% endif %} 리포지토리에 대한 관리자 액세스 권한이 있는 사람 리포지토리의 총 캐시 크기를 엔터프라이즈 {% ifversion actions-cache-admin-ui %}또는 조직{% endif %} 정책 설정에서 허용하는 최대 캐시 크기까지 설정할 수 있습니다.

{% ifversion actions-cache-admin-ui %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. "아티팩트, 캐시 및 로그 설정" 섹션의 **최대 캐시 크기 제한** 에서 값을 입력한 다음 **저장** 을 클릭하여 설정을 적용합니다.
1. "아티팩트, 캐시 및 로그 설정" 섹션의 **기본 캐시 크기 제한** 에서 값을 입력한 다음 **저장** 을 클릭하여 설정을 적용합니다.

{% else %}

{% data variables.product.prodname_actions %} 캐시 스토리지에 대한 정책 설정은 현재 REST API를 통해서만 수정할 수 있습니다.

* 현재 엔터프라이즈 정책 설정을 보려면 “[엔터프라이즈에 대한 GitHub Actions 캐시 사용 정책 가져오기](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)”를 참조하세요.
* 엔터프라이즈 정책 설정을 변경하려면 “[엔터프라이즈에 대한 GitHub Actions 캐시 사용 정책 설정](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)”을 참조하세요.

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

{% endif %}
