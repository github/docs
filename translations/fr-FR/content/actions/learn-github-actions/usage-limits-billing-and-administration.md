---
title: 'Limites d’utilisation, facturation et administration'
intro: 'Il existe des limites d’utilisation pour les workflows {% data variables.product.prodname_actions %}. Des frais d’utilisation s’appliquent aux référentiels qui dépassent le nombre de minutes et de stockage gratuits pour un référentiel.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191853'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de la facturation de {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Pour plus d’informations, consultez « [Présentation de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %} ».{% elsif ghes or ghec %} » et « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) ».{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} Pour plus d’informations, consultez « [À propos de la facturation d’{% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».
{% else %} L’utilisation de GitHub Actions est gratuite pour les instances {% data variables.product.prodname_ghe_server %} qui utilisent des exécuteurs auto-hébergés. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».
{% endif %}


{% ifversion fpt or ghec %}

## Disponibilité

{% data variables.product.prodname_actions %} est disponible sur tous les produits {% data variables.product.prodname_dotcom %}, mais {% data variables.product.prodname_actions %} n’est pas disponible pour les dépôts privés appartenant à des comptes utilisant des plans hérités par dépôt. {% data reusables.gated-features.more-info %}

{% endif %}

## Limites d’utilisation

{% ifversion fpt or ghec %} Il existe des limites sur l’utilisation de {% data variables.product.prodname_actions %} lors de l’utilisation d’exécuteurs hébergés par {% data variables.product.prodname_dotcom %}. Ces limites sont susceptibles d’être modifiées.

{% note %}

**Remarque :** Pour les exécuteurs auto-hébergés, différentes limites d’utilisation s’appliquent. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits) ».

{% endnote %}

- **Durée d’exécution du travail** – Chaque travail d’un workflow peut s’exécuter avec un temps d’exécution pouvant atteindre jusqu’à 6 heures. Si un travail atteint cette limite, il est arrêté et son exécution échoue.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **Travaux simultanés** – Le nombre de travaux simultanés que vous pouvez exécuter dans votre compte dépend de votre plan GitHub et du type d’exécuteur. Si ce nombre est dépassé, les travaux supplémentaires sont mis en file d’attente.

  **Exécuteurs hébergés par {% data variables.product.prodname_dotcom %} standard**

  | Plan GitHub | Nombre maximal de travaux simultanés | Nombre maximal de travaux macOS simultanés |
  |---|---|---|
  | Gratuit | 20 | 5 |
  | Pro | 40 | 5 |
  | Équipe | 60 | 5 |
  | Entreprise | 180 | 50 |

  **{% data variables.actions.hosted_runner %}s hébergés par {% data variables.product.prodname_dotcom %}**

  | Plan GitHub | Nombre maximal de travaux simultanés | Nombre maximal de travaux macOS simultanés |
  |---|---|---|
  | Tous | 500 | n/a |

  {% note %}

  **Remarque :** Si nécessaire, les clients des plans d’entreprise peuvent demander une limite plus élevée pour les travaux simultanés. Pour plus d’informations, contactez {% data variables.contact.contact_ent_support %} ou votre représentant commercial.

  {% endnote %}
  
- **Matrice de travaux** : {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} Les limites d’utilisation s’appliquent aux exécuteurs auto-hébergés. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits) ».
{% endif %}

{% ifversion fpt or ghec %}
## Politique d’utilisation

Outre les limites d’utilisation, vous devez veiller à utiliser {% data variables.product.prodname_actions %} dans les [conditions d’utilisation de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/). Pour plus d’informations sur les conditions spécifiques à {% data variables.product.prodname_actions %}, consultez les [conditions GitHub pour les produits supplémentaires](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Facturation des workflows réutilisables

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Si vous réutilisez un workflow, la facturation est toujours associée au workflow de l’appelant. L’affectation d’exécuteurs hébergés par {% data variables.product.prodname_dotcom %} est toujours évaluée à l’aide du contexte de l’appelant uniquement. L’appelant ne peut pas utiliser des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} à partir du dépôt appelé. 

Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».
{% endif %}

## Artifact and log retention policy

Vous pouvez configurer la période de conservation des artefacts et des journaux pour votre dépôt, votre organisation ou votre compte d’entreprise.

{% data reusables.actions.about-artifact-log-retention %}

Pour plus d'informations, consultez les pages suivantes :

- « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) ».
- « [Configuration de la durée de conservation pour {% data variables.product.prodname_actions %} des artefacts et des journaux dans votre organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) »
- « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) »

## Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre dépôt ou organisation

{% data reusables.actions.disabling-github-actions %}

Pour plus d'informations, consultez les pages suivantes :
- « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) ».
- « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) ».
- « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) »

## Désactivation et activation de workflows

Vous pouvez activer et désactiver des workflows individuels dans votre dépôt sur {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Pour plus d’informations, consultez « [Désactivation et activation d’un workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) ».
