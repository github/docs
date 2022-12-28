---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080006"
---
종속성 제출 API를 사용하면 프로젝트에 대한 종속성을 제출할 수 있습니다. 이를 통해 소프트웨어가 컴파일되거나 빌드될 때 확인된 종속성 등의 종속성을 {% data variables.product.prodname_dotcom %}의 종속성 그래프 기능에 추가하여 프로젝트의 모든 종속성을 보다 완벽하게 파악할 수 있습니다.

종속성 그래프는 리포지토리의 매니페스트 또는 잠금 파일(예: JavaScript 프로젝트의 `package-lock.json` 파일)에서 식별되는 종속성 외에 API를 사용하여 제출하는 모든 종속성을 보여 줍니다. 종속성 그래프를 보는 방법에 대한 자세한 내용은 “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)”을 참조하세요. 

제출된 종속성은 알려진 취약성에 대해 {% data variables.product.prodname_dependabot_alerts %} 및 {% data variables.product.prodname_dependabot_security_updates %}를 받게 됩니다. {% data variables.product.prodname_advisory_database %}의 [지원되는 에코시스템](https://github.com/github/advisory-database#supported-ecosystems) 중 하나에서 발생한 종속성에 대한 {% data variables.product.prodname_dependabot_alerts %}만 가져옵니다. 제출된 종속성은 종속성 검토 또는 조직의 종속성 인사이트에 표시되지 않습니다.
