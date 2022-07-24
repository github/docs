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

Uma conta corporativa está incluída em {% data variables.product.prodname_ghe_cloud %}. Portanto, a criação de uma não afetará a sua conta.

Ao criar uma conta corporativa, a organização existente será automaticamente propriedade da conta corporativa. Todos os proprietários atuais da sua organização irão tornar-se proprietários da conta corporativa. Todos os gerentes de cobrança atuais da organização irão tornar-se gerentes de cobrança da nova conta corporativa. Os detalhes de cobrança atuais da organização, incluindo o endereço de e-mail de cobrança da organização, irão tornar-se detalhes de cobrança da conta corporativa.

Se a organização estiver conectada a {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} por meio de {% data variables.product.prodname_github_connect %}, atualizar a organização para uma conta corporativa **não irá** atualizar a conexão. Se você deseja se conectar à nova conta corporativa, você deverá desabilitar e reabilitar {% data variables.product.prodname_github_connect %}.

- "[Gerenciando {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_server %}
- "[Gerenciando {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação de {% data variables.product.prodname_ghe_managed %}

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
