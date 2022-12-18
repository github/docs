---
title: 조직에 대한 이전 외부 협력자의 액세스 권한 복구
intro: 조직 리포지토리, 포크, 설정에 대한 이전 외부 협력자의 액세스 권한을 복원할 수 있습니다.
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "146178905"
---
조직의 개인 리포지토리에 대한 외부 협력자의 액세스가 제거되면 사용자의 액세스 권한 및 설정이 3개월 동안 저장됩니다. 해당 기간 내에 조직에 다시 {% ifversion fpt or ghec %}초대{% else %}추가{% endif %}하면 사용자의 권한을 복원할 수 있습니다.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

이전 외부 협력자를 복구하면 다음을 복원할 수 있습니다.
 - 조직 리포지토리에 대한 사용자의 이전 액세스 권한
 - 조직이 소유한 리포지토리의 모든 프라이빗 포크
 - 조직의 팀 구성원 자격
 - 조직의 리포지토리에 대한 이전 액세스 및 권한
 - 조직 리포지토리에 대한 별
 - 조직의 이슈 할당
 - 리포지토리 구독(리포지토리의 활동을 보거나 보지 않거나 무시하기 위한 알림 설정)

{% tip %}

**팁**:

 - 조직 소유자만 외부 협력자의 조직 액세스 권한을 복구할 수 있습니다.{% ifversion prevent-org-admin-add-outside-collaborator %} 엔터프라이즈 소유자는 외부 협력자의 엔터프라이즈 소유자 액세스만 복구하는 기능을 추가로 제한할 수 있습니다.{% endif %} 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.
 - {% data variables.product.product_location %}에서 구성원 흐름을 복원하는 경우 “구성원”이라는 용어를 사용하여 외부 협력자 복원을 설명할 수 있지만, 이 사용자를 복구하고 이전 권한을 유지하면 이전 [외부 협력자 권한](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)만 갖게 됩니다.{% ifversion fpt or ghec %}
 - 조직에 유료 사용자별 구독이 있는 경우 새 구성원을 조직에 초대하거나 이전 조직 구성원을 복구하려면 먼저 사용하지 않는 라이선스를 사용할 수 있어야 합니다. 자세한 내용은 “[사용자별 가격 책정 정보](/articles/about-per-user-pricing)”를 참조하세요. {% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. **초대 및 복구** 를 클릭하여 조직에서 외부 협력자의 이전 권한을 복원하도록 선택하거나, **초대 및 새로 시작** 을 클릭하여 이전 권한을 지우고 새 액세스 권한을 설정하도록 선택합니다.

  {% warning %}

  **경고:** 외부 협력자를 조직의 구성원으로 업그레이드하려면 **초대 및 새로 시작** 을 선택하고 이 사용자에 대한 새 역할을 선택합니다. 그러나 새로 시작하도록 선택하면 조직의 리포지토리에 대한 이 사용자의 프라이빗 포크가 손실됩니다. 이전 외부 협력자를 조직의 구성원으로 만들고 *동시에* 개인 포크를 유지하려면 대신 **초대 및 복구** 를 선택합니다. 이 사용자가 초대를 수락하면 [조직에 구성원으로 가입하도록 초대](/articles/converting-an-outside-collaborator-to-an-organization-member)하여 조직 구성원으로 변환할 수 있습니다.

  {% endwarning %}

  ![설정을 복원할지 여부 선택](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. **추가 및 복구** 를 클릭하여 조직에서 외부 협력자의 이전 권한을 복원하도록 선택하거나, **추가 및 새로 시작** 을 클릭하여 이전 권한을 지우고 새 액세스 권한을 설정하도록 선택합니다.

  {% warning %}

  **경고:** 외부 협력자를 조직의 구성원으로 업그레이드하려면 **추가 및 새로 시작** 을 선택하고 이 사용자에 대한 새 역할을 선택합니다. 그러나 새로 시작하도록 선택하면 조직의 리포지토리에 대한 이 사용자의 프라이빗 포크가 손실됩니다. 이전 외부 협력자를 조직의 구성원으로 만들고 *동시에* 프라이빗 포크를 유지하려면 대신 **추가 및 복구** 를 선택합니다. 그런 다음, [조직에 구성원으로 추가](/articles/converting-an-outside-collaborator-to-an-organization-member)하여 조직 구성원으로 변환할 수 있습니다.

  {% endwarning %}

  ![설정을 복원할지 여부 선택](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. 이전 외부 협력자의 이전 권한을 지운 경우 사용자의 역할을 선택하고 필요에 따라 일부 팀에 추가한 다음, **초대 보내기** 를 클릭합니다.
  ![역할 및 팀 옵션 및 초대 보내기 단추](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. 이전 외부 협력자의 이전 권한을 지운 경우 사용자의 역할을 선택하고 필요에 따라 일부 팀에 추가한 다음, **구성원 추가** 를 클릭합니다.
  ![역할 및 팀 옵션 및 구성원 추가 단추](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. 초대된 사람은 조직에 초대하는 메일을 받게 됩니다. 조직에서 외부 협력자가 되기 전에 초대를 수락해야 합니다. {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 추가 정보

- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
