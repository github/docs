---
title: Gerenciar o limite de gastos do GitHub Codespaces
intro: 'Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_github_codespaces %}.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159534'
---
## Sobre o limite de gastos do {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %} Para saber mais, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

Depois de atingir o limite de gastos, não será mais possível criar codespaces nem iniciar os existentes. Quaisquer codespaces existentes que ainda estejam em execução serão encerrados em pouco tempo, mas você não será cobrado pelo uso depois de atingir o limite de gastos.

{% ifversion ghec %}
## Usando a sua assinatura do Azure
Se você comprou o {% data variables.product.prodname_enterprise %} por meio do Microsoft Enterprise Agreement, será possível conectar a ID da assinatura do Azure à conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

## Gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %} para sua conta pessoal

É possível definir um limite de gastos para o {% data variables.product.prodname_github_codespaces %} com relação a sua conta pessoal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## Gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %} para sua conta da organização

Proprietários de organizações e gerentes de cobrança podem gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %} para uma organização.

{% note %}

**Observação**: as organizações que pertencem a uma conta corporativa não podem especificar o próprio limite de gastos, pois isso é especificado nas configurações corporativas.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %} para sua conta corporativa

Proprietários de empresas e gerentes de cobrança podem gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Clique em **Limite de gastos**.

   ![Guia de limite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}

## Gerenciamento de notificações por e-mail e limite de gastos

As notificações por email são enviadas aos proprietários de contas e gerentes de cobrança quando os gastos atingem 75%, 90% e 100% do limite de gastos de uma conta. 

É possível desativar essas notificações a qualquer momento navegando até a parte inferior da página "Cobrança e planos/Limites de gastos mensais" e desmarcando a caixa de seleção **Alertas de limites de gastos**.

Somente para contas pessoais, também é possível optar por desativar as notificações por email enviadas ao ter utilizado 75%, 90% e 100% do uso gratuito incluído na conta pessoal. Para isso, desmarque a caixa de seleção **Alertas de recursos incluídos**.

![Captura de tela das configurações de notificação de e-mail](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Leitura adicional

- "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[Como gerenciar o custo do {% data variables.product.prodname_github_codespaces %} em sua organização](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
