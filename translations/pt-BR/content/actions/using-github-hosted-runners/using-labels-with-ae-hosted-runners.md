---
title: Usar etiquetas com executores hospedados de AE
intro: 'Você pode usar etiquetas para organizar seus {% data variables.actions.hosted_runner %}s com base em suas características.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

Para informações sobre como usar as etiquetas para etiquetar trabalhos para tipos específicos de {% data variables.actions.hosted_runner %}s, consulte "[Usar {% data variables.actions.hosted_runner %}s em um fluxo de trabalho](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)".


{% note %}

**Observação:** Para gerenciar as etiquetas para seus {% data variables.actions.hosted_runner %}, você precisará entrar em contato com o suporte de {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Visualizar as etiquetas para seus {% data variables.actions.hosted_runner %}s
{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
{% data reusables.github-actions.hosted-runner-list-group %}
1. Localize o runner que você deseja verificar e clique em {% octicon "triangle-down" aria-label="The downward triangle" %} para ver o menu de seleção de etiqueta. Etiquetas já atribuídas ao seu executor têm uma {% octicon "check" aria-label="Check mark" %} ao lado delas.

![Alterar etiqueta do executor](/assets/images/help/settings/actions-hosted-runner-list-label.png)
