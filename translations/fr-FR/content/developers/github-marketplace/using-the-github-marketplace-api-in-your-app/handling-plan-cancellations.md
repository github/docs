---
title: Traitement des annulations de plan
intro: 'L’annulation d’une application {% data variables.product.prodname_marketplace %} déclenche le webhook d’[événement`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) avec l’action `cancelled`, qui lance le processus d’annulation.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086347'
---
Pour plus d’informations sur l’annulation en termes de facturation, consultez « [Clients de facturation dans {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace) ».

## Étape 1. Événement d’annulation

Si un client choisit d’annuler une commande {% data variables.product.prodname_marketplace %}, GitHub envoie un webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) avec l’action `cancelled` à votre application quand l’annulation prend effet. Si le client annule pendant un essai gratuit, votre application reçoit immédiatement l’événement. Quand un client annule un plan payant, l’annulation se produit à la fin du cycle de facturation du client.

## Étape 2. Désactivation des comptes client

Quand un client annule un plan gratuit ou payant, votre application doit effectuer ces étapes pour effectuer l’annulation :

1. Désactiver le compte du client qui a annulé son plan.
1. Révoquer le jeton OAuth qu’elle a reçu pour le client.
1. Si votre application est une application OAuth, supprimer tous les webhooks qu’elle a créés pour les dépôts.
1. Supprimer toutes les données client dans les 30 jours suivant la réception de l’événement `cancelled`.

{% note %}

**Remarque :** Nous vous recommandons d’utiliser l’objet `effective_date` des webhooks [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) pour déterminer la date du changement de plan, et de synchroniser régulièrement [Lister les comptes d’un plan](/rest/reference/apps#list-accounts-for-a-plan). Pour plus d’informations sur les webhooks, consultez « [Événements de webhook {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) ».

{% endnote %}
