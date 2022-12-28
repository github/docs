---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192714"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **注**:

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- Ruby の {% data variables.product.prodname_codeql %} 分析は、現在ベータ版です。 ベータ版の間、Ruby の分析は他の言語の {% data variables.product.prodname_codeql %} 分析ほど包括的ではありません。 {% endif %}{% ifversion codeql-kotlin-beta %}
- Kotlin の {% data variables.product.prodname_codeql %} 分析は、現在ベータ版です。 ベータ版の間、Kotlin の分析は他の言語の {% data variables.product.prodname_codeql %} 分析ほど包括的ではありません。
- Java、Kotlin、またはその両方で記述されたコードを分析するには `java` を使用します。 {% endif %}
- JavaScript、TypeScript、またはその両方で記述されたコードを分析するには `javascript` を使用します。

{% else %} **注**: JavaScript、TypeScript、またはその両方で記述されたコードを分析するには `javascript` を使用します。
{% endif %}

{% endnote %}

詳細については、{% data variables.product.prodname_codeql %} Web サイトのドキュメント「[サポートされている言語とフレームワーク](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)」を参照してください。
