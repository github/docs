---
title: Administrar tu límite de gastos para GitHub Actions
intro: 'Puedes configurar un límite de gastos para el uso de {{ site.data.variables.product.prodname_actions }}.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

### Acerca de los límites de gastos para {{ site.data.variables.product.prodname_actions }}

{{ site.data.reusables.github-actions.actions-billing }} {{ site.data.reusables.github-actions.actions-spending-limit }}

Puedes configurar un límite de gastos mayor o, en algunas cuentas, permitir gastos ilimitados. Si pagas mediante factura los gastos de tu cuenta empresarial u organizacional, puedes prepagar los excedentes para configurar un límite de gastos superior. The spending limit applies to your combined overages for {{ site.data.variables.product.prodname_actions }} and {{ site.data.variables.product.prodname_registry }}. For more information about pricing for {{ site.data.variables.product.prodname_actions }} usage, see "[About billing for {{ site.data.variables.product.prodname_actions }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

Tan pronto como configures un límite de gastos mayor a $0, serás responsable de cualquier excedente que haya ocurrido anteriormente. Por ejemplo, si tu organización utiliza {{ site.data.variables.product.prodname_team }}, no permite excedentes, y crea artefactos de flujo de trabajo que incrementan tu uso de almacenamiento para el mes en curso de 1.9GB a 2.1GB, utilizarás un poco más de almacenamiento que los 2Gb incluidos en tu producto.

Ya que no has habilitado los excedentes, tu siguiente intento de publicar una versión del paquete no será exitosa. No recibirás una cuenta por esos 0.1GB extras en ese mes. Sin embargo, si habilitas los excedentes en algún mes posterior, tu primera factura incluirá ese 0.1GB de excedente que ya utilizaste adicional a cualquier otro excedente del ciclo de facturación en curso.

### Administrar el límite de gastos de {{ site.data.variables.product.prodname_actions }} para tu cuenta de usuario

Cualquiera puede administrar el límite de gastos de {{ site.data.variables.product.prodname_actions }} para su propia cuenta de usuario.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Administrar el límite de gastos de {{ site.data.variables.product.prodname_actions }} para tu organización

Los propietarios de las organizaciones pueden administrar el límite de gastos de {{ site.data.variables.product.prodname_actions }} para una organización.

Si pagas mediante factura por tu cuenta organizacional, no podrás administrar el límite de gastos para tu cuenta empresarial en {{ site.data.variables.product.product_name }}. Si quieres permitir que los repositorios que pertenecen a tu organización utilicen {{ site.data.variables.product.prodname_actions }} con mayor almacenamiento o transferencia de datos de los que se incluye predeterminadamente por repositorio, puedes hacer prepagos por los excedentes. Ya que los excedentes deben prepagarse, no puedes habilitar los gastos ilimitados en cuentas que se paguen mediante factura. Tu límite de gastos será de 150% de la cantidad que hayas prepagado. Si tienes cualquier duda, [contacta a nuestro equipo de administración de cuentas](https://enterprise.github.com/contact).

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Administrar el límite de gastos de {{ site.data.variables.product.prodname_actions }} para tu cuenta empresarial

Enterprise owners and billing managers can manage the spending limit for {{ site.data.variables.product.prodname_actions }} for an enterprise account.

{{ site.data.reusables.github-actions.spending-limit-enterprise-account }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Debajo de "uso mensual de {{ site.data.variables.product.prodname_actions }} y de paquetes", da clic en **Administración de costos**. ![Pestaña de administración de costos](/assets/images/help/settings/cost-management-tab-enterprise.png)
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}
