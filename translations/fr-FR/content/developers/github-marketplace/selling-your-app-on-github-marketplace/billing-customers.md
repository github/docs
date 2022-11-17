---
title: Facturer les clients
intro: 'Les applications sur {% data variables.product.prodname_marketplace %} doivent respecter les consignes de facturation de GitHub et prendre en charge les services recommandés. Le fait de suivre nos consignes aide les clients à parcourir le processus de facturation sans surprise.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086355'
---
## Présentation du cycle de facturation

Les clients peuvent choisir un cycle de facturation mensuel ou annuel lorsqu’ils achètent votre application. Tous les changements de cycle et de plan de facturation faits par les clients déclenchent un événement `marketplace_purchase`. Vous pouvez examiner la charge utile du webhook `marketplace_purchase` pour voir quel cycle de facturation un client sélectionne et à quelle date débute la facturation suivante (`effective_date`). Pour plus d’informations sur les charges utiles de webhook, consultez « [Événements de webhook pour l’API {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api) ».

## Fournir des services de facturation dans l’interface utilisateur de votre application

Les clients doivent pouvoir effectuer les actions suivantes à partir du site web de votre application :
- Modifier ou annuler leurs plans {% data variables.product.prodname_marketplace %} séparément pour leur propre compte et le compte de leur organisation.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## Services de facturation pour les changements de plan et les annulations de plan

Suivez ces instructions concernant les passages à un plan supérieur ou inférieur et les annulations de plan pour maintenir un processus de facturation clair et cohérent. Pour obtenir des instructions plus détaillées sur les événements d’achat dans {% data variables.product.prodname_marketplace %}, consultez « [Utiliser l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

Vous pouvez utiliser la clé `effective_date` du webhook `marketplace_purchase` pour déterminer la date de changement d’un plan, et synchroniser régulièrement la [liste des comptes associés à un plan](/rest/reference/apps#list-accounts-for-a-plan).

### Mises à niveau

Lorsqu’un client passe à un plan tarifaire supérieur ou qu’il change son cycle de facturation mensuel en annuel, vous devez rendre ce changement effectif immédiatement. Vous devez appliquer une remise au prorata sur le nouveau plan et changer le cycle de facturation.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Pour plus d’informations sur la création des workflows de changement de plan tarifaire dans votre application, consultez « [Gestion des changements de plan](/developers/github-marketplace/handling-plan-changes) ».

### Passages à un plan inférieur et annulations de plan

Les passages à un plan inférieur se produisent quand un client passe d’un plan payant à un plan gratuit, qu’il sélectionne un plan de coût inférieur à son plan actuel ou qu’il change son cycle de facturation annuel en mensuel. Dans le cas des passages à un plan inférieur ou des annulations de plan, vous n’êtes pas tenu d’effectuer un remboursement. En effet, le plan actuel reste actif jusqu’au dernier jour du cycle de facturation en cours. L’événement `marketplace_purchase` est envoyé seulement quand le nouveau plan prend effet au début du cycle de facturation suivant du client.

Quand des clients annulent leur plan, vous devez :
- Passer automatiquement leur plan à un plan gratuit (si disponible).
  
  {% data reusables.marketplace.cancellation-clarification %}
- Les autoriser à passer à un plan supérieur via GitHub s’ils souhaitent poursuivre le plan ultérieurement.

Pour plus d’informations sur la création des workflows d’annulation de plan dans votre application, consultez « [Gestion des annulations de plan](/developers/github-marketplace/handling-plan-cancellations) ».
