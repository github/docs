---
title: Gerenciar licenças para a assinatura do Visual Studio com o GitHub Enterprise
intro: 'Você pode gerenciar o licenciamento de {% data variables.product.prodname_enterprise %} para {% data variables.product.prodname_vss_ghe %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---
### Sobre o {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} é uma oferta combinada da Microsoft que permite que um assinante use {% data variables.product.prodname_enterprise %} e {% data variables.product.prodname_vs %}. {% data variables.product.prodname_vss_ghe %} está disponível na Microsoft nos termos do Contrato da Microsoft. Para obter mais informações, consulte [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) no site {% data variables.product.prodname_vs %}

Depois de atribuir uma licença de {% data variables.product.prodname_vss_ghe %} a um assinante, o integrante usará a parte {% data variables.product.prodname_enterprise %} da licença, juntando-se a uma organização na sua conta corporativa com uma conta de usuário no {% data variables.product.prodname_dotcom_the_website %}. Se o endereço de e-mail para a conta de usuário de um integrante corporativo em {% data variables.product.prodname_dotcom_the_website %} corresponde ao Nome Principal do Usuário (UPN) de um assinante da sua conta {% data variables.product.prodname_vs %} o {% data variables.product.prodname_vs %} assinante consumirá automaticamente uma licença para {% data variables.product.prodname_vss_ghe %}.

A quantidade total de suas licenças para a sua empresa em {% data variables.product.prodname_dotcom %} é a soma de qualquer licença padrão de {% data variables.product.prodname_enterprise %} e o número de licenças de assinatura {% data variables.product.prodname_vs %} que incluem acesso a {% data variables.product.prodname_dotcom %}. Se a conta de usuário de um integrante corporativo não corresponde ao endereço de e-mail de um assinante de {% data variables.product.prodname_vs %}, a licença que a conta de usuário consome não estará disponível para um assinante de {% data variables.product.prodname_vs %}.

Para obter mais informações sobre o {% data variables.product.prodname_enterprise %}, consulte "[Produtos do {% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)". Para obter mais informações sobre contas em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

### Pré-requisitos

1. Depois de comprar {% data variables.product.prodname_vss_ghe %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} e mencione "{% data variables.product.prodname_vss_ghe %}". Você trabalhará com a equipe de vendas para criar uma conta empresarial em {% data variables.product.prodname_dotcom_the_website %}. Se você já possui uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %}, ou se não tiver certeza, informe a nossa equipe de vendas.

2. Atribua licenças para {% data variables.product.prodname_vss_ghe %} aos assinantes em {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obter mais informações sobre a atribuição de licenças, consulte [Gerenciar assinaturas de {% data variables.product.prodname_vs %} com {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) na documentação da Microsoft.

3. Em {% data variables.product.prodname_dotcom_the_website %}, crie pelo menos uma organização pertencente à conta corporativa. Para obter mais informações, consulte "[Adicionar organizações à sua conta corporativa](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)".

### Convidar um assinante para usar {% data variables.product.prodname_enterprise %}

Para usar a parte da licença de {% data variables.product.prodname_enterprise %}, a conta de usuário assinante no {% data variables.product.prodname_dotcom_the_website %} deve ser ou tornar-se integrante de uma organização de propriedade da sua empresa em {% data variables.product.prodname_dotcom_the_website %}.

Os proprietários da organização podem convidar novos integrantes para uma organização por endereço de e-mail. O assinante pode aceitar o convite com uma conta de usuário existente em {% data variables.product.prodname_dotcom_the_website %} ou criar uma nova conta.

Embora não seja necessário, recomendamos que os proprietários da organização enviem um convite para o mesmo endereço de e-mail usado para o Nome Principal do Usuário (UPN) do assinante de {% data variables.product.prodname_vs %}. Quando o endereço de e-mail em {% data variables.product.product_name %} corresponder ao UPN do assinante, você poderá garantir que outro integrante da organização não reivindique a licença do assinante.

Para obter mais informações, consulte "[Convidar usuários para participar da sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization), "[Inscrever-se em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)" e "[Gerenciar preferências de e-mail](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)".

### Visualizar licenciamento de {% data variables.product.prodname_enterprise %}

Depois de atribuir uma licença para {% data variables.product.prodname_vss_ghe %} em {% data variables.product.prodname_vss_admin_portal_with_url %}, você pode visualizar o número de licenças de {% data variables.product.prodname_enterprise %} disponíveis para a sua conta corporativa. Para obter mais informações, consulte "[Exibir a assinatura e o uso de sua conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Você também pode ver convites pendentes de {% data variables.product.prodname_enterprise %} para inscritos em {% data variables.product.prodname_vss_admin_portal_with_url %}. A lista de convites pendentes inclui assinantes que ainda não são integrantes de pelo menos uma organização na sua conta corporativa. Para obter mais informações, consulte "[Visualizar pessoas na sua empresa](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)".

### Leia mais

- [Apresentar as assinaturas do Visual Studio com GitHub Enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) na documentação da Microsoft
