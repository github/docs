---
title: "Affichage de l’utilisation de GitHub\_Packages"
intro: 'Vous pouvez afficher les détails de votre utilisation du transfert de données pour {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
ms.openlocfilehash: 98cce486487c5f8a3801852b6a2b4ce7fdeb210d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060441'
---
## Affichage de l’utilisation de {% data variables.product.prodname_registry %} pour votre compte personnel

Toute personne peut afficher l’utilisation de {% data variables.product.prodname_registry %} pour son compte personnel.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Affichage de l’utilisation de {% data variables.product.prodname_registry %} pour votre organisation

Les propriétaires d’organisation et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_registry %} pour une organisation. Pour les organisations gérées par un compte d’entreprise, seuls les propriétaires d’organisation peuvent afficher l’utilisation de {% data variables.product.prodname_registry %} dans la page de facturation de l’organisation.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Affichage de l’utilisation de {% data variables.product.prodname_registry %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_registry %} pour un compte d’entreprise.

{% note %}

**Remarque :** Les détails de facturation des comptes d’entreprise résument uniquement l’utilisation des données de stockage par organisation. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Sous « {% data variables.product.prodname_registry %} », affichez les détails de l’utilisation du transfert de données par chaque organisation dans votre compte d’entreprise.
  ![Détails de l’utilisation du transfert de données](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
