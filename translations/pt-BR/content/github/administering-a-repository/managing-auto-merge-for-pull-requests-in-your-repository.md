---
title: Gerenciando merge automático para pull requests no seu repositório
intro: "Você pode permitir ou impedir um merge automático de pull requests em seu repositório."
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
permissions: Pessoas com permissões de mantenedor podem gerenciar merge automático para pull requests em um repositório.
---

{% data reusables.pull_requests.auto-merge-release-phase %}

Se você permitir um merge automático para pull requests no seu repositório, as pessoas podem configurar os pull requests individuais no repositório para fazer merge automaticamente quando todos os requisitos de merge forem atendidos. Para obter mais informações, consulte "[Fazer merge automático de um pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em "Botão de merge", selecione ou desmarque a opção **Permitir merge automático**. ![Caixa de seleção para permitir ou impedir merge automático](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)