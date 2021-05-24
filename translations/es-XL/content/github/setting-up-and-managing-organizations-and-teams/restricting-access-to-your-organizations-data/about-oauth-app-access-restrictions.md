---
title: Acerca de las restricciones de acceso a App OAuth
intro: 'Las organizaciones pueden elegir qué {% data variables.product.prodname_oauth_app %}s tienen acceso a sus repositorios y otros recursos al activar las restricciones de acceso a {% data variables.product.prodname_oauth_app %}.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
---
Cuando las restricciones de acceso a {% data variables.product.prodname_oauth_app %} están activadas, los miembros de la organización no pueden autorizar el acceso de {% data variables.product.prodname_oauth_app %} a los recursos de la organización. Los miembros de la organización pueden solicitar la aprobación de los propietarios para las {% data variables.product.prodname_oauth_app %}s que quieran usar y los propietarios de la organización reciben una notificación de solicitudes pendientes.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Sugerencia**: Cuando una organización no ha configurado las restricciones de acceso a {% data variables.product.prodname_oauth_app %}, cualquier {% data variables.product.prodname_oauth_app %} autorizada por un miembro de la organización también puede acceder a los recursos privados de la organización.

{% endtip %}

### Configurar las restricciones de acceso a {% data variables.product.prodname_oauth_app %}

Cuando el propietario de una organización configura las restricciones de acceso a {% data variables.product.prodname_oauth_app %} por primera vez:

- Las **Aplicaciones que son propiedad de la organización** automáticamente ganan acceso a los recursos de la organización.
- Las **{% data variables.product.prodname_oauth_app %}s** inmediatamente pierden acceso a los recursos de la organización.
- Las **claves SSH creadas antes de febrero de 2014** inmediatamente pierden acceso a los recursos de la organización (esto incluye claves de implementación y usuarios).
- Las **claves SSH creadas por {% data variables.product.prodname_oauth_app %}s durante o después de febrero de 2014** inmediatamente pierden acceso a los recursos de la organización.
- Las **entregas de enlace de los repositorios privados de una organización** ya no serán enviadas a {% data variables.product.prodname_oauth_app %}s no aprobadas.
- El **acceso de API** a los recursos privados de la organización no está disponible para las {% data variables.product.prodname_oauth_app %}s no aprobadas. Además, no hay acciones de creación, actualización ni eliminación privilegiadas en los recursos públicos de la organización.
- Los **enlaces creados por los usuarios y los enlaces creados antes de mayo de 2014** no se verán afectados.
- Las **bifurcaciones privadas de los repositorios que son propiedad de una organización** están sujetas a las restricciones de acceso de la organización.

### Resolver las fallas de acceso a SSH

Cuando una clave SSH creada antes de febrero de 2014 pierde acceso a una organización con las restricciones de acceso a {% data variables.product.prodname_oauth_app %} activadas, los subsiguientes intentos de acceso a SSH fallarán. Los usuarios se encontrarán con un mensaje de error que los redirecciona a una URL donde pueden aprobar la clave o cargar una clave de confianza en su lugar.

### Webhooks

Cuando se le otorga acceso a la organización a una {% data variables.product.prodname_oauth_app %} una vez que las restricciones están activadas, cualquier webhook preexistente creado por esa {% data variables.product.prodname_oauth_app %} retomará el despacho.

Cuando una organización elimina el acceso de una {% data variables.product.prodname_oauth_app %} previamente aprobada, cualquier webhook preexistente creado por esa aplicación ya no será despachado (estos enlaces de desactivarán, pero no se eliminarán).

### Volver a activar las restricciones de acceso

Si una organización desactiva las restricciones de aplicación de acceso de {% data variables.product.prodname_oauth_app %}, y más tarde las vuelve a activar, automáticamente se le otorga acceso a los recursos de la organización a la {% data variables.product.prodname_oauth_app %} previamente aprobada .

### Leer más

- "[Activar las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Aprobar {% data variables.product.prodname_oauth_app %}s para tu organización](/articles/approving-oauth-apps-for-your-organization)"
- "[Revisar las integraciones instaladas de tu organización](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Denegar el acceso a una {% data variables.product.prodname_oauth_app %} anteriormente aprobada para tu organización](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Desactivar las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Solicitar aprobación de la organización para las {% data variables.product.prodname_oauth_app %}s](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Autorizar las{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps)"
