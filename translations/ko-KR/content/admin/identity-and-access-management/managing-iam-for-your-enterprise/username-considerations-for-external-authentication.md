---
title: 외부 인증에 대한 사용자 이름 고려 사항
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}{% ifversion ghes %}인증에 CAS, LDAP 또는 SAML{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}을 사용하는 경우 {% endif %}{% data variables.product.product_name %}는 특정 규칙에 따라 {% ifversion ghec or ghae %}엔터프라이즈{% elsif ghes %}인스턴스{% endif %}에서 각 사용자 계정의 사용자 이름을 확인합니다.'
miniTocMaxHeadingLevel: 3
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
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120753'
---
{% ifversion ghec %} {% note %}

**참고:** 이 문서는 {% data variables.product.prodname_emus %}에만 적용됩니다. {% data variables.product.prodname_emus %} 없이 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 {% data variables.product.prodname_dotcom %}이 아니라 사용자가 사용자 이름을 만듭니다.

{% endnote %} {% endif %}

## 외부 인증을 사용하는 사용자 이름 정보

{% ifversion ghes %}

CAS, LDAP 또는 SAML을 사용하여 {% data variables.product.product_name %}에 대한 외부 인증을 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)”를 참조하세요.

외부 인증을 사용하는 경우 {% data variables.location.product_location %}은 사용자가 처음으로 외부 인증 시스템을 통해 {% data variables.location.product_location %}에 로그인할 때 각 사용자에 대한 사용자 이름을 자동으로 만듭니다.

{% elsif ghec %}

{% data variables.product.prodname_emus %}가 있는 엔터프라이즈를 사용하는 경우 엔터프라이즈 멤버는 SAML IdP(ID 공급자)를 통해 {% data variables.product.prodname_dotcom %}에 액세스할 수 있도록 인증합니다. 자세한 내용은 "[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" 및 "[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)"를 참조하세요.

{% data variables.product.prodname_dotcom %}는 사용자 계정이 SCIM을 통해 프로비전될 때 IdP에서 제공하는 식별자를 정규화한 다음 밑줄과 짧은 코드를 추가하여 각 사용자에 대한 사용자 이름을 자동으로 만듭니다. 여러 식별자가 동일한 사용자 이름으로 정규화되면 사용자 이름 충돌이 발생하고 첫 번째 사용자 계정만 만들어집니다. 정규화된 사용자 이름이 고유하고 39자 제한 이내가 되도록 IdP를 변경하여 사용자 이름 문제를 해결할 수 있습니다.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %}은 인증을 위해 SAML SSO를 사용하고, 사용자가 처음으로 IdP(ID 공급자)를 통해 로그인할 때 각 사용자의 사용자 이름을 자동으로 만듭니다.

{% endif %}

{% ifversion ghec %}
## {% data variables.enterprise.prodname_managed_users %}의 사용자 이름 정보

{% data variables.enterprise.prodname_emu_enterprise %}을(를) 만들 때 엔터프라이즈 멤버의 사용자 이름에 대한 접미사로 사용할 짧은 코드를 선택합니다. {% data reusables.enterprise-accounts.emu-shortcode %} SAML SSO를 구성하는 설정 사용자의 사용자 이름은 **@<em>SHORT-CODE</em>_admin** 형식입니다. 

ID 공급자에서 새 사용자를 프로비전할 때 새 {% data variables.enterprise.prodname_managed_user %}에는 **<em>IDP-USERNAME</em>_ <em>SHORT-CODE</em> 형식의@** {% data variables.product.prodname_dotcom %} 사용자 이름이 있습니다. <em>IDP-USERNAME</em> 구성 요소는 IdP에서 보낸 SCIM `userName` 특성 값을 정규화하여 구성됩니다. 

| ID 공급자                 | {% data variables.product.prodname_dotcom %} 사용자 이름  |
|-----------------------------------|----------------------|
| Azure AD(Azure Active Directory) | _IDP-USERNAME_ 은 게스트 계정에 대한 `#EXT#`을(를) 포함하지 않는 UPN(사용자 계정 이름)의 `@` 문자 앞에 나오는 문자를 정규화하여 구성됩니다. |
| Okta                              | _IDP-USERNAME_ 은 IdP에서 제공하는 정규화된 사용자 이름 특성입니다.               |

이러한 규칙에 따라 IdP에서 여러 사용자에 대해 동일한 _IDP-USERNAME_ 을 제공할 수 있습니다. 예를 들어 Azure AD의 경우 다음과 같은 UPN은 동일한 사용자 이름을 생성합니다.

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

