---
title: Gerenciar licenças para a assinatura do Visual Studio com o GitHub Enterprise
intro: 'Você pode gerenciar o licenciamento de {% data variables.product.prodname_enterprise %} para {% data variables.product.prodname_vss_ghe %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
---

### Sobre o {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} é uma oferta combinada da Microsoft que permite que um assinante use {% data variables.product.prodname_enterprise %} e {% data variables.product.prodname_vs %}. {% data variables.product.prodname_vss_ghe %} está disponível na Microsoft nos termos do Contrato da Microsoft. Para obter mais informações, consulte [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) no site {% data variables.product.prodname_vs %}

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise account with a user account on {% data variables.product.prodname_dotcom_the_website %}. If the email address for the user account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Primary Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.product.prodname_vss_ghe %}.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the user account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the user account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

Para obter mais informações sobre o {% data variables.product.prodname_enterprise %}, consulte "[Produtos do {% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)". Para obter mais informações sobre contas em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

### Pré-requisitos

1. Depois de comprar {% data variables.product.prodname_vss_ghe %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} e mencione "{% data variables.product.prodname_vss_ghe %}". Você trabalhará com a equipe de vendas para criar uma conta empresarial em {% data variables.product.prodname_dotcom_the_website %}. Se você já possui uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}, ou se não tiver certeza, informe a nossa equipe de vendas.

2. Atribua licenças para {% data variables.product.prodname_vss_ghe %} aos assinantes em {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obter mais informações sobre a atribuição de licenças, consulte [Gerenciar assinaturas de {% data variables.product.prodname_vs %} com {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) na documentação da Microsoft.

3. Em {% data variables.product.prodname_dotcom_the_website %}, crie pelo menos uma organização pertencente à conta corporativa. Para obter mais informações, consulte "[Adicionar organizações à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)".

### Convidar um assinante para usar {% data variables.product.prodname_enterprise %}

To use the {% data variables.product.prodname_enterprise %} portion of the license, the subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}.

Organization owners can invite new members to an organization by email address. The email address that the organization owner invites must match the {% data variables.product.prodname_vs %} subscriber's User Primary Name (UPN), which should be an email address. The subscriber can accept the invitation with an existing user account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

For more information, see "[Inviting users to join your organization](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)," "[Signing up for {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)," and "[Managing email preferences](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)."

### Visualizar licenciamento de {% data variables.product.prodname_enterprise %}

Depois de atribuir uma licença para {% data variables.product.prodname_vss_ghe %} em {% data variables.product.prodname_vss_admin_portal_with_url %}, você pode visualizar o número de licenças de {% data variables.product.prodname_enterprise %} disponíveis para a sua conta corporativa. Para obter mais informações, consulte "[Exibir a assinatura e o uso de sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Você também pode ver convites pendentes de {% data variables.product.prodname_enterprise %} para inscritos em {% data variables.product.prodname_vss_admin_portal_with_url %}. A lista de convites pendentes inclui assinantes que ainda não são integrantes de pelo menos uma organização na sua conta corporativa. Para obter mais informações, consulte "[Visualizar pessoas na sua empresa](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)".

### Leia mais

- [Apresentar as assinaturas do Visual Studio com GitHub Enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) na documentação da Microsoft
