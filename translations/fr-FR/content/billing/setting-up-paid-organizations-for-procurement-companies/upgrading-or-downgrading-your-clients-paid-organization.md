---
title: Mise à niveau ou mise à niveau inférieur de l’organisation payante de votre client
intro: Les responsables de facturation peuvent effectuer une mise à niveau ou passer à une version antérieure de l’organisation payante d’un client à tout moment.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085574'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Conseils** :
- Avant de mettre à niveau l’organisation de votre client, vous pouvez [afficher ou mettre à jour le mode de paiement enregistré pour l’organisation](/articles/adding-or-editing-a-payment-method).
- Ces instructions concernent la mise à niveau et la mise à niveau inférieur des organisations sur l’*abonnement par poste*. Si votre client paie pour {% data variables.product.product_name %} en utilisant un plan *par dépôt hérité*, vous pouvez mettre à niveau ou [déclasser](/articles/downgrading-your-github-subscription) son plan hérité ou [basculer son organisation vers la tarification par poste](/articles/upgrading-your-github-subscription).

{% endtip %}

## Mise à niveau du nombre de postes payants d’une organisation

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

Une fois que vous avez ajouté des postes, le mode de paiement enregistré pour l’organisation est facturé au prorata en fonction du nombre de postes que vous ajoutez et de la durée restante dans votre période de facturation.

## Passage des postes payants d’une organisation à la version gratuite

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
