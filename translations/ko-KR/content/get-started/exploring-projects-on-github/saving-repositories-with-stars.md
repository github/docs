---
title: 별과 함께 리포지토리 저장
intro: '리포지토리와 토픽에 별을 지정하여 관심 있는 프로젝트를 추적하고{% ifversion fpt or ghec %} 뉴스 피드에서 관련 콘텐츠를 찾을 수 있습니다{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374181'
---
{% data variables.explore.your_stars_page %}에서 별이 지정된 리포지토리 및 토픽을 검색, 정렬, 필터링할 수 있습니다.

## 별 정보

별을 지정하면 나중에 리포지토리 또는 토픽을 쉽게 찾을 수 있습니다. {% data variables.explore.your_stars_page %}로 이동하여 별을 지정한 모든 리포지토리와 토픽을 볼 수 있습니다.

{% ifversion fpt or ghec %} 리포지토리 및 토픽에 별을 지정하여 {% data variables.product.product_name %}에서 유사한 프로젝트를 검색할 수 있습니다. 리포지토리 또는 토픽에 별을 지정하면 {% data variables.product.product_name %}에서 개인 대시보드에 관련 콘텐츠를 추천할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 오픈 소스에 기여하는 방법 찾기](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)” 및 “[개인 대시보드 정보](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)”를 참조하세요.
{% endif %}

