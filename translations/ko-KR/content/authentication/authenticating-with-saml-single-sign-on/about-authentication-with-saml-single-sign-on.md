---
title: SAML Single Sign-On을 사용한 인증 정보
intro: 'ID 공급자(IdP)를 통해 SAML SSO(Single Sign-On)로 {% ifversion ghae %}를 인증하여 {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}SAML SSO(Single Sign-On){% endif %}를 사용하는 조직에 액세스할 수 있습니다.'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111515'
---
## SAML SSO를 사용한 인증 정보

{% ifversion ghae %}

SAML SSO를 사용하면 엔터프라이즈 소유자가 SAML IdP에서 {% data variables.product.product_name %}(으)로의 액세스를 중앙에서 제어하고 보호할 수 있습니다. 브라우저에서 {% data variables.location.product_location %}을(를) 방문하면 {% data variables.product.product_name %}에서 인증을 위해 IdP로 리디렉션됩니다. IdP에서 계정으로 성공적으로 인증한 후 IdP는 {% data variables.location.product_location %}로 다시 리디렉션합니다. {% data variables.product.product_name %}은(는) IdP에서 응답의 유효성을 검사한 다음 액세스 권한을 부여합니다.

{% data reusables.saml.you-must-periodically-authenticate %}

{% data variables.product.product_name %}에 액세스할 수 없는 경우 로컬 엔터프라이즈 소유자 또는 관리자에게 {% data variables.product.product_name %}을(를) 문의하세요. {% data variables.product.product_name %}의 모든 페이지 아래쪽에 있는 **지원** 을 클릭하여 기업의 연락처 정보를 찾을 수 있습니다. {% data variables.product.company_short %} 및 {% data variables.contact.github_support %}은(는) IdP에 액세스할 수 없으며 인증 문제를 해결할 수 없습니다. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 조직 소유자는 {% data variables.product.prodname_dotcom %}의 개인 계정을 초대하여 SAML SSO를 사용하는 조직에 가입하도록 할 수 있습니다. SAML SSO에서는 조직에 기여하고 {% data variables.product.prodname_dotcom %}에서의 기존 ID 및 기여를 유지하도록 허용합니다.

{% data variables.enterprise.prodname_emu_enterprise %}의 구성원인 경우 대신 엔터프라이즈에서 프로비전되고 제어되는 새 계정을 사용합니다. {% data reusables.enterprise-accounts.emu-more-info-account %}

SAML SSO를 사용하는 조직 내의 대부분의 리소스에 액세스하려고 하면 {% data variables.product.prodname_dotcom %}는 인증을 위해 조직의 SAML IdP로 리디렉션됩니다. IdP에서 계정으로 성공적으로 인증한 후 IdP는 조직의 리소스에 액세스할 수 있는 {% data variables.product.prodname_dotcom %}(으)로 다시 리디렉션합니다.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

최근 브라우저에서 조직의 SAML IdP로 인증한 경우 SAML SSO를 사용하는 {% data variables.product.prodname_dotcom %} 조직에 액세스할 때 자동으로 권한이 부여됩니다. 최근 브라우저에서 조직의 SAML IdP를 사용하여 인증하지 않은 경우 조직에 액세스하려면 먼저 SAML IdP에서 인증해야 합니다.

{% data reusables.saml.you-must-periodically-authenticate %}

## 연결된 SAML ID

IdP 계정으로 인증하고 {% data variables.product.prodname_dotcom %}(으)로 돌아가면 {% data variables.product.prodname_dotcom %}은(는) {% data variables.product.prodname_dotcom %} 개인 계정과 로그인한 SAML ID 사이의 조직 또는 엔터프라이즈에 링크를 기록합니다.  이 연결된 ID는 해당 조직의 멤버 자격에 대한 유효성을 검사하는 데 사용되며 조직 또는 엔터프라이즈 설정에 따라 사용자가 구성원이 되는 조직과 팀을 결정하는 데도 사용됩니다. 각 {% data variables.product.prodname_dotcom %} 계정은 조직당 정확히 하나의 SAML ID에 연결할 수 있습니다. 마찬가지로 각 SAML ID는 조직에서 정확히 하나의 {% data variables.product.prodname_dotcom %} 계정에 연결할 수 있습니다. 

