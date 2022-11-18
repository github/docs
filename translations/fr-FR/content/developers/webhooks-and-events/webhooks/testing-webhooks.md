---
title: Test de webhooks
intro: 'Passez en revue vos livraisons de webhook dans {% data variables.product.prodname_dotcom %}, y compris la requête HTTP et la charge utile, ainsi que la réponse.'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996216'
---
Maintenant que vous avez [configuré votre serveur local](/webhooks/configuring/), vous pouvez avoir envie de pousser votre code jusqu’aux limites. Pour ce faire, la vue des webhooks de GitHub fournit des outils pour tester vos charges utiles déployées.

## Liste des livraisons récentes

Chaque webhook a sa propre section « Livraisons récentes », qui liste, en un coup d’œil, si une livraison a réussi (coche verte) ou échoué (x rouge). Vous pouvez également identifier quand chaque livraison a été tentée.

{% data variables.product.product_name %} garde un journal de chaque livraison de webhook pendant {% ifversion fpt or ghec %} 30 {% else %} 8 {% endif %} jours.

![Vue Livraisons récentes](/assets/images/webhooks_recent_deliveries.png)

## Explorer les résultats

En développant une livraison individuelle, vous pouvez voir *précisément* les informations que GitHub tente d’envoyer à votre serveur. Cela comprend à la fois la requête HTTP et la réponse.

### Requête

La vue de livraison de webhook fournit des informations sur les en-têtes envoyés par GitHub.
Elle comprend également des détails sur la charge utile JSON.

![Vue d’une demande de charge utile](/assets/images/payload_request_tab.png)

### response

L’onglet de réponse liste la façon dont votre serveur a répondu après avoir reçu la charge utile de GitHub. Il comprend le code d’état, les en-têtes et toute autre donnée supplémentaire dans le corps de la réponse.

![Vue d’une réponse de charge utile](/assets/images/payload_response_tab.png)
