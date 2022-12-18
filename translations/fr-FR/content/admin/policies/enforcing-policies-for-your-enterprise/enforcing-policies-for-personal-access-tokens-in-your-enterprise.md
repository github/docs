---
title: Application de stratégies pour les jetons d’accès personnels dans votre entreprise
intro: 'Les propriétaires d’entreprise peuvent décider s’ils souhaitent autoriser les {% data variables.product.pat_v2 %} et les {% data variables.product.pat_v1_plural %}, et imposer l’approbation des {% data variables.product.pat_v2 %}.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107004'
---
{% note %}

**Remarque** : {% data reusables.user-settings.pat-v2-beta %}

Pendant la bêta, les entreprises doivent opter pour les {% data variables.product.pat_v2 %}. Si votre entreprise n’a pas encore fait de choix, vous serez invité à le faire et à définir des stratégies quand vous suivrez les étapes ci-dessous.

Même si une entreprise n’a pas opté pour les {% data variables.product.pat_v2 %}, les organisations appartenant à l’entreprise peuvent toujours le faire. Tous les utilisateurs, notamment les {% data variables.product.prodname_emus %}, peuvent créer des {% data variables.product.pat_v2 %} ayant accès aux ressources qui appartiennent à l’utilisateur (par exemple les dépôts créés sous son compte), même si l’entreprise n’a pas activé les {% data variables.product.pat_v2 %}.

{% endnote %}

## Restriction de l’accès des {% data variables.product.pat_v2 %}

Les propriétaires d’entreprise peuvent empêcher les {% data variables.product.pat_v2 %} d’accéder aux ressources privées et internes appartenant à l’entreprise. Les {% data variables.product.pat_v2_caps %} auront tout de même accès aux ressources publiques contenues au sein des organisations. Ce paramètre contrôle uniquement l’accès des {% data variables.product.pat_v2 %}, pas celui des {% data variables.product.pat_v1_plural %}. Pour plus d’informations sur la restriction de l’accès des {% data variables.product.pat_v1_plural %}, consultez « [Restriction de l’accès des {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic) » dans cette page.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Sous {% octicon "law" aria-label="The law icon" %} **Stratégies**, cliquez sur **Organisations**.
1. Sous **Restreindre l’accès via des {% data variables.product.pat_v2 %}** , sélectionnez l’option qui répond à vos besoins :
   - **Autoriser les organisations à configurer les conditions d’accès** : chaque organisation appartenant à l’entreprise peut décider de restreindre ou non l’accès des {% data variables.product.pat_v2 %}.
   - **Restreindre l’accès via des {% data variables.product.pat_v2 %}**  : les {% data variables.product.pat_v2_caps %} ne peuvent pas accéder aux organisations appartenant à l’entreprise. Les clés SSH créées par des {% data variables.product.pat_v2 %} continuent de fonctionner. Les organisations ne peuvent pas remplacer ce paramètre.
   - **Autoriser l’accès via des {% data variables.product.pat_v2 %}**  : les {% data variables.product.pat_v2_caps %} peuvent accéder aux organisations appartenant à l’entreprise. Les organisations ne peuvent pas remplacer ce paramètre.
1. Cliquez sur **Enregistrer**.

## Application d’une stratégie d’approbation pour les {% data variables.product.pat_v2 %}

Les propriétaires d’entreprise peuvent imposer à toutes les organisations appartenant à l’entreprise d’approuver chaque {% data variables.product.pat_v2 %} ayant accès à l’organisation. Les {% data variables.product.pat_v2_caps %} auront tout de même accès en lecture aux ressources publiques contenues au sein de l’organisation sans approbation. À l’inverse, les propriétaires d’entreprise peuvent autoriser les {% data variables.product.pat_v2 %} à accéder aux organisations présentes dans l’entreprise sans approbation préalable. Les propriétaires d’entreprise peuvent également laisser chaque organisation présente dans l’entreprise choisir ses propres paramètres d’approbation.

{% note %}

**Remarque** : Seuls les {% data variables.product.pat_v2 %}, et non les {% data variables.product.pat_v1_plural %}, sont soumis à approbation. À moins que l’organisation ou l’entreprise n’ait restreint l’accès des {% data variables.product.pat_v1_plural %}, un {% data variables.product.pat_v1 %} peut accéder aux ressources de l’organisation sans approbation préalable. Pour plus d’informations sur les restrictions imposées aux {% data variables.product.pat_v1_plural %}, consultez « [Restriction de l’accès des {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic) » dans cette page, et « [Définition d’une stratégie de {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Sous {% octicon "law" aria-label="The law icon" %} **Stratégies**, cliquez sur **Organisations**.
1. Sous **Imposer l’approbation des {% data variables.product.pat_v2 %}** , sélectionnez l’option qui répond à vos besoins :
   - **Autoriser les organisations à configurer les conditions d’approbation** : chaque organisation appartenant à l’entreprise peut décider d’imposer ou non l’approbation des {% data variables.product.pat_v2 %} ayant accès à l’organisation.
   - **Imposer aux organisations d’utiliser le flux d’approbation** : toutes les organisations appartenant à l’entreprise doivent approuver chaque {% data variables.product.pat_v2 %} ayant accès à l’organisation. Les {% data variables.product.pat_v2_caps %} créés par les propriétaires d’organisation n’ont pas besoin d’approbation. Les organisations ne peuvent pas remplacer ce paramètre.
   - **Désactiver le flux d’approbation dans toutes les organisations** : les {% data variables.product.pat_v2_caps %} créés par les membres de l’organisation peuvent accéder aux organisations appartenant à l’entreprise sans approbation préalable. Les organisations ne peuvent pas remplacer ce paramètre.
1. Cliquez sur **Enregistrer**.

## Restriction de l’accès des {% data variables.product.pat_v1_plural %}

Les propriétaires d’entreprise peuvent empêcher les {% data variables.product.pat_v1_plural %} d’accéder à l’entreprise et aux organisations appartenant à l’entreprise. Les {% data variables.product.pat_v1_caps_plural %} auront tout de même accès aux ressources publiques contenues au sein de l’organisation. Ce paramètre contrôle uniquement l’accès des {% data variables.product.pat_v1_plural %}, pas celui des {% data variables.product.pat_v2 %}. Pour plus d’informations sur la restriction de l’accès des {% data variables.product.pat_v2 %}, consultez « [Restriction de l’accès des {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens) » dans cette page.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Sous {% octicon "law" aria-label="The law icon" %} **Stratégies**, cliquez sur **Organisations**.
1. Sous **Restreindre l’accès des {% data variables.product.pat_v1_plural %} à vos organisations**, sélectionnez l’option qui répond à vos besoins :
   - **Autoriser les organisations à configurer les conditions d’accès des {% data variables.product.pat_v1_plural %}**  : chaque organisation appartenant à l’entreprise peut décider de restreindre ou non l’accès des {% data variables.product.pat_v1_plural %}.
   - **Restreindre l’accès via des {% data variables.product.pat_v1_plural %}**  : les {% data variables.product.pat_v1_caps_plural %} ne peuvent pas accéder à l’entreprise ou aux organisations appartenant à l’entreprise. Les clés SSH créées par les {% data variables.product.pat_v1_plural %} continuent de fonctionner. Les organisations ne peuvent pas remplacer ce paramètre.
   - **Autoriser l’accès via des {% data variables.product.pat_v1_plural %}**  : les {% data variables.product.pat_v1_caps_plural %} peuvent accéder à l’entreprise et aux organisations appartenant à l’entreprise. Les organisations ne peuvent pas remplacer ce paramètre.
1. Cliquez sur **Enregistrer**.
