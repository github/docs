---
title: 클라이언트를 대신하여 조직 만들기 및 지불
intro: '클라이언트를 대신하여 {% data variables.product.prodname_dotcom %} 조직을 만들고 비용을 결제할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087781'
---
## 요구 사항

시작하기 전에 다음을 알고 있어야 합니다.
- 만든 조직의 소유자가 될 클라이언트의 {% data variables.product.prodname_dotcom %} 사용자 이름
- 클라이언트가 조직에 사용하려는 이름
- 영수증을 보낼 메일 주소
- 클라이언트가 구매하려는 [제품](/articles/github-s-products)
- 클라이언트가 조직에 대해 구매하려는 [유료 좌석](/articles/about-per-user-pricing/) 수

## 1단계: 개인 {% data variables.product.prodname_dotcom %} 계정 만들기

개인 계정을 사용하여 조직을 설정합니다. 또한 나중에 클라이언트의 구독을 갱신하거나 변경하려면 이 계정에 로그인해야 합니다.

{% data variables.product.prodname_dotcom %}에 개인 계정이 이미 있는 경우 [2단계](#step-2-create-the-organization)로 건너뜁니다.

1. [GitHub 가입](https://github.com/join) 페이지로 이동합니다.
2. “개인 계정 만들기”에서 사용자 이름, 메일 주소 및 암호를 입력한 다음 **계정 만들기** 를 클릭합니다.
![개인 계정 항목 양식 만들기](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. 개인 계정에 대해 {% data variables.product.prodname_free_user %}을(를) 선택합니다.
4. **등록 완료** 를 클릭합니다.

## 2단계: 조직 만들기

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. “플랜 선택”에서 **{% data variables.product.prodname_free_team %} 선택** 을 클릭합니다. 다음 단계에서 조직을 업그레이드합니다.
{% data reusables.organizations.organization-name %}
5. “연락처 메일”에서 클라이언트의 연락처 메일 주소를 입력합니다.
  ![연락처 메일 필드](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. **다음** 을 클릭합니다.

## 3단계: 조직을 연간 유료 구독으로 업그레이드


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %}(다음 단계에서 조직에 더 많은 좌석을 추가할 수 있음)
6. “업그레이드 요약”에서 매년 조직에 대한 비용을 지불하려면 **매년 지불** 을 선택합니다.
![연간 청구에 대한 라디오 단추](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## 4단계: 조직의 유료 사용자 수 업그레이드

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## 5단계: 클라이언트를 조직에 가입하도록 초대

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. 클라이언트의 {% data variables.product.prodname_dotcom %} 사용자 이름을 입력하고 **Enter** 키를 누릅니다.
![클라이언트의 사용자 이름을 입력할 필드](/assets/images/help/organizations/org-invite-modal.png)
6. 클라이언트의 *소유자* 역할을 선택한 다음 **초대 보내기** 를 클릭합니다.
![소유자 라디오 단추 및 초대 보내기 단추](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. 클라이언트는 조직에 초대하는 메일을 받게 됩니다. 다음 단계로 넘어가려면 초대를 수락해야 합니다.

## 6단계: 클라이언트에 조직 소유권 이전

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 클라이언트가 조직의 구성원으로 나열되고 소유자 역할이 할당되어 있는지 확인합니다.
5. 사용자 이름 오른쪽에 있는 {% octicon "gear" aria-label="The Settings gear" %} 드롭다운 메뉴를 사용하고 **관리** 를 클릭합니다.
  ![액세스 관리 링크](/assets/images/help/organizations/member-manage-access.png)
6. 왼쪽에서 **조직에서 제거** 를 클릭합니다.
  ![조직에서 제거 단추](/assets/images/help/organizations/remove-from-org-button.png)
7. 선택 사항을 확인하고 **구성원 제거** 를 클릭합니다.
  ![구성원 제거 확인 단추](/assets/images/help/organizations/confirm-remove-from-org.png)

## 다음 단계

1. 클라이언트에 문의하여 [청구 관리자로 조직에 추가](/articles/adding-a-billing-manager-to-your-organization)하도록 요청합니다. 나중에 클라이언트의 구독을 갱신하거나 변경할 수 있도록 조직의 청구 관리자여야 합니다.
2. 조직의 신용 카드를 조직에서 제거하여 다시 청구되지 않도록 하려면 {% data variables.contact.contact_support %}에 문의하세요.
3. 클라이언트의 유료 구독을 갱신할 때는 “[클라이언트의 유료 조직 갱신](/articles/renewing-your-client-s-paid-organization)”을 참조하세요.

## 추가 참고 자료

- “[조달 회사를 위한 조직 정보](/articles/about-organizations-for-procurement-companies)”
- “[클라이언트의 유료 조직 업그레이드 또는 다운그레이드](/articles/upgrading-or-downgrading-your-client-s-paid-organization)”
- "[클라이언트의 유료 조직 갱신](/articles/renewing-your-client-s-paid-organization)"
