---
title: Gerenciando seu limite de gastos para o GitHub Packages (Pacotes do GitHub)
intro: 'Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Your spending limit
ms.openlocfilehash: 0919283804124e2e925793dd3d4969b80f46ed30
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884146'
---
## Sobre limites de gastos para o {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Para obter mais informações sobre os preços de uso do {% data variables.product.prodname_registry %}, confira "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% ifversion ghec %} Se você comprou o {% data variables.product.prodname_enterprise %} por meio de um Contrato Enterprise da Microsoft, conecte sua ID de Assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_registry %} além dos valores, incluindo com a sua conta. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

Assim que você definir um limite de gastos diferente de $ 0, você será responsável por todos os excedentes existentes no período de cobrança atual. Por exemplo, se a sua organização usa o {% data variables.product.prodname_team %}, não permite excessos, e publica uma nova versão de um pacote privado que aumenta seu uso de armazenamento para o mês de 1.9GB para 2.1GB, a publicar a versão, você usará um pouco mais de armazenamento do que os 2GB que seu produto inclui.

Como você não ativou os excessos, sua próxima tentativa de publicar uma versão do pacote irá falhar. Você não receberá uma fatura pelo excesso de 0.1GB naquele mês. No entanto, se você habilitar os excedentes, a sua primeira conta incluirá o 0,1 GB do excedente existente para o ciclo de cobrança atual, bem como qualquer superação adicional que você acumular.

## Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua conta pessoal

Qualquer um pode gerenciar o limite de gastos do {% data variables.product.prodname_registry %} da própria conta pessoal.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua organização

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_registry %} para uma organização.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_registry %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Acima de "{% data variables.product.prodname_actions %} e uso mensal dos Pacotes", clique em **Limite de Gastos**.
  ![Guia Limite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Gerenciamento de notificações por e-mail e limite de gastos
{% data reusables.billing.email-notifications %}
