---
title: GitHub에 대한 인증 정보
intro: '인증 위치에 따라 다른 자격 증명을 사용하여 {% data variables.product.product_name %}에서 인증을 받으면 계정 리소스에 안전하게 액세스할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: 73caa1d527e87551078b5ce6d5830a3a936ed22d
ms.sourcegitcommit: 38a390a0101fa2848c3c1f070e69644d738097d1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/21/2022
ms.locfileid: '148104302'
---
## {% data variables.product.prodname_dotcom %}에 대한 인증 정보

계정을 안전하게 유지하기 위해 {% data variables.product.product_name %}의{% ifversion not ghae %} 특정{% endif %} 리소스에 액세스하려면 먼저 인증해야 합니다. {% data variables.product.product_name %}에 인증할 때 고유한 자격 증명을 제공하거나 확인하여 본인이 맞음을 증명합니다.

브라우저, {% data variables.product.prodname_desktop %} 또는 다른 데스크톱 애플리케이션, API, 명령줄 등의 다양한 방법으로 {% data variables.product.product_name %}의 리소스에 액세스할 수 있습니다. {% data variables.product.product_name %}에 액세스하는 방법마다 다른 인증 모드를 지원합니다.
{%- ifversion not fpt %}
- IdP(ID 공급자){% endif %}{% ifversion not ghae %}
- 2단계 인증을 사용한 사용자 이름 및 암호{% endif %}
- {% 데이터 variables.product.pat_generic_caps %}
- SSH 키

## 브라우저에서 인증

{% ifversion ghae %}

IdP를 사용하여 브라우저에서 {% data variables.product.product_name %}에 인증할 수 있습니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”를 참조하세요.

{% else %}

{% ifversion fpt or ghec %}

{% 데이터 variables.enterprise.prodname_emu_enterprise %}의 구성원인 경우 IdP를 사용하여 브라우저에서 {% 데이터 variables.product.product_name %}에 인증합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[관리형 사용자로 인증](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}”을 참조하세요.{% else %}."{% endif %} 

{% 데이터 variables.enterprise.prodname_emu_enterprise %}의 멤버가 아닌 경우 {% 데이터 variables.product.prodname_dotcom_the_website %} 사용자 이름과 암호를 사용하여 인증합니다. 조직 및 엔터프라이즈 소유자가 요구할 수 있는 2단계 인증 및 SAML Single Sign-On을 사용할 수도 있습니다.

{% else %}

여러 가지 방법으로 브라우저에서 {% data variables.product.product_name %}에 인증할 수 있습니다.

{% endif %}

