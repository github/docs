---
title: 조직에서 멤버 이름 표시 관리
intro: 조직의 구성원이 조직의 프라이빗 리포지토리에서 주석 작성자의 프로필 이름을 볼 수 있도록 허용할 수 있습니다.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: a990098874393e17f992ffac7b04bcef1b1bcfc4
ms.sourcegitcommit: 9e0d21122ddfcf3f0dbba9b365ba902a2f779493
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163145'
---
조직 소유자는 조직의 멤버 이름 표시를 관리할 수 있습니다.

![주석에 표시된 주석 작성자의 프로필 이름](/assets/images/help/issues/commenter-full-name.png)

조직 내의 사용자 이름 표시를 변경하면 사용자 고유의 사용자 이름이 아닌 다른 사용자의 사용자 이름 표시에 영향을  미칩니다. 각 조직 멤버는 설정에서 자신의 프로필 이름을 선택합니다. 자세한 내용은 “[프로필 개인 설정](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)”을 참조하세요.

{% ifversion profile-name-enterprise-setting %} 엔터프라이즈 소유자가 엔터프라이즈 수준에서 정책을 설정하면 조직에 대해 이 설정을 구성하지 못할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)”을 참조하세요.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. “관리자 리포지토리 권한”에서 **멤버가 프라이빗 리포지토리에서 주석 작성자의 프로필 이름을 볼 수 있도록 허용** 을 선택하거나 선택 취소합니다.
![멤버가 프라이빗 리포지토리에서 주석 작성자의 전체 이름을 볼 수 있도록 허용하는 확인란](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. **저장** 을 클릭합니다.
