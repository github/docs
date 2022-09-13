---
title: Exibir assinatura e uso da conta corporativa
intro: 'Você pode ver a assinatura atual {% ifversion ghec %}, {% endif %}o uso da licença{% ifversion ghec %}as faturas, o histórico de pagamentos e outras informações de cobrança{% endif %} da {% ifversion ghec %}conta empresarial{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
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
shortTitle: View subscription & usage
ms.openlocfilehash: 503f870542180cfe9ae088a161370b9370d36f1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145189635'
---
## Sobre a cobrança de contas corporativas

Você pode ter uma visão geral da {% ifversion ghec %}assinatura e do uso pago{% elsif ghes %}da licença{% endif %} da {% ifversion ghec %}sua{% elsif ghes %}da{% endif %} conta empresarial no {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, confira "[Como criar uma conta empresarial](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)".{% endif %}

Para {% data variables.product.prodname_enterprise %} clientes faturados{% ifversion ghes %} que usam {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}{% endif %}, cada fatura inclui as informações sobre os serviços cobrados para todos os produtos. Por exemplo, além do uso do {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, você pode ter um uso do {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. Você também pode ter uso em {% data variables.product.prodname_dotcom_the_website %}, como {% endif %}licenças pagas em organizações fora da conta corporativa, pacotes de dados para {% data variables.large_files.product_name_long %}ou assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}. Para obter mais informações sobre faturas, confira "[Como gerenciar faturas para sua empresa]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}".{% elsif ghes %}" na documentação do {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

{% ifversion ghec %}

Além dos proprietários da empresa, os gerentes de cobrança podem visualizar a assinatura e o uso da sua conta corporativa. Para obter mais informações, confira "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" e "[Como convidar pessoas para gerenciar sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".

{% endif %}

{% ifversion ghes %}

Caso deseje ter uma visão geral da sua assinatura e uso do {% data variables.product.prodname_enterprise %} e de todos os serviços relacionados no {% data variables.product.prodname_dotcom_the_website %}, confira "[Como ver a assinatura e o uso da sua conta corporativa](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" na documentação do {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Exibir assinatura e uso da conta corporativa

Você pode visualizar a assinatura e o uso para a sua empresa e fazer o download de um arquivo com detalhes da licença.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Em "Licenças de usuário", exiba o total de licenças, o número de licenças consumidas e a data de vencimento da sua assinatura.
  {% ifversion ghec %}![Informações de licença e assinatura nas configurações de cobrança da empresa](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![Informações de licença e assinatura nas configurações de cobrança da empresa](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Opcionalmente, para ver os detalhes sobre o uso da licença ou baixar um arquivo {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} com os detalhes da licença{% ifversion ghec %}, à direita de "Licenças de Usuário"{% endif %}, clique em **Exibir {% ifversion ghec %}detalhes{% elsif ghes %}usuários{% endif %}** ou {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Exportar uso da licença**{% endif %}.{% ifversion ghec %} ![Botão "Exibir detalhes" e botão com o ícone de download à direita de "Licenças de Usuário"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. Opcionalmente, para ver os detalhes de uso de outros recursos, na barra lateral esquerda, clique em **Cobrança**.
  ![Guia Cobrança na barra lateral das configurações da conta corporativa](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}
