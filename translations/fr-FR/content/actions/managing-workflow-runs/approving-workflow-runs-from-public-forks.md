---
title: Approbation d’exécutions de workflow à partir de duplications publiques
intro: 'Quand un contributeur externe soumet une demande de tirage à un dépôt public, un responsable de maintenance disposant d’un accès en écriture peut être amené à approuver les exécutions de workflow.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164122'
---
## À propos des exécutions de workflow à partir de duplications publiques

{% data reusables.actions.workflow-run-approve-public-fork %}

Vous pouvez configurer des exigences d’approbation de workflow pour un [dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), une [organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) ou une [entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Les exécutions de workflow qui attendent une approbation pendant plus de 30 jours sont automatiquement supprimées.

## Approbation d’exécutions de workflow sur une demande de tirage à partir d’une duplication publique

{% data reusables.actions.workflows.approve-workflow-runs %}
