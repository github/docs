---
title: Inhabilitar las restricciones de acceso de las App OAuth para tu organización
intro: 'Organization owners can disable restrictions on the {% data variables.product.prodname_oauth_apps %} that have access to the organization''s resources.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Inhabilitar las Apps de OAuth
---

{% danger %}

**Advertencia**: Cuando inhabilitas las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización, cualquier miembro de la organización autorizará automáticamente el acceso de {% data variables.product.prodname_oauth_app %} a los recursos privados de la organización cuando aprueben una aplicación para el uso en los parámetros de su cuenta personal.

{% enddanger %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Haz clic en **Eliminar restricciones**. ![Botón Eliminar restricciones](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Revisa la información acerca de la inhabilitación de las restricciones de las aplicaciones de terceros y luego haz clic en **Sí, eliminar las restricciones de las aplicaciones**. ![Botón de eliminar confirmación](/assets/images/help/settings/settings-third-party-confirm-disable.png)
