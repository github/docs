---
title: Gerenciando sugestões para atualizar os branches do pull request
intro: Você pode dar aos usuários a capacidade de sempre atualizar um branch de pull request quando ele não estiver atualizado com o branch de base.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: issue-6069
  ghec: '*'
topics:
  - Repositories
shortTitle: Gerenciar atualizações do branch
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
---

## Sobre sugestões para atualizar um branch de pull request

Se você habilitar a configuração para sempre sugerir a atualização de branches de pull request no repositório, as pessoas com permissões de gravação sempre poderão, na página do pull request, atualizar o branch principal de um pull request quando ele não estiver atualizado com o branch de base. Quando habilitado, a capacidade de atualização só estará disponível quando o branch de base exigir que os branches estejam atualizados antes do merge e que o branch não esteja atualizado. Para obter mais informações, consulte "[Mantendo o seu pull request em sincronia com o branch de base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)".

## Gerenciando sugestões para atualizar um branch de pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Pull Requests", selecione ou desmarque **Sempre sugerir a atualização dos branches de pull request**. ![A caixa de seleção para habilitar ou desabilitar sempre sugere a atualização do branch](/assets/images/help/repository/always-suggest-updating-branches.png)
