---
title: Visualizar el uso de tu GitHub Actions
intro: 'Puedes ver los detalles de tu uso de minutos y almacenamiento para {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

También puedes ver los minutos de ejecución facturables para los jobs en una ejecución de flujo de trabajo individual. Para obtener más información, consulta la sección "[Visualizar el tiempo de ejecución del job](/actions/managing-workflow-runs/viewing-job-execution-time)".

### Visualizar el uso de {% data variables.product.prodname_actions %} para tu cuenta de usuario

Cualquiera puede ver el uso de {% data variables.product.prodname_actions %} para su cuenta de usuario personal.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizar el uso de {% data variables.product.prodname_actions %} para tu organización

Los propietarios de la organización y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_actions %} para una organización. Para organizaciones que gestione una cuenta empresarial, únicamente los propietarios de éstas pueden ver el uso de {% data variables.product.prodname_actions %} en la página de facturación de la misma.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizar el uso de {% data variables.product.prodname_actions %} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_actions %} para una cuenta empresarial.

{% note %}

**Nota:** Los detalles de facturación para las cuentas empresariales no resumen el uso de los minutos para cada sistema operativo. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "
{% data variables.product.prodname_actions %}", visualiza los detalles de uso de las transferencias de datos clasificados por organización en tu cuenta empresarial.
  ![Detalles del uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
