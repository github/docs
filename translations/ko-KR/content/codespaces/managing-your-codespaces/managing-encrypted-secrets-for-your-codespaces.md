---
title: codespace에 대한 암호화된 비밀 관리
intro: 환경 변수를 통해 Codespace에 액세스하려는 토큰 등의 중요한 정보를 저장할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: a1ea1c87581feccd737314db0d7bf237f983357a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192811'
---
## {% data variables.product.prodname_github_codespaces %}에 대한 암호화된 비밀 정보

codespace에서 사용하려는 개인 계정에 암호화된 비밀을 추가할 수 있습니다. 예를 들어 다음과 같은 중요한 정보를 암호화된 비밀로 저장하고 액세스하려고 할 수 있습니다.

- 클라우드 서비스에 대한 액세스 토큰
- 서비스 주체
- 구독 식별자
- 프라이빗 이미지 레지스트리에 대한 자격 증명(자세한 내용은 "[codespace가 프라이빗 레지스트리에 액세스하도록 허용"을 참조하세요](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-registry).)

각 비밀에 액세스할 수 있는 리포지토리를 선택할 수 있습니다. 그런 다음, 비밀에 대한 액세스 권한이 있는 리포지토리에 대해 만든 모든 codespace에서 비밀을 사용할 수 있습니다. 템플릿에서 만든 codespace와 비밀을 공유하려면 {% data variables.product.prodname_dotcom %}의 리포지토리에 codespace를 게시한 다음, 해당 리포지토리에 비밀에 대한 액세스 권한을 부여해야 합니다.

{% data reusables.codespaces.secrets-on-start %}

### 비밀 이름 지정

{% data reusables.codespaces.secrets-naming %} 예를 들어 리포지토리 수준에서 만든 비밀에는 해당 리포지토리에 고유한 이름이 있어야 합니다.

  {% data reusables.codespaces.secret-precedence %}

### 비밀에 대한 제한

{% data variables.product.prodname_github_codespaces %}에 최대 100개의 비밀을 저장할 수 있습니다.

비밀의 크기는 64KB로 제한됩니다.

## 비밀 추가

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “Codespaces 비밀” 오른쪽에서 **새 비밀** 을 클릭합니다.
  ![“새 비밀” 단추](/assets/images/help/settings/codespaces-new-secret-button.png)
1. “이름”에서 비밀의 이름을 입력합니다.
  ![“이름” 텍스트 상자](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. **비밀 추가** 를 클릭합니다.

## 비밀 편집

기존 비밀의 값을 업데이트할 수 있으며 비밀에 액세스할 수 있는 리포지토리를 변경할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “Codespaces 비밀”에서 편집할 비밀의 오른쪽에 있는 **업데이트** 를 클릭합니다.
  ![“업데이트” 단추](/assets/images/help/settings/codespaces-secret-update-button.png)
1. “값”에서 **새 값을 입력** 합니다.
  ![“새 값을 입력” 링크](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. 필요에 따라 리포지토리에 대한 비밀의 액세스를 제거하려면 리포지토리의 선택을 취소합니다.
  ![리포지토리에 대한 액세스를 제거하기 위한 확인란](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. **변경 내용 저장** 을 클릭합니다.

## 비밀 삭제

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “Codespaces 비밀”에서 삭제할 비밀의 오른쪽에 있는 **삭제** 를 클릭합니다.
  ![“삭제” 단추](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 경고를 읽은 다음 **확인** 을 클릭합니다.
  ![비밀 삭제 확인](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## 비밀 사용

비밀은 환경 변수로 사용자의 터미널 세션으로 내보내집니다.

  ![터미널에서 내보낸 비밀의 값 표시](/assets/images/help/codespaces/exported-codespace-secret.png)

코드스페이스가 빌드되고 실행되고 나면 코드스페이스에서 비밀을 사용할 수 있습니다. 예를 들어 다음과 같은 경우에 비밀을 사용할 수 있습니다.

* 통합 터미널 또는 ssh 세션에서 애플리케이션을 시작할 때.
* 코드스페이스가 실행된 후 실행되는 개발 컨테이너 수명 주기 스크립트 내에서. 개발 컨테이너 수명 주기 스크립트에 대한 자세한 내용은 container.dev: [사양](https://containers.dev/implementors/json_reference/#lifecycle-scripts) 설명서를 참조하세요.

Codespace 비밀을 사용할 수 없습니다.

* codespace 빌드 시간 동안(즉, Dockerfile 또는 사용자 지정 진입점 내)
* 개발 컨테이너 기능 내에서. 자세한 내용은 containers.dev [개발 컨테이너 사양의](https://containers.dev/implementors/json_reference/#general-properties) 속성을 참조 `features` 하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_github_codespaces %}에 대한 리포지토리 및 조직의 암호화된 비밀 관리](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”
