---
title: Administrar tu límite de gastos para GitHub Packages
intro: 'Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Tu límite de gastos
---

## Acerca de los límites de gastos para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %}Para obtener más información acerca de los costos de utilización de {% data variables.product.prodname_registry %}, consulta la sección "[Acerca de los costos de {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% ifversion ghec %}
Si compraste {% data variables.product.prodname_enterprise %} mediante un Acuerdo de Microsoft Enterprise, puedes conectar tu ID de Suscripción de Azure a tu cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_registry %} más allá de las cantidades que se incluyen en tu cuenta. Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

Tan pronto como configures un límite de gastos diferente a $0, serás responsable de cualquier uso excedente que se suscite en el periodo de facturación actual. Por ejemplo, si tu organización utiliza {% data variables.product.prodname_team %}, no permite excedentes, y publica una nueva versión de un paquete privado que incrementa tu uso de almacenamiento para el mes en curso de 1.9GB a 2.1GB, la publicación de esta versión usará un poco más de los 2GB que se incluyen en tu paquete.

Ya que no has habilitado los excedentes, tu siguiente intento de publicar una versión del paquete no será exitosa. No recibirás una cuenta por esos 0.1GB extras en ese mes. Sin embargo, si habilitas los excedentes, tu primer factura incluirá el excedente de 0.1GB del ciclo de facturación actual, así como cualquier otro excedente que acumules.

## Administrar el límite de gastos del {% data variables.product.prodname_registry %} en tu cuenta personal

Cualquiera puede administrar el límite de gastos del {% data variables.product.prodname_registry %} en su propia cuenta personal.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Administrar el límite de gastos de {% data variables.product.prodname_registry %} para tu organización

Los propietarios de las organizaciones pueden administrar el límite de gastos de {% data variables.product.prodname_registry %} para una organización.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %}
{% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Administrar el límite de gastos de {% data variables.product.prodname_registry %} para tu cuenta empresarial

Los propietarios de la empresa y gerentes de facturación pueden administrar el límite de gastos para {% data variables.product.prodname_registry %} para una cuenta empresarial.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Sobre "uso mensual de paquetes y {% data variables.product.prodname_actions %}", haz clic en **Límite de gastos**. ![Pestaña de límite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
{% endif %}

## Administrar las notificaciones de uso y límite de gastos
{% data reusables.billing.email-notifications %}
