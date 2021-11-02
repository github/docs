---
title: Adicionar gerentes do aplicativo GitHub em sua organização
intro: 'Os proprietários da organização podem conceder aos usuários a capacidade de gerenciar alguns ou todos os {% data variables.product.prodname_github_apps %} pertencentes à organização.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Adicionar gerentes do aplicativo GitHub
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## Dar a alguém a capacidade de gerenciar todos os {% data variables.product.prodname_github_apps %} pertencentes à organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "Management" (Gerenciamento), digite o nome de usuário da pessoa que deseja designar como um gerente do {% data variables.product.prodname_github_app %} na organização e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/add-github-app-manager.png)

## Dar a um indivíduo a capacidade de gerenciar um {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "{% data variables.product.prodname_github_apps %}", clique no avatar do aplicativo ao qual você deseja adicionar um gerente de {% data variables.product.prodname_github_app %}. ![Selecione {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Em "App managers" (Gerentes de app), digite o nome de usuário da pessoa que deseja designar como gerente do aplicativo GitHub e clique em **Grant** (Conceder). ![Adicionar um gerente do {% data variables.product.prodname_github_app %} para um app específico](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## Leia mais

- "[Sobre o {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
