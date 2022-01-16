---
title: Exibir assinatura e uso da conta corporativa
intro: 'Você pode ver a assinatura atual {% ifversion fpt %}, {% endif %}uso da licença{% ifversion fpt %}faturas, histórico de pagamentos e outras informações de faturamento{% endif %} para {% ifversion fpt %}conta corporativa{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners {% ifversion fpt %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: Visualizar assinatura & uso
---

## Sobre a cobrança de contas corporativas

Você pode ver a visão geral da {% ifversion fpt %}sua assinatura e da licença{% elsif ghes %}a paga{% endif %} usada para a {% ifversion fpt %}sua{% elsif ghes %}a{% endif %} conta corporativa em {% ifversion fpt %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

Para {% data variables.product.prodname_enterprise %} clientes faturados{% ifversion ghes %} que usam {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}{% endif %}, cada fatura inclui as informações sobre os serviços cobrados para todos os produtos. Por exemplo, além do seu uso para {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, você pode ter uso para {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt %}, {% elsif ghes %}. Você também pode ter uso em {% data variables.product.prodname_dotcom_the_website %}, como {% endif %}licenças pagas em organizações fora da conta corporativa, pacotes de dados para {% data variables.large_files.product_name_long %}ou assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}. Para obter mais informações sobre faturas, consulte "{% ifversion fpt %}[Gerenciar faturas para a sua empresa](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise).{% elsif ghes %}<a href="/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account" class="dotcom-only">Visualizando a assinatura e o uso da sua conta corporativa</a>" na documentação de {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

{% ifversion fpt %}

Além dos proprietários da empresa, os gerentes de cobrança podem visualizar a assinatura e o uso da sua conta corporativa. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" e "[Convidando pessoas para gerenciar a sua empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, consulte "[Conectando uma assinatura do Azure à sua empresa](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)".

{% endif %}

{% ifversion ghes %}

Se você deseja ver uma visão geral da sua assinatura e uso para {% data variables.product.prodname_enterprise %} e todos os serviços relacionados em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Visualizando a assinatura e o uso da conta corporativa](/free-pro-team@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" na documentação de {% data variables.product.prodname_dotcom_the_website %}.

{% endif %}

## Exibir assinatura e uso da conta corporativa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Em "Licenças de usuário", exiba o total de licenças, o número de licenças consumidas e a data de vencimento da sua assinatura.
  {% ifversion fpt %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Informações de assinaturas e licenças nas configurações de cobrança da empresa](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Opcionalmente, para visualizar as informações referentes à licença ou para fazer o download de um arquivo {% ifversion fpt %}CSV{% elsif ghes %}JSON{% endif %} com as informações da licença{% ifversion fpt %}, à direita de "Licenças do usuário"{% endif %}, clique em **Visualizar {% ifversion fpt %}details{% elsif ghes %}users{% endif %}** ou {% ifversion fpt %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Uso de licença de exportação**{% endif %}.{% ifversion fpt %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion fpt %}
1. Opcionalmente, para visualizar os detalhes de uso para outras funcionalidades, clique em **Cobrança**. ![Aba de faturamento na barra lateral de configurações da conta corporativa](/assets/images/help/business-accounts/settings-billing-tab.png)
{% endif %}
