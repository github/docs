---
title: 엔터프라이즈에 대한 사용자 메시지 사용자 지정
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: '{% data variables.location.product_location %}에서 사용자에게 표시되는 사용자 지정 메시지를 만들 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106431'
---
## 사용자 메시지 정보

사용자 메시지에는 여러 유형이 있습니다.
- {% ifversion ghes %}로그인 또는 {% endif %}로그아웃 페이지{% ifversion ghes or ghae %}에 표시되는 메시지
- 팝업 창에 한 번 나타나고 해제해야 하는 필수 메시지{% endif %}{% ifversion ghes or ghae %}
- 모든 페이지의 맨 위에 표시되는 알림 배너{% endif %}

{% ifversion ghes %} {% note %}

**참고:** 인증에 SAML을 사용하는 경우 로그인 페이지는 ID 공급자가 제공하며 {% data variables.product.prodname_ghe_server %}를 통해 사용자 지정할 수 없습니다.

{% endnote %}

Markdown을 사용하여 메시지에 서식을 지정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 쓰기 및 서식 지정 정보](/articles/about-writing-and-formatting-on-github/)”를 참조하세요.

## 사용자 지정 로그인 메시지 만들기

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}{% else %}{% endif %} “로그인 페이지”의 오른쪽에서 **메시지 추가** 또는 **메시지 편집** 을 클릭합니다.
![{% else %}편집{% endif %} 메시지 단추 {% ifversion ghes %}추가](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. **로그인 메시지** 에서 사용자에게 표시할 메시지를 입력합니다.
![로그인 메시지](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![미리 보기 단추](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 렌더링된 메시지를 검토합니다.
![로그인 메시지 렌더링](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## 사용자 지정 로그아웃 메시지 만들기

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}{% else %}{% endif %} “로그아웃 페이지”의 오른쪽에서 **메시지 추가** 또는 **메시지 편집** 을 클릭합니다.
![메시지 추가 단추](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. **로그아웃 메시지** 에서 사용자에게 표시할 메시지를 입력합니다.
![two_factor_auth_header 메시지에 서명](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![미리 보기 단추](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 렌더링된 메시지를 검토합니다.
![로그아웃 메시지 렌더링](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## 필수 메시지 만들기

메시지를 저장한 후 처음으로 로그인할 때 {% data variables.product.product_name %}에서 모든 사용자에게 표시하는 필수 메시지를 만들 수 있습니다. {% data variables.location.product_location %}을(를) 사용하기 전에 사용자가 해제해야 하는 팝업 창에 메시지가 나타납니다.

필수 메시지의 용도는 다양합니다.

- 신입 직원을 위한 온보딩 정보를 제공합니다.
- 사용자에게 {% data variables.location.product_location %}에 대한 도움말을 얻는 방법을 알려주세요.
- 모든 사용자가 {% data variables.location.product_location %}을(를) 사용하기 위한 서비스 약관을 읽도록 보장

메시지에 Markdown 확인란을 포함하는 경우 사용자가 메시지를 해제하려면 먼저 모든 확인란을 선택해야 합니다. 예를 들어 필수 메시지에 서비스 약관을 포함하는 경우 각 사용자가 확인란을 선택하여 사용자가 약관을 읽었는지 확인하도록 요구할 수 있습니다.

사용자가 필수 메시지를 볼 때마다 감사 로그 이벤트가 만들어집니다. 이벤트에는 사용자가 본 메시지 버전이 포함됩니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”를 참조하세요.

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**참고:** {% data variables.location.product_location %}에 대한 필수 메시지를 변경하면 메시지를 이미 승인한 사용자에게 새 메시지가 표시되지 않습니다. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. “필수 메시지” 오른쪽에서 **메시지 추가** 를 클릭합니다.
  ![필수 메시지 추가 단추](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. “필수 메시지”의 텍스트 상자에 메시지를 입력합니다.
  ![필수 메시지 텍스트 상자](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %}의 스크린샷 
1. 필요에 따라 **이전 메시지를 해제한 경우에도 모든 사용자에게 업데이트된 메시지 표시를** 선택합니다.
![선택한 경우 모든 사용자에게](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) 필수 메시지를 푸시하는 확인란의 스크린샷 {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## 전역 알림 배너 만들기

모든 페이지의 맨 위에 있는 모든 사용자에게 표시되도록 전역 알림 배너를 설정할 수 있습니다.

{% ifversion ghae or ghes %} 명령줄 유틸리티를 사용하거나 API를 사용하여{% endif %} 관리 셸에서 알림 배너{% ifversion ghes %}를 설정할 수도 있습니다. 자세한 내용은 {% ifversion ghes %}“[명령줄 유틸리티](/enterprise/admin/configuration/command-line-utilities#ghe-announce)” 및 {% endif %}“[{% data variables.product.prodname_enterprise %} 관리](/rest/reference/enterprise-admin#announcements)”를 참조하세요.
{% else %}

명령줄 유틸리티를 사용하여 관리 셸에서 알림 배너를 설정할 수도 있습니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”를 참조하세요.

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}{% else %}{% endif %} “알림”의 오른쪽에서 **알림 추가** 를 클릭합니다.
  ![알림 추가 단추](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. “알림”의 텍스트 필드에 배너에 표시하려는 알림을 입력합니다.
  ![알림을 입력할 텍스트 필드](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. 필요에 따라 “만료 날짜”에서 일정 드롭다운 메뉴를 선택하고 만료 날짜를 클릭합니다.
  ![만료 날짜를 선택하기 위한 일정 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. 필요에 따라 각 사용자가 공지 사항을 해제할 수 있도록 하려면 **사용자 해제 가능** 을 선택합니다.

   !["사용자 해제 가능" 확인란의 스크린샷](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
