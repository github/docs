---
ms.openlocfilehash: 33d0297fab7d3dce2bea9fa3d63ba9c73ef5cb91
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182282"
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

**Hinweis**: Die {% data variables.product.prodname_codeql %}-Analyse für Ruby befindet sich derzeit in der Betaversion. Während der Betaphase ist die Analyse von Ruby weniger umfassend als die {% data variables.product.prodname_codeql %}-Analyse für andere Sprachen.

{% endnote %} {% endif %}{% endif %}{% ifversion codeql-kotlin-beta %}
- Kotlin

{% note %}

**Hinweis:** Die {% data variables.product.prodname_codeql %}-Analyse für Kotlini ist derzeit als Betaversion verfügbar. Während der Betaphase ist die Analyse von Kotlin weniger umfassend als die {% data variables.product.prodname_codeql %}-Analyse für andere Sprachen.

{% endnote %} {% endif %}

Weitere Informationen findest du in der Dokumentation zur {% data variables.product.prodname_codeql %}-Website: [Unterstützte Sprachen und Frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/).
