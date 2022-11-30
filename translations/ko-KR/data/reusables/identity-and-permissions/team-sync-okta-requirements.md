---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878749"
---
OKTA에 대해 팀 동기화를 사용하도록 설정하기 전에 GitHub 관리자 또는 IdP 관리자가 다음을 수행해야 합니다.

- Okta를 사용하여 조직에 대한 SAML, SSO, SCIM 통합을 구성합니다. 자세한 내용은 “[Okta를 사용하여 SAML Single Sign-On 및 SCIM 구성](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)”을 참조하세요.
- OKTA 인스턴스의 테넌트 URL을 제공합니다.
- 서비스 사용자로 OKTA 설치에 대한 읽기 전용 관리자 권한이 있는 유효한 SSWS 토큰을 생성합니다. 자세한 내용은 Okta 설명서에서 [토큰 만들기](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) 및 [서비스 사용자](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm)를 참조하세요.
