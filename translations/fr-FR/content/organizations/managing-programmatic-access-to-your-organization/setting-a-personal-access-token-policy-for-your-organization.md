---
title: Définition d’une stratégie de jeton d’accès personnel pour votre organisation
intro: 'Les propriétaires d’organisation peuvent contrôler s’il faut autoriser les {% data variables.product.pat_v2 %} et les {% data variables.product.pat_v1_plural %}, et peuvent exiger une approbation pour les {% data variables.product.pat_v2 %}.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106468'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Restriction de l’accès par des {% data variables.product.pat_v2 %}

Les propriétaires d’organisation peuvent empêcher les {% data variables.product.pat_v2 %} d’accéder aux ressources appartenant à l’organisation. Les {% data variables.product.pat_v2_caps %} pourront néanmoins toujours lire les ressources publiques au sein de l’organisation. Ce paramètre contrôle seulement l’accès par les {% data variables.product.pat_v2 %}, et non pas par {% data variables.product.pat_v1_plural %}. Pour plus d’informations sur la restriction de l’accès par {% data variables.product.pat_v1_plural %}, consultez « [Restriction de l’accès par {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic) » sur cette page.

{% ifversion ghec or ghes or ghae %} Si votre organisation appartient à une entreprise et que le propriétaire de votre entreprise a un accès restreint par {% data variables.product.pat_v2 %}, vous ne pouvez pas remplacer la stratégie dans votre organisation. Pour plus d’informations, consultez « [Application de stratégies pour les {% data variables.product.pat_generic %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise) ».{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Paramètres**.
1. Sous **{% data variables.product.pat_v2_caps %}** , sélectionnez l’option qui répond à vos besoins :
   - **Autoriser l’accès via des {% data variables.product.pat_v2 %}**  : les {% data variables.product.pat_v2_caps %} peuvent accéder aux ressources appartenant à l’organisation.
   - **Restreindre l’accès via des {% data variables.product.pat_v2 %}**  : les {% data variables.product.pat_v2_caps %} ne peuvent pas accéder aux ressources appartenant à l’organisation. Les clés SSH créées par des {% data variables.product.pat_v2 %} continueront de fonctionner.
1. Cliquez sur **Enregistrer**.

## Application d’une stratégie d’approbation pour les {% data variables.product.pat_v2 %}

Les propriétaires d’organisation peuvent exiger une approbation pour chaque {% data variables.product.pat_v2 %} qui peut accéder à l’organisation. Les {% data variables.product.pat_v2_caps %} auront tout de même accès en lecture aux ressources publiques contenues au sein de l’organisation sans approbation. Les {% data variables.product.pat_v2_caps %} créés par les propriétaires d’organisation n’ont pas besoin d’approbation.

{% ifversion ghec or ghes or ghae %} Si votre organisation appartient à une entreprise et que le propriétaire de votre entreprise a défini une stratégie d’approbation pour les {% data variables.product.pat_v2 %}, vous ne pouvez pas remplacer la stratégie dans votre organisation. Pour plus d’informations, consultez « [Application de stratégies pour les {% data variables.product.pat_generic %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise) ».{% endif %}

{% note %}

**Remarque** : Seuls les {% data variables.product.pat_v2 %}, et non pas les {% data variables.product.pat_v1_plural %}, sont soumis à approbation. À moins que l’organisation ait restreint l’accès des {% data variables.product.pat_v1_plural %}, un {% data variables.product.pat_v1 %} peut accéder aux ressources de l’organisation sans approbation préalable. Pour plus d’informations, consultez « [Restriction de l’accès par des {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic) » sur cette page.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Paramètres**.
1. Sous **Imposer l’approbation des {% data variables.product.pat_v2 %}** , sélectionnez l’option qui répond à vos besoins :
   - **Exiger l’approbation de l’administrateur** : un propriétaire d’organisation doit approuver chaque {% data variables.product.pat_v2 %} qui peut accéder à l’organisation. Les {% data variables.product.pat_v2_caps %} créés par les propriétaires d’organisation n’ont pas besoin d’approbation.
   - **Ne pas exiger l’approbation de l’administrateur** : les {% data variables.product.pat_v2_caps %} créées par des membres de l’organisation peuvent accéder aux ressources de l’organisation sans approbation préalable.
1. Cliquez sur **Enregistrer**.

## Restriction de l’accès des {% data variables.product.pat_v1_plural %}

Les propriétaires d’organisation peuvent empêcher les {% data variables.product.pat_v1_plural %} d’accéder aux ressources appartenant à l’organisation. Les {% data variables.product.pat_v1_caps_plural %} auront néanmoins toujours accès en lecture aux ressources publiques au sein de l’organisation. Ce paramètre contrôle seulement l’accès des {% data variables.product.pat_v1_plural %}, et non pas celui des {% data variables.product.pat_v2 %}. Pour plus d’informations sur la restriction de l’accès des {% data variables.product.pat_v2 %}, consultez « [Restriction de l’accès des {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens) » dans cette page.

{% ifversion ghec or ghes or ghae %} Si votre organisation appartient à une entreprise et que le propriétaire de votre entreprise a un accès restreint par {% data variables.product.pat_v1_plural %}, vous ne pouvez pas remplacer la stratégie dans votre organisation. Pour plus d’informations, consultez « [Application de stratégies pour les {% data variables.product.pat_generic %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise) ».{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sous **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , cliquez sur **Paramètres**.
1. Sous **{% data variables.product.pat_v1_caps %}** , sélectionnez l’option qui répond à vos besoins :
   - **Autoriser l’accès via {% data variables.product.pat_v1_plural %}**  : les {% data variables.product.pat_v1_caps_plural %} peuvent accéder aux ressources appartenant à l’organisation.
   - **Restreindre l’accès via {% data variables.product.pat_v1_plural %}**  : les {% data variables.product.pat_v1_caps_plural %} ne peuvent pas accéder aux ressources appartenant à l’organisation. Les clés SSH créées par les {% data variables.product.pat_v1_plural %} continueront de fonctionner.
1. Cliquez sur **Enregistrer**.
