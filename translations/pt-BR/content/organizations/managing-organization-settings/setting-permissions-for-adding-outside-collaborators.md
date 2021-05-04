---
title: Configurar permissões para adicionar colaboradores externos
intro: 'Para proteger os dados da organização e o o número de licenças pagas usadas, você pode permitir que somente proprietários convidem colaboradores externos para os repositórios da organização.'
product: '{% data reusables.gated-features.restict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Os proprietários da organização e integrantes com privilégios de administrador para um repositório podem convidar colaboradores externos para trabalhar no repositório. Você também pode restringir as permissões de convites de colaboradores externos para apenas proprietários de organizações.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Convites para o repositório", selecione **Permitir que os integrantes convidem colaboradores externos para repositórios desta organização**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. Clique em **Salvar**.
