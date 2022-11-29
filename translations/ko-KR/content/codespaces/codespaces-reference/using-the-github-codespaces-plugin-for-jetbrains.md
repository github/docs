---
title: JetBrains용 GitHub Codespaces 플러그 인 사용
shortTitle: Plugin for JetBrains
intro: 'JetBrains 클라이언트 애플리케이션에 대한 {% data variables.product.prodname_github_codespaces %} 플러그 인을 사용하여 codespace에 대해 알아보거나 작업을 마쳤을 때 codespace를 중지할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159937'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## {% data variables.product.prodname_github_codespaces %} 플러그 인 정보

JetBrains 클라이언트 애플리케이션은 JetBrains 게이트웨이 애플리케이션에서 codespace에 연결할 때 시작됩니다. 즐겨 찾는 JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 있습니다. 자세한 내용은 "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

JetBrains 게이트웨이에서 codespace에 연결할 때 {% data variables.product.prodname_github_codespaces %} 플러그 인이 JetBrains 클라이언트에 이미 설치되어 있습니다. 플러그 인은 사용자 인터페이스에 {% data variables.product.prodname_github_codespaces %} 도구 창을 추가합니다.

JetBrains 클라이언트의 애플리케이션 창 왼쪽 아래에 있는 **{% data variables.product.prodname_github_codespaces %}** 을 클릭하여 {% data variables.product.prodname_github_codespaces %} 도구 창을 엽니다.

![{% data variables.product.prodname_github_codespaces %} 도구 창의 스크린샷](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## {% data variables.product.prodname_github_codespaces %} 도구 창 사용

{% data variables.product.prodname_github_codespaces %} 도구 창에는 다음이 표시됩니다.
* 이 codespace를 만든 리포지토리입니다.
* codespace의 표시 이름입니다.
* 현재 분기입니다.
* 컴퓨터 사양입니다.
* 이 codespace가 자동으로 중지되기 전에 유휴 상태로 유지할 수 있는 시간입니다.
* codespace의 기간입니다.
* 중지된 codespace가 자동으로 삭제되기 전에 보존되는 기간입니다.

{% data variables.product.prodname_github_codespaces %} 도구 창의 맨 위에 있는 아이콘은 다음 함수를 제공합니다.

* **활성 codespace 새로 고침**

  ![새로 고침 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  {% data variables.product.prodname_github_codespaces %} 도구 창에서 세부 정보를 새로 고칩니다. 예를 들어 {% data variables.product.prodname_cli %}를 사용하여 표시 이름을 변경한 경우 이 단추를 클릭하여 새 이름을 표시할 수 있습니다.

* **연결 끊기 및 중지**

  ![중지 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  codespace를 중지하고, 원격 컴퓨터에서 백 엔드 IDE를 중지하고, 로컬 JetBrains 클라이언트를 닫습니다.

* **웹에서 codespace 관리**

  ![목록 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  에서 https://github.com/codespacescodespace 목록을 엽니다.

* **codespace 만들기 로그 보기**

  ![로그 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  편집기 창에서 codespace 만들기 로그를 엽니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 로그](/codespaces/troubleshooting/github-codespaces-logs)”를 참조하세요.

* **개발 컨테이너 다시 빌드**

  ![다시 빌드 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  codespace를 다시 빌드하여 개발 컨테이너 구성에 적용한 변경 내용을 적용합니다. JetBrains 클라이언트가 닫히면 codespace를 다시 열어야 합니다. 자세한 내용은 "[codespace 수명 주기"를 참조하세요](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace).