이로 인해 사용자 이름 충돌이 발생하고 첫 번째 사용자만 프로비전됩니다. 자세한 내용은 "[사용자 이름 문제 해결"을 참조하세요.](#resolving-username-problems)
{% endif %}

사용자 이름{% ifversion ghec %}(밑줄 및 짧은 코드 포함){% endif %}는 39자를 초과할 수 없습니다.

## 사용자 이름 정규화 정보

{% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}의 사용자 계정에 대한 사용자 이름은 영숫자 문자와 대시(`-`)만 포함할 수 있습니다.

{% ifversion ghec %} SAML 인증을 구성하는 경우 {% data variables.product.product_name %}은 IdP에서 보낸 SCIM `userName` 특성 값을 사용하여 {% data variables.product.prodname_dotcom_the_website %}에서 해당 사용자 계정에 대한 사용자 이름을 확인합니다. 이 값에 지원되지 않는 문자가 포함되면 {% data variables.product.product_name %}에서 다음 규칙에 따라 사용자 이름을 정규화합니다.
{% elsif ghes %} CAS, LDAP 또는 SAML 인증을 구성하는 경우 {% data variables.product.product_name %}은 외부 인증 공급자의 사용자 계정 식별자를 사용하여 {% data variables.product.product_name %}의 해당 사용자 계정에 대한 사용자 이름을 확인합니다. 식별자에 지원되지 않는 문자가 포함되면 {% data variables.product.product_name %}에서 다음 규칙에 따라 사용자 이름을 정규화합니다.
{% elsif ghae %} SAML 인증을 구성하는 경우 {% data variables.product.product_name %}은 IdP의 사용자 계정 식별자를 사용하여 {% data variables.product.product_name %}의 해당 사용자 계정에 대한 사용자 이름을 확인합니다. 식별자에 지원되지 않는 문자가 포함되면 {% data variables.product.product_name %}에서 다음 규칙에 따라 사용자 이름을 정규화합니다.
{% endif %}

1. {% data variables.product.product_name %}에서 계정의 사용자 이름에 있는 영숫자가 아닌 문자를 대시로 정규화합니다. 예를 들어 사용자 이름 `mona.the.octocat`은 `mona-the-octocat`으로 정규화됩니다. 정규화된 사용자 이름은 대시로 시작하거나 끝날 수 없습니다. 또한 두 개의 연속 대시를 포함할 수 없습니다.

1. 이메일 주소에서 만든 사용자 이름은 `@` 문자 앞에 있는 정규화된 문자에서 만들어집니다.

1. 도메인 계정에서 만든 사용자 이름은 구분 기호 뒤 `\\` 의 정규화된 문자에서 만들어집니다. 

1. 여러 계정이 동일한 {% data variables.product.product_name %} 사용자 이름으로 정규화되는 경우 첫 번째 사용자 계정만 만들어집니다. 동일한 사용자 이름을 가진 후속 사용자는 로그인할 수 없습니다. {% ifversion ghec %} 자세한 내용은 "[사용자 이름 문제 해결"을 참조하세요.](#resolving-username-problems) {% endif %}

### 사용자 이름 정규화의 예

| 공급자의 식별자 | {% data variables.product.prodname_dotcom %}의 정규화된 사용자 이름 | 결과 |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름이 성공적으로 만들어집니다. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 대시로 시작하므로 만들어지지 않습니다. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 대시로 끝나므로 만들어지지 않습니다. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 두 개의 연속 대시를 포함하므로 만들어지지 않습니다. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 만들어지지 않습니다. 정규화된 사용자 이름은 유효하지만 이미 존재합니다. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 만들어지지 않습니다. 정규화된 사용자 이름은 유효하지만 이미 존재합니다. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 만들어지지 않습니다. 정규화된 사용자 이름은 유효하지만 이미 존재합니다. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | 이 사용자 이름은 39자 제한을 초과하므로 만들어지지 않습니다. |

{% ifversion not ghec %}
### SAML을 사용하는 사용자 이름 정규화 정보

{% ifversion ghes %} {% data variables.location.product_location %}에 대한 SAML 인증을 구성하는 경우 {% endif %}{% data variables.product.product_name %}는 SAML 응답에서 다음 어설션 중 하나로 각 사용자의 사용자 이름을 결정하며, 우선 순위를 내림차순으로 정렬합니다.

1. 사용자 지정 `username` 특성(정의되어 있는 경우)
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`어설션(존재하는 경우)
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`어설션(존재하는 경우)
1. `NameID` 요소

다른 특성이 있는 경우에도 {% data variables.product.product_name %}에는 `NameID` 요소가 필요합니다. 자세한 내용은 "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)"를 참조하세요.

{% data variables.product.product_name %}은(는) {% endif %} {% data variables.location.product_location %}의 IdP와 {% ifversion ghae %}의 사용자 이름 {% ifversion ghae %} 간에 `NameID` 매핑을 만들므로 `NameID` 은 사용자의 수명 주기 동안 지속적이고 고유하며 변경될 수 없습니다.

{% ifversion ghes %} {% note %}

**참고**: 사용자에 대한 이 IdP에서 변경되면 `NameID` {% data variables.location.product_location %}에 로그인할 때 사용자에게 오류 메시지가 표시됩니다. 사용자의 액세스 권한을 복원하려면 사용자 계정의 `NameID` 매핑을 업데이트해야 합니다. 자세한 내용은 “[사용자의 SAML 업데이트`NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)”를 참조하세요.

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## 사용자 이름 문제 해결

새 사용자가 프로비전될 때 사용자 이름이 39자(밑줄 및 짧은 코드 포함)보다 길거나 엔터프라이즈의 기존 사용자와 충돌하는 경우 프로비전 시도가 실패하고 `409` 오류가 발생합니다. 

이 문제를 해결하려면 정규화된 모든 사용자 이름이 문자 제한 내에서 고유하도록 IdP에서 다음 변경 중 하나를 수행해야 합니다.
- `userName` 문제를 일으키는 개별 사용자의 특성 값 변경
- 모든 사용자에 `userName` 대한 특성 매핑 변경
- 모든 사용자에 대한 사용자 지정 `userName` 특성 구성

특성 매핑을 변경하면 기존 {% data variables.enterprise.prodname_managed_users %}의 사용자 이름이 업데이트되지만 활동 기록을 포함하여 계정에 대한 다른 변경 내용은 변경되지 않습니다.

{% note %}

**참고:** {% data variables.contact.github_support %}는 특성 매핑 사용자 지정 또는 사용자 지정 식 구성에 대한 지원을 제공할 수 없습니다. 질문이 있는 경우 IdP에 문의할 수 있습니다.

{% endnote %}

### Azure AD 사용자 이름 문제 해결

Azure AD 사용자 이름 문제를 해결하려면 충돌하는 사용자의 사용자 계정 이름 값을 수정하거나 특성에 대한 특성 매핑을 `userName` 수정합니다. 특성 매핑을 수정하는 경우 기존 특성을 선택하거나 식을 사용하여 프로비전된 모든 사용자가 고유한 정규화된 별칭을 갖도록 할 수 있습니다.

1. Azure AD에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 엽니다.
1. 왼쪽 사이드바에서 **프로비전** 을 클릭합니다.
1. **프로비전 편집** 을 클릭합니다.
1. **매핑** 을 펼친 다음, **Azure Active Directory 사용자 프로비전** 을 클릭합니다.
1. {% data variables.product.prodname_dotcom %} `userName` 특성 매핑을 클릭합니다. 
1. 특성 매핑을 변경합니다.
   - Azure AD의 기존 특성을 {% data variables.product.prodname_dotcom %}의 `userName` 특성에 매핑하려면 원하는 특성 필드를 클릭합니다. 그런 다음, 저장하고 약 40분 내에 프로비전 주기가 발생할 때까지 기다립니다.
   - 기존 특성 대신 식을 사용하려면 매핑 형식을 "식"으로 변경한 다음, 모든 사용자에 대해 이 값을 고유하게 만드는 사용자 지정 식을 추가합니다. 예를 들어 `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`를 사용할 수 있습니다. 자세한 내용은 Microsoft Docs의 [Azure Active Directory에서 특성 매핑에 대한 식을 작성하기 위한 참조](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data)를 참조하세요.

### Okta의 사용자 이름 문제 해결

Okta의 사용자 이름 문제를 해결하려면 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 대한 특성 매핑 설정을 업데이트합니다.

1. OKTA에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 엽니다.
1. **로그온** 을 클릭합니다.
1. "설정" 섹션에서 **편집** 을 클릭합니다.
1. "애플리케이션 사용자 이름 형식"을 업데이트합니다.
{% endif %}
