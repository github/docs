---
title: Gerenciando merge automático para pull requests no seu repositório
intro: Você pode permitir ou impedir um merge automático de pull requests em seu repositório.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
---

### Sobre o merge automático

Se você permitir uma merge automático para pull requests no seu repositório, as pessoas com permissões de gravação poderão configurar pull requests individuais no repositório para fazer merge automaticamente quando todos os requisitos de merge forem atendidos. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}Se alguém que não tiver permissão de gravação fizer push de um pull request que tenha merge automático habilitado, o merge automático será desabilitado para esse pull request. {% endif %}Para obter mais informações, consulte "[Fazer merge automático de um pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)".

### Gerenciar merge automático

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em "Botão de merge", selecione ou desmarque a opção **Permitir merge automático**. ![Caixa de seleção para permitir ou impedir merge automático](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