다른 {% data variables.product.prodname_dotcom %} 계정에 이미 연결된 SAML ID로 로그인하면 해당 SAML ID로 로그인할 수 없다는 오류 메시지가 표시됩니다. 이 상황은 새 {% data variables.product.prodname_dotcom %} 계정을 사용하여 조직 내에서 작업하려는 경우에 발생할 수 있습니다. 해당 {% data variables.product.prodname_dotcom %} 계정에서 해당 SAML ID를 사용하지 않으려면 해당 SAML ID에서 로그아웃한 다음 SAML 로그인을 반복해야 합니다. {% data variables.product.prodname_dotcom %} 계정에서 해당 SAML ID를 사용하려는 경우 새 계정에 연결할 수 있도록 관리자에게 이전 계정에서 SAML ID의 연결을 해제하도록 요청해야 합니다.  조직 또는 엔터프라이즈의 설정에 따라 관리자는 SAML 공급자 내에서 ID를 다시 할당해야 할 수도 있습니다.  자세한 내용은 “[조직에 대한 멤버의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”를 참조하세요.

로그인한 SAML ID가 현재 {% data variables.product.prodname_dotcom %} 계정에 연결된 SAML ID와 일치하지 않으면 계정을 다시 연결하려고 한다는 경고가 표시됩니다. SAML ID는 액세스 및 팀 멤버 자격을 제어하는 데 사용되므로 새 SAML ID를 계속 사용하면 {% data variables.product.prodname_dotcom %} 내의 팀 및 조직에 대한 액세스 권한이 손실될 수 있습니다. 나중에 인증 시 새 SAML ID를 사용해야 한다는 것을 알고 있는 경우에만 계속 진행합니다. 

## SAML SSO를 사용하여 {% data variables.product.pat_generic %}s 및 SSH 키 권한 부여

명령줄에서 API 또는 Git을 사용하여 SAML SSO를 사용하는 조직의 보호된 콘텐츠에 액세스하려면 HTTPS 또는 권한 있는 SSH 키를 통해 권한 있는 {% data variables.product.pat_generic %}를 사용해야 합니다.

{% data variables.product.pat_generic %} 또는 SSH 키가 없는 경우 명령줄에 대한 {% data variables.product.pat_generic %}을 만들거나 새 SSH 키를 생성할 수 있습니다. 자세한 내용은 "[{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" 또는 "[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"를 참조하세요.

SAML SSO를 사용하거나 적용하는 조직에서 새 또는 기존 {% data variables.product.pat_generic %} 또는 SSH 키를 사용하려면 토큰에 권한을 부여하거나 SAML SSO 조직에서 사용할 SSH 키에 권한을 부여해야 합니다. 자세한 내용은 "[SAML Single Sign-On에서 사용할 {% data variables.product.pat_generic %} 권한 부여](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" 또는 "[SAML Single Sign-On에서 사용할 SSH 키 권한 부여](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"를 참조하세요.

## {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} 및 SAML SSO 정보

SAML SSO를 사용하거나 적용하는 조직에 액세스하려면 {% data variables.product.prodname_oauth_app %} 또는 {% data variables.product.prodname_github_app %}에 권한을 부여할 때마다 활성 SAML 세션이 있어야 합니다. 브라우저에서 `https://github.com/orgs/ORGANIZATION-NAME/sso`로 이동하여 활성 SAML 세션을 만들 수 있습니다.

엔터프라이즈 또는 조직 소유자가 조직에 SAML SSO를 사용하거나 적용한 후 SAML을 통해 처음으로 인증한 후에는 이전에 조직에 액세스하도록 권한을 부여한 {% data variables.product.prodname_oauth_apps %} 또는 {% data variables.product.prodname_github_apps %}를 다시 인증해야 합니다. 

권한을 부여한 {% data variables.product.prodname_oauth_apps %}를 보려면 [{% data variables.product.prodname_oauth_apps %} 페이지](https://github.com/settings/applications)를 방문하세요. 권한을 부여한 {% data variables.product.prodname_github_apps %}를 보려면 [{% data variables.product.prodname_github_apps %} 페이지](https://github.com/settings/apps/authorizations)를 방문하세요.

{% endif %}

## 추가 참고 자료

{% ifversion ghec %}- “[SAML Single Sign-On을 사용하여 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”{% endif %} {% ifversion ghae %}- “[엔터프라이즈의 ID 및 액세스 관리 정보](/admin/authentication/about-identity-and-access-management-for-your-enterprise)”{% endif %}
