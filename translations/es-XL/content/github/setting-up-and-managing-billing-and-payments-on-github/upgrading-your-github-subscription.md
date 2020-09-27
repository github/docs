---
title: Subir de categoría tu suscripción de GitHub
intro: 'Puedes subir de categoría la suscripción para cualquier tipo de {{ site.data.variables.product.product_name }} cuenta en cualquier momento.'
redirect_from:
  - /articles/upgrading-your-personal-account-s-billing-plan/
  - /articles/upgrading-your-personal-account/
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal/
  - /articles/500-error-while-upgrading/
  - /articles/upgrading-your-organization-s-billing-plan/
  - /articles/changing-your-organization-billing-plan/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal/
  - /articles/upgrading-your-organization-account/
  - /articles/switching-from-per-repository-to-per-user-pricing/
  - /articles/adding-seats-to-your-organization/
  - /articles/upgrading-your-github-billing-plan/
  - /articles/upgrading-your-github-subscription
versions:
  free-pro-team: '*'
---

### Subir de categoría la suscripción de tu cuenta personal

Puedes mejorar tu cuenta personal desde {{ site.data.variables.product.prodname_free_user }} a {{ site.data.variables.product.prodname_pro }} para obtener herramientas avanzadas de revisión de código en repositorios privados. {{ site.data.reusables.gated-features.more-info }}

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
4. Junto a "{{ site.data.variables.product.prodname_free_user }}", haz clic en **Upgrade** (Subir de categoría). ![Botón Upgrade (Bajar de categoría)](/assets/images/help/billing/settings_billing_user_upgrade.png)
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### Subir de categoría la suscripción de tu organización

Puedes mejorar a tu organización desde {{ site.data.variables.product.prodname_free_team }} para organizaciones a {{ site.data.variables.product.prodname_team }} para acceder a herramientas de administración y colaboración avanzadas para equipos, o mejorarla a {{ site.data.variables.product.prodname_ghe_cloud }} para tener controles adicionales de seguridad, cumplimiento y despliegue. {{ site.data.reusables.gated-features.more-info-org-products }}

{{ site.data.reusables.dotcom_billing.org-billing-perms }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.upgrade_org }}
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

#### Próximos pasos para las organizaciones que usan {{ site.data.variables.product.prodname_ghe_cloud }}

Si mejoras a tu organización a {{ site.data.variables.product.prodname_ghe_cloud }}, puedes configurar la administración de accesos e identidad para la misma. Para obtener más información, consulta "[Administrar el inicio de sesión único de SAML para tu organización](/articles/managing-saml-single-sign-on-for-your-organization)".

Si quisieras utilizar una cuenta empresarial con {{ site.data.variables.product.prodname_ghe_cloud }}, contacta a {{ site.data.variables.contact.contact_enterprise_sales }}. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/articles/about-enterprise-accounts)".

### Agregar asientos a tu organización

Si quisieras que usuarios adicionales tengan acceso a los repositorios privados de {{ site.data.variables.product.prodname_team }} en tu organización, puedes comprar más plazas en cualquier momento.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.add-seats }}
{{ site.data.reusables.dotcom_billing.number-of-seats }}
{{ site.data.reusables.dotcom_billing.confirm-add-seats }}

### Cambiar tu organización de precio por repositorio a precio por usuario

{{ site.data.reusables.dotcom_billing.switch-legacy-billing }}Para obtener más información, consulta "[Acerca de los precios por usuario](/articles/about-per-user-pricing)".

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
5. A la derecha de tu nombre de plan, utiliza el menú desplegable de **Editar** y selecciona **Editar plan**. ![Menú desplegable de editar](/assets/images/help/billing/per-user-upgrade-button.png)
6. A la derecha de "Herramientas avanzadas para equipos", da clic en **Mejorar ahora**. ![Botón de mejorar ahora](/assets/images/help/billing/per-user-upgrade-now-button.png)
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### Solucionar problemas de un error 500 al subir de categoría

{{ site.data.reusables.dotcom_billing.500-error }}

### Leer más

- "Productos de [{{ site.data.variables.product.prodname_dotcom }}](/articles/github-s-products)"
- "[¿Cómo afecta subir o bajar de categoría al proceso de facturación?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Acerca de la facturación en {{ site.data.variables.product.prodname_dotcom }}](/articles/about-billing-on-github)".
