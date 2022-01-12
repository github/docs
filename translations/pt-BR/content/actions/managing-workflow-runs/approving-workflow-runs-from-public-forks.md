---
title: Aprovando execuções de fluxo de trabalho das bifurcações públicas
intro: 'Quando um colaborador externo envia um pull request para um repositório público, é possível que um mantenedor com acesso de gravação tenha de aprovar qualquer execução de fluxo de trabalho.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Aprovar execução da bifurcação pública
---

## Sobre as execuções de fluxo de trabalho a partir de bifurcações públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Você pode configurar os requisitos de aprovação de fluxo de trabalho para um [repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), [organização](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) ou [empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

As execuções de fluxo de trabalho que estão aguardando aprovação por mais de 30 dias são excluídas automaticamente.

## Aprovando as execuções do fluxo de trabalho em um pull request a partir de uma bifurcação pública

Os mantenedores com acesso de gravação a um repositório podem usar o seguinte procedimento para revisar e executar fluxos de trabalho em pull requests de colaboradores que exigem aprovação.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspecione as alterações propostas no pull request e certifique-se de que você esteja confortável em executar seus fluxos de trabalho no branch do pull request. Você deve estar especialmente alerta para qualquer mudança proposta no diretório `.github/workflows/` que afete os arquivos do fluxo de trabalho.
1. Se você estiver confortável em executar fluxos de trabalho no branch do pull request, retorne para a aba {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation** e, em "Fluxo de trabalho(s) aguardando aprovação", clique em **Aprovar e executar**.

   ![Aprovar e executar fluxos de trabalho](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
