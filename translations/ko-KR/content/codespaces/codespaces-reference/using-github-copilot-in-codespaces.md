---
title: Codespaces에서 GitHub Copilot 사용
intro: 확장을 추가하여 Codespaces에서 Copilot을 사용할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Copilot
- Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Copilot in Codespaces
redirect_from:
- /codespaces/codespaces-reference/using-copilot-in-codespaces
ms.openlocfilehash: 05e8779688b2136c7fd53a1cebd99fd75b531f2c
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149342"
---
## <a name="using--data-variablesproductprodname_copilot-"></a>{% data variables.product.prodname_copilot %} 사용

AI 쌍 프로그래머인 [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)는 모든 codespace에서 사용할 수 있습니다. {% data variables.product.prodname_codespaces %}에서 {% data variables.product.prodname_copilot_short %} 사용을 시작하려면 [{% data variables.product.prodname_vscode_marketplace %}의 {% data variables.product.prodname_copilot_short %} 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)을 설치합니다.

{% data variables.product.prodname_copilot_short %} 또는 기타 확장을 모든 codespace에 포함하려면 설정 동기화를 사용하도록 설정합니다. 자세한 내용은 “[계정에 맞게 {% data variables.product.prodname_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)”을 참조하세요. 또한 모든 사용자의 지정된 프로젝트에 {% data variables.product.prodname_copilot_short %}를 포함하려면 `devcontainer.json` 파일에서 `GitHub.copilot`를 확장으로 지정할 수 있습니다. `devcontainer.json` 파일 구성에 관한 내용은 “[개발 컨테이너 소개](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”를 참조하세요.

