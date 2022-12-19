---
title: Atualizar ou fazer downgrade da organização paga do cliente
intro: Os gerentes de cobrança podem atualizar ou fazer downgrade da organização paga de um cliente a qualquer momento.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083400'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Dicas**:
- Antes de fazer upgrade da organização do cliente, você pode [ver ou atualizar a forma de pagamento registrada para a organização](/articles/adding-or-editing-a-payment-method).
- Essas instruções destinam-se ao upgrade ou ao downgrade de organizações na *assinatura por estação*. Se o cliente pagar pelo {% data variables.product.product_name %} usando um plano *herdado por repositório*, você poderá fazer upgrade ou [downgrade](/articles/downgrading-your-github-subscription) do plano herdado ou [mudar a organização para o preço por estação](/articles/upgrading-your-github-subscription).

{% endtip %}

## Atualizar o número de estações pagas de uma organização

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

Depois que você adicionar as estações, será cobrado na forma de pagamento registrada no arquivo da organização um valor proporcional com base no número de estações que você está adicionando e no tempo restante no ciclo de cobrança.

## Fazer downdgrade do número de estações pagas de uma organização para gratuitas

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
