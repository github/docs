---
title: 조직의 이전 멤버 복원
intro: '조직 소유자는 {% ifversion fpt or ghec %}전 조직 구성원을 다시 가입하도록 초대하거나{% else %}조직에 이전 구성원을 추가{% endif%}할 수 있으며, 사용자의 이전 역할, 액세스 권한, 포크 및 설정을 복원할지 여부를 선택할 수 있습니다.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109767'
---
## 멤버 복원 정보

다음 방법 중 하나로 조직에서 사용자를 제거하면 사용자의 액세스 권한 및 설정이 3개월 동안 저장됩니다. 

- 조직에서 사용자를 수동으로 제거했습니다. 자세한 내용은 "[조직에서 구성원 제거](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"를 참조하세요.{% ifversion not ghae %}
- 2FA(2단계 인증)를 사용하도록 설정하기 위해 구성원과 외부 협력자가 필요했기 때문에 사용자가 조직에서 제거되었습니다. 자세한 내용은 “[조직에서 2단계 인증 요구](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.{% endif %}{% ifversion fpt or ghec %}
- SAML Single Sign-On을 적용했기 때문에 사용자가 조직에서 제거되었습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[조직에 SAML Single Sign 적용](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}”을 참조하세요.{% else %}."{% endif %}{% endif %}
- 조직 멤버를 외부 협력자로 변환했습니다. 자세한 내용은 “[조직 멤버를 외부 협력자로 변환](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)”을 참조하세요.

해당 기간 내에 조직에 다시 {% ifversion fpt or ghec %}초대{% else %}추가{% endif %}하면 사용자의 권한을 복원할 수 있습니다.

{% note %}

**참고:** {% data reusables.saml.removed-users-can-rejoin %} 이러한 사용자를 다시 참가하도록 초대할 필요가 없습니다. 대신 사용자는 개인 계정에 로그인하고 조직으로 이동한 다음, 배너를 클릭하여 SAML Single Sign-On을 통해 인증할 수 있습니다.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

이전 조직 구성원을 복원하면 다음을 복원할 수 있습니다.
 - 조직에서 사용자의 역할
 - 조직이 소유한 리포지토리의 모든 프라이빗 포크
 - 조직의 팀 구성원 자격
 - 조직의 리포지토리에 대한 이전 액세스 및 권한
 - 조직 리포지토리에 대한 별
 - 조직의 이슈 할당
 - 리포지토리 구독(리포지토리의 활동을 보거나 보지 않거나 무시하기 위한 알림 설정)

{% ifversion ghes %} 조직 구성원이 2단계 인증을 사용하지 않아 조직에서 제거되고 조직에서 여전히 구성원이 2FA를 사용하도록 요구하는 경우 이전 멤버는 2단계 인증을 사용하도록 설정해야 멤버 자격을 복원할 수 있습니다.
{% endif %}

{% ifversion fpt or ghec %} 조직에 유료 사용자별 구독이 있는 경우 이전 조직 구성원을 복구하려면 먼저 사용하지 않는 라이선스를 사용할 수 있어야 합니다. 자세한 내용은 “[사용자별 가격 책정 정보](/articles/about-per-user-pricing)”를 참조하세요. {% data reusables.organizations.org-invite-scim %} {% endif %}

## 조직의 이전 멤버 복원

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. 조직에서 해당 사용자의 이전 권한을 복원할지 또는 이전 권한을 지우고 새 액세스 권한을 설정할지를 선택한 다음, **초대 및 복원** 또는 **초대 및 새로 시작** 을 클릭합니다.
  ![정보를 복원할지 여부 선택](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. 조직에서 해당 사용자의 이전 권한을 복원할지 또는 이전 권한을 지우고 새 액세스 권한을 설정할지를 선택한 다음, **추가 및 복원** 또는 **추가 및 새로 시작** 을 클릭합니다.
  ![권한 복원 여부 선택](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. 이전 조직 구성원에 대한 이전 권한을 지운 경우 사용자의 역할을 선택하고 필요에 따라 일부 팀에 추가한 다음, **초대 보내기** 를 클릭합니다.
  ![역할 및 팀 옵션 및 초대 보내기 단추](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. 이전 조직 구성원에 대한 이전 권한을 지운 경우 사용자의 역할을 선택하고 필요에 따라 일부 팀에 추가한 다음, **멤버 추가** 를 클릭합니다.
  ![역할 및 팀 옵션 및 멤버 추가 단추](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 추가 참고 자료

- “[조직 멤버를 외부 협력자로 변환](/articles/converting-an-organization-member-to-an-outside-collaborator)”
