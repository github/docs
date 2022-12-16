---
title: "Affichage de l’utilisation de GitHub\_Actions"
intro: 'Vous pouvez consulter les détails de votre utilisation des minutes et du stockage pour {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: View your Actions usage
ms.openlocfilehash: a41da21abe606b0de11bf7cf7e1b8be6f4e2edbe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065169'
---
Vous pouvez également afficher les minutes d’exécution de travaux facturables pour une exécution de workflow individuelle. Pour plus d’informations, consultez « [Affichage de la durée d’exécution des travaux](/actions/managing-workflow-runs/viewing-job-execution-time) ».

## Affichage de l’utilisation de {% data variables.product.prodname_actions %} pour votre compte personnel

Tout le monde peut consulter l’utilisation de {% data variables.product.prodname_actions %} pour son compte personnel.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## Affichage de l’utilisation de {% data variables.product.prodname_actions %} pour votre organisation

Les propriétaires d’organisation et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_actions %} pour une organisation. Pour les organisations gérées par un compte d’entreprise, seuls les propriétaires d’organisation peuvent afficher l’utilisation de {% data variables.product.prodname_actions %} dans la page de facturation de l’organisation.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.actions-minutes %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Affichage de l’utilisation de {% data variables.product.prodname_actions %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_actions %} pour un compte d’entreprise.

{% note %}

**Remarque :** Les détails de facturation des comptes d’entreprise ne récapitulent pas les minutes d’utilisation de chaque système d’exploitation. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Sous « {% data variables.product.prodname_actions %} », affichez les détails de l’utilisation du transfert de données par chaque organisation dans votre compte d’entreprise.
  ![Détails de l’utilisation des minutes](/assets/images/help/billing/actions-minutes-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
