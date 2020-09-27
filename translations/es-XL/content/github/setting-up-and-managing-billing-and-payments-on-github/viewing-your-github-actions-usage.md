---
title: Visualizar el uso de tu GitHub Actions
intro: 'Puedes ver los detalles de tu uso de minutos y almacenamiento para {{ site.data.variables.product.prodname_actions }}.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

También puedes ver los minutos de ejecución facturables para los jobs en una ejecución de flujo de trabajo individual. Para obtener más información, consulta la sección "[Administrar la ejecución de un flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)".

### Visualizar el uso de {{ site.data.variables.product.prodname_actions }} para tu cuenta de usuario

Cualquiera puede ver el uso de {{ site.data.variables.product.prodname_actions }} para su cuenta de usuario personal.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Visualizar el uso de {{ site.data.variables.product.prodname_actions }} para tu organización

Organization owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {{ site.data.variables.product.prodname_actions }} usage in the organization billing page.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Visualizar el uso de {{ site.data.variables.product.prodname_actions }} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {{ site.data.variables.product.prodname_actions }} para una cuenta empresarial.

{% note %}

**Nota:** Los detalles de facturación para las cuentas empresariales no resumen el uso de los minutos para cada sistema operativo. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Debajo de "{{ site.data.variables.product.prodname_actions }}", visualiza los detalles de uso para transferencia de datos de cada organización en tu cuenta empresarial. ![Detalles del uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
