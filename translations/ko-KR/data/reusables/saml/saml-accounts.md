---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111523"
---
SAML SSO를 구성하는 경우 조직 멤버는 {% data variables.product.prodname_dotcom_the_website %}에서 개인 계정에 계속 로그인합니다. 구성원이 조직 내의 대부분의 리소스에 액세스하면 {% data variables.product.prodname_dotcom %}는 인증을 위해 멤버를 IdP로 리디렉션합니다. 인증에 성공하면 IdP는 멤버를 {% data variables.product.prodname_dotcom %}로 다시 리디렉션합니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”를 참조하세요.

{% note %}

**참고:** SAML SSO는 {% data variables.product.prodname_dotcom %}에 대한 일반 로그인 프로세스를 대체하지 않습니다. {% data variables.product.prodname_emus %}을(를) 사용하지 않는 한 멤버는 {% data variables.product.prodname_dotcom_the_website %}에서 자신의 개인 계정에 계속 로그인하고 각 개인 계정은 IdP의 외부 ID에 연결됩니다.

{% endnote %}
