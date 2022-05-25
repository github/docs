---
title: Exibir assinatura e uso da conta corporativa
intro: 'Você pode ver a assinatura atual {% ifversion ghec %}, {% endif %}uso da licença{% ifversion ghec %}faturas, histórico de pagamentos e outras informações de faturamento{% endif %} para {% ifversion ghec %}conta corporativa{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: Visualizar assinatura & uso
---

## Sobre a cobrança de contas corporativas

Você pode ver uma visão geral da{% ifversion ghec %}sua assinatura e uso licença paga{% elsif ghes %}{% endif %} para {% ifversion ghec %}sua{% elsif ghes %}a{% endif %} conta corporativa em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte[Criando uma conta corporativa](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)."{% endif %}

Para {% data variables.product.prodname_enterprise %} clientes faturados{% ifversion ghes %} que usam {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}{% endif %}, cada fatura inclui as informações sobre os serviços cobrados para todos os produtos. Por exemplo, além do seu uso para {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, você pode ter uso para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. Você também pode ter uso em {% data variables.product.prodname_dotcom_the_website %}, como {% endif %}licenças pagas em organizações fora da conta corporativa, pacotes de dados para {% data variables.large_files.product_name_long %}ou assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}. Para obter mais informações sobre faturas, consulte "[Gerenciando faturas para a sua empresa]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}. "{% elsif ghes %}" na documentação de {% data variables.product.prodname_dotcom_the_website %} .{% endif %}

{% ifversion ghec %}

Além dos proprietários da empresa, os gerentes de cobrança podem visualizar a assinatura e o uso da sua conta corporativa. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" e "[Convidando pessoas para gerenciar a sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, consulte "[Conectando uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".

{% endif %}

{% ifversion ghes %}

Se você deseja ver uma visão geral da sua assinatura e uso para {% data variables.product.prodname_enterprise %} e todos os serviços relacionados em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Visualizando a assinatura e o uso da conta corporativa](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" na documentação de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Exibir assinatura e uso da conta corporativa

Você pode visualizar a assinatura e o uso para a sua empresa e fazer o download de um arquivo com detalhes da licença.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Em "Licenças de usuário", exiba o total de licenças, o número de licenças consumidas e a data de vencimento da sua assinatura.
  {% ifversion ghec %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Informações de assinaturas e licenças nas configurações de cobrança da empresa](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Opcionalmente, para ver as informações sobre o uso da licença ou fazer o download de um arquivo {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} com informações da da licença{% ifversion ghec %}, à direita de "Licenças de Usuário"{% endif %}, clique em **Ver {% ifversion ghec %}detalhes{% elsif ghes %}usuários{% endif %}** ou {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Exportar uso da licença**{% endif %}.{% ifversion ghec %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. Opcionalmente, para visualizar os detalhes de uso para outras funcionalidades, clique em **Cobrança**. ![Aba de faturamento na barra lateral de configurações da conta corporativa](/assets/images/help/business-accounts/settings-billing-tab.png)
{% endif %}
