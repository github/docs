---
title: 전역 웹후크 관리
shortTitle: Manage global webhooks
intro: 전역 웹후크를 구성하여 엔터프라이즈 내에서 이벤트가 발생할 때 외부 웹 서버에 알릴 수 있습니다.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 5a9c4b8fe0b01dbe733e1c55d452ea88de1689c9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099277'
---
## 전역 웹후크 정보

전역 웹후크를 사용하여 엔터프라이즈 내에서 이벤트가 발생할 때 외부 웹 서버에 알릴 수 있습니다. 웹후크의 페이로드를 수신하도록 서버를 구성한 다음 엔터프라이즈에 대한 사용자 및 조직 관리 규칙을 모니터링하고 응답하고 적용하는 애플리케이션 또는 코드를 실행할 수 있습니다. 자세한 내용은 “[웹후크](/developers/webhooks-and-events/webhooks)”를 참조하세요.

예를 들어 엔터프라이즈 내에서 리포지토리 또는 조직을 만들거나 삭제하거나 수정할 때 웹후크를 보내도록 {% 데이터 variables.location.product_location %}을(를) 구성할 수 있습니다. 웹후크를 수신한 후 자동으로 작업을 수행하도록 서버를 구성할 수 있습니다.

![전역 웹후크 목록](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## 전역 웹후크 추가

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. **Add webhook** 를 클릭합니다.
  ![관리 센터의 웹후크 페이지에 웹후크 단추 추가](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. 페이로드를 수신하려는 URL을 입력합니다.
  ![페이로드 URL을 입력할 필드](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. 필요에 따라 **콘텐츠 형식** 드롭다운 메뉴를 사용하고 페이로드 형식을 클릭합니다.
  ![콘텐츠 형식 옵션이 나열되어 있는 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. 필요에 따라 **비밀** 필드에 `secret` 키로 사용할 문자열을 입력합니다.
  ![비밀 키로 사용할 문자열을 입력할 필드](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. 필요에 따라 페이로드 URL이 HTTPS이고 페이로드를 전달할 때 {% data variables.product.prodname_ghe_server %}가 SSL 인증서를 확인하지 않길 원하는 경우 **SSL 확인 사용 안 함** 을 선택합니다. SSL 확인에 대한 정보를 읽은 다음 **내 웹후크가 안전하지 않을 수 있음을 이해합니다** 를 클릭합니다.
  ![SSL 확인을 사용하지 않도록 설정하기 위한 확인란](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **경고:** SSL 확인은 후크 페이로드가 안전하게 전달되도록 하는 데 도움이 됩니다. SSL 확인을 사용하지 않도록 설정하는 것은 권장하지 않습니다.

  {% endwarning %}
10. 웹후크를 모든 이벤트에 대해 트리거할지 선택한 이벤트에 대해 트리거할지 결정합니다.
  ![모든 이벤트 또는 선택한 이벤트에 대한 페이로드를 수신하는 옵션이 있는 라디오 단추](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - 모든 이벤트에 대해 **모든 항목 보내기** 를 선택합니다.
    - 특정 이벤트를 선택하려면 **개별 이벤트를 선택하겠습니다** 를 선택합니다.
11. 개별 이벤트를 선택하려는 경우 웹후크를 트리거할 이벤트를 선택합니다.
      {% ifversion ghec %} ![개별 전역 웹후크 이벤트 확인란](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![개별 전역 웹후크 이벤트 확인란](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. **활성** 확인란이 선택되어 있는지 확인합니다.
  ![선택한 활성 확인란](/assets/images/help/business-accounts/webhook-active.png)
13. **Add webhook** 를 클릭합니다.

## 전역 웹후크 편집

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. 편집하려는 웹후크 옆에 있는 **편집** 을 클릭합니다.
  ![웹후크 옆에 있는 편집 단추](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. 웹후크의 설정을 업데이트합니다.
7. **웹후크 업데이트** 를 클릭합니다.

## 전역 웹후크 삭제

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. 삭제하려는 웹후크 옆에 있는 **삭제** 를 클릭합니다.
  ![웹후크 옆에 있는 삭제 단추](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. 웹후크 삭제에 대한 정보를 읽은 다음 **예, 웹후크를 삭제합니다** 를 클릭합니다.
  ![웹후크 삭제를 확인하는 경고 정보 및 단추가 있는 팝업 상자](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## 최근 배달 및 응답 보기

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. 웹후크 목록에서 배달을 보려는 웹후크를 클릭합니다.
  ![각 웹후크를 보기 위한 링크가 있는 웹후크 목록](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. “최근 배달”에서 배달을 클릭하여 세부 정보를 봅니다.
  ![세부 정보를 볼 수 있는 링크가 있는 웹후크의 최근 배달 목록](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
