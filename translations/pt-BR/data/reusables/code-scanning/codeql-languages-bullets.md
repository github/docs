---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192710"
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
- A análise do {% data variables.product.prodname_codeql %} para o Ruby está em versão beta. Durante a versão beta, a análise do Ruby será menos abrangente do que a análise do {% data variables.product.prodname_codeql %} de outros idiomas.{% endif %}{% ifversion codeql-kotlin-beta %}
- A análise do {% data variables.product.prodname_codeql %} para Kotlin está na versão beta. Durante a versão beta, a análise do {% data variables.product.prodname_codeql %} para Kotlin será menos abrangente do que para outras linguagens.
- Use `java` para analisar o código escrito em Java, Kotlin ou ambos.{% endif %}
- Use `javascript` para analisar o código escrito em JavaScript, TypeScript ou ambos.

{% else %} **Nota**: use `javascript` para analisar o código escrito em JavaScript, TypeScript ou ambos.
{% endif %}

{% endnote %}

Para obter mais informações, confira a documentação no site do {% data variables.product.prodname_codeql %}: "[Linguagens e estruturas compatíveis](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)".
