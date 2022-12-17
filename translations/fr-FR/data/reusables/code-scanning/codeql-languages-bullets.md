---
ms.openlocfilehash: 7d7a7cfa05c2c0d5e3ac89b603d1efb0ba51fc84
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192712"
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

{% ifversion fpt or ghec or ghae or ghes > 3.3 %} **Remarque** :

{% ifversion ghes < 3.8 or ghae < 3.8 %}
- L’analyse {% data variables.product.prodname_codeql %} pour Ruby est actuellement en version bêta. Durant la version bêta, l’analyse de Ruby est moins complète que l’analyse {% data variables.product.prodname_codeql %} des autres langages.{% endif %}{% ifversion codeql-kotlin-beta %}
- L’analyse {% data variables.product.prodname_codeql %} pour Kotlin est actuellement en version bêta. Durant la version bêta, l’analyse de Kotlin est moins complète que l’analyse {% data variables.product.prodname_codeql %} des autres langages.
- Utilisez `java` pour analyser le code écrit en Java, Kotlin ou les deux.{% endif %}
- Utilisez `javascript` pour analyser le code écrit en JavaScript, TypeScript ou les deux.

{% else %} **Remarque** : Utilisez `javascript` pour analyser le code écrit en JavaScript, TypeScript ou les deux.
{% endif %}

{% endnote %}

Pour plus d’informations, consultez la documentation disponible sur le site web de {% data variables.product.prodname_codeql %} : « [Langages et frameworks pris en charge](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/) ».
