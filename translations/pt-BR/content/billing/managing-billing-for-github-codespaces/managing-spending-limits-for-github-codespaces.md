---
title: Como gerenciar os limites de gastos do GitHub Codespaces
intro: Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_github_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
redirect_from:
- /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: 562b4406c06370869b9ae185cedaa803700ad63e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111434"
---
## Sobre os limites de gastos do {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Depois de atingir o limite de gastos, a sua organização ou repositório não poderão mais criar novos codespaces, e não será possível iniciar os codespaces existentes. Todos os codespaces que ainda estiverem em execução não serão desativados. Se você não alterar o limite de gastos, você não será cobrado pelo valor que exceder o limite.

Para ver mais informações sobre os preços para o uso do {% data variables.product.prodname_codespaces %}, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% ifversion ghec %}
## Usando a sua assinatura do Azure
Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o seu ID de assinatura do Azure à sua conta corporativa para habilitar e pagar o uso de {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

## Como gerenciar o limite de gastos do {% data variables.product.prodname_codespaces %} para sua organização

Os proprietários e os gerentes de cobrança de organizações podem gerenciar o limite de gastos do {% data variables.product.prodname_codespaces %} para uma organização.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Como gerenciar o limite de gastos do {% data variables.product.prodname_codespaces %} para sua conta corporativa

Os proprietários e os gerentes de cobrança de empresas podem gerenciar o limite de gastos do {% data variables.product.prodname_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Acima de "Uso mensal do {% data variables.product.prodname_codespaces %}", clique em **Limite de Gastos**.
  ![Guia Limite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}
## Gerenciamento de notificações por e-mail e limite de gastos

As notificações de e-mail são enviadas para os proprietários de contas e gerentes de cobrança quando os gastos chegam a 50%, 75%, 90% e 100% do limite de gastos da sua conta. 

Você pode desabilitar essas notificações a qualquer momento navegando até a parte inferior da página **Limite de gastos**.

![Captura de tela das configurações de notificação de e-mail](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## Leitura adicional

- "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[Como gerenciar a cobrança de {% data variables.product.prodname_github_codespaces %} em sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
