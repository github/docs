---
title: 최신 버전의 공식 번들 작업 사용
intro: '엔터프라이즈에 번들로 제공되는 작업을 업데이트하거나 {% data variables.product.prodname_dotcom_the_website %}에서 직접 작업을 사용할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107031'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

엔터프라이즈 인스턴스에는 워크플로에서 사용할 수 있는 여러 기본 제공 작업이 포함됩니다. 번들 작업에 대한 자세한 내용은 “[엔터프라이즈 인스턴스와 함께 번들로 제공되는 공식 작업](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)”을 참조하세요.

이 번들 작업은 https://github.com/actions 에서 확인할 수 있는 공식 작업의 지정 시간 스냅샷이므로 최신 버전을 사용할 수 있습니다. `actions-sync` 도구를 사용하여 이 작업을 업데이트하거나 {% data variables.product.prodname_dotcom_the_website %}에서 최신 작업에 액세스를 허용할 수 있도록 {% data variables.product.prodname_github_connect %}를 구성할 수 있습니다. 다음 섹션에서는 이러한 방법에 대해 설명합니다.

## `actions-sync`를 사용하여 번들 작업 업데이트

번들 작업을 업데이트하려면 `actions-sync` 도구를 사용하여 스냅샷을 업데이트할 수 있습니다. 사용에 관한 자세한 내용은 `actions-sync`[“{% data variables.product.prodname_dotcom_the_website %}에서 수동으로 작업 동기화](/admin/github-actions/manually-syncing-actions-from-githubcom)”를 참조하세요.

## {% data variables.product.prodname_github_connect %}를 사용하여 최신 작업에 액세스

{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.product_name %}가 {% data variables.product.prodname_dotcom_the_website %}에서 작업을 사용하도록 허용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %}를 통해 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요.

{% data variables.product.prodname_github_connect %}가 구성되면 인스턴스의 `actions` 조직에서 로컬 리포지토리를 삭제하여 작업의 최신 버전을 사용할 수 있습니다. 예를 들어 엔터프라이즈 인스턴스가 `actions/checkout` 작업의 `v1`을 사용하고 있고 엔터프라이즈 인스턴스에서 사용할 수 없는 `{% data reusables.actions.action-checkout %}`을 사용해야 하는 경우, 다음 단계를 수행하여 {% data variables.product.prodname_dotcom_the_website %}에서 최신 `checkout` 작업을 사용할 수 있습니다.

1. {% data variables.product.product_name %}의 엔터프라이즈 소유자 계정에서 작업 조직에서 삭제할 리포지토리로 이동합니다(이 예에서는 `checkout`).
1. 기본적으로 사이트 관리자는 번들 작업 조직의 소유자가 아닙니다. `checkout` 리포지토리를 삭제하는 데 필요한 액세스 권한을 얻으려면 사이트 관리 도구를 사용해야 합니다. 해당 리포지토리에 있는 페이지의 오른쪽 위 모서리에서 {% octicon "rocket" aria-label="The rocket ship" %}을 클릭합니다.
  ![사이트 관리자 설정에 액세스하기 위한 로켓 아이콘](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. 리포지토리에 대한 보안을 확인하려면 {% octicon "shield-lock" %} **보안** 을 클릭합니다.
  ![보안 헤더 리포지토리](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. “권한 있는 액세스”에서 **잠금 해제** 를 클릭합니다.
  ![잠금 해제 단추](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. **이유** 에서 리포지토리의 잠금 해제 이유를 입력한 다음 **잠금 해제** 를 클릭합니다.
  ![확인 대화 상자](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. 이제 리포지토리의 잠금이 해제되었으므로 사이트 관리자 페이지를 그대로 두고 `actions` 조직 내에서 리포지토리를 삭제할 수 있습니다. 페이지 맨 위에서 이 **체크 아웃** 예제에서 리포지토리 이름을 클릭하여 요약 페이지로 돌아갑니다.
  ![리포지토리 이름 링크](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. “리포지토리 정보”에서 **코드 보기** 를 클릭하여 사이트 관리자 페이지를 그대로 두고 `checkout` 리포지토리를 표시합니다.
1. `actions` 조직 내에서 `checkout` 리포지토리를 삭제합니다. 리포지토리를 삭제하는 방법에 대한 자세한 내용은 “[리포지토리 삭제](/github/administering-a-repository/deleting-a-repository)”를 참조하세요.
  ![코드 링크 보기](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. `{% data reusables.actions.action-checkout %}` 사용을 위한 워크플로의 YAML을 구성합니다.
1. 워크플로가 실행될 때마다 실행기는 {% data variables.product.prodname_dotcom_the_website %}에서 지정된 버전의 `actions/checkout`을 사용합니다.

   {% note %}

   **참고:** {% data variables.product.prodname_dotcom_the_website %}`actions/checkout`에서 작업을 처음 사용할 때 `checkout` 네임스페이스는 {% data variables.location.product_location %}에서 자동으로 사용 중지됩니다. 작업의 로컬 복사본을 사용하여 되돌리려면 먼저 사용 중지에서 네임스페이스를 제거해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website%}에서 액세스한 작업의 네임스페이스 사용 자동 중지](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)”를 참조하세요.

   {% endnote %}
