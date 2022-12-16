---
title: Événements de webhook pour l’API GitHub Marketplace
intro: 'Une application {% data variables.product.prodname_marketplace %} reçoit des informations sur les modifications apportées au plan de l’utilisateur du webhook d’événement d’achat de la Place de marché. Un événement d’achat de la Place de marché est déclenché lorsqu’un utilisateur achète, annule ou change son plan de paiement.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710402'
---
## Charge utile des webhooks d’achat {% data variables.product.prodname_marketplace %}

Les demandes de webhooks `POST` ont des en-têtes spéciaux. Pour plus d’informations, consultez « [En-têtes de remise de webhook](/webhooks/event-payloads/#delivery-headers) ». GitHub ne renvoie pas les tentatives de remise ayant échoué. Vérifiez que votre application peut recevoir toutes les charges utiles de webhook envoyées par GitHub.

Les annulations et les passages à un plan inférieur sont effectifs le premier jour du cycle de facturation suivant. Les événements pour les passages à un plan inférieur et les annulations sont envoyés quand le nouveau plan prend effet au début du cycle de facturation suivant. Les événements pour les nouveaux achats et les passage à un plan supérieur commencent immédiatement. Utilisez l’objet `effective_date` de la charge utile du webhook pour savoir quand commence un changement.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Chaque charge utile de webhook `marketplace_purchase` a les informations suivantes :


Clé | Type | Description
----|------|-------------
`action` | `string` | Action effectuée pour générer le webhook. Peut être `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` ou `changed`. Pour plus d’informations, consultez les exemples de charge utile de webhook ci-dessous. **Remarque :** Les charges utiles `pending_change` et `pending_change_cancelled` ont les mêmes clés que celles indiquées dans l’[exemple de charge utile `changed`](#example-webhook-payload-for-a-changed-event).
`effective_date` | `string` | Date à laquelle l’`action` prend effet.
`sender` | `object` | Personne responsable de l’`action` qui a déclenché le webhook.
`marketplace_purchase` | `object` | Informations de l’achat {% data variables.product.prodname_marketplace %}.

L’objet `marketplace_purchase` a les clés suivantes :

Clé | Type | Description
----|------|-------------
`account` | `object` | Compte `organization` ou `user` associé à l’abonnement. Les comptes professionnels comprennent `organization_billing_email`, qui est l’adresse e-mail administrative de l’organisation. Pour rechercher les adresses e-mail des comptes personnels, vous pouvez utiliser le point de terminaison [Obtenir l’utilisateur authentifié](/rest/reference/users#get-the-authenticated-user).
`billing_cycle` | `string` | Peut être `yearly` ou `monthly`. Quand le propriétaire de `account` a un plan GitHub gratuit et a acheté un plan {% data variables.product.prodname_marketplace %} gratuit, `billing_cycle` est `nil`.
`unit_count`  | `integer` | Nombre d’unités achetées.
`on_free_trial` | `boolean` | `true` quand `account` utilise un essai gratuit.
`free_trial_ends_on` | `string` | Date d’expiration de l’essai gratuit.
`next_billing_date` | `string` | Date de début du cycle de facturation suivant. Quand le propriétaire de `account` a un plan GitHub.com gratuit et a acheté un plan {% data variables.product.prodname_marketplace %} gratuit, `next_billing_date` est `nil`.
`plan` | `object` | Plan acheté par `user` ou `organization`.

L’objet `plan` a les clés suivantes :

Clé | Type | Description
----|------|-------------
`id` | `integer` | Identificateur unique de ce plan.
`name` | `string` | Nom du plan.
`description` | `string` | Description de ce plan.
`monthly_price_in_cents` | `integer` | Prix mensuel de ce plan en cents (devise américaine). Par exemple, un listing qui coûte 10 dollars USD par mois correspond à 1 000 cents.
`yearly_price_in_cents` | `integer` | Prix annuel de ce plan en cents (devise américaine). Par exemple, un listing qui coûte 100 dollars USD par mois correspond à 120 000 cents.
`price_model` | `string` | Modèle tarifaire de ce listing. Peut être `flat-rate`, `per-unit` ou `free`.
`has_free_trial` | `boolean` | `true` quand ce listing propose un essai gratuit.
`unit_name` | `string` | Nom de l’unité. Si le modèle tarifaire n’est pas `per-unit`, est égal à `nil`.
`bullet` | `array of strings` | Noms des puces définies dans le plan tarifaire.

<br/>

### Exemple de charge utile de webhook pour un événement `purchased`
Cet exemple fournit la charge utile d’événement `purchased`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Exemple de charge utile de webhook pour un événement `changed`

Les changements de plan sont notamment les passages à un plan supérieur ou inférieur. Cet exemple représente les charges utiles d’événement `changed`, `pending_change` et `pending_change_cancelled`. L’action identifie celui des trois événements qui s’est produit.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Exemple de charge utile de webhook pour un événement `cancelled`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
