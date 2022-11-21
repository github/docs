---
title: 세션 보기 및 관리
intro: 설정에서 활성 세션을 보고 취소할 수 있습니다.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
ms.openlocfilehash: 15a0bdc17a913ceb6da27e8809610306adb1de25
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165587'
---
계정에 로그인한 디바이스 목록을 보고 인식하지 못하는 세션을 취소할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. "웹 세션"에서 활성 웹 세션을 볼 수 있습니다.
   
   ![활성 세션](/assets/images/help/settings/saml-active-sessions.png) 목록의 스크린샷 {% ifversion fpt or ghec %} "{% data variables.product.prodname_mobile %} 세션"에서 {% data variables.product.prodname_mobile %} 앱을 통해 계정에 로그인한 디바이스 목록을 볼 수 있습니다.

   ![활성 세션 목록의 스크린샷](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. 웹 세션 세부 정보를 보려면 **자세히 보기를** 클릭합니다.
   
   ![세션 세부 정보를 여는 단추가 강조 표시된 세션 페이지의 스크린샷](/assets/images/help/settings/saml-expand-session-details.png)

1. 웹 세션을 취소하려면 **세션 해지를** 클릭합니다.
    
    ![세션 취소 단추가 강조 표시된 세션 세부 정보 페이지의 스크린샷](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. 필요에 따라 {% data variables.product.prodname_mobile %} 세션을 해지하려면 세션 개요 페이지로 돌아가서 해지하려는 디바이스 옆에 있는 **해지를** 클릭합니다. 

    {% note %}

    **참고:** 모바일 세션을 취소하면 해당 디바이스의 {% data variables.product.prodname_mobile %} 애플리케이션에서 로그아웃되고 2단계 옵션으로 제거됩니다. 

    {% endnote %}

    ![강조 표시된 모바일 세션을 취소하는 단추가 있는 세션 페이지의 스크린샷](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

