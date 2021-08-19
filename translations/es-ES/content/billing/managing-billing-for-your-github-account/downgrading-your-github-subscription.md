---
title: Bajar de categoría tu suscripción de GitHub
intro: 'Puedes bajar tu suscripción de nivel para cualquier tipo de cuenta de {% data variables.product.product_name %} en cualquier momento.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan/
  - /articles/how-do-i-cancel-my-account/
  - /articles/downgrading-a-user-account-to-free/
  - /articles/removing-paid-seats-from-your-organization/
  - /articles/downgrading-your-organization-s-paid-seats/
  - /articles/downgrading-your-organization-s-billing-plan/
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free/
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free/
  - /articles/downgrading-your-organization-to-free/
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan/
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan/
  - /articles/downgrading-your-github-billing-plan/
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
---

### Bajar de nivel tu suscripción de {% data variables.product.product_name %}

Cuando bajas de nivel tu suscricpión de cuenta de usuario o de organización, los precios y características cambian y toman efecto en tu siguiente fecha de facturación. Los cambios a tu suscripción de cuenta de usuario u organización no afectan aquellas suscripciones o pagos para otras características pagadas de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[¿Cómo afecta subir o bajar de categoría el proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)."

### Bajar de nivel tu suscripción de cuenta de usuario

Si bajas tu cuenta de usuario de nivel desde {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, esta perderá acceso a las herramientas avanzadas de revisión de código en los repositorios privados. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
1. Debajo de "Plan actual", utiliza el menú desplegable **Editar** y haz clic en **Bajar de categoría a gratuito**. ![Botón Downgrade to free (Bajar de categoría a gratis)](/assets/images/help/billing/downgrade-to-free.png)
5. Lee la información sobre de las características a las cuales perderá acceso tu cuenta de usuario en tu siguiente fecha de facturación, y luego da clic en **Entiendo. Bajar de nivel**. ![Botón de proceder con la baja de categoría](/assets/images/help/billing/continue-with-downgrade.png)

Si publicaste un sitio de {% data variables.product.prodname_pages %} en un repositorio privado y añadiste un dominio personalizado, retira o actualiza tus registros de DNS antes de bajarlo de nivel desde {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, para evitar el riesgo de que te ganen el dominio. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

### Bajar de nivel tu suscripción de orgnización

{% data reusables.dotcom_billing.org-billing-perms %}

Si bajas tu organización de nivel desde {% data variables.product.prodname_team %} a {% data variables.product.prodname_free_team %} para organizaciones, la cuenta perderá acceso a las herramientas de administración y colaboración para equipos.

Si bajas a tu organización de nivel desde {% data variables.product.prodname_ghe_cloud %} a {% data variables.product.prodname_team %} o {% data variables.product.prodname_free_team %}, la cuenta perderá acceso a los controles avanzados de seguridad, cumplimiento y despliegue. {% data reusables.gated-features.more-info %}

{% data reusables.organizations.billing-settings %}
1. Debajo de "Plan actual", utiliza el menú desplegable **Editar** y haz clic en la opción a la que quieras bajar. ![Botón Bajar de categoría](/assets/images/help/billing/downgrade-option-button.png)
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}

### Bajar de nivel la suscripción de una organización con precios tradicionales por repositorio

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %}Para obtener más información, consulta la sección "[Cambiar a tu organización de precios por repositorio a precios por usuario](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)".

{% data reusables.organizations.billing-settings %}
5. Debajo de "Suscripciones", selecciona el menú desplegable de "Editar" y da clic en **Editar plan**. ![Menú desplegable de Editar Plan](/assets/images/help/billing/edit-plan-dropdown.png)
1. Debajo de "Facturación/Planes", a un costado del plan que quieras cambiar, da clic en **Bajar categoría**. ![Botón Bajar de categoría](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Ingresa la razón por la cual estás degradando tu cuenta y luego haz clic en **Degradar plan**. ![Caja de texto para la razón de degradar la versión y botón de degradar](/assets/images/help/billing/downgrade-plan-button.png)

### Eliminar asientos pagos de tu organización

Para reducir el número de asientos pagos que usa tu organización, puedes eliminar miembros de tu organización o convertirlos en colaboradores externos y darles acceso únicamente a los repositorios públicos. Para obtener más información, consulta:
- "[Eliminar un miembro de tu organización](/articles/removing-a-member-from-your-organization)"
- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Administrar el acceso de un individuo al repositorio de una organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"

{% data reusables.organizations.billing-settings %}
1. Debajo de "Plan actual", utiliza el menú desplegable **Edit** y haz clic en **Eliminar plazas**. ![menú desplegable para eliminar plazas](/assets/images/help/billing/remove-seats-dropdown.png)
1. En "Eliminar asientos" selecciona el número de asientos pagos de la categoría a la que deseas bajar. ![opción de eliminar plazas](/assets/images/help/billing/remove-seats-amount.png)
1. Revisa la información sobre tu nuevo pago en tu siguiente fecha de facturación, posteriormente, da clic en **Eliminar plazas**. ![botón de eliminar plazas](/assets/images/help/billing/remove-seats-button.png)

### Leer más

- "Productos de [{% data variables.product.prodname_dotcom %}](/articles/github-s-products)"
- "[¿Cómo afecta subir o bajar de categoría al proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Acerca de la facturación en {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)".
- "[Eliminar un método de pago](/articles/removing-a-payment-method)"
- "[Acerca del precio por usuario](/articles/about-per-user-pricing)"
