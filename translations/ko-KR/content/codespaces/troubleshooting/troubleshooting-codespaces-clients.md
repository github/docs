---
title: Codespaces 클라이언트 문제 해결
intro: 브라우저나 {% data variables.product.prodname_vscode %}를 통해 {% data variables.product.prodname_codespaces %}를 사용할 수 있습니다. 이 문서에서는 일반적인 클라이언트 문제에 대한 문제 해결 단계를 제공합니다.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145115039"
---
## {% data variables.product.prodname_vscode %} 문제 해결

데스크톱 버전의 {% data variables.product.prodname_vscode %}를 codespace에 연결하는 경우 일반 작업 영역에서 작업하는 것과 비교할 때 몇 가지 차이점이 표시되지만 환경은 상당히 유사합니다. 

웹에서 {% data variables.product.prodname_vscode %}를 사용하여 브라우저에서 codespace를 열면 더 많은 차이점이 나타납니다. 예를 들어 일부 키 바인딩은 다르거나 누락되며 일부 확장은 다르게 동작할 수 있습니다. 요약은 {% data variables.product.prodname_vscode %} 문서에서 “[알려진 제한 사항 및 조정](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)”을 참조하세요.

[`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 리포지토리의 {% data variables.product.prodname_vscode %} 환경에서 알려진 문제를 확인하고 새로운 문제를 기록할 수 있습니다.

### {% data variables.product.prodname_vscode %} 참가자

{% data variables.product.prodname_vscode %} 참가자는 {% data variables.product.prodname_vscode %}의 가장 빈번한 릴리스입니다. 모든 최신 기능 및 버그 수정 사항이 있지만 때때로 빌드가 중단되는 새로운 문제가 포함될 수도 있습니다.

참가자 빌드를 사용하고 손상된 동작을 발견한 경우 {% data variables.product.prodname_vscode %}를 Stable로 전환하고 다시 시도하는 것이 좋습니다.

데스크톱 버전의 {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_vscode %} 참가자 애플리케이션을 닫고, {% data variables.product.prodname_vscode %}에서 Stable 애플리케이션을 열고 codespace를 다시 열어 Stable로 전환할 수 있습니다.

{% data variables.product.prodname_vscode %} 웹 버전에서 편집기 왼쪽 아래에 있는 {% octicon "gear" aria-label="The manage icon" %}을 클릭하고 **Stable 버전으로 전환...** 을 선택할 수 있습니다. 웹 버전이 로드되지 않거나 {% octicon "gear" aria-label="The manage icon" %} 아이콘을 사용할 수 없는 경우 codespace URL에 `?vscodeChannel=stable`을 추가하고 해당 URL에서 codespace를 로드하여 {% data variables.product.prodname_vscode %} Stable로의 전환을 적용할 수 있습니다.

{% data variables.product.prodname_vscode %} Stable에서 문제가 해결되지 않으면 위의 문제 해결 지침을 따르세요.

## 브라우저 문제 해결

Chromium 기반이 아닌 브라우저에서 codespace를 사용하는 데 문제가 발생하는 경우 Chromium 기반 브라우저로 전환하거나 `microsoft/vscode` 리포지토리에서 브라우저 이름으로 레이블이 지정된 문제를 검색하여 브라우저의 알려진 문제를 확인하세요(예: [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) 또는 [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)).

Chromium 기반 브라우저에서 codespace를 사용하는 데 문제가 발생하면 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) 리포지토리에서 {% data variables.product.prodname_vscode %}에 대해 알려진 다른 문제가 있는지 확인할 수 있습니다.
