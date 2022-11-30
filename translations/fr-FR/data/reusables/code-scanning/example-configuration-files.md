---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108540"
---
Ce fichier config ajoute la suite de requêtes `security-and-quality` à la liste des requêtes exécutées par {% data variables.product.prodname_codeql %} au moment de l’analyse de votre code. Pour plus d’informations sur les suites de requêtes disponibles, consultez « [Exécution de requêtes supplémentaires](#running-additional-queries) ».

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

Le fichier config suivant désactive les requêtes par défaut et spécifie un ensemble de requêtes personnalisées à exécuter à la place. Il configure également {% data variables.product.prodname_codeql %} pour analyser les fichiers du répertoire _src_ (par rapport à la racine), à l’exception du répertoire _src/node_modules_ et des fichiers dont le nom finit par _.test.js_. Les fichiers présents dans _src/node_modules_ et les fichiers dont le nom finit par _.test.js_ sont donc exclus de l’analyse.

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

disable-default-queries: true

queries:
  - name: Use an in-repository {% data variables.product.prodname_ql %} pack (run queries in the my-queries directory)
    uses: ./my-queries
  - name: Use an external JavaScript {% data variables.product.prodname_ql %} pack (run queries from an external repo)
    uses: octo-org/javascript-qlpack@main
  - name: Use an external query (run a single query from an external {% data variables.product.prodname_ql %} pack)
    uses: octo-org/python-qlpack/show_ifs.ql@main
  - name: Use a query suite file (run queries from a query suite in this repo)
    uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls

paths:
  - src 
paths-ignore: 
  - src/node_modules
  - '**/*.test.js'
```

{% ifversion code-scanning-exclude-queries-from-analysis %}

Le fichier de configuration suivant exécute uniquement les requêtes qui génèrent des alertes dont le niveau de gravité est Erreur. La configuration sélectionne d’abord toutes les requêtes par défaut, toutes les requêtes dans `./my-queries` et la suite par défaut dans `codeql/java-queries`, puis elle exclut toutes les requêtes qui génèrent des avertissements ou des recommandations. 

``` yaml
queries:
  - name: Use an in-repository QL pack (run queries in the my-queries directory)
    uses: ./my-queries
packs:
  - codeql/java-queries
query-filters:
- exclude:
    problem.severity:
      - warning
      - recommendation
```

{% endif %}
