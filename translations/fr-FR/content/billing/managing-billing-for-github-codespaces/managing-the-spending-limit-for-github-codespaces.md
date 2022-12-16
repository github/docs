---
title: Gestion de la limite de dépense pour GitHub Codespaces
intro: 'Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_github_codespaces %}.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159788'
---
## À propos de la limite de dépense pour {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %} Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

Une fois que vous avez atteint votre limite de dépense, vous ne pouvez plus créer de codespaces ni démarrer des codespaces existants. Les codespaces existants qui sont toujours en cours d’exécution sont arrêtés dans un bref délai, mais vous n’êtes pas facturé pour l’utilisation une fois que vous avez atteint votre limite de dépense.

{% ifversion ghec %}
## Utilisation de votre abonnement Azure
Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_github_codespaces %} et la payer. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

## Gestion de la limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour votre compte personnel

Vous pouvez définir une limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour votre propre compte personnel.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## Gestion de la limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour votre compte d’organisation

Les propriétaires d’organisation et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour une organisation.

{% note %}

**Remarque** : Les organisations appartenant à un compte d’entreprise ne peuvent pas spécifier leur propre limite de dépense, car celle-ci est spécifiée dans les paramètres d’entreprise.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gestion de la limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Cliquez sur **Limite de dépense**.

   ![Onglet Limite de dépense](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportation des modifications quand vous avez atteint votre limite de dépense

{% data reusables.codespaces.exporting-changes %}

## Gestion des notifications par e-mail sur l’utilisation et la limite de dépense

Les notifications par e-mail sont envoyées aux propriétaires de comptes et aux gestionnaires de facturation quand les dépenses atteignent 75 %, 90 % et 100 % de la limite de dépense d’un compte. 

Vous pouvez désactiver ces notifications à tout moment en accédant au bas de la page « Facturation & plans / Limites de dépense mensuelles » et en décochant la case **Alertes de limites de dépense**.

Pour les comptes personnels uniquement, vous pouvez également choisir de désactiver les notifications par e-mail qui sont envoyées quand vous avez utilisé 75 %, 90 % et 100 % de l’utilisation gratuite incluse avec votre compte personnel. Pour ce faire, décochez la case **Alertes de ressources incluses**.

![Capture d’écran des paramètres de notification par e-mail de la facturation](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Pour aller plus loin

- « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
- « [Gestion du coût de {% data variables.product.prodname_github_codespaces %} dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization) »
