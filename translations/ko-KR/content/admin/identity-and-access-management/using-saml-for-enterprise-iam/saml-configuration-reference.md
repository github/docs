---
title: SAML 구성 참조
shortTitle: SAML reference
intro: '{% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}에서 {% ifversion ghec %}에 대한 SAML 메타데이터를 볼 수 있으며, {% data variables.product.product_name %}{% endif %}에서 엔터프라이즈에 대해 자세히 알아볼 수 있으며 사용 가능한 SAML 특성 및 응답 요구 사항에 대해 자세히 알아볼 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 8a6e0a569e21bb12b2fd31a40c8c0bd98e34fe65
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098286'
---
## SAML 구성 정보

{% 데이터 variables.product.product_name %}에 대한 인증에 SAML SSO(Single Sign-On)를 사용하려면 외부 IDP(SAML ID 공급자)와 {% ifversion ghes %}{% 데이터 variables.location.product_location %}{% elsif ghec %}을(를) 모두 구성해야 합니다. {% 데이터 variables.location.product_location %}{% elsif ghae %}에 대한 엔터프라이즈 variables.product.product_name %}{% endif %}. SAML 구성에서 {% data variables.product.product_name %}은 SAML SP(Service Provider)로 작동합니다.

{% data variables.product.product_name %}에 SAML SSO를 구성할 때는 SAML IdP의 고유한 값을 입력해야 하며, IdP의 {% data variables.product.product_name %}에 있는 고유한 값도 입력해야 합니다. {% data variables.product.product_name %}의 SAML SSO 구성에 대한 자세한 내용은 "[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" 또는 "[조직에서 SAML Single Sign-On 사용 및 테스트](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}"를 참조하세요

## SAML 메타데이터

{% ifversion ghec %}

{% data variables.product.product_name %}에 대한 SP 메타데이터는 SAML SSO를 사용하는 조직 또는 기업에서 사용할 수 있습니다. {% data variables.product.product_name %}에서는 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 바인딩을 사용합니다.

### 조직

엔터프라이즈의 개별 조직에 SAML SSO를 구성할 수 있습니다. 또한 {% data variables.product.product_name %}에서 개별 조직을 사용하고 엔터프라이즈 계정을 사용하지 않는 경우에는 조직에 SAML SSO를 구성할 수도 있습니다. 자세한 내용은 “[조직에 대한 SAML Single Sign-On 관리](/organizations/managing-saml-single-sign-on-for-your-organization)”를 참조하세요.

{% 데이터 variables.location.product_location %}에 있는 조직의 SP 메타데이터는 조직에서 `https://github.com/orgs/ORGANIZATION/saml/metadata`사용할 수 있습니다. 여기서 **조직은** {% 데이터 variables.location.product_location %}에 있는 조직의 이름입니다.

| 값 | 기타 이름 | 설명 | 예제 |
| :- | :- | :- | :- |
| SP 엔터티 ID | SP URL, 대상 그룹 제한 | {% 데이터 variables.location.product_location %}에서 조직의 최상위 URL | `https://github.com/orgs/ORGANIZATION` |
| SP 어설션 소비자 서비스(ACS) URL | 회신, 수신자 또는 대상 URL | IdP가 SAML 응답을 보내는 URL | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP SSO(Single Sign-On) URL | | IdP가 SSO로 시작하는 URL |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### 엔터프라이즈

{% 데이터 variables.location.product_location %}의 엔터프라이즈에 대한 SP 메타데이터를 사용할 수 있습니다 `https://github.com/enterprises/ENTERPRISE/saml/metadata`. 여기서 **ENTERPRISE** 는 {% 데이터 variables.location.product_location %}에 있는 엔터프라이즈의 이름입니다.

| 값 | 기타 이름 | 설명 | 예제 |
| :- | :- | :- | :- |
| SP 엔터티 ID | SP URL, 대상 그룹 제한 | {% 데이터 variables.location.product_location %}에서 엔터프라이즈의 최상위 URL | `https://github.com/enterprises/ENTERPRISE` |
| SP 어설션 소비자 서비스(ACS) URL | 회신, 수신자 또는 대상 URL | IdP가 SAML 응답을 보내는 URL | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP SSO(Single Sign-On) URL | | IdP가 SSO로 시작하는 URL |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

{% 데이터 variables.location.product_location %}에 대한 SP 메타데이터를 사용할 수 있습니다 `http(s)://HOSTNAME/saml/metadata`. 여기서 **HOSTNAME** 은 인스턴스의 호스트 이름입니다. {% data variables.product.product_name %}에서는 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 바인딩을 사용합니다.

