---
title: Eliminar un método de pago
intro: 'Si no estás usando tu método de pago para ninguna suscripción paga en {% data variables.product.prodname_dotcom %}, puedes eliminar el método de pago para que no siga almacenado en tu cuenta.'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
---

Si vas a pagar tu {% data variables.product.product_name %} suscripción con un cupón y no vas a usar tu método de pago para ninguna [otra función o producto pago](/articles/about-billing-on-github) en {% data variables.product.product_name %}, puedes eliminar tu información de tarjeta de crédito o de PayPal.

{% tip %}

**Sugerencia:** Si [bajas la categoría de tu cuenta a producto gratuito](/articles/downgrading-your-github-subscription) y no tienes suscripciones a ninguna otra función o producto pago, eliminaremos automáticamente tu información de pago.

{% endtip %}

### Eliminar el método de pago de tu cuenta personal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}

### Eliminar el método de pago de tu organización

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}
