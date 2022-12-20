---
title: Gestion des limites de dépense pour Codespaces
intro: Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_codespaces %}.
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
ms.openlocfilehash: 340dae657304e5a2c9fb31d3a205e0b45f47a7b5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085785"
---
## <a name="about-spending-limits-for--data-variablesproductprodname_codespaces-"></a>À propos des limites de dépenses pour {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Une fois que vous avez atteint votre limite de dépense, votre organisation ou dépôt ne peut plus créer de codespaces ni démarrer des codespaces existants. Les codespaces existants qui sont toujours en cours d’exécution ne sont pas arrêtés ; si vous ne changez pas la limite de dépense, vous n’êtes pas facturé pour le montant qui dépasse la limite.

Pour plus d’informations sur les tarifs appliqués pour l’utilisation de {% data variables.product.prodname_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces) ».

{% ifversion ghec %}
## <a name="using-your-azure-subscription"></a>Utilisation de votre abonnement Azure
Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_codespaces %} et la payer. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-organization"></a>Gestion de la limite de dépense pour {% data variables.product.prodname_codespaces %} pour votre compte d’utilisateur

Les propriétaires d’organisation et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_codespaces %} pour une organisation.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-enterprise-account"></a>Gestion de la limite de dépense pour {% data variables.product.prodname_codespaces %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent gérer la limite de dépense pour {% data variables.product.prodname_codespaces %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Au-dessus de « Utilisation mensuelle de {% data variables.product.prodname_codespaces %} », cliquez sur **Limite de dépense**.
  ![Onglet Limite de dépense](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportation des modifications quand vous avez atteint votre limite de dépense

{% data reusables.codespaces.exporting-changes %}
## <a name="managing-usage-and-spending-limit-email-notifications"></a>Gestion des notifications par e-mail sur l’utilisation et la limite de dépense

Les notifications par e-mail sont envoyées aux propriétaires de comptes et aux gestionnaires de facturation quand les dépenses atteignent 50 %, 75 %, 90 % et 100 % de la limite de dépense de votre compte. 

Vous pouvez désactiver ces notifications à tout moment en bas de la page **Limite de dépense**.

![Capture d’écran des paramètres de notification par e-mail de la facturation](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## <a name="further-reading"></a>Pour aller plus loin

- « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
- « [Gestion de la facturation pour Codespaces dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization) »