| 값 | 기타 이름 | 설명 | 예제 |
| :- | :- | :- | :- |
| SP 엔터티 ID | SP URL, 대상 그룹 제한 | {% data variables.product.product_name %}의 최상위 URL | `http(s)://HOSTNAME`
| SP 어설션 소비자 서비스(ACS) URL | 회신, 수신자 또는 대상 URL | IdP가 SAML 응답을 보내는 URL | `http(s)://HOSTNAME/saml/consume` |
| SP SSO(Single Sign-On) URL | | IdP가 SSO로 시작하는 URL |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

{% data variables.product.product_name %}에 있는 조직의 SP 메타데이터는 `https://HOSTNAME/saml/metadata`에서 사용할 수 있습니다. 여기서 **HOSTNAME** 은 {% data variables.product.product_name %}에 있는 조직의 호스트 이름입니다. {% data variables.product.product_name %}에서는 `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` 바인딩을 사용합니다.

| 값 | 기타 이름 | 설명 | 예제 |
| :- | :- | :- | :- |
| SP 엔터티 ID | SP URL, 대상 그룹 제한 | {% data variables.product.product_name %}의 최상위 URL | `https://HOSTNAME` |
| SP 어설션 소비자 서비스(ACS) URL | 회신, 수신자 또는 대상 URL | IdP가 SAML 응답을 보내는 URL | `https://HOSTNAME/saml/consume` |
| SP SSO(Single Sign-On) URL | | IdP가 SSO로 시작하는 URL |  `https://HOSTNAME/sso` |

{% endif %}

## SAML 특성

다음은 {% data variables.product.product_name %}에 사용할 수 있는 SAML 특성입니다.{% ifversion ghes %} 관리 콘솔에서 특성 이름을 변경할 수 있습니다(`administrator` 특성은 제외). 자세한 내용은 "[관리 콘솔 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)"를 참조하세요.{% endif %}

