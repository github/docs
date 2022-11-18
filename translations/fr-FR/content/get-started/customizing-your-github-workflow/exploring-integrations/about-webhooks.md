---
title: À propos des webhooks
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: Les webhooks permettent de remettre des notifications à un serveur web externe chaque fois que certaines actions se produisent sur un dépôt ou une organisation.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880612'
---
{% tip %}

**Astuce :** Les {% data reusables.organizations.owners-and-admins-can %} gérer les webhooks pour une organisation. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Les webhooks peuvent être déclenchés chaque fois que diverses d’actions sont effectuées sur un dépôt ou une organisation. Par exemple, vous pouvez configurer un webhook pour qu’il s’exécute chaque fois que :

* Un dépôt reçoit une poussée
* Une demande de tirage est ouverte
* Un site {% data variables.product.prodname_pages %} est créé
* Un nouveau membre est ajouté à une équipe

En utilisant l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, vous pouvez demander à ces webhooks de mettre à jour un utilitaire de suivi des problèmes, de déclencher des builds CI, de mettre à jour un miroir de sauvegarde ou même de déployer sur votre serveur de production.

Pour configurer un nouveau webhook, vous devez avoir accès à un serveur externe et connaître les procédures techniques impliquées. Pour obtenir de l’aide sur la création d’un webhook, y compris la liste complète des actions associées, consultez « [Webhooks](/webhooks) ».
