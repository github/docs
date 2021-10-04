---
title: Enabling Codespaces for your organization
shortTitle: Enabling Codespaces
intro: 'Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## About enabling {% data variables.product.prodname_codespaces %} for your organization

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar cdespaces.

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace.
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#configuring-which-users-in-your-organization-can-use-codespaces). You can choose allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

By default, a codespace can only access the repository from which it was created. Se você quiser que os codespaces na sua organização possam acessar outros repositórios da organização que o criador do codespace possa acessar, consulte "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione uma das seguintes opções:

   * **Permitir para todos os usuários** para permitir que todos os integrantes da sua organização usem {% data variables.product.prodname_codespaces %}.
   * **Usuários selecionados** para selecionar integrantes específicos da organização para usar {% data variables.product.prodname_codespaces %}.

   ![Botões de opção para "Permissões do usuário"](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
