---
title: 조직의 종속성 인사이트 표시 여부 변경
intro: 모든 조직 구성원이 조직의 종속성 인사이트를 보도록 허용하거나 조직 소유자로 보기를 제한할 수 있습니다.
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
ms.openlocfilehash: f6647993672ee56de8c1b8698b1fcdb0dc84147f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109759'
---
조직 소유자는 조직 종속성 인사이트를 보기 위한 제한을 설정할 수 있습니다. 조직의 모든 구성원은 기본적으로 조직 종속성 인사이트를 볼 수 있습니다.

{% ifversion ghec %} Enterprise 소유자는 엔터프라이즈 계정의 모든 조직의 조직 종속성 인사이트를 보기 위한 제한을 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 종속성 인사이트에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”을 참조하세요.
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. “구성원 조직 권한”에서 **구성원이 종속성 인사이트를 볼 수 있도록 허용** 을 선택하거나 선택 취소합니다.
![구성원이 인사이트를 볼 수 있도록 하는 확인란](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. **저장** 을 클릭합니다.
