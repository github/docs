---
title: GitHub 앱의 속도 제한
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
ms.openlocfilehash: b699bd6ca5e36d14f42c6745f94acb5fa5ebdf65
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098605'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## 앱의 속도 제한 정보

{% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}에 대한 속도 제한은 애플리케이션을 설치하는 조직의 플랜에 따라 달라집니다. 자세한 내용은 “[{% data variables.product.company_short %}의 제품](/get-started/learning-about-github/githubs-products)” 및 “[{% data variables.product.company_short %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)”을 참조하세요.

{% endif %}

## 서버 간 요청

{% ifversion ghec or fpt %}

### {% data variables.product.prodname_dotcom_the_website %}에 대한 기본 서버 간 속도 제한

{% endif %}

서버 간 요청을 만드는 {% data variables.product.prodname_github_apps %}는 설치의 최소 속도 제한인 시간당 5,000개 요청을 사용합니다. 20명 이상의 사용자가 있는 조직에 애플리케이션이 설치된 경우 애플리케이션은 각 사용자에 대해 시간당 50개의 요청을 추가로 받습니다. 리포지토리가 20개를 초과하는 설치는 각 리포지토리에 대해 시간당 50개의 요청을 추가로 받습니다. 설치의 최대 속도 제한은 시간당 12,500개 요청입니다.

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_ghe_cloud %}에 대한 서버 간 속도 제한

{% endif %}

{% ifversion fpt or ghec %}

{% 데이터 variables.location.product_location %}의 엔터프라이즈 내 조직에 설치된 {% 데이터 variables.product.prodname_github_apps %}은(는) 앱을 설치한 조직당 시간당 15,000개의 요청이 제한됩니다.

{% endif %}

## 사용자-서버 요청

{% data variables.product.prodname_github_apps %}와 {% data variables.product.prodname_oauth_apps %}는 사용자를 대신하여 작업을 수행하여 사용자가 앱에 권한을 부여한 후 사용자-서버 요청을 수행할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에 대한 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)” 및 “[{% data variables.product.prodname_oauth_apps %}에 대한 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”를 참조하세요.

{% data variables.product.prodname_oauth_apps %}의 사용자-서버 요청은 OAuth 토큰으로 인증됩니다. {% data variables.product.prodname_github_apps %}의 사용자-서버 요청은 OAuth 토큰 또는 만료되는 사용자 액세스 토큰으로 인증됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에 대한 사용자 식별 및 권한 부여](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)” 및 “[{% data variables.product.prodname_oauth_apps %}에 대한 권한 부여](/developers/apps/building-oauth-apps/authorizing-oauth-apps)”를 참조하세요.

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_dotcom_the_website %}에 대한 기본 사용자-서버 속도 제한

{% endif %}

{% ifversion ghec %}

{% data variables.product.prodname_github_apps %}에서 만든 사용자-서버 요청에 대한 속도 제한은 앱이 설치된 위치에 따라 달라집니다. {% 데이터 variables.location.product_location %}에서 엔터프라이즈가 소유한 조직 또는 리포지토리에 앱을 설치하는 경우 엔터프라이즈 외부의 설치에 비해 비율이 높습니다.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_ghe_cloud %}에 대한 사용자-서버 속도 제한

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## 추가 참고 자료

- REST API 설명서의 “[속도 제한](/rest/overview/resources-in-the-rest-api#rate-limiting)”
- GraphQL API 설명서의 “[리소스 제한](/graphql/overview/resource-limitations)”
