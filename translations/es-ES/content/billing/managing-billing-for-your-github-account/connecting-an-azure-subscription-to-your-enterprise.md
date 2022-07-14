---
title: Conectar una suscripción de Azure a tu empresa
intro: 'Puedes utilizar tu Acuerdo de Microsoft Enterprise para habilitar y pagar por el uso de {% data variables.product.prodname_actions %}, del {% data variables.product.prodname_registry %} y de los {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Conectar una suscripción de Azure
---

## Acerca de las suscripciones a Azure y de {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta las secciones "[Acerca de la facturación para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)" y "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% note %}

**Nota:** Si tu cuenta empresarial está en un Acuerdo de Microsoft Enterprise, conectar una suscripción de Azure es la única forma de utilizar {% data variables.product.prodname_actions %} y el {% data variables.product.prodname_registry %} más allá de las cantidades incluidas o para utilizar los {% data variables.product.prodname_codespaces %} en general.

{% endnote %}

Después de que conectes una suscripción de Azure, también podrás administrar tus límites de gastos.

- "[Administrar tu límite de gastos para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Administrar tu límite de gastos para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[Administrar tu límite de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## Conectar tu suscripción de Azure con tu cuenta empresarial

Para conectar tu suscripción de Azure, debes tener permisos de propietario para la suscripción.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Debajo de "Información de Pago", da clic en **Agregar una suscripción de Azure**.
1. Para iniciar sesión en tu cuenta de Microsoft, sigue las indicaciones.
1. Revisa la indicación de "Permisos solicitados". Si estás de acuerdo con las condiciones, da clic en **Aceptar**.
1. Debajo de "Selecciona una suscripción", selecciona la ID de Suscripción de Azure que quieras conectar a tu empresa.

   {% note %}

   **Nota:** La validación de permisos de suscripción de {% data variables.product.company_short %} solicita acceso de solo lectura para mostrar la lista de suscripciones disponibles. Para seleccionar una suscripción de Azure, debes ser el propietario de los permisos a la suscripción. Si el inquilino predeterminado no cuenta con los permisos correctos, puede que necesites especificar una ID de inquilino diferente. Para obtener más información, consulta la [Plataforma de identidad de Microsoft y flujo de código de autorizaciones OAuth 2.0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) en los Documentos de Microsoft.

   {% endnote %}
1. Da clic en **Conectar**.

## Desconectar tu suscripción de Azure de tu cuenta empresarial

Después de que desconectas tu suscripción de Azure de tu cuenta empresarial, tu uso ya no podrá exceder las cantidades que se incluyen en tu plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Debajo de "Suscripción de Azure", a la derecha de la ID de suscripción que quieres desconectar, haz clic en **{% octicon "trash" aria-label="The trash icon" %}**.
1. Revisa el mensaje emergente y da clic en **Eliminar**.
