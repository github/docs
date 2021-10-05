---
title: Habilitar las restricciones de acceso de las App OAuth para tu organización
intro: 'Organization owners can enable {% data variables.product.prodname_oauth_app %} access restrictions to prevent untrusted apps from accessing the organization''s resources while allowing organization members to use {% data variables.product.prodname_oauth_apps %} for their personal accounts.'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Habilitar las Apps de OAuth
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Advertencias**:
- Enabling {% data variables.product.prodname_oauth_app %} access restrictions will revoke organization access for all previously authorized {% data variables.product.prodname_oauth_apps %} and SSH keys. Para obtener más información, consulta "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)".
- Una vez que hayas configurado las restricciones de acceso de {% data variables.product.prodname_oauth_app %}, asegúrate de autorizar nuevamente toda {% data variables.product.prodname_oauth_app %} que requiera acceso a los datos privados de la organización de manera continua. Todos los miembros de la organización deberán crear nuevas claves SSH y la organización deberá crear nuevas llaves de implementación, según sea necesario.
- Cuando se habilitan las restricciones de acceso de {% data variables.product.prodname_oauth_app %}, las aplicaciones pueden usar un token de OAuth para acceder a información acerca de transacciones en {% data variables.product.prodname_marketplace %}.

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. En "Política de acceso de aplicaciones de terceros", haz clic en **Configurar restricciones de acceso de aplicaciones**. ![Botón Configurar restricciones](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Luego de revisar la información acerca de las restricciones de acceso de las aplicaciones de terceros, haz clic en **Restringir el acceso de aplicaciones de terceros**. ![Botón Confirmar restricciones](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
