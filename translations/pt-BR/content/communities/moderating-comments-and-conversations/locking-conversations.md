---
title: Bloquear conversas
intro: 'Proprietários e colaboradores de repositórios e pessoas com acesso de gravação em um repositório podem bloquear permanentemente ou temporariamente conversas sobre problemas, pull requests e commits para neutralizar uma interação acalorada.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

É apropriado bloquear uma conversa quando toda a conversa não é construtiva ou viola o código de conduta da sua comunidade{% if currentVersion == "free-pro-team@latest" %} ou as [diretrizes da comunidade do GitHub](/articles/github-community-guidelines){% endif %}. Quando você bloqueia uma conversa, você também pode especificar o motivo, que é visível publicamente.

Bloquear uma conversa cria um evento na linha do tempo visível a qualquer um com acesso de leitura ao repositório. No entanto, o nome de usuário da pessoa que bloqueou a conversa somente pode ser visualizado pelas pessoas com acesso de gravação ao repositório. Para qualquer pessoa sem acesso de gravação, o evento na linha do tempo é anônimo.

![Evento anônimo de linha do tempo de uma conversa bloqueada](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Quando uma conversa é bloqueada, somente [pessoas com acesso de gravação](/articles/repository-permission-levels-for-an-organization/) e [proprietários e colaboradores de repositórios](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account) podem adicionar, ocultar ou excluir comentários.

Para pesquisar conversas bloqueadas em um repositório que não está arquivado, é posível usar os qualificadores de pesquisa `is:locked` e `archived:false`. As conversas são automaticamente bloqueadas em repositórios arquivados. Para obter mais informações, consulte "[Pesquisar problemas e pull requests](/articles/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)".

1. Como opção, escreva um comentário explicando por que você está bloqueando a conversa.
2. Na margem direita do problema ou pull request ou acima da caixa de comentários na página de commit, clique em **Lock conversation** (Bloquear conversa). ![Link Lock conversation (Bloquear conversa)](/assets/images/help/repository/lock-conversation.png)
3. Opcionalmente, selecione um motivo para bloquear a conversa. ![Menu Reason for locking a conversation (Motivo para bloquear uma conversa)](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Leia as informações sobre bloqueio de conversas e clique em **Lock conversation on this issue** (Bloquear conversa sobre este problema), **Lock conversation on this pull request** (Bloquear conversa sobre esta pull request) ou **Lock conversation on this commit** (Bloquear conversa sobre este commit). ![Caixa de diálogo Confirm lock with a reason (Confirmar bloqueio com um motivo)](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Quando você quiser desbloquear a conversa, clique em **Unlock conversation** (Desbloquear conversa). ![Link Unlock conversation (Desbloquear conversa)](/assets/images/help/repository/unlock-conversation.png)

### Leia mais

- "[Configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)"
- "[Usando modelos para encorajar problemas úteis e pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)"
- "[Gerenciar comentários disruptivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"{% if currentVersion == "free-pro-team@latest" %}
- "[Mantendo sua segurança no {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"
- "[Denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limitando interações em seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
{% endif %}
