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
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183985'
---
{% data reusables.enterprise.ghec-cta-button %}


## Sobre o {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} é um plano para grandes empresas ou equipes que colaboram em {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} Para obter mais informações sobre contas, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Você pode usar organizações gratuitamente com {% data variables.product.prodname_free_team %}, que inclui recursos limitados. Para funcionalidades adicionais, como o logon único SAML (SSO), controle de acesso para {% data variables.product.prodname_pages %} e minutos de {% data variables.product.prodname_actions %} incluídos, você pode fazer a atualização para {% data variables.product.prodname_ghe_cloud %}. Para ver uma lista detalhada dos recursos disponíveis no {% data variables.product.prodname_ghe_cloud %}, confira nossa página [Preços](https://github.com/pricing).

Você pode configurar um teste de {% data variables.product.prodname_ghe_cloud %} para avaliar essas funcionalidades adicionais na conta de uma organização nova ou existente.

As versões de avaliação também estão disponíveis para o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como configurar uma avaliação do {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

{% data reusables.products.which-product-to-use %}

## Sobre as versões de avaliação do {% data variables.product.prodname_ghe_cloud %}

Você pode definir uma avaliação de 30 dias para avaliar o {% data variables.product.prodname_ghe_cloud %}. Não há necessidade de fornecer um método de pagamento durante a avaliação, a menos que você adicione à sua organização aplicativos do {% data variables.product.prodname_marketplace %} que exijam um método de pagamento. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)".

Sua versão de avaliação inclui 50 estações. Se precisar de mais estações para avaliar o {% data variables.product.prodname_ghe_cloud %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Ao final da avaliação, você poderá escolher um número diferente de estações.

{% data reusables.saml.saml-accounts %}

Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% data variables.product.prodname_emus %} não faz parte do teste grátis de {% data variables.product.prodname_ghe_cloud %}. Se você estiver interessado nos {% data variables.product.prodname_emus %}, entre em contato com a [equipe de Vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

## Configurar a versão de avaliação do {% data variables.product.prodname_ghe_cloud %}

Antes de testar {% data variables.product.prodname_ghe_cloud %}, você deverá estar conectado a uma conta pessoal. Se você ainda não tem uma conta pessoal em {% data variables.product.prodname_dotcom_the_website %}, você deverá criar uma. Para obter mais informações, confira "[Como se inscrever em uma nova conta do {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)".

1. Navegue até [{% data variables.product.prodname_dotcom %} para empresas](https://github.com/enterprise).
1. Clique em **Iniciar uma avaliação gratuita**.
   ![Botão "Iniciar uma avaliação gratuita"](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Clique em **Enterprise Cloud**.
   ![Botão "Enterprise Cloud"](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Siga as instruções para configurar seu teste.

## Explorar o {% data variables.product.prodname_ghe_cloud %}

Depois de configurar sua avaliação, você poderá explorar {% data variables.product.prodname_ghe_cloud %} seguindo a tarefa sugerida na guia "Visão geral" da sua organização. Se você já descartou as tarefas anteriormente, poderá acessá-las novamente clicando em **Introdução com tarefas sugeridas** na parte superior da página.

![Botão "Introdução com tarefas sugeridas"](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## Finalizar a versão de avaliação

Você pode comprar {% data variables.product.prodname_enterprise %} a qualquer momento durante o seu período de teste. A compra de {% data variables.product.prodname_enterprise %} irá finalizar o seu período de teste, removendo o máximo de 50 estações e dando início ao pagamento.

Se você não comprar {% data variables.product.prodname_enterprise %}, a avaliação continuará até o final do período de 30 dias. Não é possível encerrar a avaliação mais cedo. Quando a avaliação terminar, será feito o downgrade da organização. Se você usou uma organização existente para o teste, a organização será rebaixada para o produto que você estava usando antes do teste. Se você criou uma nova organização para o teste, a organização será rebaixada para {% data variables.product.prodname_free_team %}. 

A organização perderá o acesso a qualquer funcionalidade que não esteja incluída no novo plano, como recursos avançados, como o {% data variables.product.prodname_pages %} para repositórios privados. Se você não planeja atualizar, para evitar perder o acesso a funcionalidades avançadas, considere tornar públicos os repositórios afetados antes da sua avaliação terminar. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/articles/setting-repository-visibility)".

A desclassificação também desabilita todas as configurações de SAML configuradas durante o período de avaliação. Se você comprar {% data variables.product.prodname_enterprise %} posteriormente, as suas configurações do SAML serão novamente habilitadas para que os usuários da sua organização possam efetuar a autenticação.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. Em "Avaliação Gratuita do {% data variables.product.prodname_ghe_cloud %}", clique em **Comprar Enterprise** ou **Fazer Downgrade para o Team**.
  ![Botões Comprar Enterprise e Fazer Downgrade para o Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Siga os prompts para inserir a forma de pagamento e clique em **Enviar**.
