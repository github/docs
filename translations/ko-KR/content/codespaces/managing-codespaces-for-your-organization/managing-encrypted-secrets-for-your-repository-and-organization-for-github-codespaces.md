---
title: Github Codespaces의 리포지토리 및 조직에 대한 암호화된 비밀 관리
shortTitle: Encrypted secrets
intro: '암호화된 비밀을 사용하면 조직, 리포지토리 또는 {% data variables.product.prodname_github_codespaces %}에 중요한 정보를 저장할 수 있습니다.'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
ms.openlocfilehash: 817ed72e76ddd13846dd9db78f992a1c5dcda101
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158623'
---
## 비밀 정보

비밀은 조직 또는 리포지토리에서 만드는 암호화된 환경 변수입니다. 만든 비밀은 {% data variables.product.prodname_github_codespaces %}에서 사용할 수 있습니다. GitHub는 [libsodium 봉인 상자](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)를 사용하여 비밀을 GitHub에 도달하기 전에 암호화하고 codespace에서 사용할 때만 암호 해독합니다.

조직 수준 비밀을 사용하면 여러 리포지토리 간에 비밀을 공유할 수 있으므로 중복 비밀을 만들 필요가 줄어듭니다. 액세스 정책을 사용하여 조직 비밀을 사용할 수 있는 리포지토리를 제어할 수 있습니다. 

{% data reusables.codespaces.secrets-on-start %}

### 비밀 이름 지정

{% data reusables.codespaces.secrets-naming %} 예를 들어 리포지토리 수준에서 만든 비밀은 해당 리포지토리에 고유한 이름이 있어야 하고 조직 수준에서 만든 비밀에는 해당 수준에서 고유한 이름이 있어야 합니다.

  {% data reusables.codespaces.secret-precedence %}

### 비밀에 대한 제한

조직당 최대 100개의 비밀과 리포지토리당 100개의 비밀을 저장할 수 있습니다.

비밀의 크기는 64KB로 제한됩니다.

## 리포지토리에 대한 비밀 추가

조직 리포지토리에 대한 비밀을 만들려면 관리자 액세스 권한이 있어야 합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.codespaces.sidebar-secret %}

2. 페이지 맨 위에서 **새 리포지토리 비밀** 을 클릭합니다.
3. **이름** 입력 상자에 비밀의 이름을 입력합니다.
4. 비밀 값을 입력합니다.
5. **비밀 추가** 를 클릭합니다.

## 조직에 대한 비밀 추가

조직에서 비밀을 만들 때 정책을 사용하여 해당 비밀에 액세스할 수 있는 리포지토리를 제한할 수 있습니다. 예를 들어 모든 리포지토리에 대한 액세스 권한을 부여하거나 프라이빗 리포지토리 또는 지정된 리포지토리 목록에 대해서만 액세스를 제한할 수 있습니다.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

2. 페이지 맨 위에서 **새 조직 비밀** 을 클릭합니다.
3. **이름** 입력 상자에 비밀의 이름을 입력합니다.
4. **값** 필드에 비밀 값을 입력합니다.
5. **리포지토리 액세스** 드롭다운 목록에서 액세스 정책을 선택합니다.
    ![프라이빗 리포지토리가 선택된 리포지토리 액세스 목록](/assets/images/help/codespaces/secret-repository-access.png)
6. **비밀 추가** 를 클릭합니다.

## 조직 수준 비밀에 대한 액세스 검토

조직의 비밀에 적용되는 액세스 정책을 확인할 수 있습니다.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

1. 비밀 목록에는 구성된 사용 권한 및 정책이 포함됩니다. 예: ![비밀 목록](/assets/images/help/settings/actions-org-secrets-list.png)
1. 각 비밀에 대해 구성된 권한에 대한 자세한 내용을 보려면 **업데이트** 를 클릭하세요.

## 추가 참고 자료

- “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”
