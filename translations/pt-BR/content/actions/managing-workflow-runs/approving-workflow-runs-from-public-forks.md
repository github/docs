---
title: Aprovando execuções de fluxo de trabalho das bifurcações públicas
intro: 'Quando um colaborador externo envia um pull request para um repositório público, é possível que um mantenedor com acesso de gravação tenha de aprovar qualquer execução de fluxo de trabalho.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: b995362f67d97a3e2ee6d1029cbe24227867f58a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083634'
---
## Sobre as execuções de fluxo de trabalho a partir de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar os requisitos de aprovação de fluxo de trabalho para um [repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), uma [organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) ou uma [empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

As execuções de fluxo de trabalho que estão aguardando aprovação por mais de 30 dias são excluídas automaticamente.

## Aprovando as execuções do fluxo de trabalho em um pull request a partir de uma bifurcação pública

Os mantenedores com acesso de gravação a um repositório podem usar o seguinte procedimento para revisar e executar fluxos de trabalho em pull requests de colaboradores que exigem aprovação.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Inspecione as alterações propostas no pull request e certifique-se de que você esteja confortável em executar seus fluxos de trabalho no branch do pull request. Você deve ficar especialmente atento para todas as alterações propostas no diretório `.github/workflows/` que afetem arquivos de fluxo de trabalho.
1. Se você estiver familiarizado com a execução de fluxos de trabalho no branch de solicitação de pull, volte à guia {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversa** e, em "Fluxos de trabalho que aguardam aprovação", clique em **Aprovar e executar**.

   ![Aprovar e executar fluxos de trabalho](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
