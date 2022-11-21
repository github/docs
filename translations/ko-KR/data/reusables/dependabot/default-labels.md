---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138824"
---
기본적으로 {% data variables.product.prodname_dependabot %}은 `dependencies` 레이블을 사용하여 모든 끌어오기 요청을 발생시킵니다. 둘 이상의 패키지 관리자가 정의된 경우 {% data variables.product.prodname_dependabot %}은 각 끌어오기 요청에 추가 레이블을 포함합니다. 이는 끌어오기 요청이 업데이트할 언어 또는 에코시스템을 나타냅니다(예: Gradle 업데이트의 경우 `java`, git 하위 모듈 업데이트의 경우 `submodules`). {% data variables.product.prodname_dependabot %}은 리포지토리에서 필요에 따라 기본 레이블을 자동으로 만듭니다.
