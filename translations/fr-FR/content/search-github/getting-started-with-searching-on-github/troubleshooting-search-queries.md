---
title: Résolution des problèmes liés aux requêtes de recherche
intro: 'Si vous rencontrez des résultats inattendus lors de la recherche sur {% data variables.product.product_name %}, vous pouvez passer en revue les problèmes courants et les limitations.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
ms.openlocfilehash: 2c90d144401974ebc44f4b80a1509593fe987329
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106062'
---
## Délais d’expiration potentiels

L’exécution de certaines requêtes est coûteuse en calcul pour notre infrastructure de recherche. Pour que la recherche soit rapide pour tout le monde, nous limitons la durée pendant laquelle une requête individuelle peut s’exécuter. Dans de rares situations, quand une requête dépasse la limite de temps, la recherche retourne toutes les correspondances trouvées avant la fin du délai d’expiration et vous informe qu’une expiration s’est produite.

Atteindre un délai d’expiration ne signifie pas nécessairement que les résultats de la recherche sont incomplets. Cela signifie simplement que la requête a été interrompue avant d’avoir effectué une recherche dans toutes les données possibles.

## Limitations relatives à la longueur des requêtes

Il existe des limites quant à la longueur des requêtes lors d’une recherche sur {% data variables.product.product_name %} :

* Les requêtes contenant plus de 256 caractères ne sont pas prises en charge.
* Vous ne pouvez pas construire une requête qui utilise plus de cinq opérateurs `AND`, `OR` ou `NOT`.

Des types de recherche spécifiques, comme la recherche de code, peuvent faire l’objet d’autres limites. Pour plus d’informations, consultez la documentation relative à ces types de recherche.

## Pour aller plus loin

- « [À propos de la recherche sur GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github) »
