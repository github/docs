---
title: Acerca de las restricciones de acceso a App OAuth
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_apps %} have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Acceso a las Apps de OAuth
---

## Acerca de las restricciones de acceso a App OAuth

Cuando las restricciones de acceso a {% data variables.product.prodname_oauth_app %} están activadas, los miembros de la organización no pueden autorizar el acceso de {% data variables.product.prodname_oauth_app %} a los recursos de la organización. Organization members can request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use, and organization owners receive a notification of pending requests.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Sugerencia**: Cuando una organización no ha configurado las restricciones de acceso a {% data variables.product.prodname_oauth_app %}, cualquier {% data variables.product.prodname_oauth_app %} autorizada por un miembro de la organización también puede acceder a los recursos privados de la organización.

{% endtip %}

To further protect your organization's resources, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes security features like SAML single sign-on. {% data reusables.enterprise.link-to-ghec-trial %}

## Configurar las restricciones de acceso a {% data variables.product.prodname_oauth_app %}

Cuando el propietario de una organización configura las restricciones de acceso a {% data variables.product.prodname_oauth_app %} por primera vez:

- Las **Aplicaciones que son propiedad de la organización** automáticamente ganan acceso a los recursos de la organización.
- **{% data variables.product.prodname_oauth_apps %}** immediately lose access to the organization's resources.
- Las **claves SSH creadas antes de febrero de 2014** inmediatamente pierden acceso a los recursos de la organización (esto incluye claves de implementación y usuarios).
- **SSH keys created by {% data variables.product.prodname_oauth_apps %} during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_apps %}.
- **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_apps %}. Además, no hay acciones de creación, actualización ni eliminación privilegiadas en los recursos públicos de la organización.
- Los **enlaces creados por los usuarios y los enlaces creados antes de mayo de 2014** no se verán afectados.
- Las **bifurcaciones privadas de los repositorios que son propiedad de una organización** están sujetas a las restricciones de acceso de la organización.

## Resolver las fallas de acceso a SSH

Cuando una clave SSH creada antes de febrero de 2014 pierde acceso a una organización con las restricciones de acceso a {% data variables.product.prodname_oauth_app %} activadas, los subsiguientes intentos de acceso a SSH fallarán. Los usuarios se encontrarán con un mensaje de error que los redirecciona a una URL donde pueden aprobar la clave o cargar una clave de confianza en su lugar.

## Webhooks

Cuando se le otorga acceso a la organización a una {% data variables.product.prodname_oauth_app %} una vez que las restricciones están activadas, cualquier webhook preexistente creado por esa {% data variables.product.prodname_oauth_app %} retomará el despacho.

Cuando una organización elimina el acceso de una {% data variables.product.prodname_oauth_app %} previamente aprobada, cualquier webhook preexistente creado por esa aplicación ya no será despachado (estos enlaces de desactivarán, pero no se eliminarán).

## Volver a activar las restricciones de acceso

Si una organización desactiva las restricciones de aplicación de acceso de {% data variables.product.prodname_oauth_app %}, y más tarde las vuelve a activar, automáticamente se le otorga acceso a los recursos de la organización a la {% data variables.product.prodname_oauth_app %} previamente aprobada .

## Leer más

- "[Activar las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Approving {% data variables.product.prodname_oauth_apps %} for your organization](/articles/approving-oauth-apps-for-your-organization)"
- "[Revisar las integraciones instaladas de tu organización](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Denegar el acceso a una {% data variables.product.prodname_oauth_app %} anteriormente aprobada para tu organización](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Desactivar las restricciones de acceso de {% data variables.product.prodname_oauth_app %} para tu organización](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Requesting organization approval for {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Autorizar las {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
