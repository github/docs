---
title: SCIM
intro: SCIM API를 사용하여 GitHub 조직 구성원 액세스를 제어하고 관리할 수 있습니다.
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: ba1205f098d7a21aa80e0bb1dbd6c3892c80484f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093800'
---
## SCIM API 정보

### 조직의 SCIM 프로비저닝

SCIM API는 SCIM 지원 IdP(ID 공급자)에서 {% data variables.product.product_name %} 조직 멤버 자격의 프로비저닝을 자동화하는 데 사용됩니다. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API는 [SCIM 표준](http://www.simplecloud.info/) 버전 2.0을 기반으로 합니다. IdP에서 사용해야 하는 {% data variables.product.product_name %} SCIM 엔드포인트는 `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`입니다.

{% note %}

**참고:** 
  - SCIM API는 [SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso)가 사용하도록 설정된 [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)를 사용하는 개별 조직에서만 사용할 수 있습니다. SCIM에 대한 자세한 내용은 "[조직에 대한 SCIM 정보](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요.
  - SCIM API는 엔터프라이즈 계정 또는 {% 데이터 variables.enterprise.prodname_emu_org %}에서 사용할 수 없습니다.

{% endnote %}

### SCIM API 호출 인증

SCIM API를 사용하려면 {% data variables.product.product_name %} 조직의 소유자로 인증해야 합니다. API는 [OAuth 2.0 전달자](/developers/apps/authenticating-with-github-apps) 토큰이 `Authorization` 헤더에 포함될 것으로 예상합니다. 인증에 {% 데이터 variables.product.pat_v1 %}을(를) 사용하는 경우 범위가 `admin:org` 있어야 하며 [SAML SSO 조직에서 사용할 수 있는 권한도 부여](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)해야 합니다.

### SAML 및 SCIM 데이터 매핑

{% data reusables.scim.nameid-and-username-must-match %}

### 지원되는 SCIM 사용자 특성

Name | 유형 | 설명
-----|------|--------------
`userName`|`string` | 사용자의 사용자 이름입니다.
`name.givenName`|`string` | 사용자의 이름입니다.
`name.familyName`|`string` | 사용자의 성입니다.
`emails` | `array` | 사용자 메일 목록입니다.
`externalId` | `string` | 이 식별자는 SAML 공급자가 생성하며, SAML 공급자에서 GitHub 사용자를 확인하기 위한 고유 ID로 사용됩니다. [SCIM 프로비저닝된 ID 나열](#list-scim-provisioned-identities) 엔드포인트를 사용하고 사용자의 GitHub 사용자 이름 또는 메일 주소와 같은 기타 알려진 특성을 필터링하거나 SAML 공급자에서 사용자의 `externalID`를 찾을 수 있습니다.
`id` | `string` | GitHub SCIM 엔드포인트에서 생성된 식별자입니다.
`active` | `boolean` | ID가 활성 상태인지(true) 또는 ID 프로비전을 해제해야 하는지(false)를 나타내는 데 사용됩니다.

{% note %}

**참고:** SCIM API의 엔드포인트 URL은 대/소문자를 구분합니다. 예를 들어 `Users` 엔드포인트의 첫 번째 문자는 대문자로 시작해야 합니다.

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
