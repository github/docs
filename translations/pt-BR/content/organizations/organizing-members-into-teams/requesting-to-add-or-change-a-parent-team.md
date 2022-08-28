---
title: Solicitar a adição ou alteração de uma equipe principal
intro: 'Se você tiver permissões de mantenedor em uma equipe, poderá solicitar o aninhamento da sua equipe abaixo de uma equipe principal na hierarquia da organização.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Quando você solicita a adição ou alteração da equipe principal, uma solicitação é enviada aos mantenedores da equipe principal. Quando um mantenedor da nova equipe principal aprova a solicitação, sua equipe é aninhada como uma equipe secundária abaixo da equipe principal na hierarquia da organização.

Se você for proprietário da organização ou tiver permissões de mantenedor de equipe na equipe secundária e na equipe principal, poderá adicionar a equipe principal sem solicitar aprovação ou alterar a equipe principal na página de configurações da equipe. Para obter mais informações, consulte "[Mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. Na lista de equipes, clique no nome da equipe que deseja aninhar abaixo de uma equipe principal. ![Lista das equipes da organização](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. Em "Parent team" (Equipe principal), use o menu suspenso "Select parent team" (Selecionar equipe principal) e clique no nome da nova equipe principal. ![Menu suspenso listando as equipes da organização](/assets/images/help/teams/choose-parent-team.png)
7. Clique em **Save changes** (Salvar alterações).
{% data reusables.repositories.changed-repository-access-permissions %}
9. Clique em **Confirm changes** (Confirmar alterações) para enviar uma solicitação de adição ou alteração da equipe principal. ![Caixa de diálogo modal com informações sobre as alterações nas permissões de acesso ao repositório](/assets/images/help/teams/confirm-new-parent-team.png)

### Leia mais

- "[Sobre equipes](/articles/about-teams)"
- "[Mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Solicitar a adição de uma equipe secundária](/articles/requesting-to-add-a-child-team)"
