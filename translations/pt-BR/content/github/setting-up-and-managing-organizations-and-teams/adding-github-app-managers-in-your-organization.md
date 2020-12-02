---
title: Adicionar gerentes do aplicativo GitHub em sua organização
intro: 'Os proprietários da organização podem conceder aos usuários a capacidade de gerenciar {% data variables.product.prodname_github_app %} específicos ou todos os {% data variables.product.prodname_github_app %}s da organização.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Para obter mais informações sobre as permissões de gerente do {% data variables.product.prodname_github_app %}, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization#github-app-managers)".

### Dar a um indivíduo a capacidade de gerenciar todos os {% data variables.product.prodname_github_app %}s possuídos pela organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "Management" (Gerenciamento), digite o nome de usuário da pessoa que deseja designar como um gerente do {% data variables.product.prodname_github_app %} na organização e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

### Dar a um indivíduo a capacidade de gerenciar um {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "
{% data variables.product.prodname_github_app %}s", clique no avatar do aplicativo ao qual você deseja adicionar um gerente de {% data variables.product.prodname_github_app %}.
![Selecione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Em "App managers" (Gerentes de app), digite o nome de usuário da pessoa que deseja designar como gerente do aplicativo GitHub e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %} para um app específico](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Sobre o {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
