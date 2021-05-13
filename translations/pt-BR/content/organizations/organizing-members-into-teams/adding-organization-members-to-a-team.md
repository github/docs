---
title: Adicionar integrantes da organização a uma equipe
intro: 'As pessoas com permissões de proprietário ou mantenedor de equipe podem adicionar integrantes da organização às equipes. Pessoas com permissões de proprietário também podem {% if currentVersion == "free-pro-team@latest" %}convidar os não integrantes a juntar-se a {% else %}adicionar não integrantes a {% endif %} uma equipe e à organização.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Acima da lista de integrantes da equipe, clique em **Adicionar um integrante**. ![Botão Add member (Adicionar integrante)](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

### Leia mais

- "[Sobre equipes](/articles/about-teams)"
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
