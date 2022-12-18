---
title: Consultation de votre utilisation de GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Vous pouvez visualiser les minutes de calcul et le stockage utilisés par {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: c3024840f48bda68470b9ab12693f4a79daddb48
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107148'
---
## Consultation de l’utilisation de {% data variables.product.prodname_github_codespaces %} pour votre organisation

Les propriétaires d’organisation et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_github_codespaces %} pour une organisation. Dans le cas des organisations gérées par un compte d’entreprise, les propriétaires d’organisation peuvent voir les informations relatives à l’utilisation de {% data variables.product.prodname_github_codespaces %} dans la page de facturation de l’organisation, alors que les administrateurs d’entreprise peuvent voir ces informations pour l’ensemble de l’entreprise.

{% data reusables.organizations.billing-settings %}
1. Sous « {% data variables.product.prodname_codespaces %} », consultez les détails des heures de calcul et du stockage utilisés jusqu’ici ce mois-ci.

   ![Détails de l’utilisation des minutes](/assets/images/help/billing/codespaces-compute-storage.png)

   Vous pouvez également voir et mettre à jour votre limite de dépense actuelle. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces) ».

   {% note %}

   **Remarques**: 
   * Les coûts affichés ici sont les coûts cumulés pour la période de facturation mensuelle en cours. Les coûts contrôlés pour {% data variables.product.prodname_github_codespaces %}, affichés sur cette page, sont réinitialisés à zéro au début de chaque période de facturation mensuelle. Les coûts impayés des mois précédents ne sont pas affichés.
   * Les chiffres de cette page sont mis à jour toutes les heures.

   {% endnote %}

{% data reusables.dotcom_billing.actions-packages-report-download-org-account %} Les données utilisées pour ce rapport sont mises à jour quotidiennement. 
1. Filtrez le rapport pour afficher uniquement les lignes qui mentionnent « Codespaces » dans le champ `Product`.

   ![Rapport d’utilisation filtré avec Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Affichage de l’utilisation de {% data variables.product.prodname_codespaces %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent voir les informations relatives à l’utilisation de {% data variables.product.prodname_github_codespaces %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Sous « Utilisation mensuelle de {% data variables.product.prodname_codespaces %} », visualisez les détails relatifs à l’utilisation de chaque organisation dans votre compte d’entreprise.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

## Pour aller plus loin

- « [Liste des codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization) »
