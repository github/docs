---
ms.openlocfilehash: 6d982c0371125b4bf2536b0f7840abe05281db2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068287"
---
# 용어집

다음 파일은 [Crowdin 용어집](https://support.crowdin.com/glossary/)으로 구성됩니다.

* `external.yml`에는 고객을 위한 용어집 항목이 포함되어 있습니다.
  * `external.yml` 내의 문자열은 Liquid 조건부를 지원합니다. [contributing/liquid-helpers.md](/contributing/liquid-helpers.md)를 참조하세요.
* `internal.yml`에는 번역자만 사용하는 항목이 포함되어 있습니다. 이러한 용어는 Crowdin UI에 표시되어 번역자에게 번역 내용에 대한 추가 컨텍스트 및 해당 용어를 위해 제안되는 지역화된 문자열을 제공합니다.
* `candidates.yml`에는 잠재적으로 내부 또는 외부 용어집 중 한 곳에 들어 있어야 하지만, 아직 정의되지 않은 용어가 포함되어 있습니다.
