---
title: Configurar uma versão de avaliação do GitHub Enterprise Cloud
intro: 'Você pode avaliar o {% data variables.product.prodname_ghe_cloud %} gratuitamente.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Desafio da nuvem corporativa
---

{% data reusables.enterprise.ghec-cta-button %}


## Sobre o {% data variables.product.prodname_ghe_cloud %}

{% data reusables.organizations.about-organizations %}

Você pode usar organizações gratuitamente com {% data variables.product.prodname_free_team %}, que inclui recursos limitados. Para funcionalidades adicionais, como o logon único SAML (SSO), controle de acesso para {% data variables.product.prodname_pages %} e minutos de {% data variables.product.prodname_actions %} incluídos, você pode fazer a atualização para {% data variables.product.prodname_ghe_cloud %}. Para obter uma lista detalhada dos recursos disponíveis com {% data variables.product.prodname_ghe_cloud %}, consulte nossa página de [Preços](https://github.com/pricing).

{% data reusables.saml.saml-accounts %} Para obter mais informações, consulte "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">Sobre identidade e gerenciamento de acesso com o logon único SAML</a>".

{% data reusables.products.which-product-to-use %}

## Sobre as versões de avaliação do {% data variables.product.prodname_ghe_cloud %}

Você pode definir uma avaliação de 14 dias para avaliar {% data variables.product.prodname_ghe_cloud %}. Não há necessidade de fornecer um método de pagamento durante a avaliação, a menos que você adicione à sua organização aplicativos do {% data variables.product.prodname_marketplace %} que exijam um método de pagamento. Para obter mais informações, consulte "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Sobre a cobrança do {% data variables.product.prodname_marketplace %}</a>".

Sua versão de avaliação inclui 50 estações. Se precisar de mais estações para avaliar o {% data variables.product.prodname_ghe_cloud %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Ao final da avaliação, você poderá escolher um número diferente de estações.

As versões de avaliação também estão disponíveis para o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Configurar uma versão de avaliação do {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

## Configurar a versão de avaliação do {% data variables.product.prodname_ghe_cloud %}

Antes de testar {% data variables.product.prodname_ghe_cloud %}, você deverá estar conectado a uma conta de usuário. Se você ainda não tem uma conta de usuário em {% data variables.product.prodname_dotcom_the_website %}, você deverá criar uma. Para obter mais informações, consulte "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}</a>".

1. Acesse [{% data variables.product.prodname_dotcom %} para as empresas](https://github.com/enterprise).
1. Clique em **Iniciar teste grátis**. ![Botão "Iniciar teste grátisl"](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Clique em **Nuvem Corporativa**. ![Botão "Nuvem Corporativa"](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Siga as instruções para configurar seu teste.

## Explorar o {% data variables.product.prodname_ghe_cloud %}

Depois de configurar sua versão de avaliação, você pode explorar o {% data variables.product.prodname_ghe_cloud %} seguindo o [Guia de Ativação Enterprise](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

## Finalizar a versão de avaliação

Você pode comprar o {% data variables.product.prodname_enterprise %} ou fazer downgrade para o {% data variables.product.prodname_team %} em qualquer momento de sua avaliação.

Se você não comprar o {% data variables.product.prodname_enterprise %} ou o {% data variables.product.prodname_team %} antes de expirar sua versão de avaliação, sua organização será rebaixada para o {% data variables.product.prodname_free_team %} e perder acesso a ferramentas e recursos avançados incluídos apenas em produtos pagos, incluindo sites {% data variables.product.prodname_pages %} publicados a partir desses repositórios privados. Se você não planeja atualizar, para evitar a perda de acesso aos recursos avançados, transforme-os em repositórios públicos antes de sua versão de avaliação expirar. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/articles/setting-repository-visibility)".

Fazer downgrade para o {% data variables.product.prodname_free_team %} para organizações também desabilita quaisquer configurações SAML feitas durante o período de avaliação. Ao adquirir o {% data variables.product.prodname_enterprise %} ou o {% data variables.product.prodname_team %}, suas configurações SAML serão habilitadas novamente para os usuários da organização se autenticarem.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Em "{% data variables.product.prodname_ghe_cloud %} Free Trial" (Versão de avaliação grátis do {% data variables.product.prodname_ghe_cloud %}) clique em **Buy Enterprise** (Comprar versão Enterprise) ou **Downgrade to Team** (Fazer downgrade para versão Team). ![Botões comprar versão Enterprise e fazer downgrade para versão Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Siga as instruções para inserir seu método de pagamento e clique em **Submit** (Enviar).
