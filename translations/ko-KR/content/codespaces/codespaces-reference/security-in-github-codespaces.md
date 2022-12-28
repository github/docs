---
title: GitHub Codespaces의 보안
intro: '보안을 유지하고 공격 위험을 최소화하는 데 도움이 되는 지침이 포함된 {% data variables.product.prodname_github_codespaces %} 보안 아키텍처의 개요입니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
type: reference
shortTitle: Security in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/security-in-codespaces
ms.openlocfilehash: 0e7fe9a7644f78fc0dfa6d5bb624c5d74f3d8713
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111692'
---
## codespace 보안 개요

{% data variables.product.prodname_github_codespaces %}는 기본적으로 보안이 강화되도록 설계되었습니다. 따라서 소프트웨어 개발 관행이 codespace의 보안 태세를 줄이는 위험을 감수하지 않도록 해야 합니다. 

이 가이드에서는 Codespaces가 개발 환경을 안전하게 유지하는 방법을 설명하고 작업할 때 보안을 유지하는 데 도움이 되는 몇 가지 모범 사례를 제공합니다. 모든 개발 도구와 마찬가지로, 알고 신뢰하는 리포지토리만 열어서 작업해야 합니다.

### 환경 격리

{% data variables.product.prodname_github_codespaces %}는 고유한 가상 머신과 네트워크를 사용하여 Codespace를 서로 분리하도록 설계되었습니다.

#### 격리된 가상 머신

각 codespace는 새로 빌드된 고유한 VM(가상 머신)에서 호스트됩니다. 두 codespace가 동일한 VM에 공동 배치되지 않습니다. 

codespace를 다시 시작할 때마다 사용 가능한 최신 보안 업데이트를 사용하여 새 VM에 배포됩니다.

#### 격리된 네트워킹

각 codespace에 격리된 고유한 가상 네트워크가 있습니다. 방화벽을 사용하여 인터넷에서 들어오는 연결을 차단하고 내부 네트워크에서 codespace가 서로 통신하지 못하도록 합니다. 기본적으로 codespace는 인터넷에 대한 아웃바운드 연결을 만들 수 있습니다.

### 인증

웹 브라우저를 사용하거나 {% data variables.product.prodname_vscode %}에서 codespace에 연결할 수 있습니다. {% data variables.product.prodname_vscode_shortname %}에서 연결하는 경우 {% data variables.product.product_name %}으로 인증하라는 메시지가 표시됩니다. 

codespace를 만들거나 다시 시작할 때마다 자동 만료 기간이 있는 새 {% data variables.product.company_short %} 토큰이 할당됩니다. 이 기간을 사용하면 정상 작업일 동안 다시 인증할 필요 없이 codespace에서 작업할 수 있지만, codespace 사용을 중지할 때 연결을 열어 둘 수 있는 가능성이 줄어듭니다.

토큰의 범위는 codespace가 만들어진 리포지토리에 대한 액세스 권한에 따라 달라집니다.

- **리포지토리에 대한 쓰기 권한이 있는 경우**: 토큰 범위가 리포지토리에 대한 읽기/쓰기 권한으로 지정됩니다.
- **리포지토리에 대한 읽기 권한만 있는 경우**: 토큰이 소스 리포지토리에서 코드 복제만 허용합니다. 읽기 권한만 있는 프라이빗 리포지토리로 푸시하려고 하면 {% data variables.product.prodname_codespaces %}에서 리포지토리의 개인 포크를 만들라는 메시지가 표시됩니다. 그런 다음, 새 개인 포크에 대한 읽기/쓰기 권한이 있도록 토큰이 업데이트됩니다. 
- **codespace가 다른 리포지토리에 액세스할 수 있도록 설정한 경우**: codespace에 [다른 리포지토리에 대한 액세스 권한](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)이 부여된 경우 해당 리포지토리에서 만든 모든 codespace에 원본 리포지토리로 범위가 지정된 읽기/쓰기 토큰이 있습니다. 또한 토큰은 사용자 또는 조직이 지정한 다른 리포지토리에 대한 읽기 권한도 받습니다.

조직 관리자는 신뢰할 수 있는 것으로 간주되어야 하는 리포지토리를 지정합니다. 관리자는 조직의 리포지토리 중 일부나 모두를 [신뢰](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)하거나 하나도 신뢰하지 않도록 선택할 수 있습니다. 조직 관리자가 모든 사용자와 모든 리포지토리에 액세스 권한을 부여한 경우에도 codespace는 리소스를 만든 사용자보다 더 높은 리소스 액세스 권한을 가질 수 없습니다.

### codespace 연결

{% data variables.product.prodname_github_codespaces %} 서비스에서 제공하는 TLS 암호화 터널을 사용하여 Codespace에 연결할 수 있습니다. codespace 작성자만 codespace에 연결할 수 있습니다. 연결은 {% data variables.product.product_name %}에서 인증됩니다.

codespace에서 실행되는 서비스에 대한 외부 액세스를 허용해야 하는 경우 프라이빗 또는 퍼블릭 액세스에 포트 전달을 사용하도록 설정할 수 있습니다.

### 포트 전달

codespace 내에서 실행되는 서비스(예: 개발 웹 서버)에 연결해야 하는 경우 인터넷에서 서비스를 사용할 수 있도록 포트 전달을 구성할 수 있습니다. 

