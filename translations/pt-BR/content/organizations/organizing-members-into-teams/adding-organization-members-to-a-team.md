---
title: Adicionar integrantes da organização a uma equipe
intro: 'As pessoas com permissões de proprietário ou mantenedor de equipe podem adicionar integrantes da organização às equipes. As pessoas com permissões de proprietário também podem {% ifversion fpt or ghec %}convidar não integrantes para ingressar em{% else %}adicionar não integrantes a{% endif %} uma equipe e na organização.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Adicionar integrantes a uma equipe
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Acima da lista de integrantes da equipe, clique em **Adicionar um integrante**. ![Botão Add member (Adicionar integrante)](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Leia mais

- "[Sobre equipes](/articles/about-teams)"
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
