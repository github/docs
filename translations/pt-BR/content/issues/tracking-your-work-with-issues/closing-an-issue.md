---
title: Fechando um problema
intro: 'Você pode fechar um problema quando erros são corrigidos, quando se tomou uma ação com base em um feedback ou mostrar que o trabalho não está planejado.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Feche um problema
---

{% note %}

**Observação:** Você também pode fechar problemas automaticamente com palavras-chave em pull requests e mensagens de commit. Para obter mais informações, consulte "[Vincular um pull request a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. Na lista de problemas, clique no problema que deseja fechar.
{%- ifversion issue-close-reasons %}
1. Opcionalmente, para alterar o motivo do fechamento do problema, selecione {% octicon "triangle-down" aria-label="The down triangle octicon" %} ao lado de "Fechar problema" e clique em um motivo. ![Captura de tela que mostra menu suspenso contendo os motivos de fechamento do problema](/assets/images/help/issues/close-issue-select-reason.png)
2. Clique **Fechar problema**. ![Captura de tela que mostra o botão "fechar problema"](/assets/images/help/issues/close-issue-with-reason.png)
{%- else %}
1. No final da página, clique em **Fechar problema**. ![Captura de tela que mostra o botão "fechar problema"](/assets/images/help/issues/close-issue.png)
{% endif %}