조직 소유자는 공개적으로 또는 조직 내에서 전달 포트를 사용할 수 있도록 하는 기능을 제한할 수 있습니다. 자세한 내용은 “[전달된 포트의 표시 여부 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”을 참조하세요.

**비공개로 전달된 포트**: 인터넷에서 액세스할 수 있지만 codespace 작성자만 {% data variables.product.product_name %}에 인증한 후 액세스할 수 있습니다.

**조직 내에서 공개적으로 전달된 포트**: 인터넷에서 액세스할 수 있지만 codespace와 동일한 조직의 멤버만 {% data variables.product.product_name %}에 인증한 후 액세스할 수 있습니다.

**공개적으로 전달된 포트**: 인터넷에서 액세스할 수 있으며 인터넷의 모든 사용자가 액세스할 수 있습니다. 공개적으로 전달된 포트에 액세스할 때는 인증이 필요하지 않습니다.

전달된 모든 포트는 기본적으로 프라이빗입니다. 즉, 포트에 액세스하기 전에 인증해야 합니다. codespace의 비공개로 전달된 포트에 대한 액세스는 만료 기간이 3시간인 인증 쿠키로 제어됩니다. 쿠키가 만료되면 다시 인증해야 합니다.

포트를 제거하고 다시 추가하거나 codespace를 다시 시작하면 공개적으로 전달된 포트가 자동으로 프라이빗으로 돌아갑니다.

“포트” 패널을 사용하여 퍼블릭 또는 프라이빗 액세스로 포트를 구성하고, 더 이상 필요하지 않은 경우 포트 전달을 중지할 수 있습니다. 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

## codespace에 대한 보안 모범 사례

codespace는 기본적으로 보안이 강화되도록 설계되었습니다. 이 보안 태세를 유지하려면 개발 절차 중에 적절한 보안 사례를 따르는 것이 좋습니다. 

- 모든 개발 도구와 마찬가지로, 알고 신뢰하는 리포지토리만 열어서 작업해야 합니다.
- codespace에 새 종속성을 추가하기 전에 해당 종속성이 잘 유지 관리되는지 및 업데이트를 릴리스하여 코드의 보안 취약성을 수정하는지 확인합니다.

### 비밀을 사용하여 중요한 정보 액세스 

codespace에서 중요한 정보(예: 액세스 토큰)를 사용하려는 경우 항상 암호화된 비밀을 사용합니다. 터미널 등에서 codespace의 비밀에 환경 변수로 액세스할 수 있습니다. 예를 들어 codespace 내에서 터미널을 시작하고 `echo $SECRET_NAME `을 사용하여 비밀 값을 확인할 수 있습니다.

비밀 값은 Codespace가 다시 시작되거나 생성될 때마다 환경 변수에 복사되며 변경될 때도 동기화됩니다.

Codespace의 리포지토리에 대한 쓰기 권한이 없는 경우 비밀이 환경에 복사되지 않습니다.

비밀에 대한 자세한 내용은 다음을 참조하세요.
- “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”
- “[{% data variables.product.prodname_github_codespaces %}에 대한 리포지토리 및 조직의 암호화된 비밀 관리](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”

### 다른 사람의 기여 및 리포지토리 작업

포크의 PR 분기에서 codespace를 만들 때 codespace의 토큰은 리포지토리가 퍼블릭인지 프라이빗인지에 따라 달라집니다.
- 프라이빗 리포지토리의 경우 codespace에 포크와 부모 둘 다에 대한 액세스 권한이 부여됩니다.
- 퍼블릭 리포지토리의 경우 codespace에서 포크 및 부모에 열려 있는 PR에만 액세스할 수 있습니다.

또한 환경에 [Codespace 비밀을](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) 삽입하지 않음으로써 이러한 시나리오에서 추가로 보호합니다.

### 추가 모범 사례

{% data variables.product.prodname_codespaces %}를 사용할 때 알아야 할 몇 가지 추가 모범 사례와 위험이 있습니다. 

#### 리포지토리의 devcontainer.json 파일 이해

Codespace를 만들 때 리포지토리에 대한 `devcontainer.json` 파일이 발견되면, 이 파일은 구문이 분석되며 codespace를 구성하는 데 사용됩니다. `devcontainer.json` 파일은 타사 확장 설치 및 `postCreateCommand`에 공급된 임의 코드 실행 같은 강력한 기능을 포함할 수 있습니다.

자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

#### 기능을 통해 액세스 권한 부여

특정 개발 기능은 잠재적으로 환경에 위험을 추가할 수 있습니다. 예를 들어 커밋 서명, 환경 변수에 삽입된 비밀, 인증된 레지스트리 액세스, 패키지 액세스는 모두 잠재적인 보안 이슈를 제기할 수 있습니다. 필요한 사용자에게만 액세스 권한을 부여하고 가능한 한 제한적인 정책을 채택하는 것이 좋습니다. 

#### 확장 사용

설치한 추가 {% data variables.product.prodname_vscode_shortname %} 확장 때문에 더 많은 위험이 도입될 수 있습니다. 위험을 완화하려면 신뢰할 수 있는 확장만 설치하고 항상 최신 상태로 유지합니다.
