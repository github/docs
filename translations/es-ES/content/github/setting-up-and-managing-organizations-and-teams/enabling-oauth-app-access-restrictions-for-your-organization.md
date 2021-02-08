---
title: Habilitar las restricciones de acceso de las App OAuth para tu organización
intro: 'Los propietarios de la organización pueden habilitar restricciones de acceso de las {% data variables.product.prodname_oauth_app %} para evitar que las aplicaciones que no sean confiables accedan a los recursos de la organización y para permitir que los miembros de la organización usen las {% data variables.product.prodname_oauth_app %} para sus cuentas personales.'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Advertencias**:
- Habilitar las restricciones de acceso de las {% data variables.product.prodname_oauth_app %} revocará los acesos de la organización a todas las {% data variables.product.prodname_oauth_app %} y claves SSH que hayan sido previamente autorizadas. Para obtener más información, consulta "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)".
- Una vez que hayas configurado las restricciones de acceso de {% data variables.product.prodname_oauth_app %}, asegúrate de autorizar nuevamente toda {% data variables.product.prodname_oauth_app %} que requiera acceso a los datos privados de la organización de manera continua. Todos los miembros de la organización deberán crear nuevas claves SSH y la organización deberá crear nuevas llaves de implementación, según sea necesario.
- Cuando se habilitan las restricciones de acceso de {% data variables.product.prodname_oauth_app %}, las aplicaciones pueden usar un token de OAuth para acceder a información acerca de transacciones en {% data variables.product.prodname_marketplace %}.

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. En "Política de acceso de aplicaciones de terceros", haz clic en **Configurar restricciones de acceso de aplicaciones**. ![Botón Configurar restricciones](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Luego de revisar la información acerca de las restricciones de acceso de las aplicaciones de terceros, haz clic en **Restringir el acceso de aplicaciones de terceros**. ![Botón Confirmar restricciones](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
