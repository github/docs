---
title: SCIM
intro: SCIM API를 사용하여 사용자 만들기 및 팀 멤버 자격을 자동화할 수 있습니다.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107279'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## SCIM API 정보

{% data variables.product.product_name %}는 SCIM 사용 ID 공급자(ID 공급자)에서 사용할 SCIM API를 제공합니다. IdP의 통합은 API를 사용하여 인증에 SAML SSO(Single Sign-On)를 사용하는 {% data variables.product.product_name %} 인스턴스에서 사용자 계정을 자동으로 프로비전, 관리 또는 프로비저닝 해제할 수 있습니다. SAML SSO에 대한 자세한 내용은 "[엔터프라이즈 IAM용 SAML 정보"를 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

SCIM API는 SCIM 2.0을 기반으로 합니다. 자세한 내용은 [사양](https://www.simplecloud.info/#Specification)을 참조하세요.

### SCIM 엔드포인트 URL

IdP는 다음 루트 URL을 사용하여 {% data variables.product.product_name %} 인스턴스에 대한 SCIM API와 통신할 수 있습니다.

```
{% data variables.product.api_url_code %}/scim/v2/
```

SCIM API에 대한 엔드포인트 URL은 대/소문자를 구분합니다. 예를 들어 엔드포인트의 첫 번째 문자는 `Users` 대문자로 표시되어야 합니다.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### SCIM API 호출 인증

IdP의 SCIM 통합은 {% data variables.product.product_name %} 인스턴스에 대한 엔터프라이즈 소유자를 대신하여 작업을 수행합니다. 자세한 내용은 “[엔터프라이즈의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)”을 참조하세요.

API에 대한 요청을 인증하려면 IdP에서 SCIM을 구성하는 사람은 범위가 있는 {% data variables.product.pat_v1 %}를 사용해야 하며 `admin:enterprise` , IdP는 요청의 `Authorization` 헤더에 제공해야 합니다. {% data variables.product.pat_v1_plural %}에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% note %}

**참고:** 엔터프라이즈 소유자는 SCIM API에 대한 요청 인증을 위해 {% data variables.product.pat_v1 %}을 생성하고 사용해야 합니다. {% ifversion ghes > 3.8 %} {% data variables.product.pat_v2_caps %} 및 {% endif %}GitHub 앱 호출자는 현재 지원되지 않습니다.

{% endnote %}

### SAML 및 SCIM 데이터 매핑 정보
  
{% data variables.product.product_name %} 인스턴스는 SAML SSO를 사용하여 성공적으로 인증하는 각 사용자를 SCIM ID에 연결합니다. ID를 성공적으로 연결하려면 SAML IdP 및 SCIM 통합에서 각 사용자에 대해 일치하는 SAML `NameID` 및 SCIM `userName` 값을 사용해야 합니다.

{% ifversion ghes > 3.7 %} {% note %}

**참고:** {% data variables.product.product_name %}이 Azure AD SAML IdP로 사용하는 경우 {% data variables.product.product_name %}은 및 `userName`를 사용하는 `NameID` 대신 SCIM `externalId` 클레임 및 SAML `http://schemas.microsoft.com/identity/claims/objectidentifier` 클레임을 먼저 사용자와 일치하도록 확인합니다. 

{% endnote %} {% endif %}

### 지원되는 SCIM 사용자 특성

SCIM API의 `User` 엔드포인트는 요청의 매개 변수 내에서 다음 특성을 지원합니다.

| Name | Type | Description |
| :- | :- | :- |
| `displayName` | String | 사용자가 읽을 수 있는 사용자 이름입니다. |
| `name.formatted` | String | 표시용으로 서식이 지정된 모든 중간 이름, 제목 및 접미사를 포함한 사용자의 전체 이름입니다.
| `name.givenName` | String | 사용자의 이름입니다. |
| `name.familyName` | String | 사용자의 성입니다. |
| `userName` | String | IdP에서 생성된 사용자의 사용자 이름입니다. 사용되기 전에 [정규화를](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) 거칩니다. 
| `emails` | Array | 사용자의 전자 메일 목록입니다. |
| `roles` | Array | 사용자의 역할 목록입니다. |
| `externalId` | String | 이 식별자는 IdP 공급자에 의해 생성됩니다. IdP에서 또는 [SCIM 프로비전 ID 나열](#list-scim-provisioned-identities-for-an-enterprise) 엔드포인트를 사용하고 {% data variables.product.product_name %} 인스턴스의 사용자 이름 또는 이메일 주소와 같은 다른 알려진 특성을 필터링하여 사용자에 대한 을 찾을 `externalId` 수 있습니다. |
| `id` | String | 인스턴스의 SCIM 엔드포인트에서 생성된 식별자입니다. |
| `active` | 부울 | ID가 활성 상태인지(`true`) 일시 중단`false`()해야 하는지 여부를 나타냅니다. |

