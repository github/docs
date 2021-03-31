---
title: Movendo uma equipe na hierarquia da organização
intro: 'Mantenedores de equipes e proprietários de organizações podem encaixar uma equipe abaixo de uma equipe principal, ou ainda, alterar ou remover uma principal da equipe aninhada.'
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Proprietários de organizações podem mudar a principal de qualquer equipe. Mantenedores de equipes podem alterar a principal de uma equipe se forem mantenedores da equipe secundária e da equipe principal. Mantenedores de equipe sem permissões de mantenedor na equipe secundária podem solicitar para adicionar uma equipe principal ou secundária. Para obter mais informações, consulte "[Solicitar adição ou alteraração de uma equipe principal](/articles/requesting-to-add-or-change-a-parent-team)" e "[Solicitar adição de uma equipe secundária](/articles/requesting-to-add-a-child-team)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Dicas:**
- Você não pode alterar uma equipe principal para equipe secreta. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".
- Você não pode encaixar uma equipe principal sob uma de suas equipes secundárias.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. Na lista de equipes, clique no nome da equipe cuja principal você deseja alterar. ![Lista das equipes da organização](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. Use o menu suspenso para escolher uma equipe principal ou para remover uma principal existente e selecione **Clear selected value** (Limpar valor selecionado). ![Menu suspenso listando as equipes da organização](/assets/images/help/teams/choose-parent-team.png)
7. Clique em **Atualizar**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Clique em **Confirm new parent team** (Confirmar nova equipe principal). ![Caixa de diálogo modal com informações sobre as alterações nas permissões de acesso ao repositório](/assets/images/help/teams/confirm-new-parent-team.png)

### Leia mais

- "[Sobre equipes](/articles/about-teams)"
