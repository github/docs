---
title: "Monitoring de vos travaux en\_cours"
intro: 'Effectuez un monitoring de la façon dont les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} traitent les travaux dans votre organisation ou votre entreprise, puis identifiez les contraintes associées.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145107126'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Affichage des travaux actifs dans votre organisation ou votre entreprise

Vous pouvez obtenir la liste de tous les travaux en cours d’exécution sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} dans votre organisation ou votre entreprise.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Passez en revue la section « Travaux actifs », qui contient la liste de tous les travaux en cours d’exécution sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}.

  ![Capture d’écran de la liste des travaux actifs](/assets/images/help/settings/actions-runner-active-jobs.png)

## Affichage des travaux en file d’attente dans votre organisation ou votre entreprise

Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} vous permettent d’exécuter des travaux simultanément, et le nombre maximal de travaux simultanés varie en fonction de votre plan. Si vous atteignez le nombre maximal de travaux simultanés, les nouveaux travaux commencent à entrer dans une file d’attente. Pour en savoir plus sur le nombre de travaux simultanés disponibles pour votre plan, consultez « [Limites d’utilisation, facturation et administration](/actions/learn-github-actions/usage-limits-billing-and-administration) ».

La procédure suivante montre comment vérifier le nombre maximal de travaux simultanés que vous pouvez exécuter.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. Passez en revue la section « Utilisation de tous les travaux », qui répertorie le nombre de travaux actifs et le nombre maximal de travaux que vous pouvez exécuter. Dans cet exemple, `9` travaux sont actuellement en cours d’exécution pour un maximum de `180`.
  ![Capture d’écran du nombre maximal de travaux pour un compte](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
