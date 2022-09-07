---
title: Subir de categoría tu suscripción de GitHub
intro: 'Puedes mejorar la suscripción de cualquier tipo de cuenta de {% data variables.product.product_location %} en cualquier momento.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Mejorar tu suscripción
---

## Acerca de las mejoras de tu suscripción

{% data reusables.accounts.accounts-billed-separately %}

Cuando mejoras las suscripción de una cuenta, esta mejora cambia las características de pago disponibles solo para esa cuenta y no de el resto de las cuentas que utilices.

## Subir de categoría la suscripción de tu cuenta personal

Puedes mejorar tu cuenta personal de {% data variables.product.prodname_free_user %} a {% data variables.product.prodname_pro %} para obtener herramientas de revisión de código avanzadas en repositorios privados que pertenezcan a tu cuenta personal. El mejorar tu cuenta personal no afecta a las organizaciones que pudieras administrar ni a los repositorios que pertenezcan a dichas organizaciones. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. Junto a "Plan actual", haz clic en **Mejorar**. ![Botón para actualizar](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. Debajo de "Pro" en la página de "Comparar planes", haz clic en **Actualizar a Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Administrar la suscripción de tu organización

Puedes mejorar la suscripción de tu organización para que tenga un producto diferente, agregarle plazas a tu producto existente o cambiar de un plan de pago por repositorio a uno por usuario.

### Subir de categoría la suscripción de tu organización

Puedes mejorar a tu organización desde {% data variables.product.prodname_free_team %} para organizaciones a {% data variables.product.prodname_team %} para acceder a herramientas de administración y colaboración avanzadas para equipos, o mejorarla a {% data variables.product.prodname_ghe_cloud %} para tener controles adicionales de seguridad, cumplimiento y despliegue. El mejorar una organización no afecta a tu cuenta personal o a los repositorios que pertenezcan a ella. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Próximos pasos para las organizaciones que usan {% data variables.product.prodname_ghe_cloud %}

Si mejoras a tu organización a {% data variables.product.prodname_ghe_cloud %}, puedes configurar la administración de accesos e identidad para la misma. Para obtener más información, consulta la sección "[Administrar el inicio de sesión único de SAML de tu organización](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Si quisieras utilizar una cuenta empresarial con {% data variables.product.prodname_ghe_cloud %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Para obtener más información, consulta la sección "[Acerca de las cuentas empresariales](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

### Agregar asientos a tu organización

Si quisieras que usuarios adicionales tengan acceso a los repositorios privados de {% data variables.product.prodname_team %} en tu organización, puedes comprar más plazas en cualquier momento.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Cambiar tu organización de precio por repositorio a precio por usuario

{% data reusables.dotcom_billing.switch-legacy-billing %}Para obtener más información, consulta "[Acerca de los precios por usuario](/articles/about-per-user-pricing)".

{% data reusables.organizations.billing-settings %}
5. A la derecha de tu nombre de plan, utiliza el menú desplegable de **Editar** y selecciona **Editar plan**. ![Menú desplegable de editar](/assets/images/help/billing/per-user-upgrade-button.png)
6. A la derecha de "Herramientas avanzadas para equipos", da clic en **Mejorar ahora**. ![Botón de mejorar ahora](/assets/images/help/billing/per-user-upgrade-now-button.png)
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Solucionar problemas de un error 500 al subir de categoría

{% data reusables.dotcom_billing.500-error %}

## Leer más

- "Productos de [{% data variables.product.prodname_dotcom %}](/articles/github-s-products)"
- "[¿Cómo afecta subir o bajar de categoría al proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Acerca de la facturación en {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)".
