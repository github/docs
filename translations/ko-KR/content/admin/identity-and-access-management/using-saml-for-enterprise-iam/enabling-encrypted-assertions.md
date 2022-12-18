---
title: 암호화된 어설션 사용
shortTitle: Enable encrypted assertions
intro: 'SAML ID 공급자(IdP)가 보내는 메시지를 암호화하여 SAML SSO(Single Sign-On)를 사용하여 {% 데이터 variables.location.product_location %}의 보안을 향상시킬 수 있습니다.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: 0b7261a03eff52a6ee9fc612c5958919512527b8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098291'
---
## 암호화된 어설션 정보

IdP가 어설션 암호화를 지원하는 경우 인증 프로세스 중에 보안을 강화하기 위해 {% data variables.product.product_name %}에서 암호화된 어설션을 구성할 수 있습니다.

## 필수 조건

{% data variables.product.product_name %}에 대한 인증을 위해 암호화된 어설션을 활성화하려면 SAML 인증을 구성해야 하며 IdP는 암호화된 어설션을 지원해야 합니다.

## 암호화된 어설션 사용

암호화된 어설션을 사용하도록 설정하려면 {% 데이터 variables.location.product_location %}의 공용 인증서를 IdP에 제공하고 IdP와 일치하는 암호화 설정을 구성해야 합니다.

{% note %}

**참고**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. 필요에 따라 SAML 디버깅을 사용하도록 설정합니다. SAML 디버깅은 {% data variables.product.product_name %}의 인증 로그에 자세한 정보를 기록하며 실패한 인증 시도 문제를 해결하는 데 도움이 될 수 있습니다. 자세한 내용은 "[SAML 인증 문제 해결](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)"을 참조하세요.
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. **암호화된 어설션 필요** 를 선택합니다.

   ![관리 콘솔의 “인증” 섹션 내의 “암호화된 어설션 사용” 확인란 스크린샷](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. "암호화 인증서" 오른쪽에서 **다운로드** 를 클릭하여 로컬 컴퓨터에 {% 데이터 variables.location.product_location %}의 공용 인증서 복사본을 저장합니다.

   ![암호화된 어설션에 대한 퍼블릭 인증서의 “다운로드” 단추 스크린샷](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. SAML IdP에 관리자로 로그인합니다.
1. {% 데이터 variables.location.product_location %}에 대한 애플리케이션에서 암호화된 어설션을 사용하도록 설정합니다.
   - 암호화 방법 및 키 전송 방법을 확인합니다.
   - 7단계에서 다운로드한 퍼블릭 인증서를 제시합니다.
1. {% 데이터 variables.location.product_location %}의 관리 콘솔로 돌아갑니다.
1. “암호화 방법”의 오른쪽에서 9단계의 IdP에 대한 암호화 방법을 선택합니다.

   ![암호화된 어설션에 대한 “암호화 방법”의 스크린샷](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. “키 전송 방법”의 오른쪽에서 9단계의 IdP에 대한 키 전송 방법을 선택합니다.

   ![암호화된 어설션에 대한 “키 전송 방법” 스크린샷](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. **설정 저장** 을 클릭합니다.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

SAML 디버깅을 사용하도록 설정하여 암호화된 어설션으로 인증을 테스트한 경우 테스트 완료 시 SAML 디버깅을 사용하지 않도록 설정합니다. 자세한 내용은 "[SAML 인증 문제 해결](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)"을 참조하세요.
