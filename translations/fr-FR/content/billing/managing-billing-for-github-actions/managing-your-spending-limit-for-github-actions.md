---
title: Gestion de votre limite de dépense pour GitHub Actions
intro: 'Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Spending limits for Actions
ms.openlocfilehash: c1bd595a866b9e48fa4e82ebe93718328514fad9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085805'
---
## À propos des limites de dépenses pour {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Pour plus d’informations sur les tarifs liés à l’utilisation de {% data variables.product.prodname_actions %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».

{% ifversion ghec %} Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_actions %} et la payer au-delà des montants inclus avec votre compte. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

Dès que vous définissez une limite de dépense autre que 0 $, vous êtes responsable des dépassements existants dans la période de facturation actuelle. Par exemple, si votre organisation utilise {% data variables.product.prodname_team %}, n’autorise pas les dépassements et crée des artefacts de workflow qui augmentent votre utilisation du stockage pour le mois de 1,9 Go à 2,1 Go, vous utilisez un peu plus de stockage que les 2 Go inclus dans votre produit.

Étant donné que vous n’avez pas activé les dépassements, votre prochaine tentative de création d’un artefact de workflow échoue. Vous ne recevez pas de facture pour le dépassement de 0,1 Go ce mois-là. Toutefois, si vous activez les dépassements, votre première facture inclut le dépassement existants de 0,1 Go pour la période de facturation actuelle ainsi que les dépassements supplémentaires que vous accumulez.

## Gestion de la limite de dépense pour {% data variables.product.prodname_actions %} pour votre compte personnel

Toute personne peut gérer la limite de dépense pour {% data variables.product.prodname_actions %} pour son propre compte personnel.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Gestion de la limite de dépense pour {% data variables.product.prodname_actions %} pour votre compte d’utilisateur

Les propriétaires d’organisation et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_actions %} pour une organisation.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gestion de la limite de dépense pour {% data variables.product.prodname_actions %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_actions %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Au-dessus de « Utilisation mensuelle de {% data variables.product.prodname_actions %} et Packages », cliquez sur **Limite de dépense**.
  ![Onglet Limite de dépense](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Gestion des notifications par e-mail sur l’utilisation et la limite de dépense
{% data reusables.billing.email-notifications %}
