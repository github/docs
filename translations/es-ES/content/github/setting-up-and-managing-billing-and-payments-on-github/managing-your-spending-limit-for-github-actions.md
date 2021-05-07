---
title: Administrar tu límite de gastos para GitHub Actions
intro: 'Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### Acerca de los límites de gastos para {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %}Para obtener más información acerca de los costos de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de los costos de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

Si compraste {% data variables.product.prodname_enterprise %} mediante un Acuerdo de Microsoft Enterprise, puedes conectar tu ID de Suscripción de Azure a tu cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_actions %} más allá de las cantidades que se incluyen en tu cuenta. Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)".

Tan pronto como configures un límite de gastos diferente a $0, serás responsable de cualquier uso excedente que se suscite en el periodo de facturación actual. Por ejemplo, si tu organización utiliza {% data variables.product.prodname_team %}, no permite excedentes, y crea artefactos de flujo de trabajo que incrementan tu uso de almacenamiento para el mes en curso de 1.9GB a 2.1GB, utilizarás un poco más de almacenamiento que los 2Gb incluidos en tu producto.

Ya que no has habilitado los excedentes, tu siguiente intento de crear un artefacto de un flujo de trabajo fallará. No recibirás una cuenta por esos 0.1GB extras en ese mes. Sin embargo, si habilitas los excedentes, tu primer factura incluirá el excedente de 0.1GB del ciclo de facturación actual, así como cualquier otro excedente que acumules.

### Administrar el límite de gastos de {% data variables.product.prodname_actions %} para tu cuenta de usuario

Cualquiera puede administrar el límite de gastos de {% data variables.product.prodname_actions %} para su propia cuenta de usuario.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Administrar el límite de gastos de {% data variables.product.prodname_actions %} para tu organización

Los propietarios de las organizaciones pueden administrar el límite de gastos de {% data variables.product.prodname_actions %} para una organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Administrar el límite de gastos de {% data variables.product.prodname_actions %} para tu cuenta empresarial

Los propietarios de la empresa y gerentes de facturación pueden administrar el límite de gastos para {% data variables.product.prodname_actions %} para una cuenta empresarial.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "
uso mensual de Paquetes y {% data variables.product.prodname_actions %}", da clic en **Administración de costos**.
  ![Pestaña de administración de costos](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
