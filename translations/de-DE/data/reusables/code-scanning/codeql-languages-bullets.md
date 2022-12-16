---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192713"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **Hinweise:**

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- Die {% data variables.product.prodname_codeql %}-Analyse für Ruby ist derzeit als Betaversion verfügbar. Während der Betaphase ist die Analyse von Ruby weniger umfassend als die {% data variables.product.prodname_codeql %}-Analyse für andere Sprachen.{% endif %}{% ifversion codeql-kotlin-beta %}
- Die {% data variables.product.prodname_codeql %}-Analyse für Kotlin ist derzeit als Betaversion verfügbar. Während der Betaphase ist die Analyse von Kotlin weniger umfassend als die {% data variables.product.prodname_codeql %}-Analyse für andere Sprachen.
- Verwende `java` zum Analysieren von Code, der in Java, Kotlin oder beiden Sprachen geschrieben wurde.{% endif %}
- Verwende `javascript` zum Analysieren von Code, der in JavaScript, TypeScript oder beiden Sprachen geschrieben wurde.

{% else %} **Hinweis:** Verwende `javascript` zum Analysieren von Code, der in JavaScript, TypeScript oder beiden Sprachen geschrieben wurde.
{% endif %}

{% endnote %}

Weitere Informationen findest du in der Dokumentation zur {% data variables.product.prodname_codeql %}-Website: [Unterstützte Sprachen und Frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/).
