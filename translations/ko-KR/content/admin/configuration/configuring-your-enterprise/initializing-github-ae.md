---
title: GitHub AE 초기화
intro: '엔터프라이즈에서 사용할 준비가 되도록 {% data variables.product.product_name %}의 초기 구성을 완료할 수 있습니다.'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
ms.openlocfilehash: a3c32a770bbf58be3589824302fe3a32be0e239a
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167054'
---
## 초기화 정보

엔터프라이즈를 초기화하려면 먼저 {% data variables.product.product_name %}를 구매해야 합니다. 자세한 내용은 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

{% data reusables.github-ae.initialize-enterprise %} 제공하는 정보가 IdP에서 의도한 엔터프라이즈 소유자의 정보와 일치하는지 확인합니다. 엔터프라이즈 소유자에 대한 자세한 내용은 “[엔터프라이즈 내 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)”을 참조하세요.

{% note %}

**참고**:

- 초기화를 완료하기 전에 {% data variables.product.prodname_ghe_managed %}의 초기 암호가 만료된 경우 언제든지 초대 메일에서 암호 재설정을 요청할 수 있습니다.

- 암호 관리자에서 {% data variables.product.prodname_ghe_managed %}의 초기 사용자 이름과 암호를 안전하게 저장합니다. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

초기화 중에 엔터프라이즈 소유자는 엔터프라이즈 이름을 지정하고, SAML SSO를 구성하고, 엔터프라이즈의 모든 조직에 대한 정책을 만들고, 사용자 지원 연락처를 구성합니다.

## 필수 조건

초기화를 시작하기 위해 {% data variables.product.company_short %}에서 초대 메일을 받게 됩니다. {% data variables.product.prodname_ghe_managed %}를 구성하기 전에 다음 필수 조건을 검토합니다.


{% data variables.location.product_location %}을(를) 초기화하려면 SAML ID 공급자(IdP)가 있어야 합니다. {% data reusables.saml.ae-uses-saml-sso %} 초기화 중에 IdP를 엔터프라이즈에 연결하려면 IdP의 엔터티 ID(SSO) URL, 발급자 ID URL, 퍼블릭 서명 인증서(Base64로 인코드됨)가 있어야 합니다. 자세한 내용은 “[엔터프라이즈의 ID 및 액세스 관리 정보](/admin/authentication/about-identity-and-access-management-for-your-enterprise)”를 참조하세요.

{% note %}

