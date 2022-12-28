---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192717"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **Notas**:

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- El análisis de {% data variables.product.prodname_codeql %} para Ruby se encuentra actualmente en versión beta. Durante el beta, el análisis para Ruby será menos exhaustivo que el análisis de {% data variables.product.prodname_codeql %} para otros lenguajes.{% endif %}{% ifversion codeql-kotlin-beta %}
- El análisis de {% data variables.product.prodname_codeql %} para Kotlin se encuentra actualmente en versión beta. Durante el beta, el análisis para Kotlin será menos exhaustivo que el análisis de {% data variables.product.prodname_codeql %} para otros lenguajes.
- Usa `java` para analizar el código escrito en Java, Kotlin o ambos.{% endif %}
- Usa `javascript` para analizar el código escrito en JavaScript, TypeScript o ambos.

{% else %} **Nota**: Usa `javascript` para analizar el código escrito en JavaScript, TypeScript o ambos.
{% endif %}

{% endnote %}

Para más información, vea la documentación en el sitio web de {% data variables.product.prodname_codeql %}: "[Lenguajes y marcos admitidos](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)".
