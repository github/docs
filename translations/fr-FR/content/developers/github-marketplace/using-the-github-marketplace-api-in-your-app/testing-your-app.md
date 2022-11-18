---
title: Test de votre application
intro: 'GitHub recommande de tester votre application avec des API et des webhooks avant de soumettre votre référencement à {% data variables.product.prodname_marketplace %} afin de pouvoir proposer une expérience idéale pour les clients. Avant qu’un expert d’intégration approuve votre application, celle-ci doit gérer correctement les flux de facturation.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102841'
---
## Test d’applications

Vous pouvez utiliser un brouillon de listing {% data variables.product.prodname_marketplace %} pour simuler chacun des flux de facturation. Un listing à l’état de brouillon signifie qu’il n’a pas été envoyé pour approbation. Les achats que vous faites avec un brouillon de listing {% data variables.product.prodname_marketplace %} ne créent _pas_ de transactions réelles, et GitHub ne débite pas votre carte de crédit. Notez que vous pouvez simuler des achats uniquement pour les plans publiés dans le brouillon de listing et non pour les brouillons de plan. Pour plus d’informations, consultez « [Utiliser un brouillon de listing pour votre application](/developers/github-marketplace/drafting-a-listing-for-your-app) » et « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

### Utilisation d’une application de développement avec un brouillon de listing pour tester des changements

Un listing {% data variables.product.prodname_marketplace %} peut être associé à une seule inscription d’application, et chaque application peut accéder seulement à son propre listing {% data variables.product.prodname_marketplace %}. Pour ces raisons, nous vous recommandons de configurer une application de développement distincte, avec la même configuration que votre application de production, et de créer un _brouillon_ de listing {% data variables.product.prodname_marketplace %} pour les tests. Le brouillon de listing {% data variables.product.prodname_marketplace %} vous permet de tester les changements sans affecter les utilisateurs actifs de votre application de production. Vous n’avez jamais besoin d’envoyer votre listing {% data variables.product.prodname_marketplace %} de développement, car vous ne l’utilisez que pour les tests.

Comme vous pouvez uniquement créer des brouillons de listing {% data variables.product.prodname_marketplace %} pour les applications publiques, vous devez rendre publique votre application de développement. Les applications publiques ne sont pas découvrables en dehors des listings {% data variables.product.prodname_marketplace %} publiés si vous ne partagez pas l’URL de l’application. Un listing Marketplace à l’état de brouillon est visible seulement par le propriétaire de l’application.

Dès que vous avez une application de développement avec un brouillon de listing, vous pouvez l’utiliser pour tester les changements que vous faites sur votre application pendant l’intégration aux webhooks et à l’API {% data variables.product.prodname_marketplace %}.

{% warning %}

N’effectuez pas d’achats de test avec une application qui est active dans {% data variables.product.prodname_marketplace %}.

{% endwarning %}

### Simulation d’événements d’achat Marketplace

Vos scénarios de test peuvent nécessiter la configuration de plans de listing qui offrent des essais gratuits, et la possibilité de basculer entre les abonnements gratuits et payants. Comme les passages à un plan inférieur et les annulations sont effectifs seulement au prochain cycle de facturation, GitHub fournit une fonctionnalité de développement uniquement pour « Appliquer un changement en attente » afin de forcer l’application immédiate des actions de plan `changed` et `cancelled`. Vous pouvez accéder à **Appliquer un changement en attente** pour les applications avec des _brouillons_ de listing Marketplace dans https://github.com/settings/billing#pending-cycle:

![Appliquer un changement en attente](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## Test d’API

Pour la plupart des points de terminaison d’API {% data variables.product.prodname_marketplace %}, nous fournissons également des points de terminaison d’API stubbés qui retournent des données factices codées en dur que vous pouvez utiliser pour les tests. Pour recevoir des données stubbées, vous devez spécifier des URL stubbées, qui ont `/stubbed` dans la route (par exemple, `/user/marketplace_purchases/stubbed`). Pour obtenir la liste des points de terminaison qui prennent en charge cette approche de données stubbées, consultez [Points de terminaison {% data variables.product.prodname_marketplace %}](/rest/reference/apps#github-marketplace).

## Test de webhooks

GitHub fournit des outils pour tester vos charges utiles déployées. Pour plus d’informations, consultez « [Test de webhooks](/webhooks/testing/) ».
