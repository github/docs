---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147717644"
---
Quand vous utilisez {% data variables.product.prodname_codeql %} pour analyser du code, le moteur d’analyse de {% data variables.product.prodname_codeql %} génère une base de données à partir du code et exécute des requêtes sur celle-ci. L’analyse {% data variables.product.prodname_codeql %} utilise un ensemble de requêtes par défaut, mais vous pouvez spécifier d’autres requêtes à exécuter en plus des requêtes par défaut.

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

Vous pouvez aussi spécifier les requêtes à exclure de l’analyse ou à inclure dans l’analyse. L’utilisation d’un fichier de configuration personnalisé est alors nécessaire. Pour plus d’informations, consultez « [Utilisation d’un fichier de configuration personnalisé](#using-a-custom-configuration-file) » et « [Exclusion de requêtes spécifiques de l’analyse](#excluding-specific-queries-from-analysis) » ci-dessous.

{% endtip %} {% endif %}

{% ifversion codeql-packs %} Vous pouvez exécuter des requêtes supplémentaires si elles font partie d’un pack {% data variables.product.prodname_codeql %} (bêta) publié sur le {% data variables.product.prodname_container_registry %} {% data variables.product.company_short %} ou d’un pack {% data variables.product.prodname_ql %} stocké dans un dépôt. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries) ».

Les options disponibles pour spécifier les requêtes supplémentaires à exécuter sont les suivantes :

- `packs` pour installer un ou plusieurs packs de requêtes {% data variables.product.prodname_codeql %} (bêta), et exécuter les requêtes ou la suite de requêtes par défaut de ces packs.
- `queries` pour spécifier un seul fichier _.ql_, un répertoire contenant plusieurs fichiers _.ql_, un fichier de définition de suite de requêtes _.qls_ ou une combinaison de ces possibilités. Pour plus d’informations sur les définitions de suites de requêtes, consultez « [Création de suites de requêtes {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) ».

Vous pouvez utiliser à la fois `packs` et `queries` dans le même workflow.
{% else %} Les requêtes supplémentaires que vous souhaitez exécuter doivent faire partie d’un pack {% data variables.product.prodname_ql %} dans un dépôt. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries) ».

Vous pouvez spécifier un seul fichier _.ql_, un répertoire contenant plusieurs fichiers _.ql_, un fichier de définition de suite de requêtes _.qls_ ou une combinaison de ces possibilités. Pour plus d’informations sur les définitions de suites de requêtes, consultez « [Création de suites de requêtes {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) ».
{% endif %}

{% ifversion fpt or ghec %}Nous vous déconseillons de référencer les suites de requêtes directement à partir du dépôt `github/codeql`, par exemple `github/codeql/cpp/ql/src@main`. Ces requêtes doivent être recompilées et peuvent ne pas être compatibles avec la version de {% data variables.product.prodname_codeql %} actuellement active sur {% data variables.product.prodname_actions %}, ce qui peut entraîner des erreurs lors de l’analyse.{% endif %}
