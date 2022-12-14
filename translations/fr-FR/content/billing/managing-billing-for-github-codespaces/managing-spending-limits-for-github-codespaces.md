---
title: Gestion des limites de dépense pour GitHub Codespaces
intro: Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_github_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
redirect_from:
- /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: 562b4406c06370869b9ae185cedaa803700ad63e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111620"
---
## À propos des limites de dépense pour {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Une fois que vous avez atteint votre limite de dépense, votre organisation ou dépôt ne peut plus créer de codespaces ni démarrer des codespaces existants. Les codespaces existants qui sont toujours en cours d’exécution ne sont pas arrêtés ; si vous ne changez pas la limite de dépense, vous n’êtes pas facturé pour le montant qui dépasse la limite.

Pour plus d’informations sur les tarifs appliqués pour l’utilisation de {% data variables.product.prodname_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

{% ifversion ghec %}
## Utilisation de votre abonnement Azure
Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_codespaces %} et la payer. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

## Gestion de la limite de dépense pour {% data variables.product.prodname_codespaces %} pour votre compte d’utilisateur

Les propriétaires d’organisation et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_codespaces %} pour une organisation.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gestion de la limite de dépense pour {% data variables.product.prodname_codespaces %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_codespaces %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Au-dessus de « Utilisation mensuelle de {% data variables.product.prodname_codespaces %} », cliquez sur **Limite de dépense**.
  ![Onglet Limite de dépense](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportation des modifications quand vous avez atteint votre limite de dépense

{% data reusables.codespaces.exporting-changes %}
## Gestion des notifications par e-mail sur l’utilisation et la limite de dépense

Les notifications par e-mail sont envoyées aux propriétaires de comptes et aux gestionnaires de facturation quand les dépenses atteignent 50 %, 75 %, 90 % et 100 % de la limite de dépense de votre compte. 

Vous pouvez désactiver ces notifications à tout moment en bas de la page **Limite de dépense**.

![Capture d’écran des paramètres de notification par e-mail de la facturation](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## Pour aller plus loin

- « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
- « [Gestion de la facturation de {% data variables.product.prodname_github_codespaces %} dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization) »
