---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192715"
---
<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
- C/C++
- C#
- Go
- Java{% ifversion codeql-kotlin-beta %}/Kotlin{% endif %}
- JavaScript/TypeScript
- Python{% ifversion fpt or ghes > 3.3 or ghec or ghae > 3.3 %}
- Ruby{% endif %}

{% note %}

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **참고 사항**:

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- Ruby에 대한 {% data variables.product.prodname_codeql %} 분석은 현재 베타 버전입니다. 베타 중에 Ruby 분석은 다른 언어의 {% data variables.product.prodname_codeql %} 분석보다 덜 포괄적입니다. {% endif %} {% ifversion codeql-kotlin-beta %}
- Kotlin에 대한 {% data variables.product.prodname_codeql %} 분석은 현재 베타 버전입니다. 베타 중에 Kotlin 분석은 다른 언어의 {% data variables.product.prodname_codeql %} 분석보다 덜 포괄적입니다.
- 를 사용하여 `java` Java, Kotlin 또는 둘 다로 작성된 코드를 분석합니다.{ % endif %}
- 를 사용하여 `javascript` JavaScript, TypeScript 또는 둘 다로 작성된 코드를 분석합니다.

{% else %} **참고**: 를 사용하여 `javascript` JavaScript, TypeScript 또는 둘 다로 작성된 코드를 분석합니다.
{% endif %}

{% endnote %}

자세한 내용은 {% data variables.product.prodname_codeql %} 웹 사이트의 설명서의 “[지원되는 언어와 프레임워크](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)”를 참조하세요.
