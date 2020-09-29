---
title: Visualizar el uso de tu GitHub Actions
intro: 'Puedes ver los detalles de tu uso de minutos y almacenamiento para {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

También puedes ver los minutos de ejecución facturables para los jobs en una ejecución de flujo de trabajo individual. Para obtener más información, consulta la sección "[Administrar la ejecución de un flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)".

### Visualizar el uso de {% data variables.product.prodname_actions %} para tu cuenta de usuario

Cualquiera puede ver el uso de {% data variables.product.prodname_actions %} para su cuenta de usuario personal.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizar el uso de {% data variables.product.prodname_actions %} para tu organización

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

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
1. Debajo de "{% data variables.product.prodname_actions %}", visualiza los detalles de uso para transferencia de datos de cada organización en tu cuenta empresarial. ![Detalles del uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
