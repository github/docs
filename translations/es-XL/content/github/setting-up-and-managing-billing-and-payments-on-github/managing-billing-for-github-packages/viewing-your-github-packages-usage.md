---
title: Visualizar el uso de tu GitHub Packages
intro: 'Puedes ver los detalles de uso de almacenamiento y transferencia de datos para {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
---
### Visualizar el uso de {% data variables.product.prodname_registry %} para tu cuenta de usuario

Cualquiera puede ver el uso de {% data variables.product.prodname_registry %} para su cuenta de usuario personal.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizar el uso de {% data variables.product.prodname_registry %} para tu organización

Organization owners and billing managers can view {% data variables.product.prodname_registry %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_registry %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizar el uso de {% data variables.product.prodname_registry %} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_registry %} para una cuenta empresarial.

{% note %}

**Nota:** Los detalles de facturación para cuentas empresariales únicamente resumen el uso de almacenamiento de datos por organización. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_registry %}", visualiza los detalles de uso de transferencia de datos para cada organización en tu cuenta empresarial. ![Detalles de uso de transferencia de datos](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
