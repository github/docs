---
title: Controlar as alterações em um comentário
intro: Você pode visualizar o histórico de edição de um comentário ou excluir informações confidenciais do histórico de edição de um comentário.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidade
---

### Visualizar detalhes do histórico de edição de um comentário

Qualquer pessoa com acesso de leitura em um repositório pode visualizar o histórico de edição do comentário.

1. Navegue até o comentário cujo histórico de edição você deseja visualizar.
{% data reusables.repositories.edited-comment-list %}

### Excluir informações confidenciais do histórico de um comentário

Autores do comentário e pessoas com acesso de gravação a um repositório podem excluir informações confidenciais do histórico de edição de um comentário.

Quando você exclui informações confidenciais do histórico de edição do comentário, a pessoa que fez a edição e quando ela fez a edição continuam visíveis no histórico do comentário, mas o conteúdo da edição não está mais disponível.

1. Navegue até o comentário em que você deseja excluir informações confidenciais do histórico de edição.
{% data reusables.repositories.edited-comment-list %}
3. Na parte superior da janela do histórico de edição, clique em **Options** (Opções). Em seguida, clique em **Delete revision from history** (Excluir revisão do histórico) para excluir o diff que mostra o conteúdo que está sendo adicionado. ![Excluir detalhes de edição do comentário](/assets/images/help/repository/delete-comment-edit-details.png)
4. Para confirmar a exclusão, clique em **OK**.

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Relatar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"{% endif %}
- "[Editar um comentário](/articles/editing-a-comment)"
