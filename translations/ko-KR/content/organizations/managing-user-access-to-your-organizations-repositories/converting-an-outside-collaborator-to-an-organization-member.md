---
title: 외부 협력자를 조직 구성원으로 변환
intro: '외부 협력자에게 조직 내에서 조직의 리포지토리에 대한 더 광범위한 권한을 부여하려면 {% ifversion fpt or ghec %}조직 구성원이 되도록 초대{% else %}조직 구성원이 되도록{% endif %}할 수 있습니다.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
  - /organizations/managing-access-to-your-organizations-repositories/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: cbaea93cf94d40a67e6650c65dc680edbec104c7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098974'
---
{% ifversion fpt or ghec %} 조직에서 유료 사용자별 구독을 사용하는 경우, 새 구성원을 조직에 초대하거나 이전 조직 구성원을 복구하려면 먼저 미사용 라이선스를 사용할 수 있어야 합니다. 자세한 내용은 "[사용자별 가격 책정 정보](/articles/about-per-user-pricing)"를 참조하세요. {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} 조직에서 [구성원이 2단계 인증을 사용하도록 요구하는 경우](/articles/requiring-two-factor-authentication-in-your-organization), 초대하는 사용자는 {% ifversion fpt or ghec %}[2단계 인증을 사용하도록 설정해야](/articles/securing-your-account-with-two-factor-authentication-2fa) 초대를 수락할 수 있습니다.{% else %}[2단계 인증을 사용하도록 설정해야](/articles/securing-your-account-with-two-factor-authentication-2fa) 조직에 추가할 수 있습니다.{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. 구성원이 되게 할 외부 협력자 이름 오른쪽에서 {% octicon "gear" aria-label="The gear icon" %} 드롭다운 메뉴를 사용하여 **조직에 초대** 를 클릭합니다.![외부 협력자를 조직에 초대](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. 구성원이 되게 할 외부 협력자 이름 오른쪽에서 **조직에 초대** 를 클릭합니다.![외부 협력자를 조직에 초대](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 추가 참고 자료

- “[조직 멤버를 외부 협력자로 변환](/articles/converting-an-organization-member-to-an-outside-collaborator)”
