---
title: GitHub Codespaces 관련 연결 문제 해결
intro: '{% data variables.product.prodname_github_codespaces %}에 연결하기 위한 문제 해결 도움말'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160070'
---
## 503 codespace 서비스를 사용할 수 없음

codespace는 활동 없이 30분이 경과하면 중지되도록 설정되어 있습니다. codespace가 중지된 후 codespace를 조작하려고 하면 `503 service unavailable` 오류가 표시될 수 있습니다. 

- {% data variables.product.prodname_vscode %} 또는 브라우저 창에 **시작** 단추가 표시되는 경우 **시작** 을 클릭하여 codespace에 다시 연결합니다.
- 창을 다시 로드하여 codespace를 초기화합니다. {% data variables.product.prodname_vscode %}의 [명령 팔레트](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette)에서 **개발자: 창 다시 로드** 를 클릭합니다.

## 브라우저에서 연결할 수 없음

브라우저에서 codespace에 액세스할 수 없는 경우가 있습니다. 이 경우, https://github.com/codespaces 로 이동하여 해당 페이지에서 codespace에 연결해 보세요.

  - codespace가 해당 페이지에 나열되지 않는 경우 연결할 codespace의 소유자인지 확인합니다. 직접 만든 codespace만 열 수 있습니다. codespace의 URL에는 항상 {% data variables.product.company_short %} 핸들이 포함됩니다.
  - codespace가 나열되지만 해당 페이지에서 연결할 수 없는 경우 다른 브라우저를 사용하여 연결할 수 있는지 확인합니다.

회사 네트워크에서 연결을 차단했을 수 있습니다. 가능한 경우 디바이스에서 거부된 연결에 대한 로깅을 확인합니다.

계속 연결할 수 없으면 {% data reusables.codespaces.contact-support %}

## JupyterLab에서 codespace에 연결할 수 없음

JupyterLab에서 codespace를 사용하려면 codespace가 설치되어 있는지 확인해야 합니다. {% data variables.product.prodname_github_codespaces %}에서 사용되는 기본 컨테이너 이미지에는 JupyterLab이 포함되어 있지만 개발 컨테이너 구성을 사용자 지정한 경우 JupyterLab을 수동으로 설치해야 합니다.

codespace에서 Debian 기반 이미지를 사용하는 경우 옵션을 로 설정하여 파일에 기능을 `devcontainer.json` 추가하여 `python` 개발 컨테이너에 JupyterLab을 `installJupyterlab` 설치할 `true`수 있습니다. 그렇지 않으면 Dockerfile에 직접 설치합니다. 설치 지침은 JupyterLab 설명서의 "[설치](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)"를 참조하세요.

기능에 대한 `python` 자세한 내용은 [리포지토리의 추가 정보 페이지를`devcontainers/features` 참조하세요](https://github.com/devcontainers/features/tree/main/src/python). 파일 및 Dockerfile에 `devcontainer.json` 대한 자세한 내용은 "[개발 컨테이너 소개"를 참조하세요.](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)

계속 연결할 수 없으면 {% data reusables.codespaces.contact-support %}

## {% data variables.product.prodname_vscode %}용 {% data variables.product.prodname_github_codespaces %} 확장에서 연결할 수 없음

{% data variables.product.prodname_vscode %} 데스크톱에서 codespace에 연결할 수 없는 경우 다음 문제 해결 단계를 사용합니다.

1. 최신 버전의 {% data variables.product.prodname_github_codespaces %} 확장이 설치되어 있는지 확인합니다. 이 확장은 미리 보기 릴리스로 제공되며, 업데이트가 자주 릴리스됩니다.
   1. {% data variables.product.prodname_vscode %}에서 “확장” 탭을 표시합니다.
   2. {% data variables.product.prodname_github_codespaces %} 확장을 선택하여 확장의 개요 페이지를 표시합니다.
   3. 업데이트를 사용할 수 있는 경우 단추가 표시됩니다. **X.X.X로 업데이트** 를 클릭하여 최신 버전으로 업그레이드합니다.
2. {% data variables.product.prodname_vscode %} 또는 [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) 릴리스(야간 업데이트)의 안정적인 빌드를 사용하고 있는지 확인합니다. 참가자 릴리스를 사용하는 경우 [안정적인 빌드](https://code.visualstudio.com/)를 설치해 보세요.
3. 회사 네트워크에서 연결을 차단했을 수 있습니다. 가능한 경우 디바이스에서 거부된 연결에 대한 로깅을 확인합니다.

계속 연결할 수 없으면 {% data reusables.codespaces.contact-support %}

### codespace에 대기 시간 이슈가 있음

codespace가 특히 느린 것 같거나 대기 시간 이슈가 있는 경우 멀리 떨어진 지역에서 생성되었을 수 있습니다. 이 문제를 해결하기 위해 [{% data variables.product.prodname_github_codespaces %} 지역을 수동으로 설정](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)할 수 있습니다.
