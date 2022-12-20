---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192711"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} 注意：

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- 用于 Ruby 的 {% data variables.product.prodname_codeql %} 分析目前为 beta 版。 在 beta 版中，Ruby 的分析将不如其他语言的 {% data variables.product.prodname_codeql %} 分析全面。{% endif %}{% ifversion codeql-kotlin-beta %}
- 用于 Kotlin 的 {% data variables.product.prodname_codeql %} 分析目前为 beta 版。 在 beta 版中，Kotlin 的分析将不如其他语言的 {% data variables.product.prodname_codeql %} 分析全面。
- 使用 `java` 分析用 Java、Kotlin 或两者编写的代码。{% endif %}
- 使用 `javascript` 分析用 JavaScript、TypeScript 或两者编写的代码。

{% else %} 注意：使用 `javascript` 分析用 JavaScript、TypeScript 或两者编写的代码。
{% endif %}

{% endnote %}

有关详细信息，请参阅 {% data variables.product.prodname_codeql %} 网站上的文档：“[支持的语言和框架](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)”。
