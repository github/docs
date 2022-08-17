---
title: Criando uma conta corporativa
intro: 'Se você estiver usando {% data variables.product.prodname_ghe_cloud %} atualmente com uma única organização, você poderá criar uma conta corporativa para gerenciar de forma centralizada várias organizações.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Criar conta corporativa
---

## Sobre a criação da conta corporativa

{% data variables.product.prodname_ghe_cloud %} inclui a opção de criar uma conta corporativa, que permite a colaboração entre várias organizações e fornece aos administradores um único ponto de visibilidade e gestão. Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise.create-an-enterprise-account %} Se você pagar por fatura, você poderá criar uma conta corporativa em {% data variables.product.prodname_dotcom %}. Caso contrário, você pode [entrar em contato com nossa equipe de vendas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para criar uma conta corporativa para você.

An enterprise account is included with {% data variables.product.prodname_ghe_cloud %}. Creation of an enterprise account does not result in additional charges on your bill.

When you create an enterprise account that owns your existing organization on {% data variables.product.product_name %}, the organization's resources remain accessible to members at the same URLs. After you add your organization to the enterprise account, the following changes will apply to the organization.

- Your existing organization will automatically be owned by the enterprise account.
- {% data variables.product.company_short %} bills the enterprise account for usage within all organizations owned by the enterprise. The current billing details for the organization, including the organization's billing email address, will become billing details for the new enterprise account. Para obter mais informações, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- All current owners of your organization will become owners of the enterprise account, and all current billing managers of the organization will become billing managers of the new enterprise account. Para obter mais informações, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

For more information about the changes that apply to an organization after you add the organization to an enterprise, see "[Adding organizations to your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)."

## Criando uma conta corporativa em {% data variables.product.prodname_dotcom %}

Para criar uma conta corporativa, sua organização deve usar {% data variables.product.prodname_ghe_cloud %}.

Se você pagar por fatura, você pode criar uma conta corporativa diretamente por meio de {% data variables.product.prodname_dotcom %}. Se você atualmente não paga por fatura, você pode [entrar em contato com nossa equipe de vendas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para criar uma conta corporativa para você.


{% data reusables.organizations.billing-settings %}
1. Clique **- Atualizar para a conta corporativa**.

   ![Captura de tela do botão "Atualizar para uma conta corporativa"](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Em "Nome da empresa", digite um nome para a sua conta corporativa.

   ![Captura de tela do campo "Nome da empresa"](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Em "Slug da URL da empresa", digite um slug para a conta da sua empresa. Esse slug será usado na URL da sua empresa. Por exemplo, se você escolher `octo-business`, a URL da sua empresa será `https://github.com/enterprises/octo-enterprise`.

   ![Captura de tela do campo do "Slug da URL da empresa"](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Clique em **Confirmar e atualizar**.

   ![Captura de tela do botão "Confirmar e atualizar"](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Leia os avisos e clique em **Criar conta corporativa**.

   ![Captura de tela do botão "Criar conta corporativa"](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Próximas etapas

Depois que a conta corporativa for criada, recomendamos aprender mais sobre como as contas corporativas funcionam e definir as configurações e políticas. Para obter mais informações, siga o caminho de aprendizado "[Primeiros passos com a sua conta corporativa](/admin/guides#get-started-with-your-enterprise-account).
