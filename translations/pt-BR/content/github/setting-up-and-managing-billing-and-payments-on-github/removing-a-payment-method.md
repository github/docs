---
title: Remover uma forma de pagamento
intro: 'Se não estiver usando a forma de pagamento para as assinaturas pagas no {% data variables.product.prodname_dotcom %}, você poderá removê-la para deixar de armazená-la na conta.'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
topics:
  - Billing
---

Se estiver pagando a assinatura do {% data variables.product.product_name %} com um cupom e não estiver usando a forma de pagamento para qualquer outro [recurso ou produto pago](/articles/about-billing-on-github) no {% data variables.product.product_name %}, você poderá remover as informações do cartão de crédito ou do PayPal.

{% data reusables.dotcom_billing.coupon-expires %}

{% tip %}

**Dica:** se você [fizer downgrade da conta para um produto grátis](/articles/downgrading-your-github-subscription) e não tiver assinaturas de outros recursos ou produtos pagos, removeremos automaticamente suas informações de pagamento.

{% endtip %}

### Remover a forma de pagamento da conta pessoal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}

### Remover a forma de pagamento da organização

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}
