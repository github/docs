---
title: Gerenciar comentários conflituosos
intro: 'Podes {% if currentVersion == "free-pro-team@latest" %}hide, editar,{% else %}edit{% endif %} ou excluir comentários em problemas, pull requests e commits.'
redirect_from:
  - /articles/editing-a-comment/
  - /articles/deleting-a-comment/
  - /articles/managing-disruptive-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Ocultar um comentário

Qualquer pessoa com acesso de gravação em um repositório podem ocultar comentários sobre problemas, pull requests e commits.

Se um comentário não diz respeito ao assunto, está desatualizado ou resolvido, pode ser que você queira ocultar o comentário para manter o foco da discussão ou fazer uma pull request mais simples para navegar e revisar. Comentários ocultos são minimizados, mas as pessoas com acesso de leitura no repositório podem expandi-los.

![Comentário minimizado](/assets/images/help/repository/hidden-comment.png)

1. Navegue até o comentário que deseja ocultar.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Hide** (Ocultar). ![Ícone horizontal kebab e menu comment moderation (moderação de comentários) mostrando as opções edit, hide, delete (editar, ocultar, excluir)](/assets/images/help/repository/comment-menu.png)
3. Com o menu suspenso "Choose a reason" (Selecione um motivo), clique em um motivo para ocultar o comentário. Depois clique em **Hide comment** (Ocultar comentário).
  {% if currentVersion == "free-pro-team@latest" %}
  ![Menu suspenso Choose reason for hiding comment (Selecione um motivo para ocultar o comentário)](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
  {% else %}
  ![Menu suspenso Choose reason for hiding comment (Selecione um motivo para ocultar o comentário)](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
  {% endif %}

### Mostrar um comentário

Qualquer pessoa com acesso de gravação em um repositório pode reexibir comentários sobre problemas, pull requests e commits.

1. Navegue até o comentário que deseja mostrar.
2. No canto superior direito do comentário, clique em **{% octicon "fold" aria-label="The fold icon" %} Show comment** (Mostrar comentário). ![Mostrar texto de comentário](/assets/images/help/repository/hidden-comment-show.png)
3. No lado direito do comentário expandido, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e **Unhide** (Mostrar). ![Ícone horizontal kebab e menu comment moderation (moderação de comentários) mostrando as opções edit, unhide, delete (editar, mostrar, excluir)](/assets/images/help/repository/comment-menu-hidden.png)

### Editar um comentário

Qualquer pessoa com acesso de gravação em um repositório pode editar comentários sobre problemas, pull requests e commits.

Considera-se apropriado editar um comentário e remover o conteúdo que não contribui para a conversa e viole o código de conduta da sua comunidade{% if currentVersion == "free-pro-team@latest" %} ou as diretrizes [da Comunidade do GitHub](/articles/github-community-guidelines){% endif %}.

Quando editar um comentário, anote a localização de onde o comentário foi removido e, opcionalmente, os motivos para a remoção.

Qualquer pessoa com acesso de leitura em um repositório pode visualizar o histórico de edição do comentário. O menu suspenso **edited** (editado) na parte superior do comentário tem um histório de edições mostrando o usuário e o horário de cada edição.

![Comentário com observação adicional que o conteúdo foi redacted (suprimido)](/assets/images/help/repository/content-redacted-comment.png)

Autores do comentário e pessoas com acesso de gravação a um repositório podem excluir informações confidenciais do histórico de edição de um comentário. Para obter mais informações, consulte "[Controlar as alterações em um comentário](/github/building-a-strong-community/tracking-changes-in-a-comment)".

1. Navegue até o comentário que deseja editar.
2. No canto superior direito do comentário, clique em{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Edit** (Editar). ![Ícone horizontal kebab e menu comment moderation (moderação de comentários) mostrando as opções edit, hide, delete e report (editar, ocultar, excluir e denunciar)](/assets/images/help/repository/comment-menu.png)
3. Na janela do comentário, exclua o conteúdo que deseja remover e digite `[REDACTED]` para substitui-lo. ![Janela de comentário com conteúdo redacted (suprimido)](/assets/images/help/issues/redacted-content-comment.png)
4. Na parte inferior do comentário, digite uma observação indicando que editou o comentário e, opcionalmente, o motivo da edição. ![Janela de comentário com observação adicional que o conteúdo foi redacted (suprimido)](/assets/images/help/issues/note-content-redacted-comment.png)
5. Clique em **Update comment** (Atualizar comentário).

### Excluir um comentário

Qualquer pessoa com acesso de gravação em um repositório pode excluir comentários sobre problemas, pull requests e commits. Proprietários de organização, mantenedores de equipes e o autor do comentário também podem excluir um comentário na página da equipe.

Excluir um comentário é o seu último recurso como moderador. É apropriado excluir um comentário se todo o comentário não adicionar conteúdo construtivo a uma conversa e violar o código de conduta da sua comunidade{% if currentVersion == "free-pro-team@latest" %} ou [Diretrizes da Comunidade](/articles/github-community-guidelines){% endif %}.

Excluir um comentário cria um evento na linha do tempo visível a qualquer um com acesso de leitura no repositório. No entanto, o nome de usuário da pessoa que excluiu o comentário somente pode ser visualizado pelas pessoas com acesso de gravação ao repositório. Para qualquer pessoa sem acesso de gravação, o evento na linha do tempo é anônimo.

![Evento anônimo de linha do tempo de um comentário excluído](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

Se o comentário contém algum conteúdo construtivo que contribui para a conversa sobre o problema ou pull request, você pode editar o comentário.

{% note %}

**Observação:** o comentário inicial (ou texto) de um problema ou pull request não pode ser excluído. Entretanto, você pode editar textos de problemas e pull requests para remover conteúdo indesejável.

{% endnote %}

1. Navegue até o comentário que deseja excluir.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Delete** (Excluir). ![Ícone horizontal kebab e menu comment moderation (moderação de comentários) mostrando as opções edit, hide, delete e report (editar, ocultar, excluir e denunciar)](/assets/images/help/repository/comment-menu.png)
3. Opcionalmente, escreva um comentário informando que você deletou o comentário e por quê.
