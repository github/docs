---
ms.openlocfilehash: bc31880a8f42a48324c81b13db40b9b1d09b1286
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109237"
---
Java,{% ifversion codeql-go-autobuild %} Go,{% endif %} C, C++, C#과 같은 컴파일된 언어의 경우 {% data variables.product.prodname_codeql %}는 워크플로 실행 중에 빌드된 모든 코드를 분석합니다. 분석되는 코드의 양을 제한하려면 블록에서 고유한 빌드 단계를 `run` 지정하여 분석하려는 코드를 기반으로 빌드합니다. 사용자 고유의 빌드 단계 지정을 `pull_request` 및 `push` 이벤트에서 `paths` 또는 `paths-ignore` 필터를 사용하여 특정 코드가 변경된 경우에만 워크플로가 실행되도록 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”을 참조하세요.

{% ifversion codeql-go-autobuild %}{% else %} Go,{% endif %} JavaScript, Python 및 TypeScript와 같은 언어의 경우 소스 코드를 컴파일하지 않고 {% data variables.product.prodname_codeql %}에서 분석할 코드의 양을 제한하는 추가 구성 옵션을 지정할 수 있습니다. 자세한 내용은 "[검색할 디렉터리 지정](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)"을 참조하세요.