---
title: Adicionar gerentes do aplicativo GitHub em sua organização
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Adicionar gerentes do aplicativo GitHub
---

Para obter mais informações sobre as permissões de gerente do {% data variables.product.prodname_github_app %}, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization#github-app-managers)".

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "Management" (Gerenciamento), digite o nome de usuário da pessoa que deseja designar como um gerente do {% data variables.product.prodname_github_app %} na organização e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Dar a um indivíduo a capacidade de gerenciar um {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for. ![Selecione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Em "App managers" (Gerentes de app), digite o nome de usuário da pessoa que deseja designar como gerente do aplicativo GitHub e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %} para um app específico](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt %}
## Leia mais

- "[Sobre o {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
