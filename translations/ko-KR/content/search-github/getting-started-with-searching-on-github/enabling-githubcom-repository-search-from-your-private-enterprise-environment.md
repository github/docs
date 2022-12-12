---
title: 프라이빗 엔터프라이즈 환경에서 GitHub.com 리포지토리 검색 사용
shortTitle: Search GitHub.com from enterprise
intro: '{% data variables.product.prodname_dotcom_the_website %} 및 프라이빗 {% data variables.product.prodname_enterprise %} 환경의 개인 계정을 연결하여{% ifversion fpt or ghec %} 프라이빗 환경{% else %} {% data variables.product.product_name %}{% endif %}의 특정 {% data variables.product.prodname_dotcom_the_website %} 리포지토리에서 콘텐츠를 검색할 수 있습니다.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: b5ef08300124c02dcba2a2e0eacae097b7dfdddd
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098877'
---
## {% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %} 리포지토리에 대한 검색 정보

{% 데이터 variables.product.prodname_ghe_managed %}{% endif %}의 {% 데이터 variables.location.product_location %}{% ifversion ghae %}에서 {% 데이터 variables.product.prodname_ghe_cloud %}에서 지정된 프라이빗 리포지토리를 검색할 수 있습니다. 환경 간 검색에 대한 자세한 내용은 "[GitHub 검색 정보](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)"를 참조하세요.

## 필수 조건

{% 데이터 variables.product.product_name %}의 엔터프라이즈 소유자는 개인 리포지토리에 대해 {% 데이터 variables.product.prodname_github_connect %} 및 {% 데이터 variables.enterprise.prodname_unified_search %}을(를) 사용하도록 설정해야 합니다. 자세한 내용은 "[엔터프라이즈에 {% 데이터 variables.enterprise.prodname_unified_search %} 사용"을 참조하세요](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise).

## {% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %} 리포지토리 검색 사용

1. {% data variables.product.product_name %} 및 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
1. {% data variables.product.product_name %}의 페이지 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음, **설정** 을 클릭합니다.
![사용자 표시줄의 설정 아이콘](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
