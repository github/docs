---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180870"
---
Les suites de requêtes suivantes sont intégrées à {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} et sont disponibles pour utilisation.

{% data reusables.code-scanning.codeql-query-suites %}

Lorsque vous spécifiez une suite de requêtes, le moteur d’analyse {% data variables.product.prodname_codeql %} exécute l’ensemble par défaut de requêtes, ainsi que toutes les requêtes supplémentaires définies dans la suite de requêtes supplémentaire. {% ifversion codeql-ml-queries %}Les suites de requêtes `security-extended` et `security-and-quality` pour JavaScript contiennent des requêtes expérimentales. Pour plus d’informations, consultez « [À propos des alertes {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts) ».{% endif %}
