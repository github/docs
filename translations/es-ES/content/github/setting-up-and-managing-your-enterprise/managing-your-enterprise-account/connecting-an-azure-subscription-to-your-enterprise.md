---
title: Conectar una suscripción de Azure a tu empresa
intro: 'Puedes utilizar tu Acuerdo de Microsoft Enterprise para habilitar y pagar por el uso de las {% data variables.product.prodname_actions %} y del {% data variables.product.prodname_registry %} más allá de las cantidades que se incluyen para tu empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  free-pro-team: '*'
---

### Acerca de las suscripciones a Azure y de {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta las secciones "[Acerca de la facturación para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)" y "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

Una vez que conectes una suscripción de Azure, también podrás administrar tu límite de gastos. Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu cuenta, consulta las secciones "[Administrar tu límite de gastos para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)" y "[Administrar tu límite de gastos para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

### Conectar tu suscripción de Azure con tu cuenta empresarial

Para conectar tu suscripción de Azure, debes tener permisos de propietario para la suscripción.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Debajo de "Información de Pago", da clic en **Agregar una suscripción de Azure**.
1. Para iniciar sesión en tu cuenta de Microsoft, sigue las indicaciones.
1. Revisa la indicación de "Permisos solicitados". Si estás de acuerdo con las condiciones, da clic en **Aceptar**.
1. Debajo de "Selecciona una suscripción", selecciona la ID de Suscripción de Azure que quieras conectar a tu empresa.
1. Da clic en **Conectar**.

### Desconectar tu suscripción de Azure de tu cuenta empresarial

Después de que desconectas tu suscripción de Azure de tu cuenta empresarial, tu uso ya no podrá exceder las cantidades que se incluyen en tu plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Debajo de "Suscripción de Azure", a la derecha de la ID de suscripción que quieres desconectar, haz clic en **{% octicon "trash" aria-label="The trash icon" %}**.
1. Revisa el mensaje emergente y da clic en **Eliminar**.