- **사용자 이름 및 암호만**
    - {% data variables.product.product_name %}에서 계정을 만들 때 암호를 만듭니다. 암호 관리자를 사용하여 고유한 임의 암호를 생성하는 것이 좋습니다. 자세한 내용은 “[강력한 암호 만들기](/github/authenticating-to-github/creating-a-strong-password)”를 참조하세요.{% ifversion fpt or ghec %}
  - 2FA를 사용하도록 설정하지 않은 경우 {% data variables.product.product_name %}는 새 브라우저 프로필, 쿠키가 삭제된 브라우저 또는 새 컴퓨터와 같이 인식할 수 없는 디바이스에서 처음 로그인할 때 추가 확인을 요청합니다.

   사용자 이름 및 암호를 입력한 후 메일을 통해 보내드린 확인 코드를 입력하라는 메시지가 표시됩니다. {% data variables.product.prodname_mobile %} 애플리케이션이 설치된 경우 대신 알림을 받게 됩니다. 자세한 내용은 “[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”을 참조하세요.{% endif %}
- **2FA(2단계 인증)** (권장)
    - 2FA를 사용하도록 설정한 경우 사용자 이름과 암호를 성공적으로 입력한 후에 모바일 디바이스{% ifversion fpt or ghec %}에 TOTP(시간 제약이 있는 일회성 암호) 애플리케이션에서 생성되거나 문자 메시지(SMS){% endif %}로 전송되는 코드를 입력하라는 메시지가 표시됩니다. 자세한 내용은 “[2단계 인증을 사용하여 {% data variables.product.prodname_dotcom %}에 액세스](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)”를 참조하세요.
    - TOTP 애플리케이션{% ifversion fpt or ghec %} 또는 문자 메시지{% endif %}를 사용한 인증 외에도 {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} 또는{% endif %} WebAuthn을 사용하는 보안 키를 사용하는 다른 인증 방법을 추가할 수 있습니다(선택 사항). 자세한 내용은 {% ifversion fpt or ghec %}“[{% data variables.product.prodname_mobile %}로 2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)” 및 {% endif %}“[보안 키를 사용하여 2단계 인증 구성](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”을 참조하세요.{% ifversion ghes %}
- **외부 인증**
  - 사이트 관리자는 사용자 이름 및 암호 대신 외부 인증을 사용하도록 {% 데이터 variables.location.product_location %}을(를) 구성할 수 있습니다. 자세한 내용은 “[외부 인증 방법](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)”을 참조하세요.{% endif %}{% ifversion fpt or ghec %}
- **SAML Single Sign On**
  - SAML Single Sign-On을 사용하는 조직 또는 엔터프라이즈 계정이 소유한 리소스에 액세스하려면 IdP를 통해 인증해야 할 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[SAML SSO(Single Sign-On)를 사용한 인증 정보](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}{% endif %}

{% endif %}

## {% data variables.product.prodname_desktop %}에서 인증
브라우저를 사용하여 {% data variables.product.prodname_desktop %}에서 인증할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 인증](/desktop/getting-started-with-github-desktop/authenticating-to-github)”을 참조하세요.

## API에서 인증

API에서 다양한 방법으로 인증할 수 있습니다.

- **{% 데이터 variables.product.pat_generic_caps %}s**
    - 테스트와 같은 제한된 상황에서는 {% 데이터 variables.product.pat_generic %}을(를) 사용하여 API에 액세스할 수 있습니다. {% 데이터 variables.product.pat_generic %}을(를) 사용하면 언제든지 액세스를 취소할 수 있습니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.
- **웹 애플리케이션 흐름**
    - 프로덕션 환경의 OAuth 앱에서는 웹 애플리케이션 흐름을 사용하여 인증해야 합니다. 자세한 내용은 “[OAuth 앱 권한 부여](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)”를 참조하세요.
- **GitHub 앱**
    - 프로덕션 환경의 GitHub 앱에서는 앱 설치 대신 인증해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에서 인증](/apps/building-github-apps/authenticating-with-github-apps/)”을 참조하세요.

## 명령줄에서 인증

명령줄에서 {% data variables.product.product_name %}의 리포지토리에 액세스하는 방법에는 HTTPS와 SSH 두 가지가 있으며, 각각 다른 인증 방법을 사용합니다. 인증 방법은 리포지토리를 복제할 때 HTTPS 또는 SSH 원격 URL을 선택하는지에 따라 결정됩니다. 액세스 방법에 대한 자세한 내용은 “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”를 참조하세요.

### HTTPS

방화벽 또는 프록시 뒤에 있는 경우에도 HTTPS를 통해 {% data variables.product.product_name %}의 모든 리포지토리를 사용할 수 있습니다.

{% 데이터 variables.product.prodname_cli %}을(를) 사용하여 인증하는 경우 {% 데이터 variables.product.pat_generic %}로 인증하거나 웹 브라우저를 통해 인증할 수 있습니다. {% data variables.product.prodname_cli %}에서 인증하는 방법에 대한 자세한 내용은 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)을 참조하세요.

