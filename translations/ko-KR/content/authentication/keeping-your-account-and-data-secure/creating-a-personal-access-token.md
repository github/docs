---
title: 개인용 액세스 토큰 만들기
intro: '명령줄 또는 API에서 암호 대신 사용할 {% 데이터 variables.product.pat_generic %}을(를) 만들 수 있습니다.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107751'
---
{% warning %}

**경고**: 액세스 토큰을 암호와 같이 처리합니다.

명령줄에서 {% data variables.product.company_short %}에 액세스하려면 {% data variables.product.pat_generic %}을(를) 만드는 대신 {% data variables.product.prodname_cli %} 또는 [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) 를 사용하는 것이 좋습니다.

스크립트에서 {% data variables.product.pat_generic %}을(를) 사용하는 경우 토큰을 비밀로 저장하고 {% data variables.product.prodname_actions %}을 통해 스크립트를 실행하는 것이 좋습니다. 자세한 내용은 "[암호화된 비밀"을 참조하세요.](/actions/security-guides/encrypted-secrets) {%- ifversion ghec 또는 fpt %} 토큰을 {% data variables.product.prodname_codespaces %} 비밀로 저장하고 {% data variables.product.prodname_codespaces %}에서 스크립트를 실행할 수도 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.{% endif %}

이러한 옵션을 사용할 수 없는 경우 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)와 같은 다른 서비스를 사용하여 토큰을 안전하게 저장하는 것이 좋습니다.

{% endwarning %}

## {% data variables.product.pat_generic %}s 정보

{% data variables.product.pat_generic_caps %}은(는) [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) 또는 [명령줄](#using-a-token-on-the-command-line)을 사용할 때 {% data variables.product.product_name %}에 대한 인증에 암호를 사용하는 대안입니다. {% data variables.product.pat_generic_caps %}s은(는) 자신을 대신하여 {% data variables.product.company_short %} 리소스에 액세스하기 위한 것입니다. 조직을 대신하여 또는 수명이 긴 통합을 위해 리소스에 액세스하려면 {% data variables.product.prodname_github_app %}를 사용해야 합니다. 자세한 내용은 “[앱 정보](/developers/apps/getting-started-with-apps/about-apps)”를 참조하세요.

{% ifversion pat-v2 %}

{% data variables.product.company_short %}은 현재 {% data variables.product.pat_generic %}s의 두 가지 유형인 {% data variables.product.pat_v2 %}s 및 {% data variables.product.pat_v1_plural %}을 지원합니다. {% data variables.product.company_short %}은(는) 가능하면 {% data variables.product.pat_v1_plural %} 대신 {% data variables.product.pat_v2 %}s를 사용하는 것이 좋습니다. {% data variables.product.pat_v2_caps %}s에는 {% data variables.product.pat_v1_plural %}에 비해 몇 가지 보안 이점이 있습니다.

- 각 토큰은 단일 사용자 또는 조직이 소유한 리소스에만 액세스할 수 있습니다.
- 각 토큰은 특정 리포지토리에만 액세스할 수 있습니다.
- 각 토큰에는 {% data variables.product.pat_v1_plural %}에 부여된 범위보다 더 많은 제어를 제공하는 특정 권한이 부여됩니다.
- 각 토큰에는 만료 날짜가 있어야 합니다.
- 조직 소유자는 조직의 리소스에 액세스할 수 있는 {% data variables.product.pat_v2 %}s에 대한 승인을 요구할 수 있습니다. {% ifversion ghec or ghes or ghae %}
- 엔터프라이즈 소유자는 엔터프라이즈가 소유한 조직의 리소스에 액세스할 수 있는 {% 데이터 variables.product.pat_v2 %}s에 대한 승인을 요구할 수 있습니다. {% endif %}

또한 조직 소유자는 {% data variables.product.pat_v1 %}의 액세스를 조직에 제한할 수 있습니다{% ifversion ghec or ghes or ghae %}, 엔터프라이즈 소유자는 {% data variables.product.pat_v1 %}의 액세스를 엔터프라이즈가 소유한 엔터프라이즈 또는 조직으로 제한할 수 있습니다{% endif %}.

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## {% data variables.product.pat_v2 %} 만들기

{% note %}

**참고**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [전자 메일 주소](/github/getting-started-with-github/verifying-your-email-address)가 아직 확인되지 않은 경우 확인합니다. {% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **세분화된 토큰을** 클릭합니다.
1. **새 토큰 생성** 을 클릭합니다.
1. 필요에 따라 **토큰 이름에서 토큰** 의 이름을 입력합니다.
1. **만료** 에서 토큰의 만료를 선택합니다.
1. 필요에 따라 **설명** 에서 토큰의 용도를 설명하는 메모를 추가합니다.
1. **리소스 소유자** 에서 리소스 소유자를 선택합니다. 토큰은 선택한 리소스 소유자가 소유한 리소스에만 액세스할 수 있습니다. 조직에서 {% data variables.product.pat_v2 %}s에 옵트인하지 않는 한 구성원인 조직은 나타나지 않습니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization). {% ifversion ghec or ghae %} 선택한 조직에 SAML SSO(Single Sign-On)가 필요하고 활성 SAML 세션이 아직 없는 경우 SAML SSO(Single Sign-On)를 수행해야 할 수 있습니다. {% endif %}
1. 필요에 따라 리소스 소유자가 {% data variables.product.pat_v2 %}s에 대한 승인이 필요한 조직인 경우 리소스 소유자 아래의 상자에 요청에 대한 근거를 입력합니다.
1. **리포지토리 액세스** 에서 토큰에 액세스할 리포지토리를 선택합니다. 요구 사항을 충족하는 최소한의 리포지토리 액세스를 선택해야 합니다. 토큰에는 항상 GitHub의 모든 퍼블릭 리포지토리에 대한 읽기 전용 액세스 권한이 포함됩니다.
1. 이전 단계에서 **리포지토리만 선택을 선택한** 경우 **선택한 리포지토리** 드롭다운에서 토큰에 액세스할 리포지토리를 선택합니다.
1. **사용 권한** 에서 토큰을 부여할 권한을 선택합니다. 어떤 리소스 소유자와 지정한 리포지토리 액세스에 따라 리포지토리, 조직 및 계정 권한이 있습니다. 필요에 필요한 최소한의 권한을 선택해야 합니다. 각 REST API 작업에 필요한 권한에 대한 자세한 내용은 "[{% data variables.product.pat_v2 %}s에 필요한 권한](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)"을 참조하세요.
1. **토큰 생성** 을 클릭합니다.

리소스 소유자로 조직을 선택했고 조직에 {% data variables.product.pat_v2 %}에 대한 승인이 필요한 경우 조직 관리자가 토큰을 검토할 때까지 토큰이 로 `pending` 표시됩니다. 토큰은 승인될 때까지만 공용 리소스를 읽을 수 있습니다. 조직의 소유자인 경우 요청이 자동으로 승인됩니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %}s 검토 및 해지](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)"를 참조하세요.

