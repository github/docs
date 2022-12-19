---
title: 조직 멤버 자격 표시 유형 구성
intro: 엔터프라이즈 전체의 새 조직 구성원에 대한 가시성을 퍼블릭 또는 프라이빗으로 설정할 수 있습니다. 멤버가 기본값에서 표시 유형을 변경하지 못하도록 방지할 수도 있습니다.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332346'
---
{% ifversion ghes %} 명령줄 유틸리티를 사용하여 인스턴스의 모든 현재 조직 멤버에 기본 설정을 적용할 수도 있습니다. 예를 들어 모든 조직 멤버의 표시 유형을 퍼블릭으로 요구하려는 경우 관리자 설정에서 기본값을 퍼블릭으로 설정하고 모든 새 멤버에 기본값을 적용한 다음, 명령줄 유틸리티를 사용하여 기존 멤버에 퍼블릭 설정을 적용할 수 있습니다.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. “기본 조직 멤버 자격 표시 유형”에서 드롭다운 메뉴를 사용하여 **프라이빗** 또는 **퍼블릭** 을 클릭합니다.
  ![기본 조직 멤버 자격 표시 유형을 퍼블릭 또는 프라이빗으로 구성하는 옵션이 있는 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. 필요에 따라 멤버가 멤버 자격 표시 유형을 기본값에서 변경하지 못하도록 하려면 **조직 멤버에 적용** 을 선택합니다.
  ![모든 멤버에 기본 설정 적용 확인란](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. 모든 기존 멤버에 새 표시 유형 설정을 적용하려면 `ghe-org-membership-update` 명령줄 유틸리티를 사용합니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)”를 참조하세요.{% endif %}
