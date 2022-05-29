---
title: Gerenciar a exclusão automática de branches
intro: É possível excluir branches head automaticamente após o merge de pull requests no repositório.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Exclusão automática de branch
---

Qualquer pessoa com permissões de administrador em um repositório pode habilitar ou desabilitar a exclusão automática de branches.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione ou desmarque **Excluir branches principais automaticamente**. ![Caixa de seleção para habilitar ou desabilitar a exclusão automática de branches](/assets/images/help/repository/automatically-delete-branches.png)

## Leia mais
- "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
- "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository)"
