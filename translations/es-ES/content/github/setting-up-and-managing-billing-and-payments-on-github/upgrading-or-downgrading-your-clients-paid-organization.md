---
title: Subir o bajar de categoría la organización paga de tu cliente
intro: Los gerentes de facturación pueden subir o bajar de categoría la organización paga de un cliente en cualquier momento.
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
topics:
  - Billing
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tips**:
- Antes de subir de categoría la organización de tu cliente, puedes [ver o actualizar el método de pago archivado para la organización](/articles/adding-or-editing-a-payment-method).
- Estas indicaciones son para subir o bajar de categoría organizaciones en la *suscripción por asiento*. Si tu cliente paga {% data variables.product.product_name %} utilizando un plan *por repositorio heredado*, puedes subir o [bajar de categoría](/articles/downgrading-your-github-subscription) su plan heredado o [cambiar su organización a un precio por asiento](/articles/upgrading-your-github-subscription).

{% endtip %}

### Subir de categoría la cantidad de asientos pagos de una organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

Después de agregar asientos, al método de pago archivado para la organización se le cobrará un monto prorrateado en función de la cantidad de asientos que agregues y la cantidad de tiempo que quede en tu ciclo de facturación.

### Bajar la categoría de la cantidad de asientos pagos de una organización a gratuita

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
