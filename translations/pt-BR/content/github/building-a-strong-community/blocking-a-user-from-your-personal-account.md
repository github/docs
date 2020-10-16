---
title: Bloquear usuário da conta pessoal
intro: 'É possível bloquear um usuário para negar a ele acesso aos seus repositórios e atividades e para impedi-lo de enviar notificações a você.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
---

### Sobre o bloqueio de usuários

Você pode bloquear um usuário nas configurações da sua conta ou no perfil do usuário. {% data variables.product.prodname_dotcom %} não notificará o usuário quando você bloqueá-lo. Se quiser evitar contribuir com o mesmo projeto da pessoa que foi bloqueada, você pode [optar por exibir um aviso](/articles/blocking-a-user-from-your-personal-account/#blocking-a-user-in-your-account-settings) em todos os repositórios com contribuições anteriores de um usuário bloqueado. Você ainda pode ver a atividade dos usuários bloqueados em espaços compartilhados e os usuários bloqueados podem excluir seu conteúdo existente.

{% tip %}

**Dica:** se for bloquear um usuário por conta de uma conversa acalorada, considere [bloquear a conversa](/articles/locking-conversations) para que apenas colaboradores possam comentar.

{% endtip %}

Quando você bloqueia um usuário:
- O usuário para de seguir você
- O usuário para de inspecionar e deixa de fixar seus repositórios
- As estrelas e atribuições de problema do usuário são removidas dos repositórios
- As bifurcações dos seus repositórios são excluídas
- Você exclui qualquer bifurcação dos repositórios do usuário
- Os votos do usuário em discussões ou comentários em seus repositórios são excluídos
- O usuário é removido como um colaborador dos seus repositórios
- As contribuições do usuário nos seus repositórios não são mais contabilizadas como contribuições para eles
- As suas contribuições para os repositórios dos usuários bloqueados não são mais contadas como contribuições para você
- Você é removido como colaborador em seus repositórios
- O patrocínio dele para você é cancelado
- Qualquer convite pendente de sucessor de uma conta ou de repositório para ou de um usuário bloqueado é cancelado

Depois que você bloqueou um usuário, ele não pode:
- Enviar notificações a você, incluindo por [@menção](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) do seu nome de usuário
- Comentar ou editar problemas ou pull requests criados por você
- Reagir aos seus comentários sobre problemas, pull requests e commits
- Seguir você ou ver seu conteúdo no feed de atividades dele
- Atribuir a problemas ou pull requests a você
- Convidar você como um colaborador nos repositórios dele
- Convidar você como colaborador em uma consultoria de segurança
- Faz referência cruzada de seus repositórios em comentários
- Bifurque, inspecione, fixe ou favorite seus repositórios
- Patrocinar você

Nos repositórios que você possui, os usuários bloqueados também não podem:
- Criar problemas
- Envie, feche ou mescle pull requests
- Fazer comentários em problema, pull request ou commits
- Adicionar nem editar páginas wiki

### Bloquear um usuário nas configurações da conta

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. Em "Block a user" (Bloquear um usuário), digite o nome de usuário que deseja bloquear e clique em **Block user** (Bloquear usuário). ![Campo Username (Nome de usuário) e botão Block (Bloquear)](/assets/images/help/settings/user-settings-block-user.png)
4. Se desejar, para exibir um aviso quando você visitar um repositório onde um usuário bloqueado é um contribuidor, selecione **Warn me when a blocked user is a prior contributor to a repository** (Avisar-me quando um usuário bloqueado for um contribuidor anterior em um repositório). ![Opção de avisar sobre usuários bloqueados](/assets/images/help/settings/warn-block-user.png)

### Bloquear um usuário na página de perfil dele

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. Clique em **Block user** (Bloquear usuário). ![Caixa de diálogo modal com opções para bloquear o usuário ou denunciar um abuso](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Use o {% data variables.contact.report_abuse %} para entrar em contato conosco se estiver sendo assediado. {% data reusables.policies.abuse %}

{% endnote %}

### Leia mais

- "[Exibir usuários bloqueados da sua conta pessoal](/articles/viewing-users-you-ve-blocked-from-your-personal-account)"
- "[Desbloquear usuários da sua conta pessoal](/articles/unblocking-a-user-from-your-personal-account)"
- "[Bloquear usuários da organização](/articles/blocking-a-user-from-your-organization)"
- "[Desbloquear usuários da organização](/articles/unblocking-a-user-from-your-organization)"
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Restringir interações em seu repositório](/articles/limiting-interactions-with-your-repository)"
