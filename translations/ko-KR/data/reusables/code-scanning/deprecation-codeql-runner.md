---
ms.openlocfilehash: 62262d7dceb6318775493dfe5431199d57d3b756
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161239"
---
{% note %}

{% ifversion fpt or ghec %}

**참고:** {% data variables.code-scanning.codeql_runner %}은(는) 더 이상 사용되지 않습니다. {% data variables.product.product_name %}에서 {% data variables.code-scanning.codeql_runner %}는 2022년 3월까지 지원되었습니다. 최신 버전의 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)로 업그레이드해야 합니다.

{% elsif ghes > 3.3 %}

**참고:** {% data variables.code-scanning.codeql_runner %}은(는) 더 이상 사용되지 않으며 {% data variables.product.prodname_ghe_server %} 3.4에 포함되지 않습니다. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 버전 2.7.6으로 마이그레이션해야 합니다. 

{% elsif ghes < 3.4 %}

**참고:** {% data variables.code-scanning.codeql_runner %}은(는) 더 이상 사용되지 않습니다. {% data variables.product.prodname_ghe_server %} 3.0 이상에서 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 버전 2.6.3을 설치하여 {% data variables.code-scanning.codeql_runner %}를 대체할 수 있습니다. 

{% elsif ghae %}

**참고:** {% data variables.code-scanning.codeql_runner %}은(는) 더 이상 사용되지 않습니다. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)로 마이그레이션해야 합니다. 

{% endif %}

자세한 내용은 [CodeQL 실행기 사용 중단](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)을 참조하세요. {% data variables.product.prodname_codeql_cli %}로 마이그레이션에 대한 자세한 내용은 “[CodeQL 실행기에서 CodeQL CLI로 마이그레이션](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)”을 참조하세요.

{% endnote %}
