---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160152"
---
## codespace 구성에 포트 추가

전달된 포트를 리포지토리에 대한 {% data variables.product.prodname_github_codespaces %} 구성에 추가할 수 있으므로 리포지토리에서 만든 모든 Codespace에 대해 해당 포트가 자동으로 전달됩니다. 구성을 업데이트한 후 변경 내용을 적용하려면 이전에 만든 모든 codespace를 다시 빌드해야 합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”를 참조하세요.

속성을 사용하여 `forwardPorts` 파일에서 `.devcontainer.json` 전달된 포트를 수동으로 구성하거나 브라우저 또는 {% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션에서 연 codespace에서 "포트" 패널을 사용할 수 있습니다.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. codespace 구성에 추가할 포트를 마우스 오른쪽 단추로 클릭한 다음 **레이블 설정 및 devcontainer.json 업데이트** 를 클릭합니다.
  ![마우스 오른쪽 단추 클릭 메뉴에서 레이블을 설정하고 devcontainer.json에 포트를 추가하는 옵션](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}