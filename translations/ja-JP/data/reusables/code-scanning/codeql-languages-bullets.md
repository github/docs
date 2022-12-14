---
ms.openlocfilehash: 33d0297fab7d3dce2bea9fa3d63ba9c73ef5cb91
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182283"
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

**注**: Ruby の {% data variables.product.prodname_codeql %} 分析は、現在ベータ版です。 ベータ版の間、Ruby の分析は他の言語の {% data variables.product.prodname_codeql %} 分析ほど包括的ではありません。

{% endnote %} {% endif %}{% endif %}{% ifversion codeql-kotlin-beta %}
- Kotlin

{% note %}

**注**: Kotlin の {% data variables.product.prodname_codeql %} 分析は、現在ベータ版です。 ベータ版の間、Kotlin の分析は他の言語の {% data variables.product.prodname_codeql %} 分析ほど包括的ではありません。

{% endnote %} {% endif %}

詳細については、{% data variables.product.prodname_codeql %} Web サイトのドキュメント「[サポートされている言語とフレームワーク](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)」を参照してください。
