---
title: GitHub.com에서 수동으로 작업 동기화
intro: '{% data variables.product.prodname_dotcom_the_website %}의 작업에 액세스해야 하는 사용자의 경우 특정 작업을 엔터프라이즈에 동기화할 수 있습니다.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107271'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

{% data variables.product.prodname_dotcom_the_website %}의 작업에 액세스할 수 있도록 설정하는 권장 방법은 모든 작업에 대한 자동 액세스를 사용하도록 설정하는 것입니다. {% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_ghe_cloud %}와 {% data variables.product.product_name %}를 통합하면 됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %}를 사용하는 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요.

그러나 엔터프라이즈에서 허용되는 작업을 더 엄격하게 제어하려는 경우 {% else %}{% endif %}이 가이드에 따라 {% data variables.product.company_short %}의 오픈 소스 [`actions-sync`](https://github.com/actions/actions-sync) 도구를 사용하여 {% data variables.product.prodname_dotcom_the_website %}의 개별 작업 리포지토리를 엔터프라이즈에 동기화할 수 있습니다.

## `actions-sync` 도구 정보

{% data variables.product.prodname_dotcom_the_website %} API 및 {% data variables.product.product_name %} 인스턴스 API에 액세스할 수 있는 머신에서 `actions-sync` 도구를 실행해야 합니다. 동시에 둘 다에 머신을 연결할 필요가 없습니다.

머신이 동시에 두 시스템에 모두 액세스할 수 있는 경우 단일 `actions-sync sync` 명령으로 동기화를 수행할 수 있습니다. 한 번에 하나의 시스템에만 액세스할 수 있는 경우 `actions-sync pull` 및 `push` 명령을 사용할 수 있습니다.

`actions-sync` 도구는 퍼블릭 리포지토리에 저장된 {% data variables.product.prodname_dotcom_the_website %}의 작업만 다운로드할 수 있습니다.

{% note %}

**참고:** `actions-sync` 도구는 {% data variables.product.prodname_github_connect %}를 사용할 수 없는 시스템에서 사용하기 위한 것입니다. {% data variables.product.prodname_github_connect %}를 사용할 수 있는 시스템에서 도구를 실행하면 `The repository <repo_name> has been retired and cannot be reused` 오류가 표시될 수 있습니다. 이는 워크플로가 {% data variables.product.prodname_dotcom_the_website %}에서 직접 해당 작업을 사용했으며 네임스페이스가 {% data variables.location.product_location %}에서 사용 중지되었음을 나타냅니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website%}에서 액세스한 작업의 네임스페이스 사용 자동 중지](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)”를 참조하세요. 

{% endnote %}

## 필수 조건

* `actions-sync` 도구를 사용하기 전에 모든 대상 조직이 이미 엔터프라이즈에 있는지 확인해야 합니다. 다음 예제에서는 `synced-actions`라는 조직에 작업을 동기화하는 방법을 보여 줍니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.
* 대상 조직의 리포지토리를 만들고 쓸 수 있는 {% data variables.product.pat_generic %}을(를) 만들어야 합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/github/authenticating-to-github/creating-a-personal-access-token). {% ifversion ghes %}
* {% data variables.location.product_location %}에서 `actions` 조직의 번들 작업을 동기화하려면 조직의 소유자 `actions` 여야 합니다.

  {% note %}
  
  **참고:** 기본적으로 사이트 관리자도 번들된 `actions` 조직의 소유자가 아닙니다.
  
  {% endnote %}

  사이트 관리자는 관리 셸에서 `ghe-org-admin-promote` 명령을 사용하여 사용자를 번들된 `actions` 조직의 소유자로 승격할 수 있습니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)” 및 “[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)”을(를) 참조하세요.

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   위 명령은 다음 인수를 사용합니다.

   * `--cache-dir`: 명령을 실행하는 머신의 캐시 디렉터리입니다.
   * `--destination-token`: 대상 엔터프라이즈 인스턴스에 대한 {% 데이터 variables.product.pat_generic %}입니다.
   * `--destination-url`: 대상 엔터프라이즈 인스턴스의 URL입니다.
   * `--repo-name`: 동기화할 작업 리포지토리입니다. `owner/repository:destination_owner/destination_repository` 형식을 사용합니다.
     
     * 위 예제에서는 [`actions/stale`](https://github.com/actions/stale) 리포지토리를 대상 엔터프라이즈 인스턴스의 `synced-actions/actions-stale` 리포지토리에 동기화합니다. 위 명령을 실행하기 전에 엔터프라이즈에서 `synced-actions`라는 조직을 만들어야 합니다.
     * `:destination_owner/destination_repository`를 생략하면 도구에서 엔터프라이즈의 원래 소유자 및 리포지토리 이름을 사용합니다. 명령을 실행하기 전에 작업의 소유자 이름과 일치하는 새 조직을 엔터프라이즈에서 만들어야 합니다. 중앙 조직을 사용하여 엔터프라이즈에서 동기화된 작업을 저장하는 것이 좋습니다. 이렇게 하면 여러 소유자의 작업을 동기화하는 경우에도 새 조직을 여러 개 만들 필요가 없습니다.
     * `--repo-name` 매개 변수를 `--repo-name-list` 또는 `--repo-name-list-file`로 바꿔 여러 작업을 동기화할 수 있습니다. 자세한 내용은 [`actions-sync` 추가 정보](https://github.com/actions/actions-sync#actions-sync)를 참조하세요.
1. 엔터프라이즈에 작업 리포지토리가 생성된 후에는 엔터프라이즈 사용자가 대상 리포지토리를 사용하여 워크플로에서 작업을 참조할 수 있습니다. 위에 표시된 예제 작업의 경우 다음과 같이 참조합니다.
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)”을 참조하세요.
