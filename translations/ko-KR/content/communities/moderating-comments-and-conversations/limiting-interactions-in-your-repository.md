---
title: 리포지토리에서 상호 작용 제한
intro: 퍼블릭 리포지토리에서 특정 사용자에 대해 제한된 작업 기간을 일시적으로 적용할 수 있습니다.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067252'
---
## 임시 상호 작용 제한 정보

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 제한 기간이 지나면 사용자는 리포지토리에서 정상적인 작업을 계속할 수 있습니다.

{% data reusables.community.types-of-interaction-limits %}

개인 계정 또는 조직이 소유한 모든 리포지토리에서 활동 제한을 사용하도록 설정할 수도 있습니다. 사용자 수준 또는 조직 전체 제한을 사용하는 경우 계정 소유의 개별 리포지토리에 대한 작업을 제한할 수 없습니다. 자세한 내용은 "[개인 계정에 대한 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)" 및 "[조직의 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)"을 참조하세요.

## 리포지토리에서 상호 작용 제한

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 사이드바에서 **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} 조정 옵션** 을 선택한 다음 **상호 작용 제한** 을 클릭합니다.
{% data reusables.community.set-interaction-limit %} ![임시 상호 작용 제한 옵션](/assets/images/help/repository/temporary-interaction-limits-options.png)

## 추가 참고 자료
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[조직 리포지토리에 대한 개인 액세스 권한 관리](/articles/managing-an-individual-s-access-to-an-organization-repository)”
- "[개인 계정 리포지토리에 대한 권한 수준](/articles/permission-levels-for-a-user-account-repository)"
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
- “[조직에서 조정자 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)”
