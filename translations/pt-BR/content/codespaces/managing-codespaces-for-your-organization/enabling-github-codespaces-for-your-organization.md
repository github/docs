---
title: Habilitando o GitHub Codespaces para sua organização
shortTitle: 'Habilite {% data variables.product.prodname_codespaces %}'
intro: 'You can control which users in your organization can use {% data variables.product.prodname_github_codespaces %} at the organization''s expense.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
---

## Sobre habilitar {% data variables.product.prodname_github_codespaces %} para a sua organização

Organization owners can control which users in your organization can create and use codespaces at the organization's expense.

Only people who can clone a repository can create a codespace for that repository. To allow people to create codespaces for repositories owned by your organization, you must:

- Ensure that users have at least write access to the repositories where they want to use a codespace. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository). "
- Certifique-se de que a sua organização não tem um endereço IP permitir a lista habilitada. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}"{% endif %}

To allow people to create codespaces for which your organization will be billed, you must:

- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Choose who can create codespaces that are billed to your organization](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %}
{% note %}

**Nota:** Se você for um educador ou professor verificado, você deverá habilitar {% data variables.product.prodname_codespaces %} a partir de um {% data variables.product.prodname_classroom %} para usar o seu benefício de educação de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Usando os codespaces do GitHub com GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %}
{% endif %}

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. If you want codespaces in your organization to be able to access other organization repositories that the codespace creator can access, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."

## Choose who can create codespaces that are billed to your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "Billing," select one of the following options:

   * **Disabled** - Your organization will not be charged for codespace usage. {% data variables.product.prodname_codespaces %} created for your organization's repositories will be billed to the individual users who create them.
   * **Selected members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by selected members will be billed to the organization.
   * **All members** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by members of your organization will be billed to the organization.
   * **All members and outside collaborators** - {% data variables.product.prodname_codespaces %} created for your organization's repositories by organization members and outside collaborators will be billed to the organization.

   ![Radio buttons for "Billing"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Note:** When you select **All members and outside collaborators**,  all outside collaborators who have been added to specific repositories can create and use {% data variables.product.prodname_codespaces %} for those repositories, and your organization will be billed for this usage. Para obter mais informações sobre como gerenciar colaboradores externos, consulte "[Sobre colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Clique em **Salvar**.
1. If you chose **Selected members**, an input box is displayed for you to enter the names of users you want to select.

   ![Input box for selecting users](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

You can prevent the creation and use of codespaces billable to your organization.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "Billing," select **Disabled**.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
