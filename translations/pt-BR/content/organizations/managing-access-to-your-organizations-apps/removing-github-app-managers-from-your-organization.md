---
title: Remover gerentes do aplicativo GitHub da organização
intro: 'Os proprietários da organização podem revogar as permissões de gerente do {% data variables.product.prodname_github_app %} concedidas a um integrante da organização.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Para obter mais informações sobre as permissões de gerente do {% data variables.product.prodname_github_app %}, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization#github-app-managers)".

### Remover as permissões de gerente do {% data variables.product.prodname_github_app %} em toda a organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "Management" (Gerenciamento), encontre o nome de usuário da pessoa da qual deseja remover as permissões de gerente do {% data variables.product.prodname_github_app %} e clique em **Revoke** (Revogar). ![Revogue as permissões de gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Remover as permissões de gerente do {% data variables.product.prodname_github_app %} de um {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "{% data variables.product.prodname_github_app %}s", clique no avatar do app no qual deseja remover um gerente do {% data variables.product.prodname_github_app %}. ![Selecione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Em "App managers" (Gerentes do app), encontre o nome de usuário da pessoa da qual deseja remover as permissões de gerente do {% data variables.product.prodname_github_app %} e clique em **Revoke** (Revogar). ![Revogue as permissões de gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Sobre o {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
