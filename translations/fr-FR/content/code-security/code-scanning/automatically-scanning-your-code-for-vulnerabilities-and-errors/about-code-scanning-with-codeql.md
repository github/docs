---
title: À propos de l’analyse du code avec CodeQL
shortTitle: Code scanning with CodeQL
intro: 'Vous pouvez utiliser {% data variables.product.prodname_codeql %} pour identifier les vulnérabilités et les erreurs dans votre code. Les résultats sont affichés sous la forme d’alertes d’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052175'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Il existe deux façons principales d’utiliser l’analyse {% data variables.product.prodname_codeql %} pour l’{% data variables.product.prodname_code_scanning %} :

- Ajoutez le workflow {% data variables.product.prodname_codeql %} à votre dépôt. Cette approche utilise [github/codeql-action](https://github.com/github/codeql-action/) pour exécuter l’{% data variables.product.prodname_codeql_cli %}. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions) ».
- Exécutez l’interface CLI {% data variables.product.prodname_codeql %} directement dans un système CI externe et chargez les résultats sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [À propos de l’analyse du code {% data variables.product.prodname_codeql %}dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system) ».

{% ifversion ghes or ghae %}

{% note %} Sur {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %}, l’action {% data variables.product.prodname_codeql %} utilise {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %} par défaut. Nous vous recommandons d’utiliser la même version de l’interface {% data variables.product.prodname_codeql_cli %} si vous exécutez une analyse dans un système CI externe.
{% endnote %}

{% endif %}


## À propos de {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} traite le code comme les données, ce qui vous permet de détecter les vulnérabilités potentielles dans votre code avec une plus grande confiance que les analyseurs statiques traditionnels.

1. Vous générez une base de données {% data variables.product.prodname_codeql %} pour représenter votre codebase.
2. Ensuite, vous exécutez des requêtes {% data variables.product.prodname_codeql %} sur cette base de données pour identifier les problèmes dans le codebase.
3. Les résultats des requêtes sont affichés sous la forme d’alertes d’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.product_name %} quand vous utilisez {% data variables.product.prodname_codeql %} avec l’{% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} prend en charge les langages compilés et interprétés, et peut trouver des vulnérabilités et des erreurs dans le code écrit dans les langages pris en charge.

{% data reusables.code-scanning.codeql-languages-bullets %}

## À propos des requêtes {% data variables.product.prodname_codeql %}

Les experts {% data variables.product.company_short %}, les chercheurs en sécurité et les contributeurs de la communauté écrivent et gèrent les requêtes {% data variables.product.prodname_codeql %} par défaut utilisées pour l’{% data variables.product.prodname_code_scanning %}. Les requêtes sont régulièrement mises à jour pour améliorer l’analyse et réduire les faux résultats positifs. Les requêtes étant open source, vous pouvez les voir et y contribuer dans le dépôt [`github/codeql`](https://github.com/github/codeql). Pour plus d’informations, consultez [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) sur le site web {% data variables.product.prodname_codeql %}. Vous pouvez également écrire vos propres requêtes. Pour plus d’informations, consultez « [À propos des requêtes {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/) » dans la documentation {% data variables.product.prodname_codeql %}.

Vous pouvez exécuter des requêtes supplémentaires dans le cadre de votre analyse du code. 

{%- ifversion codeql-packs %} Ces requêtes doivent appartenir à un pack de requêtes {% data variables.product.prodname_codeql %} publié (bêta) ou à un pack QL dans un dépôt. Les packs {% data variables.product.prodname_codeql %} (bêta) offrent les avantages suivants par rapport aux packs QL traditionnels :

- Quand un pack de requêtes {% data variables.product.prodname_codeql %} (bêta) est publié sur le {% data variables.product.prodname_container_registry %} {% data variables.product.company_short %}, toutes les dépendances transitives requises par les requêtes et un cache de compilation sont inclus dans le package. Cela améliore les performances et garantit que l’exécution des requêtes dans le pack donne systématiquement des résultats identiques jusqu’à ce que vous effectuiez une mise à niveau vers une nouvelle version du pack ou de l’interface CLI. 
- Les packs QL n’incluent pas de dépendances transitives. Les requêtes du pack peuvent donc dépendre uniquement des bibliothèques standard (autrement dit, les bibliothèques référencées par une instruction `import LANGUAGE` dans votre requête) ou des bibliothèques du même pack QL que la requête.

Pour plus d’informations, consultez « [À propos des packs {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/) » et « [À propos des packs {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) » dans la documentation {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} Les requêtes que vous souhaitez exécuter doivent appartenir à un pack QL dans un dépôt. Les requêtes doivent uniquement dépendre des bibliothèques standard (autrement dit, les bibliothèques référencées par une instruction `import LANGUAGE` dans votre requête) ou des bibliothèques du même pack QL que la requête. Pour plus d’informations, consultez « [À propos des packs {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) ».
{% endif %}
