---
title: GitHub Codespaces 관련 지원 작업
intro: '{% data variables.product.prodname_github_codespaces %} 관련 지원에서 최상의 지원을 얻는 방법에 대한 팁입니다.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159897'
---
지원이 codespace 문제에 도움이 되도록 하려면 codespace의 영구 이름 및 해당 codespaces ID(식별자)를 알아야 합니다. 또한 지원 팀에서 일부 로그를 공유하도록 요청할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 로그](/codespaces/troubleshooting/github-codespaces-logs)” 및 “[GitHub 지원 정보](/github/working-with-github-support/about-github-support)”를 참조하세요.

## Codespace 이름

각 codespace에는 {% data variables.product.company_short %} 핸들, 자동으로 생성된 두 개 또는 세 개의 단어 및 일부 임의의 문자의 조합인 고유한 이름이 있습니다. 예: `octocat-literate-space-parakeet-mld5` 자동으로 생성된 두 개 또는 세 개의 단어도 codespace의 초기 표시 이름(이 경우 `literate-space-parakeet`)을 형성합니다. codespace의 표시 이름을 변경할 수 있지만 영구 이름에는 영향을 미치지 않습니다. 자세한 내용은 "[codespace 이름 바꾸기"를 참조하세요](/codespaces/customizing-your-codespace/renaming-a-codespace).

codespace의 이름을 찾으려면 다음을 수행합니다.

- 브라우저에서 codespace를 엽니다. URL의 하위 도메인이 codespace의 이름입니다. 예: `https://octocat-literate-space-parakeet-mld5.github.dev`가 `octocat-literate-space-parakeet-mld5` codespace의 URL임
- codespace를 열 수 없는 경우 https://github.com/codespaces 에서 {% data variables.product.product_name %}의 이름에 액세스할 수 있습니다. 이름은 에 있는 codespace의 표시 이름 위로 마우스를 가져가면 팝업에 https://github.com/codespaces표시됩니다. 
  ![마우스로 가리키면 표시되는 codespace 이름](/assets/images/help/codespaces/find-codespace-name-github.png)

codespace의 이름은 많은 로그 파일에도 포함됩니다. 예를 들어 codespace 로그에는 `friendlyName`의 값으로, {% data variables.product.prodname_github_codespaces %} 확장 로그에는 `making GET request for` 뒤에, 브라우저 콘솔 로그에는 `clientUrl` 뒤에 포함되어 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 로그](/codespaces/troubleshooting/github-codespaces-logs)”를 참조하세요.

## Codespace ID

모든 codespace에는 ID(식별자)도 있습니다. {% data variables.product.prodname_vscode %}에는 ID가 기본적으로 표시되지 않으므로 ID에 액세스하려면 {% data variables.product.prodname_github_codespaces %} 확장에 대한 설정을 업데이트해야 할 수 있습니다.

1. {% data variables.product.prodname_vscode %}, 브라우저 또는 바탕 화면의 왼쪽 작업 표시줄에서 **원격 탐색기** 를 클릭하여 codespace에 대한 세부 정보를 표시합니다.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. 사이드바에 “Codespace 성능” 섹션이 포함된 경우 “Codespace ID”를 마우스로 가리키고 클립보드 아이콘을 클릭하여 ID를 복사합니다.
1. 이 정보가 표시되지 않으면 작업 표시줄의 왼쪽 아래 모서리에 있는 {% octicon "gear" aria-label="The gear icon" %}을 클릭하여 “설정” 탭을 표시합니다.
1. **확장명** 을 확장하고 **{% data variables.product.prodname_github_codespaces %}** 를 클릭하여 확장명에 대한 설정을 표시합니다. 그런 다음 **성능 탐색기 표시** 를 사용하도록 설정하여 사이드바에 “Codespace 성능” 섹션을 표시합니다.
  ![Codespace ID 및 성능 정보를 표시하는 데 필요한 설정](/assets/images/help/codespaces/find-codespace-id.png)
