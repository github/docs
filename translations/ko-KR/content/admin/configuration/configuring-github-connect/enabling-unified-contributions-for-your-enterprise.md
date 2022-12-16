---
title: 엔터프라이즈에 통합 기여 사용
shortTitle: Unified contributions
intro: '사용자가 {% 데이터 variables.product.prodname_dotcom_the_website %}의 기여 그래프에 {% 데이터 variables.location.product_location %}에 대한 작업에 대한 익명화된 기여 횟수를 포함하도록 허용할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: 6c9fa2c07de998a0b4cc4988786de51c9b79f87c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098340'
---
{% data reusables.github-connect.beta %}

## 통합 기여 정보

엔터프라이즈 소유자는 최종 사용자가 {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_dotcom_the_website %} 기여 그래프로 작업에 대한 익명화된 기여 횟수를 보낼 수 있도록 허용할 수 있습니다.

{% 데이터 variables.enterprise.prodname_unified_contributions %}을(를) 사용하도록 설정한 후 개별 사용자가 {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_dotcom_the_website %}로 기여 횟수를 보내기 전에 각 사용자는 {% 데이터 variables.product.product_name %}의 사용자 계정을 {% 데이터 variables.product.prodname_dotcom_the_website %}의 개인 계정과 연결해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 보내기](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”를 참조하세요.

{% data reusables.github-connect.sync-frequency %}

엔터프라이즈 소유자가 기능을 사용하지 않도록 설정하거나 개별 사용자가 연결을 옵트아웃하는 경우 {% data variables.product.product_name %}에서의 기여 횟수는 {% data variables.product.prodname_dotcom_the_website %}에서 삭제됩니다. 사용자가 자신의 프로필을 사용하지 않도록 설정한 후 다시 연결하면 지난 90일 동안의 기여 횟수가 복원됩니다.

{% data variables.product.product_name %}는 연결된 사용자에 대한 기여 횟수와 소스({% data variables.product.product_name %})**만** 보냅니다. 기여 또는 수행 방법에 대한 정보는 보내지 않습니다.

## 통합 기여 사용

{% 데이터 variables.enterprise.prodname_unified_contributions %}에서 {% 데이터 variables.location.product_location %}을(를) 사용하도록 설정하기 전에 {% 데이터 variables.product.prodname_github_connect %}을(를) 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 관리](/admin/configuration/configuring-github-connect/managing-github-connect)”를 참조하세요.

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% 데이터 variables.location.product_location %} 및 {% 데이터 variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. “사용자가 {% data variables.product.prodname_dotcom_the_website %}에 기여 횟수를 공유할 수 있음”에서 **액세스 요청** 을 클릭합니다.
  ![통합 기여에 대한 액세스 요청 옵션](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. 추가 지침을 받으려면 {% data variables.product.prodname_ghe_server %} 사이트에 [로그인](https://enterprise.github.com/login)합니다.

액세스를 요청하면 사용자를 {% data variables.product.prodname_ghe_server %} 사이트로 리디렉션하여 현재 서비스 약관을 확인할 수 있습니다.
{% endif %}
