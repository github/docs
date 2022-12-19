---
title: 청구 메일 설정
intro: '사용자 계정의 청구 메일은 {% data variables.product.product_name %}가 영수증 및 기타 청구 관련 통신을 보내는 곳입니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Billing email
ms.openlocfilehash: 35b340a697bafd0c7e3047983496b71048cbe0ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087847'
---
## 개인 계정의 청구 메일 설정

개인 계정의 기본 메일은 {% data variables.product.product_name %}이(가) 영수증 및 기타 청구 관련 통신을 보내는 위치입니다.

기본 메일 주소는 계정 메일 설정에 나와 있는 첫 번째 메일입니다.
또한 기본 메일 주소를 청구 메일 주소로 사용합니다.

청구 메일을 변경하려면 “[기본 메일 주소 변경](/articles/changing-your-primary-email-address)”을 참조하세요.

## 조직의 청구 메일 설정

조직의 청구 메일은 {% data variables.product.product_name %}이(가) 영수증 및 기타 청구 관련 통신을 보내는 곳입니다. 조직 계정의 메일 주소는 고유할 필요가 없습니다.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. “청구 관리”의 청구 메일 주소 오른쪽에서 **편집** 을 클릭합니다.
  ![현재 청구 메일](/assets/images/help/billing/billing-change-email.png)
2. 유효한 메일 주소를 입력한 다음 **업데이트** 를 클릭합니다.
  ![청구 메일 주소 모달 변경](/assets/images/help/billing/billing-change-email-modal.png)

## 조직의 청구 메일에서 추가 받는 사람 관리

청구 보고서를 수신하려는 사용자가 있는 경우 해당 메일 주소를 청구 메일 수신자로 추가할 수 있습니다. 이 기능은 엔터프라이즈에서 관리하지 않는 조직에서만 사용할 수 있습니다.

{% data reusables.dotcom_billing.org-billing-perms %}

### 청구 알림에 대한 받는 사람 추가

{% data reusables.organizations.billing-settings %}
1. “청구 관리”의 “메일 받는 사람” 오른쪽에서 **추가** 를 클릭합니다.
  ![받는 사람 추가](/assets/images/help/billing/billing-add-email-recipient.png)
1. 받는 사람의 이메일 주소를 입력한 다음 **추가** 를 클릭합니다.
  ![받는 사람 모달 추가](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 기본 청구 알림 받는 사람 변경

항상 기본 받는 사람으로 하나의 주소가 지정되어야 합니다. 이렇게 지정된 주소는 새 기본 받는 사람을 선택할 때까지 제거할 수 없습니다.

{% data reusables.organizations.billing-settings %}
1. “청구 관리”에서 기본 받는 사람으로 설정할 메일 주소를 찾습니다.
1. 메일 주소 오른쪽에서 “편집” 드롭다운 메뉴를 사용하고 **기본으로 표시** 를 클릭합니다.
  ![기본 받는 사람 표시](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### 청구 알림에서 받는 사람 제거

{% data reusables.organizations.billing-settings %}
1. “메일 받는 사람”에서 제거할 메일 주소를 찾습니다.
1. 목록에 있는 사용자의 항목에 대해 **편집** 을 클릭합니다.
  ![받는 사람 편집](/assets/images/help/billing/billing-edit-email-recipient.png)
1. 메일 주소 오른쪽에서 “편집” 드롭다운 메뉴를 사용하고 **제거** 를 클릭합니다.
  ![받는 사람 제거](/assets/images/help/billing/billing-remove-email-recipient.png)
1. 확인 프롬프트를 검토한 다음 **제거** 를 클릭합니다.

{% ifversion ghec %}
## 엔터프라이즈의 청구 메일 설정

엔터프라이즈의 청구 메일은 {% data variables.product.product_name %}이(가) 영수증 및 기타 청구 관련 통신을 보내는 곳입니다. 엔터프라이즈 계정의 메일 주소는 고유할 필요가 없습니다.

소유자 또는 청구 관리자 역할이 있는 엔터프라이즈 구성원만 엔터프라이즈에 대한 청구 설정에 액세스하거나 변경할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 사용자 관리](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”를 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **청구 메일** 을 클릭합니다. 
2. “메일 받는 사람”의 청구 메일 주소 오른쪽에서 **편집** 을 클릭합니다.
  ![편집 단추가 강조 표시된 현재 청구 메일의 스크린샷](/assets/images/help/billing/billing-change-email.png)
2. 유효한 메일 주소를 입력한 다음 **업데이트** 를 클릭합니다.
  ![샘플 메일 주소가 입력된 청구 메일 주소 모달 편집 창의 스크린샷](/assets/images/help/billing/billing-change-email-modal.png)

## 엔터프라이즈의 청구 메일에 대한 추가 받는 사람 관리

청구 보고서를 수신하려는 사용자가 있는 경우 해당 메일 주소를 청구 메일 수신자로 추가할 수 있습니다. 

소유자 또는 청구 관리자 역할이 있는 엔터프라이즈 구성원만 엔터프라이즈에 대한 청구 설정에 액세스하거나 변경할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 사용자 관리](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”를 참조하세요.

### 청구 알림에 대한 받는 사람 추가

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **청구 메일** 을 클릭합니다. 
2. “메일 받는 사람”의 청구 메일 주소 오른쪽에서 **추가** 를 클릭합니다.
   ![추가 단추가 강조 표시된 현재 청구 메일의 스크린샷](/assets/images/help/billing/billing-add-email-recipient.png)
3. 받는 사람의 이메일 주소를 입력한 다음 **추가** 를 클릭합니다.
   ![샘플 메일 주소가 입력되지 않은 청구 메일 주소 모달 추가 창의 스크린샷](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 청구 알림에서 받는 사람 제거

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **청구 메일** 을 클릭합니다. 
2. “메일 받는 사람”에서 제거할 메일 주소를 찾습니다.
3. 목록에 있는 사용자의 항목에 대해 **편집** 을 클릭합니다.
   ![편집 단추가 강조 표시된 받는 사람 메일의 스크린샷](/assets/images/help/billing/billing-edit-email-recipient.png)
4. 메일 주소 오른쪽에서 “편집” 드롭다운 메뉴를 사용하고 **제거** 를 클릭합니다.
   ![제거 단추가 강조 표시된 받는 사람 메일의 스크린샷](/assets/images/help/billing/billing-remove-email-recipient.png)
5. 확인 프롬프트를 검토한 다음 **제거** 를 클릭합니다.
{% endif %}
