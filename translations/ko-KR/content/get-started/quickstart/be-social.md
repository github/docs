---
title: 소셜화
redirect_from:
  - /be-social
  - /articles/be-social
  - /github/getting-started-with-github/be-social
  - /github/getting-started-with-github/quickstart/be-social
intro: '{% data variables.product.prodname_dotcom %}에서 사용자, 리포지토리 및 조직과 상호 작용할 수 있습니다. 다른 사용자가 어떤 작업 중인지와 개인 대시보드에서 누구와 연결하는지를 확인합니다.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profile
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 8f57382a4eba028e9c83dda0c5780c240dc3860c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147692115'
---
개인 대시보드에 액세스하는 방법에 대한 자세한 내용은 "[개인 대시보드 정보](/articles/about-your-personal-dashboard)"를 참조하세요.

## 개인 팔로우

{% data variables.product.prodname_dotcom %}에서 다른 사람을 팔로우하면 개인 대시보드에서 해당 공개 활동에 대한 알림을 받게 됩니다. 팔로우하는 사람이 새 리포지토리를 만들거나, 리포지토리를 표시하거나, 다른 사용자를 팔로우하는 경우 활동이 대시보드에 표시됩니다. 

사용자의 프로필 페이지에서 **팔로우** 를 클릭하여 팔로우합니다.

![사용자 팔로우 단추](/assets/images/help/profile/follow-user-button.png)

자세한 내용은 [사용자 팔로우](/get-started/exploring-projects-on-github/following-people)를 참조하세요.

## 리포지토리 보기

리포지토리를 구독하여 해당 리포지토리를 보고하고 활동에 대한 알림을 받을 수 있습니다. 소유자가 리포지토리를 업데이트하면 개인 대시보드에 변경 내용이 표시됩니다. 자세한 내용은 “[구독 보기](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)”를 참조하세요.

리포지토리 맨 위에서 **Watch** 를 클릭하여 시청합니다.

![리포지토리 보기 단추](/assets/images/help/repository/repo-actions-watch.png)

## 대화 조인

{% data reusables.support.ask-and-answer-forum %}

## {% data variables.product.product_name %}에서 통신

{% data variables.product.product_name %}은 뛰어난 소프트웨어를 빌드할 때 커뮤니티와 긴밀하게 상호 작용할 수 있는 기본 제공 협업 통신 도구를 제공합니다. 예를 들어 끌어오기 요청을 만들어 다른 사용자의 프로젝트에 기여하거나 이슈를 사용하여 버그를 추적하거나 리포지토리에서 아이디어를 제안할 수 있습니다. 팀과 토론을 통해 새로운 아이디어를 브레인스토밍할 수도 있습니다. 

이러한 도구에 대한 개요는 "[{% data variables.product.prodname_dotcom %}에서 통신하기 위한 빠른 시작](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)"을 참조하세요.

## 조직 참여

조직은 비즈니스와 오픈 소스 프로젝트가 한 번에 여러 프로젝트에서 협업할 수 있는 공유 계정입니다. 소유자와 관리자는 특별한 권한이 있는 팀을 설정하고, 공개 조직 프로필을 갖고, 조직 내의 활동을 추적할 수 있습니다. 자세한 내용은 “[조직 정보](/articles/about-organizations/)”를 참조하세요.

대시보드에서 대시보드 왼쪽에 있는 사용자 이름의 드롭다운 메뉴를 클릭합니다. 여기서는 자신이 속한 조직을 볼 수 있으며 조직 간에 쉽게 전환할 수 있습니다.

![계정 컨텍스트 드롭다운 전환](/assets/images/help/overview/dashboard-contextswitcher.png)

{% ifversion for-you-feed %}

## 조직 팔로우

{% data reusables.organizations.follow-organizations-beta %}

{% data reusables.organizations.about-following-organizations %}

조직을 팔로우하려면 조직 페이지의 머리글에서 **팔로우** 를 클릭합니다.

![팔로우 단추가 강조 표시된 조직 머리글 스크린샷](/assets/images/help/profile/organization-profile-following.png)

자세한 내용은 “[조직 팔로우](/get-started/exploring-projects-on-github/following-organizations)”를 참조하세요.

{% endif %}

## {% data variables.product.prodname_dotcom %}에서 다른 프로젝트 탐색

{% data variables.product.prodname_dotcom %}의 탐색 페이지에서 새롭고 흥미로운 프로젝트를 검색할 수 있습니다. 나중에 다시 쉽게 찾을 수 있도록 흥미로운 프로젝트를 별표로 표시할 수 있습니다. 별 페이지를 방문하여 별표로 표시된 모든 프로젝트를 확인하세요. 별에 대한 자세한 내용은 "[별을 사용하여 리포지토리 저장](/get-started/exploring-projects-on-github/saving-repositories-with-stars)"을 참조하세요.

대시보드 피드에는 별을 표시하는 리포지토리, 팔로우하는 사용자 및 퍼블릭 리포지토리에 대한 기여를 포함하여 관심사에 따라 프로젝트가 표시됩니다. 대시보드에서 추세 프로젝트를 보고, 토픽을 보고, 컬렉션을 체크 아웃할 수 있습니다. 

더 많은 프로젝트를 탐색하려면 "{% data variables.explore.explore_github %}"를 참조하세요.

## 다음 단계
이제 {% data variables.product.product_name %} 커뮤니티에 연결되었습니다. {% data variables.product.product_name %} 내에서 상호 작용하고 빌드하는 다른 방법이 있습니다.

* {% data reusables.getting-started.set-up-git %}

* {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.contributing-to-projects  %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
