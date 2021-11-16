---
title: Habilitando codespaces para a sua organização
shortTitle: Habilitando codespaces
intro: 'Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## Sobre habilitar {% data variables.product.prodname_codespaces %} para a sua organização

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar cdespaces.

Para usar codespaces na sua organização, você deve fazer o seguinte:

- Certifique-se de que os usuários tenham [pelo menos acesso de gravação](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) nos repositórios onde desejam usar um codespace.
- [Habilitar {% data variables.product.prodname_codespaces %} para os usuários da sua organização](#configuring-which-users-in-your-organization-can-use-codespaces). Você pode escolher permitir {% data variables.product.prodname_codespaces %} para usuários selecionados ou apenas para usuários específicos.
- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. Se você quiser que os codespaces na sua organização possam acessar outros repositórios da organização que o criador do codespace possa acessar, consulte "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Habilitar {% data variables.product.prodname_codespaces %} para os usuários na sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione uma das seguintes opções:

   * **Permitir para todos os usuários** para permitir que todos os integrantes da sua organização usem {% data variables.product.prodname_codespaces %}.
   * **Usuários selecionados** para selecionar integrantes específicos da organização para usar {% data variables.product.prodname_codespaces %}.

   ![Botões de opção para "Permissões do usuário"](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione **Desabilitado**.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
