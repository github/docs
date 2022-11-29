---
title: 조직 대시보드 정보
intro: '조직 구성원은 하루 중 언제라도 조직의 대시보드를 방문하여 최근 활동을 계속 업데이트하고, 조직에서 작업 중이거나 팔로우 중인 문제 및 끌어오기 요청을 추적할 수 있습니다.'
redirect_from:
  - /articles/about-your-organization-dashboard
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organization-dashboard
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organization dashboard
ms.openlocfilehash: c5f25d589e7b640fa411cd26f004961081c9d8e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880776'
---
## 조직 대시보드 액세스

{% data reusables.dashboard.access-org-dashboard %}

## 최근 활동 찾기

뉴스 피드의 “최근 활동” 섹션에서 조직에서 최근에 업데이트된 이슈 및 끌어오기 요청을 신속하게 찾아서 후속 조치를 수행할 수 있습니다.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## 조직에서 리포지토리 찾기

대시보드의 왼쪽 사이드바에서 참여하는 조직의 상위 리포지토리에 액세스할 수 있습니다.

![조직에서 가장 활발하게 참여하는 리포지토리 목록](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

## 조직의 활동으로 업데이트 상태 유지

뉴스 피드의 “모든 활동” 섹션에서 조직의 다른 팀 및 리포지토리의 업데이트를 볼 수 있습니다.

“모든 활동” 섹션에는 구독하지 않은 리포지토리의 활동과 팔로우하지 않는 사람의 활동을 포함하여 조직의 모든 최근 활동이 표시됩니다. 자세한 내용은 "[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" 및 "[개인 팔로우](/articles/following-people)"를 참조하세요.

예를 들어 조직 뉴스 피드는 조직의 누군가가 다음과 같은 작업을 수행하는 경우 업데이트를 표시합니다.
 - 새 분기를 만듭니다.
 - 이슈 또는 끌어오기 요청에 대한 주석을 작성합니다.
 - 끌어오기 요청 검토 주석을 제출합니다.
 - 리포지토리를 포크합니다.
 - 위키 페이지를 만듭니다.
 - 커밋을 푸시합니다. {% ifversion fpt or ghes or ghec %}
 - 퍼블릭 리포지토리를 만듭니다. {% endif %}

## 추가 정보

- “[개인 대시보드 정보](/articles/about-your-personal-dashboard)”
