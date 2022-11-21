---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161064"
---
지원되는 컴파일된 언어의 경우 {% data variables.code-scanning.codeql_workflow %}의 작업을 사용하여 `autobuild` 코드를 빌드할 수 있습니다. 이렇게 하면 C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 및 Java에 대한 명시적 빌드 명령을 지정할 필요가 없습니다.