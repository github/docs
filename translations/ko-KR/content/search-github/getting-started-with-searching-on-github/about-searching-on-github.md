---
title: GitHub 검색 정보
intro: 'GitHub의 통합 검색은 {% data variables.product.product_name %}의 여러 리포지토리, 사용자, 코드 줄에서 검색할 수 있습니다.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159103'
---
{% ifversion github-code-search %} {% note %}

  **참고:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- 모든 {% data variables.product.product_name %}에서 전역으로 검색하려면 원하는 항목을 페이지 맨 위에 있는 검색 필드에 입력하고 검색 드롭다운 메뉴에서 “모든 {% data variables.product.prodname_dotcom %}”를 선택합니다.
- 특정 리포지토리 또는 조직 내에서 검색하려면 리포지토리 또는 조직 페이지로 이동하고 원하는 항목을 페이지 위쪽의 검색 필드에 입력한 다음 **Enter** 키를 누릅니다.

{% note %}

**참고:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} 사이트는 {% data variables.product.product_name %}에서 검색할 수 없습니다. 그러나 코드 검색을 사용하여 리포지토리의 기본 분기에 있는 경우 원본 콘텐츠를 검색할 수 있습니다. 자세한 내용은 “[코드 검색](/search-github/searching-on-github/searching-code)”을 참조하세요. {% data variables.product.prodname_pages %}에 대한 자세한 내용은 “[GitHub Pages란?](/articles/what-is-github-pages/)”을 참조하세요.
- 현재 검색은 정확한 일치를 지원하지 않습니다.
- 코드 파일에서 검색할 때마다 각 파일의 처음 두 결과만 반환됩니다.

{% endnote %}

{% data variables.product.product_name %}에서 검색을 실행한 후 결과를 정렬하거나 사이드바에서 언어 중 하나를 클릭하여 더 구체화할 수 있습니다. 자세한 내용은 “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results)”을 참조하세요.

{% data variables.product.product_name %} 검색은 변경 내용이 {% data variables.product.product_name %}에 푸시될 때마다 ElasticSearch 클러스터를 사용하여 프로젝트를 인덱싱합니다. 문제 및 끌어오기 요청은 만들거나 수정할 때 인덱싱됩니다.

## {% data variables.product.prodname_dotcom %}에 대한 검색 유형

{% data variables.location.product_location %}에서 액세스할 수 있는 모든 리포지토리에서 다음 정보를 검색할 수 있습니다.

- [리포지토리](/search-github/searching-on-github/searching-for-repositories)
- [토픽](/search-github/searching-on-github/searching-topics)
- [문제 및 끌어오기 요청](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [토론](/search-github/searching-on-github/searching-discussions){% endif %}
- [코드](/search-github/searching-on-github/searching-code)
- [커밋](/search-github/searching-on-github/searching-commits)
- [사용자](/search-github/searching-on-github/searching-users)
- [패키지](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## 시각적 인터페이스를 사용하여 검색

{% data variables.search.search_page_url %} 또는 {% data variables.search.advanced_url %}를 사용하여 {% data variables.product.product_name %}를 검색할 수 있습니다. {% ifversion command-palette %}또는 {% data variables.product.prodname_command_palette %}에서 대화형 검색을 사용하여 키보드로 UI, 특정 사용자, 리포지토리 또는 조직에서 현재 위치 및 모든 {% data variables.product.product_name %}에서 전역적으로 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”를 참조하세요.{% endif %}

{% data variables.search.advanced_url %}는 검색 쿼리를 생성하기 위한 시각적 인터페이스를 제공합니다. 리포지토리에 있는 별 수 또는 포크 수와 같은 다양한 요소로 검색을 필터링할 수 있습니다. 고급 검색 필드를 입력하면 쿼리가 위쪽 검색 창에 자동으로 생성됩니다.

![고급 검색](/assets/images/help/search/advanced_search_demo.gif)

## 프라이빗 엔터프라이즈 환경의 {% data variables.product.prodname_dotcom_the_website %}에서 리포지토리 검색

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom_the_website %} 및 {% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}을(를) 모두 사용하고 엔터프라이즈 소유자가 {% data variables.enterprise.prodname_unified_search %}를 사용하도록 설정한 경우 {% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}에서 두 환경을 동시에 검색할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_server %} 설명서](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) 또는 [{% data variables.product.prodname_ghe_managed %} 설명서](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)를 참조하세요.

{% else %}

{% data variables.product.prodname_dotcom_the_website %} 및 {% data variables.product.product_name %}을(를) 모두 사용하고 엔터프라이즈 소유자가 {% data variables.enterprise.prodname_unified_search %}를 사용하도록 설정한 경우 {% data variables.product.product_name %}에서 두 환경을 동시에 검색할 수 있습니다. 엔터프라이즈 소유자가 {% data variables.enterprise.prodname_unified_search %}을(를) 사용하도록 설정하는 방법에 대한 자세한 내용은 "[엔터프라이즈에 {% data variables.enterprise.prodname_unified_search %} 사용](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)"을 참조하세요.

{% data variables.product.product_name %}의 엔터프라이즈 소유자는 {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리와 {% data variables.product.prodname_github_connect %}을(를) 통해 {% data variables.product.prodname_dotcom_the_website %}에 연결된 {% data variables.product.prodname_dotcom_the_website %}에서 조직 또는 엔터프라이즈가 소유한 프라이빗 리포지토리에 대해 {% data variables.product.product_name variables.enterprise.prodname_unified_search %}을(를) 개별적으로 사용하도록 설정할 수 있습니다.

프라이빗 리포지토리에 {% data variables.enterprise.prodname_unified_search %}를 사용하려면 먼저 {% data variables.product.prodname_dotcom_the_website %} 및 {% data variables.product.product_name %}에서 개인 계정을 연결해야 합니다. 자세한 내용은 “[프라이빗 엔터프라이즈 환경에서 {% data variables.product.prodname_dotcom_the_website %} 리포지토리 검색 사용](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)”을 참조하세요.

{% data variables.product.product_name %}에서 검색하는 경우 액세스 권한이 있고 연결된 조직 또는 엔터프라이즈 계정이 소유한 프라이빗 리포지토리만 검색 결과에 포함됩니다. 사용자와 다른 누구도 {% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %}의 개인 계정이 소유한 프라이빗 리포지토리를 검색할 수 없습니다.

검색을 한 환경으로 제한하려면 {% data variables.search.advanced_url %}에서 필터 옵션을 사용하거나 검색 접두사로 `environment:`를 사용할 수 있습니다. {% data variables.product.product_name %}에서만 콘텐츠를 검색하려면 `environment:local` 검색 구문을 사용합니다. {% data variables.product.prodname_dotcom_the_website %}에서만 콘텐츠를 검색하려면 `environment:github`를 사용합니다.
{% endif %}

## 추가 참고 자료

- “[검색 구문 이해](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”
- “[GitHub에서 검색](/articles/searching-on-github)”
