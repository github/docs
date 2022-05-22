---
title: Criar equipes
intro: Você pode criar equipes independentes ou aninhadas para gerenciar permissões de repositório e menções para grupos de pessoas.
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
Apenas os proprietários e mantenedores de uma equipe principal podem criar uma nova equipe secundária sob a principal. Os proprietários também podem restringir as permissões de criação para todas as equipes em uma organização. Para obter mais informações, consulte "[Configurar permissões de criação de equipes na organização](/articles/setting-team-creation-permissions-in-your-organization)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% if currentVersion == "free-pro-team@latest" %}
1. Opcionalmente, se sua conta de organização ou empresa usar a sincronização de equipes, para conectar um grupo de provedor de identidade à sua equipe, use o menu suspenso "Grupos de provedores de identidade" e selecione até 5 grupos de provedores de identidade. Para obter mais informações, consulte "[Sincronizando uma equipe com um grupo de provedores de identidade ](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)." ![Menu suspenso para escolher grupos de provedores de identidade](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
9. Se desejar, [forneça à equipe acesso aos repositórios da organização](/articles/managing-team-access-to-an-organization-repository).

### Leia mais

- "[Sobre equipes](/articles/about-teams)"
- "[Alterar a visibilidade da equipe](/articles/changing-team-visibility)"
- "[Mover uma equipe na hierarquia da organização](/articles/moving-a-team-in-your-organization-s-hierarchy)"
