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
---

### Sobre o merge automático

If you allow auto-merge for pull requests in your repository, people with write permissions can configure individual pull requests in the repository to merge automatically when all merge requirements are met. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}If someone who does not have write permissions pushes changes to a pull request that has auto-merge enabled, auto-merge will be disabled for that pull request. {% endif %}For more information, see "[Automatically merging a pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)."

### Managing auto-merge

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em "Botão de merge", selecione ou desmarque a opção **Permitir merge automático**. ![Caixa de seleção para permitir ou impedir merge automático](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
