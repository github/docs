---
title: GitHub Connect를 사용하여 GitHub.com 작업에 자동 액세스 사용
intro: '엔터프라이즈의 {% data variables.product.prodname_actions %}에서 {% data variables.product.prodname_dotcom_the_website %}의 작업을 사용하도록 허용하려면 엔터프라이즈 인스턴스를 {% data variables.product.prodname_ghe_cloud %}에 연결할 수 있습니다.'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107263'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 정보

기본적으로 {% data variables.product.product_name %}의 {% data variables.product.prodname_actions %} 워크플로는 {% data variables.product.prodname_dotcom_the_website %} 또는 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)의 작업을 직접 사용할 수 없습니다. 엔터프라이즈 인스턴스에서 {% data variables.product.prodname_dotcom_the_website %}의 모든 작업을 사용할 수 있도록 {% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_ghe_cloud %}와 {% data variables.product.product_name %}를 통합할 수 있습니다. 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

또는 엔터프라이즈에서 허용되는 작업을 더 엄격하게 제어하려는 경우 `actions-sync` 도구를 사용하여 수동으로 작업을 다운로드하고 엔터프라이즈 인스턴스에 동기화할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %}에서 수동으로 작업 동기화](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)”를 참조하세요.

## {% data variables.product.prodname_github_connect %}를 사용하는 작업 확인 정보

{% data reusables.actions.github-connect-resolution %}

사용자가 {% data variables.product.prodname_dotcom_the_website %}의 조직 및 리포지토리 이름과 일치하는 조직 및 리포지토리를 엔터프라이즈에서 이미 만든 경우 엔터프라이즈 리포지토리가 {% data variables.product.prodname_dotcom_the_website %} 리포지토리 대신 사용됩니다. {% ifversion ghae %} 악의적인 사용자는 이 동작을 활용하여 워크플로의 일부로 코드를 실행할 수 있습니다. {% else %} 자세한 내용은 "[{% data variables.product.prodname_dotcom_the_website%}에서 액세스하는 작업에 대한 네임스페이스의 자동 사용 중지"를 참조하세요](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom).
{% endif %}

## 모든 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용

엔터프라이즈에서 {% data variables.product.prodname_dotcom_the_website %}의 모든 작업에 액세스할 수 있도록 설정하기 전에 {% ifversion ghes %}다음을 수행해야 합니다.
- {% data variables.product.prodname_actions %}을(를) 사용하도록 {% data variables.location.product_location %}을(를) 구성합니다. 자세한 내용은 “[GitHub Enterprise 서버용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.
- {% data variables.product.prodname_github_connect %}를 사용하도록 설정{% else %}해야 합니다{% endif %}합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 관리](/admin/configuration/configuring-github-connect/managing-github-connect)”를 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. “사용자가 워크플로 실행에서 GitHub.com의 작업을 활용할 수 있음”에서 드롭다운 메뉴를 사용하여 **사용** 을 선택합니다.
  ![워크플로 실행에서 GitHub.com의 작업 활용 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## {% data variables.product.prodname_dotcom_the_website %}에서 액세스된 작업의 네임스페이스 사용 자동 중지

{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하면 {% data variables.product.prodname_actions %}에서 {% data variables.location.product_location %}을(를) 검색한 후 {% data variables.product.prodname_dotcom_the_website%}로 되돌리기 전에 기존 워크플로에 대한 동작이 변경되지 않습니다. 이렇게 하면 엔터프라이즈에서 만든 사용자 지정 버전의 작업이 {% data variables.product.prodname_dotcom_the_website%}의 해당 작업 대신 사용됩니다.

{% data variables.product.prodname_dotcom_the_website %}에 액세스하는 작업에 대한 네임스페이스의 자동 사용 중지는 {% data variables.location.product_location %}에 액세스할 수 있는 악의적인 사용자의 중간자 공격 가능성을 차단합니다. {% data variables.product.prodname_dotcom_the_website %}에 대한 작업이 처음으로 사용되는 경우 해당 네임스페이스는 {% data variables.location.product_location %}에서 사용 중지됩니다. 이렇게 하면 {% data variables.product.prodname_dotcom_the_website %}의 조직 및 리포지토리 이름과 일치하는 조직 및 리포지토리를 엔터프라이즈에서 만드는 모든 사용자가 차단됩니다. 따라서 워크플로를 실행할 때 의도한 작업이 항상 실행됩니다.

{% data variables.product.prodname_dotcom_the_website %}의 작업을 사용한 후 이름이 같은 {% data variables.location.product_location %}에서 작업을 만들려면 먼저 해당 조직 및 리포지토리의 네임스페이스를 사용할 수 있도록 해야 합니다.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 왼쪽 사이드바의 **사이트 관리자** 에서 **사용 중지된 네임스페이스** 를 클릭합니다.
3. {% data variables.location.product_location %}에서 사용할 네임스페이스를 찾고 **Unretire** 를 클릭합니다.
   ![네임스페이스 사용 중지 취소](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. 관련 조직으로 이동하여 새 리포지토리를 만듭니다.

   {% tip %}

   **팁:** 네임스페이스 사용 중지를 취소하는 경우 항상 가능한 한 빨리 해당 이름으로 새 리포지토리를 만듭니다. 로컬 리포지토리를 만들기 전에 워크플로가 {% data variables.product.prodname_dotcom_the_website %}에서 연결된 작업을 호출하면 네임스페이스가 다시 사용 중지됩니다. 워크플로에서 사용된, 자주 실행되는 작업의 경우 로컬 리포지토리를 만들기 전에 네임스페이스가 다시 사용 중지된 것을 발견할 수도 있습니다. 이 경우, 새 리포지토리를 만들 때까지 관련 워크플로를 일시적으로 사용하지 않도록 설정할 수 있습니다.

   {% endtip %}