{% endif %}

## {% data variables.product.pat_v1 %} 만들기

{% ifversion pat-v2 %}

{% note %}

**참고**: 조직 소유자는 {% data variables.product.pat_v1 %}의 액세스를 조직에 제한할 수 있습니다. {% data variables.product.pat_v1 %}을(를) 사용하여 {% data variables.product.pat_v1 %} 액세스를 사용하지 않도록 설정한 조직의 리소스에 액세스하려고 하면 요청이 403 응답으로 실패합니다. 대신 {% data variables.product.prodname_github_app %}, {% data variables.product.prodname_oauth_app %} 또는 {% data variables.product.pat_v2 %}를 사용해야 합니다.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**참고**: {% data variables.product.pat_v1 %}은 액세스할 수 있는 모든 리포지토리에 액세스할 수 있습니다. {% data variables.product.company_short %}에서는 {% data variables.product.pat_v2 %}을(를) 대신 사용하는 것이 좋습니다. 이 경우 특정 리포지토리로 제한할 수 있습니다. {% data variables.product.pat_v2_caps %}s을(를) 사용하면 광범위한 범위 대신 세분화된 권한을 지정할 수 있습니다.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [전자 메일 주소](/github/getting-started-with-github/verifying-your-email-address)가 아직 확인되지 않은 경우 확인합니다. {% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %} 1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **토큰(클래식)** 을 클릭합니다. {% else %} {% data reusables.user-settings.personal_access_tokens %} {% endif %} {% ifversion pat-v2%} 1. **새 토큰 생성을** 선택한 다음, **새 토큰 생성(클래식)을** 클릭합니다. {% else %} {% data reusables.user-settings.generate_new_token %} {% endif %}
5. 토큰에 설명이 포함된 이름을 지정합니다.
   ![토큰 설명 필드](/assets/images/help/settings/token_description.png)
6. 토큰에 만료일을 지정하려면 **Expiration**(만료) 드롭다운 메뉴를 선택한 다음 기본값을 클릭하거나 일정 선택기를 사용합니다.
   ![토큰 만료 필드](/assets/images/help/settings/token_expiration.png)
7. 이 토큰을 부여하려는 범위를 선택합니다. 토큰을 사용하여 명령줄에서 리포지토리에 액세스하려면 **repo**(리포지토리)를 선택합니다. 할당된 범위가 없는 토큰은 공용 정보에만 액세스할 수 있습니다. 자세한 내용은 “[사용 가능한 범위](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)”를 참조하세요.
   {% ifversion fpt or ghes or ghec %} ![토큰 범위 선택](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![토큰 범위 선택](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. **토큰 생성** 을 클릭합니다.
   ![토큰 생성 단추](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![새로 만든 토큰](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![새로 만든 토큰](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![새로 만든 토큰](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. 토큰을 사용하여 SAML Single Sign-On을 사용하는 조직이 소유한 리소스에 액세스하려면 토큰에 권한을 부여합니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서의 "SAML Single Sign-On에 사용할](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) {% data variables.product.pat_generic %} 권한 부여{% ifversion fpt %}"를 참조하세요. {% else %}." {% endif %} {% endif %}

## 명령줄에서 토큰 사용

{% data reusables.command_line.providing-token-as-password %}

{% data variables.product.pat_generic_caps %}s은(는) HTTPS Git 작업에만 사용할 수 있습니다. 리포지토리에서 SSH 원격 URL을 사용하는 경우 [원격을 SSH에서 HTTPS로 전환](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)해야 합니다.

사용자 이름과 암호를 묻는 메시지가 표시되지 않으면 자격 증명이 컴퓨터에 캐시될 수 있습니다. [키 집합에서 자격 증명을 업데이트](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)하여 이전 암호를 토큰으로 바꿀 수 있습니다.

모든 HTTPS Git 작업에 대해 {% data variables.product.pat_generic %}을(를) 수동으로 입력하는 대신 Git 클라이언트를 사용하여 {% data variables.product.pat_generic %}을(를) 캐시할 수 있습니다. Git은 만료 간격이 경과할 때까지 자격 증명을 일시적으로 메모리에 저장합니다. 또한 모든 요청 전에 Git에서 읽을 수 있는 일반 텍스트 파일에 토큰을 저장할 수도 있습니다. 자세한 내용은 “[Git에서 {% data variables.product.prodname_dotcom %} 자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git)”을 참조하세요.

## 추가 참고 자료

- “[GitHub에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”
- "[토큰 만료 및 해지](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"
