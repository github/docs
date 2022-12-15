---
ms.openlocfilehash: 33d0297fab7d3dce2bea9fa3d63ba9c73ef5cb91
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182286"
---
<!-- If you update the list of supported languages for CodeQL, update docs-internal/content/get-started/learning-about-github/github-language-support.md to reflect the changes. -->
- C/C++
- C#
- Go
- Java
- JavaScript/TypeScript
- Python{% ifversion fpt or ghes > 3.3 or ghec or ghae > 3.3 %}
- Ruby

{% ifversion ghes < 3.8 or ghae < 3.8 %} {% note %}

**Nota**: El análisis de {% data variables.product.prodname_codeql %} para Ruby se encuentra actualmente en versión beta. Durante el beta, el análisis para Ruby será menos exhaustivo que el análisis de {% data variables.product.prodname_codeql %} para otros lenguajes.

{% endnote %} {% endif %}{% endif %}{% ifversion codeql-kotlin-beta %}
- Kotlin

{% note %}

**Nota**: El análisis de {% data variables.product.prodname_codeql %} para Kotlin se encuentra actualmente en versión beta. Durante el beta, el análisis para Kotlin será menos exhaustivo que el análisis de {% data variables.product.prodname_codeql %} para otros lenguajes.

{% endnote %} {% endif %}

Para más información, vea la documentación en el sitio web de {% data variables.product.prodname_codeql %}: "[Lenguajes y marcos admitidos](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)".
