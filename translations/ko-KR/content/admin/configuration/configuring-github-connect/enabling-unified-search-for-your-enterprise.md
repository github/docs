---
title: 엔터프라이즈에 대한 통합 검색 사용
shortTitle: Unified search
intro: '사용자가 {% 데이터 variables.location.product_location %}에서 검색할 때 검색 결과에 {% 데이터 variables.product.prodname_dotcom_the_website %}에 리포지토리를 포함하도록 허용할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
ms.openlocfilehash: 84f745f26cf44faa69c867a845324c6f244db9d2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098339'
---
## {% 데이터 variables.enterprise.prodname_unified_search %} 정보

{% data reusables.github-connect.beta %}

통합 검색을 사용하도록 설정하면 {% 데이터 variables.product.prodname_ghe_managed %}{% endif %}의 {% 데이터 variables.location.product_location %}{% ifversion ghae %}에서 검색할 때 {% 데이터 variables.product.prodname_dotcom_the_website %}의 콘텐츠에서 검색 결과를 볼 수 있습니다. 

{% data variables.product.prodname_dotcom_the_website %}에서 퍼블릭 리포지토리에 대한 검색 결과를 허용하도록 선택할 수 있으며, {% data variables.product.prodname_ghe_cloud %}의 프라이빗 리포지토리에 대한 검색 결과 허용을 개별적으로 선택할 수 있습니다. 프라이빗 리포지토리에 대한 통합 검색을 사용하도록 설정하는 경우 사용자는 액세스 권한이 있고 연결된 조직 또는 엔터프라이즈 계정이 소유한 프라이빗 리포지토리만 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)”를 참조하세요.

사용자는 두 환경에 모두 액세스할 수 있더라도 {% 데이터 variables.product.prodname_dotcom_the_website %}에서 {% 데이터 variables.location.product_location %}을(를) 검색할 수 없습니다.

{% 데이터 variables.location.product_location %}에 대한 통합 검색을 사용하도록 설정한 후 개별 사용자가 {% 데이터 variables.location.product_location %}의 {% 데이터 variables.product.prodname_dotcom_the_website %}에서 개인 리포지토리의 검색 결과를 보려면 먼저 각 사용자가 {% 데이터 variables.product.product_name %}의 사용자 계정과 {% 데이터 variables.product.prodname_dotcom_the_website %}의 사용자 계정에 연결해야 합니다. 자세한 내용은 “[프라이빗 엔터프라이즈 계쩡에서 {% data variables.product.prodname_dotcom_the_website %} 리포지토리 검색 사용](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)”을 참조하세요.

REST 및 GraphQL API를 통한 검색에는 {% data variables.product.prodname_dotcom_the_website %} 검색 결과가 포함되지 않습니다. {% data variables.product.prodname_dotcom_the_website %}에서 고급 검색 및 위키 정보 검색은 지원되지 않습니다.

## {% 데이터 variables.enterprise.prodname_unified_search %} 사용

{% 데이터 variables.enterprise.prodname_unified_search %}을(를) 사용하도록 설정하려면 먼저 {% 데이터 variables.product.prodname_github_connect %}을(를) 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 관리](/admin/configuration/configuring-github-connect/managing-github-connect)”를 참조하세요.

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% 데이터 variables.location.product_location %} 및 {% 데이터 variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. “사용자는 {% data variables.product.prodname_dotcom_the_website %}을 검색할 수 있습니다.”에서 드롭다운 메뉴의 **사용** 을 클릭합니다.
  ![GitHub.com 검색 드롭다운 메뉴에서 검색 옵션 사용](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. “사용자는 {% data variables.product.prodname_dotcom_the_website %}에서 프라이빗 리포지토리를 검색할 수 있습니다.”에서 드롭다운 메뉴의 **사용** 을 클릭합니다.
    ![GitHub.com 검색 드롭다운 메뉴에서 프라이빗 리포지토리 검색 옵션 사용](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