| Name | 필수 여부 | 설명 |
| :- | :- | :- |
| `NameID` | 예 | 영구 사용자 식별자입니다. 영구 이름 식별자 형식을 사용할 수 있습니다. {% ifversion ghec %}엔터프라이즈를 {% data variables.product.prodname_emus %}와 함께 사용하는 경우, 대체 어설션 중 하나가 제공되지 않는 한 {% endif %}{% data variables.product.product_name %}은 사용자 이름으로 사용할 `NameID` 요소를 정규화합니다. 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.<br><br>{% note %}**참고:** 사람이 읽을 수 있는 영구 식별자를 사용하는 것이 중요합니다. 임시 식별자 형식(예:`urn:oasis:names:tc:SAML:2.0:nameid-format:transient`)을 사용하면 로그인할 때마다 계정이 다시 연결되므로 권한 부여 관리에 악영향을 미칠 수 있습니다.{% endnote %}  |
| `SessionNotOnOrAfter` | No | {% data variables.product.product_name %}에서 연결된 세션을 무효화하는 날짜입니다. 무효화 후 사용자는 다시 한 번 인증하여 {% ifversion ghec 또는 ghae %}엔터프라이즈의 리소스{% elsif ghes %}{% 데이터 variables.location.product_location %}{% endif %}에 액세스해야 합니다. 자세한 내용은 "[세션 기간 및 시간 제한](#session-duration-and-timeout)"을 참조하세요. |
{%- ifversion ghes or ghae %} | `administrator` | 아니요 | 값이 `true`인 경우 {% data variables.product.product_name %}에서는 사용자를 {% ifversion ghes %}사이트 관리자{% elsif ghae %}엔터프라이즈 소유자{% endif %}로 자동으로 승격합니다. 값이 비어 있지 않은 한 이 특성을 `true` 이외의 값으로 설정하면 강등됩니다. 이 특성을 생략하거나 값을 비워 두면 사용자의 역할이 변경되지 않습니다. | | `username` | | 없음 {% 데이터 variables.location.product_location %}의 사용자 이름입니다. | {%- endif %} | `full_name` | 아니요 | {% ifversion ghec %}엔터프라이즈에 SAML SSO를 구성하고 {% data variables.product.prodname_emus %}를 사용하는 경우,{% else %}{% endif %}사용자의 프로필 페이지에 표시되는 사용자의 전체 이름입니다. | | `emails` | 아니요 | 사용자의 이메일 주소입니다.{% ifversion ghes or ghae %} 복수의 주소를 지정할 수 있습니다.{% endif %}{% ifversion ghec or ghes %} {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 사이에 라이선스 사용을 동기화한 경우, {% data variables.product.prodname_github_connect %}에서는 `emails`를 사용하여 여러 제품에서 고유한 사용자를 식별합니다. 자세한 내용은 "[{% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %}의 라이선스 사용 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)"를 참조하세요.{% endif %} | | `public_keys` | 아니요 | {% ifversion ghec %}엔터프라이즈에 SAML SSO를 구성하고 {% data variables.product.prodname_emus %}를 사용하는 경우, {% else %}{% endif %} 사용자의 공개 SSH 키입니다. 복수의 키를 지정할 수 있습니다. | | `gpg_keys` | 아니요 | {% ifversion ghec %}엔터프라이즈에 SAML SSO를 구성하고 {% data variables.product.prodname_emus %}를 사용하는 경우,{% else %}{% endif %} 사용자의 GPG 키입니다. 복수의 키를 지정할 수 있습니다. |

특성에 대해 둘 이상의 값을 지정하려면 여러 `<saml2:AttributeValue>` 요소를 사용합니다.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML 응답 요구 사항

{% data variables.product.product_name %}에서는 IdP의 응답 메시지가 다음 요구 사항을 충족할 것을 요구합니다.

- IdP는 루트 응답 문서의 `<Destination>` 요소에서 제공되고 루트 응답 문서에 서명된 경우에만 ACS URL과 일치해야 합니다. IdP가 어설션에 서명하면 {% data variables.product.product_name %}은 어설션을 무시합니다.
- IdP는 항상 `<Audience>` 요소를 `<AudienceRestriction>` 요소의 일부로 제공해야 합니다. 값이 {% 데이터 variables.product.product_name %}에 대한 값 `EntityId` 과 일치해야 합니다.{ % ifversion ghes 또는 ghae %} 이 값은 {% data variables.location.product_location %}에 액세스하는 URL입니다(예: {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us`또는 `https://SUBDOMAIN.ghe.com`{% endif %}.{ % endif %}
  
  {%- ifversion ghec %}
  - 조직에 SAML을 구성한 경우 이 값은 `https://github.com/orgs/ORGANIZATION`입니다.
  - 조직에 SAML을 구성하는 경우 이 URL은 `https://github.com/enterprises/ENTERPRISE`입니다.
  {%- endif %}
- IdP에서 디지털 서명을 사용하여 응답에 있는 각 어설션을 보호해야 합니다. 각 개별 `<Assertion>` 요소에 서명하거나 `<Response>` 요소에 서명하여 디지털 서명으로 보호할 수 있습니다.
- IdP에서 `<NameID>` 요소를 `<Subject>` 요소의 일부로 제공해야 합니다. 모든 영구 이름 식별자 형식을 사용할 수 있습니다.
- IdP에는 ACS URL로 설정해야 하는 `Recipient` 특성이 포함되어야 합니다. 다음 예제에서는 이 특성을 확인할 수 있습니다.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## 세션 기간 및 시간 제한

사용자가 IdP를 사용하여 인증을 받고 권한이 무기한 유지되지 않도록 하기 위해 {% 데이터 variables.product.product_name %}은(는) {% ifversion ghec 또는 ghae %}엔터프라이즈의 리소스{% elsif ghes %}{% 데이터 variables.location.product_location %}{% endif %}에 액세스할 수 있는 각 사용자 계정에 대한 세션을 주기적으로 무효화합니다. 무효화되면 사용자는 IdP를 다시 한 번 인증해야 합니다. 기본적으로 IdP에서 `SessionNotOnOrAfter` 특성에 대한 값을 어설션하지 않는 경우 {% data variables.product.product_name %}에서는 IdP를 이용해 인증에 성공한 후 {% ifversion ghec %}24시간{% elsif ghes or ghae %}1주일{% endif %}이 지나면 세션을 무효화합니다.

세션 기간을 사용자 지정하려면 IdP에서 `SessionNotOnOrAfter` 특성의 값을 정의하면 됩니다. 24시간 미만의 값을 정의하면 {% data variables.product.product_name %}은 {% data variables.product.product_name %}에서는 리디렉션을 시작할 때마다 인증 메시지를 표시할 수 있습니다.

{% ifversion ghec %} 인증 오류를 방지하려면 최소 세션 기간을 4시간을 지정하는 것이 좋습니다. 자세한 내용은 "[SAML 인증 문제 해결](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)"을 참조하세요.
{% endif %}

{% note %}

**참고**:

- Azure AD 경우 SAML 토큰에 대한 구성 가능한 수명 정책은 {% data variables.product.product_name %}에 대한 세션 시간 제한을 제어하지 않습니다.
- OKTA에서는 현재 {% data variables.product.product_name %}을 사용한 SAML 인증 과정에서 `SessionNotOnOrAfter` 특성을 보내지 않습니다. 자세한 내용은 OKTA에 문의하세요.

{% endnote %}
