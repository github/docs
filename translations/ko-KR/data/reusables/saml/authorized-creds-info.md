---
ms.openlocfilehash: 3bb3621aef6adcf7c0d40336a4d4fc2495c10d47
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099206"
---
{% 데이터 variables.product.pat_generic %} 또는 SSH 키에 권한을 부여하려면 먼저 연결된 SAML ID가 있어야 합니다. SAML SSO를 사용하는 조직의 구성원인 경우 IdP를 사용하여 조직에 인증하여 연결된 ID를 한 번 이상 만들 수 있습니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”를 참조하세요.

{% 데이터 variables.product.pat_generic %} 또는 SSH 키에 권한을 부여한 후 토큰 또는 키는 다음 방법 중 하나로 해지될 때까지 권한이 유지됩니다.
- 조직 또는 엔터프라이즈 소유자가 권한 부여를 취소합니다.
- 조직에서 제거됩니다.
- {% 데이터 variables.product.pat_generic %}의 범위가 편집되거나 토큰이 다시 생성됩니다.
- {% 데이터 variables.product.pat_generic %}은(는) 만드는 동안 정의된 대로 만료되었습니다.
