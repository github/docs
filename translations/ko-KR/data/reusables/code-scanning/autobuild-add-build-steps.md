---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182276"
---
실패하거나 프로세스에서 빌드된 파일과 다른 원본 파일 집합을 `autobuild` 분석하려는 경우 `autobuild` 워크플로에서 단계를 제거하고 `autobuild` 빌드 단계를 수동으로 추가해야 합니다. C/C++, C#, Go,{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} 및 Java 프로젝트의 경우 {% data variables.product.prodname_codeql %}는 지정된 빌드 단계에서 빌드된 소스 코드를 분석합니다.

