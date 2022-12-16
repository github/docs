---
title: Codespaces에 대한 지원 작업
intro: '{% data variables.product.prodname_codespaces %} 관련 지원에서 최상의 지원을 얻는 방법에 대한 팁입니다.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090359"
---
지원 팀에서 codespace 관련 문제를 지원하려면 codespace의 이름과 codespace ID(식별자)를 알아야 합니다. 또한 지원 팀에서 일부 로그를 공유하도록 요청할 수 있습니다. 자세한 내용은 “[Codespaces 로그](/codespaces/troubleshooting/codespaces-logs)” 및 “[GitHub 지원 정보](/github/working-with-github-support/about-github-support)”를 참조하세요.

### <a name="codespace-names"></a>Codespace 이름

각 codespace에는 {% data variables.product.company_short %} 핸들, 리포지토리 이름 및 일부 임의 문자의 조합인 고유한 이름이 있습니다. 추가 문자를 사용하면 동일한 리포지토리의 다른 분기에 codespace를 사용할 수 있습니다. 예: `octocat-myrepo-gmc7`

codespace의 이름을 찾으려면 다음을 수행합니다.

- 브라우저에서 codespace를 엽니다. URL의 하위 도메인이 codespace의 이름입니다. 예: `https://octocat-myrepo-gmc7.github.dev`가 `octocat-myrepo-gmc7` codespace의 URL임
- codespace를 열 수 없는 경우 https://github.com/codespaces 에서 {% data variables.product.product_name %}의 이름에 액세스할 수 있습니다. https://github.com/codespaces 에서 **브라우저에서 열기** 옵션을 마우스로 가리키면 팝업에 codespace 이름이 표시됩니다. 
  ![마우스로 가리키면 표시되는 codespace 이름](/assets/images/help/codespaces/find-codespace-name-github.png)

codespace의 이름은 많은 로그 파일에도 포함됩니다. 예를 들어 codespace 로그에는 `friendlyName`의 값으로, {% data variables.product.prodname_github_codespaces %} 확장 로그에는 `making GET request for` 뒤에, 브라우저 콘솔 로그에는 `clientUrl` 뒤에 포함되어 있습니다. 자세한 내용은 “[Codespaces 시간 제한](/codespaces/troubleshooting/codespaces-logs)”을 참조하세요.

### <a name="codespaces-ids"></a>Codespace ID

모든 codespace에는 ID(식별자)도 있습니다. {% data variables.product.prodname_vscode %}에는 ID가 기본적으로 표시되지 않으므로 ID에 액세스하려면 {% data variables.product.prodname_github_codespaces %} 확장에 대한 설정을 업데이트해야 할 수 있습니다.

1. {% data variables.product.prodname_vscode %}, 브라우저 또는 바탕 화면의 왼쪽 작업 표시줄에서 **원격 탐색기** 를 클릭하여 codespace에 대한 세부 정보를 표시합니다.
2. 사이드바에 “Codespace 성능” 섹션이 포함된 경우 “Codespace ID”를 마우스로 가리키고 클립보드 아이콘을 클릭하여 ID를 복사합니다.
3. 이 정보가 표시되지 않으면 작업 표시줄의 왼쪽 아래 모서리에 있는 {% octicon "gear" aria-label="The gear icon" %}을 클릭하여 “설정” 탭을 표시합니다.
4. **확장명** 을 확장하고 **{% data variables.product.prodname_github_codespaces %}** 를 클릭하여 확장명에 대한 설정을 표시합니다. 그런 다음 **성능 탐색기 표시** 를 사용하도록 설정하여 사이드바에 “Codespace 성능” 섹션을 표시합니다.
  ![Codespace ID 및 성능 정보를 표시하는 데 필요한 설정](/assets/images/help/codespaces/find-codespace-id.png)
