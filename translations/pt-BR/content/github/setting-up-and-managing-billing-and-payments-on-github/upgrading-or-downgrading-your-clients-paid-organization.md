---
title: Atualizar ou fazer downgrade da organização paga do cliente
intro: Os gerentes de cobrança podem atualizar ou fazer downgrade da organização paga de um cliente a qualquer momento.
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.organizations.reseller-ask-to-become-billing-manager }}

{% tip %}

**Dicas**:
- Antes de atualizar a organização do cliente, você pode [exibir ou atualizar a forma de pagamento no arquivo da organização](/articles/adding-or-editing-a-payment-method).
- Essas instruções são para atualizar e fazer downgrade de organizações na *assinatura por estação*. Se o cliente pagar pelo {{ site.data.variables.product.product_name }} usando um plano *por repositório herdado*, atualize ou [façar downgrade](/articles/downgrading-your-github-subscription) do plano herdado dele ou [troque a organização dele para preço por estação](/articles/upgrading-your-github-subscription).

{% endtip %}

### Atualizar o número de estações pagas de uma organização

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.add-seats }}
{{ site.data.reusables.dotcom_billing.number-of-seats }}
{{ site.data.reusables.dotcom_billing.confirm-add-seats }}

Depois que você adicionar as estações, será cobrado na forma de pagamento registrada no arquivo da organização um valor proporcional com base no número de estações que você está adicionando e no tempo restante no ciclo de cobrança.

### Fazer downdgrade do número de estações pagas de uma organização para gratuitas

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.downgrade-org-to-free }}
{{ site.data.reusables.dotcom_billing.confirm_cancel_org_plan }}
