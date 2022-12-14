---
ms.openlocfilehash: 33d0297fab7d3dce2bea9fa3d63ba9c73ef5cb91
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182279"
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

**Observação**: atualmente, a análise do {% data variables.product.prodname_codeql %} para o Ruby está em versão beta. Durante a versão beta, a análise do Ruby será menos abrangente do que a análise do {% data variables.product.prodname_codeql %} de outras linguagens.

{% endnote %} {% endif %}{% endif %}{% ifversion codeql-kotlin-beta %}
- Kotlin

{% note %}

**Observação**: atualmente, a análise do {% data variables.product.prodname_codeql %} para Kotlin está em versão beta. Durante a versão beta, a análise do {% data variables.product.prodname_codeql %} para Kotlin será menos abrangente do que para outras linguagens.

{% endnote %} {% endif %}

Para obter mais informações, confira a documentação no site do {% data variables.product.prodname_codeql %}: "[Linguagens e estruturas compatíveis](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)".
