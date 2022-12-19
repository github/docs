---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182292"
---
지원되는 컴파일된 언어의 경우 {% data variables.code-scanning.codeql_workflow %}의 작업을 사용하여 `autobuild` 코드를 빌드할 수 있습니다. 이렇게 하면 C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} 및 Java에 대한 명시적 빌드 명령을 지정하지 않아도 됩니다.