---
title: Criar equipes
intro: Você pode criar equipes independentes ou aninhadas para gerenciar permissões de repositório e menções para grupos de pessoas.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

Apenas os proprietários e mantenedores de uma equipe principal podem criar uma nova equipe secundária sob a principal. Os proprietários também podem restringir as permissões de criação para todas as equipes em uma organização. Para obter mais informações, consulte "[Configurar permissões de criação de equipes na organização](/articles/setting-team-creation-permissions-in-your-organization)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% ifversion ghec %}
1. Opcionalmente, se sua conta da organização ou empresa usa a sincronização de equipes ou sua empresa usa {% data variables.product.prodname_emus %}, conecte um grupo do provedor de identidade à sua equipe.
    * Se a sua empresa usar o {% data variables.product.prodname_emus %}, use o menu suspenso "Grupos de provedor de identidade" e selecione um único grupo de provedores de identidade para conectar-se à nova equipe. Para mais informações, consulte "[Gerenciar associações de equipe com grupos de provedor de identidade](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".
    * Se a conta da sua organização ou empresa usar a sincronização de equipe, use o menu suspenso "Grupos de provedor de identidade e selecione até cinco grupos de provedores de identidade para conectar-se à nova equipe. Para obter mais informações, consulte "[Sincronizando uma equipe com um grupo de provedores de identidade ](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)." ![Menu suspenso para escolher grupos de provedores de identidade](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
1. Se desejar, [forneça à equipe acesso aos repositórios da organização](/articles/managing-team-access-to-an-organization-repository).

## Leia mais

- "[Sobre equipes](/articles/about-teams)"
- "[Alterar a visibilidade da equipe](/articles/changing-team-visibility)"
- "[Mover uma equipe na hierarquia da organização](/articles/moving-a-team-in-your-organization-s-hierarchy)"
