---
title: 조직에 조인하도록 사용자 초대
intro: '{% 데이터 variables.location.product_location %}에 대한 사용자 이름 또는 전자 메일 주소를 사용하여 모든 사용자를 조직의 구성원으로 초대할 수 있습니다.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: bce3b77e63877314abff5520f113791e48856110
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099341'
---
## 조직 초대 정보

조직에 유료 사용자별 구독이 있는 경우 새 구성원을 조직에 초대하거나 이전 조직 구성원을 복구하려면 먼저 사용하지 않는 라이선스를 사용할 수 있어야 합니다. 자세한 내용은 "[사용자별 가격 책정 정보](/articles/about-per-user-pricing)"를 참조하세요. 

{% data reusables.organizations.org-invite-scim %}

조직에서 구성원에게 2단계 인증을 사용하도록 요구하는 경우 초대를 수락하기 전에 초대하는 사용자는 2단계 인증을 사용하도록 설정해야 합니다. 자세한 내용은 "[조직에서 2단계 인증 요구](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)" 및 "[2FA(2단계 인증)로 계정 보안 유지](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)"를 참조하세요.

{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은{% else %}{% endif %} SCIM을 구현하여 IdP(ID 공급자)를 통해 {% data variables.product.prodname_dotcom_the_website %}에 대한 조직 구성원의 액세스를 추가, 관리 및 제거할 수 있습니다. 자세한 내용은 "[조직에 대한 SCIM 정보](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요{% ifversion fpt %}({% data variables.product.prodname_ghe_cloud %} 설명서){% else %}.{% endif %}

## 조직에 참가하도록 사용자 초대

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## 추가 참고 자료
- "[팀에 조직 구성원 추가](/articles/adding-organization-members-to-a-team)"