{% 데이터 variables.product.prodname_cli %}을(를) 사용하지 않고 인증하는 경우 {% 데이터 variables.product.pat_generic %}으로 인증해야 합니다. {% data reusables.user-settings.password-authentication-deprecation %} [자격 증명 도우미](/github/getting-started-with-github/caching-your-github-credentials-in-git)로 캐시하지 않는 한 Git을 사용하여 {% data variables.product.product_name %}에서 인증할 때마다 {% data variables.product.product_name %}에서 인증하기 위해 자격 증명을 입력하라는 메시지가 표시됩니다.

### SSH

방화벽 및 프록시가 SSH 연결을 허용하지 않을 수도 있지만 SSH를 통해 {% data variables.product.product_name %}의 모든 리포지토리를 사용할 수 있습니다.

{% data variables.product.prodname_cli %}에서 인증하는 경우 CLI는 머신에서 SSH 퍼블릭 키를 찾고 업로드할 키를 선택하라는 메시지를 표시합니다. {% 데이터 variables.product.prodname_cli %}이(가) 업로드할 SSH 공개 키를 찾지 못하면 새 SSH 공개/프라이빗 키페어를 생성하고 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 공개 키를 업로드할 수 있습니다. 그런 다음 {% 데이터 variables.product.pat_generic %}로 인증하거나 웹 브라우저를 통해 인증할 수 있습니다. {% data variables.product.prodname_cli %}에서 인증하는 방법에 대한 자세한 내용은 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)을 참조하세요.

{% 데이터 variables.product.prodname_cli %}없이 인증하는 경우 로컬 머신에서 SSH 공개/프라이빗 키페어를 생성하고 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 공개 키를 추가해야 합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요. [키를 저장](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)하지 않은 경우, Git을 사용하여 {% data variables.product.product_name %}에서 인증할 때마다 SSH 키 암호를 입력하라는 메시지가 표시됩니다.

{% ifversion fpt or ghec %}
### SAML Single Sign-On에 대한 권한 부여

{% 데이터 variables.product.pat_generic %} 또는 SSH 키를 사용하여 SAML Single Sign-On을 사용하는 조직에서 소유한 리소스에 액세스하려면 개인 토큰 또는 SSH 키에도 권한을 부여해야 합니다. 자세한 내용은 [{% 데이터 variables.product.prodname_ghe_cloud %} 설명서에서 "SAML Single Sign-On과 함께 사용할 수 있는 {% 데이터 variables.product.pat_generic](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) %} 권한 부여" 또는 "[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" 문서를 참조하세요. {% else %}." {% endif %} {% endif %}

## {% data variables.product.company_short %}의 토큰 형식

{% data variables.product.company_short %}는 토큰 형식을 나타내는 접두사로 시작하는 토큰을 발급합니다.

| 토큰 형식 | 접두사 | 추가 정보 |
| :- | :- | :- |
| {% 데이터 variables.product.pat_v1_caps %} | `ghp_` | {% ifversion pat-v2 %}"[{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token#creating-a-personal-access-token-classic)"{% else %}"[{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"{% endif %} 만들기  |{% ifversion pat-v2 %}
| {% 데이터 variables.product.pat_v2_caps %} | `github_pat_` | "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token)" |{% endif %}
| OAuth 액세스 토큰 | `gho_` | “[{% data variables.product.prodname_oauth_apps %}에 권한 부여](/developers/apps/authorizing-oauth-apps)” |
| {% data variables.product.prodname_github_app %}의 사용자-서버 토큰 | `ghu_` | “[{% data variables.product.prodname_github_apps %}의 사용자 식별 및 권한 부여](/developers/apps/identifying-and-authorizing-users-for-github-apps)” |
| {% data variables.product.prodname_github_app %}의 서버-서버 토큰 | `ghs_` | “[{% data variables.product.prodname_github_apps %}에서 인증](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)” |
| {% data variables.product.prodname_github_app %}의 새로 고침 토큰 | `ghr_` | “[사용자-서버 액세스 토큰 새로 고침](/developers/apps/refreshing-user-to-server-access-tokens)” |

