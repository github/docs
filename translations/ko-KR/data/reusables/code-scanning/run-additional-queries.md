---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717647"
---
{% data variables.product.prodname_codeql %}을 사용하여 코드를 검사하면 {% data variables.product.prodname_codeql %} 분석 엔진이 코드에서 데이터베이스를 생성하고 이에 대한 쿼리를 실행합니다. {% data variables.product.prodname_codeql %} 분석은 기본 쿼리 세트를 사용하지만 기본 쿼리 외에도 실행할 쿼리를 추가로 지정할 수 있습니다.

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

분석에서 제외하거나 분석에 포함할 쿼리를 지정할 수도 있습니다. 이를 위해서는 사용자 지정 구성 파일을 사용해야 합니다. 자세한 내용은 아래의 “[사용자 지정 구성 파일 사용](#using-a-custom-configuration-file)” 및 “[분석에서 특정 쿼리 제외](#excluding-specific-queries-from-analysis)”를 참조하세요.

{% endtip %} {% endif %}

{% ifversion codeql-packs %} 리포지토리에 저장된 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 또는 {% data variables.product.prodname_ql %} 팩에 게시된 {% data variables.product.prodname_codeql %} 팩(베타)의 일부인 경우 추가 쿼리를 실행할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_codeql %}이 포함된 {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)"를 참조하세요.

실행할 추가 쿼리를 지정하는 데 사용할 수 있는 옵션은 다음과 같습니다.

- `packs`: 하나 이상의 {% data variables.product.prodname_codeql %} 쿼리 팩(베타)을 설치하고 해당 팩에 대한 기본 쿼리 도구 모음 또는 쿼리를 실행합니다.
- `queries`: 단일 _.ql_ 파일, 여러 _.ql_ 파일이 포함된 디렉터리, _.qls_ 쿼리 도구 모음 정의 파일 또는 임의 조합을 지정합니다. 쿼리 도구 모음 정의에 대한 자세한 내용은 "[{% data variables.product.prodname_codeql %} 쿼리 도구 모음 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)"를 참조하세요.

동일한 워크플로에서 `packs` 및 `queries`를 모두 사용할 수 있습니다.
{% else %} 실행하려는 추가 쿼리는 리포지토리의 {% data variables.product.prodname_ql %} 팩에 속해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_codeql %}이 포함된 {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)"를 참조하세요.

단일 _.ql_ 파일, 여러 _.ql_ 파일이 포함된 디렉터리, _.qls_ 쿼리 도구 모음 정의 파일 또는 임의 조합을 지정할 수 있습니다. 쿼리 도구 모음 정의에 대한 자세한 내용은 "[{% data variables.product.prodname_codeql %} 쿼리 도구 모음 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)"를 참조하세요.
{% endif %}

{% ifversion fpt or ghec %}`github/codeql` 리포지토리에서 직접 쿼리 도구 모음을 참조하지 않는 것이 좋습니다(예: `github/codeql/cpp/ql/src@main`). 이러한 쿼리는 다시 컴파일해야 하며 현재 {% data variables.product.prodname_actions %}에서 활성 상태인 {% data variables.product.prodname_codeql %} 버전과 호환되지 않을 수 있으며, 이로 인해 분석 중에 오류가 발생할 수 있습니다.{% endif %}
