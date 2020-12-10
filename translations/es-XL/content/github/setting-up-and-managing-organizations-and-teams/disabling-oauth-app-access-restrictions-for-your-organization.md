---
title: Inhabilitar las restricciones de acceso de las App OAuth para tu organización
intro: 'Los propietarios de la organización pueden inhabilitar las restricciones de las {% data variables.product.prodname_oauth_app %} que tienen acceso a los recursos de la organización.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% danger %}

**Advertencia**: Cuando inhabilitas las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización, cualquier miembro de la organización autorizará automáticamente el acceso de {% data variables.product.prodname_oauth_app %} a los recursos privados de la organización cuando aprueben una aplicación para el uso en los parámetros de su cuenta personal.

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Haz clic en **Eliminar restricciones**. ![Botón Eliminar restricciones](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Revisa la información acerca de la inhabilitación de las restricciones de las aplicaciones de terceros y luego haz clic en **Sí, eliminar las restricciones de las aplicaciones**. ![Botón para confirmar la eliminación](/assets/images/help/settings/settings-third-party-confirm-disable.png)
