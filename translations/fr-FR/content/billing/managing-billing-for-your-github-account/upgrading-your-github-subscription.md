---
title: Mise à niveau de votre abonnement GitHub
intro: 'Vous pouvez mettre à niveau l’abonnement pour n’importe quel type de compte sur {% data variables.product.product_location %} à tout moment.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your subscription
ms.openlocfilehash: 47426fa211521a166738c5a9bb00edddfc2556f2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085681'
---
## À propos des mises à niveau d’abonnement

{% data reusables.accounts.accounts-billed-separately %}

Quand vous mettez à niveau l’abonnement pour un compte, la mise à niveau change les fonctionnalités payantes disponibles pour ce compte uniquement, et non pour les autres comptes que vous utilisez.

## Mise à niveau de l’abonnement de votre compte personnel

Vous pouvez mettre à niveau votre compte personnel de {% data variables.product.prodname_free_user %} vers {% data variables.product.prodname_pro %} pour obtenir des outils de révision de code avancés sur les dépôts privés appartenant à votre compte personnel. La mise à niveau de votre compte personnel n’affecte aucune organisation que vous pouvez gérer ou dépôt appartenant à cette organisation. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. En regard de « Plan actuel », cliquez sur **Mettre à niveau**.
  ![Bouton Mettre à niveau](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. Sous « Pro » dans la page « Comparer les plans », cliquez sur **Mettre à niveau vers Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-billing-info %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Gestion de l’abonnement de votre organisation

Vous pouvez mettre à niveau l’abonnement de votre organisation vers un autre produit, ajouter des postes à votre produit existant ou passer d’un tarif par dépôt à un tarif par utilisateur.

### Mise à niveau de l’abonnement de votre organisation

Vous pouvez mettre à niveau votre organisation de {% data variables.product.prodname_free_team %} pour une organisation vers {% data variables.product.prodname_team %} pour accéder aux outils avancés de collaboration et de gestion pour les équipes, ou mettre à niveau votre organisation vers {% data variables.product.prodname_ghe_cloud %} pour obtenir des contrôles de sécurité, de conformité et de déploiement supplémentaires. La mise à niveau d’une organisation n’affecte pas votre compte personnel ou vos dépôts appartenant à votre compte personnel. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

### Étapes suivantes pour les organisations utilisant {% data variables.product.prodname_ghe_cloud %}

Si vous avez mis à niveau votre organisation vers {% data variables.product.prodname_ghe_cloud %}, vous pouvez configurer la gestion des identités et des accès pour votre organisation. Pour plus d’informations, consultez « [Gestion de l’authentification unique SAML pour votre organisation](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}

Si vous souhaitez utiliser un compte d’entreprise avec {% data variables.product.prodname_ghe_cloud %}, contactez l’{% data variables.contact.contact_enterprise_sales %}. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}

### Ajout de postes à votre organisation

Si vous souhaitez que des utilisateurs supplémentaires aient accès aux dépôts privés de votre organisation {% data variables.product.prodname_team %}, vous pouvez acheter plus de postes à tout moment.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

### Faire passer votre organisation d’un tarif par dépôt à un tarif par utilisateur

{% data reusables.dotcom_billing.switch-legacy-billing %} Pour plus d’informations, consultez « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) ».

{% data reusables.organizations.billing-settings %}
5. À droite du nom de votre plan, dans le menu déroulant **Modifier**, sélectionnez **Modifier le plan**.
  ![Menu déroulant Modifier](/assets/images/help/billing/per-user-upgrade-button.png)
6. À droite de « Outils avancés pour les équipes », cliquez sur **Mettre à niveau maintenant**.
  ![Bouton Mettre à niveau maintenant](/assets/images/help/billing/per-user-upgrade-now-button.png) {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

## Résolution des problèmes liés à une erreur 500 lors de la mise à niveau

{% data reusables.dotcom_billing.500-error %}

## Pour aller plus loin

- « [Produits de {% data variables.product.prodname_dotcom %}](/articles/github-s-products) »
- « [Dans quelle mesure le passage au niveau supérieur ou inférieur affecte-t-il le processus de facturation ?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process) »
- « [À propos de la facturation sur {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github) »
