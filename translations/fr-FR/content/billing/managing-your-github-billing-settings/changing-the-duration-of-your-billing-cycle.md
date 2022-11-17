---
title: Changement de la durée de votre période de facturation
intro: Vous pouvez payer l’abonnement de votre compte et d’autres fonctionnalités et produits payants sur un cycle de facturation mensuel ou annuel.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
shortTitle: Billing cycle
ms.openlocfilehash: 164b0192f1b055b95ad83fc2845e9af59058b6a7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085649'
---
Quand vous changez la durée de votre période de facturation, votre abonnement {% data variables.product.prodname_dotcom %} ainsi que les autres fonctionnalités et produits payants sont déplacés vers votre nouvelle période de facturation à la prochaine date de facturation.

## Changement de la durée de la période de facturation de votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

## Changement de la durée de la période de facturation de votre organisation

{% data reusables.dotcom_billing.org-billing-perms %}

### Changement de la durée d’un abonnement par utilisateur

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.change_plan_duration %} {% data reusables.dotcom_billing.confirm_duration_change %}

### Changement de la durée d’un plan hérité par dépôt

{% data reusables.organizations.billing-settings %}
4. Sous « Vue d’ensemble de la facturation », cliquez sur **Changer de plan**.
  ![Bouton Changer de plan sous Vue d’ensemble de la facturation](/assets/images/help/billing/billing_overview_change_plan.png)
5. En haut à droite, cliquez sur **Basculer vers la facturation mensuelle** ou **Basculer vers la facturation annuelle**.
  ![Section des informations de facturation](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
