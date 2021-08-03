---
title: Aprovando execuções de fluxo de trabalho das bifurcações públicas
intro: 'Quando um primeiro contribuidor envia um pull request para um repositório público, um mantenedor com acesso de gravação deverá aprovar qualquer execução de fluxo de trabalho.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

As bifurcações de repositórios públicos podem enviar pull requests que proponham alterações nos fluxos de trabalho de {% data variables.product.prodname_actions %} de um repositório. Embora os fluxos de trabalho das bifurcações não tenham acesso a dados confidenciais como segredos, podem ser uma dor de cabeça para os mantenedores se forem modificados para fins abusivos. Para ajudar a evitar isso, os fluxos de trabalho em pull requests não são executados automaticamente se forem recebidos de contribuidores pela primeira vez e devem ser aprovados primeiro.

Os mantenedores com acesso de gravação ao repositório podem usar o procedimento a seguir para revisar e executar fluxos de trabalho em pull requests dos primeiros colaboradores. Após um contribuidor ter pelo menos um pull request mesclado no repositório de um projeto, todos os pull requests futuros da bifurcação daquele contribuidor executarão automaticamente os fluxos de trabalho.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspecione as alterações propostas no pull request e certifique-se de que você esteja confortável em executar seus fluxos de trabalho no branch do pull request. Você deve estar especialmente alerta para qualquer mudança proposta no diretório `.github/workflows/` que afete os arquivos do fluxo de trabalho.
1. Se você estiver confortável em executar fluxos de trabalho no branch do pull request, retorne para a aba {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation** e, em "Fluxo de trabalho(s) aguardando aprovação", clique em **Aprovar e executar**.

   ![Aprovar e executar fluxos de trabalho](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
