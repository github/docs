---
title: Aprovando execuções de fluxo de trabalho das bifurcações públicas
intro: 'Quando um colaborador externo envia um pull request para um repositório público, é possível que um mantenedor com acesso de gravação tenha de aprovar qualquer execução de fluxo de trabalho.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164120'
---
## Sobre as execuções de fluxo de trabalho a partir de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar os requisitos de aprovação de fluxo de trabalho para um [repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), uma [organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) ou uma [empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

As execuções de fluxo de trabalho que estão aguardando aprovação por mais de 30 dias são excluídas automaticamente.

## Aprovando as execuções do fluxo de trabalho em um pull request a partir de uma bifurcação pública

{% data reusables.actions.workflows.approve-workflow-runs %}
