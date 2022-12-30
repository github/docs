---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138840"
---
기본적으로 매니페스트 또는 잠금 파일에 명시적으로 정의된 모든 종속성은 최신 상태로 유지됩니다. `allow`와 `ignore`을 사용하여 버전 업데이트로 유지 관리할 종속성을 사용자 지정할 수 있습니다. {% data variables.product.prodname_dependabot %}은 허용되는 모든 종속성을 확인한 다음, 무시된 종속성 또는 버전을 필터링합니다. 따라서 `allow` 및 `ignore` 둘 다와 일치하는 종속성이 무시됩니다.
