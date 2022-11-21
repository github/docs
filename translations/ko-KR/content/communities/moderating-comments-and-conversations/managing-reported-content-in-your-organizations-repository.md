---
title: 조직의 리포지토리에서 보고된 콘텐츠 관리
intro: 기여자가 리포지토리에서 와해성 콘텐츠를 보고한 후 리포지토리 유지 관리자는 보고서를 보고 관리할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117652'
---
리포지토리에 대한 관리자 권한이 있는 모든 사용자는 리포지토리에 대해 보고된 콘텐츠를 보고 관리할 수 있습니다.

## 보고된 콘텐츠 관리 정보

보고된 콘텐츠를 보거나 관리하려면 먼저 리포지토리에 대해 보고된 콘텐츠를 사용하도록 설정해야 합니다. 자세한 내용은 “[참여자가 조직의 리포지토리에서 남용을 보고하는 방식 관리](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)”를 참조하세요.

문제성 콘텐츠의 보고서를 추적, 심사, 응답할 수 있습니다. “남용 보고서” 목록에서 모든 보고서를 보고 {% data variables.product.prodname_dotcom %}에 대해 보고된 각 댓글로 바로 이동할 수 있습니다.

{% data reusables.community.tools-for-moderating %}

문제성 콘텐츠 조정을 완료한 후에는 보고서를 해결됨으로 표시할 수 있습니다. 조정을 완료하지 않은 경우에는 보고서를 해결되지 않음으로 표시할 수 있습니다.

## 참여자가 보고한 콘텐츠 보기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 보려는 보고된 콘텐츠의 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The edit icon" %}을 클릭한 다음 **콘텐츠 보기** 를 클릭합니다.
  ![보고된 콘텐츠에 대한 편집 드롭다운의 “콘텐츠 보기”](/assets/images/help/repository/reported-content-report-view-content.png)

## 보고서 확인

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 확인하려는 보고서의 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The edit icon" %}을 클릭한 다음 **확인됨으로 표시** 를 클릭합니다.
  ![보고된 콘텐츠에 대한 편집 드롭다운의 “확인됨으로 표시”](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## 보고서 확인 취소

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. 확인을 취소하려는 보고서의 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The edit icon" %}을 클릭한 다음 **확인되지 않음으로 표시** 를 클릭합니다.
  ![보고된 콘텐츠에 대한 편집 드롭다운의 “확인되지 않음으로 표시”](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## 추가 참고 자료

- “[커뮤니티 관리 및 조정 정보](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)”
