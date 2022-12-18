---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192716"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **Примечания**:

{% ifversion ghes < 3.8 or ghae < 3,8 %}
- Анализ {% data variables.product.prodname_codeql %} для Ruby сейчас находится в бета-версии. Во время бета-версии анализ Ruby будет менее исчерпывающим, чем анализ {% data variables.product.prodname_codeql %} других языков. {% endif %} {% ifversion codeql-kotlin-beta %}
- Анализ {% data variables.product.prodname_codeql %} для Kotlin в настоящее время находится в бета-версии. Во время бета-версии анализ Kotlin будет менее исчерпывающим, чем анализ {% data variables.product.prodname_codeql %} других языков.
- Используйте `java` для анализа кода, написанного на Java, Kotlin или обоих языках.{ % endif %}
- Используйте `javascript` для анализа кода, написанного на JavaScript, TypeScript или и на обоих языках.

{% else %} **Примечание**. Используйте для `javascript` анализа кода, написанного на JavaScript, TypeScript или и на обоих языках.
{% endif %}

{% endnote %}

Дополнительные сведения см. в документации на веб-сайте {% data variables.product.prodname_codeql %}: «[Поддерживаемые языки и платформы](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/)».
