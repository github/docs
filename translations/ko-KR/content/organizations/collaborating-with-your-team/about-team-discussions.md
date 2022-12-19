---
title: 팀 토론 정보
intro: '팀은 함께 계획을 세우거나, 서로 업데이트하거나, 조직의 팀 페이지에 있는 토론 게시물에서 원하는 주제에 대해 이야기할 수 있습니다.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 173a067c99ff6ab10ceb6d7f0a7ef288de58b658
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135208'
---
{% data reusables.organizations.team-discussions-purpose %}

모든 조직 멤버는 팀 페이지에 게시하거나 퍼블릭 토론에 참여할 수 있습니다. {% data reusables.organizations.team-discussions-permissions %}

![퍼블릭 및 프라이빗 토론이 있는 팀 페이지의 토론 탭](/assets/images/help/organizations/team-page-discussions-tab.png)

다른 곳에서 참조하도록 팀 토론에 링크를 설정할 수 있습니다. 나중에 빠른 참조를 위해 중요한 게시물을 팀 페이지에 고정할 수 있습니다. 자세한 내용은 "[팀 토론 고정](/organizations/collaborating-with-your-team/pinning-a-team-discussion)"을 참조하세요.

![고정된 토론이 있는 팀 페이지의 고정된 토론 탭](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %} 소유자는 전체 조직에 대한 팀 토론을 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[조직에 대한 팀 토론 사용 안 함](/articles/disabling-team-discussions-for-your-organization)”을 참조하세요.

## 팀 토론에 대한 알림

누군가가 팀 페이지에 퍼블릭 토론을 게시하거나 토론에 회신하면 팀 멤버와 모든 자식 팀의 멤버가 메일 또는 웹 알림을 받습니다. 누군가가 팀 페이지에 프라이빗 토론을 게시하거나 토론에 회신하는 경우 팀 멤버만 알림을 받습니다.

{% tip %}

**팁:** 알림 설정에 따라 메일, {% data variables.product.product_name %}의 웹 알림 페이지 또는 둘 다를 통해 업데이트를 받게 됩니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”을 참조하세요.

{% endtip %}

기본적으로 팀 토론에서 사용자 이름이 언급된 경우 사용자 이름과 해당 게시물에 대한 회신을 언급하는 게시물에 대한 알림을 받게 됩니다. 또한 기본적으로 게시물에 회신하는 경우 게시물의 다른 회신에 대한 알림을 받게 됩니다.

팀 토론에 대한 알림을 해제하려면 특정 토론 게시물 구독을 취소하거나 알림 설정을 변경하여 특정 팀의 토론을 보지 않거나 완전히 무시할 수 있습니다. 해당 팀의 토론을 보지 않더라도 특정 토론 게시물에 대한 알림을 구독할 수 있습니다.

자세한 내용은 “[구독 보기](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)” 및 "[중첩된 팀](/articles/about-teams/#nested-teams)"을 참조하세요.

{% ifversion fpt or ghec %}

## 조직 토론

조직 토론을 사용하여 조직 전체에서 대화를 진행할 수도 있습니다. 자세한 내용은 “[조직의 GitHub 토론 사용 또는 사용 안 함](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”을 참조하세요.

{% endif %}

## 추가 참고 자료

- "[{% data variables.product.prodname_dotcom %}에서 커뮤니케이션하기 위한 빠른 시작](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)"
- “[팀 정보](/articles/about-teams)”
- "[팀 토론 만들기](/organizations/collaborating-with-your-team/creating-a-team-discussion)"
- "[팀 토론 편집 또는 삭제](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)"
