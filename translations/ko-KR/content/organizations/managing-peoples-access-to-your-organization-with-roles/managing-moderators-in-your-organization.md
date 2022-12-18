---
title: 조직에서 중재자 관리
intro: 조직의 개인 또는 팀에게 중재자 역할에 할당하여 액세스를 차단하고 제한하는 기능을 제공할 수 있습니다.
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076719'
---
## 조직 중재자 정보

경우에 따라 기여자를 차단하거나 조직 또는 개별 리포지토리에 대한 상호 작용 제한을 설정해야 합니다. 조직 소유자는 이러한 작업을 수행할 수 있지만 이러한 작업을 조직의 다른 멤버에게 위임할 수 있습니다. 조직 멤버 또는 팀을 중재자 역할에 할당하여 이 작업을 수행할 수 있습니다.

조직 중재자는 다음을 수행할 수 있습니다.
* 조직에서 사용자를 차단 및 차단 해제합니다. 자세한 내용은 “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”을 참조하세요.
* 조직 상호 작용 제한을 관리합니다. 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)”을 참조하세요.
* 리포지토리 상호 작용 제한을 관리합니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
* 조직이 소유한 모든 퍼블릭 리포지토리에서 댓글을 숨깁니다. 자세한 내용은 "[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"를 참조하세요.

누군가를 조직 중재자로 만든다고 해서 위에 나열된 능력 이외의 추가 능력이 부여되는 것은 아닙니다. 예를 들어 리포지토리에 대한 읽기 액세스 권한만 있는 사용자는 중재자가 되어도 쓰기 액세스 권한을 얻지 못합니다.

최대 10명의 개별 사용자 또는 팀을 중재자로 추가할 수 있습니다. 이미 10명의 개인 및/또는 10개의 팀을 사용자로 할당한 상태에서 더 추가하려는 경우 중재자 팀의 사용자를 그룹화한 다음, 기존 과제 중 하나 이상을 대체할 수 있습니다. 자세한 내용은 “[팀 만들기](/organizations/organizing-members-into-teams/creating-a-team)”를 참조하세요.

## 조직 중재자 추가

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 “액세스” 섹션에서 **{% octicon "report" aria-label="The report icon" %} 조정** 을 선택한 다음, **중재자** 를 클릭합니다.
1. **중재자** 아래에서 중재자 역할을 할당할 사람 또는 팀을 검색하고 선택합니다. 선택한 각 사람 또는 팀이 검색 창 아래 목록에 표시됩니다. 
  ![중재자 검색 필드 및 목록](/assets/images/help/organizations/add-moderators.png)


## 조직 중재자 제거

위의 1-3단계를 수행한 다음, 중재자로 제거하려는 사람 또는 팀 옆에 있는 **중재자 제거** 를 클릭합니다.