**참고**: {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## 로그인 및 엔터프라이즈 이름 지정

1. 환영 메일의 지침에 따라 엔터프라이즈에 연결합니다.
2. “암호 변경” 아래에 자격 증명을 입력하고 **암호 변경** 을 클릭합니다.
3. “엔터프라이즈 계정 이름을 지정하시겠습니까?” 아래에 엔터프라이즈 이름을 입력하고 **저장 후 계속** 을 클릭합니다.
  ![엔터프라이즈 이름을 지정하기 위한 “저장 후 계속” 단추](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

## 엔터프라이즈에 IdP 연결

{% data variables.product.product_name %}에 대한 인증을 구성하려면 {% data variables.product.product_name %}에 SAML IdP 세부 정보를 제공해야 합니다. {% data variables.product.company_short %}에서는 Azure AD를 IdP로 사용하도록 권장합니다. 자세한 내용은 “[ID 공급자를 사용하여 인증 및 프로비저닝 구성](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)”을 참조하세요.

1. “ID 공급자 설정” 오른쪽에 있는 **구성** 을 클릭합니다.
  ![IdP 구성의 “구성” 단추](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. “로그온 URL”에서 SAML IdP의 URL을 복사하여 붙여넣습니다.
  ![SAML IdP의 로그온 URL 텍스트 필드](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. “발급자”에서 SAML IdP의 발급자 URL을 복사하여 붙여넣습니다.
  ![SAML IdP의 발급자 URL 텍스트 필드](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. “퍼블릭 인증서”에서 SAML IdP의 퍼블릭 인증서를 복사하여 붙여넣습니다.
  ![SAML IdP의 퍼블릭 인증서 텍스트 필드](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. **SAML 구성 테스트** 를 클릭하여 입력한 정보가 올바른지 확인합니다.
  ![“SAML 구성 테스트” 단추](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. **저장** 을 클릭합니다.
  ![IdP 구성의 “저장” 단추](/assets/images/enterprise/configuration/ae-save.png)
1. {% data reusables.saml.assert-the-administrator-attribute %}

## 엔터프라이즈 정책 설정

정책을 구성하면 엔터프라이즈의 리포지토리 및 조직 관리에 대한 제한이 설정됩니다. 초기화 프로세스 후에 다시 구성할 수 있습니다.

1. “엔터프라이즈 정책 설정” 오른쪽에 있는 **구성** 을 클릭합니다.
  ![정책 구성의 “구성” 단추](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. “기본 리포지토리 권한”에서 드롭다운 메뉴를 사용하여 엔터프라이즈의 리포지토리에 대한 기본 권한 수준을 클릭합니다. 개인에게 개별적으로, 팀을 통해 또는 조직 멤버로 조직에 액세스할 수 있는 여러 방법이 있는 경우 가장 높은 권한 수준이 낮은 권한 수준을 재정의합니다. 필요에 따라 엔터프라이즈 내 조직이 기본 리포지토리 권한을 설정할 수 있도록 하려면 **정책 없음**
  ![기본 리포지토리 권한 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)을 클릭합니다.
3. “리포지토리 만들기”에서 멤버가 리포지토리를 만들 수 있도록 허용할지 여부를 선택합니다. 필요에 따라 엔터프라이즈 내 조직이 권한을 설정할 수 있도록 하려면 **정책 없음** 을 클릭합니다.
  ![엔터프라이즈 정책 구성의 “멤버가 리포지토리를 만들 수 있음” 단추](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. “리포지토리 포크”에서 프라이빗 및 내부 리포지토리의 포크를 허용할지 여부를 선택합니다. 필요에 따라 엔터프라이즈 내 조직이 권한을 설정할 수 있도록 하려면 **정책 없음**
  ![리포지토리 포크 권한 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)을 클릭합니다.
5. “리포지토리 초대”에서 멤버 또는 조직 소유자가 협력자를 리포지토리에 초대할 수 있는지 여부를 선택합니다. 필요에 따라 엔터프라이즈 내 조직이 권한을 설정할 수 있도록 하려면 **정책 없음**
  ![리포지토리 초대 권한 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)을 클릭합니다.
6. “기본 리포지토리 표시 유형”에서 드롭다운 메뉴를 사용하여 새 리포지토리의 기본 표시 유형 설정을 클릭합니다.
  ![기본 리포지토리 표시 유형 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. “사용자가 조직을 만들 수 있음”에서 드롭다운 메뉴를 사용하여 엔터프라이즈 멤버의 조직 만들기 액세스 권한을 사용하거나 사용하지 않도록 설정합니다.
  ![조직 만들기 권한 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. “강제 푸시”에서 드롭다운 메뉴를 사용하여 강제 푸시를 허용할지 또는 차단할지 선택합니다.
  ![강제 푸시 구성 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. “Git SSH 액세스”에서 드롭다운 메뉴를 사용하여 엔터프라이즈의 모든 리포지토리에서 Git SSH 액세스를 사용하도록 설정할지 여부를 선택합니다.
  ![Git SSH 액세스 옵션 드롭다운 메뉴](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. **저장**
  ![엔터프라이즈 정책 구성의 “저장” 단추](/assets/images/enterprise/configuration/ae-save.png)을 클릭합니다.
11. 필요에 따라 모든 선택을 초기화하려면 “기본 정책으로 다시 설정”을 클릭합니다.
  ![모든 기본 정책 다시 설정 링크](/assets/images/enterprise/configuration/ae-reset-default-options.png)

## 내부 지원 연락처 설정

사용자가 내부 지원 팀에 연락하는 데 사용할 방법을 구성할 수 있습니다. 초기화 프로세스 후에 다시 구성할 수 있습니다.

1. “내부 지원 연락처” 오른쪽에 있는 **구성** 을 클릭합니다.
  ![내부 지원 연락처 구성의 “구성” 단추](/assets/images/enterprise/configuration/ae-support-configure.png)
2. “내부 지원 연락처”에서 URL 또는 메일 주소를 통해 엔터프라이즈 사용자가 지원에 연락하는 방법을 선택합니다. 그런 다음, 지원 연락처 정보를 입력합니다.
  ![내부 지원 연락처 URL 텍스트 필드](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. **저장** 을 클릭합니다.
  ![엔터프라이즈 지원 연락처 구성의 “저장” 단추](/assets/images/enterprise/configuration/ae-save.png)

## 메일 설정 지정

초기화된 경우 초기화 프로세스 후에 모든 설정을 다시 구성할 수 있습니다. 자세한 내용은 “[알림에 사용할 메일 구성](/admin/configuration/configuring-email-for-notifications)”을 참조하세요.

1. “메일 설정 구성” 오른쪽에 있는 **구성** 을 클릭합니다.
  ![메일 설정 구성의 “구성” 단추](/assets/images/enterprise/configuration/ae-email-configure.png)
2. **메일 사용** 을 선택합니다. 이렇게 하면 아웃바운드 및 인바운드 메일을 모두 사용할 수 있지만, 인바운드 메일이 작동하려면 DNS 설정도 구성해야 합니다. 자세한 내용은 “[들어오는 메일을 허용하도록 DNS 및 방화벽 설정 구성](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”을 참조하세요.
 ![메일 설정 구성의 “사용” 확인란](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. 메일 서버 설정을 완료합니다.
    - **서버 주소** 필드에 SMTP 서버의 주소를 입력합니다.
    - **포트** 필드에 SMTP 서버가 메일을 보내는 데 사용하는 포트를 입력합니다.
    - **도메인** 필드에 SMTP 서버가 HELO 응답(있는 경우)과 함께 보낼 도메인 이름을 입력합니다.
    - **인증** 드롭다운에서 SMTP 서버가 사용하는 암호화 유형을 선택합니다.
    - **발신 전용 메일 주소** 필드에 모든 알림 메일의 보낸 사람 및 받는 사람 필드에 사용할 메일 주소를 입력합니다.

4. 발신 전용 메일 주소가 지정된 들어오는 모든 메일을 삭제하려면 **발신 전용 메일 주소가 지정된 메일 삭제** 를 선택합니다.
  ![메일 설정 구성의 “삭제” 확인란](/assets/images/enterprise/configuration/ae-discard-email.png)
5. **메일 설정 테스트** 를 클릭합니다.
  ![메일 설정 구성의 “메일 설정 테스트” 단추](/assets/images/enterprise/configuration/ae-test-email.png)
6. “테스트 메일 보내기”에서 테스트 메일을 보낼 메일 주소를 입력하고 **테스트 메일 보내기** 를 클릭합니다.
  ![메일 설정 구성의 “테스트 메일 보내기” 단추](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. **저장** 을 클릭합니다.
  ![엔터프라이즈 지원 연락처 구성의 “저장” 단추](/assets/images/enterprise/configuration/ae-save.png)
