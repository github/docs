---
title: 사용자의 SAML NameID 업데이트
shortTitle: Update SAML NameID
intro: 'IdP(ID 공급자)에서 계정이 `NameID` 변경되고 해당 사용자가 더 이상 {% ifversion ghes 또는 ghae %}에 로그인할 수 없는 경우 {% 데이터 variables.location.product_location %}{% elsif ghec %}인증을 통해 엔터프라이즈 리소스에 액세스합니다{% endif %}, {% ifversion ghec %}이(가) {% data variables.product.company_short %} 지원에 문의하거나 해당 사용자의 연결된 ID를 해지해야 합니다.{% elsif ghes %}업데이트 `NameID`  {% 데이터 variables.location.product_location %}{% elsif ghae %}에 대한 매핑은 {% 데이터 variables.product.company_short %} 지원{% endif %}에 문의하세요.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7cb5754640793679bb80fe03a5bdd19164df4755
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098830'
---
## 사용자의 SAML `NameID` 업데이트 정보

경우에 따라 SAML IdP에서 사용자의 계정과 연결된 값을 업데이트해야 할 수 있습니다. 해당 식별자가 {% data variables.product.product_name %}에서 인증에 사용하는 `NameID`인 경우 사용자가 계속해서 성공적으로 인증할 수 있도록 인스턴스의 `NameID` 매핑을 업데이트해야 합니다. 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

## 사용자의 SAML `NameID` 업데이트

Enterprise 소유자는 {% data variables.product.product_name %} 인스턴스에서 사용자의 SAML `NameID`를 업데이트할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 왼쪽 사이드바에서 **모든 사용자** 를 클릭합니다.
  ![사이트 관리자 설정의 “모든 사용자” 사이드바 항목](/assets/images/enterprise/site-admin-settings/all-users.png)
3. 사용자 목록에서 `NameID` 매핑을 업데이트하려는 사용자 이름을 클릭합니다.
  ![인스턴스 사용자 계정 목록의 사용자 이름](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. “SAML NameID 업데이트” 오른쪽의 **편집** 을 클릭합니다.
  ![“SAML 인증” 아래, “SAML NameID 업데이트” 오른쪽에 있는 “편집” 단추](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. “NameID” 필드에 사용자의 새로운 `NameID`를 입력합니다.
  ![모달 대화 상자의 “NameID” 필드에 NameID가 입력된 모습](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. **NameID 업데이트** 를 클릭합니다.
  ![모달 내에서 업데이트된 NameID 값 아래에 있는 “NameID 업데이트” 단추](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
