---
title: Excluir e restaurar branches em uma pull request
intro: 'Se você tem acesso de gravação em um repositório, pode excluir os branches que estão associados a pull requests fechadas ou mescladas. Não é possível excluir branches associados a pull requests abertas.'
redirect_from:
  - /articles/tidying-up-pull-requests/
  - /articles/restoring-branches-in-a-pull-request/
  - /articles/deleting-unused-branches/
  - /articles/deleting-and-restoring-branches-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Excluindo um branch usado para uma pull request

Você pode excluir um branch que esteja associado a uma pull request se a pull request tiver sofrido merge ou estiver encerrada e não houver outras pull requests abertas que referenciem o branch. Para obter informações sobre branches de fechamento que não estão associados a pull requests, consulte "[Criar e excluir branches dentro do seu repositório.](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. Na lista de pull requests, clique naquela associada ao branch que você deseja excluir.
5. Próximo à parte inferior da pull request, clique em **Delete branch** (Excluir branch). ![Botão Delete branch (Excluir branch)](/assets/images/help/pull_requests/delete_branch_button.png)

   Este botão não é exibido se houver atualmente uma pull request aberta para este branch.

### Restaurar um branch excluído

É possível restaurar um head branch de uma pull request fechada.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. Na lista de pull requests, clique naquela associada ao branch que você deseja restaurar.
5. Próximo à parte inferior da pull request, clique em **Restore branch** (Restaurar branch). ![Botão Restore deleted branch (Restaurar branch excluído)](/assets/images/help/branches/branches-restore-deleted.png)

### Leia mais

- "[Criar e excluir branches dentro do seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Gerenciando a exclusão automática de branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"
