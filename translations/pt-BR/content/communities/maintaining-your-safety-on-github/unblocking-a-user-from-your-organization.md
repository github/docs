---
title: Desbloquear usuários da organização
intro: 'Os proprietários e moderadores da organização podem desbloquear um usuário que foi bloqueado anteriormente, restaurando seu acesso aos repositórios da organização.'
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Desbloquear a partir do seu org
---

O desbloqueio de um usuário da organização permite que ele continue contribuindo para os repositórios da organização.

Se você tiver selecionado uma duração para o bloqueio do usuário, ele será automaticamente desbloqueado quando esse tempo acabar. Para obter mais informações, consulte "[Bloquear um usuário em sua organização](/articles/blocking-a-user-from-your-organization)".

{% tip %}

**Dica**: as configurações que tenham sido removidas durante o bloqueio do usuário na organização (como status de colaborador, estrelas e inspeções) não são restauradas quando você desbloqueia o usuário.

{% endtip %}

## Desbloquear usuários em um comentário

1. Navegue até o comentário cujo autor você deseja desbloquear.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e depois em **Unblock user** (Desbloquear usuário). ![Ícone horizontal kebab e menu comment moderation (moderação de comentários) mostrando a opção unblock user (desbloquear usuário)](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Para confirmar que deseja desbloquear o usuário, clique em **OK**.

## Desbloquear usuários nas configurações da organização


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.block_users %}
1. Em "Blocked users" (Usuários bloqueados), clique em **Unblock** (Desbloquear) próximo ao usuário que deseja desbloquear. ![Botão Unblock user (Desbloquear usuário)](/assets/images/help/organizations/org-unblock-user-button.png)

## Leia mais

- "[Bloquear usuários da organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
- "[Bloquear usuários da sua conta pessoal](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[Desbloquear usuários da sua conta pessoal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