리포지토리에 별을 지정하는 경우 리포지토리 유지 관리자의 작업에 대한 감사의 의미도 있습니다. {% data variables.product.prodname_dotcom %}의 리포지토리 순위는 대체로 리포지토리에 있는 별 수에 따라 달라집니다. 또한 [탐색](https://github.com/explore)에서 보유한 별 수에 따라 인기 있는 리포지토리가 표시됩니다.

## 리포지토리에 별 지정

리포지토리에 별을 지정하는 작업은 2단계로 이루어진 간단한 프로세스입니다.

{% data reusables.repositories.navigate-to-repo %}
1. 페이지 오른쪽 위에 있는 **별** 을 클릭합니다.
![리포지토리에 별 지정](/assets/images/help/stars/starring-a-repository.png)
1. 필요에 따라 이전에 별이 지정된 리포지토리에서 별을 제거하려면 **별 제거** 를 클릭합니다.
![리포지토리에서 별 제거](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## 리포지토리에 별 지정한 사용자 보기


퍼블릭 리포지토리 또는 액세스 권한이 있는 프라이빗 리포지토리에 별을 지정한 모든 사용자를 볼 수 있습니다. 


리포지토리에 별을 지정한 모든 사용자를 보려면 리포지토리 URL 끝에 `/stargazers`를 추가합니다. 예를 들어, github/docs 리포지토리에 별을 지정한 사용자를 보려면 https://github.com/github/docs/stargazers 를 방문하세요.


## 목록을 사용하여 별이 지정된 리포지토리 구성

{% note %}

**참고:** 목록은 현재 퍼블릭 베타로 제공되며 변경될 수 있습니다.

{% endnote %}

퍼블릭 목록을 사용하여 별을 지정한 리포지토리를 큐레이팅합니다. 별 페이지(`https://github.com/USERNAME?tab=stars`)에 표시되는 퍼블릭 목록을 만들 수 있습니다.

목록에 프라이빗 리포지토리를 추가하는 경우 프라이빗 리포지토리는 리포지토리에 대한 `read` 권한이 있는 사용자에 대해서만 목록에 표시됩니다.

![별 페이지의 목록 스크린샷](/assets/images/help/stars/lists-overview-on-stars-page.png)

리포지토리 페이지 또는 별이 지정된 리포지토리 목록 중 어디에서든, 리포지토리의 **별** 또는 **별 지정** 드롭다운 메뉴가 표시되는 모든 곳에서 기존 또는 새 목록에 리포지토리를 추가할 수 있습니다. 

![리포지토리 페이지에서 추천된 목록 옵션이 있는 “별” 드롭다운 메뉴 스크린샷](/assets/images/help/stars/stars-dropdown-on-repo.png)

![별이 지정된 리포지토리 목록에서 추천된 목록 옵션이 있는 “별 지정” 드롭다운 메뉴 스크린샷](/assets/images/help/stars/add-repo-to-list.png)

### 목록 만들기

{% data reusables.stars.stars-page-navigation %}
2. “목록” 옆에 있는 **목록 만들기** 를 클릭합니다.
  ![“목록 만들기” 단추 스크린샷](/assets/images/help/stars/create-list.png)
3. 목록의 이름과 설명을 입력하고 **만들기** 를 클릭합니다.
  ![이름과 설명을 입력하는 위치를 보여 주고 “만들기” 단추가 있는 모달 스크린샷](/assets/images/help/stars/create-list-with-description.png)

### 목록에 리포지토리 추가

{% data reusables.stars.stars-page-navigation %}
2. 목록에 추가할 리포지토리를 찾습니다.
  ![별이 지정된 리포지토리 검색 창 스크린샷](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. 추가하려는 리포지토리 옆에 있는 **별 지정** 드롭다운 메뉴를 사용하여 목록을 선택합니다.
  ![목록 확인란을 보여 주는 드롭다운 스크린샷](/assets/images/help/stars/add-repo-to-list.png)

### 목록에서 리포지토리 제거

{% data reusables.stars.stars-page-navigation %}
2. 목록을 선택합니다.
3. 제거하려는 리포지토리 옆에 있는 **별 지정** 드롭다운 메뉴를 사용하여 목록 선택을 취소합니다.
  ![목록 확인란을 보여 주는 드롭다운 스크린샷](/assets/images/help/stars/add-repo-to-list.png)

### 목록 이름 또는 설명 편집

{% data reusables.stars.stars-page-navigation %}
1. 편집하려는 목록을 선택합니다.
2. **목록 편집** 을 클릭합니다.
3. 이름 또는 설명을 업데이트하고 **목록 저장** 을 클릭합니다.
  ![“목록 저장” 단추를 보여 주는 모달 스크린샷](/assets/images/help/stars/edit-list-options.png) 

### 목록 삭제

{% data reusables.stars.stars-page-navigation %}
2. 삭제하려는 목록을 선택합니다.
3. **목록 삭제** 를 클릭합니다.
  ![“목록 삭제” 단추를 보여 주는 모달 스크린샷](/assets/images/help/stars/edit-list-options.png)
4. 확인하려면 **삭제** 를 클릭합니다.

{% endif %}

## 별이 지정된 리포지토리 및 토픽 검색

{% data variables.explore.your_stars_page %}의 검색 창을 사용하여 별을 지정한 리포지토리와 토픽을 빠르게 찾을 수 있습니다. 

1. {% data variables.explore.your_stars_page %}로 이동합니다.
1. 검색 창을 사용하여 별이 지정된 리포지토리 또는 토픽을 이름으로 찾습니다.
![별을 통해 검색](/assets/images/help/stars/stars_search_bar.png)

검색 창은 리포지토리 또는 토픽의 이름으로만 검색하며 다른 한정자(예: 리포지토리 크기 또는 마지막으로 업데이트된 시기)로 검색하지 않습니다.

## 별 페이지에서 별 정렬 및 필터링

정렬 또는 필터링을 사용하여 별 페이지에서 별이 지정된 리포지토리 및 토픽을 보는 방법을 사용자 지정할 수 있습니다.

1. {% data variables.explore.your_stars_page %}로 이동합니다.
1. 별을 정렬하려면 **정렬** 드롭다운 메뉴를 선택한 다음, **최근에 별 지정**, **최근에 활성화** 또는 **가장 많은 별** 을 선택합니다.
![별 정렬](/assets/images/help/stars/stars_sort_menu.png)
1. 해당 언어에 따라 별 목록을 필터링하려면 **언어별로 필터링** 에서 원하는 언어를 클릭합니다.
![언어별로 별 필터링](/assets/images/help/stars/stars_filter_language.png)
1. 리포지토리 또는 토픽에 따라 별 목록을 필터링하려면 원하는 옵션을 클릭합니다.
![토픽별로 별 필터링](/assets/images/help/stars/stars_filter_topic.png)

## 추가 참고 자료

- “[토픽을 사용하여 리포지토리 분류](/articles/classifying-your-repository-with-topics)”
