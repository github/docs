---
title: 사전 빌드에서 다른 리포지토리에 액세스할 수 있도록 허용
shortTitle: Allow external repo access
intro: '사전 빌드가 성공적으로 빌드될 수 있도록 다른 {% data variables.product.prodname_dotcom %} 리포지토리에 액세스하는 것을 허용할 수 습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158791'
---
기본적으로 사전 빌드 구성에 대한 {% data variables.product.prodname_actions %} 워크플로는 자체 리포지토리 콘텐츠에만 액세스할 수 있습니다. 프로젝트는 다른 곳에 있는 추가 리소스를 사용하여 개발 환경을 빌드할 수 있습니다.

## 사전 빌드에서 외부 리소스 읽기 권한을 허용

사전 빌드 구성에서 사용하는 `devcontainer.json` 파일의 사용 권한을 지정하여 리포지토리 소유자가 동일한 다른 {% data variables.product.prodname_dotcom %} 리포지토리에 대한 읽기 권한을 구성할 수 있습니다. 자세한 내용은 “[codespace 내의 다른 리포지토리에 대한 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”를 참조하세요.

{% note %}

**참고**: 이러한 방식으로 읽기 권한만 부여할 수 있으며 대상 리포지토리의 소유자는 사전 빌드를 만드는 리포지토리의 소유자와 동일해야 합니다. 예를 들어 `octo-org/octocat` 리포지토리에 대한 사전 빌드 구성을 만드는 경우 이 사전 빌드 구성이 `devcontainer.json` 파일에 지정되어 있고 사용자에게 사용 권한이 있는 경우 다른 `octo-org/*` 리포지토리에 대한 읽기 권한을 부여할 수 있습니다.

{% endnote %}

리포지토리 소유자가 동일한 다른 리포지토리에 대한 읽기 권한을 설정하는 `devcontainer.json` 파일에 대한 사전 빌드 구성을 만들거나 편집할 때 **만들기** 또는 **업데이트** 를 클릭하면 이러한 권한을 부여하라는 메시지가 표시됩니다. 자세한 내용은 "[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)"을 참조하세요.

## 사전 빌드에서 외부 리소스 쓰기 권한을 허용

프로젝트에 리소스에 대한 쓰기 권한이 필요하거나 외부 리소스가 사전 빌드 구성을 만드는 리포지토리에 다른 소유자가 있는 리포지토리에 있는 경우 {% data variables.product.pat_generic %}를 사용하여 이 액세스 권한을 부여할 수 있습니다.

새 개인 계정을 만든 다음 이 계정을 사용하여 적절한 범위의 {% 데이터 variables.product.pat_v1 %}을(를) 만들어야 합니다.

1. {% data variables.product.prodname_dotcom %}에 새 개인 계정을 만듭니다. 
   
   {% warning %}
   
   **경고**: 기존 개인 계정을 사용하여 {% data variables.product.pat_v1 %}을(를) 생성할 수 있지만 시나리오에 필요한 대상 리포지토리에만 액세스할 수 있는 새 계정을 만드는 것이 좋습니다. 액세스 토큰의 `repository` 권한이 계정에 액세스할 수 있는 모든 리포지토리에 대한 액세스 권한을 부여하기 때문입니다. 자세한 내용은 “[새 GitHub 계정에 등록](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)” 및 “[{% data variables.product.prodname_actions %}에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)”를 참조하세요.
   
   {% endwarning %}
1. 새 계정에 필요한 리포지토리에 대한 읽기 권한을 부여합니다. 자세한 내용은 “[조직 리포지토리에 대한 개인 액세스 권한 관리](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)”를 참조하세요.
1. 새 계정에 로그인하는 동안 범위가 있는 {% data variables.product.pat_v1 %}을 만듭니다 `repo` . 필요에 따라 사전 빌드가 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}에서 패키지를 다운로드해야 하는 경우 `read:packages` 범위도 선택합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

   ![{% data variables.product.pat_v1 %}에 대해 선택된 '리포지토리' 및 '패키지' 범위](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   사전 빌드에서 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}의 패키지를 사용하는 경우 패키지에 대한 새 계정 액세스 권한을 부여하거나 사전 빌드 중인 리포지토리의 액세스 권한을 상속하도록 패키지를 구성해야 합니다. 자세한 내용은 “[패키지의 액세스 제어 및 표시 여부 구성](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”을 참조하세요.   
{% ifversion ghec %}1. SSO를 사용하도록 설정된 조직에서 소유한 리포지토리에 액세스할 수 있도록 SAML SSO(Single Sign-On)와 함께 사용할 토큰에 권한을 부여합니다. 자세한 내용은 "[SAML Single Sign-On에 사용할 {% data variables.product.pat_generic %} 권한 부여](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)"를 참조하세요.

   ![{% data variables.product.pat_v1 %}에 대한 SSO를 구성하는 단추](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. 토큰 문자열을 복사합니다. 이를 {% data variables.product.prodname_codespaces %} 리포지토리 비밀에 할당합니다.
1. 리포지토리에 대한 관리자 액세스 권한이 있는 계정에 다시 로그인합니다. 
1. {% data variables.product.prodname_github_codespaces %} 사전 빌드를 만들려는 리포지토리에서 라는 `CODESPACES_PREBUILD_TOKEN`새 {% data variables.product.prodname_codespaces %} 리포지토리 비밀을 만들어 사용자가 만들고 복사한 토큰의 값을 제공합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 리포지토리 및 조직의 암호화된 비밀 관리](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)”를 참조하세요.

{% data variables.product.pat_generic %}는 리포지토리에 대해 만든 모든 후속 사전 빌드에 사용됩니다. 다른 {% data variables.product.prodname_codespaces %} 리포지토리 비밀과 달리 `CODESPACES_PREBUILD_TOKEN` 비밀은 사전 빌드에만 사용되며 리포지토리에서 만든 codespace에서 사용할 수 없습니다.

## 추가 참고 자료

- “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)”
- “[사전 빌드 문제 해결](/codespaces/troubleshooting/troubleshooting-prebuilds)”
